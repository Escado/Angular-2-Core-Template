using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace Template.Common.Helpers
{
    public class ConvertHelper
    {
        public static byte[] ToBytes(Object obj)
        {
            if (obj == null)
                return null;
            BinaryFormatter bf = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream())
            {
                bf.Serialize(ms, obj);
                return ms.ToArray();
            }
        }

        public static T ToObject<T>(byte[] bytes)
            where T : class, new()
        {
            MemoryStream memStream = new MemoryStream();
            BinaryFormatter binForm = new BinaryFormatter();
            memStream.Write(bytes, 0, bytes.Length);
            memStream.Seek(0, SeekOrigin.Begin);
            T obj = (T)binForm.Deserialize(memStream, null);
            return obj;
        }

        public static string ToBase64(string plainText)
        {
            if (plainText == null) return null;
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return Convert.ToBase64String(plainTextBytes);
        }

        public static string FromBase64(string base64EncodedData)
        {
            if (base64EncodedData == null) return null;
            var base64EncodedBytes = Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }

        public static T ConvertTo<T>(IConvertible obj)
        {
            Type t = typeof(T);
            Type u = Nullable.GetUnderlyingType(t);

            //if T is nullable
            if (u != null)
                return (obj == null) ? default(T) : (T)Convert.ChangeType(obj, u);
            //else if T is not nullable
            else
                return (T)Convert.ChangeType(obj, t);
        }
    }
}
