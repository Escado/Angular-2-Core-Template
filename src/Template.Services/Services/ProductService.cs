using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Entities.Enums;
using Template.Repositories.Base;
using Template.Repositories.Repositories;

namespace Template.Services.Services
{
    public interface IProductService
    {
        int Create(Product model);
        void Update(Product model, Activity stat);
        Product Read(int id);
        IEnumerable<Product> GetAll();
    }
    public class ProductService : IProductService
    {
        private IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public int Create(Product model)
        {

            if (!Validation(model.Name, model.Description, model.VendorPrice, model.ListingPrice))
            {
                throw new TemplateException(ExceptionCode.General.DataValidationFailed);
            }
            var dbProduct = _productRepository.GetByProductName(model.Name);

            if (dbProduct != null)
            {
                throw new TemplateException(ExceptionCode.Product.DuplicateProduct);
            }
            var productEntry = new Product()
            {
                Name = model.Name,
                Description = model.Description,
                VendorPrice = model.VendorPrice,
                ListingPrice = model.ListingPrice,
                CreateDate = model.CreateDate,
                Status = Activity.Active
            };

            var result = _productRepository.Add(productEntry);

            return result;
        }

        public Product Read(int id)
        {

            //if (int.(model.Id))
            //{
            //    throw new TemplateException(ExceptionCode.Product.EmptyField);
            //}
            var dbProduct = _productRepository.GetByProductId(id);
            if (dbProduct == null)
            {
                throw new TemplateException(ExceptionCode.Product.NoProduct);
            }
            return dbProduct;
        }
        public IEnumerable<Product> GetAll()
        {
            var dbProduct = _productRepository.Get();
            return dbProduct;
        }

        public void Update(Product model, Activity stat)
        {
            if (!Validation(model.Name, model.Description, model.VendorPrice, model.ListingPrice))
            {
                throw new TemplateException(ExceptionCode.Product.EmptyField);
            }
            var dbProduct = _productRepository.GetByProductId(model.Id);

            if (dbProduct == null)
            {
                throw new TemplateException(ExceptionCode.Product.NoProduct);
            }

            dbProduct.Name = model.Name;
            dbProduct.Description = model.Description;
            dbProduct.VendorPrice = model.VendorPrice;
            dbProduct.ListingPrice = model.ListingPrice;
            dbProduct.CreateDate = model.CreateDate;
            dbProduct.Status = stat;
            _productRepository.Update(dbProduct);
        }

        public bool Validation(string name, string desp, double vendor, double listing)
        {
            if (string.IsNullOrWhiteSpace(name) || vendor < 0 || listing < 0)
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
