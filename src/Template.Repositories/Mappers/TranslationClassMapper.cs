using DapperExtensions.Mapper;
using RDS.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Template.Repositories.Mappers
{
    public class TranslationClassMapper: ClassMapper<Translation>
    {
        public TranslationClassMapper()
        {
            Map(x => x.TargetId).Key(KeyType.Assigned);
            Map(x => x.Type).Key(KeyType.Assigned);
            Map(x => x.Language).Key(KeyType.Assigned);
            AutoMap();
        }
    }
}
