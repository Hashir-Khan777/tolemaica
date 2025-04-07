import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading1 from "./Heading1";
import { Text, GradientSpan } from "./Text";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 7 } },
    { breakpoint: 768, settings: { slidesToShow: 6 } },
    { breakpoint: 480, settings: { slidesToShow: 4 } },
    { breakpoint: 400, settings: { slidesToShow: 3 } },
    { breakpoint: 300, settings: { slidesToShow: 3 } },
  ],
};

function OurPartnersSlider({ image1, image2, image3, image4 }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[40px] md:gap-[64px]">
      <Heading1 headingGray="Our" headingWhite="Partners" />
      {/* <Text>
      At Tolemaica, we collaborate with leading organizations across industries to provide secure, instant, and legally certified digital solutions. Our trusted partners rely on our <GradientSpan>IAC (Instant Automatic Certification) technology</GradientSpan> to ensure data integrity, security, and compliance with international standards.
      </Text> */}
      <div className="partners slider-container w-[100vw] flex flex-col gap-5">
        <Slider {...settings}>
          {[image1, image2, image3, image4, image1, image2, image3, image4].map(
            (img, index) => (
              <div
                key={index}
                className="outline-0 flex flex-row justify-center items-center mr-[4px]"
              >
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full max-w-[200px] max-h-[200px]"
                />
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}

export default OurPartnersSlider;
