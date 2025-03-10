// import React from "react";

// // const teamMembers = [
// //     { name: "Domenico De Luca", role: "Founder and CEO", image: "/path-to-image1.jpg" },
// //     { name: "Vittorio Genna", role: "Chairman", image: "/path-to-image2.jpg" },
// //     { name: "Mauro Romano", role: "Chief Strategy Officer", image: "/path-to-image3.jpg" },
// //     { name: "Gianluca Pirpan", role: "Chief Technology Officer", image: "/path-to-image4.jpg" },
// //     { name: "Member 5", role: "Chief Legal Officer", image: "/path-to-image5.jpg" },
// //     { name: "Member 6", role: "CFO", image: "/path-to-image6.jpg" },
// // ];



// const TeamSection = () => {
//     return (
//         <section className="py-12 px-4 bg-black text-white">
//             <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
//                 Meet <span className="text-[#FFD700]">The Team</span>
//             </h2>

//             <div className="flex flex-row max-w-[1280px] justify-between gap-20">
//                 <div className="flex flex-col">
//                     <img src="/team1.svg" alt="Team Member of Telomacia" className="h-[750px] w-[590px]" />
//                     <img src="/team1.svg" alt="Team Member of Telomacia" className="h-[750px] w-[590px]" />
//                     <img src="/team1.svg" alt="Team Member of Telomacia" className="h-[750px] w-[590px]" />
//                 </div>
//                 <div className="flex flex-col mt-40">
//                     <img src="/team1.svg" alt="Team Member of Telomacia" className="h-[750px] w-[590px]" />
//                     <img src="/team1.svg" alt="Team Member of Telomacia" className="h-[750px] w-[590px]" />
//                     <img src="/team1.svg" alt="Team Member of Telomacia" className="h-[750px] w-[590px]" />
//                 </div>

//             </div>

//             {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//                 {teamMembers.map((member, index) => (
//                     <div key={index} className="w-[300px] bg-gradient-to-b from-[#27151a] to-[#191717] p-4 rounded-lg border border-white/20 shadow-lg">
//                         <img
//                             src={member.image}
//                             alt={member.name}
//                             className="w-full h-[320px] object-cover rounded-md"
//                         />
//                         <h3 className="text-xl font-bold mt-4 text-center">{member.name}</h3>
//                         <p className="text-white/70 text-center">{member.role}</p>
//                     </div>
//                 ))}
//             </div> */}
//         </section>
//     );
// };

// export default TeamSection;

import React from "react";
import Heading1 from './ui/Heading1'

const TeamSection = () => {
    return (
        <section className="py-12 px-4 text-white mx-auto flex flex-col gap-[16px] md:gap-[64px]">

            <Heading1 headingGray="meet" headingWhite="the team" />

            <div className="flex flex-col md:flex-row max-w-[1280px] justify-between gap-[20px] md:gap-20 mx-auto">
                <div className="flex flex-col gap-[20px] md:gap-20">
                    <img src="/team1.svg" alt="Team Member of Telomacia" className="w-full sm:w-[350px] md:w-[590px] h-auto object-cover rounded-lg" />
                    <img src="/team2.svg" alt="Team Member of Telomacia" className="w-full sm:w-[350px] md:w-[590px] h-auto object-cover rounded-lg" />
                    <img src="/team3.svg" alt="Team Member of Telomacia" className="w-full sm:w-[350px] md:w-[590px] h-auto object-cover rounded-lg" />
                </div>

                <div className="flex flex-col md:mt-40 mt-0 gap-[20px] md:gap-20">
                    <img src="/team4.svg" alt="Team Member of Telomacia" className="w-full sm:w-[350px] md:w-[590px] h-auto object-cover rounded-lg" />
                    <img src="/team5.svg" alt="Team Member of Telomacia" className="w-full sm:w-[350px] md:w-[590px] h-auto object-cover rounded-lg" />
                    <img src="/team6.svg" alt="Team Member of Telomacia" className="w-full sm:w-[350px] md:w-[590px] h-auto object-cover rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

