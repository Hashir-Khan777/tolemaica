import React from 'react'

const TeamCard = ({ cards }) => {
  return (
    <div className='lg:h-[756px] lg:w-[597px]  min-w-[300px] w-full lg:p-[80px] p-[40px] flex flex-col lg:gap-[35px] gap-[20px] justify-center items-center text-center px-2 bg-amber-200 lg:rounded-[24px] rounded-[12px] border-[1px] border-white overflow-hidden bg-cover bg-center bg-no-repeat'
      style={{
        // backgroundImage:"url('/images/aboutcard1bg.png')"
        backgroundImage: `url(${cards.bgImage})`
      }}

    >
      <img src={cards.image} alt="" className='rounded-full lg:w-[437.5px] w-[256px] h-[256px] lg:h-[437.5px]' />
      <div className='flex flex-col justify-center items-center md:gap-[13.13px] gap-[8px]'>
        <h1 className='px-6 text-white font-outfit font-[500] text-[18px]/[120%] lg:text-[32px]/[120%] tracking-[5%] uppercase text-center'>{cards.name}</h1>
        <p className='text-white font-outfit font-[300] text-[16px]/[17.9px] lg:text-[24px]/[30.63px] tracking-[5%] text-center'>{cards.position}</p>
      </div>
    </div>
  )
}

export default TeamCard


