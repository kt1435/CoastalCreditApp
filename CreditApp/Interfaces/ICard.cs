using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CreditApp.Interfaces
{
    public interface ICard
    {
        string cardId { get; }
        string cardName { get; }
        string maskedCardNumber { get; }
    }
}
