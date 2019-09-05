using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using CreditApp.Classes;
using CreditApp.Interfaces;
using System.Web.Http;

namespace CreditApp.Services
{
    /*
       Will keep all Api calls in one service for this exercise. 
       Would break into multiple service for production code.
     */
    public abstract class CreditCardService
    {
        protected string baseString = "https://";

        protected void handleExecptions(Exception e)
        {
            Console.WriteLine(e.Message);
        }

        public abstract Task<HttpResponseMessage> cardInfo(string userId, string apiKey);

        public abstract Task<HttpResponseMessage> reportcardissue(string apiKey, ICardReport cardReport);

        public abstract Task<HttpResponseMessage> onoff(string cardId, string apiKey);
    }
}
