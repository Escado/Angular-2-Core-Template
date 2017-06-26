using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

namespace Template.Common.Helpers
{
    public static class SSLValidationHelper
    {
        /// <summary>
        /// Callback used to validate the certificate in an SSL conversation
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="cert"></param>
        /// <param name="chain"></param>
        /// <param name="policyErrors"></param>
        /// <returns></returns>
        public static bool ValidateRemoteCertificate(object sender, X509Certificate cert, X509Chain chain, SslPolicyErrors policyErrors)
        {
            //if there are no certificate validation errors, we always return true
            if (policyErrors == SslPolicyErrors.None)
                return true;

            // if there are certification validation errors, we check for a few cases of self-signed certificates that we trust
            var validCertificates = new List<string>()
           {
               //self signed certificates of our servers:
               //‎2c 4f 9b ff ad 30 ee 30 4c 78 e0 a5 c8 d9 d8 f2 fe 40 e3 56,
               "‎2C4F9BFFAD30EE304C78E0A5C8D9D8F2Fe40E356",
               //c2 24 11 9d 9f 36 0c 21 20 69 3b 79 84 e0 c2 14 be 24 57 d9
               "C224119D9F360C2120693B7984E0C214BE2457D9",
               //‎d0 a8 0e 74 eb 6c d9 ee e4 39 04 88 35 13 fc 8b 24 b2 12 e2
               "D0A80E74EB6CD9EEE43904883513FC8B24B212E2"
           };
            var certHashString = cert.GetCertHashString();
            bool shouldApprove = validCertificates.Contains(certHashString);
            if (!shouldApprove)
                Trace.WriteLine(string.Format("Remote certificate validation failed for {0} (thumbprint {1})", cert.Subject, certHashString));
            return shouldApprove;
        }
    }
}
