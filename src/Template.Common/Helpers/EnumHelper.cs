using DriveAdvice.Common.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;

namespace Template.Common.Helpers
{
    public static class EnumHelper
    {
        public static T1 GetAttribute<T, T1>(T value)
        {
            var enumType = typeof(T);
            var enumName = enumType.Name;
            var memInfo = enumType.GetMember(value.ToString());
            if (memInfo.Length > 0)
            {
                return (T1)memInfo[0].GetCustomAttributes(typeof(T1), false)[0];
            }
            return default(T1);
        }

        public static List<Classifier> GetValues<T>()
        {
            var enumType = typeof(T);
            var enumName = enumType.Name;
            List<Classifier> cls = new List<Classifier>();
            foreach (var field in enumType.GetFields(BindingFlags.Public | BindingFlags.Static))
            {
                string description = "";
                var memInfo = enumType.GetMember(field.GetValue(null).ToString());
                if (memInfo.Length > 0)
                {
                    var attributes = memInfo[0].GetCustomAttributes(typeof(DescriptionAttribute),
                        false);
                    if (attributes.Length > 0)
                        description = ((DescriptionAttribute)attributes[0]).Description;
                }


                cls.Add(new Classifier()
                {
                    Value = (ulong)Convert.ChangeType(field.GetValue(null), typeof(ulong)),
                    Display = field.Name,
                    Description = description
                });
            }
            return cls;
        }

        public static Classifier GetValue<T>(T value)
        {
            var enumType = typeof(T);
            var enumName = enumType.Name;
            Classifier cls = new Classifier();
            string description = "";
            var memInfo = enumType.GetMember(value.ToString());
            if (memInfo.Length > 0)
            {
                var attributes = memInfo[0].GetCustomAttributes(typeof(DescriptionAttribute),
                    false);
                if (attributes.Length > 0)
                    description = ((DescriptionAttribute)attributes[0]).Description;
            }

            cls = new Classifier()
            {
                Value = (ulong)Convert.ChangeType(value, typeof(ulong)),
                Display = value.ToString(),
                Description = description
            };

            return cls;
        }
    }
}
