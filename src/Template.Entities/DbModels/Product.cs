using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.DbModels.Base;

namespace Template.Entities.DbModels
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public float ListingPrice { get; set; }
        public float VendorPrice { get; set; }
    }
}
