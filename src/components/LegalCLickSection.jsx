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
import ImageSec from "./ui/ImageSec";

const cardsData = [
    {
        image: "/dataclick1.png",
        title: "Instant Certification",
        gradientColors: ["#140902", "#4e2c1c"],
        description: "Provides immediate proof of authenticity."
    },
    {
        image: "/legalclick2.png",
        title: "Pay-Per-Use",
        description: "No subscriptions—only pay when you need it.",
        gradientColors: ["#360e12", "#180808"],
    },
    {
        image: "/legalclick3.png",
        title: "Legally Recognized",
        description: "Ensures digital media has evidentiary value. ",
        gradientColors: ["#5c5b5a", "070402"],
    },
    {
        image: "/legalclick4.png",
        title: "Accessible Anywhere",
        description: "Use via web platform or mobile app. ",
        gradientColors: ["#240a12", "#3f3131"],
    },
    {
        image: "/legalclick5.png",
        title: "Secure Storage",
        description: " Certified media is safely stored and retrievable.",
        gradientColors: ["#240a12", "#3f3131"],
    },
];

const gradients = [
    "linear-gradient(145deg, #171515, #271519)",
    "linear-gradient(145deg, #0a0604, #433f3e)",
    "linear-gradient(145deg, #281e19, #593c2d)",
    "linear-gradient(145deg, #1a1a1a, #505050)",
    "linear-gradient(145deg, #060505, #060505)",
    "linear-gradient(145deg, #171616, #29151a)"
  ];

