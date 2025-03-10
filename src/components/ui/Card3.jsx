// import React from 'react'

// function Card3({ title, description, image }) {
//   return (
//     <div className=" w-full md:w-[302px] h-[450px] border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px]  justify-center items-center text-center" style={{
//       background:"linear-gradient(180deg,#140902 50%,#4e2c1c)"
//     }}>
//       <img src={image} alt="card1" className="w-[250px] h-[200px]" />

//       <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
//         <h1 className="font-outfit capitalize text-[22px] sm:text-[22px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//           {title}
//         </h1>
//         <p className="text-gray-400 font-outfit font-[300] text-[18px] md:text-[20px] text-center">
//           {description}
//         </p>
//       </div>

//     </div>
//   )
// }

// export default Card3

import React from 'react';

function Card3({ title, description, image, gradientColors=["#140902", "#4e2c1c"] }) {
  const backgroundStyle = {
    background: `linear-gradient(180deg, ${gradientColors[0]} 50%, ${gradientColors[1]})`,
  };

  return (
    <div 
      className="w-full md:w-[302px] md:h-[450px] h-[480px] border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px] justify-center items-center text-center py-[24px]"
      style={backgroundStyle}
    >
      <img src={image} alt="card1" className="w-[250px] h-[200px]" />

      <div className="py-[12px] px-[10px] flex flex-col gap-[16px]">
        <h1 className=" px-2 font-outfit capitalize text-[24px]/[120%] tracking-[5%] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {title}
        </h1>
        <p className=" px-2 text-white/64 font-outfit font-[200] text-[20px]/[120%] text-center tracking-[5%]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card3;

