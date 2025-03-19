import React from "react";

const SubHeading = ({ headingGray, headingWhite }) => {
  return (
    <h1 className="font-raleway text-white/60 font-[400] text-[18px]/[23px] md:text-[32px]/[100%] uppercase tracking-wide">
      {headingGray} <span className="text-white">{headingWhite}</span>
    </h1>
  );
};

export default SubHeading;
