import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { GradientSpan, Text } from "./ui/Text";
import ContactUsModal from "./ui/ContactUsModal";
import RegisterModal from "./ui/RegisterModal";

function Hero() {
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/homehero?populate=*")
      .then((res) => res.json())
      .then((json) => {
        setHeroData(json.data);
      })
      .catch((err) => console.error("Failed to fetch hero data:", err));
  }, []);

  const scrollToFooter = () => {
    if (!window.location.pathname.includes("/")) {
      navigate("/");
      setTimeout(() => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
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
        playsInline
        webkit-playsinline="true"
        className="absolute  inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>

      <div className="w-full md:pt-[40px]">
        <Header />
      </div>

      <div className="mx-auto w-full max-w-[1200px] flex flex-1 justify-center items-center">
        <div
          className="z-10 w-[100%] max-w-[1200px] md:h-[620px] h-[587px] border-[2px] border-white/64 rounded-[24px] backdrop-blur-[16px] flex flex-col justify-center items-center text-center py-[100px] px-[24px]"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <div className="flex flex-col justify-center items-center gap-[40px] lg:gap-[60px]">
            <div className="mx-auto max-w-[1000px] flex flex-col gap-[24px]">
              <p className="font-raleway text-[28px]/[100%] text-center uppercase text-white/64">
                {heroData?.short_heading}
              </p>
              <h1 className="font-raleway text-center font-[500] capitalize text-[36px] lg:text-[80px] text-white">
                <span className="text-[#FF9966]">
                  {heroData?.colored_long_heading}
                </span>{" "}
                {heroData?.simple_long_heading}
              </h1>
              <p className="font-raleway text-[28px]/[120%] text-center uppercase text-white/64">
                {heroData?.paragraph?.text}{" "}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {heroData?.paragraph?.colored_text}
                </span>{" "}
                {heroData?.paragraph?.second_text}
              </p>
            </div>

            <button
              onClick={() => setContactModalIsOpen(true)}
              className="md:max-w-[350px] whitespace-nowrap md:h-[63px] h-[47px] w-[200px] md:w-full flex justify-center items-center cursor-pointer px-[48px] py-[14px] sm:py-3 md:py-[20px] md:px-[100px] border-2 border-white text-black bg-white rounded-full text-[16px]/[18.78px] lg:text-[20px]/[23.48px] font-[700] font-raleway"
            >
              {heroData?.btn_text}
            </button>
          </div>
        </div>
      </div>

      <ContactUsModal
        modalIsOpen={contactModalIsOpen}
        closeModal={() => setContactModalIsOpen(false)}
      />
    </div>
  );
}

export default Hero;
