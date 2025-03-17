import React from 'react'
import { Text, GradientSpan } from '../ui/Text'

const FumigationCard = ({ gradientText1, gradientText2, gradientText3, Text, background }) => {
    return (
        <div className='lg:w-[280px]  w-[200px] md:h-[280px] border-[2px]  border-white/64 rounded-[20px] flex md:flex-col  justify-center items-center py-[12px] px-[24px]'
            style={{
                background: `${background}`
            }}>
            <GradientSpan>{gradientText1}</GradientSpan>
            {
                gradientText2 ? <GradientSpan>{gradientText2}</GradientSpan> : null
            }
            <p className='font-[300] md:text-[24px]/[28px] text-[16px]/[100%] tracking-[5%] font-outfit text-white/64'><GradientSpan>{gradientText3}</GradientSpan>{Text}</p>
        </div>
    )
}

const FumigationCard2 = ({ gradientText1, gradientText2, gradientText3, Text, background }) => {
    return (
        <div className='sm:w-[90%]  w-[280px] border-[2px]  min-h-[96px] border-white/64 rounded-[20px] flex flex-col gap-[16px] justify-center items-center py-[16px] px-[24px]'
            style={{
                background: `${background}`
            }}>
            <p className='font-outfit text-[16px]/[100%] font-[300] text-white/64'>
                <span className='pr-1 bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent'>{gradientText1}</span>
                {
                    gradientText2 ? <span className='pr-1 bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent'>{gradientText2}</span> : null
                }
                {gradientText3 ? <span className='pr-1 bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent'>{gradientText3}</span> : null}
                {Text}
            </p>
        </div>
    )
}


export { FumigationCard, FumigationCard2 }
