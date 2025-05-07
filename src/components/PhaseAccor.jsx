// import React, { useState } from "react";
// import Heading1 from "./ui/Heading1";

// const PhaseAccor = () => {
//   const [openPhase, setOpenPhase] = useState("one");

//   const phases = [
//     {
//       id: "one",
//       subtitle: "SECURE DIGITAL AUTHENTICATION",
//       description:
//         "For remote transactions—like purchase orders, contracts, policy acceptances, and service orders—identity verification is crucial.",
//       worksList: [
//         "Biometric AI Recognition verifies the user's identity.",
//         "NFC-Based Digital ID Matching cross-checks official documents.",
//         "The result: Strong Authentication with an Advanced Electronic Signature (AES) that complies with eIDAS regulations.",
//       ],
//       benefits: [
//         "Faster: Instant biometric & NFC ID scan eliminates manual steps.",
//         "Legally Stronger: AES is always enforceable—unlike SES, which can be disputed.",
//         "More Secure: No reliance on OTPs, email verifications, or ID photo uploads.",
//       ],
//     },
//     {
//       id: "two",
//       subtitle: "SECURE DIGITAL AUTHENTICATION",
//       description:
//         "For remote transactions—like purchase orders, contracts, policy acceptances, and service orders—identity verification is crucial.",
//       worksList: [
//         "Biometric AI Recognition verifies the user's identity.",
//         "NFC-Based Digital ID Matching cross-checks official documents.",
//         "The result: Strong Authentication with an Advanced Electronic Signature (AES) that complies with eIDAS regulations.",
//       ],
//       benefits: [
//         "Faster: Instant biometric & NFC ID scan eliminates manual steps.",
//         "Legally Stronger: AES is always enforceable—unlike SES, which can be disputed.",
//         "More Secure: No reliance on OTPs, email verifications, or ID photo uploads.",
//       ],
//     },
//     {
//       id: "three",
//       subtitle: "SECURE DIGITAL AUTHENTICATION",
//       description:
//         "For remote transactions—like purchase orders, contracts, policy acceptances, and service orders—identity verification is crucial.",
//       worksList: [
//         "Biometric AI Recognition verifies the user's identity.",
//         "NFC-Based Digital ID Matching cross-checks official documents.",
//         "The result: Strong Authentication with an Advanced Electronic Signature (AES) that complies with eIDAS regulations.",
//       ],
//       benefits: [
//         "Faster: Instant biometric & NFC ID scan eliminates manual steps.",
//         "Legally Stronger: AES is always enforceable—unlike SES, which can be disputed.",
//         "More Secure: No reliance on OTPs, email verifications, or ID photo uploads.",
//       ],
//     },
//     {
//       id: "four",
//       subtitle: "SECURE DIGITAL AUTHENTICATION",
//       description:
//         "For remote transactions—like purchase orders, contracts, policy acceptances, and service orders—identity verification is crucial.",
//       worksList: [
//         "Biometric AI Recognition verifies the user's identity.",
//         "NFC-Based Digital ID Matching cross-checks official documents.",
//         "The result: Strong Authentication with an Advanced Electronic Signature (AES) that complies with eIDAS regulations.",
//       ],
//       benefits: [
//         "Faster: Instant biometric & NFC ID scan eliminates manual steps.",
//         "Legally Stronger: AES is always enforceable—unlike SES, which can be disputed.",
//         "More Secure: No reliance on OTPs, email verifications, or ID photo uploads.",
//       ],
//     },
//   ];

//   const togglePhase = (id) => {
//     setOpenPhase(openPhase === id ? null : id);
//   };

