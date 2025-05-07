// import React from "react";
// import Heading1 from "./ui/Heading1";
// import { Text, GradientSpan } from "./ui/Text";
// import OurPartnersSlider from "./ui/PartnersSLider";
// import OurPatent from "./OurPatent";
// import ISOCertified from "./ISOCertified";
// import TimelineDesktop from "./AboutTimeline";
// import TeamSection from "./OurTeam";
// import MobileTimeline from "./ui/MobTimeLine";

// const timelineData = [
//   {
//     year: "2015",
//     title: "Foundation Years",
//     text1: `Tolemaica, founded in 2015, develops legal certification services for digital data. Initially, it focused on IAC (Instant Automatic Certification) technology, securing patents nationally (MSE) and internationally (WIPO). It later obtained copyright registrations (SIAE, Copyright Office of Washington).`,
//     text2:
//       "The service began with OwnClick, an app certifying date and location for photos, leading to solutions like LegalClick, DataClick, LegalCheck, QrCertCode, and BarCertCode.",
//     image: "/images/Foundationyears.png",
//   },
//   {
//     year: "2017",
//     title: "Startup Innovative 2017",
//     text1: `Tolemaica wins the “Startup Innovative 2017” award, promoted by the Campania Region in Italy, for its digital certification and secure data management solutions. It joins the Campania New Steel Incubator to scale operations and accelerate market adoption.`,
//     text2:
//       "Tolemaica expands its services, integrating advanced technologies to enhance security and authenticity. It offers apps, API libraries, and tools for seamless use with drones, cameras, handheld devices, scanners, and imaging systems.",
//     image: "/images/Yearsofgrowth.png",
//   },
//   {
//     year: "2018",
//     title: "Innovation Award SMAU 2018",
//     text1: `In 2018, Tolemaica participates in major innovation events, including SMAU in London, Berlin, and Milan, where it wins the “Innovation Award SMAU 2018.” That same year, it is selected by ICE (Italian Trade Agency) to represent Italy at Launch Scale in San Francisco, engaging with top Silicon Valley companies.`,
//     text2:
//       "That year, ICE (Italian Trade Agency) selected Tolemaica to represent Italy at Launch Scale in San Francisco, engaging with top Silicon Valley companies.",
//     image: "/images/Awardds.png",
//   },
//   {
//     year: "2019",
//     title: "Participation in CES Las Vegas",
//     text1: `In 2019, Tolemaica participates in CES Las Vegas, gaining international recognition. That same year, it wins NTT Data’s “Let’s Change the World” competition, leading to an initial partnership and a minority equity investment by the Japanese giant.`,
//     text2:
//       "This enabled Tolemaica to expand its technology portfolio, integrating AI, Blockchain, and Quantum Cryptography. The company has since gained prestigious clients, including Terna, SKY Italia, the Ministry of Infrastructure, ASI, Italo Treni, ALA Logistics, and MSC Group terminals.",
//     image: "/images/Legacy.png",
//   },

//   {
//     year: "2020",
//     title: "Participation in Gitex",
//     text1: `GITEX Technology Week showcases cutting-edge innovation through conferences, exhibitions, and competitions like the North Star Innovation Challenge.`,
//     text2:
//       "In 2020, Tolemaica wins the North Star Innovation Challenge at GITEX, highlighting its commitment to excellence and technology. Competing against top startups, Tolemaica’s innovative solutions earn them first prize, boosting their reputation and opening new opportunities in both the private and public sectors.",
//     image: "/images/gitex.png",
//   },
//   {
//     year: "2022",
//     title: "Wins Innovative Excellence Award at CES",
//     text1: `In 2022, Tolemaica wins the Innovative Excellence Award at CES for its blockchain-based solution that authenticates and timestamps certified medical records. This recognition strengthens its position as a leader in digital trust and compliance for the health sector.`,
//     text2:
//       "The award opens new opportunities with healthcare institutions, regulators, and tech partners, as Tolemaica expands its role in secure, interoperable health data management.",
//     image: "/images/ces.png",
//   },
//   {
//     year: "2024",
//     title: "Innovative Excellence Award at SMAU",
//     text1: `In 2024, Tolemaica wins the Innovative Excellence Award at SMAU, one of Europe’s leading tech events. The award recognizes QrCertCode, a project developed with the Italian Ministry of Infrastructure. This solution uses advanced cryptographic certification and QR-based authentication to secure and track critical infrastructure documents and digital workflows.`,
//     text2:
//       "This achievement reinforces Tolemaica’s role as a trusted technology provider for government and enterprise, expanding its presence in public sector digitalization and enabling new strategic partnerships.",
//     image: "/images/smau.png",
//   },
//   {
//     year: "2025 - PRESENT",
//     title: "The Legacy Continues",
//     text1: `Tolemaica leads in digital certification, partnering with major organizations like Ferrovie dello Stato, SKY Italia, and the Central Bank of Italy. Its IAC technology secures high-compliance sectors.`,
//     text2:
//       "Now scaling globally, Tolemaica expands across Europe, the Middle East, and North America. With QrCertCode and BarCertCode, it moves from pilots to full commercial deployment in finance, telecom, transport, and digital infrastructure.",
//     image: "/images/2025.png",
//   }
// ];

