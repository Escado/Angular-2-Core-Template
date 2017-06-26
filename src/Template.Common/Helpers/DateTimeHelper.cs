using System;

namespace Template.Common.Helpers
{
    public static class DateTimeHelper
    {
        public static int? ToUnixTimeStamp(DateTime? date) => date.HasValue ? ToUnixTimeStamp(date.Value) : (int?)null;
        public static int ToUnixTimeStamp(DateTime date)
        {
            var epoch = new DateTime(1970, 1, 1);
            return (int)(date.Subtract(epoch)).TotalSeconds;
        }

        public static DateTime? ToDateTimeFromUnix(int? dateUnix) => dateUnix.HasValue ? ToDateTimeFromUnix(dateUnix.Value) : (DateTime?)null;
        public static DateTime ToDateTimeFromUnix(int dateUnix)
        {
            var epoch = new DateTime(1970, 1, 1);
            return epoch.AddSeconds(dateUnix);
        }
    }
}
