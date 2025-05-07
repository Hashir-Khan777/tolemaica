import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card4 from "./ui/Card4";
import OurPartnersSlider from "./ui/PartnersSLider";
import ServiceSlider1 from "./ui/ServiceSLider1";
import ServiceSlider2 from "./ui/ServiceSLider2";
import Video from "./ui/Video";
import IsoCertified from "./ISOCertified";
import ImageSec from "./ui/ImageSec";

const cardsData = [
  {
    image: "/qrcert1.png",
    title: "Immediate supply chain verification",
    description:
      "Barcode printing & scanning confirm the storage/movement times of goods in warehouses.",
    gradientColors: ["#140902", "#4e2c1c"],
  },
  {
    image: "/dataclick1.png",
    title: "Legally valid certification",
    description:
      "Ensures that information on a product's storage times has evidentiary value.",
    gradientColors: ["#360e12", "#180808"],
  },
  {
    image: "/legalclick5.png",
    title: "Tamper-proof security",
    description: "Protects supply chain information from alterations.",
    gradientColors: ["#5c5b5a", "070402"],
  },
  {
    image: "/legalcheck5.png",
    title: "Scalable and customizable",
    description:
      "Ideal for businesses, government entities, and manufacturers.",
    gradientColors: ["#240a12", "#3f3131"],
  },
  {
    image: "/legalcheck2.png",
    title: "Seamless system integration",
    description: "Compatible with inventory management & supply chain systems.",
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
    title: "Retail & E-commerce",
    description:
      "Certification of the storage duration of specific goods in warehouses.",
    bg: gradients[0],
  },
  {
    title: "Food Industry",
    description:
      "Certifies the storage duration of food products in warehouses to prevent loss of quality and compliance with food safety standards.",
    bg: gradients[1],
  },
  {
    title: "Supply Chain and Logistics",
    description:
      "Ensures that certain products do not remain in warehouses beyond a specified period to prevent degradation of their technical properties.",
    bg: gradients[2],
  },
  {
    title: "Manufacturing and Production",
    description:
      "Certifies the duration of goods' storage for quality control and regulatory compliance.",
    bg: gradients[3],
  },
  {
    title: "Healthcare and Pharmaceuticals",
    description:
      "Certifies the storage duration of goods for quality control and regulatory compliance.",
    bg: gradients[4],
  },
];

function QrCertSection() {
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
          const filteredData = data.data.find(item => item.id === 9);
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
      fetch(`${apiUrl}/chooseservices/ia7k032l4weriws25wo6qzgm?populate=heading&populate=benefits&populate=benefits.heading&populate=benefits.image`)
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
      fetch(`${apiUrl}/servicebenefits/x1ovqi414tnco8giqgk8e3uz?populate=heading&populate=benefits&populate=benefits.heading`)
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
          {/* ==== What is BarCertCode ====== */}
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
          {/* ==== What is BarCertCode  ====== */}

          {/* ====== How BarCertCode  works ======= */}
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
          {/* ====== How BarCertCode  works ======= */}

          {/* ====== Why Choose BarCertCode  ======= */}
          <div className="w-full flex flex-col gap-[64px]">
            <Heading1 headingGray="Why Choose" headingWhite="BarCertCode?" />

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
          {/* ====== Why Choose BarCertCode  ======= */}

          {/* ====== Benefit of using BarCertCode  ===== */}
          {/* ====== Benefit of using QrCertCode ===== */}
          <div className="w-full flex flex-col gap-[64px] mx-auto">
            <Heading1
              headingGray="benefits of"
              headingWhite="using QRCERTCODE"
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
          {/* ====== Benefit of usind QrCertCode ===== */}
          {/* ====== Benefit of usind QrCertCode ===== */}

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

export default QrCertSection;
