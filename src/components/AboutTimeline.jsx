"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TimeLineCard from "./ui/TimeLineCard";
import Heading1 from "./ui/Heading1";

const DeskTopTimeline = ({ cards }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="container mx-auto rounded-lg px-4">
      {/* Debugging: Check if cards array has data */}
      {cards.length === 0 && (
        <p className="text-center text-red-500">No cards available!</p>
      )}

      <div className="flex flex-col  gap-[64px]">
        {/* Heading */}
        <div className="text-center">
          <Heading1 headingGray="Tolemaica" headingWhite="Through the Years" />
        </div>

        <div className="flex justify-center items-center gap-[10px]">
          <button
            className="mt-[200px] cursor-pointer"
            aria-label="Scroll Left"
            ref={prevRef}
          >
            <img
              src="/preBtn.svg"
              alt="Previous Button"
              className="w-[64px] h-[64px]"
            />
          </button>

          {/* Swiper Section */}
          <Swiper
            autoplay
            breakpoints={{
              1100: { slidesPerView: 1 },
              570: { slidesPerView: 1 },
              320: { slidesPerView: 1 },
            }}
            spaceBetween={24}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            modules={[Navigation]}
            onBeforeInit={(swiper) => setSwiperInstance(swiper)}
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center gap-[64px]">
                  {/* Year and Title Section */}
                  <div className="flex flex-row gap-[24px] w-full justify-center items-center">
                    <div className="p-[10px] font-Outfit flex flex-col gap-[10px]">
                      <h1 className="whitespace-nowrap bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-Outfit text-[64px] font-[400] uppercase tracking-[5%]">
                        {card.year}
                      </h1>
                      <h3 className="w-[164px] text-white font-Outfit font-[300] text-[24px] tracking-[5%] capitalize text-wrap">
                        {card.title}
                      </h3>
                    </div>
                    <div className="w-full h-[1px] rounded-full bg-gradient-to-r from-[#df782d] to-white"></div>
                  </div>

                  {/* Timeline Card */}
                  <TimeLineCard
                    image={card.image}
                    text1={card.text1}
                    text2={card.text2}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          {/* <div className="flex gap-[24px] justify-end items-end"> */}
          {/* <button
                        className="cursor-pointer"
                        aria-label="Scroll Left"
                        ref={prevRef}
                    >
                        <img src="/preBtn.svg" alt="Previous Button" className="w-[64px] h-[64px]" />
                    </button> */}
          <button
            className="mt-[200px] cursor-pointer"
            aria-label="Scroll Right"
            ref={nextRef}
          >
            <img
              src="/nextBtn.svg"
              alt="Next Button"
              className="w-[64px] h-[64px]"
            />
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default DeskTopTimeline;
