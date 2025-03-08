// "use client";
// import React from "react";
// import Heading1 from "./Heading1";

// const MobileTimeline = ({ cards }) => {
//     return (
//         <div className="container mx-auto px-4">
//             <div className="flex flex-col gap-8">
//                 {/* Heading */}
//                 <div className="text-center mb-8">
//                     <Heading1 headingGray="Tolemaica" headingWhite="Through the Years" />
//                 </div>

//                 {/* Timeline Items */}
//                 <div className="flex flex-col space-y-12">
//                     {cards.map((card, index) => (
//                         <div key={index} className="relative pl-12">
//                             {/* Left side icon and vertical line */}
//                             <div className="absolute left-0 top-0">
//                                 <div className="flex justify-center items-center bg-[#27151a] w-8 h-8 rounded-sm border border-[#FF9966] z-10">
//                                     <img src="/timelineIcon.svg" alt="Timeline icon" className="w-4 h-4" />
//                                 </div>
//                                 {/* Vertical line connecting timeline items */}
//                                 {index < cards.length - 1 && (
//                                     <div className="absolute left-4 top-8 w-px h-full bg-gradient-to-b from-[#FF9966] to-transparent"></div>
//                                 )}
//                             </div>

//                             {/* Year and Title Section */}
//                             <div className="mb-6">
//                                 <h2 className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-Outfit text-3xl font-normal uppercase tracking-wider">
//                                     {card.year}
//                                 </h2>
//                                 <h3 className="text-white font-Outfit font-light text-xl tracking-wide capitalize mt-1">
//                                     {card.title}
//                                 </h3>
//                             </div>

//                             {/* Content Card */}
//                             <div
//                                 className="w-full rounded-xl border border-white p-6 flex flex-col space-y-6">
//                                 {/* Image */}
//                                 <img
//                                     src={card.image}
//                                     alt={`${card.year} - ${card.title}`}
//                                     className="w-full h-64 object-cover rounded-lg"
//                                 />

//                                 {/* Text Content */}
//                                 <div className="font-Outfit font-light text-base space-y-4">
//                                     <p className="text-white/50">{card.text1}</p>
//                                     <p className="text-white/50">{card.text2}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MobileTimeline;

"use client";
import React from "react";
import Heading1 from "./Heading1";

const MobileTimeline = ({ cards }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <Heading1 headingGray="Tolemaica" headingWhite="Through the Years" />
                </div>

                {/* Timeline Items */}
                <div className="relative flex flex-col space-y-12">
                    {/* Continuous vertical line that spans the entire timeline */}
                    {cards.length > 0 && (
                        <div className="absolute left-4 top-4 w-px h-[calc(100%+20px)] bg-gradient-to-b from-[#FF9966] to-white/20"></div>
                    )}

                    {cards.map((card, index) => (
                        <div key={index} className="relative pl-14">
                            {/* Left side icon */}
                            <div className="absolute -left-1 top-0 z-10">
                                <div className="flex justify-center items-center bg-[#27151a] w-[40px] h-[40px] rounded-sm border border-[#FF9966]">
                                    <img src={card.icon} alt="Timeline icon" className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Year and Title Section */}
                            <div className="mb-6">
                                <h2 className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-Outfit text-[20px]/[100%] md:text-[35px]/[40px] font-[400] uppercase tracking-wider">
                                    {card.year}
                                </h2>
                                <h3 className="text-white font-Outfit font-[500] text-[16px]/[160%] md:[25px]/[34px] tracking-wide capitalize mt-1 md:mt-2">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Content Card */}
                            <div
                                className="w-full  p-6 flex flex-col space-y-6"
                                // style={{
                                //     background: "linear-gradient(140deg, #27151a 20%, #191717 40%, #653e33)",
                                // }}
                            >
                                {/* Image */}
                                <img
                                    src={card.image}
                                    alt={`${card.year} - ${card.title}`}
                                    className="w-full"
                                />

                                {/* Text Content */}
                                <div className="font-Outfit font-light space-y-4 text-[14px]/[160%] md:text-[23px]/[200%]">
                                    <p className="text-white/64">{card.text1}</p>
                                    <p className="text-white/64">{card.text2}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Final icon at the end of the timeline */}
                    {cards.length > 0 && (
                        <div className="absolute left-0 bottom-[-36px] z-10">
                            <div className="flex justify-center items-center bg-[#27151a] w-[40px] h-[40px] rounded-sm border border-[#FF9966]">
                                <img src="/timelineicon5.svg" alt="End of timeline" className="w-4 h-4" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileTimeline;