import React from "react";
import Header from "../components/Header";

const UseCaseHero = ({
  title,
  page,
  text,
  gradientText,
  secondtext,
  image,
}) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat lg:px-[100px]  md:px-[50px] px-[20px]">
      <video
        src="/usecasehero.mov"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 80%, rgba(0,0,0,1))",
        }}
      ></div>
      {/* Navbar */}
      <div className="w-full md:pt-[40px]">
        <Header />
      </div>

      <div className="flex flex-1 justify-center items-center">
        <div className="shadow-header relative z-10 w-[100%] max-w-[1200px] md:h-[620px] h-[434px] border-[2px] border-white/64 rounded-[12px] md:rounded-[24px] backdrop-blur-[16px] flex flex-col  justify-center items-center text-center mx-auto my-[30px] lg:my-[50px] py-[100px] px-[24px]">
          {image ? (
            <img src={image} width="90px" className="absolute right-6 top-6" />
          ) : null}
          <video
            src="/usecasebg.mov"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover -z-2 pointer-events-none rounded-[12px] md:rounded-[24px]"
          ></video>
          <div
            className="absolute inset-0 rounded-[12px] md:rounded-[24px] -z-1 w-full h-full"
            style={{ background: "rgb(4, 4, 4, 0.5)" }}
          ></div>
          <div className="flex flex-col gap-[32px]">
            <div className="max-w-[894px] mx-auto">
              <h1 className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal text-2xl text-center">
                <span className="px-10">{title}</span>
              </h1>
              <h1 className="font-raleway text-white text-center font-[400] capitalize text-[28px] sm:text-[36px] md:text-[40px]">
                <span className="px-10">{page}</span>
              </h1>
            </div>
            <div className="h-0.5 bg-white/[0.2] w-[90%] mx-auto" />
            <p
              className="font-raleway text-white text-center font-[400] capitalize tracking-[5%] 
      text-[30px]/[100%] md:text-[40px]/[100%] lg:text-[72px]/[100%] md:mx-[32px]"
            >
              {text}
              <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                {" "}
                {gradientText}
              </span>{" "}
              {secondtext}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseHero;
