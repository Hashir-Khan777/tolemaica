import React, { useRef } from "react";
import UseCaseHero from "../components/UseCaseHero";
import ISOSection from "../components/ISOCertified";
import Heading1 from "../components/ui/Heading1";
import { GradientSpan, Text } from "../components/ui/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SkyItalia = () => {
  const defaultData = [
    {
      value: "99.6",
      operator: "%",
      description: "Reduction in Legal Disputes",
    },
    // {
    //   value: "€1.5",
    //   operator: "M",
    //   description: "Eliminated in Legal Costs",
    // },
    {
      value: "2",
      operator: "X",
      description: "Increase in business Subscriptions",
    },
  ];
  const impacts = [
    {
      heading: "METRIC",
      points: [
        "Legal Disputes",
        "Legal Costs (€)",
        "Business Plan Revenue",
        "Compliance Enforcement",
        "Time Spent on Disputes",
      ],
    },
    {
      heading: "BEFORE",
      points: [
        "500 lawsuits per year",
        "Legal Disputes",
        "1x (baseline)",
        "Weak",
        "High",
      ],
    },
    {
      heading: "AFTER",
      points: ["2 lawsuits per year", "99.6%", "2x (100% increase)", "Strong", "Low"],
    },
    {
      heading: "IMPACT",
      points: [
        "99.6% Reduction",
        "1.5M Savings",
        "Revenue Doubled",
        "Higher Adherence",
        "efficient Legal Process",
      ],
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const renderResultItem = (item) => (
    <div className="flex flex-col items-center  gap-[10px] p-[10px] text-center min-w-[105px] md:[372px]">
      <h3 className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-outfit ">
        <span className="font-[400] lg:text-[128px]/[100%] text-[40px]/[100%]">
          {item.value}
        </span>
        <span className="lg:text-[100px]/[100%] text-[24px]/[100%] font-[400] md:font-[200]">
          {item.operator}
        </span>
      </h3>
      <p className="text-white font-outfit md:text-[24px]/[28px] text-[14px]/[100%] font-[300] capitalize max-w-xs">
        {item.description}
      </p>
    </div>
  );

  return (
    <div>
      <UseCaseHero
        title="CASE STUDY"
        page="SKY ITALIA"
        text="Enhancing"
        gradientText="Compliance & Revenue"
        secondtext="with Tolemaica"
        image="/skyimage.png"
      />
      <div className="relative bg-black">
        <video
          src="/ourpartners.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          style={{ filter: "blur(40px)" }}
        />
        <div className="max-w-[1280px] relative z-10 py-[100px] px-[20px] md:px-auto mx-auto">
          <h1 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] my-[48px]">
            <span className="text-white/[0.64]">THE</span> CHALLENGE
          </h1>
          <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
            <p>
              Sky Italia offers TV subscriptions for both private users(Family)
              & businesses (Business). Business plans cost over twice as much as
              Family plans, but some commercial venues misused the cheaper
              Family plan to broadcast sports events.
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
                Violators claimed photos were taken when their venue was closed
                to the public.
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
                This led to {" "}
                <span className="font-bold">500 lawsuits per year</span>
              </div>
              <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
                02
              </div>
            </div>
          </div>
          <h1 className="mt-[100px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
            <span className="text-white/[0.64]">THE</span> SOLUTION
          </h1>
          <p className="text-center text-white/64 font-outfit font-light text-base md:text-2xl mb-[48px]">
            Tolemaica introduced a{" "}
            <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              secure, tamper-proof digital certification process
            </span>{" "}
            for inspection photos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/sol1.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Secure Uploads
              </p>
              <p className="font-outfit font-light text-base md:text-xl text-white/64 text-center">
                Real-time uploads to a secure portal
              </p>
            </div>
            <div className="solution-shadow w-[302px] h-[475px] border-2 border-white/64 bg-black/24 backdrop-blur-[200] py-[24px] px-[16px] rounded-[20px]">
              <img src="/sol2.png" className="rounded-[12px] mx-auto" />
              <p className="mt-[24px] mb-[16px] font-outfit text-center font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Automatic Metadata
              </p>
              <p className="font-outfit font-light text-base md:text-xl text-white/64 text-center">
                Automatic timestamps & geolocation for indisputable evidence
              </p>
            </div>
          </div>
          <h1 className="mt-[50px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
            <span className="text-white/[0.64]">THE</span> RESULTS
          </h1>
          <div>
            <div className="grid grid-cols-2 gap-0">
              {defaultData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  {renderResultItem(item)}
                </div>
              ))}
            </div>
          </div>
          <h1 className="mt-[50px] text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
            <span className="text-white/[0.64]">IMPACT</span> OVERVIEW
          </h1>
          <div className="text-white gap-[64px] hidden lg:flex">
            {impacts.map((impact, index) => (
              <div className="relative flex-1">
                <h1 className="mb-8 font-outfit font-light text-2xl text-center py-2 border border-[#FF9966] rounded-full bg-gradient-to-r from-[#7C7C7C] to-[#2D2D2D]">
                  {impact.heading}
                </h1>
                <ul>
                  {impact.points.map((point) => (
                    <li className="mb-4 font-outfit font-light text-xl text-center">
                      {point}
                    </li>
                  ))}
                </ul>
                {index + 1 !== impacts.length ? (
                  <div className="w-[2px] h-[158px] absolute bg-white/20 -right-[10%] bottom-[50%] translate-y-[60%]" />
                ) : null}
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
            // Important: Update navigation when swiper instance is created
            setTimeout(() => {
              // Update swiper after a small delay to ensure DOM is ready
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
                      {impact.heading}
                    </h1>
                    <ul>
                      {impact.points.map((point) => (
                        <li className="mb-4 font-outfit font-light text-xl text-center">
                          {point}
                        </li>
                      ))}
                    </ul>
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
          <div className="mt-16 text-center flex flex-col md:gap-[64px] gap-[40px]">
            <Heading1 headingGray="bottom" headingWhite="line" />
            <Text>
              Tolemaica’s solution transformed Sky Italia’s compliance strategy,{" "}
              <GradientSpan>
                reducing legal battles, cutting costs, and driving long-term
                revenue growth.
              </GradientSpan>
            </Text>
          </div>
          <ISOSection />
        </div>
      </div>
    </div>
  );
};

export default SkyItalia;
