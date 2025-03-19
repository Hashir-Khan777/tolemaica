import React from 'react';
import { Link } from 'react-router-dom';

function Card({
    icon,
    title,
    buttonText,
    buttonLink,
    buttonBorder,
    buttonBg,
    buttonTextColor,
    playButton,
    playButtonLink,
    backgroundImage
}) {
    return (
        <div
            className="text-white w-full h-[400px] rounded-2xl border-2 flex flex-col justify-center items-end py-6 px-5 md:py-10 md:px-7 relative isolate overflow-hidden"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderColor: 'white'
            }}
        >
            <div className="w-full flex flex-col gap-4 md:gap-[32px] justify-center items-center">
                <img src={icon} alt={title} className="w-20 h-20 md:w-30 md:h-30" />
                <h1 className="font-outfit text-2xl md:text-[32px]/[100%] uppercase font-[600] tracking-[5%] text-center">
                    {title}
                </h1>
                <Link
                    to={buttonLink}
                    className="w-36 uppercase md:w-40 h-9 md:h-10 font-bold text-sm md:text-base flex justify-center items-center rounded-full border-2"
                    style={{
                        borderColor: buttonBorder || 'white',
                        backgroundColor: buttonBg || 'black',
                        color: buttonTextColor || '#FF9966'
                    }}
                >
                    {buttonText}
                </Link>
            </div>

            {playButton && playButtonLink && (
                <button target="_blank" rel="noopener noreferrer">
                    <img
                        src={playButton}
                        alt="play button"
                        className="w-8 h-8 md:w-10 md:h-10 mt-4"
                    />
                </button>
            )}
        </div>
    );
}

export default Card;
