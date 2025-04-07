import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import { Link } from "react-router-dom";
import Video from "./ui/Video";
import ISOCertified from "./ISOCertified";
import Heading2 from "./ui/Heading2";
import FumigationProcess from "./FumigationProcess";
import SolutionSection from "./MscSolutions";
import ResultsSection from "./MSCResult";

function InsuranceSection() {
  return (
    <section className="relative overflow-hidden bg-black w-full py-[100px] flex flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-[150%] h-[130%] object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      {/* <div className="md:container px-[20px] md:px-auto mx-auto"> */}
      <div className="relative max-w-[1280px] mx-auto z-10">
      

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] lg:my-[48px]">
          <span className="text-white/[0.64]">THE</span> CHALLENGE
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
       
          <p>
          In large-scale construction projects, monitoring work progress accurately is a significant challenge. While traditional tools like work schedules and site accounting systems help track project completion, remote supervision often leads to discrepancies between reported and actual progress. Photographic documentation is frequently used, but without verification, it cannot be fully trusted. This creates risks of manipulated records, delayed corrections, and disputes over work completion timelines.
          </p>
          </div>
          
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> SOLUTION
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          Tolemaica’s DataClick provides a certified photographic documentation system that ensures transparency and accuracy in work progress tracking. By legally certifying the time and location of each image captured via smartphone or tablet, stakeholders can remotely verify the status of construction projects in real time. The certified images are securely uploaded to a shared platform, eliminating inaccuracies and ensuring compliance with project timelines.
          </p>
        </div>
        
        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> BENEFITS
        </h2>
          <div className="flex flex-col gap-[50px]">
          <div
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
            }}
            className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white"
          >
            <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
              01
            </div>
            <div className="font-outfit font-light text-[24px] md:text-[32px]">
            Prevention of falsified records in site accounting.
            </div>
          </div>
          <div
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to right, #FF986433 20%, #602F16, #FF9864) border-box",
            }}
            className="shadow-challenge-2 flex flex-wrap lg:flex-nowrap lg:justify-end lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pr-[45px] px-[5px] text-white"
          >
            <div className="font-outfit font-light text-[24px] md:text-[32px]">
            Reduction in disputes over work completion dates.
            </div>
            <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
              02
            </div>
          </div>
          <div
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
            }}
            className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white"
          >
            <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
              03
            </div>
            <div className="font-outfit font-light text-[24px] md:text-[32px]">
            Enhanced efficiency in project workflows.
            </div>
          </div>
          <div
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to right, #FF986433 20%, #602F16, #FF9864) border-box",
            }}
            className="shadow-challenge-2 flex flex-wrap lg:flex-nowrap lg:justify-end lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pr-[45px] px-[5px] text-white"
          >
            <div className="font-outfit font-light text-[24px] md:text-[32px]">
            A strong deterrent against fraud in large construction projects.
            </div>
            <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
              04
            </div>
          </div>
          <div
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
            }}
            className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white"
          >
            <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
              05
            </div>
            <div className="font-outfit font-light text-[24px] md:text-[32px]">
            Optimized infrastructure maintenance, especially for high-risk sectors like railway and energy distribution.
            </div>
          </div>
        </div> 
        
        <div className="flex flex-col gap-[32px]">
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] my-[48px]">
          <span className="text-white/[0.64]">EXAMPLE</span> 
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-16">
          
            <div className="solution-shadow w-[302px] h-[auto] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
               
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              TERNA
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Uses similar monitoring for the maintenance of electricity distribution sites, where tasks must be completed within specific time slots—failure to comply can result in high voltage surges.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[auto] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
             
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Ferrovie dello Stato
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Applies similar procedures to railway maintenance. Maintenance must be conducted at an exactly scheduled time; otherwise, trains will continue running on the tracks, creating a major safety risk.</p>
            </div>
            
          </div>
          
          {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p> */}
        </div>
      </div>
      
     
      
      {/* ==== Content wrapper ===== */}
      <div className="relative mt-[100px] z-10 flex flex-col justify-center items-center text-center lg:px-[100px] md:px-[30px] px-[20px]">
      
        <div className="mt-[100px] text-center flex flex-col md:gap-[64px] gap-[40px] max-w-[1000px] mx-auto">
                  <Heading1 headingGray="bottom" headingWhite="line" />
                  <Text>
                  By implementing certified, real-time evidence, construction companies, infrastructure managers, and government agencies can enhance {" "}
                    <GradientSpan>
                    project efficiency, accountability, and compliance—leading to reduced costs,
                    </GradientSpan>{" "}
                    <GradientSpan>fewer disputes, and improved operational transparency.</GradientSpan>
                  </Text>
                </div>
        {/* Fumigation process */}
        {/* <div className="w-full shrink-0 flex flex-col justify-center items-center gap-[50px]">
          
          <h1 className="font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[32px]/[40px] lg:text-[40px]/[100%] uppercase tracking-wide">
            The <span className="px-2 text-white">Fumigation Process</span> for
            export
          </h1>
          <FumigationProcess />
        </div> */}

        {/* Solution Section */}
        {/* <SolutionSection /> */}

        {/* Result Section */}
        {/* <ResultsSection /> */}

        {/* ISO Certified */}
        <ISOCertified />
      </div>
      {/* container ends */}
      {/* </div> */}
    </section>
  );
}

export default InsuranceSection;
