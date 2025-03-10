import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import OurPartnersSlider from './ui/PartnersSLider'
import OurPatent from './OurPatent'
import ISOCertified from './ISOCertified'
import TimelineDesktop from './AboutTimeline'
import TeamSection from "./OurTeam";
import MobileTimeline from './ui/MobTimeLine'

const timelineData = [
    {
        year: "2015",
        title: "Foundation Years",
        text1: `Tolemaica, founded in 2015, develops legal certification services for digital data. Initially, it focused on IAC (Instant Automatic Certification) technology, securing patents nationally (MSE) and internationally (WIPO). It later obtained copyright registrations (SIAE, Copyright Office of Washington).`,
        text2: 'The service began with OwnClick, an app certifying date and location for photos, leading to solutions like LegalClick, DataClick, LegalCheck, QrCertCode, and BarCertCode.',
        image: "/timeline1.svg",
    },
    {
        year: "2017",
        title: "Year of Growth",
        text1: `Tolemaica received funding from the "Startup Innovative 2017" program and joined the Campania New Steel incubator.`,
        text2: 'It expanded its certification service with smartphone apps, libraries, and APIs, integrating with devices like drones, combat cams, handhelds, scanners, and cameras.',
        image: "/timeline2.svg",
    },
    {
        year: "2018",
        title: "Awards & allocations",
        text1: `Tolemaica gained recognition in innovation, winning the "SMAU Innovation Award 2018" and later in 2021 & 2024.`,
        text2: 'That year, ICE (Italian Trade Agency) selected Tolemaica to represent Italy at Launch Scale in San Francisco, engaging with top Silicon Valley companies.',
        image: "/timeline3.svg",
    },
    {
        year: "2019 - Present",
        title: "The Legacy Continues",
        text1: `In 2019, Tolemaica participated in CES Las Vegas, gaining international attention. After winning NtData's "Let's Change the World" competition, the Japanese tech giant partnered with Tolemaica and later acquired a minority stake.`,
        text2: 'This enabled Tolemaica to expand its technology portfolio, integrating AI, Blockchain, and Quantum Cryptography. The company has since gained prestigious clients, including Terna, SKY Italia, the Ministry of Infrastructure, ASI, Italo Treni, ALA Logistics, and MSC Group terminals.',
        image: "/timeline4.svg",
    },
];

const timelineDataSM = [
    {
        year: "2015",
        title: "Foundation Years",
        text1: `Tolemaica, founded in 2015, develops legal certification services for digital data. Initially, it focused on IAC (Instant Automatic Certification) technology, securing patents nationally (MSE) and internationally (WIPO). It later obtained copyright registrations (SIAE, Copyright Office of Washington).`,
        text2: 'The service began with OwnClick, an app certifying date and location for photos, leading to solutions like LegalClick, DataClick, LegalCheck, QrCertCode, and BarCertCode.',
        image: "/timelinesm1.svg",
        icon:'/timelineicon1.svg'
    },
    {
        year: "2017",
        title: "Year of Growth",
        text1: `Tolemaica received funding from the "Startup Innovative 2017" program and joined the Campania New Steel incubator.`,
        text2: 'It expanded its certification service with smartphone apps, libraries, and APIs, integrating with devices like drones, combat cams, handhelds, scanners, and cameras.',
        image: "/timelinesm2.svg",
         icon:'/timelineicon2.svg'
    },
    {
        year: "2018",
        title: "Awards & allocations",
        text1: `Tolemaica gained recognition in innovation, winning the "SMAU Innovation Award 2018" and later in 2021 & 2024.`,
        text2: 'That year, ICE (Italian Trade Agency) selected Tolemaica to represent Italy at Launch Scale in San Francisco, engaging with top Silicon Valley companies.',
        image: "/timelinesm3.svg",
         icon:'/timelineicon3.svg'
    },
    {
        year: "2019 - Present",
        title: "The Legacy Continues",
        text1: `In 2019, Tolemaica participated in CES Las Vegas, gaining international attention. After winning NtData's "Let's Change the World" competition, the Japanese tech giant partnered with Tolemaica and later acquired a minority stake.`,
        text2: 'This enabled Tolemaica to expand its technology portfolio, integrating AI, Blockchain, and Quantum Cryptography. The company has since gained prestigious clients, including Terna, SKY Italia, the Ministry of Infrastructure, ASI, Italo Treni, ALA Logistics, and MSC Group terminals.',
        image: "/timelinesm4.svg",
         icon:'/timelineicon4.svg'
    },
];


function AboutSection() {
    return (
        <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col">
            <video
                src="/ourpartners.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            ></video>

            <div className=" relative z-10 hidden lg:flex flex-col justify-center items-center">
                <TimelineDesktop cards={timelineData} />
            </div>
            <div className=" relative z-10 lg:hidden flex flex-col justify-center items-center">
                <MobileTimeline cards={timelineDataSM} />
            </div>

            <div className="relative   md:my-[100px] my-[60px] z-20 mg:mb-[100px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
                <div className="flex flex-col gap-[20px]">
                    <Heading1 headingGray="Our" headingWhite="Partners" />
                    <Text>
                        Lorem ipsum dolor sit amet consectetur.{" "}
                        <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
                        senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
                        velit vestibulum adipiscing.
                    </Text>
                </div>

                <OurPartnersSlider image1="/img1.svg" image2="/img2.svg" image3="/img3.svg" image4="/img4.svg" />

            </div>


            {/* ==== Content wrapper ===== */}
            <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center lg:px-[100px] md:px-[50px] px-[20px]">

                {/* Our Team */}
                <TeamSection />
                {/* Our Patent */}
                <OurPatent />
                {/* ISO Certified */}
                <ISOCertified />

            </div>

            {/* ==== Partners ==== */}


        </section>
    );
}

export default AboutSection;
