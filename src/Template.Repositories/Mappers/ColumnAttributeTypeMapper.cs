using System;
using System.Linq;
using System.Reflection;
using Dapper;

namespace Template.Repositories.Mappers
{
    public class ColumnAttributeTypeMapper : FallbackTypeMapper
    {
        public ColumnAttributeTypeMapper(Type t) : base(new SqlMapper.ITypeMap[]
            {
                new CustomPropertyTypeMap(t, (type, columnName) => type.GetProperties().FirstOrDefault(prop => prop.Name == columnName)),
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
                       prop.Name  == columnName)
                   ),
                new DefaultTypeMap(typeof(T))
            })
        { }
    }
}