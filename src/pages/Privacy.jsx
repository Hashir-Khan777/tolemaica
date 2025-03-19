import React from 'react';
import Heading1 from '../components/ui/Heading1';
import { Text, GradientSpan } from '../components/ui/PolicyText'
import SubHeading from '../components/ui/SubHeading';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
// Privacy Policy Page Component
const PrivacyPolicy = () => {
    return (
        <div className="p-6 flex flex-col gap-[40px] md:gap-[64px]">
            <Heading1 headingWhite="Privacy" />

            <Text>
                Tolemaica srl with registered office in Via San Tommaso d'Aquino as Data Controller (hereinafter, "Tolemaica"), informs, pursuant to art. 13 of Legislative Decree 196/2003 (hereinafter, the "Privacy Code") and art. 13 of EU Regulation 2016/679 (hereinafter, "GDPR"), which will process the data of users (hereinafter "User" and/or "Users") collected through the www.tolemaica.it website (hereinafter, also the "Site") in the following ways and for the following purposes.
            </Text>

            <SubHeading headingWhite="1. Type of data processed by Tolemaica through the Website" />

            <Text>
                Tolemaica processes the following types of personal data (hereinafter, "data") provided by Users of the Site when consulting them and to the Site, in particular:
            </Text>

            <Text>
                Data obtained during a User's browsing on the Site

                The computer systems, cookie technology and software procedures used for the operation of the www.tolemaica.it Website acquire, during their normal operation, some data whose transmission is implicit in the use of the Internet. This information is not collected to be associated with identified data subjects, but by its very nature could, through processing and association with data held by third parties, allow the identification of Browsing Users. This category of data includes, for example, the IP addresses or domain names of the computers used by Users who connect to the Site, the pages visited by Users within the Site, the domain names and addresses of the websites from which the User has accessed (by referral) the Site, the URI (Uniform Resource Identifier) addresses of the resources requested, the time of the request, the method used to submit the request to the web server, the size of the file obtained in response, the numerical code indicating the status of the response given by the web server, and other parameters related to the type of browser (e.g. Internet Explorer, Firefox), operating system (e.g. Macintosh, Windows) and the User's computer environment.
            </Text>

            <Text>
                These data are collected through first-party proprietary technical cookies and third-party analytical cookies. For further information on browsing data, Users are invited to consult the Website's Cookie Policy.
            </Text>

            <Text>
                Personal data provided by Users
                The Site is accessible to the User without the need for identification for consultation purposes. <br />
                However, if the User wishes, the User has the right to provide Tolemaica with his/her identification data, including, for example, name and surname, e-mail, in order to receive information on the services offered.
            </Text>

            <SubHeading headingWhite="2. Purpose of the processing" />

            <Text>
                The data provided by the User will be processed, without the prior consent of the User pursuant to art. 24 letter b) of the Privacy Code and art. 6 letter b) GDPR, for the following purposes of the Service:<br />
                for the management and processing of statistical surveys on the use of the Site;<br />
                to carry out the maintenance and technical assistance necessary to ensure the proper functioning of the Site and the services connected to it;<br />
                to improve the quality and structure of the Site, as well as to create new services, functions and/or features of the same;<br />
                to process any contact request submitted by the User by filling in the appropriate form or by email;<br />
                to allow Tolemaica to exercise its rights in court and to repress unlawful conduct;<br />
                to comply with legal or regulatory obligations.
            </Text>

            <SubHeading headingWhite="3. Nature of the Provision of Data" />
            <Text>
                The provision of data by the User is mandatory for the purposes of the Service referred to in points 1 of the previous paragraph. However, any refusal to provide such data may make it impossible to provide the services.
            </Text>

            <SubHeading headingWhite="4. Processing methods" />
            <Text>
                The processing of Users' data is carried out by means of the operations indicated in art. 4 of the Privacy Code and art. 4 no. 2) GDPR and in particular: collection, recording, organization, storage, consultation, processing, modification, selection, extraction, comparison, access, use, interconnection, blocking, communication, cancellation and destruction of data.
            </Text>
            <Text>
                Users' data are processed with automated and non-automated tools, only for the time strictly necessary to achieve the purposes for which they were collected and, in any case, no later than 10 years from their collection for the purposes of the Service referred to in point 1.
            </Text>

            <SubHeading headingWhite="5. Access to data" />
            <Text>
                The data may be made accessible exclusively for the purposes mentioned above to the following subjects:
            </Text>
            <Text>
                employees and collaborators of Tolemaica or of Tolemaica's associated, subsidiaries and affiliated companies, in their capacity as persons in charge and/or internal data processors and/or system administrators;<br />
                third-party companies or other parties that carry out outsourced activities on behalf of Tolemaica, in their capacity as external data processors pursuant to Article 29 of the Code regarding the protection of personal data.
            </Text>

            <SubHeading headingWhite="6. Communication of data" />
            <Text>
                Without the express consent of the User (pursuant to Article 24 letters a), b), d) of the Privacy Code and Article 6 letters b) and c) of the GDPR), Educare alla Vita may communicate the User's data for the purposes of the Service referred to in Art. II.1) to Supervisory Bodies, Judicial Authorities as well as to all other subjects to whom communication is mandatory by law for the fulfilment of the aforementioned purposes, as independent data controllers. Users' data will not be disseminated.
            </Text>

            <SubHeading headingWhite="7. Data transfer" />
            <Text>
                The management and storage of data will take place on servers located within the European Union of Tolemaica and/or of third-party companies appointed and duly appointed as Data Processors. The data will not be transferred outside the European Union. In any case, it is understood that Tolemaica, if necessary, will have the right to move the location of the servers to Italy and/or the European Union and/or non-EU countries. In this case, Tolemaica hereby ensures that the transfer of data outside the EU will take place in accordance with the applicable legal provisions by stipulating, if necessary, agreements that guarantee an adequate level of protection and/or adopting the standard contractual clauses provided for by the European Commission.
            </Text>

            <SubHeading headingWhite="8. Third-party websites and other sites owned by Tolemaica" />
            <Text>
                It should be noted herein that, should the Site contain links to third-party websites, Tolemaica cannot exercise any control over the content of such websites nor has any access to the personal data of users visiting them.
            </Text>
            <Text>
                The owners of the aforementioned websites will therefore remain the sole and exclusive owners and managers of the processing of their users' personal data, remaining, Tolemaica, extraneous to this activity as well as to any liability, prejudice, cost, which may derive from its failure or incorrect performance.
            </Text>
            <Text>
                The Site may also contain links to other sites owned by Tolemaica.
            </Text>
            <Text>
                We therefore recommend that you carefully read the relevant privacy policies and terms of use of these websites before providing or consenting to the processing of your personal data.
            </Text>

            <SubHeading headingWhite="9. Rights of Users" />
            <Text>
                The User will have the right to exercise the rights referred to in art. 7 of the Privacy Code and art. 15 GDPR.
            </Text>
            <Text>
                In particular, the User has the right at any time to obtain from Tolemaica confirmation of the existence or otherwise of personal data concerning him/her, even if not yet recorded, and their communication in intelligible form.
            </Text>
            <Text>
                The User also has the right to obtain confirmation:<br />
                a) the origin of the personal data;<br />
                b) the purposes and methods of processing;<br />
                c) the logic applied in the case of processing carried out with the aid of automated tools;<br />
                d) the identification details of the data controller, the data processors and the designated representative;<br />
                e) of the subjects or categories of subjects to whom the personal data may be communicated or who may become aware of them in their capacity as <br />designated representatives in the territory of the State, data processors or persons in charge of the processing.
            </Text>
            <Text>
                You also have the right to obtain:<br />
                a) the updating, correction or, when interested, the integration of the data;<br />
                b) the cancellation, transformation into anonymous form or blocking of data processed in violation of the law, including those whose retention is not necessary in relation to the purposes for which the data were collected or subsequently processed;<br />
                c) certification that the operations referred to in letters a) and b) have been brought to the attention, also as regards their content, of those to whom the data have been communicated or disseminated, except in the case in which this fulfilment proves impossible or involves the use of means manifestly disproportionate to the protected right.
            </Text>
            <Text>
                The User has the right to object, in whole or in part:<br />
                a) for legitimate reasons, to the processing of personal data concerning him/her, even if pertinent to the purpose of the collection;<br />
                b) to the processing of personal data concerning him/her for the purpose of sending advertising material or direct sales or for carrying out market research or commercial communication (e.g. relating to newsletter services).
            </Text>
            <Text>
                Where applicable, the User also has the rights referred to in art. 16-21 GDPR (Right to rectification, right to be forgotten, right to restriction of processing, right to portability of contractual and raw navigation data, right to object), as well as the right to lodge a complaint with the Data Protection Authority.
            </Text>

            <SubHeading headingWhite="10. Procedures for exercising rights" />
            <Text>
                To exercise the rights referred to in the previous article, the User may, at any time, contact Tolemaica:<br />
                by e-mail to <GradientSpan>info@tolemaica.it</GradientSpan><br />
                by registered letter to Tolemaica via San Tommaso d'Aquino, 67 -80133 Napoli (NA) (CB).
            </Text>

            <SubHeading headingWhite="11. Data Controller and Data Processor" />
            <Text>
                The data controller is Tolemaica with registered office in via San Tommaso d'Aquino 67 - 80133 Naples (NA)<br />
                The list of any data processors appointed for particular processing can be consulted by requesting it at the Tolemaica headquarters.
            </Text>

            <SubHeading headingWhite="12. Updates to the Policy" />
            <Text>
                The Data Controller reserves the right to make changes to this Policy at any time by informing Users on this page. Please consult this page regularly, taking as reference the date of last modification and the version of this Policy indicated at the bottom. If you do not agree to the changes made to this Policy, you must cease using educareallavita.org and may request the Data Controller to remove your Personal Data. Unless otherwise specified, the above Policy will continue to apply to Personal Data collected up to that point.
            </Text>

            <SubHeading headingWhite="13. Complaints" />
            <Text>
                If you are not satisfied with our response to any complaint or believe that our processing of your information does not comply with data protection legislation, you may lodge a complaint with the Data Protection Authority at the following addresses:
            </Text>
            <Text>
                Address: <GradientSpan>Piazza di Monte Citorio n. 121 - 00186 ROME</GradientSpan> <br/>
                Phone Number: <GradientSpan>06.69677.3785</GradientSpan> <br/>
                Website: <GradientSpan> <Link to="http://www.garanteprivacy.it">http://www.garanteprivacy.it</Link> </GradientSpan>
            </Text>

        </div>
    );
};


export default PrivacyPolicy
