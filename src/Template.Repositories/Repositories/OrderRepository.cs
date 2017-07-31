using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;
using Template.Entities.DbModels;
using Template.Repositories.Base;

namespace Template.Repositories.Repositories
{
    public interface IOrderRepository : IBaseRepository<Order>
    { }

    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(NpgsqlConnection connection) : base(connection)
        {
        }
    }
}
