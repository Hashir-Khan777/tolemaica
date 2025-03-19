import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import { Link } from "react-router-dom";
import OurPartnersSlider from './ui/PartnersSLider'
import ServiceSlider1 from "./ui/ServiceSLider1";
import ServiceSlider2 from "./ui/ServiceSLider2";
import Video from './ui/Video'
import IsoCertified from './ISOCertified'

const cardsData = [
    { image: "/lcimg1.svg", title: "Tailored Certification", description: "Customizable verification processes based on company or governmental requirements." },
    { image: "/lcheck.svg", title: "Enterprise System Integration", description: "    Connects with databases and management platforms via APIs and webservices." },
    { image: "/lcheck2.svg", title: "OCR Technology", description: "Reads and extracts text from images for automated data processing." },
    { image: "/lcheck3.svg", title: "Legally Valid Certification", description: "    Ensures compliance and authenticity of certified data. " },
    { image: "/lcheck4.svg", title: "Scalability & Security", description: "    Designed to handle large-scale operations with robust security standards. " },
];

const BenefitCards = [
    {
        title: "Government & Public Sector",
        description: "    Secure, timestamped documentation for official records.",
    },
    {
        title: "Legal & Compliance Departments",
        description: "Automated document verification with OCR and certification logs.",
    },
    {
        title: "Corporate Auditing & Internal Control",
        description: "Maintain compliance and certify key operational records.",
    },
    {
        title: "Supply Chain & Logistics",
        description: "Certify packaging, storage, and transit documentation.",
    },
    {
        title: "Insurance & Claims Processing",
        description: "Authenticate evidence for claims and prevent fraud.",
    },
    {
        title: "Infrastructure & Engineering Projects",
        description: "Document construction progress with certified images.",
    },
];


function DataClickSecton() {
    return (
        <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col">
            <video
                src="/ourpartners.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            ></video>

            {/* ==== Content wrapper ===== */}
            <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center lg:px-[100px] md:px-[50px] px-[20px]">

                {/* ==== What is LEGALcHECK ====== */}
                <div className="w-full flex flex-col justify-center items-center gap-[50px]">
                    <div className="flex flex-col gap-[20px]">
                        <Heading1 headingGray="what is" headingWhite="Legalcheck?" />
                        <Text>
                        LegalCheck is a <GradientSpan>customized digital certification solution</GradientSpan> designed <GradientSpan>for large enterprises and government</GradientSpan> institutions. This service ensures a highly <GradientSpan>adaptable</GradientSpan> and scalable certification process tailored to specific organizational needs, offering seamless integration with existing <GradientSpan>enterprise systems and databases</GradientSpan>. 
                        </Text>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img src="/legalcheckimg1.svg" alt="" className="lg:h-[660px] min-w-[400px] " />
                    </div>

                </div>
                {/* ==== What is LEGALcHECK ====== */}


                {/* ====== How LEGALcHECK works ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <div className="flex flex-col gap-[20px]">
                        <Heading1 headingGray="How" headingWhite="LEGALCHECK Works?" />
                        <Text>
                        LegalCheck not only <GradientSpan>provides proof of authenticity</GradientSpan> for images, videos, and audio but also supports <GradientSpan>advanced automation and integration</GradientSpan>. With powerful <GradientSpan>OCR (Optical Character Recognition)</GradientSpan> capabilities, it can read and extract text from images, enhancing document verification and compliance workflows. 
                        </Text>
                    </div>
                </div>
                {/* ====== How LEGALcHECK works ======= */}

                {/* ====== Why Choose LEGALcHECK ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <Heading1 headingGray="Why Choose" headingWhite="LEGALChECK?" />

                    {/* ==== Cards ==== */}
                    <div className="w-full ">
                        <div className="hidden lg:flex flex-row flex-wrap justify-center items-center gap-[24px]">
                            {cardsData.map((card, index) => (
                                <Card3 key={index} {...card} />
                            ))}
                        </div>

                        <div className="flex lg:hidden">
                            <ServiceSlider1 cards={cardsData} />
                        </div>
                    </div>
                    {/* ==== Cards ==== */}

                    {/* === Video Section === */}
                    <Video />
                </div>
                {/* ====== Why Choose LEGALcHECK ======= */}

                {/* ====== Benefit of usind LEGALcHECK ===== */}
                <div className="w-full flex flex-col gap-[64px] mx-auto">

                    <Heading1 headingGray="benefits of" headingWhite="using LEGALclick" />

                    <div className="lg:hidden block">
                        <ServiceSlider2 cards={BenefitCards} />
                    </div>

                    <div className="mx-auto hidden lg:grid grid-cols-4 gap-x-20 gap-y-5">
                        {/*  */}
                        <div className="lg:block hidden"></div>

                        {/* Card 1 */}
                        <Card2 title="Government & Public Sector " description="    Secure, timestamped documentation for official records." />

                        {/* Card 2 */}
                        <Card2 title="Legal & Compliance Departments" description=" Automated document verification with OCR and certification logs." />

                        {/* Card 3 */}
                        <Card2 title="Corporate Auditing & Internal Control" description="Maintain compliance and certify key operational records." />

                        {/* Card 4 */}
                        <Card2 title="Supply Chain & Logistics" description="Certify packaging, storage, and transit documentation." />

                        {/* Card 5 */}
                        <Card2 title="Insurance & Claims Processing" description="Authenticate evidence for claims and prevent fraud." />

                        {/* Card 6 */}
                        <Card2 title="Infrastructure & Engineering Projects" description="Document construction progress with certified images." />

                        <div className="lg:block hidden"></div>

                    </div>

                </div>
                {/* ====== Benefit of usind LEGALcHECK ===== */}

                {/* IsoCertified */}
                <IsoCertified/>

            </div>

            {/* ==== Partners ==== */}
            <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
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

            {/* ======= Our Partners ======== */}

        </section>
    );
}

export default DataClickSecton;
