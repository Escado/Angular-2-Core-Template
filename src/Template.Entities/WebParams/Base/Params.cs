using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Template.Entities.WebParams.Base
{
    public abstract class Params
    {
        public int page { get; set; } = 1;
        public int perPage { get; set; } = 100;
        public string sort { get; set; } = "Id";
        public string sortDir { get; set; } = "DESC";
    }
}
