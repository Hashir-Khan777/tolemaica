// import React from "react";

// const Text = ({ children }) => {
//   return (
//     <p className="text-gray-400 text-[18px] text-center md:text-[20px] max-w-[1184px] px-4">
//       {children}
//     </p>
//   );
// };

// const GradientSpan = ({ children }) => {
//   return (
//     <>
//       <span className="text-[18px] md:text-[20px] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-normal leading-[1] tracking-normal">
//         {children}
//       </span>
//       {/* <span className="text-[18px] md:text-[20px] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//       {children}
//     </span> */}
//     </>

//   );
// };

// export { Text, GradientSpan };

import React from "react";

const Text = ({ children }) => {
  return (
    <p className="text-gray-400 text-[18px] text-center md:text-[24px]/[28px] max-w-[1000px] px-4 tracking-[5%] font-[300] mx-auto">
      {children}
    </p>
  );
};

const GradientSpan = ({ children }) => {
  return (
    <span className="text-[18px] text-center md:text-[24px]/[28px] max-w-[1000px] tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export  {GradientSpan,Text};

