// // import React, { useState, useEffect } from "react";
// // import Heading1 from "./ui/Heading1";
// // import { Text, GradientSpan } from "./ui/Text";
// // import Card2 from "./ui/Card2";
// // import Card3 from "./ui/Card3";
// // import { Link } from "react-router-dom";
// // import OurPartnersSlider from "./ui/PartnersSLider";
// // import ServiceSlider1 from "./ui/ServiceSLider1";
// // import ServiceSlider2 from "./ui/ServiceSLider2";
// // import Video from "./ui/Video";
// // import Heading2 from "./ui/Heading2";
// // import ISOCertified from "./ISOCertified";
// // import ImageSec from "./ui/ImageSec";
// import React, { useState, useEffect } from "react";
// import Heading1 from "./ui/Heading1";
// import { Text, GradientSpan } from "./ui/Text";
// import Card2 from "./ui/Card2";
// import Card3 from "./ui/Card3";
// import { Link } from "react-router-dom";
// import OurPartnersSlider from "./ui/PartnersSLider";
// import ServiceSlider1 from "./ui/ServiceSLider1";
// import ServiceSlider2 from "./ui/ServiceSLider2";
// import Video from "./ui/Video";
// import Heading2 from "./ui/Heading2";
// import ISOCertified from "./ISOCertified";
// import ImageSec from "./ui/ImageSec";


// const cardsData = [
//   {
//     image: "/dataclick1.png",
//     title: "Instant & Automatic Certification",
//     description: "Certifies date and location of images.",
//     gradientColors: ["#140902", "#4e2c1c"],
//   },
//   {
//     image: "/dataclick2.png",
//     title: "Multi-Device Accessibility",
//     description: "Use via PC or smartphone.",
//     gradientColors: ["#360e12", "#180808"],
//   },
//   {
//     image: "/dataclick3.png",
//     title: "Simple & Cost Effective",
//     description: "Use via PC or smartphone.",
//     gradientColors: ["#5c5b5a", "070402"],
//   },
//   {
//     image: "/dataclick4.png",
//     title: "Secure & Legally Valid",
//     description: "Provides legally recognized proof of authenticity.",
//     gradientColors: ["#240a12", "#3f3131"],
//   },
// ];

// const gradients = [
//   "linear-gradient(145deg, #171515, #271519)",
//   "linear-gradient(145deg, #0a0604, #433f3e)",
//   "linear-gradient(145deg, #281e19, #593c2d)",
//   "linear-gradient(145deg, #1a1a1a, #505050)",
//   "linear-gradient(145deg, #060505, #060505)",
//   "linear-gradient(145deg, #171616, #29151a)",
// ];

// const BenefitCards = [
//   {
//     title: "Infrastructure Monitoring",
//     description: "Certify structural conditions with timestamped images.",
//     bg: gradients[0],
//   },
//   {
//     title: "Legal Disputes & Professional Activities",
//     description: "Provide court-admissible proof.",
//     bg: gradients[1],
//   },
//   {
//     title: "Consumption Measurement",
//     description: "Capture utility or resource consumption.",
//     bg: gradients[2],
//   },
//   {
//     title: "Point of Sale Control",
//     description: "Document store conditions and activities.",
//     bg: gradients[3],
//   },
//   {
//     title: "Insurance Claims",
//     description: "Secure photographic evidence for claims.",
//     bg: gradients[4],
//   },
//   {
//     title: "Packaging & Storage Inspection",
//     description: "Certify conditions before shipment or storage.",
//     bg: gradients[5],
//   },
// ];

// function DataClickSecton() {
//   const [serviceData, setServiceData] = useState(null);
//   const [whyChooseData, setWhyChooseData] = useState([]); // This will hold the dynamically fetched "Why Choose" data
//   useEffect(() => {
//     const apiUrl = import.meta.env.VITE_API_BASE_URL;
//     fetch(`${apiUrl}/serviceworks?populate=*`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Network response was not ok " + res.statusText);  // This will throw an error if the response is not ok.
//       }
//       return res.json(); // This will parse the response as JSON.
//     })
//     .then((data) => {
      