const BenefitCards = [
    {
        title: "Government & Public Sector ",
        description: "Secure, timestamped documentation for official records.",
        bg: gradients[0]
    },
    {
        title: "Legal & Compliance Departments",
        description: "Automated document verification with OCR and certification logs.",
        bg: gradients[1]
    },
    {
        title: "Corporate Auditing & Internal Control",
        description: "Maintain compliance and certify key operational records.",
        bg: gradients[2]
    },
    {
        title: "Supply Chain & Logistics",
        description: "Certify packaging, storage, and transit documentation.",
        bg: gradients[3]
    },
    {
        title: "Insurance & Claims Processing",
        description: "Authenticate evidence for claims and prevent fraud.",
        bg: gradients[4]
    },
    {
        title: "Infrastructure & Engineering Projects",
        description: "Document construction progress with certified images.",
        bg: gradients[5]
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
                style={{ filter: "blur(40px)" }}
            ></video>

            {/* ==== Content wrapper ===== */}
            <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center lg:px-[100px] md:px-[50px] px-[20px]">

                {/* ==== What is LEGALCLICK ====== */}
                <div className="w-full flex flex-col justify-center items-center gap-[50px]">
                    <div className="flex flex-col gap-[20px]">
                        <Heading1 headingGray="what is" headingWhite="LEGALCLICK" />
                        <Text>
                            LegalClick is a <GradientSpan>pay-per-usage digital certification service</GradientSpan> designed for <GradientSpan>individuals and small businesses</GradientSpan>. Whether you need to certify a photo, <GradientSpan>video, or audio recording</GradientSpan>. LegalClick provides instant, legally valid proof of authenticity.
                        </Text>
                    </div>

                    {/* Image Section */}
                    <ImageSec imageUrl="/images/Legalclick.jpg" />

                </div>
                {/* ==== What is DataClick ====== */}


                {/* ====== How dataclick works ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <div className="flex flex-col gap-[20px]">
                        <Heading1 headingGray="How" headingWhite="LEGALCLICK Works" />
                        <Text>
                            With LegalClick, you can simply upload your media and receive a <GradientSpan>probative element</GradientSpan> that guarantees its authenticity. The process is quick, easy, and accessible via both <GradientSpan>PC and smartphone</GradientSpan>.
                        </Text>
                    </div>
                </div>
                {/* ====== How dataclick works ======= */}

                {/* ====== Why Choose DataClick ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <Heading1 headingGray="Why Choose" headingWhite="LEGALCLICK?" />

                    {/* ==== Cards ==== */}
                    <div className="w-full">
                        <div className="flex flex-col justify-content-center items-center gap-[36px]">
                            <div className="hidden lg:flex flex-row flex-wrap justify-center items-center gap-[24px]">
                                {/* {cardsData.map((card, index) => (
                                <Card3 key={index} {...card} />
                            ))} */}
                                <Card3
                                    description={cardsData[0].description}
                                    image={cardsData[0].image}
                                    gradientColors={cardsData[0].gradientColors}
                                    title={cardsData[0].title}
                                />
                                <Card3
                                    description={cardsData[1].description}
                                    image={cardsData[1].image}
                                    gradientColors={cardsData[1].gradientColors}
                                    title={cardsData[1].title}
                                />
                                <Card3
                                    description={cardsData[2].description}
                                    image={cardsData[2].image}
                                    gradientColors={cardsData[2].gradientColors}
                                    title={cardsData[2].title}
                                />
                            </div>

                            <div className="hidden lg:flex flex-row flex-wrap justify-center items-center gap-[24px]">
                                {/* {cardsData.map((card, index) => (
                                <Card3 key={index} {...card} />
                            ))} */}
                                <Card3
                                    description={cardsData[3].description}
                                    image={cardsData[3].image}
                                    gradientColors={cardsData[3].gradientColors}
                                    title={cardsData[3].title}
                                />
                                <Card3
                                    description={cardsData[4].description}
                                    image={cardsData[4].image}
                                    gradientColors={cardsData[4].gradientColors}
                                    title={cardsData[4].title}
                                />

                            </div>
                        </div>


                        <div className="flex lg:hidden">
                            <ServiceSlider1 cards={cardsData} />
                        </div>
                    </div>
                    {/* ==== Cards ==== */}

                    {/* === Video Section === */}
                    {/* <Video link="/dataclick.webm" /> */}
                </div>
                {/* ====== Why Choose DataClick ======= */}

                {/* ====== Benefit of usind dataclick ===== */}
                <div className="w-full flex flex-col gap-[64px] mx-auto">

                    <Heading1 headingGray="benefits of" headingWhite="using LEGALclick" />

                    <div className="lg:hidden block">
                        <ServiceSlider2 cards={BenefitCards} />
                    </div>

                    <div className="mx-auto hidden lg:grid grid-cols-4 gap-[36px]">
                        {/*  */}
                        <div className="lg:block hidden"></div>

                        {/* Card 1 */}
                        <Card2 title="Legally Valid Certification" description="Provides legally recognized proof of authenticity for photos, videos, and audio recordings" bg={gradients[0]} />

                        {/* Card 2 */}
                        <Card2 title="Instant Certification" description="Quickly certifies media files with a probative element, ensuring fast and reliable authentication"  bg={gradients[1]} />

                        {/* Card 3 */}
                        <Card2 title="Pay-Per-Use Model" description="No need for subscriptions; only pay when you use the service, making it cost-effective for individuals and small businesses" bg={gradients[2]} />

                        {/* Card 4 */}
                        <Card2 title="User-Friendly & Accessible" description="Easily upload and certify files via PC or smartphone, ensuring convenience anytime, anywhere" bg={gradients[3]} />

                        {/* Card 5 */}
                        <Card2 title="Secure & Tamper-Proof" description="Uses strong encryption and digital signatures to prevent any alteration of the certified media" bg={gradients[4]} />

                        {/* Card 6 */}
                        <Card2 title="Versatile Applications" description="Useful for legal disputes, copyright protection, insurance claims, contract verification, and more" bg={gradients[5]} />

                        <div className="lg:block hidden"></div>

                    </div>

                </div>
                {/* ====== Benefit of usind dataclick ===== */}

                {/* IsoCertified */}
                <IsoCertified />

            </div>

            {/* ==== Partners ==== */}
            <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
                <OurPartnersSlider image1="/img1.svg" image2="/img2.svg" image3="/img3.svg" image4="/img4.svg" />
            </div>

            {/* ======= Our Partners ======== */}

        </section>
    );
}

export default DataClickSecton;
