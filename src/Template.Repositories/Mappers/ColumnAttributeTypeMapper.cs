using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Common.Helpers;

namespace Template.Repositories.Mappers
{
    public class ColumnAttributeTypeMapper : FallbackTypeMapper
    {
        public ColumnAttributeTypeMapper(Type t) : base(new SqlMapper.ITypeMap[]
            {
                new CustomPropertyTypeMap(t, (type, columnName) => type.GetProperties().FirstOrDefault(prop => StringHelper.ToUnderscoreCase(prop.Name) == columnName)),
                new DefaultTypeMap(t)
            })
        { }
    }

    public class ColumnAttributeTypeMapper<T> : FallbackTypeMapper
    {
        public ColumnAttributeTypeMapper()
            : base(new SqlMapper.ITypeMap[]
            {
                new CustomPropertyTypeMap(
                   typeof(T),
                   (type, columnName) =>
                       type.GetProperties().FirstOrDefault(prop =>
                       StringHelper.ToUnderscoreCase(prop.Name) == columnName)
                   ),
                new DefaultTypeMap(typeof(T))
            })
        {
        }
    }
}
