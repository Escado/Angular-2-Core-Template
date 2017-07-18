using Template.Repositories.Base;
using Template.Entities.DbModels;
using Npgsql;
using System;
using Dapper;

namespace Template.Repositories.Repositories
{
    public interface IProductRepository : IBaseRepository<Product>
    {
        Product GetByProductName(string name);
    }

    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(NpgsqlConnection connection) : base(connection)
        {
        }

   
        Product IProductRepository.GetByProductName(string name)
        {
            //I dont know why there neednt upperCase?
            return QueryFirst<Product>("SELECT * FROM public.\"product\" WHERE name = @name", new DynamicParameters(new { name = name}));
        }

    }


}
