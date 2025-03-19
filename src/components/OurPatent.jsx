import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";

const OurPatent = () => {
  return (
    <section>
      {/* ====== Our Patent ===== */}
      <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
        <Heading1 headingGray="Our" headingWhite="patents" />
        <Text>
          Tolemaica's commitment to innovation and security is backed by strong
          intellectual property protection. Our patentedLorem ipsum dolor sit
          amet consectetur.{" "}
          <GradientSpan>
            Instant Automatic Certification (IAC) technology
          </GradientSpan>{" "}
          is recognized at both national and international levels, ensuring
          legal validity and compliance in data certification. velit vestibulum
          adipiscing.
        </Text>

        <div className="w-full mx-auto flex flex-row justify-center items-center  md:gap-[20px] gap-2">
          <img
            src="/ourpatent1.svg"
            alt=""
            className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px] "
          />
          <img
            src="/ourpatent2.svg"
            alt=""
            className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px]"
          />
          <img
            src="/ourpatent3.svg"
            alt=""
            className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px] "
          />
          <img
            src="/ourpatent4.svg"
            alt=""
            className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px] "
          />
        </div>
        <Text>
          Our patented technology ensures{" "}
          <GradientSpan>
            legal certification, data integrity, security, and compliance,
          </GradientSpan>{" "}
          protecting businesses and individuals worldwide.
        </Text>
      </div>
      {/* ====== Our Patent =====  End*/}
    </section>
  );
};

export default OurPatent;
