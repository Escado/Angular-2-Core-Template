using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using Dapper;
using DapperExtensions;
using Npgsql;
using Template.Repositories.Helpers;
using Template.Entities.WebParams.Base;
using Template.Entities.DbModels.Base;
using Template.Entities.Attributes;
using Template.Common.Helpers;
using Template.Repositories.Mappers;
using Template.Entities.Virtual.Base;

namespace Template.Repositories.Base
{
    public interface IBaseRepository
    {
        NpgsqlConnection Connection { get; set; }
        DbTransaction BeginTransaction(IsolationLevel level = IsolationLevel.ReadCommitted);
    }
    public interface IBaseRepository<T> : IBaseRepository
        where T : BaseEntity
    {
        int Add(T entity);
        void Add(IEnumerable<T> entities);
        IEnumerable<T> Get();
        T Get(int id);
        IEnumerable<T> Get(IEnumerable<int> ids);
        IEnumerable<T> Get(Params parameters);
        IEnumerable<T> GetNoPaging(Params parameters);
        void Remove(int id);
        void Remove(IEnumerable<int> entityIds);
        void Remove(T entity);
        void Update(T entity);
        void Update(IEnumerable<T> entities);
        void Upsert(T entity);
        IEnumerable<string> FromTableColumnLikeFilter(string table, string column, string like);
    }

    public interface IBaseRepositoryWithVirtual<TEntity, TVirtual> : IBaseRepository<TEntity>
        where TEntity : BaseEntity
        where TVirtual : BaseVirtual
    {
        IEnumerable<TVirtual> GetVirtualList(Params parameters, out int count);
        IEnumerable<TVirtual> GetVirtualList(Params parameters, out int count, out IEnumerable<TVirtual> forTotals);
        IEnumerable<TVirtual> GetVirtualListWithExtraParams(Params parameters, out int count, out IEnumerable<TVirtual> forTotals, Dictionary<string, object> hardParameters = null);
        IEnumerable<TVirtual> GetVirtualList(Params parameters);
        IEnumerable<TVirtual> GetVirtualList();
        IEnumerable<TVirtual> GetVirtualListNoPaging(Params parameters);
        TVirtual GetVirtual(int id);
        IEnumerable<TVirtual> GetVirtual(IEnumerable<int> ids);
        IEnumerable<TVirtual> GetFullVirtualList();
    }

    public abstract class BaseRepository : IBaseRepository
    {
        public NpgsqlConnection Connection { get; set; }
        public static string ConnectionString { get; set; }

        protected BaseRepository(NpgsqlConnection connection)
        {
            Connection = connection;
        }

        public DbTransaction BeginTransaction(IsolationLevel level = IsolationLevel.ReadCommitted)
        {
            if (level != IsolationLevel.ReadCommitted && level != IsolationLevel.Serializable) level = IsolationLevel.Serializable;
            if (Connection.State == ConnectionState.Broken || Connection.State == ConnectionState.Closed)
                Connection.Open();
            return Connection.BeginTransaction(level);
        }

        protected IEnumerable<TReturn> Query<TReturn>(string sql, DynamicParameters parameters)
        {
            var result = Connection.Query<TReturn>(sql, parameters);
            return result;
        }

        protected int QueryCount(string sql, DynamicParameters parameters)
        {
            var result = Connection.Query<int>(sql, parameters);
            return result.Count() == 0 ? 0 : result.FirstOrDefault();
        }

        protected TReturn QueryFirst<TReturn>(string sql, DynamicParameters parameters)
        {
            var result = Connection.QueryFirstOrDefault<TReturn>(sql, parameters);
            return result;
        }

        protected void NonQuery(string sql, DynamicParameters parameters)
        {
            Connection.Query(sql, parameters);
        }

    }

