using FluentMigrator.Builders.Alter.Table;
using FluentMigrator.Builders.Create.Table;

namespace Template.Entities.Helpers
{
    static class MigrationExtensions
    {
        public static ICreateTableColumnOptionOrWithColumnSyntax WithIdColumn(this ICreateTableWithColumnSyntax tableWithColumnSyntax)
        {
            return tableWithColumnSyntax
                .WithColumn("id")
                .AsInt32()
                .NotNullable()
                .PrimaryKey()
                .Identity();
        }

        public static IAlterTableColumnOptionOrAddColumnOrAlterColumnSyntax AddIdColumn(this IAlterTableAddColumnOrAlterColumnOrSchemaSyntax syntax)
        {
            return syntax.AddColumn("id")
                .AsInt32()
                .NotNullable()
                .PrimaryKey()
                .Identity();
        }
    }
}