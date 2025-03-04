// import React from "react";
// import Header from "../components/Header"
// import HeroCard from './ui/HeroCard'

// function ServiceHero() {
//     return (
//         <div
//             className="relative lg:pb-[100px] w-full min-h-screen  flex flex-col items-center  bg-cover bg-center bg-no-repeat"
//             style={{
//                 backgroundImage: 'url("/images/servicesBg.png")',
//             }}
//         >
//             {/* Navbar */}
//             <Header />
//             {/* Navbar */}

//             <div
//                 className="z-10 w-[90%] max-w-[1200px] min-h-[400px] lg:h-[620px] border-2 border-white/64 rounded-[24px] backdrop-blur-[10px] p-5 flex flex-col gap-[30px] lg:gap-[50px] justify-center items-center text-center mx-auto my-[30px] lg:my-[50px]"
//                 style={{
//                     background: "rgba(255, 255, 255, 0.04)"
//                 }}
//             >
//                 {/* Heading */}
//                 <h1 className="font-raleway text-white font-[400] capitalize tracking-[5%] max-w-[890px] 
//         text-[28px]/[34px] sm:text-[36px]/[42px] md:text-[48px]/[54px] lg:text-[72px]/[84.53px]">
//                     Give Legal Value To Your Data With <br />\
//                     {/* Gradient heading */}
//                     <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                         DataClick's Certification!
//                     </span>
//                 </h1>

//                 {/* Paragraph */}
//                 <p className="font-raleway text-white font-[400] capitalize tracking-[5%] 
//         text-[20px]/[26px] sm:text-[24px]/[30px] md:text-[30px]/[36px] lg:text-[40px]/[46.96px]">
//                     Digital Certification Of
//                     {/* gradient text */}
//                     <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                         {" "}Images, Sounds, And Videos
//                     </span>
//                 </p>
//             </div>



//         </div>
//     );
// }

// export default ServiceHero;

import React from "react";
import Header from "../components/Header";
import HeroCard from "./ui/HeroCard";

function ServiceHero({ title, gradientTitle, text, gradientText}) {
    return (
        <div
            className="relative lg:pb-[100px] w-full min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat px-3"
            style={{ backgroundImage: 'url("/images/servicesBg.png")' }}
        >
            {/* Navbar */}
            <Header />

            <div
                className="z-10 w-[100%] max-w-[1200px] px-3 min-h-[400px] lg:h-[620px] border-2 border-white/64 rounded-[24px] backdrop-blur-[10px] flex flex-col gap-[30px] lg:gap-[50px] justify-center items-center text-center mx-auto my-[30px] lg:my-[50px]"
                style={{ background: "rgba(255, 255, 255, 0.04)" }}
            >
                {/* Dynamic Heading */}
                <h1 className="font-raleway text-white font-[400] capitalize tracking-[5%] max-w-[890px] 
        text-[28px]/[34px] sm:text-[36px]/[42px] md:text-[48px]/[54px] lg:text-[72px]/[84.53px]">
                    {title} <br />
                    {/* Gradient heading */}
                    <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                        {gradientTitle}
                    </span>
                </h1>

                {/* Dynamic Paragraph */}
                <p className="font-raleway text-white font-[400] capitalize tracking-[5%] 
        text-[20px]/[26px] sm:text-[24px]/[30px] md:text-[30px]/[36px] lg:text-[40px]/[46.96px]">
                    {text}
                    {/* Gradient text */}
                    <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                        {" "}{gradientText}
                    </span>
                </p>
            </div>

            {/* Cards Section */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-[1200px] mt-8">
                {cardsData.map((card, index) => (
                    <HeroCard key={index} {...card} />
                ))}
            </div> */}
        </div>
    );
}

export default ServiceHero;

