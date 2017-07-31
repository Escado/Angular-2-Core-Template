using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Template.Entities.DbModels;
using Template.Entities.Enums;
using Template.Repositories.Repositories;
using Template.Services.Services;

namespace Template.API.Controllers
{
    [Route("product")]
    public class ProductController : Controller
    {
        private IProductService _productService;
        private readonly IProductRepository _productRepository;

        public ProductController(IProductService productService, IProductRepository productRepository)
        {
            _productService = productService;
            _productRepository = productRepository;
        }

        [HttpPost("add")]
        public IActionResult AddProduct(Product model)
        {
            _productService.Create(model);

            return Ok();

        }
        [HttpGet("remove/{id}")]
        public string RemoveProduct(int id)
        {
            _productRepository.Remove(id);

            return $"Removed product {id} from the list";
        }
        [HttpGet("update/{name}/{description}/{vendor}/{listing}")]
        public string UpdateProduct(Product model)
        {
            var date = DateTime.Today;
            var activity = Activity.Active;
            _productService.Update(model, activity);

            return $"Updated product to list:";

        }
        [HttpGet("read/{id}")]
        public IActionResult ReadProduct(int id)
        {
            var product = _productService.Read(id);

            return Ok(product);
        }
        [HttpGet("getAll")]
        public IActionResult GetAll()
        {
            var products = _productService.GetAll();
            return Ok(products);
        }

        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("add")]
        public IActionResult add()
        {
            return View();
        }
    }
}
