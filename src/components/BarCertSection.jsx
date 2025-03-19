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
    { image: "/lcimg1.svg", title: "Immediate supply chain verification", description: "Barcode printing & scanning confirm the storage/movement times of goods in warehouses." },
    { image: "/qrCertCard2.svg", title: "Legally valid certification", description: "Ensures that information on a product's storage times has evidentiary value." },
    { image: "/qrCertCard3.svg", title: "Tamper-proof security", description: "Protects supply chain information from alterations." },
    { image: "/lcheck4.svg", title: "Scalable and customizable", description: "Ideal for businesses, government entities, and manufacturers." },
    { image: "/qrCertCard3.svg", title: "Seamless system integration", description: "Compatible with inventory management & supply chain systems." },
];

const BenefitCards = [
    {
        title: "Retail & E-commerce",
        description: "Certification of the storage duration of specific goods in warehouses.",
    },
    {
        title: "Food Industry",
        description: "Certifies the storage duration of food products in warehouses to prevent loss of quality and compliance with food safety standards.",
    },
    {
        title: "Supply Chain and Logistics",
        description: "Ensures that certain products do not remain in warehouses beyond a specified period to prevent degradation of their technical properties.",
    },
    {
        title: "Manufacturing and Production",
        description: "Certifies the duration of goods' storage for quality control and regulatory compliance.",
    },
    {
        title: "Healthcare and Pharmaceuticals",
        description: "Certifies the storage duration of goods for quality control and regulatory compliance.",
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
                style={{ filter: "blur(20px)" }}
            ></video>

            {/* ==== Content wrapper ===== */}
            <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center lg:px-[100px] md:px-[50px] px-[20px]">

                {/* ==== What is BarCertCode ====== */}
                <div className="w-full flex flex-col justify-center items-center gap-[50px]">
                        <Heading1 headingGray="what is" headingWhite="BarCertCode?" />
                        <Text>
                        BarCertCode is a <GradientSpan>certified digital certification</GradientSpan> service for data flows related to the <GradientSpan>printing and scanning of unique barcodes</GradientSpan>, enabling the legal verification of storage duration and various transitions of products within warehouses. This service allows for <GradientSpan>real-time consultation</GradientSpan> of product movements, including entries and exits within warehouses, providing <GradientSpan>legally certified proof</GradientSpan>.
                        </Text>


                    {/* Image Section */}
                    <ImageSec imageUrl="/images/Barcode.jpg" />
                </div>
                {/* ==== What is BarCertCode  ====== */}


                {/* ====== How BarCertCode  works ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <div className="flex flex-col gap-[20px]">
                        <Heading1 headingGray="How" headingWhite="BarCertCode Works" />
                        <Text>
                        <GradientSpan>BarCertCode</GradientSpan> certifies the exact time of printing and individual scans of a unique barcode for each item by <GradientSpan>integrating codes and APIs</GradientSpan> into label printers, printers, and scanners connected to the company's management system. This allows companies and institutions to legally verify the storage times of goods in warehouses or specific departments with certified traceability.
                        </Text>
                    </div>
                </div>
                {/* ====== How BarCertCode  works ======= */}

                {/* ====== Why Choose BarCertCode  ======= */}
                <div className="w-full flex flex-col gap-[64px]">
                    <Heading1 headingGray="Why Choose" headingWhite="BarCertCode?" />

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
                    {/* <Video link="/dataclick.webm" /> */}
                </div>
                {/* ====== Why Choose BarCertCode  ======= */}

                {/* ====== Benefit of using BarCertCode  ===== */}
                <div className="w-full flex flex-col gap-[64px] mx-auto">

                    <Heading1 headingGray="benefits of" headingWhite="using BarCertCode" />

                    <div className="md:hidden block">
                        <ServiceSlider2 cards={BenefitCards} />
                    </div>

                    <div className="mx-auto hidden md:flex flex-wrap gap-[36px] justify-center items-center">
                        {/*  */}
                        {
                            BenefitCards.map((card,index)=> 
                            <Card2 index={index} title={card.title} description={card.description} />
                            )
                        }
                        
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
                                At Tolemaica, we collaborate with leading organizations across
                                industries to provide secure, instant, and legally certified digital
                                solutions. Our trusted partners rely on ourLorem ipsum dolor sit
                                amet consectetur.{" "}
                                <GradientSpan>
                                  IAC (Instant Automatic Certification) technology
                                </GradientSpan>{" "}
                                IAC (Instant Automatic Certification) technology
                              </Text>
                </div>

                <OurPartnersSlider image1="/img1.svg" image2="/img2.svg" image3="/img3.svg" image4="/img4.svg" />

            </div>

            {/* ======= Our Partners ======== */}

        </section>
    );
}

export default QrCertSection;
