using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Template.Entities.WebParams.Base
{
    public class ExpressionParsingAttribute : Attribute
    {
        public readonly string NameOfTheProperty;
        public readonly string NamesofCandidateProperties;
        public readonly ExpressionParsingOperator ExpressionOperatorUsed;

        public ExpressionParsingAttribute(string propertyName, ExpressionParsingOperator expressionOperator, string namesofCandidateProperties)
        {
            NameOfTheProperty = propertyName;
            ExpressionOperatorUsed = expressionOperator;
            NamesofCandidateProperties = namesofCandidateProperties;
        }
        
        public ExpressionParsingAttribute(string propertyName, ExpressionParsingOperator expressionOperator)
        {
            NameOfTheProperty = propertyName;
            ExpressionOperatorUsed = expressionOperator;
        }
    }
}
