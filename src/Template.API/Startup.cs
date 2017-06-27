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

namespace Template.API
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            var migrationNamespace = Configuration["ConfigSettings:MigrationNamespace"];
            BaseRepository.ConnectionString = connectionString;
            MigrationHelper.CreateDbIfNoneExists(connectionString);
            MigrationHelper.MigrateUp(connectionString, migrationNamespace);
            MapperHelper.MapAllEntities();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Configurations
            services.AddScoped<NpgsqlConnection>(provider => new NpgsqlConnection(Configuration.GetConnectionString("DefaultConnection")));
            services.Configure<ConfigSettings>(Configuration.GetSection("ConfigSettings"));

            // Repositories
            services.AddScoped<IUserRepository, UserRepository>();

            //Services
            services.AddScoped<IUserService, UserService>();


            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseMiddleware<ExceptionMiddleware>();
            app.UseMvc();
        }
    }
}
