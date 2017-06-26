using System;

namespace Template.Entities.WebParams.Base
{
    public abstract class MobileParams : Params
    {
        public int page { get; set; } = 1;
        public int perPage { get; set; } = 10;
        public string sort { get; set; } = "created";
        public string sortDir { get; set; } = "DESC";
    }
}