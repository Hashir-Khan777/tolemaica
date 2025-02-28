import React from "react";
import Header from "../components/Header"
import HeroCard from './ui/HeroCard'

function ServiceHero() {
    return (
        <div
            className="relative lg:pb-[100px] w-full min-h-screen py-5 flex flex-col items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("/images/servicesBg.png")',
            }}
        >
            {/* Navbar */}
            <Header />
            {/* Navbar */}

            {/* Hero Content Card */}
            {/* <div className="w-[85%] h-[620px] border-2 border-white rounded-2xl">
                <h1>
                    Give Legal Value to Your Data with DataClick's Certification!
                </h1>
                <p>Digital Certification of Images, Sounds, and Videos</p>
            </div> */}
     <HeroCard />

            {/* Hero Content Card */}

        </div>
    );
}

export default ServiceHero;