//       const filteredData = data.data.find(item => item.id === 3);
      
//       if (filteredData) {
        
//         setServiceData(filteredData);
        
//       } else {
//         console.error('No data found with id 3');
//       }
//     })
//       .catch((err) => {
//         console.error("Error fetching service works data:", err);
//       });
//   }, []);
//   useEffect(() => {
//     const apiUrl = import.meta.env.VITE_API_BASE_URL;
//     fetch(`${apiUrl}/chooseservices?populate=heading&populate=benefits&populate=benefits.heading&populate=benefits.image&[heading][filters][second_dark_heading][$eq]=data_click`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok " + res.statusText);
//         }
//         return res.json(); // This will parse the response as JSON.
//       })
//       .then((data) => {
        
//           setWhyChooseData(data); // Store the fetched benefits in state
         
//       })
//       .catch((err) => {
//         console.error("Error fetching service data:", err);
//       });
//   }, []);
//  // Log the service data after it has been updated
//  useEffect(() => {
//   if (serviceData) {
//     console.log("Updated service data:", serviceData);
//   }
// }, [serviceData]);
//   return (
//     <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col">
//       <video
//         src="/ourpartners.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         webkit-playsinline
//         className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//         style={{ filter: "blur(40px)" }}
//       ></video>

//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* ==== Content wrapper ===== */}
//         <div className="relative z-10 flex flex-col justify-center items-center md:gap-[100px] gap-[70px] text-center">
//           {/* ==== What is DataClick ====== */}
//           {serviceData ? (
//           <div className="w-full flex flex-col justify-center items-center md:gap-[64px] gap-[40px]">
         
//             <Heading1 headingGray={serviceData.heading[0].light_heading} headingWhite={serviceData.heading[0].dark_heading} />
//             <Text>
//             {serviceData.paragraph[0].text}{" "}
//               <GradientSpan>
//               {serviceData.paragraph[0].colored_text}
//               </GradientSpan>{" "}
//               {serviceData.paragraph[0].second_text}
//             </Text>

          
//             <ImageSec imageUrl={serviceData.mainImage.url} />
//           </div>
//         ) : (
//           <p>Loading data...</p>
//         )}
//           {/* ==== What is DataClick ====== */}

//           {/* ====== How dataclick works ======= */}
//           {serviceData ? (
//           <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
//           <Heading1 headingGray={serviceData.heading[1].light_heading} headingWhite={serviceData.heading[1].dark_heading} />
//           <Text>
//             {serviceData.paragraph[0].text}{" "}
//               <GradientSpan>
//               {serviceData.paragraph[0].colored_text}
//               </GradientSpan>{" "}
//               {serviceData.paragraph[0].second_text}
//             </Text>
//           </div>
//            ) : (
//             <p>Loading data...</p>
//           )}
//           {/* ====== How dataclick works ======= */}

//           {/* ====== Why Choose DataClick ======= */}
//           <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
//             <Heading1 headingGray="Why Choose" headingWhite="dataclick?" />

//             {/* ==== Cards ==== */}
//             <div className="w-full ">
//               <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[100px] place-items-center">
//                {whyChooseData.map((benefit, index) => (
//                   <Card3
//                     key={index}
//                     image={benefit.image.url} 
//                     title={benefit.heading ? benefit.heading.light_heading : "No Title"}
//                     description={benefit.paragraph}
//                     gradientColors={["#140902", "#4e2c1c"]} // Adjust gradient colors as needed
//                   />
//                 ))}
//               </div>

//               <div className="flex md:hidden">
//                 <ServiceSlider1 cards={whyChooseData} />
//               </div>
//             </div>
//             {/* ==== Cards ==== */}

