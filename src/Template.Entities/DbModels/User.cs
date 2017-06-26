using Template.Entities.DbModels.Base;

namespace Template.Entities.DbModels
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
    }
}