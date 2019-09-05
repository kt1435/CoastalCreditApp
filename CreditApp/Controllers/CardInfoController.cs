using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CreditApp.Services;
using Newtonsoft.Json;
using System.Net.Http;

namespace CreditApp.Controllers
{
    [Route("api/cardInfo")]
    [Route("cardInfo")]
    [ApiController]
    public class CardInfoController : Controller
    {
        private CreditCardService _creditService;
        public CardInfoController()
        {
            _creditService = ServiceFactory.getCreditService();
        }

        [HttpGet("getCardInfo")]
        public ActionResult getCardInfo(string userId, string apiKey)
        {
            try { 
            var returnResult = _creditService.cardInfo(userId, apiKey).Result;

            return Json(returnResult);
        } catch (Exception e)
            {
                return Json(e.Message);
            }
        }
    }
}