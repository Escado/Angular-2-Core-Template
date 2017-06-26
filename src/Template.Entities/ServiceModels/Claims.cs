using Template.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Template.Entities.ServiceModels
{
    public class Claims
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Provider { get; set; }
        public Provider ProviderEnum { get; set; }
        public string ProviderId { get; set; }
        /// <summary>
        /// User is registered, has user entry
        /// </summary>
        public bool IsRegistered { get; set; }
        /// <summary>
        /// Access token was provided, it is possible to get access_token without having user entry (not being being registered)
        /// </summary>
        public bool IsAuthenticated { get; set; }
    }
}
