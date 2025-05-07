import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import OurPartnersSlider from "./ui/PartnersSLider";
import ISOCertified from "./ISOCertified";
import ImageSec from "./ui/ImageSec";
import OurPatent from "./OurPatent";
import IACSlider from "./ui/iacSlider";

function IACWorks() {
  const [iacData, setIacData] = useState({
    heading: "",
    colored_heading: "",
    text: "",
    colored_text: "",
    second_text: "",
    image_url: "",
    paragraphs: [],
  });

  useEffect(() => {
    
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/iacwork?populate=*`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const iacResponse = data.data;

        setIacData({
          light_heading: iacResponse.heading.light_heading,
          dark_heading: iacResponse.heading.dark_heading,
           
          paragraphs: iacResponse.paragraph, // Store all paragraphs
          image_url: iacResponse.image?.url, // Get the background video URL
        });
      })
      .catch((err) => {
        console.error("Error fetching IAC works data:", err);
      });
  }, []);
  return (
    <section className="relative overflow-hidden w-full bg-black pt-[100px] pb-[200px] flex  flex-col md:gap-[100px] gap-[40px]">
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

      {/* Colored blob with blur effect to match Figma design */}
      <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] rounded-[50%] bg-[#61132A]/40 blur-[300px] mix-blend-overlay z-2"></div>
      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] rounded-[50%] bg-[#C84A01]/24 blur-[300px] z-1"></div>

      {/* Additional subtle vignette for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 z-1"></div>

      <div className="mx-auto w-full max-w-[1280px]">
        {/* ==== Content wrapper ===== */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-[40px] md:gap-[100px] text-center lg:px-[100px] md:px-[30px] px-[20px]">
          {/* ==== How IAC Works ==== */}
          <div className="shrink-0 relative w-full z-10 flex flex-col justify-center items-center md:gap-[64px] gap-[40px] text-center">
            <Heading1 headingGray={iacData.light_heading} headingWhite={iacData.dark_heading} />
           {/*  <Text>
              <GradientSpan>IAC (Instant Automatic Certification)</GradientSpan>{" "}
              technology is the internationally patented solution for date and
              location legal certification of data captured by smartphones or
              other devices. The process is an{" "}
              <GradientSpan>
                automatic and instantaneous way of storing data
              </GradientSpan>{" "}
              in a server held by a Notified Body that returns a report to the
              user summarizing date, time and location references of the given
              data (image/sound).
            </Text> */}
            <Text>
            {iacData.paragraphs[0]?.text} <GradientSpan>{iacData.paragraphs[0]?.colored_text}</GradientSpan> (sound and images)
            {iacData.paragraphs[0]?.second_text}
            </Text>
            <ImageSec imageUrl={iacData.image_url}  />

            <Text>
            {iacData.paragraphs[1]?.text} <GradientSpan>{iacData.paragraphs[1]?.colored_text}</GradientSpan> (sound and images)
            {iacData.paragraphs[1]?.second_text}
            </Text>

            <Text>
            {iacData.paragraphs[2]?.text} <GradientSpan>{iacData.paragraphs[2]?.colored_text}</GradientSpan> (sound and images)
            {iacData.paragraphs[2]?.second_text}
            </Text>
          </div>

          {/* === ADVANTAGES OF USING IAC TECHNOLOGY === */}
          <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
            <h1 className="md:block hidden font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">
              ADVANTAGES OF USING <span className="text-white">IAC</span>{" "}
              TECHNOLOGY
            </h1>

            <div className="md:grid hidden xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-[50px] gap-y-[64px] max-w-[1280px] mx-auto">
              <div className="w-[350px] h-[350px] md:h-[428px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#3e2516] to-[#371b1b] px-[24px] py-[32px]">
                <div className="px-[32px] py-[12px] w-full flex flex-col gap-[16px] ">
                  <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                    Instant Legal Certification
                  </h1>
                  <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">
                    Obtain legally certified documents instantly with real-time
                    verification, ensuring compliance with international
                    standards.
                  </p>
                </div>
              </div>

              <div className="w-[350px] h-[350px] md:h-[428px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#261911] to-[#444241] px-[24px] py-[32px]">
                <div className="px-[32px] py-[12px] w-full flex flex-col gap-[16px] ">
                  <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                    Post-Quantum Encryption & Blockchain Security
                  </h1>
                  <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">
                    Data certification and verification processes use
                    post-quantum encryption, and every certified data entry can
                    be securely stored via blockchain technology, preventing
                    fraud, forgery, or unauthorized modifications.
                  </p>
                </div>
              </div>

              <div className="w-[350px] h-[350px] md:h-[428px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#1e1b19] to-[#4c3428] px-[24px] py-[32px]">
                <div className="px-[32px] py-[12px] w-full flex flex-col gap-[16px] ">
                  <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                    Globally Recognized Standards
                  </h1>
                  <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">
                    LegalClick meets the highest international compliance
                    requirements, including ISO 27001, GDPR, eIDAS, and eIDAS2
                    regulations.
                  </p>
                </div>
              </div>

              <div className="w-[350px] h-[350px] md:h-[428px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#2a211b] to-[#4e4d4b] px-[24px] py-[32px]">
                <div className="px-[32px] py-[12px] w-full flex flex-col gap-[16px] ">
                  <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                    Seamless Digital Integration
                  </h1>
                  <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">
                    Easily integrates with existing corporate systems, legal
                    platforms, and cloud storage for efficient workflows through
                    APIs, Libraries, Web Services, and AI-driven data processing
                    & reporting modules.
                  </p>
                </div>
              </div>

              <div className="w-[350px] h-[350px] md:h-[428px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#0b0706] to-[#0b0706] px-[24px] py-[32px]">
                <div className="px-[32px] py-[12px] w-full flex flex-col gap-[16px] ">
                  <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                    Intuitive Mobile & Web Interface
                  </h1>
                  <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">
                    Accessible via web and mobile applications, ensuring a
                    user-friendly experience for businesses, individuals, and
                    public administrations.
                  </p>
                </div>
              </div>

              <div className="w-[350px] h-[350px] md:h-[428px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#181617] to-[#321f25] px-[24px] py-[32px]">
                <div className="px-[32px] py-[12px] w-full flex flex-col gap-[16px] ">
                  <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                    Verified & Secure Document Storage
                  </h1>
                  <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">
                    Ensures authenticity and long-term accessibility of
                    certified data with encrypted and secure cloud storage.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:hidden block">
              <IACSlider />
            </div>
          </div>

          {/* ====== Our Patent ===== */}
          <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
            <OurPatent />
          </div>
          {/* ====== Our Patent =====  End*/}
        </div>
        {/* ==== Content wrapper ===== */}

        {/* ==== Partners ==== */}
        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px] text-center px-[20px]">
          <OurPartnersSlider
            image1="/img1.svg"
            image2="/img2.svg"
            image3="/img3.svg"
            image4="/img4.svg"
          />
        </div>

        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px] text-center px-[20px]">
          <ISOCertified />
        </div>
      </div>
    </section>
  );
}

export default IACWorks;
