import React from 'react'
import { Link } from 'react-router-dom';

const GridCard = ({bgImage,title}) => {
    return (
        <div className="h-[400px] flex rounded-[20px] overflow-hidden border-2 border-white">
            <Link
                to="/"
                className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <p className="z-10 text-[28px]/[120%] font-[700] tracking-wide text-white text-center font-outfit uppercase">
                {title}
                </p>
            </Link>
        </div>
    )
}

export default GridCard
