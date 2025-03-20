// import React from "react";
// import Heading1 from "./ui/Heading1";
// import { Text, GradientSpan } from "./ui/Text";

// const OurPatent = () => {
//   const patents = [
//     {
//       image: "/ourpatent1.svg",
//       text: "SIAE – National copyright registration in Italy",
//     },
//     {
//       image: "/ourpatent2.svg",
//       text: "Copyright Office – International copyright protections",
//     },
//     {
//       image: "/ourpatent3.svg",
//       text: "Italian Ministry of Economic Development (MSE) – National patent recognition",
//     },
//     {
//       image: "/ourpatent4.svg",
//       text: "WIPO (World Intellectual Property Organization) – International patent validation",
//     },
//   ];

//   return (
//     <section>
//       {/* ====== Our Patent ===== */}
//       <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
//         <Heading1 headingGray="Our" headingWhite="patents" />
//         {/* <Text>
//         Tolemaica's commitment to innovation and security is backed by strong intellectual property protection. Our patented <GradientSpan>Instant Automatic Certification (IAC) technology</GradientSpan> is recognized at both national and international levels, ensuring legal validity and compliance in data certification.
//         </Text> */}

//         <div className="w-full mx-auto flex flex-col xl:flex-row justify-center items-center  md:gap-[20px] gap-2">
//           {patents.map((patent, index) => (
//             <div
//               className={`${
//                 index % 2 === 0 ? "patent-2" : "patent-1"
//               } py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row xl:flex-col justify-center items-center gap-[10px] md:gap-[60px]`}
//             >
//               <img
//                 src={patent.image}
//                 alt=""
//                 className="lg:w-[150px] lg:h-[80px] md:w-[120px] md:h-[120px] w-[60px] h-[32px] "
//               />
//               <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
//                 {patent.text}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* <Text>
//           Our patented technology ensures{" "}
//           <GradientSpan>
//             legal certification, data integrity, security, and compliance,
//           </GradientSpan>{" "}
//           protecting businesses and individuals worldwide.
//         </Text> */}
//       </div>
//       {/* ====== Our Patent =====  End*/}
//     </section>
//   );
// };

// export default OurPatent;

import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";

const OurPatent = () => {
  const patents = [
    {
      image: "/ourpatent1.svg",
      text: "SIAE – National copyright registration in Italy",
      w: "150px",
      h: "80px"
    },
    {
      image: "/ourpatent2.svg",
      text: "Copyright Office – International copyright protections",
      w: "120px",
      h: "120px"
    },
    {
      image: "/ourpatent3.svg",
      text: "Italian Ministry of Economic Development (MSE) – National patent recognition",
      w: "107px",
      h: "120px"
    },
    {
      image: "/ourpatent4.svg",
      text: "WIPO (World Intellectual Property Organization) – International patent validation",
      w: "95px",
      h: "120px"
    },
  ];

  return (
    <section>
      {/* ====== Our Patent ===== */}
      <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
        <Heading1 headingGray="Our" headingWhite="patents" />
        {/* <Text>
        Tolemaica's commitment to innovation and security is backed by strong intellectual property protection. Our patented <GradientSpan>Instant Automatic Certification (IAC) technology</GradientSpan> is recognized at both national and international levels, ensuring legal validity and compliance in data certification.
        </Text> */}

        <div className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center  md:gap-[20px] gap-2">
          {/* {patents.map((patent, index) => ( */}
          <div
            className="patent-2 py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row lg:flex-col lg:justify-center justify-start  items-center gap-[10px] md:gap-[60px]"
          //  className={`${index % 2 === 0 ? "patent-2" : "patent-1"
          //   } py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row xl:flex-col justify-center items-center gap-[10px] md:gap-[60px]`}
          >
            <img
              src="/ourpatent1.svg"
              alt=""
              className="lg:w-[150px] lg:h-[80px] w-[61px] h-[32px]"
            />
            <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
              SIAE - National copyright registration in Italy
            </p>
          </div>

          <div
            className="patent-1 py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row lg:flex-col lg:justify-center justify-start  items-center gap-[10px] md:gap-[60px]"
          //  className={`${index % 2 === 0 ? "patent-2" : "patent-1"
          //   } py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row xl:flex-col justify-center items-center gap-[10px] md:gap-[60px]`}
          >
            <img
              src="/ourpatent2.svg"
              alt=""
              className="w-[47px] h-[47px] lg:w-[120px] lg:h-[120px]"
            />
            <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
              SIAE - National copyright registration in Italy
            </p>
          </div>
          <div
            className="patent-2 py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row xl:flex-col lg:flex-col lg:justify-center justify-start  items-center gap-[10px] md:gap-[60px]"
          //  className={`${index % 2 === 0 ? "patent-2" : "patent-1"
          //   } py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row xl:flex-col justify-center items-center gap-[10px] md:gap-[60px]`}
          >
            <img
              src="/ourpatent3.svg"
              alt=""
              className="w-[42px] h-[48px] lg:w-[106px] lg:h-[120px]"
            />
            <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
              SIAE - National copyright registration in Italy
            </p>
          </div>
          <div
            className="patent-1 py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row xl:flex-col lg:flex-col lg:justify-center justify-start items-center  gap-[10px] md:gap-[60px]"
          //  className={`${index % 2 === 0 ? "patent-2" : "patent-1"
          //   } py-[12px] md:py-[62px] px-[27px] md:px-[50px] max-h-[400px] lg:h-[400px] lg:w-[300px] w-full border border-white/64 bg-black/[0.08] rounded-[20px] flex flex-row xl:flex-col justify-center items-center gap-[10px] md:gap-[60px]`}
          >
            <img
              src="/ourpatent4.svg"
              alt=""
              className="w-[37px] h-[57px] lg:w-[94px] lg:h-[140px]"
            />
            <p className="font-outfit font-light text-[12px] md:text-xl text-white/64 text-center">
              SIAE - National copyright registration in Italy
            </p>
          </div>

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

