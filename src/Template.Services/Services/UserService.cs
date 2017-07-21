using System;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;

namespace Template.Services.Services
{
    public interface IUserService
    {
        /// <summary>
        /// fslkfnseklfsenljf
        /// </summary>
        /// <param name="firstName">111111</param>
        /// <param name="surname">22222222</param>
        /// <returns>bybi</returns>
        int Add(string firstName, string surname);
        /// <summary>
        /// dawdwa
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        User GetById(int id);
    }

    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public int Add(string firstName, string surname)
        {
            if (string.IsNullOrWhiteSpace(firstName) || string.IsNullOrWhiteSpace(surname))
            {
                throw new TemplateException(ExceptionCode.User.EmptyNameOrSurname);
            }

            var dbUser = _userRepository.GetByNameAndSurname(firstName, surname);

            if (dbUser != null)
            {
                throw new TemplateException(ExceptionCode.User.DuplicateUser);
            }
            var userEntry = new User() {
                Name = firstName,
                Surname = surname
            };
            
            var result = _userRepository.Add(userEntry);

            return result;
        }
        public User GetById (int id)
        {
            var user = _userRepository.Get(id);

            // TODO: null check
            if ((string.IsNullOrWhiteSpace(user?.Name)) || (string.IsNullOrWhiteSpace(user?.Surname)))
                throw new TemplateException(ExceptionCode.User.NoUser);
            return user;
        }
       
    }
}