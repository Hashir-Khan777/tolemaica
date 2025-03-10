import React from "react";
import Header from "./Header";
import IacHeroCard from './ui/iacHeroCard'

function IacTechHero() {
    return (
        <div className="relative overflow-hidden w-full flex flex-col pb-[50px]">
            {/* Background Video */}
            <video
                src="/iac-techBg.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            ></video>

            {/* Gradient Overlay (Will only cover the background) */}
            <div className="absolute inset-0" style={{
                background:"linear-gradient(180deg, rgba(0,0,0,0.4) 80%, rgba(0,0,0,1))"
            }}></div>

            {/* Navbar (Ensuring it's above the overlay) */}
            <div className="relative z-50 w-full md:px-[60px] px-[20px] md:pt-[40px]">
                <Header />
            </div>

            {/* Hero Content (Ensuring it's above the overlay) */}
            <div className="relative z-10">
                <IacHeroCard/>
            </div>
        </div>
    );
}

export default IacTechHero;
