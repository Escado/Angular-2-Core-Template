## Required: 

Create appsettings files with your credentials and other information.  

### File names: 

appsettings.Debug.json  
appsettings.Development.json  
appsettings.Release.json  

#### Content format: 

    {
        "ConnectionStrings": 
        {
        "DefaultConnection": "<Connection string for Postgres Database>"
        },
        "ConfigSettings": {

            "MigrationNamespace": "<ProjectName>.Entities.Migrations",

            "ClientUrl": "",
            "BackendUrl": "",
            "IdentityUrl": "",

            "SmtpHost": "",
            "SmtpPort": "",
            "SmtpUsername": "",
            "SmtpPassword": "",
            "EmailUsername": ""
        } 
    }`