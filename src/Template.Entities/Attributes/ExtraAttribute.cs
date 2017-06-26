using System;

namespace Template.Entities.Attributes
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = true)]
    public class ExtraAttribute :Attribute
    {
        public string Name { get; set; }
    }
}
