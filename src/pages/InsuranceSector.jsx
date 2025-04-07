import React from "react";
import InsuranceSection from "../components/InsuranceSection";
import UseCaseHero from "../components/UseCaseHero";

const InsuranceSector = () => {
  return (
    <section>
      <UseCaseHero
        title="Use case"
        page="INSURANCE SECTOR"
        text="Enhancing Insurance Claims "
        gradientText="Processing With Digital Certification"
        // secondtext="for Financial Institutions"
      />
      <InsuranceSection />
    </section>
  );
};

export default InsuranceSector;
