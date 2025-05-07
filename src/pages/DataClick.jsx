// import React from 'react'
// import ServiceHero from '../components/ServiceHero'
// import DataClickSection from '../components/DataClickSection'

// function DataClick() {
//   return (
//     <>
//       <ServiceHero 
//       title="Give Legal Value to Your Data with"
//       gradientTitle="DataClick's Certification!"
//       text="Digital Certification of " gradientText="Images, Sounds, and Videos"
//       />
//       <DataClickSection/>
//     </>
//   )
// }

// export default DataClick
import React, { useState, useEffect } from 'react';
import ServiceHero from '../components/ServiceHero';
import DataClickSection from '../components/DataClickSection';

function DataClick() {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/searviceheroes?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        // Filter the response where second_dark_heading is 'data_click'
        const filteredData = data.data.find(
          (item) => item.heading.second_dark_heading === "data_click"
        );
        
        if (filteredData) {
          setServiceData(filteredData);
        }
      })
      .catch((err) => {
        console.error("Error fetching service hero data:", err);
      });
  }, []);

  return (
    <>
      {/* Render ServiceHero component only if the data is available */}
      {serviceData && (
        <ServiceHero
          title={serviceData.heading.light_heading} // Use the heading data
          gradientTitle={serviceData.heading.dark_heading} // Use the dark heading
          text={serviceData.paragraph.text} // Use the paragraph text
          gradientText={serviceData.paragraph.colored_text} // Use the colored text
        />
      )}

      {/* Other sections like DataClickSection */}
      <DataClickSection />
    </>
  );
}

export default DataClick;
