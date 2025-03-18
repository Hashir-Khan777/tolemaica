import React from "react";
import FumigationProcess from "../components/FumigationProcess";
import MSCShippingSection from "../components/MscShippingSection";
import UseCaseHero from "../components/UseCaseHero";

const MSCShipping = () => {
  return (
    <section>
      <UseCaseHero
        title="Use case"
        page="msc shipping"
        text="Certified Digital Solution for"
        gradientText="Secure Container Entry & Exit"
        // secondtext="for Financial Institutions"
      />
      <MSCShippingSection />
    </section>
  );
};

export default MSCShipping;
