using System;
using System.ComponentModel;
using System.Linq;
using System.Reflection;

namespace Template.Common.Extensions
{
    public static class EnumExtensions
    {
        public static string GetDescription(this Enum element)
        {
            FieldInfo fi = element.GetType().GetField(element.ToString());
            DescriptionAttribute[] attributes = (DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);
            if (attributes != null && attributes.Any())
                return attributes[0].Description;
            return element.ToString();
        }
    }
}