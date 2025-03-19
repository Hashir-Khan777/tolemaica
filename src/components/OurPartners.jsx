import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card from "./ui/Card";
import CustomBtn from "./ui/CustomeBtn";
import { Link } from "react-router-dom";
import OurPartnersSlider from "./ui/PartnersSLider";
import OurPatent from "./OurPatent";
import SliderComponent from "./Slider";
import Video from "./ui/Video";
import ISOCertified from "./ISOCertified";
import HomeGrid from "./ui/HomeGrid";
import Heading2 from "./ui/Heading2";

const cards = [
  {
    icon: "/images/legalClick.png",
    title: "LegalClick",
    buttonText: "Visit",
    buttonLink: "/",
    buttonBorder: "#FF9966",
    buttonBg: "black",
    buttonTextColor: "#FF9966",
    playButton: "/images/playBtn.png",
    playButtonLink: "https://example.com/play",
  },
  {
    icon: "/images/dataClick.png",
    title: "DataClick",
    buttonText: "Visit",
    buttonLink: "/",
    buttonBorder: "#FF9966",
    buttonBg: "white",
    buttonTextColor: "black",
    playButton: "/images/playBtn.png",
    playButtonLink: "https://example.com/play",
  },
  {
    icon: "/images/legalCheck.png",
    title: "LegalCheck",
    buttonText: "Visit",
    buttonLink: "/",
    buttonBorder: "white",
    buttonBg: "black",
    buttonTextColor: "#FF9966",
    playButton: "/images/playBtn.png",
    playButtonLink: "https://example.com/play",
  },
  {
    icon: "/images/qr-certcode.png",
    title: "QrCertCode",
    buttonText: "Visit",
    buttonLink: "/",
    buttonBorder: "white",
    buttonBg: "black",
    buttonTextColor: "#FF9966",
    playButton: "/images/playBtn.png",
    playButtonLink: "https://example.com/play",
  },
  {
    icon: "/images/bar-certcode.png",
    title: "BarCertCode",
    buttonText: "Visit",
    buttonLink: "/",
    buttonBorder: "#FF9966",
    buttonBg: "white",
    buttonTextColor: "black",
    playButton: "/images/playBtn.png",
    playButtonLink: "https://example.com/play",
  },
  {
    icon: "/images/legalVideo.png",
    title: "LegalVideo",
    buttonText: "Visit",
    buttonLink: "/",
    buttonBorder: "#FF9966",
    buttonBg: "white",
    buttonTextColor: "black",
    playButton: "/images/playBtn.png",
    playButtonLink: "https://example.com/play",
  },
  {
    icon: "/images/legalSound.png",
    title: "LegalSound",
    buttonText: "Visit",
    buttonLink: "/",
    buttonBorder: "white",
    buttonBg: "black",
    buttonTextColor: "#FF9966",
    playButton: "/images/playBtn.png",
    playButtonLink: "https://example.com/play",
  },
];

