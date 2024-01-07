// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function TermsAndPolicy() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "Terms and Policy | "+config.APP_NAME };


  return (
    
    <Layout initials={page_initials}>

      <Head>
        <style>{`
          .page-loading {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-transition: all 0.4s 0.2s ease-in-out;
            transition: all 0.4s 0.2s ease-in-out;
            background-color: #fff;
            opacity: 0;
            visibility: hidden;
            z-index: 9999;
        }

        .dark-mode .page-loading {
            background-color: #121519;
        }

        .page-loading.active {
            opacity: 1;
            visibility: visible;
        }

        .page-loading-inner {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            text-align: center;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            -webkit-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;
            opacity: 0;
        }

        .page-loading.active>.page-loading-inner {
            opacity: 1;
        }

        .page-loading-inner>span {
            display: block;
            font-family: "Inter", sans-serif;
            font-size: 1rem;
            font-weight: normal;
            color: #6f788b;
        }

        .dark-mode .page-loading-inner>span {
            color: #fff;
            opacity: 0.6;
        }

        .page-spinner {
            display: inline-block;
            width: 2.75rem;
            height: 2.75rem;
            margin-bottom: 0.75rem;
            vertical-align: text-bottom;
            background-color: #d7dde2;
            border-radius: 50%;
            opacity: 0;
            -webkit-animation: spinner 0.75s linear infinite;
            animation: spinner 0.75s linear infinite;
        }

        .dark-mode .page-spinner {
            background-color: rgba(255, 255, 255, 0.25);
        }

        @-webkit-keyframes spinner {
            0% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }

            50% {
                opacity: 1;
                -webkit-transform: none;
                transform: none;
            }
        }

        @keyframes spinner {
            0% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }

            50% {
                opacity: 1;
                -webkit-transform: none;
                transform: none;
            }
        }
        `}</style>
      </Head>









        <main className="page-wrapper px-3">
            
            <section className="container pt-5 pb-xxl-3">
                
                {/* <x-atoms.breadcrumb title="Terms and Conditions" /> */}
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href={config.HOMEPAGE}>Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Terms and Conditions</li>
                  </ol>
                </nav>

                <div className="row">
                    <div className="col pb-3 mb-3">
                        <h1 className="display-1">Terms and Conditions</h1>
                        <p className="pe-5 mb-0">UniSkills has created this privacy policy in order to demonstrate our firm
                            commitment to privacy. The following discloses the information gathering and dissemination
                            practices for the Freelancer site.
                            By using the UniSkills site and accepting the User Agreement you also agree to this Privacy
                            Policy. If you do not agree to this Privacy Policy, you must not use the UniSkills site. The
                            terms &#34;We,&#34; &#34;Us,&#34; &#34;Our,&#34; or &#34;UniSkills&#34; includes UniSkills Ltd and our affiliates.</p>
                    </div>

                </div>
            </section>
            <section>
                <h2 className="display-5 text-center">What information do we collect?</h2>
                <div className="px-3 px-md-5">
                    <p>UniSkills collects your information when you register on the UniSkills site and when you visit
                        UniSkills pages.</p>
                    <p>Personal Information: We may collect the following types of personal information in order to provide
                        you with the use and access to the UniSkills site, services and tools, and for any additional
                        purposes set out in this Privacy Policy:</p>
                    <ul>
                        <li>Name, and contact information, such as email address, phone number, mobile telephone number,
                            physical address, and (depending on the service used) sometimes financial information, such as
                            bank account numbers;</li>
                        <li>Transactional information based on your activities on the sites, item and content you generate
                            or that relates to your account, billing and other information you provide to purchase an item;
                        </li>
                        <li>Personal information you provide to us through correspondence, chats, dispute resolution, or
                            shared by you from other social applications, services or websites;</li>
                        <li>Additional personal information we ask you to submit to authenticate yourself if we believe you
                            are violating site policies (for example, we may ask you to send us an ID to answer additional
                            questions online to help verify your identity);</li>
                        <li>Information from your interaction with our sites, services, content and advertising, including,
                            but not limited to, device ID, device type, geo-location information, computer and connection
                            information, statistics on page views, traffic to and from the sites, ad data, IP address and
                            standard web log information.</li>
                    </ul>
                    <p>Aggregate Information: UniSkills collects non-identifying, general, generic and aggregate information
                        to better design our Web site and services.</p>
                    <p>Non-Personal Information: UniSkills may collect non-personal information as you use UniSkills. When
                        you use the site, UniSkills, third-party service providers (e.g. Google Analytics), and partners may
                        receive and record non-personal information from cookies, server logs, and similar technology from
                        your browser or mobile device, including your IP address.</p>
                    <p>We may combine some Non-Personal Information with the Personal Information we collect. Where we do
                        so, we will treat the combined information as Personal Information if the resulting combination may
                        be used to readily identify or locate you in the same manner as Personal Information alone.</p>
                </div>

            </section>

            <section>
                <h2 className="display-5 text-center">How do we store your information?</h2>
                <p className="px-3 px-md-5">We use hosting provider TSO Host, therefore your information may be transferred to
                    and stored on servers in various locations both in and outside of the United Kingdom. UniSkills
                    maintains control of your information. We protect your information using technical and administrative
                    security measures to reduce the risks of loss, misuse, unauthorised access, disclosure and alteration.
                    Some of the safeguards we use are firewalls and data encryption, physical access controls to our data
                    centres, and information access authorisation controls.</p>
            </section>

            <section>
                <h2 className="display-5 text-center">How do we use your Information?</h2>
                <div className="px-3 px-md-5">
                    <p>When you use the UniSkills site, we may request certain information. UniSkills does not share any of
                        your personally identifiable or transactional information with any person or entity, other than as
                        set out in this policy. No other third party receives your personally identifiable information or
                        other transactional data except for those with whom you have transactions and share that
                        information. The information we collect is used to improve the content of our web site, used to
                        notify consumers about updates to our web site and for communications, such as customer service.</p>
                    <p>Communications: We may send you a welcome email to verify your account and other transactional emails
                        for operational purposes, such as billing, account management, or system maintenance. You may only
                        stop those emails by terminating your account. We may also send you promotions, product
                        announcements, surveys, newsletters, developer updates, product evaluations, and event information
                        or other marketing or commercial e-mails. You can opt out of receiving these email communications
                        from UniSkills at any time by unsubscribing using the unsubscribe link within each email or emailing
                        us to have your contact information removed from our email list or registration database.</p>
                    <p>Marketing: You agree that we may use your personal information to tell you about our services and
                        tools, deliver targeted marketing and promotional offers based on your communication preferences,
                        and customise measure and improve our advertising. You can unsubscribe from emails at any time by
                        clicking the unsubscribe link contained in the email.</p>
                    <p>We do not rent, sell, or share Personal Information about you with other people or non- affiliated
                        companies for marketing purposes (including direct marketing purposes) without your permission. We
                        may use and share Non-Personal Information for our marketing purposes, including, without
                        limitation, marketing on other websites. For example, we may use the information to control the
                        number of times you have seen an ad, deliver ads tailored to your interests, and measure the
                        effectiveness of ad campaigns. You can prevent us from tailoring our ads to you on other websites by
                        deleting your cookies (see below).</p>
                </div>

            </section>

            <section>
                <h2 className="display-5 text-center">Sharing your Information</h2>
                <div className="px-3 px-md-5">
                    <p>We disclose personal information to respond to legal requirements, enforce our policies, respond to
                        claims that a listing or other content violates the rights of others, or protect anyone&#39;s rights,
                        property, or safety. Such information will be disclosed in accordance with applicable laws and
                        regulations. As stated above, we do not disclosure your personal information to third parties for
                        their marketing purposes without your explicit consent.</p>
                    <p>We may disclose personal information to our related bodies corporate and third party suppliers and
                        service providers located overseas for some of the purposes listed above. We take reasonable steps
                        to ensure that the overseas recipients of your personal information do not breach the privacy
                        obligations relating to your personal information.</p>
                    <p>We may disclose your personal information to entities located outside of the United Kingdom.</p>
                    <p>We may share aggregate data with advertisers and other third parties. UniSkills uses
                        industry-standard encryption technologies when transferring and receiving consumer and transaction
                        data exchanged with our site.</p>
                </div>

            </section>

            <section>
                <h2 className="display-5 text-center">Cookies</h2>
                <div className="px-3 px-md-5">
                    <p>Cookies are pieces of data assigned by a web server that uniquely identify the browser on your PC.
                        UniSkills uses cookies called &#34;persistent&#34; cookies to enable the site to remember you on subsequent
                        visits, speeding up or enhancing your experience of services or functions offered. Cookies also
                        enable our systems to gather information about your navigational patterns through the site. You have
                        the option to disable cookies at any time through your browsers. We may also store your website
                        activity in cookies which may be used by third party vendors, including Google, to serve ads based
                        on your behaviour on our website.</p>
                    <p>The third party vendors (e.g. Google Analytics) may receive and record non-personal information from
                        cookies, server logs, and similar technology from your browser or mobile device, including your IP
                        address. You may opt out of Google&#39;s use of cookies by visiting the Google advertising opt-out page.
                    </p>
                    <p>If you access our Services with your login credentials from a social networking site (e.g., Facebook
                        or Twitter) or if you otherwise agree to associate your UniSkills account with a social networking
                        account, we may receive personal information about you from such social networking site, in
                        accordance with the terms of use and privacy policy of the social networking site. For example,
                        Facebook may share with us your friend list, birthday, information about the interests of you or
                        your friends or other personal information, in order to help us establish your account, tailor
                        services to you and find other current or potential site users that you know. We may add this
                        information to the information we have already collected from you via other aspects of the Site. You
                        are also subject to the social networking site&#39;s terms of use and privacy policy. We use the OAuth
                        (open authorisation) protocol to enable us to access this information without collecting your
                        password when you agree allow another application to access your account information.</p>
                </div>

            </section>

            <section>
                <h2 className="display-5 text-center">Accessing and updating your Information</h2>
                <div className="px-3 px-md-5">
                    <p>You can update your information through your account profile settings. If you believe that personal
                        information we hold about you is incorrect, incomplete or inaccurate, then you may request us to
                        amend it.</p>
                    <p>Additionally, You may request access to any personal information we hold about you at any time by
                        contacting us at customer@uniskills.net. Where we hold information that you are entitled to access,
                        we will try to provide you with suitable means of accessing it (for example, by mailing or emailing
                        it to you). We may charge you a fee to cover our administrative and other reasonable costs in
                        providing the information to you. We will not charge for simply making the request and will not
                        charge for making any corrections to your personal information.</p>
                    <p>There may be instances where we cannot grant you access to the personal information we hold. For
                        example, we may need to refuse access if granting access would interfere with the privacy of others
                        or if it would result in a breach of confidentiality. If that happens, we will give you written
                        reasons for any refusal.</p>
                </div>

            </section>



        </main>


    </Layout>

  )

}



