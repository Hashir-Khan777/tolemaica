import React from "react";

const Text = ({ children }) => {
  return (
    <p className="text-white/64 text-[16px]/[20px] text-start md:text-[24px]/[28px] w-full tracking-[5%] font-[300] mx-auto font-outfit">
      {children}
    </p>
  );
};

const GradientSpan = ({ children }) => {
  return (
    <span className="font-outfit text-[16px]/[20px] text-start md:text-[24px]/[28px] tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export  {GradientSpan,Text};

