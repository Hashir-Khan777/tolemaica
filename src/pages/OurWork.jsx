// import React, { useRef } from "react";
// import UseCaseHero from "../components/UseCaseHero";
// import ISOSection from "../components/ISOCertified";
// import Heading1 from "../components/ui/Heading1";
// import { GradientSpan, Text } from "../components/ui/Text";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const OurWork = () => {
//   const defaultData = [
//     {
//       value: "99.6",
//       operator: "%",
//       description: "Reduction in Legal Disputes",
//     },
//     {
//       value: "€1.5",
//       operator: "M",
//       description: "Eliminated in Legal Costs",
//     },
//     {
//       value: "2",
//       operator: "X",
//       description: "Increase in business Subscriptions",
//     },
//   ];
//   const impacts = [
//     {
//       heading: "METRIC",
//       points: [
//         "Legal Disputes",
//         "Legal Costs (€)",
//         "Business Plan Revenue",
//         "Compliance Enforcement",
//         "Time Spent on Disputes",
//       ],
//     },
//     {
//       heading: "BEFORE",
//       points: [
//         "500 per year",
//         "1.5M annually",
//         "1x (baseline)",
//         "Weak",
//         "High",
//       ],
//     },
//     {
//       heading: "AFTER",
//       points: ["2 per year", "Near 0", "2x (100% increase)", "Strong", "Low"],
//     },
//     {
//       heading: "IMPACT",
//       points: [
//         "99.6% Reduction",
//         "1.5M Savings",
//         "Revenue Doubled",
//         "Higher Adherence",
//         "efficient Legal Process",
//       ],
//     },
//   ];

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const renderResultItem = (item) => (
//     <div className="flex flex-col items-center  gap-[10px] p-[10px] text-center min-w-[105px] md:[372px]">
//       <h3 className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-outfit ">
//         <span className="font-[400] lg:text-[128px]/[100%] text-[40px]/[100%]">
//           {item.value}
//         </span>
//         <span className="lg:text-[100px]/[100%] text-[24px]/[100%] font-[400] md:font-[200]">
//           {item.operator}
//         </span>
//       </h3>
//       <p className="text-white font-outfit md:text-[24px]/[28px] text-[14px]/[100%] font-[300] capitalize max-w-xs">
//         {item.description}
//       </p>
//     </div>
//   );

//   return (
//     <div>
//       <UseCaseHero
//         title="CASE STUDIES"
//         page="OUR WORK"
//         text="Discover How Tolemaica Transforms Industries with"
//         gradientText="Certified Digital Solutions"
//         secondtext=""
//        // image="/skyimage.png"
//       />
//       <div className="relative bg-black">
//         <video
//           src="/ourpartners.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           webkit-playsinline
//           className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//           style={{ filter: "blur(40px)" }}
//         />
//         <div className="max-w-[1280px] relative z-10 py-[100px] px-[20px] md:px-auto mx-auto">
//           {/* <h1 className="text-center font-raleway text-white font-normal text-xl md:text-[40px] mb-[48px]">
//             <span className="text-white/[0.64]">THE</span> CHALLENGE
//           </h1> */}
//           <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
//             <p>
//             Explore our case studies to see how Tolemaica enhances compliance, security, and efficiency across banking, insurance, construction, shipping, and media & telecommunication industries.
//             </p>
            
//           </div>
//           <div className="flex flex-col gap-[50px]">
//             <div
//               style={{
//                 border: "2px solid transparent",
//                 background:
//                   "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
//               }}
//               className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start sm:justify-center lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white  lg:mr-[100px]"
//             >
//               {/* <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               <img src="/work-company-1.png" className="rounded-[12px] mx-auto" />
//               </div> */}
//               <div className="font-outfit font-light text-[24px] md:text-[32px]   flex flex-col lg:items-end pr-[24px]">
//                 <h2 className="uppercase">Banking Sector</h2>
//                 <p className="uppercase mt-[24px] mb-[16px] font-outfit font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                 Ensuring Legal Certainty & Fraud Prevention
//               </p>
//               <p className="font-outfit font-light text-base md:text-xl text-white/64 lg:text-right">
//               Tolemaica strengthens financial institutions with real-time digital certification, reducing fraud and ensuring regulatory compliance.
//               </p>
//               <a className="readMore mt-[24px]" href="banking-sector"><span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal lg:text-2xl text-center">Learn More</span></a>
//               </div>
//             </div>
//             <div
//               style={{
//                 border: "2px solid transparent",
//                 background:
//                   "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to right, #FF986433 20%, #602F16, #FF9864) border-box",
//               }}
//               className="shadow-challenge-2 flex flex-wrap lg:flex-nowrap lg:justify-end lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pr-[45px] px-[5px] text-white lg:ml-[100px]"
//             >
//               <div className="font-outfit font-light text-[24px] md:text-[32px] pl-[24px]">
//               <h2 className="uppercase">Container and Shipping</h2>
//                 <p className="uppercase mt-[24px] mb-[16px] font-outfit font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                 Certified Digital Solution for Secure Container Entry & Exit
//               </p>
//               <p className="font-outfit font-light text-base md:text-xl text-white/64 ">
//               Tolemaica enhances security in global shipping by providing verifiable digital proof of cargo integrity and compliance.
//               </p>
//               <a className="readMore mt-[24px]" href="msc-shipping"><span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal lg:text-2xl text-center">Learn More</span></a>
//               </div>
//               {/* <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               <img src="/work-company-2.png" className="rounded-[12px] mx-auto" />
//               </div> */}
//             </div>
//             <div
//               style={{
//                 border: "2px solid transparent",
//                 background:
//                   "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
//               }}
//               className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white  lg:mr-[100px]"
//             >
//               {/* <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               <img src="/work-company-3.png" className="rounded-[12px] mx-auto" />
//               </div> */}
//               <div className="font-outfit font-light text-[24px] md:text-[32px]  flex flex-col lg:items-end pr-[24px]">
//                 <h2 className="uppercase  ">Media and Telecommunication</h2>
//                 <p className="uppercase    mt-[24px] mb-[16px] font-outfit font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                 Enhancing Compliance & Revenue with Tolemaica
//               </p>
//               <p className="font-outfit font-light text-base md:text-xl text-white/64 lg:text-right ">
//               By implementing secure, tamper-proof certification, Media and Telecommunication sector reduced legal disputes and streamlined compliance processes.
//               </p>
//               <a className="readMore mt-[24px]" href="sky-italia"><span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal lg:text-2xl text-center">Learn More</span></a>
//               </div>
//             </div>
           
//             <div
//               style={{
//                 border: "2px solid transparent",
//                 background:
//                   "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to right, #FF986433 20%, #602F16, #FF9864) border-box",
//               }}
//               className="shadow-challenge-2 flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pr-[45px] px-[5px] text-white lg:ml-[100px]"
//             >
//               <div className="font-outfit font-light text-[24px] md:text-[32px] pl-[24px]">
//               <h2 className="uppercase">Insurance Sector</h2>
//                 <p className="uppercase mt-[24px] mb-[16px] font-outfit font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                 Enhancing Insurance Claims Processing with Digital Certification
//               </p>
              
//               <p className="font-outfit font-light text-base md:text-xl text-white/64 ">
//               Tolemaica implemented Instant Automatic Certification (IAC), allowing real-time image certification. 
//               </p>
              
//               <a className="readMore mt-[24px]" href="insurance-sector"><span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal lg:text-2xl text-center">Learn More</span></a>
//               </div>
//               {/* <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               <img src="/work-company-2.png" className="rounded-[12px] mx-auto" />
//               </div> */}
//             </div>
//             <div
//               style={{
//                 border: "2px solid transparent",
//                 background:
//                   "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
//               }}
//               className="shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white  lg:mr-[100px]"
//             >
//               {/* <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               <img src="/work-company-3.png" className="rounded-[12px] mx-auto" />
//               </div> */}
//               <div className="font-outfit font-light text-[24px] md:text-[32px]  flex flex-col lg:items-end pr-[24px]">
//                 <h2 className="uppercase">Construction Sector</h2>
//                 <p className="uppercase   mt-[24px] mb-[16px] font-outfit font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                 Ensuring Transparency and Accuracy in
// Construction Progress Tracking
//               </p>
//               <p className="font-outfit font-light text-base md:text-xl text-white/64 lg:text-right  ">
//               Tolemaica’s DataClick provides a certified photographic documentation system that ensures transparency and accuracy in tracking.
//               </p>
//               <a className="readMore mt-[24px]" href="construction-sector"><span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal lg:text-2xl text-center">Learn More</span></a>
//               </div>
//             </div>
//             <div
//               style={{
//                 border: "2px solid transparent",
//                 background:
//                   "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to right, #FF986433 20%, #602F16, #FF9864) border-box",
//               }}
//               className="shadow-challenge-2 flex flex-wrap lg:flex-nowrap lg:justify-end lg:text-start sm:justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pr-[45px] px-[5px] text-white lg:ml-[100px]"
//             >
//               <div className="font-outfit font-light text-[24px] md:text-[32px] pl-[24px]">
//               <h2 className="uppercase">Aerospace Logistics</h2>
//                 <p className="uppercase mt-[24px] mb-[16px] font-outfit font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
//                 Ensuring Compliance and Liability Protection in Aerospace Logistics with Digital Certification 
//               </p>
//               <p className="font-outfit font-light text-base md:text-xl text-white/64 ">
//               Tolemaica deployed BarCertCode, an automated system that legally timestamps component storage.
//               </p>
//               <a className="readMore mt-[24px]" href="aerospace-logistics"><span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal lg:text-2xl text-center">Learn More</span></a>
//               </div>
//               {/* <div className="z-999 font-outfit font-[100] text-[32px] md:text-[104px] bg-gradient-to-r to-[#FFFFFF] from-[#555555] bg-clip-text text-transparent">
//               <img src="/work-company-2.png" className="rounded-[12px] mx-auto" />
//               </div> */}
//             </div>
//           </div>
           
          
           
           
           
          
         
           
//           <ISOSection />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurWork;



import React, { useEffect, useState } from "react";
import UseCaseHero from "../components/UseCaseHero";
import ISOSection from "../components/ISOCertified";
import Heading1 from "../components/ui/Heading1";
import { GradientSpan, Text } from "../components/ui/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurWork = () => {
  const [data, setData] = useState(null);

  // Fetch the data from the API
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      
      const response = await fetch(`${apiUrl}/work-lp?populate=workLPDetails.Work_list_item&populate=workLPDetails.Header_paragraph&populate=workLPDetails.Main_heading`);
      const result = await response.json();
      setData(result.data); // Assuming the data is wrapped inside 'data'
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="bg-black">Loading...</div>; // Optional: display loading until data is fetched
  }

  // Extract relevant parts from the response
  const { workLPDetails } = data;
  const { Main_heading, Header_paragraph, Work_list_item, Second_paragraph } = workLPDetails;

  return (
    <div>
      <UseCaseHero
        title={Main_heading.light_heading}
        page={Main_heading.dark_heading}
        text={Header_paragraph.text}
        gradientText={Header_paragraph.colored_text}
        secondtext=""
      />

      <div className="relative bg-black">
        <video
          src="/ourpartners.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          style={{ filter: "blur(40px)" }}
        />
        <div className="max-w-[1280px] relative z-10 py-[100px] px-[20px] md:px-auto mx-auto">
          <div className="flex flex-col gap-[48px] font-outfit font-light text-base md:text-2xl text-white/[0.64] text-center mb-[50px]">
            <p>{Second_paragraph}</p>
          </div>

          <div className="flex flex-col gap-[50px]">
  {Work_list_item.map((item, index) => (
    <div
      key={index}
      style={{
        border: "2px solid transparent",
        background:
          "linear-gradient(#000000 0%, #000000 0%) padding-box, linear-gradient(to left, #FF986433 20%, #602F16, #FF9864) border-box",
      }}
      className={`${
        index % 2 === 0
          ? "shadow-challenge flex flex-wrap lg:flex-nowrap lg:justify-start sm:justify-center lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pl-[45px] px-[5px] text-white  lg:mr-[100px]"
          : "shadow-challenge-2 flex flex-wrap lg:flex-nowrap lg:justify-start lg:text-start justify-center text-center rounded-[10px] items-center gap-[32px] py-[65px] lg:pr-[45px] px-[5px] text-white lg:ml-[100px]"
      }`}
    >
      <div className={`font-outfit font-light text-[24px] md:text-[32px] ${index % 2 === 0 ? "flex flex-col lg:items-end pr-[24px]" : "pl-[24px]"}`}>
        <h2 className="uppercase">{item.Title}</h2>
        <p className="uppercase mt-[24px] mb-[16px] font-outfit font-medium text-xl md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
          {item.Description}
        </p>
        <p 
        className={`${
          index % 2 === 0
            ? "font-outfit font-light text-base md:text-xl text-white/64 lg:text-right"
            : "font-outfit font-light text-base md:text-xl text-white/64 lg:text-left"
        }`}
       >
          {item.Details}
        </p>
        <a className="readMore mt-[24px]" href={item.Button_Link}>
          <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent font-raleway font-normal lg:text-2xl text-center">
            Learn More
          </span>
        </a>
      </div>
    </div>
  ))}
</div>


          <ISOSection />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
