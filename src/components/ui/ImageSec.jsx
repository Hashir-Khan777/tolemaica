import React from 'react'

const ImageSec = ({imageUrl}) => {
  return (
    <div className="max-w-[1280px] xl:w-[1280px] max-h-[738px] lg:h-[738px] sm:w-[90%] sm:h-[500px] w-[350px] h-[233px]  overflow-hidden rounded-[20px]  object-cover object-center">
    <img src={imageUrl} alt="" className="w-full h-full " />
  </div>
  )
}

export default ImageSec
