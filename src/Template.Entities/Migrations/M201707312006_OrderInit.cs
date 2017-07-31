using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.Helpers;

namespace Template.Entities.Migrations
{
    [Migration(201707312006)]
    public class M201707312006_OrderInit : Migration
    {
        public override void Down()
        {
            Delete.Table("order");
        }

        public override void Up()
        {
            Create.Table("order").WithIdColumn()
                .WithColumn("user_id").AsInt32().NotNullable()
                .WithColumn("amount").AsFloat().NotNullable()
                .WithColumn("product_name").AsString().NotNullable()
                .WithColumn("status").AsInt32().NotNullable()
                .WithColumn("create_date").AsDateTime().NotNullable();

            Create.ForeignKey().FromTable("order").ForeignColumn("user_id").ToTable("user").PrimaryColumn("id");
        }
    }
}