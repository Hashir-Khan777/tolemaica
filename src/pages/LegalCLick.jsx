import React from 'react'
import ServiceHero from '../components/ServiceHero'
import DataClickSection from '../components/DataClickSection'
import LegalClickSection from '../components/LegalCLickSection'

function LegalClick() {
  return (
    <>
      <ServiceHero 
      title="Instantly Certify Your Photos, Videos, and Audio with "
      gradientTitle="LegalClick's Certification"
      text="Digital Certification for" gradientText="Professionals & Small Businesses"
      />
      <LegalClickSection/>
    </>
  )
}

export default LegalClick
