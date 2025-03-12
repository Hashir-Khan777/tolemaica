import React from "react";
import { Text, GradientSpan } from './ui/Text'
import Heading1 from "./ui/Heading1";

const certifications = [
    { src: "/images/iso-9001.png", title: "ISO 9001:2015", subtitle: "Quality" },
    { src: "/images/iso-27001.png", title: "ISO/IEC 27001:2022", subtitle: "Information" },
    { src: "/images/iso-14001.png", title: "ISO 14001:2015", subtitle: "Environment" },
    { src: "/images/eu-fund.png", title: "UNIONE EUROPEA", subtitle: "Fondo europeo di sviluppo regionale" },
    { src: "/images/pon-logo.png", title: "PON IMPRESE E COMPETITIVITÀ", subtitle: "2014-20 Ricacciamo lo sviluppo" },
    { src: "/images/ministry.png", title: "Ministero dello Sviluppo Economico", subtitle: "" },
];

const ISOSection = () => {
    return (
        <section className="text-white py-12 md:px-6">
            <div className="max-w-6xl mx-auto text-center w-full flex flex-col gap-[40px] md:gap-[64px]">
                {/* Heading */}
                <Heading1 headingGray="we are" headingWhite="iso certified" />
                <Text>
                    With LegalClick, you can simply upload your media and receive a <GradientSpan>probative element</GradientSpan> that guarantees its authenticity. The process is quick, easy, and accessible via both <GradientSpan>PC and smartphone</GradientSpan>.
                </Text>

                {/* Certification Cards */}
                <div className="mt-8 grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-[24px]">
                    {/* {certifications.map((cert, index) => (
                        <div key={index} className="w-full max-w-[280px] p-4 bg-[#151515] border border-gray-600 rounded-xl shadow-lg flex flex-col items-center">
                            <img src={cert.src} alt={cert.title} className="rounded-md w-48 h-28 object-contain" />
                            <h3 className="mt-3 text-lg font-semibold">{cert.title}</h3>
                            <p className="text-gray-400">{cert.subtitle}</p>
                        </div>
                    ))} */}
                    <img src="/iso1.svg" alt="Iso Certification" className="md:w-[370px]" />
                    <img src="/iso2.svg" alt="Iso Certification" className="md:w-[370px]" />
                    <img src="/iso3.svg" alt="Iso Certification" className="md:w-[370px]" />
                    <img src="/iso4.svg" alt="Iso Certification" className="md:w-[370px]" />
                    <img src="/iso5.svg" alt="Iso Certification" className="md:w-[370px]" />
                    <img src="/iso6.svg" alt="Iso Certification" className="md:w-[370px]" />
                </div>
            </div>
        </section>
    );
};

export default ISOSection;
