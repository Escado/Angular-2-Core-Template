using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Entities.DbModels;
using Template.Repositories.Base;

namespace Template.Repositories.Repositories
{
    public interface IProductRepository : IBaseRepository<Product>
    { }

    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(NpgsqlConnection connection) : base(connection)
        {
        }
    }
}
