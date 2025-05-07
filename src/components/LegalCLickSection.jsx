import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import Card4 from "./ui/Card4";
import { Link } from "react-router-dom";
import OurPartnersSlider from "./ui/PartnersSLider";
import ServiceSlider1 from "./ui/ServiceSLider1";
import ServiceSlider2 from "./ui/ServiceSLider2";
import Video from "./ui/Video";
import IsoCertified from "./ISOCertified";
import ImageSec from "./ui/ImageSec";

const cardsData = [
  {
    image: "/dataclick1.png",
    title: "Instant Certification",
    gradientColors: ["#140902", "#4e2c1c"],
    description: "Provides immediate proof of authenticity.",
  },
  {
    image: "/legalclick2.png",
    title: "Pay-Per-Use",
    description: "No subscriptions—only pay when you need it.",
    gradientColors: ["#360e12", "#180808"],
  },
  {
    image: "/legalclick3.png",
    title: "Legally Recognized",
    description: "Ensures digital media has evidentiary value. ",
    gradientColors: ["#5c5b5a", "070402"],
  },
  {
    image: "/legalclick4.png",
    title: "Accessible Anywhere",
    description: "Use via web platform or mobile app. ",
    gradientColors: ["#240a12", "#3f3131"],
  },
  {
    image: "/legalclick5.png",
    title: "Secure Storage",
    description: " Certified media is safely stored and retrievable.",
    gradientColors: ["#240a12", "#3f3131"],
  },
];

const gradients = [
  "linear-gradient(145deg, #171515, #271519)",
  "linear-gradient(145deg, #0a0604, #433f3e)",
  "linear-gradient(145deg, #281e19, #593c2d)",
  "linear-gradient(145deg, #1a1a1a, #505050)",
  "linear-gradient(145deg, #060505, #060505)",
  "linear-gradient(145deg, #171616, #29151a)",
];

const BenefitCards = [
  {
    title: "Government & Public Sector ",
    description: "Secure, timestamped documentation for official records.",
    bg: gradients[0],
  },
  {
    title: "Legal & Compliance Departments",
    description:
      "Automated document verification with OCR and certification logs.",
    bg: gradients[1],
  },
  {
    title: "Corporate Auditing & Internal Control",
    description: "Maintain compliance and certify key operational records.",
    bg: gradients[2],
  },
  {
    title: "Supply Chain & Logistics",
    description: "Certify packaging, storage, and transit documentation.",
    bg: gradients[3],
  },
  {
    title: "Insurance & Claims Processing",
    description: "Authenticate evidence for claims and prevent fraud.",
    bg: gradients[4],
  },
  {
    title: "Infrastructure & Engineering Projects",
    description: "Document construction progress with certified images.",
    bg: gradients[5],
  },
];

