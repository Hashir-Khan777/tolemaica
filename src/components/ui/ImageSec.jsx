import React from "react";

const ImageSec = ({ imageUrl }) => {
  return (
    <div className="container overflow-hidden rounded-[20px] w-full max-h-[729px] h-full">
      <img src={imageUrl} alt="" className="w-full h-full object-cover object-top" />
    </div>
  );
};

export default ImageSec;
