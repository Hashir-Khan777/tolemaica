import React from "react";

const TimeLineCard = ({ image, text1, text2 }) => {
    return (
        <div
            className="max-w-[1270px] w-full h-auto md:h-[580px] border-[1.5px] rounded-[20px] border-white 
            flex flex-col md:flex-row gap-[40px] md:gap-[80px] justify-center items-center p-6 md:p-10"
            style={{
                background: "linear-gradient(140deg, #27151a 20%, #191717 40%, #653e33)",
            }}
        >
            {/* Image */}
            <img
                src={image}
                alt="TimeLine Card"
                className="w-[300px] h-[300px] md:w-[460px] md:h-[460px] object-cover rounded-lg"
            />

            {/* Text Content */}
            <div className="w-full md:w-[500px] flex flex-col gap-[16px] md:gap-[20px] font-Outfit font-[300] text-[18px] md:text-[24px] text-center md:text-left">
                <p className="text-white/50">{text1}</p>
                <p className="text-white/50">{text2}</p>
            </div>
        </div>
    );
};

export default TimeLineCard;

