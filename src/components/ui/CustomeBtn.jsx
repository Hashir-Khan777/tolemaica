import React from "react";

function CustomBtn({
  text = "CERTIFICATIONS",
  borderColor = "#FF9966",
  bgColor = "black",
  textColor = "white",
  paddingX = "1rem", // Default for mobile
  paddingY = "0.5rem",
  fontSize = "0.8rem",
  lgFontSize = "1.25rem",
}) {
  return (
    <span
      className="border md:px-[48px] px-[30px] md:text-[25px] text-[22px] md:py-[20px] py-[15px] uppercase rounded-full font-medium inline-flex items-center justify-center w-full md:w-max custom-btn"
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        color: textColor,
        // fontSize: fontSize,
        borderWidth: "2px",
        whiteSpace: "nowrap", // Prevents breaking
        minWidth: "fit-content",
      }}
    >
      {text}
      <style>
        {`
          @media (min-width: 1260px) {
            .custom-btn {
              font-size: ${lgFontSize} !important;
            }
          }
        `}
      </style>
    </span>
  );
}

export default CustomBtn;

