using System.ComponentModel;

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

            [Description("User with this id doesn't exists")]
            NoUser = 20003
        }

        public enum Product
        {
            [Description("Product with the same name already exists")]
            DuplicateProduct = 30001,

            [Description("Cannot create product with empty name, Vendor price, Listing price or status ")]
            EmptyField = 30002,

            [Description("Product Vendor price cannot be bigger than a product listing price")]
            VendorBiggerThanListingPrice = 30003,

            [Description("Product name doesn't exists")]
            NoProduct = 30004


        }
    }
}