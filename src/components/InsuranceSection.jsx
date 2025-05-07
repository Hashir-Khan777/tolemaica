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

const InsuranceSection = ({ worksectorData }) => {
  const { details, services } = worksectorData;
  
  const useCase1Heading = details[2];
  const challenge1Heading = details[3];
  const challenge1Para = details[4];
  const solution1Heading = details[5];
  const solution1Para = details[6];
  const benefits1Heading = details[7];
  const benefits1Para = details[8];

   const useCase2Heading = details[9];
  // const challenge2Heading = details[3];
   const challenge2Para = details[10];
  // const solution2Heading = details[5];
   const solution2Para = details[11];
  // const benefits2Heading = details[7];
   const benefits2Para = details[12];

   const useCase3Heading = details[13];
  // const challenge3Heading = details[3];
   const challenge3Para = details[14];
  // const solution3Heading = details[5];
   const solution3Para = details[15];
  // const benefits3Heading = details[7];
   const benefits3Para = details[16];

   
   const useCase4Heading = details[17];
  // const challenge3Heading = details[3];
   const challenge4Para = details[18];
  // const solution3Heading = details[5];
   const solution4Para = details[19];
  // const benefits3Heading = details[7];
   const benefits4Para = details[20];

 
  const theBottomLine = details[21];
  const theBottomLinePara = details[22];
 
  if (!worksectorData) {
    return <div className="bg-black">Loading...</div>; // Display loading message until data is available
  }

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
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">{useCase1Heading ? useCase1Heading.light_heading : "Loading..."} <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">{useCase1Heading ? useCase1Heading.dark_heading : "Loading..."}</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{challenge1Heading ? challenge1Heading.light_heading : "Loading..."}</span> {challenge1Heading ? challenge1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {challenge1Para ? challenge1Para.text : "Loading..."}
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{solution1Heading ? solution1Heading.light_heading : "Loading..."}</span> {solution1Heading ? solution1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {solution1Para ? solution1Para.text : "Loading..."}
          </p>
        </div>
        {/* <div className="flex flex-col gap-[50px]">
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
        </div> */}
        <h2 className="mt-[100px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{benefits1Heading ? benefits1Heading.light_heading : "Loading..."}</span> {benefits1Heading ? benefits1Heading.dark_heading : "Loading..."}
        </h2>
        <p className="text-center text-white/64 font-outfit font-light text-base md:text-2xl mb-[48px]">
        {benefits1Para ? benefits1Para.text : "Loading..."}{" "}
          <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {benefits1Para ? benefits1Para.colored_text : "Loading..."}
          </span>{" "}
         
        </p>
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-wrap items-center justify-center gap-16">
          {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]"
              >
                <img
                  src={service.image.url}
                  className="rounded-[12px] mx-auto"
                  alt={service.image.name}
                />
                <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {service.heading.light_heading}
                </p>
                <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
                  {service.paragraph}
                </p>
              </div>
            ))}
          </div>
         
          {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p> */}
        </div>
      </div>
      <div className="relative max-w-[1280px] mx-auto z-10">
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">{useCase1Heading ? useCase1Heading.light_heading : "Loading..."} <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">{useCase2Heading ? useCase2Heading.dark_heading : "Loading..."}</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{challenge1Heading ? challenge1Heading.light_heading : "Loading..."}</span> {challenge1Heading ? challenge1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {challenge2Para ? challenge2Para.text : "Loading..."}
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{solution1Heading ? solution1Heading.light_heading : "Loading..."}</span> {solution1Heading ? solution1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {solution2Para ? solution2Para.text : "Loading..."}
          </p>
        </div>
        {/* <div className="flex flex-col gap-[50px]">
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
        </div> */}
        <h2 className="mt-[100px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{benefits1Heading ? benefits1Heading.light_heading : "Loading..."}</span> {benefits1Heading ? benefits1Heading.dark_heading : "Loading..."}
        </h2>
        <p className="text-center text-white/64 font-outfit font-light text-base md:text-2xl mb-[48px]">
        {benefits1Para ? benefits1Para.text : "Loading..."}{" "}
          <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {benefits2Para ? benefits2Para.colored_text : "Loading..."}
          </span>{" "}
         
        </p>
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-wrap items-center justify-center gap-16">
          {services.slice(3, 6).map((service, index) => (
              <div
                key={index}
                className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]"
              >
                <img
                  src={service.image.url}
                  className="rounded-[12px] mx-auto"
                  alt={service.image.name}
                />
                <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {service.heading.light_heading}
                </p>
                <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
                  {service.paragraph}
                </p>
              </div>
            ))}
          </div>
         
          {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p> */}
        </div>
      </div>
      <div className="relative max-w-[1280px] mx-auto z-10">
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">{useCase3Heading ? useCase3Heading.light_heading : "Loading..."} <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">{useCase3Heading ? useCase3Heading.dark_heading : "Loading..."}</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{challenge1Heading ? challenge1Heading.light_heading : "Loading..."}</span> {challenge1Heading ? challenge1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {challenge3Para ? challenge3Para.text : "Loading..."}
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{solution1Heading ? solution1Heading.light_heading : "Loading..."}</span> {solution1Heading ? solution1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {solution3Para ? solution3Para.text : "Loading..."}
          </p>
        </div>
        {/* <div className="flex flex-col gap-[50px]">
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
        </div> */}
        <h2 className="mt-[100px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{benefits1Heading ? benefits1Heading.light_heading : "Loading..."}</span> {benefits1Heading ? benefits1Heading.dark_heading : "Loading..."}
        </h2>
        <p className="text-center text-white/64 font-outfit font-light text-base md:text-2xl mb-[48px]">
        {benefits3Para ? benefits3Para.text : "Loading..."}{" "}
          <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {benefits3Para ? benefits3Para.colored_text : "Loading..."}
          </span>{" "}
         
        </p>
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-wrap items-center justify-center gap-16">
          {services.slice(6, 9).map((service, index) => (
              <div
                key={index}
                className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]"
              >
                <img
                  src={service.image.url}
                  className="rounded-[12px] mx-auto"
                  alt={service.image.name}
                />
                <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {service.heading.light_heading}
                </p>
                <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
                  {service.paragraph}
                </p>
              </div>
            ))}
          </div>
         
          {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p> */}
        </div>
      </div>
      <div className="relative max-w-[1280px] mx-auto z-10">
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">{useCase4Heading ? useCase4Heading.light_heading : "Loading..."} <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">{useCase1Heading ? useCase1Heading.dark_heading : "Loading..."}</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{challenge1Heading ? challenge1Heading.light_heading : "Loading..."}</span> {challenge1Heading ? challenge1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {challenge4Para ? challenge4Para.text : "Loading..."}
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{solution1Heading ? solution1Heading.light_heading : "Loading..."}</span> {solution1Heading ? solution1Heading.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {solution4Para ? solution4Para.text : "Loading..."}
          </p>
        </div>
        {/* <div className="flex flex-col gap-[50px]">
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
        </div> */}
        <h2 className="mt-[100px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">{benefits1Heading ? benefits1Heading.light_heading : "Loading..."}</span> {benefits1Heading ? benefits1Heading.dark_heading : "Loading..."}
        </h2>
        <p className="text-center text-white/64 font-outfit font-light text-base md:text-2xl mb-[48px]">
        {benefits4Para ? benefits4Para.text : "Loading..."}{" "}
          <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {benefits4Para ? benefits4Para.colored_text : "Loading..."}
          </span>{" "}
         
        </p>
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-wrap items-center justify-center gap-16">
            
            
          {services.slice(9, 12).map((service, index) => (
              <div
                key={index}
                className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]"
              >
                <img
                  src={service.image.url}
                  className="rounded-[12px] mx-auto"
                  alt={service.image.name}
                />
                <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {service.heading.light_heading}
                </p>
                <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
                  {service.paragraph}
                </p>
              </div>
            ))}
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
        <Heading1 headingGray={theBottomLine ? theBottomLine.light_heading : "Loading..."} headingWhite={theBottomLine ? theBottomLine.dark_heading : "Loading..."} />
                  <Text>
                  {theBottomLinePara ? theBottomLinePara.text : "Loading..."}{" "}
                    <GradientSpan>
                    {theBottomLinePara ? theBottomLinePara.colored_text : "Loading..."}
                    </GradientSpan>
                    
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
