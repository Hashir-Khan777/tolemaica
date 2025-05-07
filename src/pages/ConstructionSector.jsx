// import React from "react";
// import InsuranceSection from "../components/ConstructionSection";
// import UseCaseHero from "../components/UseCaseHero";

// const ConstructionSector = () => {
//   return (
//     <section>
//       <UseCaseHero
//         title="Use case"
//         page="CONSTRUCTION SECTOR"
//         text="Ensuring Transparency & Accuracy in "
//         gradientText="Construction progress Tracking"
//         // secondtext="for Financial Institutions"
//       />
//       <InsuranceSection />
//     </section>
//   );
// };

// export default ConstructionSector;
import React, { useState, useEffect } from "react";
import ConstructionSection from "../components/ConstructionSection";
import UseCaseHero from "../components/UseCaseHero";

const ConstructionSector = () => {
  const [worksectorData, setWorksectorData] = useState(null);

  // Fetch the API data on component mount
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const fetchData = async () => {
      const response = await fetch(
        `${apiUrl}/worksectors/krowece8xo03q9um6xwq4zk5?populate=details&populate=services.heading&populate=services.image`
      );
      const data = await response.json();
      setWorksectorData(data.data); // Store the fetched data
    };

    fetchData();
  }, []);

  // Early return if data is still being fetched
  if (!worksectorData) {
    return <div className="bg-black">Loading...</div>; // Display loading message until data is available
  }

  const { details } = worksectorData;
  const heroData = details[0];
  const heroDesc = details[1];

  return (
    <section>
      <UseCaseHero
        title={heroData ? heroData.light_heading : "Loading..."}
        page={heroData ? heroData.dark_heading : "Loading..."}
        text={heroDesc ? heroDesc.text : "Loading..."}
        gradientText={heroDesc ? heroDesc.colored_text : "Loading..."}
      />
      {/* Pass the worksectorData to AerospaceSection */}
      <ConstructionSection worksectorData={worksectorData} />
    </section>
  );
};

export default ConstructionSector;
