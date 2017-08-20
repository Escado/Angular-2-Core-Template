namespace Template.Common
{
    public class ConfigSettings
    {
        // CODE VARIABLES

        public string ConnectionString { get; set; }
        public string MigrationNamespace { get; set; }

        // URLS

        public string ClientUrl { get; set; }
        public string BackendUrl { get; set; }
        public string IdentityUrl { get; set; }

        // USERNAMES / PASSWORDS

        public string SmtpHost { get; set; }
        public string SmtpPassword { get; set; }
        public string SmtpPort { get; set; }
        public string SmtpUsername { get; set; }
        public string EmailUsername { get; set; }

        // TOKEN

        public string TokenSecret { get; set; }
        public string TokenAudience { get; set; }
        public string TokenIssuer { get; set; }
    }
}