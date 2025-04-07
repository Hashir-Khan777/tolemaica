import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import { Link } from "react-router-dom";
import OurPartnersSlider from "./ui/PartnersSLider";
import ServiceSlider1 from "./ui/ServiceSLider1";
import ServiceSlider2 from "./ui/ServiceSLider2";
import Video from "./ui/Video";
import Heading2 from "./ui/Heading2";
import ISOCertified from "./ISOCertified";
import ImageSec from "./ui/ImageSec";

const cardsData = [
  {
    image: "/dataclick1.png",
    title: "Instant & Automatic Certification",
    description: "Certifies date and location of images.",
    gradientColors: ["#140902", "#4e2c1c"],
  },
  {
    image: "/dataclick2.png",
    title: "Multi-Device Accessibility",
    description: "Use via PC or smartphone.",
    gradientColors: ["#360e12", "#180808"],
  },
  {
    image: "/dataclick3.png",
    title: "Simple & Cost Effective",
    description: "Use via PC or smartphone.",
    gradientColors: ["#5c5b5a", "070402"],
  },
  {
    image: "/dataclick4.png",
    title: "Secure & Legally Valid",
    description: "Provides legally recognized proof of authenticity.",
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
    title: "Infrastructure Monitoring",
    description: "Certify structural conditions with timestamped images.",
    bg: gradients[0],
  },
  {
    title: "Legal Disputes & Professional Activities",
    description: "Provide court-admissible proof.",
    bg: gradients[1],
  },
  {
    title: "Consumption Measurement",
    description: "Capture utility or resource consumption.",
    bg: gradients[2],
  },
  {
    title: "Point of Sale Control",
    description: "Document store conditions and activities.",
    bg: gradients[3],
  },
  {
    title: "Insurance Claims",
    description: "Secure photographic evidence for claims.",
    bg: gradients[4],
  },
  {
    title: "Packaging & Storage Inspection",
    description: "Certify conditions before shipment or storage.",
    bg: gradients[5],
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
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      <div className="mx-auto w-full max-w-[1280px]">
        {/* ==== Content wrapper ===== */}
        <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center">
          {/* ==== What is DataClick ====== */}
          <div className="w-full flex flex-col justify-center items-center md:gap-[64px] gap-[40px]">
            <Heading1 headingGray="what is" headingWhite="dataclick?" />
            <Text>
              DataClick provides a data{" "}
              <GradientSpan>
                certification service with legal value
              </GradientSpan>{" "}
              for photos taken by professionals, businesses, and public
              administrations. The service is{" "}
              <GradientSpan>simple, fast, and cost-effective</GradientSpan>,
              allowing users to upload images and receive a{" "}
              <GradientSpan className="text-white">
                probative element
              </GradientSpan>{" "}
              that holds <GradientSpan>legal validity</GradientSpan>.
            </Text>

            {/* Image Section */}
            <ImageSec imageUrl="/images/Dataclick.jpg" />
          </div>
          {/* ==== What is DataClick ====== */}

          {/* ====== How dataclick works ======= */}
          <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
            <Heading1 headingGray="How" headingWhite="Dataclick works?" />
            <Text>
              Using{" "}
              <GradientSpan>
                <Link to="/" className="underline">
                  www.dataclick.it
                </Link>{" "}
              </GradientSpan>{" "}
              or the <GradientSpan>free DataClick App</GradientSpan> for iPhone
              and Android, users can securely certify images, ensuring that they
              are stored with a legally valid timestamp. This creates a{" "}
              <GradientSpan>
                valuable personal and corporate archive
              </GradientSpan>{" "}
              that is always accessible for individual searches or back-office
              corporate operations.
            </Text>
          </div>
          {/* ====== How dataclick works ======= */}

          {/* ====== Why Choose DataClick ======= */}
          <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
            <Heading1 headingGray="Why Choose" headingWhite="dataclick?" />

            {/* ==== Cards ==== */}
            <div className="w-full ">
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[100px] place-items-center">
                {cardsData.map((card, index) => (
                  <Card3 key={index} {...card} />
                ))}
              </div>

              <div className="flex md:hidden">
                <ServiceSlider1 cards={cardsData} />
              </div>
            </div>
            {/* ==== Cards ==== */}

            {/* <Video link="/dataclick.webm" /> */}
          </div>

          {/* ====== Why Choose DataClick ======= */}

          {/* ====== Benefit of usind dataclick ===== */}
          <div className="w-full flex flex-col gap-[64px] mx-auto">
            <Heading2
              headingWhite1="benefits"
              headingGray="of using"
              headingWhite2="dataclick"
            />

            <div className="lg:hidden block">
              <ServiceSlider2 cards={BenefitCards} />
            </div>

            <div className="mx-auto hidden lg:grid grid-cols-4 gap-[36px]">
              {/*  */}
              <div className="lg:block hidden"></div>

              {/* Card 1 */}
              <Card2
                title="Infrastructure Monitoring"
                description=" Certify structural conditions with timestamped images."
                bg={gradients[0]}
              />

              {/* Card 2 */}
              <Card2
                title="Legal Disputes & Professional Activities"
                description="Provide court-admissible proof."
                bg={gradients[1]}
              />

              {/* Card 3 */}
              <Card2
                title="Consumption Measurement"
                description="Capture utility or resource consumption."
                bg={gradients[2]}
              />

              {/* Card 4 */}
              <Card2
                title=" Point of Sale Control"
                description="Document store conditions and activities."
                bg={gradients[3]}
              />

              {/* Card 5 */}
              <Card2
                title="Insurance Claims"
                description=" Secure photographic evidence for claims."
                bg={gradients[4]}
              />

              {/* Card 6 */}
              <Card2
                title="Packaging & Storage Inspection"
                description="Certify conditions before shipment or storage."
                bg={gradients[5]}
              />

              <div className="lg:block hidden"></div>
            </div>
          </div>
          {/* ====== Benefit of usind dataclick ===== */}
        </div>

        {/* ==== Partners ==== */}
        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px]  text-center px-[20px]">
          <OurPartnersSlider
            image1="/img1.svg"
            image2="/img2.svg"
            image3="/img3.svg"
            image4="/img4.svg"
          />
        </div>

        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px]  text-center px-[20px]">
          <ISOCertified />
        </div>

        {/* ======= Our Partners ======== */}
      </div>
    </section>
  );
}

export default DataClickSecton;
