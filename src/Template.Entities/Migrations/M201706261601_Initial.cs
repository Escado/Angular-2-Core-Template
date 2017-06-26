using System;
using FluentMigrator;

namespace Template.Entities.Migrations
{
    [Migration(201706261601)]
    public class M201706261601_Initial : Migration
    {
        public override void Down()
        {
            Delete.Table("User");
        }

        public override void Up()
        {
            Create.Table("User").WithColumn("Id").AsInt32().PrimaryKey();
        }
    }
}