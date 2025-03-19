import React from "react";
import Header from "../components/Header";

function ServiceHero({ title, gradientTitle, text, gradientText }) {
  return (
    <div
      className="relative w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat lg:px-[100px]  md:px-[50px] px-[20px]"
      style={{ backgroundImage: 'url("/images/servicesBg.png")' }}
    >
      {/* Navbar */}
      <div className="w-full md:pt-[40px]">
        <Header />
      </div>

      <div className="flex flex-1 justify-center items-center">
        <div
          className="z-10 w-[100%] max-w-[1200px] md:h-[620px] h-[434px] border-[2px] border-white/64 rounded-[12px] md:rounded-[24px] backdrop-blur-[16px] flex flex-col  justify-center items-center text-center mx-auto py-[100px] px-[24px]"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <div className="flex flex-col gap-[64px] lg:gap-[100px]">
            {/* Dynamic Heading */}
            <div className="mx-auto">
              <h1 className=" font-raleway text-white leading-[85px] text-center font-[400] capitalize text-[28px] sm:text-[36px] md:text-[48px] lg:text-[72px] flex flex-col">
                <span className="px-10">{title}</span>
                {/* Gradient heading */}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {gradientTitle}
                </span>
              </h1>
            </div>

            {/* Dynamic Paragraph */}
            <p
              className="font-raleway text-white/64 text-center font-[400] capitalize tracking-[5%] 
        text-[16px]/[100%] sm:text-[24px]/[100%] md:text-[30px]/[100%] lg:text-[40px]/[100%]"
            >
              {text}
              {/* Gradient text */}
              <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                {" "}
                {gradientText}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
