using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;
using DapperExtensions;
using DapperExtensions.Mapper;
using DapperExtensions.Sql;
using Dapper;
using Template.Repositories.Helpers;
using Template.Entities.DbModels.Base;
using Template.Entities.WebParams.Base;
using Template.Common.Extensions;
using Template.Common.Helpers;
using Template.Repositories.Mappers;
using Template.Repositories.Base;

namespace Template.Repositories.Helpers
{
    public static class SqlHelper
    {
        private static SqlGeneratorImpl _sqlGenerator = new SqlGeneratorImpl(new DapperExtensionsConfiguration(typeof(AutoClassMapper<>), new List<Assembly>(), new CustomPostgreSqlDialiect()));

        public static string WhereClause_NoSortAndLimit<TDatabaseModel>(Params frontendParams, out DynamicParameters sqlParameters)
            where TDatabaseModel : BaseEntity
        {
            sqlParameters = new DynamicParameters();
            if (frontendParams == null)
                return string.Empty;

            var backendParameters = ExtractBackendParameters(frontendParams);
            ValidateAndNormalizeParams<TDatabaseModel>(backendParameters, _sqlGenerator);
            backendParameters = backendParameters.Where(p => p.IsNormalized).ToHashSet();

            return GenerateWhereSql(backendParameters, out sqlParameters);
        }

        public static string WhereClause<TDatabaseModel>(Params frontendParams, out DynamicParameters sqlParameters)
            where TDatabaseModel : BaseEntity
        {
            sqlParameters = new DynamicParameters();
            if (frontendParams == null)
                return string.Empty;

            var backendParameters = ExtractBackendParameters(frontendParams);
            ValidateAndNormalizeParams<TDatabaseModel>(backendParameters, _sqlGenerator);
            backendParameters = backendParameters.Where(p => p.IsNormalized).ToHashSet();

            HashSet<SqlWhereParameter> sortParameters = GetProperties(frontendParams.sort);
            ValidateAndNormalizeParams<TDatabaseModel>(sortParameters, _sqlGenerator);
            var sortAndLimit = $"{GenerateSortSql(sortParameters, frontendParams.sortDir)} {GeneratePageSql(frontendParams.page - 1, frontendParams.perPage)}";
            return $"{GenerateWhereSql(backendParameters, out sqlParameters)} {sortAndLimit}";
        }

        public static string WhereClause<TDatabaseModel>(Params frontendParams, out DynamicParameters sqlParameters, out List<string> columnNames)
            where TDatabaseModel : BaseEntity
        {
            sqlParameters = new DynamicParameters();
            columnNames = new List<string>();
            if (frontendParams == null)
                return string.Empty;

            var backendParameters = ExtractBackendParameters(frontendParams);
            foreach (var prop in backendParameters)
                if (prop.PropertyName != "perPage" && prop.PropertyName != "page")
                    columnNames.Add(prop.PropertyName);
            ValidateAndNormalizeParams<TDatabaseModel>(backendParameters, _sqlGenerator);
            backendParameters = backendParameters.Where(p => p.IsNormalized).ToHashSet();


            var sortParameters = GetProperties(frontendParams.sort);
            ValidateAndNormalizeParams<TDatabaseModel>(sortParameters, _sqlGenerator);
            var sortAndLimit = $"{GenerateSortSql(sortParameters, frontendParams.sortDir)} {GeneratePageSql(frontendParams.page - 1, frontendParams.perPage)}";
            return $"{GenerateWhereSql(backendParameters, out sqlParameters)} {sortAndLimit}";
        }

        public static string GenertateWhere<TDatabaseModel>(Params frontendParams, out DynamicParameters sqlParameters)
            where TDatabaseModel : BaseEntity
        {
            sqlParameters = new DynamicParameters();
            if (frontendParams == null)
                return string.Empty;
            var backendParameters = ExtractBackendParameters(frontendParams);
            ValidateAndNormalizeParams<TDatabaseModel>(backendParameters, _sqlGenerator);
            backendParameters = backendParameters.Where(p => p.IsNormalized).ToHashSet();
            return GenerateWhereSql(backendParameters, out sqlParameters);
        }

        public static string GenerateSortAndLimit<TDatabaseModel>(Params frontendParams)
            where TDatabaseModel : BaseEntity
        {
            var sortParameters = GetProperties(frontendParams.sort);
            ValidateAndNormalizeParams<TDatabaseModel>(sortParameters, _sqlGenerator);
            return $"{GenerateSortSql(sortParameters, frontendParams.sortDir)} {GeneratePageSql(frontendParams.page - 1, frontendParams.perPage)}";
        }

        private static string GeneratePageSql(int? page, int? perPage)
        {
            StringBuilder sb = new StringBuilder(" LIMIT ");

            if (perPage == null || perPage == 0)
                sb.Append(" ALL ");
            else
            {
                sb.Append(perPage);
                if (page != null && page != 0)
                    sb.Append($" OFFSET {page.Value * perPage}");
            }
            return sb.ToString();
        }

