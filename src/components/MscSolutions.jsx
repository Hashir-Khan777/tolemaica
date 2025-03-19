// "use client";
// import React from 'react';
// import { useEffect, useState } from 'react';
// import Heading1 from './ui/Heading1';
// import { Text, GradientSpan } from './ui/Text';

// const SolutionSection = ({ data }) => {

//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         // Initial check
//         handleResize();

//         // Add event listener
//         window.addEventListener('resize', handleResize);

//         // Cleanup
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     // Default data if none provided
//     const defaultData = [
//         {
//             title: "THE SOLUTION",
//             description: "Tolemaica's digital solution provides",
//             highlightedText: "legally valid, timestamped and geolocated images",
//             continuationText: "of crucial container transit points, ensuring:",
//             benefitText: "Certified proof of seal integrity to reduce disputes with shippers."
//         },
//         {
//             title: "THE SOLUTION",
//             description: "Tolemaica's digital solution provides",
//             highlightedText: "legally valid, timestamped and geolocated images",
//             continuationText: "of crucial container transit points, ensuring:",
//             benefitText: "Certified proof of seal integrity to reduce disputes with shippers."
//         },
//         {
//             title: "THE SOLUTION",
//             description: "Tolemaica's digital solution provides",
//             highlightedText: "legally valid, timestamped and geolocated images",
//             continuationText: "of crucial container transit points, ensuring:",
//             benefitText: "Certified proof of seal integrity to reduce disputes with shippers."
//         },
//     ];

//     // Use provided data or default
//     const content = data || defaultData;

//     return (
//         <div className="bg-black text-white w-full py-12">
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <div className="text-center mb-8">
//                     {
//                         content.map((card,index) => (
//                             <div className='' key={index}>
//                                 <Heading1 headingGray="the" headingWhite="solutions" />

//                                 <p className="text-sm md:text-base mb-4">
//                                     {card.description} <span className="text-orange-300 font-medium">{card.highlightedText}</span>
//                                     <br className="hidden md:block" /> {card.continuationText}
//                                 </p>

//                                 <p className="text-sm md:text-base mb-6">
//                                     {card.benefitText}
//                                 </p>

//                                 <div className="w-full max-w-md mx-auto h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
//                             </div>
//                         ))
//                     }
//                 </div>

//                 {!isMobile && (
//                     <div className="flex justify-between items-center mt-4">
//                         <button className="p-2 bg-opacity-20 bg-orange-500 rounded flex justify-center items-center w-8 h-8">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-300" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
//                             </svg>
//                         </button>
//                         <button className="p-2 bg-opacity-20 bg-orange-500 rounded flex justify-center items-center w-8 h-8">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-300" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
//                             </svg>
//                         </button>
//                     </div>
//                 )}

//                 {isMobile && (
//                     <div className="flex justify-end space-x-2 mt-4">
//                         <button className="p-2 bg-opacity-20 bg-orange-500 rounded flex justify-center items-center w-8 h-8">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-300" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
//                             </svg>
//                         </button>
//                         <button className="p-2 bg-opacity-20 bg-orange-500 rounded flex justify-center items-center w-8 h-8">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-orange-300" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
//                             </svg>
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SolutionSection;

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
  const [swiperInstance, setSwiperInstance] = useState(null);
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

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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

  return (
    <div className="text-white w-full py-12 flex flex-col md:gap-[64px] gap-[40px]">
      <Heading1 headingGray="the" headingWhite="solution" />
      <div className="container mx-auto px-4 max-w-6xl ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            setSwiperInstance(swiper);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="solution-swiper"
        >
          <SwiperSlide>
            <div className="text-center mb-8 flex flex-col md:gap-[64px] gap-[40px]">
              {/* <Heading1 headingGray="the" headingWhite="solution" /> */}

              <Text>
                Tolemaica's digital solution provides{" "}
                <GradientSpan>
                  legally valid, timestamped and geolocated images
                </GradientSpan>{" "}
                at crucial container transit points, ensuring:
              </Text>
              <Text>
                Certified proof of seal integrity to{" "}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  reduce disputes with shippers.
                </span>
              </Text>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center mb-8">
              {/* <Heading1 headingGray="the" headingWhite="solution" /> */}

              <Text>
                The solution enables{" "}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  legal certification of identity, date, and location
                </span>{" "}
                of all digital data ({" "}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  orders, contracts, forms, documents, etc.
                </span>
                ) to make them legally enforceable, providing
                <span className="text-[#FF9966]">
                  {" "}
                  guarantees to both clients and institutions
                </span>{" "}
                while also ensuring{" "}
                <span className="bg-gradient-to-r to-[#FF9966] from-white bg-clip-text text-transparent">
                  AML (Anti-Money Laundering) compliance
                </span>{" "}
                through{" "}
                <span className="bg-gradient-to-r to-[#FF9966] from-white bg-clip-text text-transparent">
                  Advanced Electronic Signature (AES)
                </span>{" "}
                for every action,
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  {" "}
                  instantly and automatically.
                </span>
              </Text>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center mb-8">
              <Text>
                Legal validity is{" "}
                <span className="text-[#FF9966]">
                  simultaneously extended across all
                </span>{" "}
                relevant areas through{" "}
                <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  multi-certification across multiple TSPs (Trust Service
                  Providers) or CAs
                </span>{" "}
                <span className="bg-gradient-to-r to-[#FF9966] from-white bg-clip-text text-transparent">
                  (Certification Authorities).
                </span>
              </Text>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center mb-8">
              <Text>
                This <span className="text-[#FF9966]">modularity</span> makes
                the solution <span className="text-[#FF9966]">scalable</span>{" "}
                and transforms{" "}
                <span className="bg-gradient-to-r to-[#FF9966] from-white bg-clip-text text-transparent">
                  static processes into dynamic
                </span>{" "}
                ones, where <span className="text-[#FF9966]">new modules</span>{" "}
                can be designed and integrated within{" "}
                <span className="bg-gradient-to-r to-[#FF9966] from-white bg-clip-text text-transparent">
                  AI environments
                </span>{" "}
                to <span className="text-[#FF9966]">process data</span> that
                generate{" "}
                <span className="bg-gradient-to-r to-[#FF9966] from-white bg-clip-text text-transparent">
                  new informational insights previously
                </span>{" "}
                <span className="text-[#FF9966]">
                  unconsidered as necessary.
                </span>
              </Text>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Progress tracker */}
        {/* <div className="flex justify-center items-center my-8">
                    <div className="w-full max-w-md h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
                </div> */}

        {/* Custom navigation */}
        <div
          className={`flex ${
            isMobile ? "justify-end" : "justify-between"
          } items-center mt-4`}
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
            <div class="min-w-[600px] rounded-full h-[4px] mb-4 bg-[#7A7E81]">
              <div
                class="bg-gradient-to-r from-[#BE5D02] to-white h-[4px] rounded-full"
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
