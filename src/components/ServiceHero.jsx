import React from "react";
import Header from "../components/Header";

function ServiceHero({ title, gradientTitle, text, gradientText }) {
    return (
        <div
            className="relative lg:pb-[100px] w-full min-h-screen flex flex-col md:gap-[60px] gap-[30px] items-center bg-cover bg-center bg-no-repeat lg:px-[100px]  md:px-[50px] px-[20px] pb-[200px]"
            style={{ backgroundImage: 'url("/images/servicesBg.png")' }}
        >
            {/* Navbar */}
            <Header />

            <div
                className="z-10 w-[100%] max-w-[1200px] md:h-[620px] h-[434px] border-[2px] border-white/64 rounded-[12px] md:rounded-[24px] backdrop-blur-[16px] flex flex-col  justify-center items-center text-center mx-auto my-[30px] lg:my-[50px] py-[100px] px-[24px]"
                style={{ background: "rgba(255, 255, 255, 0.04)" }}
            >

                <div className=" flex flex-col gap-[64px] lg:gap-[100px]">
                    {/* Dynamic Heading */}
                    <div className="max-w-[894px]">
                        <h1 className=" font-raleway text-white text-center tracking-[5%] font-[400] capitalize text-[28px]/[100%] sm:text-[36px]/[100%] md:text-[48px]/[100%] lg:text-[72px]/[100%] flex flex-col">
                            <span className="px-10">{title}</span>
                            {/* Gradient heading */}
                            <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                                {gradientTitle}
                            </span>
                        </h1>
                    </div>

                    {/* Dynamic Paragraph */}
                    <p className="font-raleway text-white/64 text-center font-[400] capitalize tracking-[5%] 
        text-[16px]/[100%] sm:text-[24px]/[100%] md:text-[30px]/[100%] lg:text-[40px]/[100%]">
                        {text}
                        {/* Gradient text */}
                        <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                            {" "}{gradientText}
                        </span>
                    </p>
                </div>

            </div>

        </div>
    );
}

export default ServiceHero;

