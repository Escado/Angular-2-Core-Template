namespace Template.Common
{
    public class ConfigSettings
    {
        public string ConnectionString { get; set; }
        public string MigrationNamespace { get; set; }
        public string Test { get; set; }

        public string ClientUrl { get; set; }
        public string BackendUrl { get; set; }
        public string IdentityUrl { get; set; }

        public string SmtpHost { get; set; }
        public string SmtpPassword { get; set; }
        public string SmtpPort { get; set; }
        public string SmtpUsername { get; set; }
        public string EmailUsername { get; set; }
    }
}