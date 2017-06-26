namespace Template.Common.Helpers
{
    public static class CompareHelper
    {
        public static bool PropertiesAreEqual<T>(T obj1, T obj2)
        {
            if (obj1 == null || obj2 == null) return false;
            var type = typeof(T);
            var props = type.GetProperties();
            foreach (var prop in props)
            {
                var val1 = prop.GetValue(obj1);
                var val2 = prop.GetValue(obj2);
                if (val1 != null && val2 != null)
                    if (!val1.Equals(val2))
                        return false;
                    else if (val1 != null || val2 != null)
                        return false;
            }
            return true;
        }
    }
}
