import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card4 from "./ui/Card4";
import OurPartnersSlider from "./ui/PartnersSLider";
import ServiceSlider1 from "./ui/ServiceSLider1";
import ServiceSlider2 from "./ui/ServiceSLider2";
import Video from "./ui/Video";
import IsoCertified from "./ISOCertified";
import ImageSec from "./ui/ImageSec";

const cardsData = [
  {
    image: "/qrcert1.png",
    title: "Immediate supply chain verification",
    description:
      "Barcode printing & scanning confirm the storage/movement times of goods in warehouses.",
    gradientColors: ["#140902", "#4e2c1c"],
  },
  {
    image: "/dataclick1.png",
    title: "Legally valid certification",
    description:
      "Ensures that information on a product's storage times has evidentiary value.",
    gradientColors: ["#360e12", "#180808"],
  },
  {
    image: "/legalclick5.png",
    title: "Tamper-proof security",
    description: "Protects supply chain information from alterations.",
    gradientColors: ["#5c5b5a", "070402"],
  },
  {
    image: "/legalcheck5.png",
    title: "Scalable and customizable",
    description:
      "Ideal for businesses, government entities, and manufacturers.",
    gradientColors: ["#240a12", "#3f3131"],
  },
  {
    image: "/legalcheck2.png",
    title: "Seamless system integration",
    description: "Compatible with inventory management & supply chain systems.",
    gradientColors: ["#240a12", "#3f3131"],
  },
];

const gradients = [
  "linear-gradient(145deg, #171515, #271519)",
  "linear-gradient(145deg, #0a0604, #433f3e)",
  "linear-gradient(145deg, #281e19, #593c2d)",
  "linear-gradient(145deg, #1a1a1a, #505050)",
  "linear-gradient(145deg, #060505, #060505)",
  "linear-gradient(145deg, #171616, #29151a)",
];

const BenefitCards = [
  {
    title: "Retail & E-commerce",
    description:
      "Certification of the storage duration of specific goods in warehouses.",
    bg: gradients[0],
  },
  {
    title: "Food Industry",
    description:
      "Certifies the storage duration of food products in warehouses to prevent loss of quality and compliance with food safety standards.",
    bg: gradients[1],
  },
  {
    title: "Supply Chain and Logistics",
    description:
      "Ensures that certain products do not remain in warehouses beyond a specified period to prevent degradation of their technical properties.",
    bg: gradients[2],
  },
  {
    title: "Manufacturing and Production",
    description:
      "Certifies the duration of goods' storage for quality control and regulatory compliance.",
    bg: gradients[3],
  },
  {
    title: "Healthcare and Pharmaceuticals",
    description:
      "Certifies the storage duration of goods for quality control and regulatory compliance.",
    bg: gradients[4],
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
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      <div className="mx-auto w-full max-w-[1280px]">
        {/* ==== Content wrapper ===== */}
        <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center">
          {/* ==== What is BarCertCode ====== */}
          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <Heading1 headingGray="what is" headingWhite="BarCertCode?" />
            <Text>
              BarCertCode is a{" "}
              <GradientSpan>certified digital certification</GradientSpan>{" "}
              service for data flows related to the{" "}
              <GradientSpan>
                printing and scanning of unique barcodes
              </GradientSpan>
              , enabling the legal verification of storage duration and various
              transitions of products within warehouses. This service allows for{" "}
              <GradientSpan>real-time consultation</GradientSpan> of product
              movements, including entries and exits within warehouses,
              providing <GradientSpan>legally certified proof</GradientSpan>.
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
                <GradientSpan>BarCertCode</GradientSpan> certifies the exact
                time of printing and individual scans of a unique barcode for
                each item by{" "}
                <GradientSpan>integrating codes and APIs</GradientSpan> into
                label printers, printers, and scanners connected to the
                company's management system. This allows companies and
                institutions to legally verify the storage times of goods in
                warehouses or specific departments with certified traceability.
              </Text>
            </div>
          </div>
          {/* ====== How BarCertCode  works ======= */}

          {/* ====== Why Choose BarCertCode  ======= */}
          <div className="w-full flex flex-col gap-[64px]">
            <Heading1 headingGray="Why Choose" headingWhite="BarCertCode?" />

            {/* ==== Cards ==== */}
            <div className="w-full ">
              <div className="flex flex-col justify-content-center items-center gap-[36px]">
                <div className="hidden lg:flex flex-row flex-wrap justify-center items-center gap-[24px]">
                  {/* {cardsData.map((card, index) => (
                                <Card3 key={index} {...card} />
                            ))} */}
                  <Card4
                    description={cardsData[0].description}
                    image={cardsData[0].image}
                    gradientColors={cardsData[0].gradientColors}
                    title={cardsData[0].title}
                  />
                  <Card4
                    description={cardsData[1].description}
                    image={cardsData[1].image}
                    gradientColors={cardsData[1].gradientColors}
                    title={cardsData[1].title}
                  />
                  <Card4
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
                  <Card4
                    description={cardsData[3].description}
                    image={cardsData[3].image}
                    gradientColors={cardsData[3].gradientColors}
                    title={cardsData[3].title}
                  />
                  <Card4
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
          {/* ====== Why Choose BarCertCode  ======= */}

          {/* ====== Benefit of using BarCertCode  ===== */}
          {/* ====== Benefit of using QrCertCode ===== */}
          <div className="w-full flex flex-col gap-[64px] mx-auto">
            <Heading1
              headingGray="benefits of"
              headingWhite="using QRCERTCODE"
            />

            <div className="lg:hidden block">
              <ServiceSlider2 cards={BenefitCards} />
            </div>

            <div className="mx-auto hidden lg:grid grid-cols-4 gap-[36px]">
              {/*  */}
              <div className="lg:block hidden"></div>

              {/* Card 1 */}
              <Card2
                title="Government & Public Sector "
                description="Secure, timestamped documentation for official records."
                bg={gradients[0]}
              />

              {/* Card 2 */}
              <Card2
                title="Legal & Compliance Departments"
                description="Automated document verification with OCR and certification logs."
                bg={gradients[1]}
              />

              {/* Card 3 */}
              <Card2
                title="Corporate Auditing & Internal Control"
                description="Maintain compliance and certify key operational records."
                bg={gradients[2]}
              />

              {/* Card 4 */}
              <Card2
                title="Supply Chain & Logistics"
                description="Certify packaging, storage, and transit documentation."
                bg={gradients[3]}
              />

              {/* Card 5 */}
              <Card2
                title="Insurance & Claims Processing"
                description="Authenticate evidence for claims and prevent fraud."
                bg={gradients[4]}
              />

              {/* Card 6 */}
              <Card2
                title="Infrastructure & Engineering Projects"
                description="Document construction progress with certified images."
                bg={gradients[5]}
              />

              <div className="lg:block hidden"></div>
            </div>
          </div>
          {/* ====== Benefit of usind QrCertCode ===== */}
          {/* ====== Benefit of usind QrCertCode ===== */}

          {/* IsoCertified */}
          <IsoCertified />
        </div>

        {/* ==== Partners ==== */}
        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
          <OurPartnersSlider
            image1="/img1.svg"
            image2="/img2.svg"
            image3="/img3.svg"
            image4="/img4.svg"
          />
        </div>

        {/* ======= Our Partners ======== */}
      </div>
    </section>
  );
}

export default QrCertSection;
