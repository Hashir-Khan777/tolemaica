import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import { Link } from "react-router-dom";
import Video from './ui/Video'
import ISOCertified from './ISOCertified'
import Heading2 from './ui/Heading2'
import FumigationProcess from "./FumigationProcess";
import SolutionSection from "./MscSolutions";
import ResultsSection from "./MSCResult";

function MSCShippingSection() {
    return (
        <section className="relative overflow-hidden w-full bg-black py-[100px] flex flex-col">
            <video
                src="/ourpartners.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            ></video>

            {/* ==== Content wrapper ===== */}
            <div className="relative mt-10 z-10 flex flex-col justify-center items-center gap-[100px] text-center lg:px-[100px] md:px-[30px] px-[20px]">

                {/* Fumigation process */}
                <div className="w-full shrink-0 flex flex-col justify-center items-center gap-[50px]">
                    {/* <Heading2 headingGray="The Fumigation Process" headingWhite2="for Export" /> */}
                    <h1 className="font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[32px]/[40px] lg:text-[40px]/[100%] uppercase tracking-wide">
                        The <span className="px-2 text-white">Fumigation Process</span> for export
                    </h1>
                    <FumigationProcess />
                </div>

                {/* Solution Section */}
                <SolutionSection />

                {/* Result Section */}
                <ResultsSection />

                {/* ISO Certified */}
                <ISOCertified />
            </div>
            {/* container ends */}
        </section>
    );
}

export default MSCShippingSection;
