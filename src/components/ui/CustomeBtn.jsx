import React from "react";

function CustomBtn({ text = "CERTIFICATIONS", textColor = "white" }) {
  return (
    <span
      className="font-outfit text-[56px] text-start uppercase font-[700] tracking-[5%] w-full custom-btn"
      style={{
        color: textColor,
      }}
    >
      {text}
    </span>
  );
}

export default CustomBtn;
