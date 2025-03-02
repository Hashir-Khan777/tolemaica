import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card from "./ui/Card";
import CustomBtn from "./ui/CustomeBtn";
import { Link } from "react-router-dom";
import OurPartnersSlider from './ui/PartnersSLider'

function OurPartners() {
  return (
    <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>

      {/* ==== Partners ==== */}
      <div className="shrink-0 relative z-20 mg:mb-[100px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
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

      {/* ==== Content wrapper ===== */}
      <div className="relative mt-10 z-10 flex flex-col justify-center items-center gap-[100px] text-center lg:px-[100px] md:px-[30px] px-[20px]">
        {/* Oval Image section */}
        <div className="w-full shrink-0 flex flex-col justify-center items-center gap-[50px]">
          <div className="w-full flex flex-wrap justify-center md:justify-between gap-10 md:gap-[50px] px-4 md:px-[80px]">
            {[
              { value: "1234+", label: "No of Certifications" },
              { value: "5x", label: "Growth Forecast" },
              { value: "23%", label: "Increase in Business" },
            ].map((item, index) => (
              <p
                key={index}
                className="flex flex-col justify-center items-center gap-[10px] p-[10px] font-outfit text-center"
              >
                <span className="shrink-0 text-[64px] lg:text-[128px]/[161.28px] font-[400] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent tracking--[5%]">
                  {item.value}
                </span>
                <span className="text-white font-[300] text-[20px] md:text-[24px]/[28px] text-center  leading-[5%] capitalize">
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
        <div className="w-full flex flex-col justify-center items-center gap-[50px]">
          <div className="flex flex-col gap-[20px]">
            <Heading1 headingGray="what" headingWhite="we do" />
            <Text>
              All data collected (photographs, videos, sounds, phone calls,
              etc.) from smartphones and other devices undergo,{" "}
              <GradientSpan>automatically and instantaneously</GradientSpan>, a
              certification process giving legal value to the exact moment (date
              and time) and geolocation of when it was captured. The
              certification takes place according to different processes such as
              pec, time-stamping or block chain and returns to the user, or to
              the company back office, a certified copy of the photo or sound
              together with the certificate that summarizes all relevant
              references of the data collected.
            </Text>
          </div>

          {/* Video Section */}
          <div className="w-full h-[300px] md:h-[600px] lg:h-[800px] overflow-hidden border-white border-2 rounded-2xl flex justify-center items-center">
            <video
              src="/video1.mp4"
              loop
              autoPlay
              muted
              className="w-full h-full object-cover overflow-hidden rounded-xl"
            ></video>
          </div>
        </div>
        {/* ==== What we do ====== */}

        {/* ====== Our Software solutions start ======= */}
        <div className="w-full flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[20px]">
            <Heading1 headingGray="Our" headingWhite="software solutions" />
            <Text>
              Lorem ipsum dolor sit amet consectetur.{" "}
              <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
              senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
              velit vestibulum adipiscing.
            </Text>
          </div>

          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-[24px]">
            <Card
              icon="/images/legalClick.png"
              title="LegalClick"
              buttonText="Visit"
              buttonLink="/"
              buttonBorder="#FF9966"
              buttonBg="black"
              buttonTextColor="#FF9966"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />

            <Card
              icon="/images/dataClick.png"
              title="DataClick"
              buttonText="Visit"
              buttonLink="/"
              buttonBorder="#FF9966"
              buttonBg="white"
              buttonTextColor="black"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />
            <div className="w-full flex flex-col md:gap-[36px] gap-[20px]">
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
              buttonText="Visit"
              buttonLink="/"
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
              buttonText="Visit"
              buttonLink="/"
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
              buttonText="Visit"
              buttonLink="/"
              buttonBorder="#FF9966"
              buttonBg="white"
              buttonTextColor="black"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />

            <Card
              icon="/images/legalVideo.png"
              title="legalVideo"
              buttonText="Visit"
              buttonLink="/"
              buttonBorder="#FF9966"
              buttonBg="white"
              buttonTextColor="black"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />

            <Card
              icon="/images/legalSound.png"
              title="LegalSound"
              buttonText="Visit"
              buttonLink="/"
              buttonBorder="white"
              buttonBg="black"
              buttonTextColor="#FF9966"
              playButton="/images/playBtn.png"
              playButtonLink="https://example.com/play"
              // backgroundImage="/images/image.png"
            />
          </div>
        </div>
        {/* ====== Our Software solutions End ======= */}

        {/* ====== Our Patent ===== */}
        <div className="w-full flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[20px]">
            <Heading1 headingGray="Our" headingWhite="patent" />
            <Text>
              Lorem ipsum dolor sit amet consectetur.{" "}
              <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
              senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
              velit vestibulum adipiscing.
            </Text>
          </div>
          <div className="w-full mx-auto flex flex-row justify-center items-center flex-wrap gap-[20px]">
            <img
              src="/ourpatent1.svg"
              alt=""
              className="md:w-[200px] w-[130px] h-[130px] md:h-[200px]"
            />
            <img
              src="/ourpatent2.svg"
              alt=""
              className="[130px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <img
              src="/ourpatent3.svg"
              alt=""
              className="[130px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <img
              src="/ourpatent3.svg"
              alt=""
              className="[130px] h-[130px] md:w-[200px] md:h-[200px]"
            />
          </div>
        </div>
        {/* ====== Our Patent =====  End*/}

        {/* ======= Industry Service ======== */}
        <div className="w-full flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[20px]">
            <Heading1 headingGray="Best" headingWhite="in industry service" />
            <Text>
              The legal certification of an{" "}
              <GradientSpan>image, video, or document</GradientSpan> can
              sometimes be an added value and, in other cases, an essential
              requirement.
            </Text>
          </div>

          {/* My grid */}
          <div className="w-full mx-auto p-4 grid gap-4 grid-cols-1 lg:grid-cols-4 auto-rows-[minmax(120px,_auto)]">
            {/* Territory Monitoring */}
            <div className="col-span-1 row-span-2 lg:row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="flex flex-col justify-center items-center lg:gap-[32px] gap-[20px] p-[20px] bg-white w-full h-full"
              >
                <p className="lg:text-[28px]/[35.28px] text-[22px]/[30.28px]  font-[700] tracking-[5%] text-center font-outfit uppercase">
                  Territory Monitoring
                </p>
                <img
                  src="/serviceimg1.svg"
                  alt=""
                  className="lg:w-[220px] w-[40%] lg:h-[220px] object-cover"
                />
              </Link>
            </div>

            {/* Logistics */}
            <div className="col-span-1 lg:col-span-2 lg:row-span-2 md:row-span-3 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="relative w-full h-full p-[20px"
                style={{
                  background: "linear-gradient(45deg,#fe9865,#faeae1)",
                }}
              >
                <p className="absolute top-5 md:right-6 right-3 lg:text-[28px]/[35.28px] text-[23px]/[30.28px] text-black font-[700] tracking-[5%] text-center font-outfit uppercase">
                  Logistics
                </p>
                <img
                  src="/serviceimg2.svg"
                  alt=""
                  className="absolute bottom-0 left-0  w-[90%] object-cover"
                />
              </Link>
            </div>

            {/* Measurements */}
            <div className="col-span-1 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="w-full h-full p-[20px] flex flex-col justify-center items-center gap-[32px] bg-white "
                style={{
                  background: "linear-gradient(45deg,#60544d,#1f130d)",
                }}
              >
                <p className="pt-[48px] lg:text-[28px]/[35.28px] text-[23px]/[30.28px] text-white font-[700] tracking-[5%] text-center font-outfit uppercase">
                  Measurements
                </p>
                <img
                  src="/serviceimg3.svg"
                  alt=""
                  className="w-[250px] h-[270px] object-cover"
                />
              </Link>
            </div>

            {/* Tailored Services */}
            <div className="col-span-1 lg:col-span-2 row-span-2 flex  rounded-2xl overflow-hidden border-2 border-white ">
              <Link
                to="/"
                className="w-full h-full p-[20px] flex flex-col justify-center items-center"
                style={{
                  background: "linear-gradient(90deg,#42281c,#161211)",
                }}
              >
                <p className="lg:text-[80px]/[105.66px] md:text-[60px]/[70.66px] text-[45px]/[55.66px] font-[700] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent uppercase">
                  tailored Services
                </p>
              </Link>
            </div>

            {/* WIP Control */}
            <div className="col-span-1 row-span-1 flex rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="p-[20px] flex flex-col justify-center items-center bg-white w-full h-full"
                style={{
                  background: "linear-gradient(45deg,#60544d,#1f130d)",
                }}
              >
                <img
                  src="/serviceimg5.svg"
                  alt=""
                  className="w-[250px] h-[250px] object-cover"
                />
                <p className="pb-[48px] lg:text-[28px]/[35.28px] text-[23px]/[30.28px] text-white font-[700] tracking-[5%] text-center font-outfit uppercase">
                  WIP control
                </p>
              </Link>
            </div>

            {/* Commercial Contracts */}
            <div className="col-span-1 row-span-1 flex rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="p-[20px] flex flex-col justify-center items-center bg-[#61132A7A] w-full h-full"
              >
                <img
                  src="/service6.svg"
                  alt=""
                  className="w-[180px] h-[180px] object-cover"
                />
                <p className="text-white lg:text-[28px]/[35.28px] text-[23px]/[30.28px] font-[700] tracking-[5%] text-center font-outfit uppercase">
                  Commercial Contracts
                </p>
              </Link>
            </div>

            {/* Fraud */}
            <div className="col-span-1 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="p-[20px] bg-[#fed5d1] flex flex-col justify-center items-center w-full h-full"
              >
                <img
                  src="/service7.svg"
                  alt=""
                  className="w-[350px] object-cover"
                />
                <p className="text-black lg:text-[28px]/[35.28px] text-[23px]/[30.28px] font-[700] tracking-[5%] text-center font-outfit uppercase">
                  Fraud
                </p>
              </Link>
            </div>

            {/* Theft */}
            <div className="col-span-1 lg:col-span-2 row-span-1 flex  rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="p-[20px] w-full h-full bg-[#ffda90] flex flex-row justify-center items-center"
              >
                <img
                  src="/service8.svg"
                  alt=""
                  className="md:w-[400px] w-[70%] md:h-[200px] h-[100px] object-cover"
                />
                <p className="text-black lg:text-[28px]/[35.28px] text-[23px]/[30.28px] font-[700] tracking-[5%] text-center font-outfit uppercase pe-48px">
                  Theft
                </p>
              </Link>
            </div>

            {/* Insurance Fraud */}
            <div className="col-span-1 row-span-1 flex  rounded-2xl overflow-hidden border-2 border-white">
              <Link
                to="/"
                className="px-[20px] w-full h-full flex flex-row justify-center md:items-stretch items-center"
                style={{
                  background: "linear-gradient(45deg,#7b270b,#670b25)",
                }}
              >
                <img
                  src="/service9.svg"
                  alt=""
                  className="object-cover w-[50%]"
                />
                <p className="p-[20px] text-white md:text-[23px]/[30.28px] text-[18px]/[22.28px] font-[700] tracking-[5%] text-center font-outfit uppercase">
                  insurance fraud
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* ======= Industry Service end ======== */}
      </div>
    </section>
  );
}

export default OurPartners;
