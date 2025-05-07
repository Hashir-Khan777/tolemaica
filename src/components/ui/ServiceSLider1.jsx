"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card3 from './Card3'; // Ensure this path is correct

const ServiceSlider1 = ({ cards}) => {
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
    <div
      className="container rounded-lg mx-auto"
    >
      {/* Debugging: Check if cards array has data */}
      {cards.length === 0 && (
        <p className="text-center text-red-500">No cards available!</p>
      )}

      <Swiper
        autoplay
        breakpoints={{
          1100: { slidesPerView: 3 },
          570: { slidesPerView: 2 },
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
            <Card3 image={card.image.url}
            title={card.heading.dark_heading} 
            description={card.paragraph}

            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pe-4 flex justify-end items-end gap-4 container mt-4">
        <button
          className="cursor-pointer"
          aria-label="Scroll Left"
          ref={prevRef}
        >
          <img src="/preBtn.svg" alt="" className="w-[32px] h-[32px]" />
        </button>
        <button
          className="cursor-pointer"
          aria-label="Scroll Right"
          ref={nextRef}
        >
        <img src="/nextBtn.svg" alt="" className="w-[32px] h-[32px]" />
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider1;
