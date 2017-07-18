using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;
using Template.Services.Services;

namespace Template.API.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository; // why readonly?
        private IUserService _userService;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("add/{name}/{surname}")]
        public string AddUser(string name, string surname)
        {
            _userRepository.Add(new User() { Name = name, Surname = surname });
            //_userService.Add(name, surname);
            return $"Added user to list: {name} {surname}";
        }

        [HttpGet("get/{id}")]
        public IActionResult GetUser(int id)
        {
            return Ok(_userRepository.Get(id) ?? new User() { Name = "Not", Surname = "Found" });
           
           // IUserService user = GetUserById(id);
           //return User.ToString()
        }

    }
}
