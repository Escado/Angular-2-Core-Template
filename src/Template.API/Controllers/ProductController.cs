using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Template.Entities.DbModels;
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

        [HttpGet("add/{name}/{description}/{vendor}/{listing}")]
        public string AddProduct(Product model)
        {

            _productService.Create(model.Name, model.Description, model.VendorPrice, model.ListingPrice, DateTime.Now, model.Status);

            return $"Added product to list:";
          
        }
        [HttpGet("remove/{id}")]
        public string RemoveProduct(int id)
        {
           _productRepository.Remove(id);

            return $"Removed product {id} from the list";
        }
        [HttpGet("update/{name}/{description}/{vendor}/{listing}")]
        public string UpdateProduct(string name, string description, double vendor, double listing)
        {
            var date = DateTime.Today;
            var activity = Activity.Active;
            _productService.Update(name, description, vendor, listing, date, activity);

            return $"Updated product to list: {name} {description} {vendor} {listing} {date} {activity}";
        }
        [HttpGet("read/{name}")]
        public string ReadProduct(string name)
        {
           var product =  _productService.Read(name);

            return $"Product Id: {product.Id} product name {product.Name} product description: {product.Description} vendor: {product.VendorPrice}" +
                $"listing {product.ListingPrice} Date {product.CreateDate}";
        }

    }
}
