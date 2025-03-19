// import React, { useState } from 'react';

// const AuthenticationUI = () => {
//     const [openPhase, setOpenPhase] = useState('one');
//     const [currentSlide, setCurrentSlide] = useState(0);

//     // Phase data
//     const phases = [
//         {
//             id: 'one',
//             title: 'PHASE ONE',
//             subtitle: 'SECURE DIGITAL AUTHENTICATION',
//             description: 'For remote transactions—like purchase orders, contracts, policy acceptances, and service orders—identity verification is crucial.',
//             worksList: [
//                 'Biometric AI Recognition verifies the user\'s identity.',
//                 'NFC-Based Digital ID Matching cross-checks official documents.',
//                 'The result: Strong Authentication with an Advanced Electronic Signature (AES) that complies with eIDAS regulations.'
//             ],
//             benefits: [
//                 'Faster: Instant biometric & NFC ID scan eliminates manual steps.',
//                 'Legally Stronger: AES is always enforceable—unlike SES, which can be disputed.',
//                 'More Secure: No reliance on OTPs, email verifications, or ID photo uploads.'
//             ]
//         },
//         {
//             id: 'two',
//             title: 'PHASE TWO',
//             subtitle: '',
//             description: '',
//             worksList: [],
//             benefits: []
//         },
//         {
//             id: 'three',
//             title: 'PHASE THREE',
//             subtitle: '',
//             description: '',
//             worksList: [],
//             benefits: []
//         },
//         {
//             id: 'four',
//             title: 'PHASE FOUR',
//             subtitle: '',
//             description: '',
//             worksList: [],
//             benefits: []
//         }
//     ];

//     // Impact data
//     const impactCategories = [
//         {
//             title: 'Regulatory Compliance & Legal Validity',
//             points: [
//                 'Regulatory Compliance: Meets KYC, AML, Onboarding, And eIDAS Standards.',
//                 'Legally Certified: Uses AGID-Accredited TSPs For Recognized Digital Transactions.',
//                 'Beyond 3FA: Replaces OTPs And Email Verification With Advanced Electronic Signature (FEA).',
//                 'Legal Protection: Shifts Burden Of Proof To Users, Preventing Identity Fraud Disputes.'
//             ]
//         },
//         {
//             title: 'Enhanced Security & Certified Data Integrity',
//             points: [
//                 'IAC Protection: Ensures Full Customer Data Security Under EIDAS Standards.',
//                 'Real-Time Certification: Transactions Are Verified Before Entering The Blockchain.',
//                 'Prevents Tampering: IAC Guarantees Data Authenticity Before Blockchain Encoding.',
//                 'Secure Across Jurisdictions: Blocks Unauthorized Modifications From Intermediary Layers.'
//             ]
//         },
//         {
//             title: 'Modularity, Scalability & Interoperability',
//             points: [
//                 'API-Compatible: Supports Both Centralized And Decentralized Systems.',
//                 'Seamless Integration: Works With Existing Infrastructures And Compliance Frameworks.',
//                 'Modular & Scalable: Allows Upgrades Without Disrupting The Blockchain.',
//                 'High Interoperability: Meets Evolving RegTech And SupTech Demands.'
//             ]
//         }
//     ];

//     // Solution data
//     const solutionSteps = [
//         {
//             number: '1',
//             description: 'Apply Library & Web Service for E-Signatures'
//         },
//         {
//             number: '2',
//             description: 'Add API for Legal Certification'
//         },
//         {
//             number: '3',
//             description: 'Get FEA Authentication & Verification'
//         }
//     ];

//     const keyBenefits = [
//         'Legal recognition across EU',
//         'Pre-processing certification',
//         'Guaranteed data integrity'
//     ];

//     // Handle accordion toggle
//     const togglePhase = (id) => {
//         setOpenPhase(openPhase === id ? null : id);
//     };

//     // Handle slider navigation
//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev === impactCategories.length - 1 ? 0 : prev + 1));
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev === 0 ? impactCategories.length - 1 : prev - 1));
//     };

//     return (
//         <div className="flex flex-col bg-black text-white">
//             {/* Phase Accordion */}
//             <div className="p-4 w-full max-w-3xl mx-auto">
//                 {phases.map((phase) => (
//                     <div key={phase.id} className="mb-4">
//                         <div
//                             className="p-4 rounded border border-gray-700 bg-gray-900 cursor-pointer flex justify-between items-center"
//                             onClick={() => togglePhase(phase.id)}
//                         >
//                             <h2 className="text-xl font-medium">PHASE {phase.id.toUpperCase()}</h2>
//                             <span className="text-xl">{openPhase === phase.id ? '▲' : '▼'}</span>
//                         </div>

