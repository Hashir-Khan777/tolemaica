// import React from "react";
// import { Text, GradientSpan } from "./ui/Text";
// import Heading1 from "./ui/Heading1";

// const certifications = [
//   { src: "/images/iso-9001.png", title: "ISO 9001:2015", subtitle: "Quality" },
//   {
//     src: "/images/iso-27001.png",
//     title: "ISO/IEC 27001:2022",
//     subtitle: "Information",
//   },
//   {
//     src: "/images/iso-14001.png",
//     title: "ISO 14001:2015",
//     subtitle: "Environment",
//   },
//   {
//     src: "/images/eu-fund.png",
//     title: "UNIONE EUROPEA",
//     subtitle: "Fondo europeo di sviluppo regionale",
//   },
//   {
//     src: "/images/pon-logo.png",
//     title: "PON IMPRESE E COMPETITIVITÀ",
//     subtitle: "2014-20 Ricacciamo lo sviluppo",
//   },
//   {
//     src: "/images/ministry.png",
//     title: "Ministero dello Sviluppo Economico",
//     subtitle: "",
//   },
// ];

// const ISOSection = () => {
//   return (
//     <section className="text-white py-12 md:px-6">
//       <div className="max-w-6xl mx-auto text-center w-full flex flex-col gap-[40px] md:gap-[64px]">
//         {/* Heading */}
//         <Heading1 headingGray="we are" headingWhite="iso certified" />
//         <Text>
//           At Tolemaica, we prioritize quality, security, and sustainability in
//           all our operations. Our{" "}
//           <GradientSpan>internationally recognized certifications</GradientSpan>{" "}
//           ensure compliance with the highest industry standards, reinforcing
//           trust and reliability for our clients.
//         </Text>

//         {/* Certification Cards */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] w-full ">
//           {/* mt-8 grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-[24px]
//           {certifications.map((cert, index) => (
//                         <div key={index} className="w-full max-w-[280px] p-4 bg-[#151515] border border-gray-600 rounded-xl shadow-lg flex flex-col items-center">
//                             <img src={cert.src} alt={cert.title} className="rounded-md w-48 h-28 object-contain" />
//                             <h3 className="mt-3 text-lg font-semibold">{cert.title}</h3>
//                             <p className="text-gray-400">{cert.subtitle}</p>
//                         </div>
//                     ))} */}
//           <img
//             src="/iso1.svg"
//             alt="Iso Certification"
//             className="md:w-[370px]"
//           />
//           <img
//             src="/iso2.svg"
//             alt="Iso Certification"
//             className="md:w-[370px]"
//           />
//           <img
//             src="/iso3.svg"
//             alt="Iso Certification"
//             className="md:w-[370px]"
//           />
//         </div>
//         <Text>
//           These strategic partnerships empower us to enhance our services and
//           expand our impact. Our
//           <GradientSpan>commitment to compliance</GradientSpan> is further
//           supported by funding from:
//         </Text>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] w-full">
//           <img
//             src="/iso4.svg"
//             alt="Iso Certification"
//             className="md:w-[370px]"
//           />
//           <img
//             src="/iso5.svg"
//             alt="Iso Certification"
//             className="md:w-[370px]"
//           />
//           <img
//             src="/iso6.svg"
//             alt="Iso Certification"
//             className="md:w-[370px]"
//           />
//         </div>
//         <Text>
//           Tolemaica remains dedicated to upholding the{" "}
//           <GradientSpan>
//             highest security, efficiency, and sustainability standards,
//           </GradientSpan>{" "}
//           ensuring a secure & compliant digital certification ecosystem.
//         </Text>
//       </div>
//     </section>
//   );
// };

// export default ISOSection;
// import React, { useState, useEffect } from "react";
// import { Text, GradientSpan } from "./ui/Text";
// import Heading1 from "./ui/Heading1";

// const ISOSection = () => {
//   const [certifications, setCertifications] = useState([]);
//   const [heading, setHeading] = useState({ light_heading: "", dark_heading: "" });
//   const [paragraph, setParagraph] = useState({ text: "", colored_text: "", second_text: "" });

//   useEffect(() => {
//     const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/isocertified?populate=images.iamges&populate=heading&populate=paragraph`;

//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((res) => {
//         // Set heading data
//         setHeading(res.data.heading);

//         // Set paragraph data
//         const paragraphData = res.data.paragraph.map((p) => ({
//           text: p.text,
//           colored_text: p.colored_text,
//           second_text: p.second_text,
//         }));
//         setParagraph(paragraphData[0]); // Assuming only one paragraph

//         // Set certifications images data
//         const fetchedImages = res.data.images.map((img) => img.iamges[0].url); // Getting the image URL
//         setCertifications(fetchedImages);
//       })
//       .catch((err) => {
//         console.error("Error fetching ISO certifications data:", err);
//       });
//   }, []);

