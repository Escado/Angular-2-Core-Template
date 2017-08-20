using System;
using Template.Entities.DbModels.Base;
using Template.Entities.Enums;

namespace Template.Entities.DbModels
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }

        public string Username { get; set; }
        public string Password { get; set; }

        public DateTime CreateDate { get; set; }
        public UserStatus Status { get; set; }
    }
}