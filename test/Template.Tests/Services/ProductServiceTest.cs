using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;
using Template.Services.Services;
using Xunit;

namespace Template.Tests.Services
{
    public class ProductServiceTest
    {
        private readonly Mock<IProductRepository> _productRepository = new Mock<IProductRepository>();

        private readonly ProductService SUT;

        public ProductServiceTest()
        {
            SUT = new ProductService(_productRepository.Object);
        }


        [Fact]
        public void product_add_duplicate()
        {
            var productName = "name";

            _productRepository.Setup(x => x.GetByProductName(productName)).Returns(new Product());

            var result = Assert.Throws<TemplateException>(() => SUT.Create(productName, "dawd", 1, 1, DateTime.Now.Date, Activity.Active));

            Assert.Equal(result.Code, ExceptionCode.Product.DuplicateProduct);
        }
    }
}
