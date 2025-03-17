import React from "react";
import Header from "../components/Header";
import { GradientSpan, Text } from "./ui/Text";

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen md:pb-[120px] pb-[50x] flex flex-col items-start justify-start bg-cover bg-center bg-no-repeat lg:px-[100px] md:px-[50px] px-[20px]"
      style={
        {
          // backgroundImage: 'url("/images/image.png")',
        }
      }
    >
      <video
        src="/HomeHeroVideo.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>

      {/* Navbar */}
      <div className="w-full md:pt-[40px]">
        <Header />
      </div>
      {/* Navbar */}

      {/* Hero Content */}
      <div className="flex-1 w-full px-[20px] flex flex-col justify-start items-start  py-[50px] ">
        {/* Hero Content */}
        <div className="relative w-full flex flex-col md:items-start items-center justify-center gap-[80px]">
          <div className="flex flex-col md:justify-start justify-center md:items-start items-center gap-[28px] max-w-[1080px]">
            <h2 className="font-raleway text-[24px]/[23px] md:text-xl lg:text-[40px]/[100%] text-white/60 font-[400] uppercase font-raleway">
              We Provide
            </h2>

            {/* Instant & Automatic Text & Certifications */}
            <div className="flex flex-col gap-[16px] sm:gap-6 lg:gap-8 items-center md:items-start mt-4">
              <div className="flex sm:flex-row flex-col  items-center justify-center lg:justify-start md:gap-6 gap-[16px] sm:gap-4">
                <span className="flex-1  border bg-black border-white text-[#FF9966]  px-[48px] md:px-8 py-[12px] sm:py-3 rounded-full font-[500] text-[24px]/[28px] md:text-xl lg:text-[48px]/[56px] font-raleway">
                  INSTANT
                </span>
                <span className="font-[500] font-raleway text-2xl lg:text-[48px]/[56px] text-white sm:block hidden">
                  &
                </span>
                <span className="flex-1  border bg-black border-white text-white  px-[48px] md:px-8 py-[12px] sm:py-3 rounded-full font-[500] text-[24px]/[28px] md:text-xl lg:text-[48px]/[56px] font-raleway">
                  AUTOMATIC
                </span>
              </div>

              {/* Certifications */}
              <div
                className="flex-1  border border-white text-[#FF9966]  px-[48px] md:px-8 py-[12px] sm:py-3 rounded-full font-[500] text-[24px]/[28px] md:text-xl lg:text-[48px]/[56px] font-raleway"
                style={{
                  background: "rgba(0,0,0,0.3)",
                }}
              >
                CERTIFICATIONS
              </div>
              {/* Instant & Automatic Text & Certifications */}

              {/* Subtext */}
              <p className="font-raleway md:text-start text-center text-[20px]/[23px] font-[400] md:text-lg lg:text-[40px]/[100%] tracking-[5%] text-white/60 uppercase mt-4">
                Of date and location for
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {" "}
                  IMAGES and AUDIO
                </span>{" "}
                through smartphones and other devices.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex sm:flex-row flex-col gap-[24px] sm:gap-4">
            <button className="whitespace-nowrap md:h-[63px] h-[47px] w-[200px] md:w-full flex justify-center items-center cursor-pointer px-[48px] py-[14px] sm:py-3 md:py-[20px] md:px-[100px] border-2 border-white text-black bg-white rounded-full text-[16px]/[18.78px] lg:text-[20px]/[23.48px] font-[700]font-raleway">
              REACH US
            </button>

            <button
              className="button md:h-[63px] h-[47px] w-[200px] md:w-full flex justify-center items-center cursor-pointer px-[48px] py-[14px] sm:py-3 md:py-[20px] md:px-[100px] border-2 border-[#FF9966] text-[#FF9966] rounded-full text-[16px]/[18.78px] lg:text-[20px]/[23.48px] font-[700] font-raleway"
              style={{
                background: "rgba(0,0,0,0.4)",
              }}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
