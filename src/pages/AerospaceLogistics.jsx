// import React from "react";
// import AerospaceSection from "../components/AerospaceSection";
// import UseCaseHero from "../components/UseCaseHero";

// const AerospaceLogistics = () => {
//   return (
//     <section>
//       <UseCaseHero
//         title="Use case"
//         page="AEROSPACE LOGISTICS"
//         text="Ensuring Compliance and Liability Protection in "
//         gradientText="Aerospace Logistics with Digital Certification"
//         // secondtext="for Financial Institutions"
//       />
//       <AerospaceSection />
//     </section>
//   );
// };

// export default AerospaceLogistics;
import React, { useState, useEffect } from "react";
import AerospaceSection from "../components/AerospaceSection";
import UseCaseHero from "../components/UseCaseHero";

const AerospaceLogistics = () => {
  const [worksectorData, setWorksectorData] = useState(null);

  // Fetch the API data on component mount
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const fetchData = async () => {
      const response = await fetch(
        `${apiUrl}/worksectors/prkfpj4jshx9wjjobucyq2j3?populate=details&populate=services.heading&populate=services.image`
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
      <AerospaceSection worksectorData={worksectorData} />
    </section>
  );
};

export default AerospaceLogistics;
