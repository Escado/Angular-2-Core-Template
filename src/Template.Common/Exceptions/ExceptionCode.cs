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

            [Description("Failed to validate data")]
            DataValidationFailed = 10002,
        }

        public enum User
        {
            [Description("User with the same name and surname already exists")]
            DuplicateUser = 20001,

            [Description("Cannot create user with empty name or surname")]
            EmptyNameOrSurname = 20002,

            [Description("Password and username fields cannot be empty")]
            EmptyUsernameOrPassword = 20003,
        }
    }
}