using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.DbModels.Base;
using Template.Entities.Enums;

namespace Template.Entities.DbModels
{
    public class Order : BaseEntity
    {
        public int UserId { get; set; }
        public string ProductName { get; set; }
        public float Amount { get; set; }
        public DateTime CreateDate { get; set; }
        public OrderStatus Status { get; set; }
    }
}
