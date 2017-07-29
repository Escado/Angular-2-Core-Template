using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Entities.Views.ViewSqls.Base
{
    public interface IBaseSqlView
    {
        IEnumerable<string> CreateViews { get; }
        IEnumerable<string> DropViews { get; }
    }
}
