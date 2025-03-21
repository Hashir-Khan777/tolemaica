import React from 'react';

function Card3({ title, description, image, gradientColors=["#140902", "#4e2c1c"] }) {
  const backgroundStyle = {
    background: `linear-gradient(180deg, ${gradientColors[0]} 50%, ${gradientColors[1]})`,
  };

  return (
    <div 
      className="w-full md:w-[302px] md:h-[500px] h-[480px] border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px] py-[24px] items-center justify-start text-center"
      style={backgroundStyle}
    >
      <img src={image} alt="card1" className="w-full lg:max-w-[270px] h-[240px] wax-w-[302px]" />

      <div className="py-[12px] px-[10px] flex flex-col gap-[16px]">
        <h1 className="w-[200px] mx-auto px-2 font-outfit capitalize text-[24px]/[120%] tracking-[5%] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
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

