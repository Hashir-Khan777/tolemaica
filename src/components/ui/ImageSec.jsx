import React from "react";

const ImageSec = ({ imageUrl }) => {
  return (
    <div className="container overflow-hidden rounded-[20px] w-[350px] h-[233px] sm:w-full sm:h-full lg:w-[1280px] lg:h-[738px]">
      <img src={imageUrl} alt="" className="w-full h-full object-cover object-center" />
    </div>
  );
};

export default ImageSec;
