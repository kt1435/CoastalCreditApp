using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace CreditApp.Classes
{
    public class JsonReponseMessage: HttpResponseMessage
    {
        public JsonReponseMessage(HttpStatusCode code) : base(code)
        {
        }
        public string jsonResult { get; set; }
    }
}
