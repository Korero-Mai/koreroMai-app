const React = require('react')
const { connect } = require('react-redux')

function PrivacyPolicy(props) {
  return (
    <div>
    <div className='help-page'>
      <h1 className='h1-home'>Korero Mai privacy policy</h1>
      This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.

      What personal information do we collect from the people that visit our blog, website or app?

      When ordering or registering on our site, as appropriate, you may be asked to enter your email address or other details to help you with your experience.

      When do we collect information?

      We collect information from you when you register on our site or enter information on our site.


      How do we use your information?

      We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:

            • To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.

      How do we protect your information?

      Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.

      We use regular Malware Scanning.

      We do not use an SSL certificate
            • We only provide articles and information. We never ask for personal or private information like names, email addresses, or credit card numbers.

      Do we use 'cookies'?

      Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.

      We use cookies to:
            • Understand and save user's preferences for future visits.

      You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.

      If users disable cookies in their browser:

      If you turn cookies off, some features will be disabled. Some of the features that make your site experience more efficient and may not function properly.

      However, you will still be able to place orders
      Remembering a user's session
      .


      Third-party disclosure

      We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.

      Third-party links

      We do not include or offer third-party products or services on our website.

      Google

      Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en

      We have not enabled Google AdSense on our site but we may do so in the future.

      COPPA (Children Online Privacy Protection Act)

      When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.

      We market to
      We do not collect information from children under 13
      children under 13.
      No

      In order to remove your child's information please contact the following personnel:

      We adhere to the following COPPA tenants:
            • Parents can review, delete, manage or refuse with whom their child's information is shared through contacting us directly.
      or contacting us directly.
    </div>
  </div>
  )
}

module.exports = connect((state) => state)(PrivacyPolicy)
