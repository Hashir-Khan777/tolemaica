import React from 'react'
import ServiceHero from '../components/ServiceHero'
import QrCertSection from '../components/QrCertSection'

function QrCertCode() {
    return (
        <>
            <ServiceHero
                title="Authenticate Your Documents With Certified QR codes"
                gradientTitle="With QrCertCode"
                gradientText="Secure QR Code Certification For Documents"
            />
            <QrCertSection />
        </>
    )
}

export default QrCertCode
