import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import OurPartnersSlider from './ui/PartnersSLider'
import ISOCertified from './ISOCertified'

function IACWorks() {
    return (
        <section className="relative overflow-hidden w-full bg-black pt-[100px] pb-[200px] flex  flex-col md:gap-[100px] gap-[40px]">
            {/* <video
                src="/ourpartners.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            ></video> */}
            {/* Base video background */}
            <video
                src="/ourpartners.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            ></video>

            {/* Colored blob with blur effect to match Figma design */}
            <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] rounded-[50%] bg-[#61132A]/40 blur-[300px] mix-blend-overlay z-2"></div>
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] rounded-[50%] bg-[#C84A01]/24 blur-[300px] z-1"></div>


            {/* Additional subtle vignette for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 z-1"></div>

            {/* ==== Content wrapper ===== */}
            <div className="relative z-10 flex flex-col justify-center items-center gap-[40px] md:gap-[100px] text-center lg:px-[100px] md:px-[30px] px-[20px]">

                {/* ==== How IAC Works ==== */}
                <div className="shrink-0 relative z-10 md:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px] text-center">

                    <Heading1 headingGray="How" headingWhite="iac works" />
                    <Text>
                        <GradientSpan>IAC (Instant Automatic Certification)</GradientSpan> technology is the internationally patented solution for date and location legal certification of data captured by smartphones or other devices. The process is an <GradientSpan>automatic and instantaneous way of storing data</GradientSpan> in a server held by a Notified Body that returns a report to the user summarizing date, time and location references of the given data (image/sound).
                    </Text>


                    <img src="/images/iacimg1.png" alt="" className="max-w-[1114px] lg:w-[1114px] md:w-[60%] sm:w-[90%] w-[98%]" />


                    <Text>From a technical point of view, the certification process consists in <GradientSpan>encrypting data</GradientSpan> (sound and images) captured by the camera and/or microphone of smartphones (or other device) and a held in a temporary partitioned memory in order to make it unavailable to the user; the data captured, unmodifiable because inaccessible (!), is subsequently transmitted through certified digital flows such as pec(certified e-mail), time-stamping, block chain or other recognized certification processes to a Certified server held by a Notified Body.</Text>

                    <Text>
                        The result of the instantaneous procedure, which only requires one simple control, is reported to user and/or the office appointed, together with relevant legal evidence.
                    </Text>

                </div>

                {/* ====== Our Patent ===== */}
                <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">

                    <Heading1 headingGray="Our" headingWhite="patent" />
                    <Text>
                        Lorem ipsum dolor sit amet consectetur.{" "}
                        <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
                        senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
                        velit vestibulum adipiscing.
                    </Text>


                    <div className="w-full mx-auto flex flex-row justify-center items-center flex-wrap gap-[20px]">
                        <img
                            src="/ourpatent1.svg"
                            alt=""
                            className="md:w-[200px] w-[130px] h-[130px] md:h-[200px]"
                        />
                        <img
                            src="/ourpatent2.svg"
                            alt=""
                            className="[130px] h-[130px] md:w-[200px] md:h-[200px]"
                        />
                        <img
                            src="/ourpatent3.svg"
                            alt=""
                            className="[130px] h-[130px] md:w-[200px] md:h-[200px]"
                        />
                        <img
                            src="/ourpatent3.svg"
                            alt=""
                            className="[130px] h-[130px] md:w-[200px] md:h-[200px]"
                        />
                    </div>
                </div>
                {/* ====== Our Patent =====  End*/}


            </div>
            {/* ==== Content wrapper ===== */}

            {/* ==== Partners ==== */}
            <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px] text-center px-[20px]">

                <Heading1 headingGray="Our" headingWhite="Partners" />
                <Text>
                    Lorem ipsum dolor sit amet consectetur.{" "}
                    <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
                    senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
                    velit vestibulum adipiscing.
                </Text>


                <OurPartnersSlider image1="/img1.svg" image2="/img2.svg" image3="/img3.svg" image4="/img4.svg" />

            </div>

            <div className="relative md:mt-[100px] mt-[70px] z-20 mg:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[40px] text-center px-[20px]">
                <ISOCertified/>
            </div>

        </section>
    );
}

export default IACWorks;
