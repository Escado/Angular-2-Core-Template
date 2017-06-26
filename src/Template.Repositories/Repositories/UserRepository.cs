using Npgsql;
using Template.Entities.DbModels;
using Template.Repositories.Base;

namespace Template.Repositories.Repositories
{
    public interface IUserRepository : IBaseRepository<User>
    {

    }

    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(NpgsqlConnection connection) : base(connection) { }

        
    }
}