        private static string GenerateSortSql(HashSet<SqlWhereParameter> sortParameters, string sortDirection)
        {
            if (sortParameters == null || sortParameters.Count == 0)
                return string.Empty;

            string direction = string.Empty;
            if (!string.IsNullOrEmpty(sortDirection) && sortDirection.ToLower().Contains("desc"))
                direction = " DESC NULLS LAST ";

            StringBuilder result = new StringBuilder(" ORDER BY ");

            for (int i = 0; i < sortParameters.Count; i++)
            {
                result.Append(sortParameters.ElementAt(i).PropertyName);
                if (i + 1 != sortParameters.Count)
                    result.Append(" , ");
            }

            result.Append(direction);
            return result.ToString();
        }

        private static HashSet<SqlWhereParameter> GetProperties(string propertiesLine)
        {
            if (string.IsNullOrEmpty(propertiesLine))
                return new HashSet<SqlWhereParameter>();

            var splittedProperties = propertiesLine.Replace(" ", "").Split(',');
            HashSet<SqlWhereParameter> sortParameters = new HashSet<SqlWhereParameter>();
            foreach (var propertyName in splittedProperties)
                sortParameters.Add(new SqlWhereParameter() { PropertyName = propertyName });

            return sortParameters;
        }

        private static string GenerateWhereSql(HashSet<SqlWhereParameter> objectProperties, out DynamicParameters sqlParameters)
        {
            sqlParameters = new DynamicParameters();
            if (objectProperties == null || objectProperties.Count == 0)
                return string.Empty;
            var result = new StringBuilder(" WHERE ");
            for (int i = 0; i < objectProperties.Count; i++)
            {
                var property = objectProperties.ElementAt(i);
                var operatorStr = property.Operator.GetDescription();

                //for hardcoded expressions
                if (property.IsNormalized && property.Operator == ExpressionParsingOperator.NoComparing)
                    result.AppendLine("(" + property.PropertyName + ")");

                //for lists
                else if (property.Operator == ExpressionParsingOperator.IsPartOfEnumList && property.PropertyValue is IEnumerable)
                {
                    if (((IEnumerable)property.PropertyValue).ToDynamicList().Count > 0)
                    {
                        var randomString = StringHelper.RandomString(32);
                        sqlParameters.Add(randomString, ((IEnumerable)property.PropertyValue).ToDynamicArray<int>());
                        result.AppendLine($"{property.PropertyName} {operatorStr} (:{randomString})");
                    }
                    else
                    {
                        result.Remove(result.Length - 5, 5);//REMOVE LAST " AND " for this property
                        continue;
                    }
                }
                else if (property.Operator == ExpressionParsingOperator.IsPartOfStringList && property.PropertyValue is IEnumerable)
                {
                    if (((IEnumerable)property.PropertyValue).ToDynamicList().Count > 0)
                    {
                        var randomString = StringHelper.RandomString(32);
                        sqlParameters.Add(randomString, ((IEnumerable)property.PropertyValue).ToDynamicArray<string>().Select(x => x.ToLowerInvariant()).ToArray());
                        result.AppendLine($"LOWER({property.PropertyName}) {operatorStr} (:{randomString})");
                    }
                    else
                    {
                        result.Remove(result.Length - 5, 5);//REMOVE LAST " AND " for this property
                        continue;
                    }
                }

                //for most of the data
                else if (property.PropertyValue.GetType() != typeof(string) &&
                    property.PropertyValue.GetType() != typeof(DateTime) &&
                    property.PropertyValue.GetType() != typeof(char))
                {
                    var randomString = StringHelper.RandomString(32);
                    result.AppendLine($"{property.PropertyName} {operatorStr} :{randomString}");
                    sqlParameters.Add(randomString, property.PropertyValue);
                }

                // for string pattern comparison
                else if (property.Operator == ExpressionParsingOperator.Contains)
                {
                    var randomString = StringHelper.RandomString(32);
                    result.AppendLine($"LOWER({property.PropertyName}) {operatorStr} LOWER('%'||:{randomString}||'%')");
                    sqlParameters.Add(randomString, property.PropertyValue);
                }
                else if (property.Operator == ExpressionParsingOperator.CandidatesContain && property.CandidateNames != null && property.CandidateNames.Count > 0)
                {
                    var randomString = StringHelper.RandomString(32);
                    result.AppendLine("(" + string.Join(" OR ", property.CandidateNames.Select(x => $"(LOWER({x}) {operatorStr} LOWER('%'||:{randomString}||'%'))")) + ")");
                    sqlParameters.Add(randomString, property.PropertyValue);
                }

                // for date
                else if (property.PropertyValue is DateTime)
                {
                    var dateTime = (DateTime)property.PropertyValue;
                    result.AppendLine($"{property.PropertyName} {operatorStr} '{dateTime.ToString("yyyy-MM-dd HH:mm:ss")}'");
                }
                // for string/char = 'value'
                else
                {
                    var randomString = StringHelper.RandomString(32);
                    result.AppendLine($"LOWER({property.PropertyName}) {operatorStr} LOWER(:{randomString})");
                    sqlParameters.Add(randomString, property.PropertyValue);
                }

                if (i + 1 != objectProperties.Count)
                    result.Append(" AND ");
            }
            return result.ToString();
        }

