import React from "react";
import Header from "../components/Header"
import HeroCard from './ui/HeroCard'

function ServiceHero() {
    return (
        <div
            className="relative lg:pb-[100px] w-full min-h-screen  flex flex-col items-center  bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("/images/servicesBg.png")',
            }}
        >
            {/* Navbar */}
            <Header />
            {/* Navbar */}


            <HeroCard />



        </div>
    );
}

export default ServiceHero;