function OurPartners() {
  return (
    <section className="relative overflow-hidden w-full bg-black py-[100px] flex flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>

      {/* ==== Partners ==== */}
      <div className="shrink-0 relative z-20 md:mb-[100px] mb-[40px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
        <div className="flex flex-col gap-[20px]">
          <Heading1 headingGray="Our" headingWhite="Partners" />
          <Text>
            Lorem ipsum dolor sit amet consectetur.{" "}
            <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
            senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
            velit vestibulum adipiscing.
          </Text>
        </div>

        <OurPartnersSlider
          image1="/img1.svg"
          image2="/img2.svg"
          image3="/img3.svg"
          image4="/img4.svg"
        />
      </div>

      {/* ==== Content wrapper ===== */}
      <div className="relative mt-10 z-10 flex flex-col justify-center items-center gap-[100px] text-center lg:px-[100px] md:px-[30px] px-[20px]">
        {/* Statistics section */}
        <div className="w-full shrink-0 flex flex-col justify-center items-center gap-[50px]">
          <div className="w-full flex justify-center md:justify-between gap-10 md:gap-[50px]">
            {[
              { value: "1234", operator: "+", label: "No of Certifications" },
              { value: "5", operator: "x", label: "Growth Forecast" },
              { value: "23", operator: "%", label: "Increase in Business" },
            ].map((item, index) => (
              <p
                key={index}
                className="flex flex-col justify-center items-center gap-[10px] p-[10px] font-outfit text-center"
              >
                <p className="shrink-0 font-outfit text-[40px]/[50px] lg:text-[128px]/[100%] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent tracking-[5%] flex flex-row">
                  <span className="font-[400]">{item.value}</span>{" "}
                  <span className="font-[200]">{item.operator}</span>
                </p>
                <span className="font-outfit text-white font-[300] text-[14px]/[17px] md:text-[24px]/[28px] text-center tracking-[5%] capitalize">
                  {item.label}
                </span>
              </p>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <img src="/oval.svg" alt="" className="w-[80%] max-w-[800px]" />
          </div>
        </div>

        {/* ==== What we do ====== */}
        <div className="w-full flex flex-col justify-center items-center md:gap-[64px] gap-[40px]">
          <Heading1 headingGray="what" headingWhite="we do" />
          <Text>
            All data collected (photographs, videos, sounds, phone calls, etc.)
            from smartphones and other devices undergo,{" "}
            <GradientSpan>automatically and instantaneously</GradientSpan>, a
            certification process giving legal value to the exact moment (date
            and time) and geolocation of when it was captured. The certification
            takes place according to different processes such as pec,
            time-stamping or block chain and returns to the user, or to the
            company back office, a certified copy of the photo or sound together
            with the certificate that summarizes all relevant references of the
            data collected.
          </Text>

          <Video link="/video1.mp4" />
        </div>
        {/* ==== What we do ====== */}

        {/* ===== ABout IAC Technology ======= */}
        <div className="w-full flex flex-col justify-center items-center md:gap-[64px] gap-[40px]">
          <Heading1 headingGray="about" headingWhite="iac technology" />

          <Text>
            IAC (Instant Automatic Certification) is a patented technology that
            provides <span className="text-white font-[500]">instant,</span>{" "}
            <GradientSpan>
              automated certification of the date, time, and location of data
              captured by
            </GradientSpan>{" "}
            <span className="text-[#FF9966] font-[500]">
              smartphones or other devices.
            </span>{" "}
            The certified data is securely stored on a Notified Body's server,
            which promptly issues a verification report to the user.
          </Text>

          <Link
            to="/iac-tech"
            className="uppercase text-white w-[200px] md:w-[330px] md:px-[100px] px-[48px] md:py-[20px] py-[14px] rounded-full border-[2px] border-white font-raleway font-[700] text-[16px]/[100%]  md:text-[20px]/[100%] tracking-[5%]"
          >
            check now
          </Link>
        </div>
        {/* ===== ABout IAC Technology ======= */}

        {/* ====== Our Software solutions start ======= */}
        <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
          <Heading1 headingGray="Our" headingWhite="software solutions" />

          <Text>
            Lorem ipsum dolor sit amet consectetur.{" "}
            <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
            senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
            velit vestibulum adipiscing.
          </Text>

          <div className="w-full hidden md:grid md:grid-cols-2 grid-cols-1 gap-[24px]">
            <Card
              icon="/images/legalClick.png"
              title="LegalClick"
              buttonText="Visit site"
              buttonLink="/services/legal-click"
              buttonBorder="white"
              buttonBg="black"
              buttonTextColor="#FF9966"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />

            <Card
              icon="/images/dataClick.png"
              title="DataClick"
              buttonText="Visit site"
              buttonLink="/services/data-click"
              buttonBorder="#FF9966"
              buttonBg="white"
              buttonTextColor="black"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />
            <div className="w-full flex flex-col md:gap-[36px] gap-[20px] justify-center">
              <CustomBtn
                text="Best In Market"
                borderColor="white"
                bgColor="black"
                textColor="#FF9966"
                fontSize="22px"
                lgFontSize="48px"
              />
              <CustomBtn
                text="Industry Leading"
                borderColor="white"
                bgColor="#641A15"
                textColor="white"
                fontSize="22px"
                lgFontSize="48px"
              />
              <CustomBtn
                text="SOlutions"
                borderColor="white"
                bgColor="black"
                textColor="#FF9966"
                fontSize="22px"
                lgFontSize="48px"
              />
            </div>
            <Card
              icon="/images/legalCheck.png"
              title="legalcheck"
              buttonText="Visit site"
              buttonLink="/services/legal-check"
              buttonBorder="white"
              buttonBg="black"
              buttonTextColor="#FF9966"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />

            <Card
              icon="/images/qr-certcode.png"
              title="QrCertCode"
              buttonText="Visit site"
              buttonLink="/services/QrCertCode"
              buttonBorder="white"
              buttonBg="black"
              buttonTextColor="#FF9966"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />

            <Card
              icon="/images/bar-certcode.png"
              title="BarCertCode"
              buttonText="Visit site"
              buttonLink="/services/BarCertCode"
              buttonBorder="#FF9966"
              buttonBg="white"
              buttonTextColor="black"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />
          </div>

          <div className="w-full block md:hidden">
            <SliderComponent cards={cards} />
          </div>
        </div>

        {/* ====== Our Software solutions End ======= */}

        {/* Our Patent */}
        <OurPatent />

        {/* ======= Industry Service ======== */}
        <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
          <Heading2
            headingWhite1="Best"
            headingGray="in industry"
            headingWhite2="service"
          />
          <Text>
            The legal certification of an{" "}
            <GradientSpan>image, video, or document</GradientSpan> can sometimes
            be an added value and, in other cases, an essential requirement.
          </Text>

          <HomeGrid />
        </div>
        {/* ======= Industry Service end ======== */}

        {/* ISO Certified */}
        <ISOCertified />
      </div>
      {/* container ends */}
    </section>
  );
}

export default OurPartners;