function DataClickSecton() {
  const [serviceData, setServiceData] = useState(null);
  const [whyChooseData, setWhyChooseData] = useState([]); // Default to an empty array
  const [benefitsData, setBenefitsData] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/serviceworks?populate=*`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText); // This will throw an error if the response is not ok.
        }
        return res.json(); // This will parse the response as JSON.
      })
      .then((data) => {
        const filteredData = data.data.find(item => item.id === 5);
        if (filteredData) {
          setServiceData(filteredData);
        } else {
          console.error('No data found with id 3');
        }
      })
      .catch((err) => {
        console.error("Error fetching service works data:", err);
      });
  }, []);

  // Fetch the "Why Choose" section data
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/chooseservices/vcpfx6k4uvzg1mmtoyogz0ca?populate=heading&populate=benefits&populate=benefits.heading&populate=benefits.image`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json(); // This will parse the response as JSON.
      })
      .then(({ data }) => {
    if (data && Array.isArray(data.benefits)) {
      setWhyChooseData(data.benefits);
    } else {
      console.error("No valid benefits array returned");
    }
  })
      .catch((err) => {
        console.error("Error fetching why choose data:", err);
      });
  }, []);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/servicebenefits/sjxbirjud3bi0d9k1dw4ugn7?populate=heading&populate=benefits&populate=benefits.heading`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);  // Handle error
        }
        return res.json(); // Parse the response as JSON
      })
      
      .then(({ data }) => {
        if (data && Array.isArray(data.benefits)) {
          // Map over all items in the benefits array
          const benefits = data.benefits.map((benefit, benefitIndex) => ({
            title: benefit.heading ? benefit.heading.dark_heading : "No Title",
            description: benefit.paragraph,
            bg: gradients[benefitIndex % gradients.length], // Dynamically assigning background gradients
          }));
          setBenefitsData(benefits); // Update the state with the fetched benefits data
        } else {
          console.error("No valid data found for benefits");
        }
      })
      .catch((err) => {
        console.error("Error fetching service benefits data:", err);
      });
  }, []);

  // Log the service data after it has been updated
  useEffect(() => {
    if (serviceData) {
      console.log("Updated service data:", serviceData);
    }
  }, [serviceData]);
  return (
    <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      <div className="mx-auto w-full max-w-[1280px]">
        {/* ==== Content wrapper ===== */}
        <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center">
          {/* ==== What is LEGALCLICK ====== */}
          {serviceData ? (
            <div className="w-full flex flex-col justify-center items-center md:gap-[64px] gap-[40px]">
              <Heading1 headingGray={serviceData.heading[0].light_heading} headingWhite={serviceData.heading[0].dark_heading} />
              <Text>
                {serviceData.paragraph[0].text}{" "}
                <GradientSpan>{serviceData.paragraph[0].colored_text}</GradientSpan>{" "}
                {serviceData.paragraph[0].second_text}
              </Text>

              <ImageSec imageUrl={serviceData.mainImage.url} />
            </div>
          ) : (
            <p>Loading data...</p>
          )}
          {/* ==== What is DataClick ====== */}

          {/* ====== How dataclick works ======= */}
          {serviceData ? (
            <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
              <Heading1 headingGray={serviceData.heading[1].light_heading} headingWhite={serviceData.heading[1].dark_heading} />
              <Text>
                {serviceData.paragraph[1].text}{" "}
                <GradientSpan>{serviceData.paragraph[1].colored_text}</GradientSpan>{" "}
                {serviceData.paragraph[1].second_text}
              </Text>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
          {/* ====== How dataclick works ======= */}

          {/* ====== Why Choose DataClick ======= */}
          <div className="w-full flex flex-col gap-[64px]">
            <Heading1 headingGray="Why Choose" headingWhite="LEGALCLICK?" />

            {/* ==== Cards ==== */}
            <div className="w-full">
              <div className="flex flex-col justify-content-center items-center gap-[36px]"  style={{maxWidth: '1200px'}}>
                <div className="hidden lg:flex flex-row flex-wrap justify-center items-center gap-[24px]">
                  {/* {cardsData.map((card, index) => (
                                <Card3 key={index} {...card} />
                            ))} */} {Array.isArray(whyChooseData) && whyChooseData.length > 0 ? (
    whyChooseData.map((benefit, index) => (
      <Card4
        key={index}
        image={benefit.image.url}
        title={benefit.heading ? benefit.heading.dark_heading : "No Title"}
        description={benefit.paragraph}
        gradientColors={["#140902", "#4e2c1c"]} // Adjust gradient colors as needed
      />
    ))
  ) : (
    <p>No benefits found</p>
  )}
                 
                </div>

                
              </div>

              <div className="md:hidden">
  {Array.isArray(whyChooseData) && whyChooseData.length > 0 ? (
    <ServiceSlider1 cards={whyChooseData} />
  ) : (
    <p>No benefits found</p>
  )}
</div>
            </div>
            {/* ==== Cards ==== */}

            {/* === Video Section === */}
            {/* <Video link="/dataclick.webm" /> */}
          </div>
          {/* ====== Why Choose DataClick ======= */}

          {/* ====== Benefit of usind dataclick ===== */}
          <div className="w-full flex flex-col gap-[64px] mx-auto">
            <Heading1
              headingGray="benefits of"
              headingWhite="using LEGALclick"
            />

            <div className="lg:hidden block">
             
              <ServiceSlider2 cards={benefitsData} />
            </div>

            <div className="mx-auto hidden lg:grid grid-cols-4 gap-[36px]">
              {/*  */}
              <div className="lg:block hidden"></div>
              {benefitsData.map((benefit, index) => (
    <Card2
      key={index}
      title={benefit.title}
      description={benefit.description}
      bg={gradients[index % gradients.length]}  // Apply dynamic background gradient
    />
  ))}
              <div className="lg:block hidden"></div>
            </div>
          </div>
          {/* ====== Benefit of usind dataclick ===== */}

          {/* IsoCertified */}
          <IsoCertified />
        </div>

        {/* ==== Partners ==== */}
        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
          <OurPartnersSlider
            image1="/img1.svg"
            image2="/img2.svg"
            image3="/img3.svg"
            image4="/img4.svg"
          />
        </div>

        {/* ======= Our Partners ======== */}
      </div>
    </section>
  );
}

export default DataClickSecton;