// const timelineDataSM = [
//   {
//     year: "2015",
//     title: "Foundation Years",
//     text1: `Tolemaica, founded in 2015, develops legal certification services for digital data. Initially, it focused on IAC (Instant Automatic Certification) technology, securing patents nationally (MSE) and internationally (WIPO). It later obtained copyright registrations (SIAE, Copyright Office of Washington).`,
//     text2:
//       "The service began with OwnClick, an app certifying date and location for photos, leading to solutions like LegalClick, DataClick, LegalCheck, QrCertCode, and BarCertCode.",
//     image: "/images/Foundationyears.png",
//     icon: "/timelineicon1.svg",
//   },
//   {
//     year: "2017",
//     title: "Year of Growth",
//     text1: `Tolemaica received funding from the "Startup Innovative 2017" program and joined the Campania New Steel incubator.`,
//     text2:
//       "It expanded its certification service with smartphone apps, libraries, and APIs, integrating with devices like drones, combat cams, handhelds, scanners, and cameras.",
//     image: "/images/Yearsofgrowth.png",
//     icon: "/timelineicon2.svg",
//   },
//   {
//     year: "2018",
//     title: "Awards & allocations",
//     text1: `Tolemaica gained recognition in innovation, winning the "SMAU Innovation Award 2018" and later in 2021 & 2024.`,
//     text2:
//       "That year, ICE (Italian Trade Agency) selected Tolemaica to represent Italy at Launch Scale in San Francisco, engaging with top Silicon Valley companies.",
//     image: "/images/Awardds.png",
//     icon: "/timelineicon3.svg",
//   },
//   ,
//   {
//     year: "2019",
//     title: "Participation in CES Las Vegas",
//     text1: `In 2019, Tolemaica participates in CES Las Vegas, gaining international recognition. That same year, it wins NTT Data’s “Let’s Change the World” competition, leading to an initial partnership and a minority equity investment by the Japanese giant.`,
//     text2:
//       "This enabled Tolemaica to expand its technology portfolio, integrating AI, Blockchain, and Quantum Cryptography. The company has since gained prestigious clients, including Terna, SKY Italia, the Ministry of Infrastructure, ASI, Italo Treni, ALA Logistics, and MSC Group terminals.",
//     image: "/images/Legacy.png",
//     icon: "/timelineicon4.svg",
//   },

