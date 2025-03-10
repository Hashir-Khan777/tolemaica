import React from "react";

function CustomBtn({
  text = "CERTIFICATIONS",
  borderColor = "#FF9966",
  bgColor = "black",
  textColor="white"
}
) {
  return (
    <span
      className="font-outfit md:px-[48px] px-[30px] lg:text-[48px]/[100%] md:text-[25px] text-[22px] md:py-[20px] py-[15px] uppercase rounded-full font-[400] tracking-[5%] inline-flex border-[1.5px] items-center justify-center w-full md:w-max custom-btn"
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        color: textColor,
        // fontSize: fontSize,
        whiteSpace: "nowrap", // Prevents breaking
        minWidth: "fit-content",
      }}
    >
      {text}
    </span>
  );
}

export default CustomBtn;

