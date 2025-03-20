import React from "react";
import CustomeBtn from "./CustomeBtn";

const HeroCard = () => {
  return (
    <div className="w-[100%] max-w-[1200px] min-h-[400px] lg:h-[620px]  border-2 border-white/64 rounded-[24px] backdrop-blur-[10px] p-5 flex md:flex-row flex-col gap-[30px] xl:gap-[100px] justify-center md:justify-between items-center text-center mx-auto bg-gradient-to-br from-white/30 via-transparent to-[#FF9966]/30 lg:px-[64px]">
      <div>
        <img
          src="/iac.svg"
          alt="iac icon"
          className="lg:w-[391px] lg:h-[391px] md:w-[300px] md:h-[300px] w-[250px] h-[250px]"
        />
      </div>

      <div className="flex flex-col md:items-start items-center justify-baseline gap-[10px] md:gap-[24px] md:px-0 px-10">

        <span className="font-raleway font-[500] text-[28px]/[100%] md:text-[50px]/[100%] lg:text-[80px]/[100%] tracking-wide uppercase text-[#FF9966]">
          Instant &
        </span>
        <span className="font-raleway font-[500] text-[28px]/[100%] md:text-[50px]/[100%] lg:text-[80px]/[100%] tracking-wide uppercase text-white">
          Automatic
        </span>
        <span className="font-raleway font-[500] text-[28px]/[100%] md:text-[50px]/[100%] lg:text-[80px]/[100%] tracking-wide uppercase text-white">
          Certification
        </span>

        {/* <span className="md:w-max sm:w-[95%] w-[85%] mx-auto md:mx-0 font-raleway font-[500] xl:text-[48px]/[100%]  md:text-[35px]/[40.35px] text-[25px]/[30.35px] tracking-[5%] uppercase bg-gradient-to-b from-black to-[#111] text-[#FF9966]  border-[2.05px] border-white py-[12.28px] px-[50px] rounded-full">
          Instant
        </span> */}

        {/* <span className="inline-flex items-center justify-center sm:w-[95%] w-[85%] mx-auto md:mx-0 md:w-max custom-btn font-raleway font-[500] xl:text-[48px]/[56.35px] md:text-[35px]/[40.35px] text-[25px]/[30.35px] tracking-[5%] uppercase text-white border-[2.05px] border-[#FF9966] py-[12.28px] px-[50px] rounded-full">
          automatic
        </span> */}

        {/* <span className="inline-flex items-center justify-center sm:w-[95%] w-[85%] mx-auto md:mx-0 md:w-max custom-btn font-raleway font-[500] xl:text-[48px]/[56.35px]  md:text-[35px]/[40.35px] text-[25px]/[30.35px] tracking-[5%] uppercase bg-white text-black border-[2.05px] border-black py-[12.28px] px-[50px] rounded-full">
          certifications
        </span> */}
      </div>
    </div>
  );
};

export default HeroCard;
