import React from 'react'
import ServiceHero from '../components/ServiceHero'
import DataClickSection from '../components/DataClickSection'

function DataClick() {
  return (
    <>
      <ServiceHero 
      title="Give Legal Value to Your Data with"
      gradientTitle="DataClick's Certification!"
      text="Digital Certification of " gradientText="Images, Sounds, and Videos"
      />
      <DataClickSection/>
    </>
  )
}

export default DataClick
