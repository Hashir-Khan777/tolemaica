import React from "react";

const HeroCard = () => {
  return (
    <div
      className="w-[90%] max-w-[1200px] min-h-[400px] lg:h-[620px] bg-black/25 border-2 border-white/64 rounded-[24px] backdrop-blur-[10px] p-5 flex flex-col gap-[30px] lg:gap-[50px] justify-center items-center text-center mx-auto my-[30px] lg:my-[50px]"
    >
      {/* Heading */}
      <h1 className="font-raleway text-white font-[400] capitalize tracking-[5%] max-w-[890px] 
        text-[28px]/[34px] sm:text-[36px]/[42px] md:text-[48px]/[54px] lg:text-[72px]/[84.53px]">
        Give Legal Value To Your Data With <br />
        <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          DataClick's Certification!
        </span>
      </h1>

      {/* Paragraph */}
      <p className="font-raleway text-white font-[400] capitalize tracking-[5%] 
        text-[20px]/[26px] sm:text-[24px]/[30px] md:text-[30px]/[36px] lg:text-[40px]/[46.96px]">
        Digital Certification Of 
        <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {" "}Images, Sounds, And Videos
        </span>
      </p>
    </div>
  );
};

export default HeroCard;
