using System;
using System.Text.RegularExpressions;

namespace Template.Common.Helpers
{
    public static class ValidationHelper
    {
        public static bool IsValidEmail(string email)
        {
            return (new Regex(@"^(?("")("".+?(?<!\\)""@)|(([0-9a-z]((\.(?!\.))|[-!#\$%&'\*\+/=\?\^`\{\}\|~\w])*)(?<=[0-9a-z])@))" +
                    @"(?(\[)(\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-z][-\w]*[0-9a-z]*\.)+[a-z0-9][\-a-z0-9]{0,22}[a-z0-9]))$",
                    RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250)).Match(email).Success);
        }

        public static bool IsValidYoutubeLink(string youtubeLink)
        {
            return (new Regex(@"(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?",
                    RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250)).Match(youtubeLink).Success);
        }
        /// <summary>
        /// Returns true if string contains only letters and numbers (including spaces and dashes).
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static bool IsAlphanumericString(string text)
        {
            return Regex.Replace(text, @"[\p{L}\p{Nd} -]+", "").Length == 0;
        }
    }
}
