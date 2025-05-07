// import React from "react";
// import Header from "./Header";
// import IacHeroCard from "./ui/iacHeroCard";

// function IacTechHero() {
//   return (
//     <div className="relative overflow-hidden h-screen pb-[100px] w-full flex flex-col lg:gap-[64px] gap-[40px] lg:px-[100px] md:px-[50px] px-[20px]">
//       {/* Background Video */}
//       <video
//         src="/iac-techBg.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         webkit-playsinline
//         className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//       ></video>

//       {/* Gradient Overlay (Will only cover the background) */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0,0,0,0.4) 80%, rgba(0,0,0,1))",
//         }}
//       ></div>

//       {/* Navbar (Ensuring it's above the overlay) */}
//       <div className="relative z-50 w-full md:pt-[40px]">
//         <Header />
//       </div>

//       {/* Hero Content (Ensuring it's above the overlay) */}
//       <div className="relative z-10 flex flex-1">
//         <IacHeroCard />
//       </div>
//     </div>
//   );
// }

// export default IacTechHero;
import React, { useState, useEffect } from "react";
import Header from "./Header";
import IacHeroCard from "./ui/iacHeroCard";

function IacTechHero() {
  const [bgVideoUrl, setBgVideoUrl] = useState(""); // Store background video URL
  const [headingData, setHeadingData] = useState({
    colored_heading: "",
    heading: "",
    iac_image: "",
  });

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/iachero?populate=*`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const bgVideo = data.data.bg_video?.url; // Get the background video URL
        const heading = {
          colored_heading: data.data.colored_heading,
          heading: data.data.heading,
          iac_image: data.data.image?.url
        };

        setBgVideoUrl(bgVideo);
        setHeadingData(heading);
      })
      .catch((err) => {
        console.error("Error fetching IAC Hero data:", err);
      });
  }, []);

  return (
    <div className="relative overflow-hidden h-screen pb-[100px] w-full flex flex-col lg:gap-[64px] gap-[40px] lg:px-[100px] md:px-[50px] px-[20px]">
      {/* Background Video */}
      <video
        src={bgVideoUrl} // Dynamically set the background video URL
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>

      {/* Gradient Overlay (Will only cover the background) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 80%, rgba(0,0,0,1))",
        }}
      ></div>

      {/* Navbar (Ensuring it's above the overlay) */}
      <div className="relative z-50 w-full md:pt-[40px]">
        <Header />
      </div>

      {/* Hero Content (Ensuring it's above the overlay) */}
      <div className="relative z-10 flex flex-1">
        {/* Pass dynamic heading to the HeroCard */}
        <IacHeroCard headingData={headingData} />
      </div>
    </div>
  );
}

export default IacTechHero;

