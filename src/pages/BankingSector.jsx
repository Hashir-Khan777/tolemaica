// import React from 'react'
// import UseCaseHero from "../components/UseCaseHero";
// import BankingSectorSection from '../components/BankingSectorSec';

// const BankingSector = () => {
//     return (
//         <>
//             <UseCaseHero
//                 title="Secure Digital Authentication"
//                 page="BANKING SECTOR"
//                 text="Enhancing"
//                 gradientText="Legal Certainty, Regulatory Compliance & Fraud Prevention"
//                 secondtext="for Financial Institutions"
//             />
//             <BankingSectorSection />

           

//         </>
//     )
// }

// export default BankingSector

import React, { useState, useEffect } from "react";
import BankingSectorSection from '../components/BankingSectorSec';
import UseCaseHero from "../components/UseCaseHero";

const BankingSector = () => {
  const [worksectorData, setWorksectorData] = useState(null);

  // Fetch the API data on component mount
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const fetchData = async () => {
      const response = await fetch(
        `${apiUrl}/worksectors/g393lzjep7jh1eogjyge1kfl?populate[details][populate]=*&populate[services][populate]=*`
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
      <BankingSectorSection worksectorData={worksectorData} />
    </section>
  );
};

export default BankingSector;
