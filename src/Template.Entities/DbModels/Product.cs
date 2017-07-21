using System;
using System.ComponentModel.DataAnnotations;
using Template.Entities.DbModels.Base;
using Template.Entities.Enums;

namespace Template.Entities.DbModels
{
  
   
   public class Product : BaseEntity
    {
       
        public string Name { get; set; }
        public string Description { get; set; }
        public double VendorPrice { get; set; }
        public double ListingPrice { get; set; }
        public DateTime CreateDate { get; set; } 
        public Activity Status { get; set; }
   
    }

    
}