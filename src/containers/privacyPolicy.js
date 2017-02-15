const React = require('react')
const { connect } = require('react-redux')

function PrivacyPolicy(props) {
  return (
    <div>
    <div className='help-page'>
      <h1 className='privacy'>Korero Mai privacy policy</h1>

<p>Your privacy on the Internet is important to us. This privacy policy discloses what information we gather, how we use it, and how to correct or change it.</p>

<h2>Information</h2>

<p>We gather various information about customers and users of our website. This information includes:
personal information through your voluntary use of the Website and the purchase process (such as your first and last names and email);
personal information, provided to us by you through any other method (including without limitation correspondence and discussions);
information collected by us through click tracking in relation to your use of the Website, including the content you upload and the content you access; and
aggregated data, which tracks traffic to the Website; and cookies, which are pieces of information transferred to your computer hard drive for record keeping (such as your preferences on our Website).</p>

<h2>Security</h2>

<p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>

<h2>Use of your information</h2>

<p>We will never sell or rent your personal information to third parties.
We will use information we collect from you for the primary purpose for which it is collected and for such other secondary purposes that are related to the primary purpose of collection.</p>

<h2>Email Newsletters and other notices</h2>

<p>It is our policy to send emails throughout the purchasing process and other Newsletter emails you elect to receive. In addition, we may send out promotional material to you promoting new or amended material on our site where we think that may be relevant to you. It is our policy to immediately remove any person from any mailing list upon the person’s request.</p>

<h2>Cookies</h2>

<p>Cookies are small pieces of information that are stored in a browser-related file on your computer’s hard drive when you use our Web site. Cookies are widely used on most major Web sites. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. A cookie in no way gives us access to your computer or any information about you other than the data you choose to share with us.
We may use information contained in cookies to make assumptions about the user of the computer and to provide users of that computer with focused advertising that we believe may be of interest, based on that information.
You can choose to accept or decline cookies. Most web browsers automatically accept cookies but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of our website.</p>

<h2>Access and removal of Information</h2>

<p>You have the right to seek access the personal information held about you and to advise us of any inaccuracy. There are some exceptions to this right set out in the Privacy Act. If you make an access request, we will ask you to verify your identity and specify what information you require. We may charge a fee to cover the costs of meeting your request.</p>

<h2>Links to other websites</h2>

<p>Our website may contain links to enable you to visit other websites of interest easily. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>

<h2>Updates to our information practices</h2>

<p>We reserve the right to change this policy. By continuing to use the Website, you agree to be bound by the amended policy. You should check from time to time to see if the policy has changed.</p>
    </div>
  </div>
  )
}

module.exports = connect((state) => state)(PrivacyPolicy)
