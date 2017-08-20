using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Template.API.Controllers.Base;
using Template.Entities.DbModels;
using Template.Entities.Enums;
using Template.Repositories.Repositories;
using static Template.Entities.EnumStrings.EditClaimTypes;
using static Template.Entities.EnumStrings.ViewClaimTypes;

namespace Template.API.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : BaseController
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IUserRepository _userRepository;

        public OrderController(IOrderRepository orderRepository, IUserRepository userRepository)
        {
            _orderRepository = orderRepository;
            _userRepository = userRepository;
        }

        [HttpGet("lol")]
        public IActionResult Get()
        {
             var hmac = new HMACSHA256();
                 var key = Convert.ToBase64String(hmac.Key);
            return Ok(key);
        }

        [Authorize]
        [HttpGet("lolrestricted")]
        public IActionResult GetRestricted()
        {
            var hmac = new HMACSHA256();
            var key = Convert.ToBase64String(hmac.Key);
            return Ok(key);
        }
    }
}
