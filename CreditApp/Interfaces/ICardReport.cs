using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CreditApp.Interfaces
{
    public interface ICardReport
    {
        string cardId { get; }
        string cardStatus { get; }
        string comment { get; }
    }
}
