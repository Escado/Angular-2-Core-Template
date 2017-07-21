using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Repositories.Base;
using Template.Repositories.Repositories;

namespace Template.Services.Services
{
    public interface IProductService
    {
        int Create(string name, string description, double vendor, double listing, DateTime data, Activity stat);
        void Update(string name, string description, double vendor, double listing, DateTime data, Activity stat);
        Product Read(string name);
    }
    public class ProductService : IProductService
    {
        private IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public int Create(string name, string description, double vendor, double listing, DateTime data, Activity stat)
        {

            if (!Validation(name, description, vendor, listing))
            {
                throw new TemplateException(ExceptionCode.General.DataValidationFailed);
            }
            var dbProduct = _productRepository.GetByProductName(name);

            if (dbProduct != null)
            {
                throw new TemplateException(ExceptionCode.Product.DuplicateProduct);
            }
            var productEntry = new Product()
            {
                Name = name,
                Description = description,
                VendorPrice = vendor,
                ListingPrice = listing,
                CreateDate = data,
                Status = stat
            };

            var result = _productRepository.Add(productEntry);

            return result;
        }

        public Product Read(string name)
        {

            if (string.IsNullOrWhiteSpace(name))
            {
                throw new TemplateException(ExceptionCode.Product.EmptyField);
            }
            var dbProduct = _productRepository.GetByProductName(name);
            if (dbProduct == null)
            {
                throw new TemplateException(ExceptionCode.Product.NoProduct);
            }
            return dbProduct;
        }

        public void Update(string name, string description, double vendor, double listing, DateTime data, Activity stat)
        {
            if (!Validation(name, description, vendor, listing))
            {
                throw new TemplateException(ExceptionCode.Product.EmptyField);
            }
            var dbProduct = _productRepository.GetByProductName(name);

            if (dbProduct == null)
            {
                throw new TemplateException(ExceptionCode.Product.NoProduct);
            }

            dbProduct.Name = name;
            dbProduct.Description = description;
            dbProduct.VendorPrice = vendor;
            dbProduct.ListingPrice = listing;
            dbProduct.CreateDate = data;
            dbProduct.Status = stat;
            _productRepository.Update(dbProduct);
        }

        public bool Validation(string name, string description, double vendor, double listing)
        {
            if (string.IsNullOrWhiteSpace(name) || vendor > 0 || double.IsNaN(listing))
            {
                throw new TemplateException(ExceptionCode.Product.EmptyField);
            }
            if (vendor > listing)
            {
                throw new TemplateException(ExceptionCode.Product.VendorBiggerThanListingPrice);
            }

            return true;
        }
    }
}
