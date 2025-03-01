import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import { Link } from "react-router-dom";

function IACWorks() {
    return (
        <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col gap-[64px] gap-[30px]">
            <video
                src="/ourpartners.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            ></video>



            {/* ==== Content wrapper ===== */}
            <div className="relative z-10 flex flex-col justify-center items-center gap-[100px] text-center lg:px-[100px] md:px-[30px] px-[20px]">

                {/* ==== How IAC Works ==== */}
                <div className="shrink-0 relative z-10 md:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[30px] text-center">


                    <Heading1 headingGray="How" headingWhite="iac works" />
                    <Text>
                        <GradientSpan>IAC (Instant Automatic Certification)</GradientSpan> technology is the internationally patented solution for date and location legal certification of data captured by smartphones or other devices. The process is an <GradientSpan>automatic and instantaneous way of storing data</GradientSpan> in a server held by a Notified Body that returns a report to the user summarizing date, time and location references of the given data (image/sound).
                    </Text>


                    <img src="/iacimg1.svg" alt="" className="max-w-[1000px] lg:w-[80%] md:w-[60%] sm:w-[90%] w-[98%]" />


                    <Text>From a technical point of view, the certification process consists in <GradientSpan>encrypting data</GradientSpan> (sound and images) captured by the camera and/or microphone of smartphones (or other device) and a held in a temporary partitioned memory in order to make it unavailable to the user; the data captured, unmodifiable because inaccessible (!), is subsequently transmitted through certified digital flows such as pec(certified e-mail), time-stamping, block chain or other recognized certification processes to a Certified server held by a Notified Body.</Text>

                    <Text>
                        The result of the instantaneous procedure, which only requires one simple control, is reported to user and/or the office appointed, together with relevant legal evidence.
                    </Text>

                </div>

                {/* ====== Our Patent ===== */}
                <div className="w-full flex flex-col md:gap-[64px] gap-[30px]">

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
            <div className="shrink-0 relative z-10 md:mb-[100px] flex flex-col justify-center items-center md:gap-[64px] gap-[30px]  text-center">

                <div className="px-[20px] flex flex-col md:gap-[64px] gap-[30px] max-w-[950px]">
                    <Heading1 headingGray="Our" headingWhite="Partners" />
                    <Text>
                        Lorem ipsum dolor sit amet consectetur.{" "}
                        <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
                        senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
                        velit vestibulum adipiscing.
                    </Text>
                </div>


                <img src="/ourPartners.svg" alt="" className="w-[100vw]" />
            </div>

        </section>
    );
}

export default IACWorks;
