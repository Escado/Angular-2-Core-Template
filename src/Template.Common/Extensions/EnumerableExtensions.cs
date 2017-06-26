using System.Collections.Generic;
using System.Linq;

//For convenience
namespace Template.Common.Extensions
{
    /// <summary>
    /// Is GDS.Common.Helpers class
    /// </summary>
    public static class EnumerableExtensions
    {
        public static HashSet<T> ToHashSet<T>(this IEnumerable<T> source) => new HashSet<T>(source);

        public static void AddRange<T>(this HashSet<T> source, IEnumerable<T> items) { foreach (var item in items) source.Add(item); }

        public static List<T> NotNullAdd<T>(this List<T> source, T item)
        {
            if (item != null) source.Add(item);
            return source;
        }

        public static List<T> NotNullAddRange<T>(this List<T> source, IEnumerable<T> item)
        {
            source.AddRange(item.Where(x => x != null));
            return source;
        }
    }
}
