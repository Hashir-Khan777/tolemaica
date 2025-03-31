import React from "react";
import InsuranceSection from "../components/ConstructionSection";
import UseCaseHero from "../components/UseCaseHero";

const ConstructionSector = () => {
  return (
    <section>
      <UseCaseHero
        title="Use case"
        page="CONSTRUCTION SECTOR"
        text="Ensuring Transparency & Accuracy in "
        gradientText="Construction progress Tracking"
        // secondtext="for Financial Institutions"
      />
      <InsuranceSection />
    </section>
  );
};

export default ConstructionSector;
