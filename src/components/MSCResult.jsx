"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";

const ResultsSection = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // Default data if none provided
  const defaultData = [
    {
      value: "8",
      operator: "%",
      description:
        "Containers Experience Damage Or Tampering, Impacting Efficiency.",
    },
    {
      value: "7",
      operator: "%",
      description: "Shipments Face Claims, Often Unrelated To Reported Damage.",
    },
    {
      value: "5",
      operator: "%",
      description:
        "Shipments Require Overseas Verification; Digital Proof Ensures Compliance.",
    },
    {
      value: "50",
      operator: "%",
      description: "Reduction in manual dispute resolution efforts due to automation.",
    },
    {
      value: "60",
      operator: "%",
      description:
        "Decrease in administrative costs per dispute resolution case.",
    },
    {
      value: "40",
      operator: "%",
      description:
        "improvement in operational efficiency with full process automation.",
    },
  ];

  // Use provided data or default
  const resultsData = data || defaultData;

  // Split data for desktop view (showing all at once)

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
      <p className="font-outfit md:text-[24px]/[28px] text-[14px] font-[300] capitalize max-w-xs">
        {item.description}
      </p>
    </div>
  );

  return (
    <div className="text-white w-full py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <Heading1 headingGray="THE" headingWhite="RESULTS" />
        </div>

        {/* Mobile view with swiper */}
        {/* {isMobile && (
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation
              modules={[Navigation]}
              onBeforeInit={(swiper) => setSwiperInstance(swiper)}
              className="mb-8"
            >
              {resultsData.map((item, index) => (
                <SwiperSlide key={index}>
                  {renderResultItem(item)}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="p-2 bg-opacity-20 bg-orange-500 rounded flex justify-center items-center w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-300" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
              </button>
              <button className="p-2 bg-opacity-20 bg-orange-500 rounded flex justify-center items-center w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-300" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>
          </div>
        )} */}

        {/* Desktop view with grid layout */}

        <div>
          <div className="grid grid-cols-3 gap-6">
            {defaultData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {renderResultItem(item)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[100px] text-center flex flex-col md:gap-[64px] gap-[40px]">
          <Heading1 headingGray="bottom" headingWhite="line" />
          <Text>
            Tolemaica's certified digital solution transforms terminal and
            shipping operations, ensuring compliance, minimizing disputes,
            reducing costs, and
            <GradientSpan>
              {" "}
              creating a cost-neutral, transparent, and efficient process{" "}
            </GradientSpan>
            for container management and navigation.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