//   return (
//     <div>
//       <div className="w-full max-w-[1280px] mx-auto">
//         {phases.map((phase) => (
//           <div
//             key={phase.id}
//             className={`${
//               openPhase === phase.id ? "accord-1" : "accord-2"
//             } mb-[40px] border-[2px] border-white/64 rounded-[15px]`}
//           >
//             <div
//               className="w-full p-[32px] cursor-pointer flex justify-between items-center"
//               onClick={() => togglePhase(phase.id)}
//             >
//               <div />
//               <Heading1
//                 headingGray="PHASE"
//                 headingWhite={phase.id.toUpperCase()}
//               />
//               <span className="text-lg md:text-xl">
//                 {openPhase === phase.id ? (
//                   <img src="/accorIcon2.svg" />
//                 ) : (
//                   <img src="/accorIcon1.svg" />
//                 )}
//               </span>
//             </div>

//             {openPhase === phase.id && (
//               <div className="p-5">
//                 <h3 className="font-raleway font-normal text-base md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent mb-[32px]">
//                   {phase.subtitle}
//                 </h3>
//                 <p className="font-outfit font-light text-base md:text-2xl text-white/64 text-start md:text-center">
//                   {phase.description}
//                 </p>
//                 <div className="max-w-[788px] h-[2px] bg-white/20 mx-auto my-[32px]" />
//                 <div className="text-start max-w-[1000px] mx-auto md:mb-[205px]">
//                   <h2 className="font-outfit font-light text-base md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent mb-8">
//                     HOW IT WORKS
//                   </h2>
//                   <ul className="list-disc pl-5 text-gray-300 text-xs md:text-sm mb-8">
//                     {phase.worksList.map((item, index) => (
//                       <li
//                         key={index}
//                         className="font-outfit font-light text-base md:text-2xl text-white/64"
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                   <h2 className="font-outfit font-light text-base md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent mb-8">
//                     Why It’s Better Than Traditional Authentication:
//                   </h2>
//                   <ul className="list-disc pl-5 text-gray-300 text-xs md:text-sm">
//                     {phase.benefits.map((item, index) => (
//                       <li
//                         key={index}
//                         className="font-outfit font-light text-base md:text-2xl text-white/64"
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhaseAccor;
import React, { useState } from "react";
import Heading1 from "./ui/Heading1";

const PhaseAccor = ({ data }) => {
  const [openPhase, setOpenPhase] = useState("one");

  const togglePhase = (id) => {
    setOpenPhase(openPhase === id ? null : id);
  };

  // Modify the ids in the phases array and map them as "one", "two", "three", etc.
  const phases = data?.map((phase, index) => ({
    ...phase,  // Keep the original properties of each phase
    id: ["one", "two", "three", "four", "five", "six"][index]  // Assign new ids
  })) || [];
  console.log("phases data inside:" , phases)
  return (
    <div>
      <div className="w-full max-w-[1280px] mx-auto">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className={`${
              openPhase === phase.id ? "accord-1" : "accord-2"
            } mb-[40px] border-[2px] border-white/64 rounded-[15px]`}
          >
            <div
              className="w-full p-[32px] cursor-pointer flex justify-between items-center"
              onClick={() => togglePhase(phase.id)}
            >
              <div />
              <Heading1
                headingGray=""
                headingWhite={phase.Heading.light_heading.toUpperCase()}
              />
              <span className="text-lg md:text-xl">
                {openPhase === phase.id ? (
                  <img src="/accorIcon2.svg" />
                ) : (
                  <img src="/accorIcon1.svg" />
                )}
              </span>
            </div>

            {openPhase === phase.id && (
              <div className="p-5">
                <h3 className="font-raleway font-normal text-base md:text-2xl bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent mb-[32px]">
                  {phase.Heading.dark_heading}
                </h3>
                <p className="font-outfit font-light text-base md:text-2xl text-white/64 text-start md:text-center">
                  {phase.Heading.second_dark_heading}
                </p>
                <div class="max-w-[788px] h-[2px] bg-white/20 mx-auto my-[32px]"></div>
                <div
                  className="font-outfit font-light text-base md:text-2xl text-white/64"
                  dangerouslySetInnerHTML={{ __html: phase.Description }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhaseAccor;
