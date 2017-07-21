using Template.Entities.DbModels.Base;
using Template.Entities.Enums;

namespace Template.Entities.DbModels
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public Activity Status { get; set; }
    }
}