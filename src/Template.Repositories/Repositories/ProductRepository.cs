using Template.Repositories.Base;
using Template.Entities.DbModels;
using Npgsql;
using System;
using Dapper;

namespace Template.Repositories.Repositories
{
    public interface IProductRepository : IBaseRepository<Product>
    {
        Product GetByProductId(int id);
        Product GetByProductName(string name);
    }

    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(NpgsqlConnection connection) : base(connection) {}

        public Product GetByProductName(string name)
        {
            return QueryFirst<Product>("SELECT * FROM public.\"product\" WHERE name = @name", new DynamicParameters(new { name = name }));
        }

        Product IProductRepository.GetByProductId(int id)
        {
            return QueryFirst<Product>("SELECT * FROM public.\"product\" WHERE id = @id", new DynamicParameters(new { id = id}));
        }
    }
}
