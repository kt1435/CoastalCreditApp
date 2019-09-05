using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CreditApp.Services
{
    /*
     Singleton pattern for the configuration.
    */
    public sealed class WebConfiguration
    {
        private static IConfigurationRoot _webConfiguration;
        private WebConfiguration()
        {

        }

        public static IConfigurationRoot getWebConfiguration()
        {
            if (_webConfiguration == null)
            {
                _webConfiguration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            }

            return _webConfiguration;
        }
    }
}
