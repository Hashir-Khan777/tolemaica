import React, { useState } from 'react'

const PhaseAccor = () => {

    const [openPhase, setOpenPhase] = useState('one');
    const [currentSlide, setCurrentSlide] = useState(0);

    const phases = [
        {
            id: 'one',
            title: 'PHASE ONE',
            subtitle: 'SECURE DIGITAL AUTHENTICATION',
            description: 'For remote transactions—like purchase orders, contracts, policy acceptances, and service orders—identity verification is crucial.',
            worksList: [
                "Biometric AI Recognition verifies the user's identity.",
                'NFC-Based Digital ID Matching cross-checks official documents.',
                'The result: Strong Authentication with an Advanced Electronic Signature (AES) that complies with eIDAS regulations.'
            ],
            benefits: [
                'Faster: Instant biometric & NFC ID scan eliminates manual steps.',
                'Legally Stronger: AES is always enforceable—unlike SES, which can be disputed.',
                'More Secure: No reliance on OTPs, email verifications, or ID photo uploads.'
            ]
        }
    ];

    const togglePhase = (id) => {
        setOpenPhase(openPhase === id ? null : id);
    };

    return (
        <div>
            <div className="w-full max-w-[1280px] mx-auto">
                {phases.map((phase) => (
                    <div key={phase.id} className="mb-4">

                        <div
                            className="w-full p-[32px] cursor-pointer flex justify-between items-center border-[2px] border-white/64 rounded-[15px]"
                            onClick={() => togglePhase(phase.id)}
                        style={{
                            background:"linear-gradient(90deg,#040404 50%,#874f32)"
                        }}>
                            <h2 className="text-lg md:text-xl font-medium">PHASE {phase.id.toUpperCase()}</h2>
                            <span className="text-lg md:text-xl">{openPhase === phase.id ? <img src="/accorIcon2.svg" /> : <img src="/accorIcon1.svg" />}</span>
                        </div>

                        {openPhase === phase.id && (
                            <div className="p-5 border border-t-0 " style={{
                            background:"linear-gradient(90deg, #874f32, #040404 )"
                        }}>
                                <h3 className="text-amber-500 font-medium mb-3 text-sm md:text-base">{phase.subtitle}</h3>
                                <p className="text-gray-300 mb-5 text-xs md:text-sm">{phase.description}</p>
                                <ul className="list-disc pl-5 text-gray-300 text-xs md:text-sm">
                                    {phase.worksList.map((item, index) => (
                                        <li key={index} className="mb-1">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhaseAccor
