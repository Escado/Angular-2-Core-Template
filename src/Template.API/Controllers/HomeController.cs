using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;

namespace Template.API.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("add/{name}/{surname}")]
        public string AddUser(string name, string surname)
        {
            _userRepository.Add(new User() { Name = name, Surname = surname });
            return $"Added user to list: {name} {surname}";
        }

        [HttpGet("get/{id}")]
        public IActionResult GetUser(int id)
        {
            return Ok(_userRepository.Get(id) ?? new User() { Name = "Not", Surname = "Found" });
        }
    }
}
