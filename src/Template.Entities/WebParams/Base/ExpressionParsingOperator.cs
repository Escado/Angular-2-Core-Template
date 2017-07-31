using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Template.Entities.WebParams.Base
{
    public enum ExpressionParsingOperator
    {

        [Description("<IGNORE>")]
        NoComparing,
        [Description("=")]
        Equals,
        [Description("= ANY")]
        IsPartOfStringList,
        [Description("= ANY")]
        IsPartOfEnumList,
        [Description("LIKE")]
        Contains,
        [Description("LIKE")]
        CandidatesContain,
        [Description(">")]
        GreaterThan,
        [Description(">=")]
        GreaterThanOrEquals,
        [Description("<")]
        LessThan,
        [Description("<=")]
        LessThanOrEquals
    }
}
