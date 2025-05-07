// import React from "react";
// import Heading1 from "./ui/Heading1";
// import { Text, GradientSpan } from "./ui/Text";
// import { Link } from "react-router-dom";
// import Video from "./ui/Video";
// import ISOCertified from "./ISOCertified";
// import Heading2 from "./ui/Heading2";
// import FumigationProcess from "./FumigationProcess";
// import SolutionSection from "./MscSolutions";
// import ResultsSection from "./MSCResult";

// function InsuranceSection() {
//   return (
//     <section className="relative overflow-hidden bg-black w-full py-[100px] flex flex-col">
//       <video
//         src="/ourpartners.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         webkit-playsinline
//         className="absolute inset-0 w-[150%] h-[130%] object-cover z-0 pointer-events-none"
//         style={{ filter: "blur(40px)" }}
//       ></video>

//       {/* <div className="md:container px-[20px] md:px-auto mx-auto"> */}
//       <div className="relative max-w-[1280px] mx-auto z-10">
      

//         <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] my-[48px]">
//           <span className="text-white/[0.64]">THE</span> CHALLENGE
//         </h2>
//         <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
//         <h3 className="text-center font-raleway text-white font-normal text-xl md:text-[36px] mb-[36px]" >ENSURING COMPLIANCE IN AEROSPACE LOGISTICS</h3>
//           <p>
//           ALA, a leading aerospace logistics company, needed to comply with strict storage regulations for critical aircraft components. Common challenges included:
//           </p>
//           </div>
//           <div className="flex flex-col gap-[50px]">
//           <div
//             style={{
//               border: "2px solid transparent",
//               background:
//                 "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
//             }}
//             className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white"
//           >
//             <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               01
//             </div>
//             <div className="font-outfit font-light text-[24px] md:text-[32px]">
//             Limited storage time for components, requiring precise tracking.
//             </div>
//           </div>
//           <div
//             style={{
//               border: "2px solid transparent",
//               background:
//                 "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to right, #FF986433 20%, #602F16, #FF9864) border-box",
//             }}
//             className="shadow-challenge-2 flex flex-wrap lg:flex-nowrap  lg:justify-end lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:px-[45px] px-[5px] sm:mx-[20px] text-white"
//           >
//             <div className="font-outfit font-light text-[24px] md:text-[32px]">
//             Liability disputes over whether failures stem from warehousing or manufacturing.
//             </div>
//             <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               02
//             </div>
//           </div>
//           <div
//             style={{
//               border: "2px solid transparent",
//               background:
//                 "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
//             }}
//             className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white"
//           >
//             <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               03
//             </div>
//             <div className="font-outfit font-light text-[24px] md:text-[32px]">
//             Need for a legally certified system to document component entry and exit times.
//             </div>
//           </div>
//         </div> 
//           <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] my-[48px]">
//           <span className="text-white/[0.64]">THE</span> SOLUTION
//         </h2>
//         <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
//           <p>
//           Tolemaica deployed BarCertCode, an automated system that legally timestamps component storage. By integrating with ALA’s barcode system, it enables Instant Automatic Certification (IAC), creating a legally recognized digital audit trail.
//           </p>
//         </div>
        
        
//         <div className="flex flex-col gap-[32px]">
//           <div className="flex flex-wrap items-center justify-center gap-16">
//             <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
//               <img src="/aero-1.png" className="rounded-[12px] mx-auto" />
//               <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//               Risk Management
//               </p>
//               <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Automatic validation reduces approval time by X%.</p>
//             </div>
//             <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
//               <img src="/aero-2.png" className="rounded-[12px] mx-auto" />
//               <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//               Legal Protection
//               </p>
//               <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">Claimants can submit certified images instantly via mobile.</p>
//             </div>
            
//           </div>
//           <div className="flex flex-wrap items-center justify-center gap-16">
//           <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
//               <img src="/aero-3.png" className="rounded-[12px] mx-auto" />
//               <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//               Operational Transparency
//               </p>
//               <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">AI-powered damage estimation lowers manual intervention.</p>
//             </div>
//             <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
//               <img src="/aero-4.png" className="rounded-[12px] mx-auto" />
//               <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//               Scalabilty
//               </p>
//               <p class="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">AI-powered damage estimation lowers manual intervention.</p>
//             </div>
//             </div>
//           {/* <p className="text-center font-outfit font-light text-base md:text-2xl text-white/64">
//             The solution automates the documentation process for both land and
//             maritime transport, covering loading, unloading, and transshipment
//             operations.
//           </p> */}
//         </div>
//       </div>
      
     
      
