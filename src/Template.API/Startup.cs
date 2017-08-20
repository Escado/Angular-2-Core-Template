using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Npgsql;
using Template.Common;
using Template.Entities.Helpers;
using Template.Repositories.Helpers;
using Template.Repositories.Repositories;
using Template.Repositories.Base;
using Template.Services.Services;
using Template.API.Middlewares;
using Microsoft.IdentityModel.Tokens;
using Template.Entities.EnumStrings;

namespace Template.API
{
    public class Startup
    {
        private static IConfigurationRoot _config;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile($"appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            _config = Configuration;
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            var migrationNamespace = Configuration["ConfigSettings:MigrationNamespace"];
            BaseRepository.ConnectionString = connectionString;
            MigrationHelper.CreateDbIfNoneExists(connectionString);
            ViewRepository viewRepository = new ViewRepository(new NpgsqlConnection(connectionString));
            viewRepository.DropViews();
            MigrationHelper.MigrateUp(connectionString, migrationNamespace);
            viewRepository.CreateViews();
            MapperHelper.MapAllEntities();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthorization(opts =>
            {
                opts.AddPolicy(ViewClaimTypes.ViewOrders, policy => policy.RequireClaim(ViewClaimTypes.ViewOrders, "true"));
                opts.AddPolicy(ViewClaimTypes.ViewProducts, policy => policy.RequireClaim(ViewClaimTypes.ViewProducts, "true"));
                opts.AddPolicy(ViewClaimTypes.ViewUsers, policy => policy.RequireClaim(ViewClaimTypes.ViewUsers, "true"));

                opts.AddPolicy(EditClaimTypes.EditOrders, policy => policy.RequireClaim(EditClaimTypes.EditOrders, "true"));
                opts.AddPolicy(EditClaimTypes.EditProducts, policy => policy.RequireClaim(EditClaimTypes.EditProducts, "true"));
                opts.AddPolicy(EditClaimTypes.EditUsers, policy => policy.RequireClaim(EditClaimTypes.EditUsers, "true"));
            });

            // Configurations
            services.AddScoped<NpgsqlConnection>(provider => new NpgsqlConnection(Configuration.GetConnectionString("DefaultConnection")));
            services.Configure<ConfigSettings>(Configuration.GetSection("ConfigSettings"));

            // Repositories
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IIdentityClaimRepository, IdentityClaimRepository>();
            services.AddScoped<IUserClaimRepository, UserClaimRepository>();

            //Services
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();

            //External services
            services.AddScoped<IPasswordHashService, PasswordHashService>();

            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseMiddleware<ExceptionMiddleware>();
#if !RELEASE
            app.UseCors(builder =>
                builder.WithOrigins("http://localhost:52672").AllowAnyHeader().AllowAnyMethod());
#endif


            app.UseJwtBearerAuthentication(new JwtBearerOptions()
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidIssuer = Configuration["ConfigSettings:TokenIssuer"],
                    ValidAudience = Configuration["ConfigSettings:TokenAudience"],
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Convert.FromBase64String(Configuration["ConfigSettings:TokenSecret"])),
                    ValidateLifetime = true
                }
            });
            app.UseMvc();

        }
    }
}
