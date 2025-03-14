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
    { image: "/lcimg1.svg", title: "Instant Certification", description: "Provides immediate proof of authenticity." },
    { image: "/lcimg2.svg", title: "Pay-Per-Use", description: "No subscriptions—only pay when you need it." },
    { image: "/lcimg3.svg", title: "Legally Recognized", description: "Ensures digital media has evidentiary value. " },
    { image: "./lcimg4.svg", title: "Accessible Anywhere", description: "Use via web platform or mobile app. " },
    { image: "./lcimg5.svg", title: "Secure Storage", description: " Certified media is safely stored and retrievable." },
];

const BenefitCards = [
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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

                {/* ==== What is LEGALCLICK ====== */}
                <div className="w-full flex flex-col justify-center items-center gap-[50px]">
                    <div className="flex flex-col gap-[20px]">
                        <Heading1 headingGray="what is" headingWhite="LEGALCLICK" />
                        <Text>
                            LegalClick is a <GradientSpan>pay-per-usage digital certification service</GradientSpan> designed for <GradientSpan>individuals and small businesses</GradientSpan>. Whether you need to certify a photo, <GradientSpan>video, or audio recording</GradientSpan>. LegalClick provides instant, legally valid proof of authenticity.
                        </Text>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img src="./legalCLickimg1.svg" alt="" className="lg:h-[660px] min-w-[400px] " />
                    </div>

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
                {/* ====== Why Choose DataClick ======= */}

                {/* ====== Benefit of usind dataclick ===== */}
                <div className="w-full flex flex-col gap-[64px] mx-auto">

                    <Heading1 headingGray="benefits of" headingWhite="using LEGALclick" />

                    <div className="lg:hidden block">
                        <ServiceSlider2 cards={BenefitCards} />
                    </div>

                    <div className="mx-auto hidden lg:grid grid-cols-4 gap-x-20 gap-y-5">
                        {/*  */}
                        <div className="lg:block hidden"></div>

                        {/* Card 1 */}
                        <Card2 title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                        {/* Card 2 */}
                        <Card2 title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                        {/* Card 3 */}
                        <Card2 title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                        {/* Card 4 */}
                        <Card2 title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                        {/* Card 5 */}
                        <Card2 title="Lorem ipsum dolor sit amet" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                        {/* Card 6 */}
                        <Card2 title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                        <div className="lg:block hidden"></div>

                    </div>

                </div>
                {/* ====== Benefit of usind dataclick ===== */}

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
