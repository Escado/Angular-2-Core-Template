using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Template.Common;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Entities.Enums;
using Template.Entities.Helpers;
using Template.Entities.Views.ViewModels;
using Template.Repositories.Repositories;

namespace Template.Services.Services
{
    public interface IAuthenticationService
    {
        (string token, dynamic claims, long expires) GenerateToken(UserLoginViewModel model, int expireMinutes = 20);
        IEnumerable<IdentityClaim> GetUserClaims(int userId);
    }

    public class AuthenticationService : IAuthenticationService
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserClaimRepository _userClaimRepository;
        private readonly IIdentityClaimRepository _claimRepository;

        private readonly IPasswordHashService _passwordHashService;

        private readonly ConfigSettings _config;

        public AuthenticationService(IOptions<ConfigSettings> config,
            IUserRepository userRepository,
            IUserClaimRepository userClaimRepository,
            IPasswordHashService passwordHashService,
            IIdentityClaimRepository claimRepository)
        {
            _userClaimRepository = userClaimRepository;
            _userRepository = userRepository;
            _claimRepository = claimRepository;

            _passwordHashService = passwordHashService;

            _config = config.Value;
        }

        public (string token, dynamic claims, long expires) GenerateToken(UserLoginViewModel model, int expireMinutes = 20)
        {
            if (string.IsNullOrWhiteSpace(model.Username) || string.IsNullOrWhiteSpace(model.Password))
            {
                throw new TemplateException(ExceptionCode.User.EmptyUsernameOrPassword);
            }

            var user = _userRepository.GetByUsername(model.Username);

            IEnumerable<IdentityClaim> userClaims = new List<IdentityClaim>();

            if (user == null)
            {
                user = new User()
                {
                    Username = model.Username,
                    Password = _passwordHashService.HashPassword(model.Password),
                    Email = "ch@nge.me",
                    Name = "temp",
                    Surname = "temp",
                    Status = UserStatus.Active,
                    CreateDate = DateTime.UtcNow
                };

                using (var transaction = _userRepository.BeginTransaction())
                {
                    var id = _userRepository.Add(user);

                    var dbClaims = _claimRepository.Get();
                    userClaims = dbClaims.PickRandom(dbClaims.Count() - 2).ToList();
                    var userClaimList = new List<UserIdentityClaim>();
                    foreach (var item in userClaims)
                    {
                        userClaimList.Add(new UserIdentityClaim()
                        {
                            IdentityClaimId = item.Id,
                            UserId = id
                        });
                    }
                    _userClaimRepository.Add(userClaimList);
                    transaction.Commit();
                }
            }
            else
            {
                userClaims = _userClaimRepository.GetUserClaims(user.Id);
            }

            var tokenClaims = new List<Claim>();

            foreach (var item in userClaims)
            {
                tokenClaims.Add(new Claim(item.Description, "true"));
            }

            tokenClaims.AddRange(new List<Claim>()
                {
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.UniqueName, user.Username)
                });

            var symmetricKey = Convert.FromBase64String(_config.TokenSecret);
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var expires = now.AddMinutes(Convert.ToInt32(expireMinutes));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(tokenClaims),
                Expires = expires,
                Audience = _config.TokenAudience,
                Issuer = _config.TokenIssuer,
                NotBefore = DateTime.UtcNow,
                IssuedAt = DateTime.UtcNow,

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature),
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return (token, tokenClaims.Select(x => new { Value = x.Value, Type = x.Type }), ((DateTimeOffset)expires).ToUnixTimeSeconds());
        }

        public IEnumerable<IdentityClaim> GetUserClaims(int userId)
        {
            return _userClaimRepository.GetUserClaims(userId);
        }
    }
}