//             {/* <Video link="/dataclick.webm" /> */}
//           </div>

//           {/* ====== Why Choose DataClick ======= */}

//           {/* ====== Benefit of usind dataclick ===== */}
//           <div className="w-full flex flex-col gap-[64px] mx-auto">
//             <Heading2
//               headingWhite1="benefits"
//               headingGray="of using"
//               headingWhite2="dataclick"
//             />

//             <div className="lg:hidden block">
//               <ServiceSlider2 cards={BenefitCards} />
//             </div>

//             <div className="mx-auto hidden lg:grid grid-cols-4 gap-[36px]">
//               {/*  */}
//               <div className="lg:block hidden"></div>

//               {/* Card 1 */}
//               <Card2
//                 title="Infrastructure Monitoring"
//                 description=" Certify structural conditions with timestamped images."
//                 bg={gradients[0]}
//               />

//               {/* Card 2 */}
//               <Card2
//                 title="Legal Disputes & Professional Activities"
//                 description="Provide court-admissible proof."
//                 bg={gradients[1]}
//               />

//               {/* Card 3 */}
//               <Card2
//                 title="Consumption Measurement"
//                 description="Capture utility or resource consumption."
//                 bg={gradients[2]}
//               />

//               {/* Card 4 */}
//               <Card2
//                 title=" Point of Sale Control"
//                 description="Document store conditions and activities."
//                 bg={gradients[3]}
//               />

//               {/* Card 5 */}
//               <Card2
//                 title="Insurance Claims"
//                 description=" Secure photographic evidence for claims."
//                 bg={gradients[4]}
//               />

//               {/* Card 6 */}
//               <Card2
//                 title="Packaging & Storage Inspection"
//                 description="Certify conditions before shipment or storage."
//                 bg={gradients[5]}
//               />

//               <div className="lg:block hidden"></div>
//             </div>
//           </div>
//           {/* ====== Benefit of usind dataclick ===== */}
//         </div>

//         {/* ==== Partners ==== */}
//         <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px]  text-center px-[20px]">
//           <OurPartnersSlider
//             image1="/img1.svg"
//             image2="/img2.svg"
//             image3="/img3.svg"
//             image4="/img4.svg"
//           />
//         </div>

//         <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px]  text-center px-[20px]">
//           <ISOCertified />
//         </div>

//         {/* ======= Our Partners ======== */}
//       </div>
//     </section>
//   );
// }

// export default DataClickSecton;
import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import { Link } from "react-router-dom";
import OurPartnersSlider from "./ui/PartnersSLider";
import ServiceSlider1 from "./ui/ServiceSLider1";
import ServiceSlider2 from "./ui/ServiceSLider2";
import Video from "./ui/Video";
import Heading2 from "./ui/Heading2";
import ISOCertified from "./ISOCertified";
import ImageSec from "./ui/ImageSec";

