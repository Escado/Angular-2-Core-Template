using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.Helpers;

namespace Template.Entities.Migrations
{ 
    [Migration(201707212008)]
    public class M201707212008 : Migration
    {
        public override void Down()
        {
            Delete.Table("product");
        }

        public override void Up()
        {
            Create.Table("product").WithIdColumn()
                .WithColumn("name").AsString()
                .WithColumn("description").AsString()
                .WithColumn("vendor_price").AsDouble()
                .WithColumn("listing_price").AsDouble()
                .WithColumn("create_date").AsDateTime()
                .WithColumn("status").AsInt32();
             // Alter.Table("user").AddColumn("create_date");
            
        }
    }
}
