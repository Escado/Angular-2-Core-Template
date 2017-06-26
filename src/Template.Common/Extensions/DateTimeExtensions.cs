using System;

namespace Template.Common.Extensions
{
    public static class DateTimeExtensions
    {
        public static long ToUnix(this DateTime dateTime) => (long)((TimeZoneInfo.ConvertTimeToUtc(dateTime) - new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc)).TotalSeconds);
        
        /// <summary>
        /// Returns true if given dateTime is from and to given time inclusive.
        /// </summary>
        public static bool IsFromTo(this DateTime dateTime, DateTime from, DateTime to) => (dateTime >= from && dateTime <= to);
        
        /// <summary>
        /// Returns true if given timeSpan is from and to given time inclusive.
        /// </summary>
        public static bool IsFromTo(this TimeSpan timeSpan, TimeSpan from, TimeSpan to) => (timeSpan >= from && timeSpan <= to);
    }
}