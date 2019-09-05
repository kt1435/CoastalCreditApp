using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using CreditApp.Interfaces;
using CreditApp.Classes;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace CreditApp.Services
{
    public class MockService : CreditCardService
    {
        private Random random = new Random();
        public override async Task<HttpResponseMessage> cardInfo(string userId, string apiKey)
        {
            this.mockWaitTime();

            return getOkReponse(userId);
        }

        public override async Task<HttpResponseMessage> onoff(string cardId, string apiKey)
        {
            this.mockWaitTime();

            return getOkReponse();
        }

        public override async Task<HttpResponseMessage> reportcardissue(string apiKey, ICardReport cardReport)
        {
            this.mockWaitTime();

            return getOkReponse();
        }

        private void mockWaitTime()
        {
            var mockWaitTime = random.Next(5) * 1000;
            System.Threading.Thread.Sleep(mockWaitTime);
        }

        private HttpResponseMessage getOkReponse()
        {
            var response = new HttpResponseMessage(System.Net.HttpStatusCode.OK);

            var content = new Dictionary<string, string>
            {
                {"message", "okay"}
            };

            var jsonContent = JsonConvert.SerializeObject(content, Formatting.Indented);
            var stringContent = new StringContent(jsonContent);

            response.Content = stringContent;

            return response;
        }

        private HttpResponseMessage getOkReponse(string userId)
        {
            var response = new HttpResponseMessage(System.Net.HttpStatusCode.OK);

            var card1 = new Card("0001", "Rewards Card", "xx0455");
            var card2 = new Card("9999", "Business Card", "xx8712");
            var card3 = new Card("2341", "Amazon Card", "xx9623");
            var cardArray = new[] { card1, card2, card3 };

            var cardHolder = new CardHolder("Kemba Walker", cardArray);

            var jsonContent = JsonConvert.SerializeObject(cardHolder, Formatting.Indented);
            var stringContent = new StringContent(jsonContent, Encoding.UTF8);

            response.Content = stringContent;

            return response;
        }
    }
}
