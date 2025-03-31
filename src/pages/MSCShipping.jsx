import React from "react";
import MSCShippingSection from "../components/MscShippingSection";
import UseCaseHero from "../components/UseCaseHero";

const MSCShipping = () => {
  return (
    <section>
      <UseCaseHero
        title="Use case"
        page="Containers and Shipping"
        text="Certified Digital Solution for"
        gradientText="Secure Container Entry & Exit"
        // secondtext="for Financial Institutions"
      />
      <MSCShippingSection />
    </section>
  );
};

export default MSCShipping;
