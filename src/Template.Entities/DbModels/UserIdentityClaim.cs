using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.DbModels.Base;

namespace Template.Entities.DbModels
{
    public class UserIdentityClaim : BaseEntity
    {
        public int UserId { get; set; }
        public int IdentityClaimId { get; set; }
    }
}
