import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import OurPartnersSlider from './ui/PartnersSLider'
import ServiceSlider1 from "./ui/ServiceSLider1";
import ServiceSlider2 from "./ui/ServiceSLider2";
import Video from './ui/Video'
import IsoCertified from './ISOCertified'
import ImageSec from "./ui/ImageSec";

const cardsData = [
    { image: "/lcimg1.svg", title: "Instant Document Verification", description: "Scan the QR code to confirm analog document authenticity and completeness." },
    { image: "/qrCertCard2.svg", title: "Legally Valid Certification", description: "Ensures documents maintain evidentiary value." },
    { image: "/qrCertCard3.svg", title: "Tamper Proof Security", description: "Protects against unauthorized modifications." },
    { image: "/lcheck4.svg", title: "Scalable & Customizable", description: "Ideal for businesses, government institutions, and individuals." },
    { image: "/qrCertCard5.svg", title: "Seamless Integrations", description: "Can be integrated into document management systems." },
];

const BenefitCards = [
    {
        title: "Legal & Compliance",
        description: "Secure contracts, agreements, and legal records.",
    },
    {
        title: "Government & Public Administration",
        description: "Authenticate official documents.",
    },
    {
        title: "Educational Institutions",
        description: "Certify diplomas, transcripts, and certifications.",
    },
    {
        title: "Healthcare & Medical Records",
        description: " Secure patient data and prescriptions.",
    },
    {
        title: "Financial & Banking Sector",
        description: "Validate reports, statements, and sensitive data.",
    },
    {
        title: "Supply Chain & Logistics",
        description: "Ensure authenticity of invoices and shipping documents.",
    },
];


function QrCertSection() {
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

                {/* ==== What is QrCertCode ====== */}
                <div className="w-full flex flex-col justify-center items-center gap-[50px]">
                        <Heading1 headingGray="what is" headingWhite="QrCertCode?" />
                        <Text>
                        QrCertCode is a <GradientSpan>digital certification service</GradientSpan> that generates <GradientSpan>unique certificated QR codes</GradientSpan> (no simple QrCode) to verify the authenticity of documents. It ensures that documents are <GradientSpan>tamper-proof and legally verifiable</GradientSpan>, offering a seamless way to confirm their integrity and completeness.
                        </Text>


                    {/* Image Section */}
                    <ImageSec imageUrl="/images/QRCode.jpg" />

                </div>
                {/* ==== What is QrCertCode ====== */}


                {/* ====== How QrCertCode works ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <div className="flex flex-col gap-[20px]">
                        <Heading1 headingGray="How" headingWhite="QRCERTCODE Works" />
                        <Text>
                        With <GradientSpan>QrCertCode</GradientSpan>, each document is assigned a <GradientSpan>unique QR code</GradientSpan> that can be scanned to instantly verify its authenticity. This allows businesses, institutions, and individuals to securely store and validate documents.
                        </Text>
                    </div>
                </div>
                {/* ====== How QrCertCode works ======= */}

                {/* ====== Why Choose QrCertCode ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <Heading1 headingGray="Why Choose" headingWhite="QRCERTCODE?" />

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
                    <Video link="/dataclick.webm" />
                </div>
                {/* ====== Why Choose QrCertCode ======= */}

                {/* ====== Benefit of using QrCertCode ===== */}
                <div className="w-full flex flex-col gap-[64px] mx-auto">

                    <Heading1 headingGray="benefits of" headingWhite="using QRCERTCODE" />

                    <div className="lg:hidden block">
                        <ServiceSlider2 cards={BenefitCards} />
                    </div>

                    <div className="mx-auto hidden lg:grid grid-cols-4 gap-x-20 gap-y-5">
                        {/*  */}
                        <div className="lg:block hidden"></div>

                        {/* Card 1 */}
                        <Card2 title="Legal & Compliance" description="Secure contracts, agreements, and legal records." />

                        {/* Card 2 */}
                        <Card2 title="Government & Public Administration" description=" Automated document verification with OCR and certification logs.Authenticate official documents." />

                        {/* Card 3 */}
                        <Card2 title="Educational Institutions" description="Certify diplomas, transcripts, and certifications." />

                        {/* Card 4 */}
                        <Card2 title="Healthcare & Medical Records" description="Secure patient data and prescriptions." />

                        {/* Card 5 */}
                        <Card2 title="Financial & Banking Sector" description="Validate reports, statements, and sensitive data." />

                        {/* Card 6 */}
                        <Card2 title="Supply Chain & Logistics" description="Ensure authenticity of invoices and shipping documents." />

                        <div className="lg:block hidden"></div>

                    </div>

                </div>
                {/* ====== Benefit of usind QrCertCode ===== */}

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

export default QrCertSection;