//   return (
//     <section className="text-white py-12 md:px-6">
//       <div className="max-w-6xl mx-auto text-center w-full flex flex-col gap-[40px] md:gap-[64px]">
//         {/* Heading */}
//         <Heading1 headingGray={heading.light_heading} headingWhite={heading.dark_heading} />
//         <Text>
//           {paragraph.text}{" "}
//           <GradientSpan>{paragraph.colored_text}</GradientSpan> {paragraph.second_text}
//         </Text>

//         {/* Certification Cards */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] w-full">
//           {certifications.length > 0 ? (
//             certifications.map((cert, index) => (
               
//                 <img
//                 key={index}
//                   src={cert}
//                   alt={`ISO certification ${index + 1}`}
//                    className="md:w-[370px]"
//                 />
              
//             ))
//           ) : (
//             <p>Loading certifications...</p>
//           )}
//         </div>

//         <Text>
//           {paragraph.text}{" "}
//           <GradientSpan>{paragraph.colored_text}</GradientSpan> {paragraph.second_text}
//         </Text>

//         {/* Certification Fundings */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] w-full">
//           {certifications.length > 0 ? (
//             certifications.map((cert, index) => (
//               <img
//                 key={index}
//                 src={cert}
//                 alt={`ISO certification ${index + 1}`}
//                 className="md:w-[370px]"
//               />
//             ))
//           ) : (
//             <p>Loading funding certifications...</p>
//           )}
//         </div>

         
//         <Text>
//           {paragraph.text}{" "}
//           <GradientSpan>{paragraph.colored_text}</GradientSpan>{" "} {paragraph.second_text}
//         </Text>
//       </div>
//     </section>
//   );
// };

// export default ISOSection;
import React, { useState, useEffect } from "react";
import { Text, GradientSpan } from "./ui/Text";
import Heading1 from "./ui/Heading1";

const ISOSection = () => {
  const [certifications, setCertifications] = useState([]);
  const [heading, setHeading] = useState({ light_heading: "", dark_heading: "" });
  const [paragraph, setParagraph] = useState([]);
  
  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/isocertified?populate=images.iamges&populate=heading&populate=paragraph`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        // Set heading data
        setHeading(res.data.heading);

        // Set paragraph data
        const paragraphData = res.data.paragraph.map((p) => ({
          text: p.text,
          colored_text: p.colored_text,
          second_text: p.second_text,
        }));
        setParagraph(paragraphData); // Set both paragraphs

        // Set certifications images data
        const fetchedImages = res.data.images.flatMap((img) => img.iamges.map((image) => image.url)); // Flattening the iamges array and getting the image URLs
        setCertifications(fetchedImages);
        // const fetchedImages1 = res.data.images.map((img) => img.iamges[1].url); // Getting the image URL
        // setCertifications1(fetchedImages1);
      })
      .catch((err) => {
        console.error("Error fetching ISO certifications data:", err);
      });
  }, []);

  // Split the certifications into two parts (first 3 and next 3)
  const first3Images = certifications.slice(0, 3);
  const next3Images = certifications.slice(3, 6);

  return (
    <section className="text-white py-12 md:px-6">
      <div className="max-w-6xl mx-auto text-center w-full flex flex-col gap-[40px] md:gap-[64px]">
        {/* Heading */}
        <Heading1 headingGray={heading.light_heading} headingWhite={heading.dark_heading} />

        {/* First paragraph and first 3 certification images */}
        <Text>
          {paragraph[0]?.text}{" "}
          <GradientSpan>{paragraph[0]?.colored_text}</GradientSpan> {paragraph[0]?.second_text}
        </Text>

        {/* First 3 Certification Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] w-full">
          {first3Images.length > 0 ? (
            first3Images.map((cert, index) => (
              <img
                key={index}
                src={cert}
                alt={`ISO certification ${index + 1}`}
                className="md:w-[370px]"
              />
            ))
          ) : (
            <p>Loading certifications...</p>
          )}
        </div>

        {/* Second paragraph and next 3 certification images */}
        <Text>
          {paragraph[1]?.text}{" "}
          <GradientSpan>{paragraph[1]?.colored_text}</GradientSpan> {paragraph[1]?.second_text}
        </Text>

        {/* Next 3 Certification Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] w-full">
          {next3Images.length > 0 ? (
            next3Images.map((cert, index) => (
              <img
                key={index}
                src={cert}
                alt={`ISO certification ${index + 1}`}
                className="md:w-[370px]"
              />
            ))
          ) : (
            <p>Loading next set of certifications...</p>
          )}
        </div>

        <Text>
          {paragraph[2]?.text}{" "}
          <GradientSpan>{paragraph[2]?.colored_text}</GradientSpan> {paragraph[2]?.second_text}
        </Text>
      </div>
    </section>
  );
};

export default ISOSection;
