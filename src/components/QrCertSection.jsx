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
    title: "Instant Document Verification",
    description:
      "Scan the QR code to confirm analog document authenticity and completeness.",
    gradientColors: ["#140902", "#4e2c1c"],
  },
  {
    image: "/dataclick1.png",
    title: "Legally Valid Certification",
    description: "Ensures documents maintain evidentiary value.",
    gradientColors: ["#360e12", "#180808"],
  },
  {
    image: "/qrcert3.png",
    title: "Tamper Proof Security",
    description: "Protects against unauthorized modifications.",
    gradientColors: ["#5c5b5a", "070402"],
  },
  {
    image: "/legalcheck5.png",
    title: "Scalable & Customizable",
    description:
      "Ideal for businesses, government institutions, and individuals.",
    gradientColors: ["#240a12", "#3f3131"],
  },
  {
    image: "/legalcheck2.png",
    title: "Seamless Integrations",
    description: "Can be integrated into document management systems.",
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
    title: "Legal & Compliance",
    description: "Secure contracts, agreements, and legal records.",
    bg: gradients[0],
  },
  {
    title: "Government & Public Administration",
    description: "Authenticate official documents.",
    bg: gradients[1],
  },
  {
    title: "Educational Institutions",
    description: "Certify diplomas, transcripts, and certifications.",
    bg: gradients[2],
  },
  {
    title: "Healthcare & Medical Records",
    description: " Secure patient data and prescriptions.",
    bg: gradients[3],
  },
  {
    title: "Financial & Banking Sector",
    description: "Validate reports, statements, and sensitive data.",
    bg: gradients[4],
  },
  {
    title: "Supply Chain & Logistics",
    description: "Ensure authenticity of invoices and shipping documents.",
    bg: gradients[5],
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
          {/* ==== What is QrCertCode ====== */}
          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <Heading1 headingGray="what is" headingWhite="QrCertCode?" />
            <Text>
              QrCertCode is a{" "}
              <GradientSpan>digital certification service</GradientSpan> that
              generates{" "}
              <GradientSpan>unique certificated QR codes</GradientSpan> (no
              simple QrCode) to verify the authenticity of documents. It ensures
              that documents are{" "}
              <GradientSpan>tamper-proof and legally verifiable</GradientSpan>,
              offering a seamless way to confirm their integrity and
              completeness.
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
                With <GradientSpan>QrCertCode</GradientSpan>, each document is
                assigned a <GradientSpan>unique QR code</GradientSpan> that can
                be scanned to instantly verify its authenticity. This allows
                businesses, institutions, and individuals to securely store and
                validate documents.
              </Text>
            </div>
          </div>
          {/* ====== How QrCertCode works ======= */}

          {/* ====== Why Choose QrCertCode ======= */}
          <div className="w-full flex flex-col gap-[64px]">
            <Heading1 headingGray="Why Choose" headingWhite="QRCERTCODE?" />

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
          {/* ====== Why Choose QrCertCode ======= */}

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
                title="Legal & Compliance"
                description="Secure contracts, agreements, and legal records."
                bg={gradients[0]}
              />

              {/* Card 2 */}
              <Card2
                title="Government & Public Administration"
                description=" Automated document verification with OCR and certification logs.Authenticate official documents."
                bg={gradients[1]}
              />

              {/* Card 3 */}
              <Card2
                title="Educational Institutions"
                description="Certify diplomas, transcripts, and certifications."
                bg={gradients[2]}
              />

              {/* Card 4 */}
              <Card2
                title="Healthcare & Medical Records"
                description="Secure patient data and prescriptions."
                bg={gradients[3]}
              />

              {/* Card 5 */}
              <Card2
                title="Financial & Banking Sector"
                description="Validate reports, statements, and sensitive data."
                bg={gradients[4]}
              />

              {/* Card 6 */}
              <Card2
                title="Supply Chain & Logistics"
                description="Ensure authenticity of invoices and shipping documents."
                bg={gradients[5]}
              />

              <div className="lg:block hidden"></div>
            </div>
          </div>
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
