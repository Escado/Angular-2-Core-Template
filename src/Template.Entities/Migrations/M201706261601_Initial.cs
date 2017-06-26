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
        }

        public override void Up()
        {
            Create.Table("user").WithIdColumn()
                .WithColumn("name").AsString()
                .WithColumn("surname").AsString();
        }
    }
}