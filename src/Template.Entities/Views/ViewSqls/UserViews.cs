using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.Views.ViewSqls.Base;

namespace Template.Entities.Views.ViewSqls
{
    public class UserViews : IBaseSqlView
    {
        public IEnumerable<string> CreateViews {
            get =>
                new List<string>()
                {
                    $@"CREATE OR REPLACE VIEW ""user_table_view"" AS
                    SELECT u.""id"", u.""name"", u.""surname"" 
                    FROM public.""user"" u
                    ORDER BY u.""id"""
                };
        }

        public IEnumerable<string> DropViews {
            get => new List<string>()
            {
                $@"DROP VIEW IF EXISTS ""user_table_view"""
            };
        }
    }
}
