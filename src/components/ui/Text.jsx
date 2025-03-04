import React from "react";

const Text = ({ children }) => {
  return (
    <p className="text-gray-400 text-[16px]/[20px] text-center md:text-[24px]/[28px] w-full max-w-[1000px] tracking-[5%] font-[300] mx-auto">
      {children}
    </p>
  );
};

const GradientSpan = ({ children }) => {
  return (
    <span className="text-[16px]/[20px] text-center md:text-[24px]/[28px] max-w-[1000px] tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export  {GradientSpan,Text};

