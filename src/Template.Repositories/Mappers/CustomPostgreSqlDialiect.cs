﻿using DapperExtensions.Sql;
using Template.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Template.Common.Helpers;

namespace Template.Repositories.Mappers
{
    public class CustomPostgreSqlDialiect : SqlDialectBase
    {
        public override string GetIdentitySql(string tableName)
        {
            return "SELECT LASTVAL() AS Id";
        }

        public override string GetPagingSql(string sql, int page, int resultsPerPage, IDictionary<string, object> parameters)
        {
            int startValue = page * resultsPerPage;
            return GetSetSql(sql, startValue, resultsPerPage, parameters);
        }

        public override string GetSetSql(string sql, int firstResult, int maxResults, IDictionary<string, object> parameters)
        {
            string result = string.Format("{0} LIMIT @firstResult OFFSET @pageStartRowNbr", sql);
            parameters.Add("@firstResult", firstResult);
            parameters.Add("@maxResults", maxResults);
            return result;
        }


        public override string GetColumnName(string prefix, string columnName, string alias) => StringHelper.ToUnderscoreCase(base.GetColumnName(null, columnName, alias));
        public override string GetTableName(string schemaName, string tableName, string alias) => StringHelper.ToUnderscoreCase(base.GetTableName(schemaName, tableName, alias));
    }
}
