import React from 'react'
import { FumigationCard, FumigationCard2 } from './ui/FumigationCard'

// const cards = [
//     {
//         gradientText1:"Container arrival ",
//         gradientText2:"",
//         gradientText3:"verification ",
//         Text:"at the fumigation area",
//         background:"linear-gradient(to bottom right, #1a191a 40%, #27161b)" 
//     },
//     {
//         gradientText1:"Truck license plate",
//         gradientText2:"",
//         gradientText3:"",
//         Text:"recording.",
//         background:"linear-gradient(to bottom right, #0a0a0a 40%, #414141)" 
//     },
//     {
//         gradientText1:"Temporary seal",
//         gradientText2:"documentation",
//         gradientText3:"",
//         Text:"before fumigation",
//         background:"linear-gradient(to bottom right, #0a0a0a 40%, #414141)" 
//     },
// ]
const cards = [
    {
        gradientText1: "Container arrival ",
        gradientText2: "",
        gradientText3: "verification ",
        Text: "at the fumigation area",
        background: "linear-gradient(to bottom right, #1a191a, #27161b)"
    },
    {
        gradientText1: "Truck license plate",
        gradientText2: "",
        gradientText3: "",
        Text: "recording.",
        background: "linear-gradient(to bottom right, #0a0a0a 50%, #414141)"
    },
    {
        gradientText1: "Temporary seal",
        gradientText2: "documentation",
        gradientText3: "",
        Text: "before fumigation",
        background: "linear-gradient(to bottom right, #1c1a1a, #4d362b)"
    },

];

const cards2 = [
    {
        gradientText1: "Verification of",
        gradientText2: "internal packaging",
        gradientText3: "condition",
        Text: ".",
        background: "linear-gradient(to bottom right, #040404 , #444444)"
    },
    {
        gradientText1: "Final seal",
        gradientText2: "verification",
        gradientText3: "",
        Text: "after fumigation.",
        background: "linear-gradient(to bottom right, black, black)"
    },
    {
        gradientText1: "Video recording",
        gradientText2: "",
        gradientText3: "",
        Text: "of the fumigation process for legal compliance.",
        background: "linear-gradient(to right, #121212, #28151a)"
    },
    {
        gradientText1: "OCR-based",
        gradientText2: "documentation retrieval",
        gradientText3: "",
        Text: "for streamlined record management.",
        background: "linear-gradient(to right, #121212, #28151a)"
    }
]



const FumigationProcess = () => {
    return (
        <div className='flex flex-col max-w-[1280px] gap-[36px] justify-center items-center'>

            <div className='md:flex hidden flex-col gap-[36px] justify-center items-center'>
                <div className='grid md:grid-cols-3 grid-cols-1 lg:gap-[36px] md:gap-[10px] mx-auto'>
                    {
                        cards.map((card, index) => <FumigationCard key={index} gradientText1={card.gradientText1} gradientText2={card.gradientText2} gradientText3={card.gradientText3} Text={card.Text} background={card.background} />)
                    }
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1  lg:gap-[36px] md:gap-[10px]'>
                    {
                        cards2.map((card, index) => <FumigationCard key={index} gradientText1={card.gradientText1} gradientText2={card.gradientText2} gradientText3={card.gradientText3} Text={card.Text} background={card.background} />)
                    }
                </div>
            </div>

            <div className='md:hidden flex flex-col gap-[10px]'>
                {
                    cards.map((card, index) => <FumigationCard2 key={index} gradientText1={card.gradientText1} gradientText2={card.gradientText2} gradientText3={card.gradientText3} Text={card.Text} background={card.background} />)
                }
                {
                    cards2.map((card, index) => <FumigationCard2 key={index} gradientText1={card.gradientText1} gradientText2={card.gradientText2} gradientText3={card.gradientText3} Text={card.Text} background={card.background} />)
                }
            </div>

        </div>
    )
}

export default FumigationProcess
