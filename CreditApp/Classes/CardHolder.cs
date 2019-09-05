using CreditApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace CreditApp.Classes
{
    public class CardHolder: ICardHolder
    {
        public CardHolder(string name, Card[] cards)
        {
            this.cardHolder = name;
            this.cards = cards;
        }

        [JsonProperty("cardHolder")]
        public string cardHolder { get; set; }
        [JsonProperty("cards")]
        public ICard[] cards { get; set; }

    }
}
