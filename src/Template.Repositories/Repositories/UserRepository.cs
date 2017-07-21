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
    }

    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(NpgsqlConnection connection) : base(connection) { }

        User IUserRepository.GetByNameAndSurname(string name, string surname)
        {
            return QueryFirst<User>("SELECT * FROM public.\"user\" WHERE name = @name and surname = @surname", new DynamicParameters(new { name = name, surname = surname }));
        }
    }
}