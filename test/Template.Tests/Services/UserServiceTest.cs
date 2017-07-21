using Moq;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;
using Template.Services.Services;
using Xunit;

namespace Template.Tests.Services
{
    public class UserServiceTest
    {
        private readonly Mock<IUserRepository> _userRepository = new Mock<IUserRepository>();

        private readonly UserService SUT;

        public UserServiceTest()
        {
            SUT = new UserService(_userRepository.Object);
        }

        [Fact]
        public void add_user_ok()
        {
            // SETUP 
            var firstname = "firstname";
            var surname = "surname";

            _userRepository.Setup(x => x.GetByNameAndSurname(firstname, surname));
            _userRepository.Setup(x => x.Add(It.Is<User>(xx => xx.Name.Equals(firstname) && xx.Surname.Equals(surname)))).Returns(1);


            // ACT
            var result = SUT.Add(firstname, surname);


            // ASSERT
            _userRepository.Verify(x => x.GetByNameAndSurname(It.Is<string>(xx => firstname.Equals(xx)), It.Is<string>(xx => surname.Equals(xx))), Times.Once);
            _userRepository.Verify(x => x.Add(It.Is<User>(xx => xx.Name.Equals(firstname) && xx.Surname.Equals(surname))), Times.Once);

            Assert.Equal(result, 1);
        }

        [Fact]
        public void add_user_duplicate()
        {
            var firstname = "firstname";
            var surname = "surname";

            _userRepository.Setup(x => x.GetByNameAndSurname(firstname, surname)).Returns(new User());

            var result = Assert.Throws<TemplateException>(() => SUT.Add(firstname, surname));

            Assert.Equal(result.Code, ExceptionCode.User.DuplicateUser);
        }

        [Fact]
        public void add_user_empty_fields()
        {
            var firstname = "";
            var surname = "";

            var result = Assert.Throws<TemplateException>(() => SUT.Add(firstname, surname));

            Assert.Equal(result.Code, ExceptionCode.User.EmptyNameOrSurname);
        }
    }
}