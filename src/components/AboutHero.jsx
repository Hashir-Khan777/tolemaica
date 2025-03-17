import React from "react";
import Header from "../components/Header";
import { Text, GradientSpan } from "./ui/Text";

function AboutHero() {
  return (
    <div
      className="relative w-full h-screen flex flex-col items-start justify-start bg-cover bg-center bg-no-repeat lg:px-[100px] md:px-[50px] px-[20px]"
      style={{ backgroundImage: 'url("/aboutBg.png")' }}
    >
      {/* Navbar */}
      <div className="w-full md:pt-[40px]">
        <Header />
      </div>

      <div className="mx-auto flex flex-1 justify-center items-center">
        <div
          className="z-10 w-[100%] max-w-[1200px] md:h-[620px] h-[487px] border-[2px] border-white/64 rounded-[24px] backdrop-blur-[16px] flex flex-col justify-center items-center text-center my-[30px] lg:my-[50px] py-[100px] px-[24px]"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <div className="max-w-[1000px] flex flex-col gap-[30px] lg:gap-[77px]">
            {/* Dynamic Heading */}
            <h1 className=" font-raleway text-white text-center tracking-[5%] font-[400] capitalize text-[28px]/[32px] sm:text-[36px]/[42px] md:text-[48px]/[54px] lg:text-[64px]/[75.53px]">
              Brilliant{" "}
              <span className="px-1 bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Minds, Bold <br /> Visions
              </span>
              One
              {/* Gradient heading */}
              <span className="px-1 bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Mission
              </span>
            </h1>

            {/* Dynamic Paragraph */}
            <p
              className="font-raleway text-white/50 text-center font-[400] capitalize tracking-[5%] 
        text-[16px]/[18.78px] sm:text-[24px]/[30px] md:text-[30px]/[36px] lg:text-[40px]/[46.96px]"
            >
              the
              <span className="px-2 bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Creators, Innovators, and Game-Changers
              </span>
              of Tolemaica
            </p>
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

export default AboutHero;
