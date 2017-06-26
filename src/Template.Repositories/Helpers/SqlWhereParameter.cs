using System.Collections.Generic;
using Template.Entities.WebParams.Base;

namespace Template.Repositories.Helpers
{
    internal class SqlWhereParameter
    {
        public string PropertyName { get; set; }
        public object PropertyValue { get; set; }
        public bool IsNormalized { get; set; }
        public ExpressionParsingOperator Operator { get; set; }
        public List<string> CandidateNames { get; set; }
    }
}
