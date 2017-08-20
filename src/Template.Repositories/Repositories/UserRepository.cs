using System;
using Dapper;
using Npgsql;
using Template.Entities.DbModels;
using Template.Repositories.Base;

namespace Template.Repositories.Repositories
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User GetByNameAndSurname(string name, string surname);
        User GetByUsername(string username);
    }

    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(NpgsqlConnection connection) : base(connection) { }

        public User GetByUsername(string username) => QueryFirst<User>("Select * from public.\"user\" where username = @username", new DynamicParameters(new { username = username }));

        User IUserRepository.GetByNameAndSurname(string name, string surname) => QueryFirst<User>("Select * from public.\"user\" where name = @name and surname = @surname", new DynamicParameters(new { name = name, surname = surname }));
    }
}