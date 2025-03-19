import React from 'react';
import Heading1 from '../components/ui/Heading1';
import { Text, GradientSpan } from '../components/ui/PolicyText'
import SubHeading from '../components/ui/SubHeading';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';

const CookiesPolicy = () => {
    return (
        <div className="p-6 flex flex-col gap-[40px] md:gap-[64px]">

            <Heading1 headingWhite="Extended information on the use of cookies" />

            <Text>
                The specific purpose of this cookie policy (hereinafter "Cookie Policy") is to explain the types and methods of use as well as to provide indications on how to refuse or delete, if desired, the cookies present on the <GradientSpan><Link to="www.tolemaica.it">www.tolemaica.it</Link></GradientSpan> website (hereinafter, the "Site").<br /><br />

                The Data Controller is Tolemaica srl (hereinafter "Tolemaica" or the "Data Controller") and processes the personal data of users (hereinafter "User" or "Users") collected and processed with cookies through the Site, in accordance with Legislative Decree 196/2003 (hereinafter also "Privacy Code") and EU Regulation 2016/679 (hereinafter also "GDPR").
            </Text>

            <SubHeading headingWhite="What are cookies" />
            <Text>
                The Site uses cookie technology. Cookies are small text files that the visited sites send to the user's terminal or device (computer, tablet, smartphone, notebook), where they are stored, and then retransmitted to the same sites on the next visit.
            </Text>

            <SubHeading headingWhite="Types of cookies used by the Site" />
            <Text>
                Cookies can be technical, analytical and profiling.<br />
                In particular, the cookies present on the Site are:
            </Text>

            <SubHeading headingWhite="Technical cookies" />
            <Text>
                Cookies of this type are necessary to ensure the proper functioning of certain areas of the Site. These cookies can be divided into:<br /><br />

                <GradientSpan>session cookies</GradientSpan>, which guarantee normal navigation and use of the Site. They are not used for other purposes and are normally installed directly by the owner or manager of the website (so-called "proprietary cookies"); In this specific case, cookies in this category are always sent from the <GradientSpan><Link to="www.tolemaica.it">www.tolemaica.it</Link></GradientSpan> domain.<br /><br />

                <GradientSpan>persistent cookies</GradientSpan> that remain stored on the hard drive of the User's device until they expire or are deleted by visiting users. Through persistent cookies, Users who visit the Site (or any other Users who use the same computer) are automatically recognized each time they visit. Persistent cookies fulfil many functionalities in the interest of surfers (such as, for example, the use of the browsing language). Visitor Users can set the browser of their computer or device so that it accepts/rejects all cookies or displays a warning each time a cookie is proposed, in order to be able to evaluate whether to accept it or not. The User is enabled, however, to change the default configuration (by default) and disable cookies (i.e. block them permanently), setting the highest level of protection.
                The aforementioned types of cookies (session and persistent) can in turn be:<br /><br />

                <GradientSpan>1 "first party"</GradientSpan> (or "owners") when they are managed directly by the owner and/or manager of the website; in this specific case by Ptolemaica;<br />
                or<br />
                <GradientSpan>2 "third parties"</GradientSpan> when cookies are prepared and managed by managers unrelated to the website visited by the user.

            </Text>

            <SubHeading headingWhite="Third-party analytics cookies" />
            <Text>
                Third-party analytics cookies are cookies set by a website other than the one you are currently visiting.<br /><br />
                This type of cookie falls under the direct and exclusive responsibility of the third party itself. Therefore, the User is invited to consult the information on privacy and the use of third-party analytical cookies directly on the websites of the respective managers.
                In particular, the Site uses the following third-party analytical cookies:
            </Text>

            <SubHeading headingWhite="Use of cookies on this site" />
            <Text>
                This site uses the following cookies.
            </Text>

            <SubHeading headingWhite="First-party cookies managed directly by the website:" />
            <Text>
                We use some technical cookies, necessary to ensure normal navigation and use of the website and for analytical purposes (so-called analytics cookies, used to collect information, in aggregate form, on the number of users and how they visit the site):<br /><br />
                PHPSESSIONID* - session - necessary to identify the individual session of a user on PHP<br />
                pages normal_site* - persistent - necessary to manage the navigation of the site in the mobile version or in the standard<br />
                version lang* - persistent - necessary to manage a default language for the site<br />
                cb-enabled - persistent - keeps track of the consent expressed by the user after displaying the brief information (rif.to art. 4.1 provision "Identification of simplified procedures for the information and acquisition of consent for the use of cookies - 8 May 2014")
            </Text>

            <SubHeading headingWhite="Third-party, analytical cookies:" />
            <Text>
                persistent devices, used to:
                <br />
                (a) the distinction of the user ID [_ga]; Duration: 2 years
                <br />
                (b) used to distinguish users [_gid]; Duration: 24 hours
                <br />
                (c) the acceleration of the request velocity [_gat]; Duration: 10 minutes
                <br />
                d) stores the user's preferences and information each time they visit web pages containing Google services [1P_JAR]; Duration 30 days
                <br />
                e) Stores the user's preferences and information each time they visit web pages containing Google services [APISID]; Duration 2 years
                <br />
                f) Stores the user's preferences and information each time they visit web pages containing Google services [HSID]; Duration 2 years
                <br />
                g) Stores the user's preferences and information each time they visit web pages containing Google services [NID]; duration 6 months
                <br />
                h) Remembers the user's setting preferences (e.g. set zoom level) [SID]; Duration 2 years
                <br />
                i) Security cookie used to protect user data from unauthorized access [SIDCC]; duration 3 months


            </Text>

            <SubHeading headingWhite="Third-party technical cookies for the proper functioning of technical services" />
            <Text>
                These cookies are used to monitor the performance of the site.<br /><br />
                Google Maps
                <br />
                <GradientSpan><Link to="https://www.google.com/intl/it/policies/">Privacy Policy (https://www.google.com/intl/it/policies/)</Link></GradientSpan>
            </Text>

            <SubHeading headingWhite="Third-party audience statistics cookies" />
            <Text>
                These cookies provide anonymous/aggregated information about how visitors navigate the site.
            </Text>
            <Text>
                Google Analytics
                <br /><br />
                are cookies used to collect and analyze statistical information on accesses/visits to the Site. This type of cookie collects information in an anonymous form, which does not allow the personal identification of users, on the activity of the latter within the Site, on the way in which they arrived at the Site and on the pages they visited. Tolemaica uses this information made available by Google Analytics for statistical analysis, to improve the Site and simplify its use, as well as to monitor its correct functioning. Further information on privacy and its use can be found directly on the Google Analytics website
                <br />
                privacy policy (<GradientSpan><Link to="https://www.google.com/intl/it/policies/" >https://www.google.com/intl/it/policies/</Link></GradientSpan>)
                <br />
                opt out (<GradientSpan><Link to="https://tools.google.com/dlpage/gaoptout?hl=it">https://tools.google.com/dlpage/gaoptout?hl=it</Link></GradientSpan>)

                <br /><br />
                Google Adwords conversions<br />

                privacy policy (<GradientSpan><Link to="https://www.google.com/intl/it/policies/">https://www.google.com/intl/it/policies/</Link></GradientSpan>)
                <br /><br />
                Doubleclick: Ad Campaign Conversion Count
                <br />
                privacy policy (<GradientSpan><Link to="https://www.google.com/intl/it/policies/">https://www.google.com/intl/it/policies/</Link></GradientSpan>)
            </Text>

            <SubHeading headingWhite="Profiling cookies for advertising and remarketing purposes" />
            <Text>
                These cookies are used to send advertising and personalized content based on navigation on the site.<br /><br />
                Google adwords remarketing<br />
                Privacy Policy (<GradientSpan><Link to="https://www.google.com/intl/it/policies/">https://www.google.com/intl/it/policies/</Link></GradientSpan>)<br />
                opt out (<GradientSpan><Link to="https://tools.google.com/dlpage/gaoptout?hl=it" >https://tools.google.com/dlpage/gaoptout?hl=it</Link></GradientSpan>)

                <br /><br />
                Facebook remarketing  <br />
                Privacy policy (<GradientSpan><Link to="https://www.facebook.com/about/privacy/">https://www.facebook.com/about/privacy/</Link></GradientSpan>)
            </Text>

            <SubHeading headingWhite="Social media sharing and connect cookies" />
            <Text>
                These cookies are used to integrate some popular features of the main social media. For example, they allow registration and authentication on the site via the connect button and the sharing of pages of the site on social networks.

                <br /><br />

                Facebook<br />
                Privacy policy (<GradientSpan><Link to="https://www.facebook.com/about/privacy/" >https://www.facebook.com/about/privacy/</Link></GradientSpan>)
                <br /><br />
                Twitter<br />
                Privacy Policy (<GradientSpan><Link to="https://twitter.com/privacy?lang=it">https://twitter.com/privacy?lang=it</Link></GradientSpan>)
                <br /><br />
                Linkedin<br />
                Privacy policy (<GradientSpan><Link to="https://www.linkedin.com/legal/privacy-policy">https://www.linkedin.com/legal/privacy-policy</Link></GradientSpan>)
                <br /><br />
                Pinterest<br />
                Privacy policy (<GradientSpan><Link to="https://about.pinterest.com/it/privacy-policy">https://about.pinterest.com/it/privacy-policy</Link></GradientSpan>)
                <br /><br />
                Instagram<br />
                Privacy policy (<GradientSpan><Link to="https://instagram.com/about/legal/privacy/">https://instagram.com/about/legal/privacy/</Link></GradientSpan>)
            </Text>

            <SubHeading headingWhite="Purpose" />
            <Text>
                Cookies have different purposes and are also distinguished according to them. They are primarily used for the transmission of communication or to provide the service requested by the user; more precisely, they allow you to enable and optimize the operation of the website, perform computer authentication and prevent abuse, monitor sessions, improve the browsing experience of users, for example by keeping the connection to reserved areas active while browsing through the pages of the site without the need to re-enter User-Id and password and storing specific information regarding the users themselves (including preferences, the type of browser and computer used). The aforementioned cookies are called technical (the user's consent is not required for their use), as without them some of the aforementioned operations could not be carried out or would be more complex and/or less secure.<br /><br />

                Otherwise, if cookies are used for other purposes, typically for behavior analysis and sending personalized promotional-advertising messages (so-called profiling cookies) or even just to obtain, through services provided by third parties, information in aggregate form on the number of users and how they visit the site (so-called analytics cookies), Your consent is required. In fact, before these cookies are sent to the terminal, pursuant to current legislation (Privacy Code and general provision of the Guarantor of 5 June 2015), when accessing the home page or other page of the site, a banner is immediately shown in the foreground with an initial summary information on the use of cookies and the collection of consent. that the user can provide by continuing navigation by selecting an element below the banner or by closing the banner itself.<br /><br />

                In any case, cookies can only be read or modified by the website that generated them; They may not be used to retrieve any data from the user's terminal and may not transmit computer viruses. Some of the functions of cookies may also be performed by other technologies; Therefore, in the context of this Web Privacy Policy, the term Cookie refers to cookies and all similar technologies.
            </Text>

            <SubHeading headingWhite="Cookie consent" />
            <Text>
                Consent to the use of cookies from the Site can be expressed by the User through specific configurations of the browser and computer programs or devices that are easy and clear to use for the User. Please note that the User authorizes the use of cookies by continuing to browse the Site, after reading the Banner. The provision of data is optional. It is possible to change your cookie preferences at any time, according to the specific procedures described below. You can also disable cookies from your browser at any time, but doing so may prevent you from using certain parts of the Site.<br /><br />

                As far as third-party cookies are concerned, the latter fall under the direct and exclusive responsibility of the third-party operator. Therefore, the User is invited to consult the information on privacy and the use of third-party cookies directly on the websites of the respective managers indicated in this Policy.
            </Text>

            <SubHeading headingWhite="How to control cookies?" />
            <Text>
                You can control cookies by changing the preferences of your internet browser. You can accept all cookies, only some, or reject them all. In the event that the User decides to block all cookies (including technical ones), it may be impossible to access areas of the Site or use the services offered.
            </Text>

            <SubHeading headingWhite="How can I disable cookies?" />
            <Text>
                Each web browser allows you to restrict and delete cookies. Below is some purely indicative information on the procedure necessary to disable cookies, depending on the browser used by the User.
            </Text>

            <Text>
                <GradientSpan>Chrome</GradientSpan> <br />
                Run the Chrome<br />
                Browser Click on the settings button in the browser toolbar next to the url entry window for navigation<br />
                Select Settings<br />
                Click on Show Advanced Settings<br />
                In the "Privacy" section, click on the "Content Settings" buttonIn<br />
                the "Cookies" section, you can change the following cookie settings:<br />
                Allow data to be saved locally<br />
                Change local data only until you close your browser<br />
                Prevent sites from setting cookies<br />
                Block third-party cookies and site<br />
                data Manage exceptions for certain websites<br />
                Delete any or all cookies<br />
            </Text>

            <Text>
                <GradientSpan>Mozilla Firefox</GradientSpan> <br />
                Run the Mozilla Firefox<br />
                Browser Click on the settings button in the browser toolbar next to the url entry window for navigation<br />
                Select Options<br />
                Select the Privacy<br />
                panel Click on Show Advanced Settings<br />
                In the "Privacy" section click on the "Content Settings" buttonRequire
                sites not to perform any tracking<br />
                Notify the sites of your willingness to be tracked Do<br />
                not communicate any preferences regarding the tracking of personal data
                <br />
                From the "History" section you can:<br />
                By enabling "Use custom settings" select to accept third-party cookies (always, from the most visited sites or never) and to keep them for a certain period (until they expire, when Firefox is closed or to ask each time)<br />
                Remove individual stored cookies<br />
            </Text>

            <Text>
                <GradientSpan>Internet Explorer</GradientSpan> <br />
                Run the Internet Explorer<br />
                Browser Click on the Tools button and choose Internet<br />
                Options Click on the Privacy tab and in the Settings section change the slider according to the desired action for cookies:<br />
                Block all cookies<br />
                Allow all cookies<br />
                Select the sites from which to obtain cookies: move the cursor to an intermediate position so that it does not block or allow all cookies, then press Sites, in the Website Address box, enter a website, and then click Block or Allow
            </Text>

            <Text>
                <GradientSpan>Safari</GradientSpan> <br />
                Run the Safari <br />
                Browser Click on Safari, select Preferences and click on Privacy <br />
                In the Block Cookies section, specify how Safari should accept cookies from websites. <br />
                To view which sites have stored cookies click on Details
            </Text>

            <Text>
                <GradientSpan>Safari iOS (mobile devices)</GradientSpan> <br />
                Run the Safari Browser iOS<br />
                Tap on Settings and then Safari<br />
                Tap on Block Cookies and choose from the various options: "Never", "Third-party and advertisers" or "Always"<br />
                To clear all cookies stored by Safari, tap on Settings, then on Safari and finally on Clear Cookies and data

            </Text>

            <Text>
                <GradientSpan>Work</GradientSpan> <br />
                Run the Opera<br />
                Browser Click on the Preferences then on Advanced and finally on Cookies<br />
                Select one of the following options:<br />
                Accept all cookies<br />
                Accept cookies only from the site you visit: third-party cookies that are sent from a domain other than the one you are visiting will be rejected Never<br />
                accept cookies: All cookies will never be saved
            </Text>

            <Text>
                For an overview of the most common browsers and for more information on cookies and their control, please visit: <GradientSpan to="www.allaboutcookies.org"><Link>www.allaboutcookies.org</Link></GradientSpan>.

                <br /><br />

                For information on: Processing methods, Access to data, Data communication, Rights of the data subject, Methods of exercising rights, Data Controller, data processors and persons in charge, please read the Privacy Policy of the Site.

            </Text>

        </div>
    )
}

export default CookiesPolicy
