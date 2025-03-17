import React from "react";

const ImageSec = ({ imageUrl }) => {
  return (
    <div className="container overflow-hidden rounded-[20px]  object-cover object-center">
      <img src={imageUrl} alt="" className="w-full h-full " />
    </div>
  );
};

export default ImageSec;
