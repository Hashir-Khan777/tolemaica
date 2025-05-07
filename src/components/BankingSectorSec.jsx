import React, { useRef } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import ISOCertified from "./ISOCertified";
import SolutionSection from "./MscSolutions";
import PhaseAccor from "./PhaseAccor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BankingSectorSection = ({ worksectorData }) => {
  const { details, services } = worksectorData;
  
  const ensureDetails = details[3];
  const solutionHeading = details[16];
  const conceptProofPara = details[15];
  const conceptProof = details[14];
  const theBottomLine = details[12];
  const theBottomLinePara = details[13];
  const solutionSlider = details.filter(item => item.__component === "common.solution-slider");
  const phases = details.filter(item => 
    item.__component === "common.phases" && 
    item.Heading?.light_heading?.toUpperCase().includes("PHASE")
  );
  const benefits = details.filter(item => 
    item.__component === "common.phases" && 
    item.Heading?.dark_heading?.toUpperCase().includes("BENEFITS")
  );

  const impacts = details.filter(item => 
    item.__component === "common.phases" && 
    item.Heading?.light_heading?.toUpperCase().includes("IMPACT")
  );
  const workList = details.filter(item => item.__component === "work.work-list");
 
  if (!worksectorData) {
    return <div className="bg-black">Loading...</div>; // Display loading message until data is available
  }

 /*  const impacts = [
    {
      heading: "Regulatory Compliance & Legal Validity",
      points: [
        "✅ Regulatory Compliance: Meets KYC, AML, Onboarding, and eIDAS standards.",
        "🔒 Legally Certified: Uses AGID-accredited TSPs for recognized digital transactions.",
        "✉️ Beyond 3FA: Replaces OTPs and email verification with Advanced Electronic Signature (FEA).",
        "⚖️ Legal Protection: Shifts burden of proof to users, preventing identity fraud disputes.",
      ],
    },
    {
      heading: "Enhanced Security & Certified Data Integrity",
      points: [
        "🔐 IAC Protection: Ensures full customer data security under eIDAS standards.",
        "⚡ Real-Time Certification: Transactions are verified before entering the blockchain.",
        "🛡️ Prevents Tampering: IAC guarantees data authenticity before blockchain encoding.",
        "🌍 Secure Across Jurisdictions: Blocks unauthorized modifications from intermediary layers.",
      ],
    },
    {
      heading: "Modularity, Scalability & Interoperability",
      points: [
        "🔄 API-Compatible: Supports both centralized and decentralized systems.",
        "🔗 Seamless Integration: Works with existing infrastructures and compliance frameworks.",
        "🛠️ Modular & Scalable: Allows upgrades without disrupting the blockchain.",
        "🌍 High Interoperability: Meets evolving RegTech and SupTech demands.",
      ],
    },
  ]; */

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative overflow-hidden bg-black w-full py-[100px] flex flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      <div className="max-w-[1280px] relative z-10 overflow-auto w-full mx-auto px-[20px] py-[40px] text-center">
        {/* Solution Section */}
        <SolutionSection data={solutionSlider}/>

        {/* Cards */}
        <div className="">
          <h1 className="mt-[100px] text-center font-raleway text-white/[0.64]  font-normal text-xl md:text-[40px] mb-[48px] uppercase">
          {ensureDetails ? ensureDetails.light_heading : "Loading..."}
            <span className="text-white px-2">
            {ensureDetails ? ensureDetails.dark_heading : "Loading..."}
            </span>{" "}
            
          </h1>

          {/* <p className="text-center text-white/64 font-outfit font-light text-base md:text-2xl mb-[48px]">
                        Tolemaica introduces a certified digital solution that ensures
                        complete traceability by capturing{" "}
                        <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                            legally valid, timestamped, and geolocated images
                        </span>{" "}
                        at both arrival and departure. The system records:
                    </p> */}

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
    </div>
  ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-16">
             {/* Map through the next 2 services for the second row */}
  {services.slice(3, 5).map((service, index) => (
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
    </div>
  ))}
            </div>
            <p className="text-center font-outfit font-light text-base md:text-2xl max-w-[1000px] mx-auto text-white/64 my-[100px]">
            {ensureDetails ? ensureDetails.second_dark_heading : "Loading..."}
            </p>
          </div>
        </div>
        {/* === Cards End ==== */}

        {/* Phases */}
        <PhaseAccor data={phases}/>

        {/* Impact Section Here */}
        <h1 className="mt-[100px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
          <span className="text-white/[0.64]">THE</span> IMPACT
        </h1>
        <div className="text-white gap-[64px] hidden lg:flex">
          {impacts.map((impact, index) => (
            <div className="relative flex-1 lg:opacity-30 hover:opacity-100">
              <h1 className="mb-8 font-outfit font-light text-2xl text-center py-2 px-16 border border-[#FF9966] rounded-full bg-gradient-to-r from-[#7C7C7C] to-[#2D2D2D]">
              {impact ? impact.Heading.dark_heading : "Loading..."}
              </h1>
              <ul 
               dangerouslySetInnerHTML={{ __html: impact.Description	 }}
               >
                
              </ul>
            </div>
          ))}
        </div>

        <div className="block lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
      // Add this callback to properly connect the buttons
      setTimeout(() => {
        if (prevRef.current && nextRef.current) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }, 100);
    }}
            modules={[Navigation]}
            className="solution-swiper"
          >
            {impacts.map((impact) => (
              <SwiperSlide>
                <div className="text-white relative flex-1">
                  <h1 className="mb-8 font-outfit font-light text-2xl text-center py-2 border border-[#FF9966] rounded-full bg-gradient-to-r from-[#7C7C7C] to-[#2D2D2D]">
                  {impact ? impact.Heading.dark_heading : "Loading..."}
                  </h1>
                  <div
                   dangerouslySetInnerHTML={{ __html: impact.Description	 }}
                  >
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-3 justify-end">
            <button className="cursor-pointer" ref={prevRef}>
              <img
                src="/preBtn.svg"
                alt="Previous"
                className="md:w-[50px] md:h-[50px] w-[33px] h-[33px]"
              />
            </button>
            <button className="cursor-pointer" ref={nextRef}>
              <img
                src="/nextBtn.svg"
                alt="Next"
                className="md:w-[50px] md:h-[50px] w-[33px] h-[33px]"
              />
            </button>
          </div>
        </div>

        {/* The Challenge section */}
        <div className="mt-[100px]">
          <div className="flex flex-col gap-[50px]">
          {details
  .filter((item) => item.__component === "work.work-list")
  .slice(0, 4)
  .map((item, index) => (
    <div
      key={index}
      style={{
        border: "2px solid transparent",
        background:
          "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
      }}
      className={`${index % 2 === 0 ? "shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white" : "shadow-challenge-2 flex lg:flex-row flex-col-reverse lg:flex-nowrap lg:justify-end lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pr-[45px] px-[5px] text-white"} `}
    >
      {index % 2 === 0 ? (
        // For even-index items (first item, Title comes first)
        <>
          
          <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
          {item.Title}
              </div>
              <div className="flex flex-col gap-[16px]">
                <h1 className="font-outfit font-light text-[24px] md:text-[32px]">
                {item.Description}
                </h1>
                <p className="font-outfit text-[24px]/[28px] font-[300] tracking-wide text-white/64">
                {item.Details}
                </p>
              </div>

         
        </>
      ) : (
        // For odd-index items (second item, Title comes second)
        <>
          <div className="flex flex-col lg:justify-end justify-center lg:items-end items-center gap-[16px]">
                <h1 className="font-outfit font-light text-[24px] md:text-[32px]">
                {item.Description}
                </h1>
                <p className="font-outfit text-[24px]/[28px] font-[300] tracking-wide text-white/64">
                {item.Details}
                </p>
              </div>

           
          <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
          {item.Title}
              </div>
        </>
      )}
    </div>
  ))}
          </div>
          {/* Bottom Line */}
          <div className="mt-[100px] text-center flex flex-col md:gap-[64px] gap-[40px] max-w-[1000px] mx-auto">
            
            <Heading1 headingGray={theBottomLine ? theBottomLine.light_heading : "Loading..."} headingWhite={theBottomLine ? theBottomLine.dark_heading : "Loading..."} />
                  <Text>
                  {theBottomLinePara ? theBottomLinePara.text : "Loading..."}{" "}
                    <GradientSpan>
                    {theBottomLinePara ? theBottomLinePara.colored_text : "Loading..."}
                    </GradientSpan>{" "}
              <GradientSpan> {theBottomLinePara ? theBottomLinePara.second_text : "Loading..."}</GradientSpan> 
                  </Text>
          </div>
        </div>
      </div>

      {/* Hero secton Again */}

      <div className="relative z-10 w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat lg:px-[100px]  md:px-[50px] px-[20px]">
        <video
          src="/usecasehero.mov"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        ></video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 80%, rgba(0,0,0,1))",
          }}
        ></div>

        <div className="flex flex-1 justify-center items-center">
          <div className="shadow-header relative z-10 w-[100%] lg:w-[1200px] max-w-[1200px] md:h-[620px] h-[434px] border-[2px] border-white/64 rounded-[12px] md:rounded-[24px] backdrop-blur-[16px] flex flex-col  justify-center items-center text-center mx-auto my-[30px] lg:my-[50px] py-[100px] px-[24px]">
            {/* {image ? (
                            <img src={image} width="90px" className="absolute right-6 top-6" />
                        ) : null} */}
            <video
              src="/usecasebg.mov"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover -z-2 pointer-events-none rounded-[12px] md:rounded-[24px]"
            ></video>
            <div
              className="absolute inset-0 rounded-[12px] md:rounded-[24px] -z-1 w-full h-full"
              style={{ background: "rgb(4, 4, 4, 0.5)" }}
            ></div>
            <div className="flex flex-col gap-[32px]">
              <div className="max-w-[894px] mx-auto">
                <h1 className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal text-2xl text-center">
                  {/* <span className="px-10">{title}</span> */}
                </h1>
                <h1 className="font-raleway text-white text-center font-[400] capitalize text-[28px] sm:text-[36px] md:text-[40px]">
                  <span className="px-10"> {conceptProof ? conceptProof.light_heading : "Loading..."}</span>
                </h1>
              </div>
              <div className="h-0.5 bg-white/[0.2] w-[90%] mx-auto" />
              <p
                className="z-999 font-raleway text-white text-center font-[400] capitalize tracking-[5%] 
      text-[30px]/[100%] md:text-[40px]/[100%] lg:text-[72px]/[100%] md:mx-[32px]"
              >
                {/* {text} */}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                {conceptProof ? conceptProof.dark_heading : "Loading..."}
                </span>{" "}
                {/* {secondtext} */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] z-10 relative overflow-auto w-full mx-auto px-[20px] py-[40px] text-center">
        <div className="flex flex-col  gap-[16px]">
          <Text>
          {conceptProofPara ? conceptProofPara.text : "Loading..."}{" "}
            <GradientSpan>
            {conceptProofPara ? conceptProofPara.colored_text : "Loading..."}{" "}
              </GradientSpan> 
           
           
          </Text>

          <Text>
            <GradientSpan>{conceptProofPara ? conceptProofPara.second_text : "Loading..."}{" "}
            </GradientSpan>{" "}
          </Text>
        </div>

        {/* ===== Solution Section ===== */}
        <div className="p-4 mx-auto mt-8 lg:max-w-[1280px] w-full">
          <h1 className="mt-[100px] text-center font-raleway text-white/[0.64]  font-normal text-xl md:text-[40px] mb-[48px] uppercase">
          {solutionHeading ? solutionHeading.light_heading : "Loading..."}
            <span className="text-white px-2"> {solutionHeading ? solutionHeading.dark_heading : "Loading..."}</span>
          </h1>

          <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-4">
            <div className="w-full max-w-4xl mx-auto flex flex-row justify-center items-center">
              {/* Desktop View */}
              <div className="hidden w-full md:flex flex-col justify-center items-center text-white lg:w-[856px] md:w-[856px] md:h-[450px] border-[2px] border-white/64 rounded-[15px] px-[16px] py-[32px]">
                <div className=" flex flex-row justify-between items-center lg:w-[792px] w-full mx-auto  text-center px-[50px] ">
                  <span className="w-[132px] text-[64px]/[100%] font-[400] font-outfit  text-orange-200 mb-6">
                  {workList ? workList[4].Title : "Loading..."}
                  </span>
                  <div className="h-[2px] w-[196px] bg-white/20 self-center  mx-4"></div>
                  <span className="w-[132px] text-[64px]/[100%] font-[400] font-outfit  text-orange-200 mb-6">
                  {workList ? workList[5].Title : "Loading..."}
                  </span>
                  <div className="h-[2px] w-[196px] bg-white/20 self-center mx-4"></div>
                  <span className="w-[132px] text-[64px]/[100%] font-[400] font-outfit  text-orange-200 mb-6">
                  {workList ? workList[6].Title : "Loading..."}
                  </span>
                </div>

                <div className=" flex flex-row justify-between items-center lg:w-[792px] w-full mx-auto  text-center px-[20px] ">
                  <p className="md:w-[132px] font-outfit text-[20px]/[28px] tracking-wide text-center font-extralight">
                  {workList ? workList[4].Description : "Loading..."}{" "}
                  </p>
                  <p className="md:w-[132px] font-outfit text-[20px]/[28px] tracking-wide text-center font-extralight">
                  {workList ? workList[5].Description : "Loading..."}{" "}
                  </p>
                  <p className="md:w-[132px] font-outfit text-[20px]/[28px] tracking-wide text-center font-extralight">
                  {workList ? workList[6].Description : "Loading..."}{" "}
                  </p>
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden min-w-[316px] w-full flex flex-row justify-start items-start border-[2px] border-white/64 rounded-[15px] text-white px-[16px] py-[32px]">
                <div className="pl-5 flex flex-col justify-start items-start gap-[16px] mx-auto  text-center p-[10px] ">
                  <span className="w-[22px] text-[40px]/[100%] font-[400] font-outfit  text-orange-200 mb-6">
                  {workList ? workList[4].Title : "Loading..."}
                  </span>
                  <div className="w-[2px] h-[24px] bg-white/20 self-center  mx-4"></div>
                  <span className="w-[22px] text-[40px]/[100%] font-[400] font-outfit  text-orange-200 mb-6">
                  {workList ? workList[5].Title : "Loading..."}
                  </span>
                  <div className="w-[2px] h-[24px] bg-white/20 self-center mx-4"></div>
                  <span className="w-[22px] text-[40px]/[100%] font-[400] font-outfit  text-orange-200 mb-6">
                  {workList ? workList[6].Title : "Loading..."}
                  </span>
                </div>

                <div className="flex flex-col gap-[46px] justify-between items-center  w-[95%] mx-auto  text-center px-[20px] py-[10px]">
                  <p className="w-[163px] h-[60px] font-outfit text-[20px]/[28px] tracking-wide text-center font-extralight">
                  {workList ? workList[4].Description : "Loading..."}{" "}
                  </p>
                  <p className="w-[163px] h-[60px] font-outfit text-[20px]/[28px] tracking-wide text-center font-extralight">
                  {workList ? workList[5].Description : "Loading..."}{" "}
                  </p>
                  <p className="w-[163px] h-[60px] font-outfit text-[20px]/[28px] tracking-wide text-center font-extralight">
                  {workList ? workList[6].Description : "Loading..."}{" "}
                  </p>
                </div>
                {/* <div className="flex items-start mb-6">
                                    <span className="text-4xl font-light text-orange-200 mr-6">1</span>
                                    <p className="text-base">Apply Library &amp; Web Service for E-Signatures</p>
                                </div>

                                <div className="flex items-start mb-6">
                                    <span className="text-4xl font-light text-orange-200 mr-6">2</span>
                                    <p className="text-base">Add API for Legal Certification</p>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-4xl font-light text-orange-200 mr-6">3</span>
                                    <p className="text-base">Get FEA Authentication &amp; Verification</p>
                                </div> */}
              </div>
            </div>

            <div className="lg:w-[392px] md:w-[40%] w-full h-[450px] border-[2px] border-white/64 rounded-[15px] py-[32px] px-[16px] min-w-[316px] flex flex-col gap-[32px]">
              <h1 className=" text-center font-raleway text-white/[0.64]  font-normal text-xl md:text-[40px] uppercase">
              {benefits ? benefits[0].Heading.light_heading : "Loading..."}
                <span className="text-white px-2">{benefits ? benefits[0].Heading.dark_heading : "Loading..."}</span>
              </h1>
              <p
                   
                  dangerouslySetInnerHTML={{ __html: benefits[0].Description	 }}
                />
              

              {/* <ul className="space-y-4">
                                {keyBenefits.map((benefit, index) => (
                                    <li key={index} className="text-amber-500">{benefit}</li>
                                ))}
                            </ul> */}
            </div>
          </div>
        </div>
        {/* ===== Solution Section ===== */}

        {/* Iso Certified */}
        <ISOCertified />
      </div>

      {/* <div className="md:container px-[20px] md:px-auto mx-auto"> */}
    </section>
  );
}

export default BankingSectorSection;
