"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";

const SolutionSection = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

  // Default data if none provided
  const defaultData = [
    {
      title: "THE SOLUTION",
      description: `Tolemaica's digital solution provides <GradientSpan></GradientSpan> at crucial container transit points, ensuring:`,
    },
    {
      title: "THE SOLUTION",
      description: "Tolemaica's digital solution provides",
    },
    {
      title: "THE SOLUTION",
      description: "Tolemaica's digital solution provides",
    },
    {
      title: "THE SOLUTION",
      description: "Tolemaica's digital solution provides",
    },
  ];

  // Use provided data or default
  const content = data || defaultData;
  const solutionData = data?.[0]?.Solution_Details || defaultData;

  return (
    <div className="text-white w-full py-12 flex flex-col md:gap-[64px] gap-[40px]">
      <Heading1 headingGray="the" headingWhite="solution" />
      <div className="container mx-auto px-4 max-w-6xl ">
        <Swiper
          key={isMobile ? "mobile" : "desktop"}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Navigation]}
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
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="solution-swiper"
        >
         
         {solutionData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center mb-8 flex flex-col md:gap-[64px] gap-[40px]">
                <Text>
                  {item.text && (
                    <>
                      {item.text}
                      <GradientSpan>{item.colored_text}</GradientSpan> {" "}
                      {item.second_text && (
                    <span className="text-[#FF9966]">{item.second_text}</span>
                  )}
                    </>
                  )}
                </Text>
                 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation */}
        <div
          className={`flex ${isMobile ? "justify-end" : "justify-between"} items-center mt-4`}
        >
          {!isMobile && (
            <button className="cursor-pointer" ref={prevRef}>
              <img
                src="/preBtn.svg"
                alt="Previous"
                className="md:w-[50px] md:h-[50px] w-[33px] h-[33px]"
              />
            </button>
          )}

          {/* Page indicator */}
          <div className="md:flex hidden justify-center mt-4">
            <div className="min-w-[600px] rounded-full h-[4px] mb-4 bg-[#7A7E81]">
              <div
                className="bg-gradient-to-r from-[#BE5D02] to-white h-[4px] rounded-full"
                style={{ width: `${(activeIndex + 1) * 25}%` }}
              ></div>
            </div>
            <div className="flex"></div>
          </div>

          {isMobile && (
            <div className="flex space-x-2">
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
          )}

          {!isMobile && (
            <button className="cursor-pointer" ref={nextRef}>
              <img
                src="/nextBtn.svg"
                alt="Next"
                className="md:w-[50px] md:h-[50px] w-[33px] h-[33px]"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
