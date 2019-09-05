using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CreditApp.Interfaces;
using CreditApp.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;
using System.Net;

namespace CreditApp.Controllers
{
    [Route("api/cardControl")]
    [Route("cardControl")]
    [ApiController]
    public class CardControlController : Controller
    {
        private CreditCardService _creditService;
        public CardControlController()
        {
            _creditService = ServiceFactory.getCreditService();
        }

        [HttpPost("postCardIssue")]
        public ActionResult postCardIssue(string apiKey, [FromBody] ICardReport issue)
        {
            try
            {
                var returnResult = _creditService.reportcardissue(apiKey, issue).Result;
                return Json(returnResult);
            }
            catch (Exception e)
            {
                return Json(e.Message);
            }
        }

        [HttpPost("enableOnOff")]
        public ActionResult enableOnOff(string cardId, string apiKey)
        {
            try
            {
                var returnResult = _creditService.onoff(cardId, apiKey).Result;
                return Json(returnResult);
            } catch (Exception e)
            {
                return Json(e.Message);
            }
        }
    }
}