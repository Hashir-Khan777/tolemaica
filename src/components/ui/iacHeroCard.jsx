import React from "react";
import CustomeBtn from './CustomeBtn'

const HeroCard = () => {
  return (
    <div
      className="w-[90%] max-w-[1200px] min-h-[400px] lg:h-[620px]  border-2 border-white/64 rounded-[24px] backdrop-blur-[10px] p-5 flex md:flex-row flex-col  gap-[30px] lg:gap-[100px] justify-center items-center text-center mx-auto my-[30px] lg:my-[50px]"
    >
      <div className="shrink-0">
        <img src="./iac.svg" alt="iac icon" className="lg:w-[430px] md:w-[300px] md:h-[300px] lg:h-[430px] w-[250px] h-[250px]" />
      </div>

      <div className="flex flex-col items-start justify-baseline gap-[24px] md:px-0 px-10">
        <span className="md:w-max sm:w-[95%] w-[85%] mx-auto md:mx-0 font-raleway font-[500] lg:text-[48px]/[56.35px]  md:text-[35px]/[40.35px] text-[25px]/[30.35px] tracking-[5%] uppercase bg-black text-[#FF9966] border-[2.05px] border-white py-[12.28px] px-[50px] rounded-full">Instant</span>

        <span className="inline-flex items-center justify-center sm:w-[95%] w-[85%] mx-auto md:mx-0 md:w-max custom-btn font-raleway font-[500] lg:text-[48px]/[56.35px] md:text-[35px]/[40.35px] text-[25px]/[30.35px] tracking-[5%] uppercase text-white border-[2.05px] border-[#FF9966] py-[12.28px] px-[50px] rounded-full">automatic</span>

        <span className="inline-flex items-center justify-center sm:w-[95%] w-[85%] mx-auto md:mx-0 md:w-max custom-btn font-raleway font-[500] lg:text-[48px]/[56.35px]  md:text-[35px]/[40.35px] text-[25px]/[30.35px] tracking-[5%] uppercase bg-white text-black border-[2.05px] border-black py-[12.28px] px-[50px] rounded-full">certifications</span>
      </div>
    </div>
  );
};

export default HeroCard;

