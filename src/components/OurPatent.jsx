import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";

const OurPatent = () => {
  const [patents, setPatents] = useState([]); // State to store fetched patents
  const [heading, setHeading] = useState({ light_heading: "", dark_heading: "" }); // State to store heading

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/ourpatent?populate[patents][populate]=patent_image&populate=heading`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        // Set heading data
        setHeading(res.data.heading);
        
        // Set patents data
        const patentsData = res.data.patents.map((patent) => ({
          image: patent.patent_image.url,
          text: patent.patent_text,
          w: patent.patent_image.width,
          h: patent.patent_image.height,
        }));
        setPatents(patentsData);
      })
      .catch((err) => {
        console.error("Error fetching patent data:", err);
      });
  }, []);

  return (
    <section>
      {/* ====== Our Patent ===== */}
      <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
        <Heading1 headingGray={heading.light_heading} headingWhite={heading.dark_heading} />
        {/* <Text>
        Tolemaica's commitment to innovation and security is backed by strong intellectual property protection. Our patented <GradientSpan>Instant Automatic Certification (IAC) technology</GradientSpan> is recognized at both national and international levels, ensuring legal validity and compliance in data certification.
        </Text> */}

        <div className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center md:gap-[20px] gap-2">
          {patents.length > 0 ? (
            patents.map((patent, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "patent-2" : "patent-1"
                } px-[27px] md:px-[50px] h-[100px] lg:h-[400px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row lg:flex-col justify-start lg:justify-center items-center gap-[10px] md:gap-[60px]`}
              >
                <img
                  src={patent.image}
                  alt={`Patent ${index + 1}`}
                  className="lg:w-[150px] lg:h-[80px] md:w-[120px] w-[60px] h-[85%]"
                  style={{
                    width: patent.w || "120px",
                    height: patent.h || "120px",
                  }}
                />
                <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
                  {patent.text}
                </p>
              </div>
            ))
          ) : (
            <p>Loading patents...</p>
          )}
        </div>
        {/* <Text>
          Our patented technology ensures{" "}
          <GradientSpan>
            legal certification, data integrity, security, and compliance,
          </GradientSpan>{" "}
          protecting businesses and individuals worldwide.
        </Text> */}
      </div>
      {/* ====== Our Patent =====  End*/}
    </section>
  );
};

export default OurPatent;
