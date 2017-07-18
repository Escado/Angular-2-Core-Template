using System;
using System.ComponentModel.DataAnnotations;
using Template.Entities.DbModels.Base;

namespace Template.Entities.DbModels
{
  public  enum Activity
    {
        None,
        Active,
        Inactive,
        Comming // the good is coming to shop, maybe there are a better descriptions of this activity
    };
    //interface IProductModel
    //{
    //    bool Create(IProductModel model);
    //    bool Read(IProductModel model);
    //    bool Update(IProductModel model);
    //    bool Delete(IProductModel model);
    //}
   public class Product : BaseEntity
    {
       
        public string Name { get; set; }
        public string Description { get; set; }
        public double VendorPrice { get; set; }
        public double ListingPrice { get; set; }
        public DateTime CreateDate { get; set; } //Maybe it would be better to name it just Date
        public Activity Status { get; set; }

        
        public Product()
        {

        }

   
    }

    
}