import React from "react";

const Heading2 = ({ headingGray, headingWhite1, headingWhite2 }) => {
    return (
        <h1 className="font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[32px]/[40px] lg:text-[40px]/[100%] uppercase tracking-[5%] flex flex-row gap-2 justify-center items-center">
        <span className="text-white">{headingWhite1}</span>
            <span>{headingGray ? headingGray : ""}</span> <span className="text-white">{headingWhite2}</span>
        </h1>
    );
};

export default Heading2;