//   {
//     year: "2020",
//     title: "Participation in Gitex",
//     text1: `GITEX Technology Week showcases cutting-edge innovation through conferences, exhibitions, and competitions like the North Star Innovation Challenge.`,
//     text2:
//       "In 2020, Tolemaica wins the North Star Innovation Challenge at GITEX, highlighting its commitment to excellence and technology. Competing against top startups, Tolemaica’s innovative solutions earn them first prize, boosting their reputation and opening new opportunities in both the private and public sectors.",
//     image: "/images/gitex.png",
//     icon: "/timelineicon1.svg",
//   },
//   {
//     year: "2022",
//     title: "Wins Innovative Excellence Award at CES",
//     text1: `In 2022, Tolemaica wins the Innovative Excellence Award at CES for its blockchain-based solution that authenticates and timestamps certified medical records. This recognition strengthens its position as a leader in digital trust and compliance for the health sector.`,
//     text2:
//       "The award opens new opportunities with healthcare institutions, regulators, and tech partners, as Tolemaica expands its role in secure, interoperable health data management.",
//     image: "/images/ces.png",
//     icon: "/timelineicon2.svg",
//   },
//   {
//     year: "2024",
//     title: "Innovative Excellence Award at SMAU",
//     text1: `In 2024, Tolemaica wins the Innovative Excellence Award at SMAU, one of Europe’s leading tech events. The award recognizes QrCertCode, a project developed with the Italian Ministry of Infrastructure. This solution uses advanced cryptographic certification and QR-based authentication to secure and track critical infrastructure documents and digital workflows.`,
//     text2:
//       "This achievement reinforces Tolemaica’s role as a trusted technology provider for government and enterprise, expanding its presence in public sector digitalization and enabling new strategic partnerships.",
//     image: "/images/smau.png",
//     icon: "/timelineicon3.svg",
//   },
//   {
//     year: "2025 - PRESENT",
//     title: "The Legacy Continues",
//     text1: `Tolemaica leads in digital certification, partnering with major organizations like Ferrovie dello Stato, SKY Italia, and the Central Bank of Italy. Its IAC technology secures high-compliance sectors.`,
//     text2:
//       "Now scaling globally, Tolemaica expands across Europe, the Middle East, and North America. With QrCertCode and BarCertCode, it moves from pilots to full commercial deployment in finance, telecom, transport, and digital infrastructure.",
//     image: "/images/2025.png",
//     icon: "/timelineicon4.svg",
//   }
// ];

// function AboutSection() {
//   return (
//     <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col">
//       <video
//         src="/ourpartners.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         webkit-playsinline
//         className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//         style={{ filter: "blur(40px)" }}
//       ></video>

//       <div className="mx-auto w-full max-w-[1280px]">
//         <div className=" relative z-10 hidden lg:flex flex-col justify-center items-center">
//           <TimelineDesktop cards={timelineData} />
//         </div>
//         <div className=" relative z-10 lg:hidden flex flex-col justify-center items-center">
//           <MobileTimeline cards={timelineDataSM} />
//         </div>

//         <div className="relative   md:my-[100px] my-[60px] z-20 mg:mb-[100px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
//           <OurPartnersSlider
//             image1="/img1.svg"
//             image2="/img2.svg"
//             image3="/img3.svg"
//             image4="/img4.svg"
//           />
//         </div>

//         {/* ==== Content wrapper ===== */}
//         <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center lg:px-[100px] md:px-[50px] px-[20px]">
//           {/* Our Team */}
//           <TeamSection />
//           {/* Our Patent */}
//           <OurPatent />
//           {/* ISO Certified */}
//           <ISOCertified />
//         </div>

//         {/* ==== Partners ==== */}
//       </div>
//     </section>
//   );
// }

// export default AboutSection;
import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import OurPartnersSlider from "./ui/PartnersSLider";
import OurPatent from "./OurPatent";
import ISOCertified from "./ISOCertified";
import TimelineDesktop from "./AboutTimeline";
import TeamSection from "./OurTeam";
import MobileTimeline from "./ui/MobTimeLine";

function AboutSection() {
  const [timelineData, setTimelineData] = useState([]);
  
  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/aboutyear?populate=heading&populate=years.heading&populate=years.iamge`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const yearsData = data.data.years.map((year) => ({
          year: year.heading?.light_heading,
          title: year.heading?.dark_heading,
          text1: year.first_paragraph,
          text2: year.second_paragraph,
          image: year.iamge?.url,  // Fetching only the image URL
        }));
        setTimelineData(yearsData);
      })
      .catch((err) => {
        console.error("Error fetching AboutYear data:", err);
      });
  }, []);

  return (
    <section className="relative overflow-hidden w-full bg-black py-[100px] flex flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="relative z-10 hidden lg:flex flex-col justify-center items-center">
          <TimelineDesktop cards={timelineData} />
        </div>
        <div className="relative z-10 lg:hidden flex flex-col justify-center items-center">
          <MobileTimeline cards={timelineData} />
        </div>

        <div className="relative z-10 md:my-[100px] my-[60px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
          <OurPartnersSlider
            image1="/img1.svg"
            image2="/img2.svg"
            image3="/img3.svg"
            image4="/img4.svg"
          />
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
      </div>
    </section>
  );
}

export default AboutSection;
