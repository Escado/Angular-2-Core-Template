using System;
using FluentMigrator;
using Template.Entities.Helpers;

namespace Template.Entities.Migrations
{
    [Migration(201706261601)]
    public class M201706261601_Initial : Migration
    {
        public override void Down()
        {
            Delete.Table("user");
            Delete.Table("order");
        }

        public override void Up()
        {
            Create.Table("identity_claim").WithIdColumn()
                .WithColumn("description").AsString().NotNullable();

            Create.Table("user_identity_claim").WithIdColumn()
                .WithColumn("user_id").AsInt32().NotNullable()
                .WithColumn("identity_claim_id").AsInt32().NotNullable();

            Create.Table("user").WithIdColumn()
                .WithColumn("name").AsString()
                .WithColumn("surname").AsString()
                .WithColumn("username").AsString()
                .WithColumn("password").AsString()
                .WithColumn("email").AsString()
                .WithColumn("status").AsInt32().NotNullable()
                .WithColumn("create_date").AsDateTime().NotNullable();

            Create.Table("product").WithIdColumn()
                .WithColumn("name").AsString().NotNullable()
                .WithColumn("listing_price").AsFloat().NotNullable()
                .WithColumn("vendor_price").AsFloat().NotNullable()
                .WithColumn("status").AsInt32().NotNullable()
                .WithColumn("create_date").AsDateTime().NotNullable();

            Create.Table("order").WithIdColumn()
                .WithColumn("user_id").AsInt32().NotNullable()
                .WithColumn("amount").AsFloat().NotNullable()
                .WithColumn("product_id").AsInt32().NotNullable()
                .WithColumn("status").AsInt32().NotNullable()
                .WithColumn("create_date").AsDateTime().NotNullable();

            Create.ForeignKey().FromTable("order").ForeignColumn("user_id").ToTable("user").PrimaryColumn("id");
            Create.ForeignKey().FromTable("order").ForeignColumn("product_id").ToTable("product").PrimaryColumn("id");

            Create.ForeignKey().FromTable("user_identity_claim").ForeignColumn("user_id").ToTable("user").PrimaryColumn("id");
            Create.ForeignKey().FromTable("user_identity_claim").ForeignColumn("identity_claim_id").ToTable("identity_claim").PrimaryColumn("id");

            Execute.Sql($@"INSERT INTO ""identity_claim"" (description) VALUES ('ViewOrders'), ('ViewUsers'), ('ViewProducts'), ('EditOrders'), ('EditUsers'), ('EditProducts')");
        }
    }
}