    public abstract class BaseRepository<T> : BaseRepository, IBaseRepository<T>
        where T : BaseEntity
    {
        protected readonly string _name;

        public BaseRepository(NpgsqlConnection connection) : base(connection)
        {
            DapperExtensions.DapperExtensions.SqlDialect = new CustomPostgreSqlDialiect();
            _name = StringHelper.ToUnderscoreCase(typeof(T).Name);
        }

        public IEnumerable<string> FromTableColumnLikeFilter(string table, string column, string like) =>
            Query<string>($"SELECT DISTINCT {column} FROM {table} WHERE LOWER({column}) LIKE LOWER('%'||@Likeness||'%') LIMIT 10",
                new DynamicParameters(new { Likeness = like }));

        public virtual IEnumerable<T> Get() => Query<T>($"SELECT * FROM {_name}", null);

        public virtual int Add(T entity)
        {
            if (entity == null) return 0;
            Connection.Insert(entity);
            return entity.Id;
        }

        public virtual void Add(IEnumerable<T> entities)
        {
            if (entities == null || !entities.Any()) return;
            Connection.Insert(entities);
        }


        public virtual T Get(int id)
        {
            var pr = new DynamicParameters();
            pr.Add("id", id);
            return QueryFirst<T>($"SELECT * FROM {_name} WHERE id = :id", pr);
        }

        public virtual IEnumerable<T> Get(IEnumerable<int> ids)
        {
            var idsHashSql = new HashSet<int>(ids);
            IEnumerable<T> sqlEntities = new List<T>();
            if (idsHashSql.Count > 0)
            {
                var pr = new DynamicParameters();
                pr.Add("ids", idsHashSql.ToArray());
                sqlEntities = Query<T>($"SELECT * FROM {_name} WHERE id = ANY (:ids)", pr);
            }
            return sqlEntities;
        }

        public virtual IEnumerable<T> Get(Params parameters)
        {
            DynamicParameters sqlParams;
            var where = SqlHelper.WhereClause<T>(parameters, out sqlParams);
            var list = Query<T>($"SELECT * FROM {_name}{where}", sqlParams);
            return list;
        }

        public virtual IEnumerable<T> GetNoPaging(Params parameters)
        {
            DynamicParameters sqlParams;
            var where = SqlHelper.WhereClause_NoSortAndLimit<T>(parameters, out sqlParams);
            var list = Query<T>($"SELECT * FROM {_name}{where}", sqlParams);
            return list;
        }

        public virtual void Remove(IEnumerable<int> entityIds)
        {
            if (entityIds == null || !entityIds.Any()) return;
            var pr = new DynamicParameters();
            pr.Add("ids", new HashSet<int>(entityIds).ToArray());
            NonQuery($"DELETE FROM {_name} WHERE id = ANY (:ids)", pr);
        }

        public virtual void Update(T entity)
        {
            if (entity == null) return;
            Connection.Update(entity);
        }

        public void Update(IEnumerable<T> entities)
        {
            if (entities == null || !entities.Any()) return;
            Connection.Update(entities);
        }

        public virtual void Upsert(T entity)
        {
            if (entity == null) return;
            if (entity.Id == 0) Add(entity);
            else Update(entity);
        }

        public virtual void Remove(T entity)
        {
            if (entity == null) return;
            Connection.Delete(entity);
        }

        public virtual void Remove(int id)
        {
            var pr = new DynamicParameters();
            pr.Add("id", id);
            NonQuery($"DELETE FROM {_name} WHERE id = :id", pr);
        }
    }

    public abstract class BaseRepositoryWithVirtual<TEntity, TVirtual>
        : BaseRepository<TEntity>, IBaseRepositoryWithVirtual<TEntity, TVirtual>
        where TEntity : BaseEntity
        where TVirtual : BaseVirtual

