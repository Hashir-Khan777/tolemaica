import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import { Link } from "react-router-dom";


function DataClick() {
  return (
    <section className="relative overflow-hidden w-full bg-black py-[100px] flex  flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      ></video>

      {/* ==== Content wrapper ===== */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-[100px] text-center lg:px-[100px] md:px-[50px] px-[20px]">

        {/* ==== What is DataClick ====== */}
        <div className="w-full flex flex-col justify-center items-center gap-[50px]">
          <div className="flex flex-col gap-[20px]">
            <Heading1 headingGray="what is" headingWhite="dataclick" />
            <Text>
              DataClick provides a data <GradientSpan>certification service with legal value</GradientSpan> for photos taken by professionals, businesses, and public administrations. The service is <GradientSpan>simple, fast, and cost-effective</GradientSpan>, allowing users to upload images and receive a <GradientSpan className="text-white">probative element</GradientSpan> that holds <GradientSpan>legal validity</GradientSpan>.
            </Text>
          </div>

          {/* Image Section */}
          <div>
            <img src="./dataclickimg1.svg" alt="" className="lg:h-[730px] min-w-[400px] " />
          </div>

        </div>
        {/* ==== What is DataClick ====== */}


        {/* ====== How dataclick works ======= */}
        <div className="w-full flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[20px]">
            <Heading1 headingGray="How" headingWhite="Dataclick works" />
            <Text>
              Using <GradientSpan><Link to="/" className="underline">www.dataclick.it</Link> </GradientSpan> or the <GradientSpan>free DataClick App</GradientSpan> for iPhone and Android, users can securely certify images, ensuring that they are stored with a legally valid timestamp. This creates a <GradientSpan>valuable personal and corporate archive</GradientSpan> that is always accessible for individual searches or back-office corporate operations.
            </Text>
          </div>
        </div>
        {/* ====== How dataclick works ======= */}

        {/* ====== Why Choose DataClick ======= */}
        <div className="w-full flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[20px]">
            <Heading1 headingGray="Why Choose" headingWhite="data click" />
            <Text>
              Using <GradientSpan><Link to="/" className="underline">www.dataclick.it</Link> </GradientSpan> or the <GradientSpan>free DataClick App</GradientSpan> for iPhone and Android, users can securely certify images, ensuring that they are stored with a legally valid timestamp. This creates a <GradientSpan>valuable personal and corporate archive</GradientSpan> that is always accessible for individual searches or back-office corporate operations.
            </Text>
          </div>

          {/* ==== Cards ==== */}
          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[24px]">

            {/* Card1 */}
            <Card3 image="./dataclickcard1.svg" title="Instant & Automatic Certification" description="Certifies date and location of images." />

            {/* Card2 */}
            <Card3 image="./dataclickcard2.svg" title="Multi-Device Accessibility" description="Use via PC or
                  smartphone." />

            {/* Card3 */}
            <Card3 image="./dataclickcard3.svg" title="Simple & Cost Effective" description="Use via PC or
                  smartphone." />

            {/* Card4 */}
            <Card3 image="./dataclickcard4.svg" title="Secure & Legally Valid" description="Provides legally recognized proof of authenticity." />

          </div>
          {/* ==== Cards ==== */}
        </div>
        {/* ====== Why Choose DataClick ======= */}

        {/* ====== Benefit of usind dataclick ===== */}
        <div className="w-full flex flex-col gap-[64px] mx-auto">

          <Heading1 headingGray="benefits of" headingWhite="using dataclick" />

          <div className="mx-auto flex flex-col sm:grid  sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center p-4">
            {/*  */}
            <div className="lg:block  hidden"></div>

            {/* Card 1 */}
            <Card2 title="Infrastructure Monitoring" description=" Certify structural conditions with timestamped images." />

            {/* Card 2 */}
            <Card2 title="Legal Disputes & Professional Activities" description="Provide court-admissible proof." />

            {/* Card 3 */}
            <Card2 title="Consumption Measurement" description="Capture utility or resource consumption." />

            {/* Card 4 */}
            <Card2 title=" Point of Sale Control" description="Document store conditions and activities." />

            {/* Card 5 */}
            <Card2 title="Insurance Claims" description=" Secure photographic evidence for claims." />

            {/* Card 6 */}
            <Card2 title="Packaging & Storage Inspection" description="Certify conditions before shipment or storage." />

          </div>

        </div>
        {/* ====== Benefit of usind dataclick ===== */}

      </div>

      {/* ======= Our Partners ======== */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center md:mt-[100px] mt-[50px] gap-[64px] px-[20px]">
        <div className="flex flex-col gap-[20px]">
          <Heading1 headingGray="Our" headingWhite="Partners" />
          <Text>
            Lorem ipsum dolor sit amet consectetur. <GradientSpan>Lorem mollis est</GradientSpan> nisl enim sed nunc senectus. Molestie arcu arcu sapien vulputate ligula. Odio dolor velit vestibulum adipiscing.
          </Text>
        </div>

        <img src="./partner.svg" alt="Our partners" className="w-full" />

      </div>

      {/* ======= Our Partners ======== */}

    </section>
  );
}

export default DataClick;
