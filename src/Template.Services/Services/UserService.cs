using System;
using System.Collections.Generic;
using Template.Common.Exceptions;
using Template.Entities.DbModels;
using Template.Repositories.Repositories;

namespace Template.Services.Services
{
    public interface IUserService
    {
        int Add(string firstName, string surname);
        User GetById(int id);
        IEnumerable<User> GetUsers();
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
        public IEnumerable<User> GetUsers()
        {
            var user = _userRepository.Get();
            if (user == null)
            {
                throw new TemplateException(ExceptionCode.User.NoUser);
            }
            return user;
        }
       
    }
}