import React from 'react'

function Card3({ title, description, image }) {
  return (
    <div className=" bg-black/25 border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px]  justify-center items-center text-center">
      <img src={image} alt="card1" className="w-[80%] lg:w-full" />

      <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
        <h1 className="font-outfit capitalize text-[22px] sm:text-[22px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-gray-400 font-outfit font-[300] text-[18px] md:text-[20px] text-center">
          {description}
        </p>
      </div>

    </div>
  )
}

export default Card3