        private static HashSet<SqlWhereParameter> ExtractBackendParameters(Params source)
        {
            HashSet<SqlWhereParameter> result = new HashSet<SqlWhereParameter>();
            var type = source.GetType();
            foreach (var propertyInfo in type.GetProperties())
            {
                var propertyValue = propertyInfo.GetValue(source);
                if (propertyValue == null)
                    continue;
                var propertyName = string.Empty;
                var propertyOperator = string.Empty;
                var candidateProperties = string.Empty;
                ExpressionParsingOperator propertyOperatorEnum = ExpressionParsingOperator.Equals;

                foreach (var attr in propertyInfo.GetCustomAttributes(typeof(ExpressionParsingAttribute), false))
                {
                    var expressionAttribute = (ExpressionParsingAttribute)attr;
                    propertyName = expressionAttribute.NameOfTheProperty;
                    propertyOperatorEnum = expressionAttribute.ExpressionOperatorUsed;
                    propertyOperator = propertyOperatorEnum.GetDescription();
                    candidateProperties = expressionAttribute.NamesofCandidateProperties;
                }

                if (string.IsNullOrEmpty(propertyName) || string.IsNullOrEmpty(propertyOperator))
                    continue;
                var parameter = new SqlWhereParameter()
                {
                    PropertyName = propertyName,
                    PropertyValue = propertyValue,
                    Operator = propertyOperatorEnum,
                };
                if (propertyOperatorEnum == ExpressionParsingOperator.NoComparing)
                {
                    if (propertyValue is bool && (bool)propertyValue)
                        parameter.IsNormalized = true;
                    else continue;
                }
                if (propertyOperatorEnum == ExpressionParsingOperator.CandidatesContain)
                    //parameter has no candidates
                    if (string.IsNullOrEmpty(candidateProperties))
                        continue;
                    //extract similarity candidates
                    else parameter.CandidateNames = candidateProperties.Split(',').ToList();
                //for int enums only
                Type u = Nullable.GetUnderlyingType(propertyInfo.PropertyType);
                if (u != null && u.IsEnum)
                    parameter.PropertyValue = (int)propertyValue;
                //convert enum list to int list
                if (propertyOperatorEnum == ExpressionParsingOperator.IsPartOfEnumList && propertyValue is IEnumerable && propertyValue.GetType().GetGenericArguments().First().IsEnum)
                    parameter.PropertyValue = ((IEnumerable)propertyValue).ToDynamicArray().Select(x => (int)x).ToList();
                //for datetime ranges
                if (propertyOperatorEnum == ExpressionParsingOperator.GreaterThan || propertyOperatorEnum == ExpressionParsingOperator.GreaterThanOrEquals && propertyValue is DateTime?)
                {
                    var date = ((DateTime?)propertyValue).Value;
                    parameter.PropertyValue = new DateTime(date.Year, date.Month, date.Day, date.Hour, date.Minute, date.Second);
                }
                else if (propertyOperatorEnum == ExpressionParsingOperator.LessThan || propertyOperatorEnum == ExpressionParsingOperator.LessThanOrEquals && propertyValue is DateTime?)
                {
                    var date = ((DateTime?)propertyValue).Value;
                    parameter.PropertyValue = new DateTime(date.Year, date.Month, date.Day, 23, 59, 59);
                }
                result.Add(parameter);
            }
            return result;
        }

        private static void ValidateAndNormalizeParams<TDatabaseModel>(HashSet<SqlWhereParameter> parameters, SqlGeneratorImpl sqlGenerator)
            where TDatabaseModel : BaseEntity
        {
            var tableMapper = new AutoClassMapper<TDatabaseModel>();
            var tableName = sqlGenerator.GetTableName(tableMapper);

            PropertyInfo[] validationPropertyInfos = typeof(TDatabaseModel).GetProperties();
            foreach (var param in parameters.Where(p => p.IsNormalized == false))
            {
                foreach (var validationProperty in validationPropertyInfos)
                {
                    if (!String.Equals(param.PropertyName, validationProperty.Name, StringComparison.OrdinalIgnoreCase))
                        continue;
                    if (param.CandidateNames != null && param.CandidateNames.Count > 0 && param.Operator == ExpressionParsingOperator.CandidatesContain)
                    {
                        if (param.CandidateNames.Any(x => !String.Equals(x, validationProperty.Name, StringComparison.OrdinalIgnoreCase)))
                            continue;
                        param.CandidateNames = param.CandidateNames.Select(x => $"{tableName}.{sqlGenerator.GetColumnName(new AutoClassMapper<TDatabaseModel>(), x, false)}").ToList();
                    }
                    param.PropertyName = $"{tableName}.{sqlGenerator.GetColumnName(new AutoClassMapper<TDatabaseModel>(), param.PropertyName, false)}";
                    param.IsNormalized = true;
                    break;
                }
            }
        }
    }
}