//                         {openPhase === phase.id && phase.id === 'one' && (
//                             <div className="p-5 border border-gray-700 border-t-0 rounded-b bg-gray-900">
//                                 <h3 className="text-amber-500 font-medium mb-3">{phase.subtitle}</h3>
//                                 <p className="text-gray-300 mb-5">{phase.description}</p>

//                                 <div className="mb-4">
//                                     <h4 className="text-gray-400 mb-2">HOW IT WORKS:</h4>
//                                     <ul className="list-disc pl-5 text-gray-300">
//                                         {phase.worksList.map((item, index) => (
//                                             <li key={index} className="mb-1">{item}</li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 <div>
//                                     <h4 className="text-gray-400 mb-2">WHY IT'S BETTER THAN TRADITIONAL AUTHENTICATION:</h4>
//                                     <ul className="list-disc pl-5 text-gray-300">
//                                         {phase.benefits.map((item, index) => (
//                                             <li key={index} className="mb-1">{item}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             {/* Impact Slider */}
//             <div className="p-4 w-full max-w-3xl mx-auto mt-8">
//                 <h2 className="text-2xl font-medium text-center mb-6">THE IMPACT</h2>

//                 <div className="relative border border-blue-500 rounded p-6">
//                     <div className="flex flex-col md:flex-row gap-4 min-h-64">
//                         {impactCategories.map((category, index) => (
//                             <div
//                                 key={index}
//                                 className={`${index === currentSlide ? 'block' : 'hidden md:block'} flex-1`}
//                             >
//                                 <div className="bg-gray-800 rounded-full p-3 mb-4 text-center">
//                                     <h3 className="text-sm">{category.title}</h3>
//                                 </div>
//                                 <ul className="list-disc pl-5 text-xs text-gray-300">
//                                     {category.points.map((point, i) => (
//                                         <li key={i} className="mb-3">{point}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div> 

//                     <div className="flex justify-between mt-4 md:hidden">
//                         <button
//                             onClick={prevSlide}
//                             className="bg-gray-800 p-2 rounded-full"
//                         >
//                             ◀
//                         </button>
//                         <button
//                             onClick={nextSlide}
//                             className="bg-gray-800 p-2 rounded-full"
//                         >
//                             ▶
//                         </button>
//                     </div>
//                 </div>
//             </div>

            
//         </div>
//     );
// };

// export default AuthenticationUI;

import React, { useState } from 'react';

const AuthenticationUI = () => {
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

    const impactCategories = [
        {
            title: 'Regulatory Compliance & Legal Validity',
            points: [
                'Regulatory Compliance: Meets KYC, AML, Onboarding, And eIDAS Standards.',
                'Legally Certified: Uses AGID-Accredited TSPs For Recognized Digital Transactions.',
                'Beyond 3FA: Replaces OTPs And Email Verification With Advanced Electronic Signature (FEA).'
            ]
        }
    ];

    const togglePhase = (id) => {
        setOpenPhase(openPhase === id ? null : id);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === impactCategories.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? impactCategories.length - 1 : prev - 1));
    };

    return (
        <div className="flex flex-col bg-black text-white p-4 min-h-screen">
            {/* <div className="w-full max-w-3xl mx-auto">
                {phases.map((phase) => (
                    <div key={phase.id} className="mb-4">
                        <div
                            className="p-4 rounded border border-gray-700 bg-gray-900 cursor-pointer flex justify-between items-center"
                            onClick={() => togglePhase(phase.id)}
                        >
                            <h2 className="text-lg md:text-xl font-medium">PHASE {phase.id.toUpperCase()}</h2>
                            <span className="text-lg md:text-xl">{openPhase === phase.id ? '▲' : '▼'}</span>
                        </div>

                        {openPhase === phase.id && (
                            <div className="p-5 border border-gray-700 border-t-0 rounded-b bg-gray-900">
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
            </div> */}

            <div className="p-4 w-full max-w-3xl mx-auto mt-4">
                <h2 className="text-lg md:text-2xl font-medium text-center mb-4">THE IMPACT</h2>
                <div className="relative border border-blue-500 rounded p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-4 min-h-48">
                        {impactCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`${index === currentSlide ? 'block' : 'hidden md:block'} flex-1`}
                            >
                                <div className="bg-gray-800 rounded-full p-2 md:p-3 mb-4 text-center">
                                    <h3 className="text-sm md:text-base">{category.title}</h3>
                                </div>
                                <ul className="list-disc pl-5 text-xs md:text-sm text-gray-300">
                                    {category.points.map((point, i) => (
                                        <li key={i} className="mb-2">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 md:hidden">
                        <button onClick={prevSlide} className="bg-gray-800 p-2 rounded-full">◀</button>
                        <button onClick={nextSlide} className="bg-gray-800 p-2 rounded-full">▶</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationUI;