const cardsData = [
  {
    image: "/dataclick1.png",
    title: "Instant & Automatic Certification",
    description: "Certifies date and location of images.",
    gradientColors: ["#140902", "#4e2c1c"],
  },
  {
    image: "/dataclick2.png",
    title: "Multi-Device Accessibility",
    description: "Use via PC or smartphone.",
    gradientColors: ["#360e12", "#180808"],
  },
  {
    image: "/dataclick3.png",
    title: "Simple & Cost Effective",
    description: "Use via PC or smartphone.",
    gradientColors: ["#5c5b5a", "070402"],
  },
  {
    image: "/dataclick4.png",
    title: "Secure & Legally Valid",
    description: "Provides legally recognized proof of authenticity.",
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
    title: "Infrastructure Monitoring",
    description: "Certify structural conditions with timestamped images.",
    bg: gradients[0],
  },
  {
    title: "Legal Disputes & Professional Activities",
    description: "Provide court-admissible proof.",
    bg: gradients[1],
  },
  {
    title: "Consumption Measurement",
    description: "Capture utility or resource consumption.",
    bg: gradients[2],
  },
  {
    title: "Point of Sale Control",
    description: "Document store conditions and activities.",
    bg: gradients[3],
  },
  {
    title: "Insurance Claims",
    description: "Secure photographic evidence for claims.",
    bg: gradients[4],
  },
  {
    title: "Packaging & Storage Inspection",
    description: "Certify conditions before shipment or storage.",
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
        const filteredData = data.data.find(item => item.id === 3);
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
    fetch(`${apiUrl}/chooseservices?populate=heading&populate=benefits&populate=benefits.heading&populate=benefits.image&[heading][filters][second_dark_heading][$eq]=data_click`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json(); // This will parse the response as JSON.
      })
      .then((data) => {
        if (data.data && data.data[0]) {
          // Ensure we have data for the specific ID
          setWhyChooseData(data.data[0].benefits || []); // Default to an empty array if no benefits
        } else {
          console.error("No valid data returned for 'Why Choose'");
        }
      })
      .catch((err) => {
        console.error("Error fetching why choose data:", err);
      });
  }, []);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/servicebenefits?populate=heading&populate=benefits&populate=benefits.heading&[heading][filters][second_dark_heading][$eq]=dataclick`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);  // Handle error
        }
        return res.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Map over each item and extract all benefits with dynamic background gradient
        if (data.data && data.data[0]) {
          // Only accessing the second item in the data array (index 1)
          const item = data.data[1];  // Targeting the second item
          const benefits = item.benefits.map((benefit, benefitIndex) => ({
            title: benefit.heading ? benefit.heading.dark_heading : "No Title",
            description: benefit.paragraph,
            bg: gradients[benefitIndex % gradients.length], // Using gradient dynamically based on benefitIndex
          }));
          setBenefitsData(benefits); // Update the state with the second item's benefits data
        } else {
          console.error("No valid data found for the second item in data");
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
    <section className="relative overflow-hidden w-full bg-black py-[100px] flex flex-col">
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
          {/* ==== What is DataClick ====== */}
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
          <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
            <Heading1 headingGray="Why Choose" headingWhite="dataclick?" />

            {/* ==== Cards ==== */}
            <div className="w-full">
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[100px] place-items-center">
  {Array.isArray(whyChooseData) && whyChooseData.length > 0 ? (
    whyChooseData.map((benefit, index) => (
      <Card3
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

{/* ServiceSlider1 for mobile/tablet screen */}
<div className="md:hidden">
  {Array.isArray(whyChooseData) && whyChooseData.length > 0 ? (
    <ServiceSlider1 cards={whyChooseData} />
  ) : (
    <p>No benefits found</p>
  )}
</div>
            </div>
            {/* ==== Cards ==== */}
          </div>
          {/* ====== Why Choose DataClick ======= */}

          {/* ====== Benefit of using dataclick ===== */}
          <div className="w-full flex flex-col gap-[64px] mx-auto">
            <Heading2 headingWhite1="benefits" headingGray="of using" headingWhite2="dataclick" />

            <div className="lg:hidden block">
              <ServiceSlider2 cards={benefitsData} />
            </div>

            <div className="mx-auto hidden lg:grid grid-cols-4 gap-[36px]">
              {/*  */}
              <div className="lg:block hidden"></div>

              {/* Render each card from BenefitCards */}
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
          {/* ====== Benefit of using dataclick ===== */}
        </div>

        {/* ==== Partners ==== */}
        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px]  text-center px-[20px]">
          <OurPartnersSlider
            image1="/img1.svg"
            image2="/img2.svg"
            image3="/img3.svg"
            image4="/img4.svg"
          />
        </div>

        <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px]  text-center px-[20px]">
          <ISOCertified />
        </div>

        {/* ======= Our Partners ======== */}
      </div>
    </section>
  );
}

export default DataClickSecton;
