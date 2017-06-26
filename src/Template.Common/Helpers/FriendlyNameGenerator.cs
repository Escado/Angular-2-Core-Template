using System;
using System.Collections.Generic;

namespace Template.Common.Helpers
{
    public static class FriendlyNameGenerator
    {
        public static string GetFriendlyName(string prefix, int sections, int sectionSize, bool areSectionsNumericOnly = true)
        {
            // Random with seed
            Random rnd = new Random(); //new Random((int)DateTime.Now.Ticks);

            List<char> alphabet = new List<char> { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
            List<char> numbers = new List<char> { '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' };
            List<char> symbols = numbers;

            if (!areSectionsNumericOnly)
                symbols.AddRange(alphabet);

            string result = prefix + "-";
            for (int i = 0; i < sections; i++)
            {
                var section = "";
                for (int j = 0; j < sectionSize; j++)
                {
                    section += symbols[rnd.Next(0, symbols.Count)];
                }
                section += "-";
                result += section;
            }
            result = result.TrimEnd('-');
            return result;
        }
    }
}
