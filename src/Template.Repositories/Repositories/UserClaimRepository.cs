using Dapper;
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
    public interface IUserClaimRepository : IBaseRepository<UserIdentityClaim>
    {
        IEnumerable<IdentityClaim> GetUserClaims(int userId);
    }

    public class UserClaimRepository : BaseRepository<UserIdentityClaim>, IUserClaimRepository
    {
        public UserClaimRepository(NpgsqlConnection connection) : base(connection)
        {

        }

        public IEnumerable<IdentityClaim> GetUserClaims(int userId) => Query<IdentityClaim>($@"SELECT * FROM identity_claim WHERE id = ANY(ARRAY(SELECT identity_claim_id FROM public.user_identity_claim WHERE user_id = @userId))", new DynamicParameters(new { userId = userId }));
    }
}
