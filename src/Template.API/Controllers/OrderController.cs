using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Template.API.Controllers.Base;
using Template.Entities.DbModels;
using Template.Entities.Enums;
using Template.Repositories.Repositories;

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

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_orderRepository.Get());
        }
    }
}
