// import React from "react";

// const PartnersSlider = ({ direction = "right", children }) => {
//   // Choose animation based on direction
//   const animationClass = direction === "right" ? "animate-right" : "animate-left";

//   return (
//     <div className="w-full overflow-hidden">
//       <div className={`flex space-x-6 whitespace-nowrap ${animationClass}`}>
//         {children}
//         {children} {/* Duplicate for seamless effect */}
//       </div>
//     </div>
//   );
// };

// export default PartnersSlider;


// import React from "react";

// const PartnersSlider = ({ direction = "left", children }) => {
//   return (
//     <div className="w-full overflow-hidden relative bg-black py-4">
//       {/* Scrolling container */}
//       <div className={`flex gap-5 w-max ${direction === "left" ? "scroll-left" : "scroll-right"}`}>
//         {children}
//         {children} {/* Duplicate for smooth looping */}
//       </div>
//     </div>
//   );
// };

// export default PartnersSlider;

// import React from "react";

// const PartnersSlider = ({ direction = "left", children }) => {
//   return (
//     <div className="relative w-full overflow-hidden bg-black py-6">
//       {/* Scrolling container */}
//       <div className={`flex w-max gap-6 ${direction === "left" ? "scroll-left" : "scroll-right"}`}>
//         {children}
//         {children} {/* Duplicate for smooth looping */}
//       </div>
//     </div>
//   );
// };

// export default PartnersSlider;


import React from "react";

const PartnersSlider = ({ direction = "left", children }) => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-6">
      {/* Scrolling container with duplicate images for seamless effect */}
      <div className={`scroll-container ${direction === "left" ? "scroll-left" : "scroll-right"}`}>
        {children}
        {children} {/* Clone for smooth infinite effect */}
      </div>
    </div>
  );
};

export default PartnersSlider;
