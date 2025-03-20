import React, { useState } from "react";
import Header from "../components/Header";
import { GradientSpan, Text } from "./ui/Text";
import ContactUsModal from "./ui/ContactUsModal";
import RegisterModal from "./ui/RegisterModal";



function Hero() {
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const scrollToFooter = () => {
    // If on a different page, first navigate to the page with the footer
    if (!window.location.pathname.includes('/')) {
      navigate('/'); // Navigate to home or page with footer
      
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const footer = document.getElementById('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      // If already on the right page, just scroll
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-start justify-start bg-cover bg-center bg-no-repeat lg:px-[100px] md:px-[50px] px-[20px]">
      <video
        src="/HomeHeroVideo.mp4"
        autoPlay
        loop
        muted
        className="absolute  inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>
      {/* Navbar */}
      <div className="w-full md:pt-[40px]">
        <Header />
      </div>

      <div className="mx-auto flex flex-1 justify-center items-center">
        <div
          className="z-10 w-[100%] max-w-[1200px] md:h-[620px] h-[587px] border-[2px] border-white/64 rounded-[24px] backdrop-blur-[16px] flex flex-col justify-center items-center text-center py-[100px] px-[24px]"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <div className="flex flex-col justify-center items-center gap-[40px] lg:gap-[60px]">
            {/* Dynamic Heading */}
            <div className="mx-auto max-w-[1000px] flex flex-col gap-[24px]">
              <p className="font-raleway text-[28px]/[100%] text-center uppercase text-white/64">We Provide</p>
              <h1 className=" font-raleway  leading-[85px] text-center font-[400] capitalize text-[28px] sm:text-[36px] md:text-[48px] lg:text-[80px]   text-white">
                <span className="text-[#FF9966]">instant &</span>{" "}automatic certifications
              </h1>
              <p className="font-raleway text-[28px]/[120%] text-center uppercase text-white/64">
                of date and location for{" "}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  images, video and audio
                </span>{" "}
                through smartphones and other devices.
              </p>
            </div>

            <button
                onClick={scrollToFooter}
                className="md:max-w-[350px] whitespace-nowrap md:h-[63px] h-[47px] w-[200px] md:w-full flex justify-center items-center cursor-pointer px-[48px] py-[14px] sm:py-3 md:py-[20px] md:px-[100px] border-2 border-white text-black bg-white rounded-full text-[16px]/[18.78px] lg:text-[20px]/[23.48px] font-[700]font-raleway"
              >
                CONTACT US
              </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-[1200px] mt-8">
              {cardsData.map((card, index) => (
                  <HeroCard key={index} {...card} />
              ))}
          </div> */}
    </div>
  );
}

export default Hero;
