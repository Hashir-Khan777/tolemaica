import React from 'react'
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";

const OurPatent = () => {
    return (
        <section>
            {/* ====== Our Patent ===== */}
            <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
                <Heading1 headingGray="Our" headingWhite="patent" />
                <Text>
                    Lorem ipsum dolor sit amet consectetur.{" "}
                    <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc
                    senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor
                    velit vestibulum adipiscing.
                </Text>

                <div className="w-full mx-auto flex flex-row justify-center items-center  md:gap-[20px] gap-2">
                    <img
                        src="/ourpatent1.svg"
                        alt=""
                        className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px] "
                    />
                    <img
                        src="/ourpatent2.svg"
                        alt=""
                        className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px]"
                    />
                    <img
                        src="/ourpatent3.svg"
                        alt=""
                        className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px] "
                    />
                    <img
                        src="/ourpatent3.svg"
                        alt=""
                        className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[80.82px] h-[80.82px] "
                    />
                </div>
            </div>
            {/* ====== Our Patent =====  End*/}
        </section>
    )
}

export default OurPatent
