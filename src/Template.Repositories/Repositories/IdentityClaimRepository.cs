using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.DbModels;
using Template.Repositories.Base;

namespace Template.Repositories.Repositories
{
    public interface IIdentityClaimRepository : IBaseRepository<IdentityClaim>
    { }

    public class IdentityClaimRepository : BaseRepository<IdentityClaim>, IIdentityClaimRepository
    {
        public IdentityClaimRepository(NpgsqlConnection connection) : base(connection)
        {
        }
    }
}
