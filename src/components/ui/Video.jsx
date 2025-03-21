import React from 'react'

const Video = ({link}) => {
    return (
        <div className="h-[800px] overflow-hidden border-white border-2 rounded-2xl flex justify-center items-center">
            <video
                src={link}
                loop
                controls
                autoPlay
                muted
                className="w-full h-full object-cover overflow-hidden rounded-xl"
            ></video>
        </div>
    )
}

export default Video
