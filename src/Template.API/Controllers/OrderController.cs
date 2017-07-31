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

        [HttpGet("fill")]
        public IActionResult Fill()
        {

            var id =_userRepository.Add(new User()
            {
                Name = "asilas",
                Surname = "kebabas"
            });

            _orderRepository.Add(new Order()
            {
                UserId = 1,
                Amount = 2f,
                CreateDate = DateTime.Now,
                ProductName = "Kebabai",
                Status = OrderStatus.WaitingForApproval
            });

            _orderRepository.Add(new Order()
            {
                UserId = 1,
                Amount = 2f,
                CreateDate = DateTime.Now,
                ProductName = "Kebabai2",
                Status = OrderStatus.WaitingForApproval
            });

            _orderRepository.Add(new Order()
            {
                UserId = 1,
                Amount = 4f,
                CreateDate = DateTime.Now,
                ProductName = "Kebabai3",
                Status = OrderStatus.WaitingForApproval
            });

            _orderRepository.Add(new Order()
            {
                UserId = 1,
                Amount = 3f,
                CreateDate = DateTime.Now,
                ProductName = "Kebabai4",
                Status = OrderStatus.WaitingForApproval
            });

            return Ok();
        }
    }
}
