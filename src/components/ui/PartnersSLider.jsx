import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6, // Adjusted for better fit
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,  // Adjust speed for smoothness
  autoplaySpeed: 0,  // Zero delay for continuous motion
  cssEase: "linear",  // Ensures smooth flow
  pauseOnHover: true, // Prevents pausing on hover
  arrows: false ,// Hides arrows for a cleaner look
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 5 } },
    { breakpoint: 480, settings: { slidesToShow: 4 } },
    { breakpoint: 400, settings: { slidesToShow: 3 } },
    { breakpoint: 300, settings: { slidesToShow: 2 } },
  ]
};
const settings2 = {
  dots: false,
  infinite: true,
  slidesToShow: 6, // Adjusted for better fit
  slidesToScroll: 1,
  rtl:true,
  autoplay: true,
  speed: 3000,  // Adjust speed for smoothness
  autoplaySpeed: 0,  // Zero delay for continuous motion
  cssEase: "linear",  // Ensures smooth flow
  pauseOnHover: true, // Prevents pausing on hover
  arrows: false ,// Hides arrows for a cleaner look
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 5 } },
    { breakpoint: 480, settings: { slidesToShow: 4 } },
    { breakpoint: 400, settings: { slidesToShow: 3 } },
    { breakpoint: 300, settings: { slidesToShow: 2 } },
  ]
};

function OurPartnersSlider({ image1, image2, image3, image4 }) {
  return (
    <div className='flex justify-center items-center'>
      <div className="slider-container w-[100vw] flex flex-col gap-5"> 
        <Slider {...settings} >
          {[image1, image2, image3, image4, image1, image2, image3, image4].map((img, index) => (
            <div key={index} className='outline-0 flex flex-row justify-center items-center'>
              <img src={img} alt={`Image ${index + 1}`} className='lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]' />
            </div>
          ))}
        </Slider>
        <Slider {...settings2} >
          {[image1, image2, image3, image4, image1, image2, image3, image4].map((img, index) => (
            <div key={index} className='outline-0 flex flex-row justify-center items-center'>
              <img src={img} alt={`Image ${index + 1}`} className='lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurPartnersSlider;

