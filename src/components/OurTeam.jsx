

// import React from "react";
// import Heading1 from './ui/Heading1'
// import TeamCard from "./ui/TeamCard";

// const ourTeam = [
//     {
//         name:"Domenico De Luca",
//         position:"Founder and CEO",
//         image:"/images/team1.png",
//         bgImage:"/aboutcardbg1.svg"
//     },
//     {
//         name:"Mauro Romano",
//         position:"Chief Strategy Officer",
//         image:"/images/teamMember2.png",
//         bgImage:"/images/card2bg.png"
//     },
//     {
//         name:"Marco Leonetti di Santojanni",
//         position:"Chief Financial Officer",
//         image:"/images/teamMember3.png",
//         bgImage:"/images/card3bg.png"
//     },
// ]
// const ourTeam2 = [
//     // {
//     //     name:"Vittorio Genna",
//     //     position:"Chairman",
//     //     image:"/images/teamMember4.png",
//     //     bgImage:"/images/card4bg.png"
//     // },
//     {
//         name:"Gianluca Pirpan",
//         position:"Chief Technology Officer",
//         image:"/images/teamMember5.png",
//         bgImage:"/images/card5bg.png"
//     },
//     {
//         name:"Emiliano Boccia",
//         position:"Chief Legal Officer",
//         image:"/images/teamMember6.png",
//         bgImage:"/images/card6bg.png"
//     },
// ]

// const TeamSection = () => {
//     return (
//         <section className="py-12  text-white mx-auto flex flex-col justify-center items-center gap-[16px]  lg:gap-[64px]">

//             <Heading1 headingGray="meet" headingWhite="the team" />

//             <div className="flex flex-col md:flex-row max-w-[1280px] justify-between gap-[20px] md:gap-10 lg:gap-20 mx-auto">
//                 <div className="flex-1 flex flex-col gap-[20px] md:gap-10 lg:gap-20">
//                 {
//                     ourTeam.map((card,index)=> <div index={index}>
//                     <TeamCard cards={card}/>
//                     </div> )
//                 }
//                 </div>

//                 <div className="flex-1 flex flex-col md:mt-[400px] mt-0 gap-[20px] md:gap-10 lg:gap-20">
//                 {
//                     ourTeam2.map((card,index)=> <div index={index}>
//                     <TeamCard cards={card}/>
//                     </div> )
//                 }
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TeamSection;
import React, { useState, useEffect } from "react";
import Heading1 from './ui/Heading1';
import TeamCard from "./ui/TeamCard";

const TeamSection = () => {
    const [teamData, setTeamData] = useState({ heading: {}, team: [] });

    useEffect(() => {
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/aboutteam?populate=heading&populate=team&populate=team.bg_image&populate=team.image`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                const teamHeading = data.data.heading;
                const teamMembers = data.data.team.map((team) => ({
                    name: team.name,
                    position: team.position,
                    image: team.image?.url, // Fetching the image URL
                    bgImage: team.bg_image?.url, // Fetching the background image URL
                }));
                setTeamData({ heading: teamHeading, team: teamMembers });
            })
            .catch((err) => {
                console.error("Error fetching team data:", err);
            });
    }, []);

    return (
        <section className="py-12 text-white mx-auto flex flex-col justify-center items-center gap-[16px] lg:gap-[64px]">
            {/* Heading */}
            <Heading1 headingGray={teamData.heading.light_heading} headingWhite={teamData.heading.dark_heading} />

            <div className="flex flex-col md:flex-row max-w-[1280px] justify-between gap-[20px] md:gap-10 lg:gap-20 mx-auto">
                <div className="flex-1 flex flex-col gap-[20px] md:gap-10 lg:gap-20">
                    {
                        teamData.team.slice(0, 3).map((card, index) => (
                            <div key={index}>
                                <TeamCard cards={card} />
                            </div>
                        ))
                    }
                </div>

                <div className="flex-1 flex flex-col md:mt-[400px] mt-0 gap-[20px] md:gap-10 lg:gap-20">
                    {
                        teamData.team.slice(3).map((card, index) => (
                            <div key={index}>
                                <TeamCard cards={card} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamSection;


