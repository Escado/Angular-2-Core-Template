using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Internal;
using Newtonsoft.Json;
using Template.Entities.ApiModels;
using Template.Common.Exceptions;
using Template.Common.Extensions;
using Microsoft.IdentityModel.Tokens;

namespace Template.API.Middlewares
{
    public class ExceptionMiddleware
    {
        RequestDelegate _next;
        private ILogger Logger { get; }

        public ExceptionMiddleware(RequestDelegate next, ILoggerFactory loggerFactory)
        {
            Logger = loggerFactory.CreateLogger(GetType().Name);
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (TemplateException ex)
            {
                context.Response.StatusCode = StatusCodes.Status400BadRequest;
                SetResponseBody(context, new ApiErrorResponse()
                {
                    code = Convert.ToInt32(ex.Code),
                    field = ex.Field,
                    error = ex.Message
                });
            }
            catch (Exception ex)
            {
                if (ex.GetType() == typeof(SecurityTokenExpiredException) || ex.GetType() == typeof(SecurityTokenException))
                {
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    SetResponseBody(context, new ApiErrorResponse()
                    {
                        code = 401,
                        error = "Unauthorized"
                    });
                }
                else
                {
                    
                    Logger.LogError("Unhandled exception occured | " + ex.ToString().Replace("\r\n", " | "));
                    //TODO: redo
                    //new LogRepository(new RideShareContext()).Add(new Log()
                    //{
                    //    TimeStamp = DateTime.Now,
                    //    Message = "Unhandled exception occured: \r\n" + ex
                    //});
                    context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                    var response = new ApiErrorResponse()
                    {
                        code = (int)ExceptionCode.General.UnknownError,
                        error = ExceptionCode.General.UnknownError.GetDescription(),
                    };

#if !RELEASE
                    response.error = ex.Message;
                    response.stackTrace = ex.StackTrace;
#endif
                    SetResponseBody(context, response);
                }
            }
        }

        public void SetResponseBody(HttpContext context, ApiErrorResponse response)
        {
            var json = JsonConvert.SerializeObject(response);
            using (var streamWriter = new StreamWriter(context.Response.Body))
            {
                streamWriter.Write(json);
                streamWriter.Flush();
            }
        }
    }
}
