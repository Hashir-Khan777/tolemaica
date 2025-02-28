import React from 'react'

function Card3({title,description,image}) {
  return (
    <div className=" bg-black/25 border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px]  justify-center items-center text-center">
    <img src={image} alt="card1" className="w-[80%] lg:w-full" />

    <div className="py-[12px] px-[10px] flex flex-col md:gap-[16px] gap-[8px]">
      <h1 className="font-outfit capitalize md:text-[24px]/[30.24px] sm:text-[20px]/[27.24px] text-[18px]/[25.24px] text-center tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">{title}</h1>
      <p className="text-gray-400 font-outfit font-[300] md:text-[20px]/[25.2px] text-[16px]/[18.2px] text-center tracking-[5%]">{description}</p>
    </div>

  </div>
  )
}

export default Card3