    {
        public BaseRepositoryWithVirtual(NpgsqlConnection connection) : base(connection)
        {
            _virtualName = StringHelper.ToUnderscoreCase(typeof(TVirtual).Name);
        }

        protected readonly string _virtualName;
        protected string _extraLeftJoin;
        protected string _extraWhereClause;

        public IEnumerable<TVirtual> GetFullVirtualList()
        {
            var sql = $"SELECT * FROM {_virtualName}";
            var list = Query<TVirtual>(sql, null);
            return list;
        }

        public IEnumerable<TVirtual> GetVirtual(IEnumerable<int> ids)
        {
            if (ids == null || !ids.Any()) return new List<TVirtual>();
            var sql = $"SELECT * FROM {_virtualName} WHERE id = ANY (:ids)";
            var pr = new DynamicParameters();
            pr.Add("ids", new HashSet<int>(ids).ToArray());
            return Query<TVirtual>(sql, pr);
        }

        public TVirtual GetVirtual(int id)
        {
            var sql = $"SELECT * FROM {_virtualName} WHERE id = :id";
            var pr = new DynamicParameters();
            pr.Add("id", id);
            var entity = QueryFirst<TVirtual>(sql, pr);
            return (entity);
        }

        public IEnumerable<TVirtual> GetVirtualList()
        {
            var list = Query<TVirtual>($"SELECT * FROM {_virtualName}", null);
            return list;
        }

        public IEnumerable<TVirtual> GetVirtualList(Params parameters)
        {
            DynamicParameters sqlParams;
            var where = SqlHelper.WhereClause<TVirtual>(parameters, out sqlParams);
            var list = Query<TVirtual>($"SELECT * FROM {_virtualName}{where}", sqlParams);
            return list;
        }

        public IEnumerable<TVirtual> GetVirtualList(Params parameters, out int count, out IEnumerable<TVirtual> forTotals)
        {
            DynamicParameters sqlParams;
            var where = SqlHelper.WhereClause<TVirtual>(parameters, out sqlParams);
            var list = Query<TVirtual>($"SELECT * FROM {_virtualName}{where}", sqlParams);
            var whereCountAndTotals = SqlHelper.WhereClause_NoSortAndLimit<TVirtual>(parameters, out sqlParams);
            count = QueryCount($"SELECT COUNT(*) FROM {_virtualName}{whereCountAndTotals}", sqlParams);
            forTotals = Query<TVirtual>($"SELECT * FROM {_virtualName}{whereCountAndTotals}", sqlParams);
            return list;
        }

        public IEnumerable<TVirtual> GetVirtualListWithExtraParams(Params parameters, out int count, out IEnumerable<TVirtual> forTotals, Dictionary<string, object> hardParameters = null)
        {
            Dictionary<string, object> extraParams = new Dictionary<string, object>();
            DynamicParameters sqlParams;
            var where = SqlHelper.WhereClause<TVirtual>(parameters, out sqlParams);
            if (hardParameters != null)
                foreach (var parameter in hardParameters)
                    sqlParams.Add(parameter.Key, parameter.Value);
            if (_extraWhereClause != null)
            {
                if (where.Contains("WHERE"))
                    where = where.Insert(7, _extraWhereClause + " AND ");
                else
                    where = " WHERE " + _extraWhereClause + where;
            }
            foreach (var prop in parameters.GetType().GetProperties().Where(x => x.IsDefined(typeof(ExtraAttribute), false)))
            {
                if (prop.GetValue(parameters) != null)
                {
                    var attribute = (ExtraAttribute)prop.GetCustomAttributes(typeof(ExtraAttribute), true).FirstOrDefault();
                    var value = prop.GetValue(parameters);
                    sqlParams.Add(attribute.Name, value);
                    extraParams.Add(attribute.Name, value);
                }
            }
            var list = Query<TVirtual>($"SELECT DISTINCT {_virtualName}.* FROM {_virtualName} {_extraLeftJoin} {where}", sqlParams);
            var whereCountAndTotals = SqlHelper.WhereClause_NoSortAndLimit<TVirtual>(parameters, out sqlParams);
            if (_extraWhereClause != null)
            {
                if (whereCountAndTotals.Contains("WHERE"))
                    whereCountAndTotals += " AND " + _extraWhereClause;
                else
                    whereCountAndTotals = " WHERE " + _extraWhereClause;
            }
            foreach (var prop in extraParams)
                sqlParams.Add(prop.Key, prop.Value);
            if (hardParameters != null)
                foreach (var parameter in hardParameters)
                    sqlParams.Add(parameter.Key, parameter.Value);
            count = QueryCount($"SELECT COUNT(DISTINCT {_virtualName}.*) FROM {_virtualName} {_extraLeftJoin} {whereCountAndTotals}", sqlParams);
            forTotals = Query<TVirtual>($"SELECT DISTINCT {_virtualName}.* FROM {_virtualName} {_extraLeftJoin} {whereCountAndTotals}", sqlParams);
            return list;
        }

        public IEnumerable<TVirtual> GetVirtualList(Params parameters, out int count)
        {
            DynamicParameters sqlParams;
            var where = SqlHelper.WhereClause<TVirtual>(parameters, out sqlParams);
            var list = Query<TVirtual>($"SELECT * FROM {_virtualName}{where}", sqlParams);
            var whereCountAndTotals = SqlHelper.WhereClause_NoSortAndLimit<TVirtual>(parameters, out sqlParams);
            count = QueryCount($"SELECT COUNT(*) FROM {_virtualName}{whereCountAndTotals}", sqlParams);
            return list;
        }

        public IEnumerable<TVirtual> GetVirtualListNoPaging(Params parameters)
        {
            DynamicParameters sqlParams;
            var where = SqlHelper.WhereClause_NoSortAndLimit<TVirtual>(parameters, out sqlParams);
            var list = Query<TVirtual>($"SELECT * FROM {_virtualName}{where}", sqlParams);
            return list;
        }

    }
}
