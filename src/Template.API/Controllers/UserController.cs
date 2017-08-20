using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;
using static Template.Entities.EnumStrings.ViewClaimTypes;
using Microsoft.AspNetCore.Authorization;

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

        [HttpGet]
        [Authorize(ViewUsers)]
        public IActionResult Get()
        {
            return Ok(new List<User>()
            {
                new User()
                {
                    Id = 1,
                    Name = "Tomas",
                    Surname = "Balionas"
                },
                                new User()
                {
                    Id = 2,
                    Name = "Jonas",
                    Surname = "Lavonas"
                },
                                                new User()
                {
                    Id = 3,
                    Name = "Greta",
                    Surname = "Kvetra"
                },
                                                                new User()
                {
                    Id = 4,
                    Name = "Kristina",
                    Surname = "Saliona"
                },
                                                                                new User()
                {
                    Id = 5,
                    Name = "Kebulas",
                    Surname = "Spakoina"
                },
                                                                                                new User()
                {
                    Id = 6,
                    Name = "Asilas",
                    Surname = "Kebabas"
                },
                                                                                                                new User()
                {
                    Id = 7,
                    Name = "Jonas",
                    Surname = "Balvonas"
                },
                                                                                                                                new User()
                {
                    Id = 8,
                    Name = "Samuel",
                    Surname = "Lincoln"
                },
                                                                                                                                                new User()
                {
                    Id = 9,
                    Name = "Ronald",
                    Surname = "McDonald"
                },
                new User()
                {
                    Id = 10,
                    Name = "Vilmantas",
                    Surname = "Epic"
                }
            });
        }
    }
}
