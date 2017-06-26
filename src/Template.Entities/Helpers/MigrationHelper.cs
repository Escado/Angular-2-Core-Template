using System;
using System.Linq;
using FluentMigrator;
using FluentMigrator.Runner;
using FluentMigrator.Runner.Announcers;
using FluentMigrator.Runner.Initialization;
using System.Reflection;
using Npgsql;


namespace Template.Entities.Helpers
{
    public class MigrationHelper
    {
        private class MigrationOptions : IMigrationProcessorOptions
        {
            public bool PreviewOnly { get; set; }
            public string ProviderSwitches { get; set; }
            public int Timeout { get; set; }
        }

        public static void MigrateUp(string connectionString, string MigrationNamespace, long? toVersion = null)
        {
            var announcer = new TextWriterAnnouncer(s => System.Diagnostics.Debug.WriteLine(s));
            var assembly = Assembly.GetExecutingAssembly();
            var migrationContext = new RunnerContext(announcer) { Namespace = MigrationNamespace };
            var options = new MigrationOptions { PreviewOnly = false, Timeout = 60 };
            var factory = new FluentMigrator.Runner.Processors.Postgres.PostgresProcessorFactory();
            using (var processor = factory.Create(connectionString, announcer, options))
            {
                var runner = new MigrationRunner(assembly, migrationContext, processor);
                if (toVersion == null) runner.MigrateUp(true);
                else runner.MigrateUp(toVersion.Value);
            }
        }

        public static void MigrateDown(long toVersion, string MigrationNamespace, string connectionString)
        {
            var announcer = new TextWriterAnnouncer(s => System.Diagnostics.Debug.WriteLine(s));
            var assembly = Assembly.GetExecutingAssembly();
            var migrationContext = new RunnerContext(announcer) { Namespace = MigrationNamespace };
            var options = new MigrationOptions { PreviewOnly = false, Timeout = 60 };
            var factory = new FluentMigrator.Runner.Processors.Postgres.PostgresProcessorFactory();
            using (var processor = factory.Create(connectionString, announcer, options))
            {
                var runner = new MigrationRunner(assembly, migrationContext, processor);
                runner.MigrateDown(toVersion);
            }
        }

        public static void CreateDbIfNoneExists(string connectionString)
        {
            var split = connectionString.Split(';').ToList();
            var dbFragment = split.Last(x => !string.IsNullOrEmpty(x) && x.Split('=').First().Equals("database", StringComparison.InvariantCultureIgnoreCase));
            var db = dbFragment.Split('=').Last();
            split.Remove(dbFragment);
            split.Add("Database=postgres");
            var withDefaultDb = string.Join(";", split.Where(x => !string.IsNullOrWhiteSpace(x)));
            var conn = new NpgsqlConnection(withDefaultDb);
            var checkCmd = new NpgsqlCommand($"SELECT 1 FROM pg_database WHERE datname = '{db}'", conn);
            var createCmd = new NpgsqlCommand($@"
                CREATE DATABASE {db}
                WITH OWNER = ""{conn.UserName}""
                ENCODING = 'UTF8'
                CONNECTION LIMIT = -1;", conn);
            conn.Open();
            if (checkCmd.ExecuteScalar() == null) createCmd.ExecuteNonQuery();
            conn.Close();
        }
    }
}