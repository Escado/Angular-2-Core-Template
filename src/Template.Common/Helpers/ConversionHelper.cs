using System;
using System.Collections.Generic;
using System.Text;

namespace Template.Common.Helpers
{
    public static class ConversionHelper
    {
        public static string FromBase64(string hash)
        {
            byte[] data = Convert.FromBase64String(hash);
            return Encoding.UTF8.GetString(data);
        }

        public static string ToBase64(string val)
        {
            var bytes = Encoding.UTF8.GetBytes(val);
            return Convert.ToBase64String(bytes);
        }

        public static string ToUrlEncoded(object message)
        {
            var messageUrlDataList = new List<string>();
            var props = message.GetType().GetProperties();
            foreach (var prop in props)
            {
                string val = "";
                if (prop.PropertyType.IsEnum) val = ((int)prop.GetValue(message)).ToString();
                else val = prop.GetValue(message).ToString();
                messageUrlDataList.Add(string.Format("{0}={1}", prop.Name, val));
            }
            var messageUrlData = string.Join("&", messageUrlDataList);
            return messageUrlData;
        }
    }
}
