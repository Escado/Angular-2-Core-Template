using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;
using Template.Repositories.Base;
using Dapper;
using System.Reflection;
using Template.Entities.Views.ViewSqls.Base;

namespace Template.Repositories.Repositories
{
    public class ViewRepository : BaseRepository
    {

        public ViewRepository(NpgsqlConnection connection) : base(connection)
        {
        }

        public void CreateViews()
        {
            var type = typeof(IBaseSqlView);
            var types = AppDomain.CurrentDomain.GetAssemblies() // TODO: consider optimizing if startup becomes too heavy
                .SelectMany(s => s.GetTypes())
                .Where(p => p.IsClass && type.IsAssignableFrom(p));

            foreach (var item in types)
            {
                var viewClass = (IBaseSqlView)Activator.CreateInstance(item);

                foreach (var sql in viewClass.CreateViews)
                {
                    Connection.Execute(sql);
                }
            }
        }

        public void DropViews()
        {

        }
    }
}
