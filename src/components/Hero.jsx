import React from "react";
import Header from "../components/Header"

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen py-5 flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/image.png")',
      }}
    >
      {/* Navbar */}
      <Header />
      {/* Navbar */}

{/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-12 md:px-20 lg:px-[50px] py-[50px]">
        {/* Hero Content */}
        <div className="relative w-full lg:w-[70%] px-4 sm:px-6 flex flex-col md:items-start items-center justify-center">
          <h2 className="font-raleway text-base sm:text-lg md:text-xl lg:text-4xl text-gray-400 font-medium uppercase">
            We Provide
          </h2>

          {/* Instant & Automatic Text & Certifications */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center md:items-start mt-4">
            <div className="flex flex-row  items-center justify-center lg:justify-start gap-2 sm:gap-4">
              <span className="flex-1 w-[40%] border bg-black border-white text-[#FF9966]  px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-lg md:text-xl lg:text-4xl">
                INSTANT
              </span>
              <span className="font-medium text-sm sm:text-lg md:text-xl lg:text-4xl text-white">&</span>
              <span className="flex-1 border border-white text-white px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-lg md:text-xl lg:text-4xl">
                AUTOMATIC
              </span>
            </div>

            {/* Certifications */}
            <div className="border bg-black border-[#FF9966] text-white px-[50px] sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-lg md:text-xl lg:text-4xl">
              CERTIFICATIONS
            </div>
          </div>
          {/* Instant & Automatic Text & Certifications */}

          {/* Subtext */}
          <p className="font-raleway text-sm md:text-start text-center sm:text-base md:text-lg lg:text-2xl text-gray-400 font-medium uppercase mt-4">
            Of date and location for {" "}
            <span className="text-[#FF9966]">IMAGES and AUDIO</span> through
            smartphones and other devices.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-3 sm:gap-4">
            <button className="cursor-pointer px-[30px] sm:px-8 md:px-[100px] lg:px-[100px] py-2 sm:py-3 lg:py-[20px] bg-white text-black rounded-full text-sm sm:text-lg lg:text-[20px]/[23.48px] font-[700]">
              REACH US
            </button>
            <button className="cursor-pointer px-[20px] md:px-[100px] lg:px-[100px] py-2 sm:py-3 lg:py-[20px] border-2 border-[#FF9966] text-[#FF9966] rounded-full text-sm sm:text-lg lg:text-[20px]/[23.48px] font-[700]"
            style={{
              background:"rgba(0,0,0,0.4)"
            }}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
