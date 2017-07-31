using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace Template.Common.Helpers
{
    public class StringHelper
    {
        private static Random random = new Random((int)DateTime.Now.Ticks);
        private static string[] reservedKeywords = new string[2] { "Order","User" };

        public static char[] Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();

        public static char GetNextAlphabetLetter(char from)
        {
            bool returnNext = false;
            foreach(var l in Alphabet)
            {
                if (returnNext) return l;
                returnNext = l == from;
            }
            return Alphabet.Last();
        }

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static string ToUnderscoreCase(string str)
        {
            if (str == null) return null;
            str = str.Trim('"'); //trim quotes for postgresql, since we use lowercase only
            var result = string.Concat(str.Select((x, i) => i > 0 && char.IsUpper(x) ? "_" + x.ToString() : x.ToString())).ToLower();

            if (reservedKeywords.Any(x => x.ToLower().Equals(result)))
                result = "\"" + result + "\"";
            return result;
        }

        public static string Trim(string str, int length) => string.IsNullOrEmpty(str) ? str : (str.Length <= length ? str : str.Substring(0, length));
        
        public static string RemoveSpecialCharacters(string str) => string.IsNullOrEmpty(str) ? str : Regex.Replace(str, "[^a-zA-Z0-9_.]+", "", RegexOptions.Compiled);
    }
}
