using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Template.Common.Extensions;

namespace Template.Common.Exceptions
{
    public class TemplateException : Exception
    {
        public Enum Code { get; set; }
        public string Field { get; set; }

        public TemplateException(Enum code, string message, string field)
            : base(code.GetDescription() + " " + message)
        {
            Code = code;
            Field = field;
        }

        public TemplateException(Enum code, string message)
            : base(code.GetDescription() + " " + Environment.NewLine + message)
        {
            Code = code;
        }

        public TemplateException(Enum code)
            : base(code.GetDescription())
        {
            Code = code;
        }
    }
}
