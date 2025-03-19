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

function MSCShippingSection() {
  return (
    <section className="relative overflow-hidden bg-black w-full py-[100px] flex flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-[150%] h-[130%] object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      {/* <div className="md:container px-[20px] md:px-auto mx-auto"> */}
      <div className="relative max-w-[1280px] mx-auto z-10">
        <h1 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> CHALLENGE
        </h1>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
            Sky Italia offers TV subscriptions for both private users(Family) &
            businesses (Business). Business plans cost over twice as much as
            Family plans, but some commercial venues misused the cheaper Family
            plan to broadcast sports events.
          </p>
          <p>
            Sky Italia relied on on-site inspections to detect violations, but
            enforcement faced legal challenges:
          </p>
        </div>
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
              Unverified container conditions at entry and exit points.
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
              Unclear proof of seal integrity at different supply chain stages.
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
              Extensive manual documentation processes leading to
              inefficiencies.
            </div>
          </div>
        </div>
        <h1 className="mt-[100px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> SOLUTION
        </h1>
        <p className="text-center text-white/64 font-outfit font-light text-base md:text-2xl mb-[48px]">
          Tolemaica introduces a certified digital solution that ensures
          complete traceability by capturing{" "}
          <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
            legally valid, timestamped, and geolocated images
          </span>{" "}
          at both arrival and departure. The system records:
        </p>
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/sol3.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Container number verification
              </p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/sol4.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Truck license plate for vehicle identification
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/sol5.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Seal number and condition to verify integrity
              </p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/sol6.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Additional relevant notes for dispute resolution
              </p>
            </div>
          </div>
          <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p>
        </div>
      </div>

      {/* ==== Content wrapper ===== */}
      <div className="relative mt-[100px] z-10 flex flex-col justify-center items-center text-center lg:px-[100px] md:px-[30px] px-[20px]">
        {/* Fumigation process */}
        <div className="w-full shrink-0 flex flex-col justify-center items-center gap-[50px]">
          {/* <Heading2 headingGray="The Fumigation Process" headingWhite2="for Export" /> */}
          <h1 className="font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[32px]/[40px] lg:text-[40px]/[100%] uppercase tracking-wide">
            The <span className="px-2 text-white">Fumigation Process</span> for
            export
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
      {/* </div> */}
    </section>
  );
}

export default MSCShippingSection;
