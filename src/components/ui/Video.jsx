import React from 'react'

const Video = () => {
    return (
        <div className="w-full h-[300px] md:h-[600px] lg:h-[800px] overflow-hidden border-white border-2 rounded-2xl flex justify-center items-center">
            <video
                src="/video1.mp4"
                loop
                autoPlay
                muted
                className="w-full h-full object-cover overflow-hidden rounded-xl"
            ></video>
        </div>
    )
}

export default Video
