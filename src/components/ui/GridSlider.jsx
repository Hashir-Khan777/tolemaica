"use client";
import GridCard from './GridCard';
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const Cards = [
    {
        title: "TERRITORY MONITORING",
        bgImage: "/images/TeritorryMonitoring.jpg",
        path: "/",
    },
    {
        title: "LOGISTICS",
       bgImage: "/images/grid2.png",
        path: "/",
    },
    {
        title: "MEASUREMENTS",
        bgImage: "/images/grid3.png",
        path: "/",
    },
    {
        title: "TAILORED SERVICES",
        bg: "linear-gradient(145deg,#452a1e,#1d1613,#34302f)",
        textGradient: true,
        path: "/",
    },
    {
        title: "WIP CONTROL",
       bgImage: "/images/wipcontrol.png",
        path: "/",
    },
    {
        title: "COMMERCIAL CONTRACTS",
        bgImage: "/images/grid5.png",
        path: "/",
    },
    {
        title: "FRAUD",
        bgImage: "/images/fraud.png",
        path: "/",
    },
    {
        title: "THEFT",
        bgImage: "/images/theft.png",
    },
    {
        title: "INSURANCE FRAUD",
        bgImage: "/images/insurancefraud.png",
        path: "/",
    },
];


{/* <SwiperSlide key={index}>
    <GridCard />
</SwiperSlide> */}

const ServiceSlider1 = ({ cards }) => {
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
            {Cards.length === 0 && (
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
                {Cards.map((card, index) => (

                    <SwiperSlide key={index}>
                        {
                            card.title === "TAILORED SERVICES" ? (
                                <div className="h-[400px] flex rounded-2xl overflow-hidden border-2 border-white">
                                    <div
                                        className="relative flex flex-col justify-center py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{
                                            background: "linear-gradient(145deg,#452a1e,#1d1613,#34302f)",
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                                        <p className="z-10 text-[48px]/[100%] font-raleway font-[700] tracking-widest text-white text-center font-outfit uppercase flex flex-col">

                                            <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                                tailored
                                            </span>
                                            <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                                Services
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ) : <GridCard  title={card.title} bgImage={card.bgImage} />
                        }

                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="pe-4 flex justify-end items-end gap-[12px] md:gap-[20px] container mt-4">
                <button
                    className="cursor-pointer"
                    aria-label="Scroll Left"
                    ref={prevRef}
                >
                    <img src="/preBtn.svg" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]" />
                </button>
                <button
                    className="cursor-pointer"
                    aria-label="Scroll Right"
                    ref={nextRef}
                >
                    <img src="/nextBtn.svg" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]" />
                </button>
            </div>
        </div>
    );
};

export default ServiceSlider1;

