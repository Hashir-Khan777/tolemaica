"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading1 from "../ui/Heading1";
import { Text, GradientSpan } from "../ui/Text";

const IACSlider = ({ data }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    // Use provided data or default
    // const content = data || defaultData;

    return (
        <div className="text-white w-full py-12 flex flex-col md:gap-[64px] gap-[40px]">
            <h1 className="font-raleway text-white/60 font-[400] text-[20px]/[23px] md:text-[40px]/[100%] uppercase tracking-wide">
                ADVANTAGES OF USING{" "} <span className="text-white">IAC</span>{" "}TECHNOLOGY
            </h1>
            <div className="container mx-auto px-4 max-w-6xl my-0 py-0">
                <Swiper
                    // key={isMobile ? "mobile" : "desktop"}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },  // For small screens
                        640: { slidesPerView: 2 },  // For tablets
                        1024: { slidesPerView: 3 }, // For desktops
                    }}
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
                    <SwiperSlide>
                        <div className="h-[400px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#3e2516] to-[#371b1b] px-[24px] py-[32px]">
                            <div className=" py-[12px] w-full flex flex-col gap-[16px] ">
                                <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                    Instant Legal Certification
                                </h1>
                                <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">Obtain legally certified documents instantly with real-time verification, ensuring compliance with international standards.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="h-[400px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#261911] to-[#444241] px-[24px] py-[32px]">
                            <div className="py-[12px] w-full flex flex-col gap-[16px] ">
                                <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                    Post-Quantum Encryption & Blockchain Security
                                </h1>
                                <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">Data certification and verification processes use post-quantum encryption, and every certified data entry can be securely stored via blockchain technology, preventing fraud, forgery, or unauthorized modifications.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="h-[400px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#1e1b19] to-[#4c3428] px-[24px] py-[32px]">
                            <div className="py-[12px] w-full flex flex-col gap-[16px] ">
                                <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                    Globally Recognized Standards
                                </h1>
                                <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">LegalClick meets the highest international compliance requirements, including ISO 27001, GDPR, eIDAS, and eIDAS2 regulations.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="h-[400px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#2a211b] to-[#4e4d4b] px-[24px] py-[32px]">
                            <div className="py-[12px] w-full flex flex-col gap-[16px] ">
                                <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                    Seamless Digital Integration
                                </h1>
                                <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">Easily integrates with existing corporate systems, legal platforms, and cloud storage for efficient workflows through APIs, Libraries, Web Services, and AI-driven data processing & reporting modules.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="h-[400px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#0b0706] to-[#0b0706] px-[24px] py-[32px]">
                            <div className="py-[12px] w-full flex flex-col gap-[16px] ">
                                <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                    Intuitive Mobile & Web Interface
                                </h1>
                                <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">Accessible via web and mobile applications, ensuring a user-friendly experience for businesses, individuals, and public administrations.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="h-[400px] border-white border-[2.24px] rounded-[20px] bg-gradient-to-br from-[#181617] to-[#321f25] px-[24px] py-[32px]">
                            <div className="py-[12px] w-full flex flex-col gap-[16px] ">
                                <h1 className="font-outfit font-[600] text-[24px]/[120%] tracking-wider text-center capitalize  bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                    Verified & Secure Document Storage
                                </h1>
                                <p className="font-outfit font-[200] tracking-wider text-[20px]/[100%] text-white/64">Ensures authenticity and long-term accessibility of certified data with encrypted and secure cloud storage.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Custom navigation */}

                <div className="flex flex-row justify-end space-x-2 mt-5">
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
        </div>
    );
};

export default IACSlider;
