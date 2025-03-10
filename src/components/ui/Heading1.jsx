import React from "react";

const Heading1 = ({ headingGray, headingWhite }) => {
  return (
    <h1 className="font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[32px]/[40px] lg:text-[40px]/[100%] uppercase tracking-[5%]">
      {headingGray} <span className="text-white">{headingWhite}</span>
    </h1>
  );
};

export default Heading1;
