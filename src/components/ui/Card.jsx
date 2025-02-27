// import React from 'react';
// import { Link } from 'react-router-dom';

// function Card() {
//     return (
//         <div className='text-white max-w-[100%] md:max-w-[600px] rounded-2xl border-[2px] border-white flex flex-col justify-center items-end py-[30px] px-[20px] md:py-[40px] md:px-[30px]'>
//             <div className='w-full h-full flex flex-col gap-[16px] md:gap-[32px] justify-center items-center'>
//                 <img src="/images/legalClick.png" alt="legal click" className='w-[80px] h-[80px] md:w-[120px] md:h-[120px]' />
//                 <h1 className='font-outfit text-[24px] md:text-[32px] uppercase font-[600] text-center'>Legalclick</h1>
//                 <Link to="/" className='w-[140px] md:w-[160px] h-[36px] md:h-[39px] border-[2px] border-white bg-black text-[#FF9966] font-[700] text-[14px] md:text-[16px] flex justify-center items-center rounded-full'>
//                     Visit
//                 </Link>
//             </div>
//             <img src="/images/playBtn.png" alt="play button" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mt-4' />
//         </div>
//     );
// }

// export default Card;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Card({
//     icon, // Icon image URL
//     title, // Card title
//     buttonText, // Button text
//     buttonLink, // Button link
//     buttonBorder, // Button border color
//     buttonBg, // Button background color
//     buttonTextColor, // Button text color
//     playButton, // Play button image URL
//     playButtonLink, // Play button link
//     backgroundImage // Card background image URL
// }) {
//     return (
//         <div
//             className='text-white max-w-[100%] md:max-w-[600px] rounded-2xl border-[2px] flex flex-col justify-center items-end py-[30px] px-[20px] md:py-[40px] md:px-[30px]'
//             style={{
//                 backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 borderColor: buttonBorder || 'white'
//             }}
//         >
//             <div className='w-full h-full flex flex-col gap-[16px] md:gap-[32px] justify-center items-center'>
//                 <img src={icon} alt={title} className='w-[80px] h-[80px] md:w-[120px] md:h-[120px]' />
//                 <h1 className='font-outfit text-[24px] md:text-[32px] uppercase font-[600] text-center'>{title}</h1>
//                 <Link
//                     to={buttonLink}
//                     className='w-[140px] md:w-[160px] h-[36px] md:h-[39px] font-[700] text-[14px] md:text-[16px] flex justify-center items-center rounded-full'
//                     style={{
//                         border: `2px solid ${buttonBorder || 'white'}`,
//                         backgroundColor: buttonBg || 'black',
//                         color: buttonTextColor || '#FF9966'
//                     }}
//                 >
//                     {buttonText}
//                 </Link>
//             </div>

//             {playButton && playButtonLink && (
//                 <a href={playButtonLink} target="_blank" rel="noopener noreferrer">
//                     <img src={playButton} alt="play button" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mt-4' />
//                 </a>
//             )}
//         </div>
//     );
// }

// export default Card;


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
            className="text-white w-full rounded-2xl border-2 flex flex-col justify-center items-end py-6 px-5 md:py-10 md:px-7 relative isolate overflow-hidden"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderColor: 'white'
            }}
        >
            <div className="w-full flex flex-col gap-4 md:gap-8 justify-center items-center">
                <img src={icon} alt={title} className="w-20 h-20 md:w-30 md:h-30" />
                <h1 className="font-outfit text-2xl md:text-3xl uppercase font-semibold text-center">
                    {title}
                </h1>
                <Link
                    to={buttonLink}
                    className="w-36 md:w-40 h-9 md:h-10 font-bold text-sm md:text-base flex justify-center items-center rounded-full border-2"
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
                <a href={playButtonLink} target="_blank" rel="noopener noreferrer">
                    <img
                        src={playButton}
                        alt="play button"
                        className="w-8 h-8 md:w-10 md:h-10 mt-4"
                    />
                </a>
            )}
        </div>
    );
}

export default Card;
