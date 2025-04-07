import React from "react";
import InsuranceSection from "../components/AerospaceSection";
import UseCaseHero from "../components/UseCaseHero";

const AerospaceLogistics = () => {
  return (
    <section>
      <UseCaseHero
        title="Use case"
        page="AEROSPACE LOGISTICS"
        text="Ensuring Compliance and Liability Protection in "
        gradientText="Aerospace Logistics with Digital Certification"
        // secondtext="for Financial Institutions"
      />
      <InsuranceSection />
    </section>
  );
};

export default AerospaceLogistics;
