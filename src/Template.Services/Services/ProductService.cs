using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;

namespace Template.Services.Services
{
    public interface IProductService
    {
        int Create(string name, string description, double vendor, double listing, DateTime data, Entities.DbModels.Activity stat);
        int Update(string name, string description, double vendor, double listing, DateTime data, Entities.DbModels.Activity stat);
        int Delete(string name);
       Product Read(string name);
    }
    class ProductService : IProductService
    {
        private IProductRepository _productRepository;

        public int Create(string name, string description, double vendor, double listing, DateTime data, Activity stat)
        {
            
            if (!Validation(name, description,vendor,listing))
            {
                return -1;
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

        public int Delete(string name )
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
            _productRepository.Remove(dbProduct);
            if (_productRepository.GetByProductName(name) == null)
                return 0;
            return -1;
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
            var productEntry = new Product
            {
                Name = name,
                Description = dbProduct.Description,
                VendorPrice = dbProduct.VendorPrice,
                ListingPrice = dbProduct.ListingPrice,
                CreateDate = dbProduct.CreateDate,
                Status = dbProduct.Status
            };
            return productEntry;
        }

        public int Update(string name, string description, double vendor, double listing, DateTime data, Activity stat)
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
            var productEntry = new Product
            {
                Name = name,
                Description = description,
                VendorPrice = vendor,
                ListingPrice = listing,
                CreateDate = data,
                Status = stat
            };
            _productRepository.Update(productEntry);
           // var result = _productRepository.(userEntry);
            return 0; // bbž if this is okey, maybe it would be better if I check that update is valide, but I dont know how.
        }

        public bool Validation(string name, string description, double vendor, double listing)
        {
            if (string.IsNullOrWhiteSpace(name) || double.IsNaN(vendor) || double.IsNaN(listing))
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