//       {/* ==== Content wrapper ===== */}
//       <div className="relative mt-[100px] z-10 flex flex-col justify-center items-center text-center lg:px-[100px] md:px-[30px] px-[20px]">
      
       
//         <div className="mt-[100px] text-center flex flex-col md:gap-[64px] gap-[40px] max-w-[1000px] mx-auto">
//                   <Heading1 headingGray="bottom" headingWhite="line" />
//                   <Text>
//                   By implementing BarCertCode, ALA has transformed its inventory management, ensuring regulatory compliance while protecting itself from liability.  {" "}
//                     <GradientSpan>
//                       providing a future-proof, scalable, and legally
//                     </GradientSpan>{" "}
//                     <GradientSpan>The solution’s scalability positions it for broader adoption in highly regulated industries,</GradientSpan> optimizing logistics with digital certification at its core.
//                   </Text>
//                 </div>
//         {/* Fumigation process */}
//         {/* <div className="w-full shrink-0 flex flex-col justify-center items-center gap-[50px]">
          
//           <h1 className="font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[32px]/[40px] lg:text-[40px]/[100%] uppercase tracking-wide">
//             The <span className="px-2 text-white">Fumigation Process</span> for
//             export
//           </h1>
//           <FumigationProcess />
//         </div> */}

//         {/* Solution Section */}
//         {/* <SolutionSection /> */}

//         {/* Result Section */}
//         {/* <ResultsSection /> */}

//         {/* ISO Certified */}
//         <ISOCertified />
//       </div>
       
//       {/* container ends */}
//       {/* </div> */}
//     </section>
//   );
// }

// export default InsuranceSection;
import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import { Link } from "react-router-dom";
import Video from "./ui/Video";
import ISOCertified from "./ISOCertified";
import Heading2 from "./ui/Heading2";
import FumigationProcess from "./FumigationProcess";
import SolutionSection from "./MscSolutions";
import ResultsSection from "./MSCResult";

const AerospaceSection = ({ worksectorData }) => {
  const { details, services } = worksectorData;
  
  const challengeDetail = details[2];
  const theSolution = details[6];
  const theSolutionText = details[7];
 
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

      <div className="relative max-w-[1280px] mx-auto z-10">
        {/* The Challenge Section */}
        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] my-[48px]">
          <span className="text-white/[0.64]">{challengeDetail ? challengeDetail.light_heading : "Loading..."}</span> 
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <h3 className="text-center font-raleway text-white font-normal text-xl md:text-[36px] mb-[36px]">
          {challengeDetail ? challengeDetail.dark_heading : "Loading..."}
          </h3>
          <p>
          {challengeDetail ? challengeDetail.second_dark_heading : "Loading..."}
          </p>
        </div>

        {/* Work List Section */}
        <div className="flex flex-col gap-[50px]">
        {details
  .filter((item) => item.__component === "work.work-list")
  .map((item, index) => (
    <div
      key={index}
      style={{
        border: "2px solid transparent",
        background:
          "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
      }}
      className={`shadow-challenge ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"} flex flex-wrap lg:flex-nowrap justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:px-[45px] px-[5px] text-white`}
    >
      {index % 2 === 0 ? (
        // For even-index items (first item, Title comes first)
        <>
          <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
            {item.Title}
          </div>
          <div className="font-outfit font-light text-[24px] md:text-[32px]">
            {item.Description}
          </div>
        </>
      ) : (
        // For odd-index items (second item, Title comes second)
        <>
          <div className="font-outfit font-light text-[24px] md:text-[32px]">
            {item.Description}
          </div>
          <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
            {item.Title}
          </div>
        </>
      )}
    </div>
  ))}

        </div>

        {/* The Solution Section */}
        <h2 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] my-[48px]">
          <span className="text-white/[0.64]">{theSolution ? theSolution.light_heading : "Loading..."}</span> {theSolution ? theSolution.dark_heading : "Loading..."}
        </h2>
        <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
          <p>
          {theSolutionText ? theSolutionText.text : "Loading..."}
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-wrap items-center justify-center gap-16">
            {services.map((service, index) => (
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
        </div>
      </div>

             {/* ==== Content wrapper ===== */}
   <div className="relative mt-[100px] z-10 flex flex-col justify-center items-center text-center lg:px-[100px] md:px-[30px] px-[20px]">
      
       
         <div className="mt-[100px] text-center flex flex-col md:gap-[64px] gap-[40px] max-w-[1000px] mx-auto">
                   <Heading1 headingGray="bottom" headingWhite="line" />
                   <Text>
                   By implementing BarCertCode, ALA has transformed its inventory management, ensuring regulatory compliance while protecting itself from liability.  {" "}
                     <GradientSpan>
                       providing a future-proof, scalable, and legally
                     </GradientSpan>{" "}
                     <GradientSpan>The solution’s scalability positions it for broader adoption in highly regulated industries,</GradientSpan> optimizing logistics with digital certification at its core.
                   </Text>
                 </div>
     

         {/* Solution Section */}
         {/* <SolutionSection /> */}

         {/* Result Section */}
         {/* <ResultsSection /> */}

         {/* ISO Certified */}
         
       
       
    
      <ISOCertified />
      </div>
    </section>
  );
}

export default AerospaceSection;
