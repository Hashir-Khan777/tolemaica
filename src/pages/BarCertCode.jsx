import React from 'react'
import ServiceHero from '../components/ServiceHero'
import BarCertSection from '../components/BarCertSection'

function BarCertCode() {
    return (
        <>
            <ServiceHero
                title="Authentication and verification of goods' storage duration in warehouses"
                gradientTitle="with BarCertCode"
                text="Secure certification of barcode printing and scanning for"
                gradientText="products and documents"
            />
            <BarCertSection />
        </>
    )
}

export default BarCertCode
