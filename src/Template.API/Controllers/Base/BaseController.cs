using Template.API.Helpers;
using Template.Common.Exceptions;
using Template.Entities.ServiceModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Template.API.Controllers.Base
{
    public abstract class BaseController : Controller
    {
        protected void ValidateModel(object model)
        {
            var results = new List<ValidationResult>();

            var context = new ValidationContext(model, null, null);
            Validator.TryValidateObject(model, context, results, true);

            if (results.Count != 0)
            {
                var str = "";
                foreach (var result in results)
                {
                    str += result.ErrorMessage;
                    str += Environment.NewLine;
                }
                throw new TemplateException(ExceptionCode.General.DataValidationFailed, str);
            }
        }

        protected Claims GetClaims()
        {
            return ClaimsPrincipalHelper.GetClaims(User);
        }

        protected int GetUserId()
        {
            return ClaimsPrincipalHelper.GetUserIdFromSubClaim(User);
        }

        protected bool IsTester()
        {
            return ClaimsPrincipalHelper.UserHasTesterClaim(User);
        }
    }
}
