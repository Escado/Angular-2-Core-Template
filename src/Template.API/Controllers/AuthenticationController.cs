using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Template.API.Controllers.Base;
using Template.Entities.Views.ViewModels;
using Template.Services.Services;
using static Template.Entities.EnumStrings.EditClaimTypes;

namespace Template.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : BaseController
    {
        private readonly IAuthenticationService _authenticationService;

        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost("token")]
        public IActionResult GenerateToken([FromBody]UserLoginViewModel model)
        {
            (var token, var claims, var expires) = _authenticationService.GenerateToken(model);
            return Ok(new { token = token, claims = claims, expires = expires });
        }

        [HttpGet("claims")]
        public IActionResult GetUserClaims()
        {
            return Ok(_authenticationService.GetUserClaims(1).Select(x => x.Description));
        }
    }
}
