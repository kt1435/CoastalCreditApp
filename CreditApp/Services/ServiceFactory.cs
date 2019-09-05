using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace CreditApp.Services
{
    /*
     Simple factory to create service based on the current configuration.
     Dev can switch between mock and Api services simply by changing the config value.
    */
    public static class ServiceFactory
    {
        public static CreditCardService getCreditService()
        {
            IConfigurationRoot config = WebConfiguration.getWebConfiguration();
            var isApiService = config["IsApiService"];

            if (isApiService == "true")
            {
                return new ApiService();
            }

            return new MockService();
        }
    }
}
