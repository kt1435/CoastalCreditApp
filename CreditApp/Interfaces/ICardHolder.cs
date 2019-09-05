using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CreditApp.Interfaces
{
    public interface ICardHolder
    {
        string cardHolder { get; }
        ICard[] cards { get; }
    }
}
