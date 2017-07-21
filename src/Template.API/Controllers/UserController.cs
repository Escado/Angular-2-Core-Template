using Microsoft.AspNetCore.Mvc;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;
using Template.Services.Services;

namespace Template.API.Controllers
{
    [Route("user")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository; // why readonly?
        private readonly IUserService _userService;
        //public UserController(IUserRepository userRepository)
        //{
        //    _userRepository = userRepository;
        //}

        public UserController(IUserService userService, IUserRepository userRepository)
        {
            _userService = userService;
            _userRepository = userRepository;
        }

        #region API


        [HttpGet("get")]
        public IActionResult GetUsers()
        {

            var users = _userRepository.Get();

            return Ok(users);
        }

        [HttpPost("add")]
        public string AddUser(User model)
        {
            //  _userRepository.Add(new User() { Name = name, Surname = surname });
            _userService.Add(model.Name, model.Surname);
            return $"Added user to list: ";
        }
        //dont throw an error when there is no id.
        [HttpGet("get/{id}")]
        public string GetUser(int id)
        {
            //return Ok(_userRepository.Get(id) ?? new User() { Name = "Not", Surname = "Found" });

            var user = _userService.GetById(id);

            return $"User with id {id} name is {user.Name} and surname is {user.Surname}";
        }


        #endregion API

        #region VIEWS

        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("add")]
        public IActionResult Add()
        {
            return View();
        }

        [HttpGet("details/{id}")]
        public IActionResult Details()
        {
            return View();
        }
        #endregion VIEWS
    }
}
