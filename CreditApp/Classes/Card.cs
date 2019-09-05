using CreditApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace CreditApp.Classes
{
    public class Card : ICard
    {
        public Card(string cardId, string cardName, string maskCardNumber)
        {
            this.cardId = cardId;
            this.cardName = cardName;
            this.maskedCardNumber = maskedCardNumber;
        }

        [JsonProperty("cardId")]
        public string cardId { get; set; }
        [JsonProperty("cardName")]
        public string cardName { get; set; }
        [JsonProperty("maskedCardNumber")]
        public string maskedCardNumber { get; set; }
    }
}
