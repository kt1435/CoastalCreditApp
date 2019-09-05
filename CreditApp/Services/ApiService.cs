using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using CreditApp.Interfaces;
using Newtonsoft.Json;

namespace CreditApp.Services
{
    public class ApiService : CreditCardService
    {
        public override async Task<HttpResponseMessage> cardInfo(string userId, string apiKey)
        {
            var client = new HttpClient { BaseAddress = new Uri(baseString + $"anypoint.mulesoft.com/mocking/api/v1/links/{apiKey}/cardInfo/{userId}") };

            return await client.GetAsync(client.BaseAddress);

        }

        public override async Task<HttpResponseMessage> onoff(string cardId, string apiKey)
        {
            var client = new HttpClient { BaseAddress = new Uri(baseString + $"anypoint.mulesoft.com/mocking/api/v1/links/{apiKey}/cardcontrols/onoff/{cardId}") };

            return await client.PostAsync(client.BaseAddress, null);
        }

        public override async Task<HttpResponseMessage> reportcardissue(string apiKey, ICardReport cardReport)
        {
            var client = new HttpClient { BaseAddress = new Uri(baseString + $"anypoint.mulesoft.com/mocking/api/v1/links/{apiKey}/cardcontrols/reportcardissue/") };
            var jsonContent = JsonConvert.SerializeObject(cardReport);
            var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            return await client.PostAsync(client.BaseAddress, content);
        }
    }
}
