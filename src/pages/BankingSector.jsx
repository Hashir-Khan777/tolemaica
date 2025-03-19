import React from 'react'
import UseCaseHero from "../components/UseCaseHero";
import BankingSectorSection from '../components/BankingSectorSec';

const BankingSector = () => {
    return (
        <>
            <UseCaseHero
                title="Secure Digital Authentication"
                page="BANKING SECTOR"
                text="Enhancing"
                gradientText="Legal Certainty, Regulatory Compliance & Fraud Prevention"
                secondtext="for Financial Institutions"
            />
            <BankingSectorSection />

           

        </>
    )
}

export default BankingSector
