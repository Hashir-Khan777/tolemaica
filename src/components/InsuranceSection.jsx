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
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">USE CASE 1: <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">Certified Damage Assessment for Insurance Claim</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> CHALLENGE
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          The Insurance Company faced challenges in verifying the authenticity and accuracy of photographic evidence submitted for insurance claims. The reliance on manually acquired images created risks of fraud, manipulation, and incorrect damage assessment.
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> SOLUTION
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          Tolemaica implemented Instant Automatic Certification (IAC), allowing real-time image certification through a WebApp or API integration. The system ensures that all images submitted contain legally certified metadata (time, location, and identity of the uploader), making them fully verifiable and tamper-proof.
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
          <span className="text-white/[0.64]">THE</span> BENEFITS
        </h2>
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
              <img src="/insu-1.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Fraud Reduction
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Certified images prevent fraudulent claims and ensure claim accuracy.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-2.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Operational Efficiency
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Faster claims processing through automatic AI damage assessment.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-3.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Cost Savings
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Reduced reliance on manual verifications and on-site inspections.</p>
            </div>
          </div>
         
          {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p> */}
        </div>
      </div>
      <div className="relative max-w-[1280px] mx-auto z-10">
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">USE CASE 2: <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent"> Preemptive Damage Assessment for Urban Infrastructure</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> CHALLENGE
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          Traditional infrastructure damage assessments were reactive and required extensive manual effort, leading to delays in insurance compensation and risk mitigation.
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> SOLUTION
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          By integrating IAC technology, the Insurance Company and NTT Data enabled real-time monitoring and documentation of urban infrastructure conditions through certified photographic evidence collected via experts and remote IoT devices.
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
          <span className="text-white/[0.64]">THE</span> BENEFITS
        </h2>
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
              <img src="/insu-4.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Predictive Maintenance
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Automated alerts flag potential risks before they escalate.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-5.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Data Accuracy
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Secure documentation ensures compliance and dispute resolution.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-6.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Enhanced Safety
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Immediate action can be taken on critical infrastructure failures.</p>
            </div>
          </div>
         
          {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p> */}
        </div>
      </div>
      <div className="relative max-w-[1280px] mx-auto z-10">
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">USE CASE 3: <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent"> AI-Powered Claims Verification for Automotive Insurance</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> CHALLENGE
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          The Insurance Company needed to streamline the process of verifying vehicle damage post-accident while reducing the administrative burden on both claimants and adjusters.
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> SOLUTION
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          Tolemaica’s AI-powered verification system was integrated into the Insurance Company’s claims processing workflow. Certified photos of vehicle damage, captured at the accident site via a dedicated WebApp, were analyzed instantly, reducing the need for manual inspections.
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
          <span className="text-white/[0.64]">THE</span> BENEFITS
        </h2>
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
              <img src="/insu-7.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Faster Claims Processing
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Automatic validation reduces approval time by X%.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-8.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Customer Convenience
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Claimants can submit certified images instantly via mobile.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-9.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Reduced Costs
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">AI-powered damage estimation lowers manual intervention.</p>
            </div>
          </div>
         
          {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
            The solution automates the documentation process for both land and
            maritime transport, covering loading, unloading, and transshipment
            operations.
          </p> */}
        </div>
      </div>
      <div className="relative max-w-[1280px] mx-auto z-10">
      <h1 class="my-10 text-center font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">USE CASE 4: <span class="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">  Automated Insurance Verification for Corporate Fleets</span></h1>

        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> CHALLENGE
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          Fleet managers needed a seamless process to verify vehicle conditions and insurance coverage at scale, ensuring compliance and preventing fraudulent claims.
          </p>
          </div>
          <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> SOLUTION
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          Tolemaica’s blockchain-powered certification enabled the Insurance Company to maintain a real-time digital ledger of all vehicle inspections, ensuring that each claim was backed by verifiable data.
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
          <span className="text-white/[0.64]">THE</span> BENEFITS
        </h2>
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
              <img src="/insu-10.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Transparency & Compliance
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Every inspection is recorded with a verifiable timestamp.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-11.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Operational Efficiency
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Automated verification reduces fleet management workload.</p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/insu-12.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              Financial Impact
              </p>
              <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Preventative monitoring lowers unexpected claim costs by X%.</p>
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
                  Through its partnership with NTT Data, Tolemaica revolutionized insurance claims processing, infrastructure monitoring, and vehicle damage verification. By leveraging IAC-certified documentation, the Insurance Company not {" "}
                    <GradientSpan>
                    only streamlined workflows but also reduced fraud, improved efficiency, and
                    </GradientSpan>{" "}
                    <GradientSpan>enhanced customer experience—setting a new standard in digital insurance claims automation.</GradientSpan>
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
