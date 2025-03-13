"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./ui/Card"; // Ensure this path is correct

const SliderComponent = ({ cards }) => {
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
    <div className="container rounded-lg mx-auto">
      {/* Debugging: Check if cards array has data */}
      {cards.length === 0 && (
        <p className="text-center text-red-500">No cards available!</p>
      )}

      <Swiper
        autoplay
        breakpoints={{
          1024: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
        spaceBetween={24}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => setSwiperInstance(swiper)}
        style={{ padding: "15px 0" }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              icon={card.icon}
              title={card.title}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              buttonBorder={card.buttonBorder}
              buttonBg={card.buttonBg}
              buttonTextColor={card.buttonTextColor}
              playButton={card.playButton}
              playButtonLink={card.playButtonLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" flex justify-end items-end gap-4 container mt-4">
        <button
          className="cursor-pointer"
          aria-label="Scroll Left"
          ref={prevRef}
        >
          <img src="/preBtn.svg" className="w-[34px] h-[34px]" alt="" />
        </button>
        <button
          className="cursor-pointer"
          aria-label="Scroll Right"
          ref={nextRef}
        >
          <img src="/nextBtn.svg" className="w-[34px] h-[34px]" alt="" />
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
