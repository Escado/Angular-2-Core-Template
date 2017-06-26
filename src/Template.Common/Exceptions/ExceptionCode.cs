using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Template.Common.Exceptions
{
    public static class ExceptionCode
    {
        public enum General
        {
            [Description("Unknown error")]
            UnknownError = 10000,

            [Description("Invalid request")]
            InvalidRequest = 10001,
        }
    }
}