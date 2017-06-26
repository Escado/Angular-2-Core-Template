using Template.Entities.Enums;
using Template.Entities.ServiceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Template.API.Helpers
{
    public class ClaimsPrincipalHelper
    {
        public static Claims GetClaims(ClaimsPrincipal principal)
        {
            var identity = principal.Identity;
            if (identity == null) return new Claims();
            if (!(identity is ClaimsIdentity)) return new Claims();
            var claims = ((ClaimsIdentity)(identity)).Claims;
            var result = new Claims()
            {
                IsRegistered = GetClaimBool("is_registered", claims),
                IsAuthenticated = identity.IsAuthenticated,
                Provider = GetClaimString("provider", claims),
                ProviderId = GetClaimString("provider_id", claims),
                Email = GetClaimString(ClaimTypes.Email, claims),
                Name = GetClaimString(ClaimTypes.Name, claims),
            };
            if (result.Provider != null) result.ProviderEnum = GetProvider(result.Provider);
            return result;
        }

        public static bool HasTrueClaim(ClaimsPrincipal principal, string claimType)
        {
            var identity = principal.Identity;
            if (identity == null) return false;
            if (!(identity is ClaimsIdentity)) return false;
            var claims = ((ClaimsIdentity)(identity)).Claims;
            return GetClaimBool(claimType, claims);
        }

        public static int GetUserIdFromSubClaim(ClaimsPrincipal principal)
        {
            var identity = principal.Identity;
            if (identity == null) return -1;
            if (!(identity is ClaimsIdentity)) return -1;
            var claims = ((ClaimsIdentity)(identity)).Claims;

            return GetClaimInt(ClaimTypes.NameIdentifier, claims);
        }

        public static string GetUserEmailFromSubClaim(ClaimsPrincipal principal)
        {
            var identity = principal.Identity;
            if (identity == null) return null;
            if (!(identity is ClaimsIdentity)) return null;
            var claims = ((ClaimsIdentity)(identity)).Claims;

            return GetClaimString(ClaimTypes.Email, claims);
        }

        public static string GetUserNameFromSubClaim(ClaimsPrincipal principal)
        {
            var identity = principal.Identity;
            if (identity == null) return null;
            if (!(identity is ClaimsIdentity)) return null;
            var claims = ((ClaimsIdentity)(identity)).Claims;

            return GetClaimString(ClaimTypes.Name, claims);
        }

        public static bool UserHasTesterClaim(ClaimsPrincipal principal)
        {
            var identity = principal.Identity;
            if (identity == null) return false;
            if (!(identity is ClaimsIdentity)) return false;
            var claims = ((ClaimsIdentity)(identity)).Claims;

            return !string.IsNullOrEmpty(GetClaimString("Tester", claims));
        }

        public static bool UserIsAdmin(ClaimsPrincipal principal)
        {
            var identity = principal.Identity;
            if (identity == null) return false;
            if (!(identity is ClaimsIdentity)) return false;
            var claims = ((ClaimsIdentity)(identity)).Claims;

            return GetClaimBool("IsAdmin", claims);
        }

        protected static Provider GetProvider(string providerName)
        {
            return (Provider)Enum.Parse(typeof(Provider), providerName, true);
        }

        private static bool GetClaimBool(string type, IEnumerable<Claim> claims)
        {
            var val = GetClaimString(type, claims);
            bool result = false;
            var success = bool.TryParse(val, out result);
            return result;
        }

        private static int GetClaimInt(string type, IEnumerable<Claim> claims)
        {
            var val = GetClaimString(type, claims);
            int result = -1;
            var success = int.TryParse(val, out result);
            return result;
        }

        protected static string GetClaimString(string type, IEnumerable<Claim> claims)
        {
            var claim = claims.FirstOrDefault(v => v.Type == type);
            return claim?.Value;
        }
    }
}
