import React from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Card from "./ui/Card";
import CustomBtn from "./ui/CustomeBtn";
import { Link } from "react-router-dom";
import PartnersSlider from './ui/PartnersSLider'

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
      <div className="relative z-10 flex flex-col justify-center items-center gap-[100px] text-center lg:px-[100px] md:px-[50px] px-[30px]">

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
            <div className=" bg-black/25 border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px]  justify-center items-center text-center">
              <img src="./dataclickcard1.svg" alt="card1" className="w-[80%] lg:w-full" />

              <div className="py-[12px] px-[10px] flex flex-col md:gap-[16px] gap-[8px]">
                <h1 className="font-outfit capitalize md:text-[24px]/[30.24px] sm:text-[20px]/[27.24px] text-[18px]/[25.24px] text-center tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">Instant & Automatic Certification</h1>
                <p className="text-gray-400 font-outfit font-[300] md:text-[20px]/[25.2px] text-[16px]/[18.2px] text-center tracking-[5%]">Certifies date and location of images.</p>
              </div>

            </div>
            {/* Card1 */}

            {/* Card2 */}
            <div className=" bg-black/25 border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px]  justify-center items-center text-center">
              <img src="./dataclickcard2.svg" alt="card1" className="w-[80%] lg:w-full" />

              <div className="py-[12px] px-[10px] flex flex-col md:gap-[16px] gap-[8px]">
                <h1 className="font-outfit capitalize md:text-[24px]/[30.24px] sm:text-[20px]/[27.24px] text-[18px]/[25.24px] text-center tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">Multi-Device Accessibility</h1>
                <p className="text-gray-400 font-outfit font-[300] md:text-[20px]/[25.2px] text-[16px]/[18.2px] text-center tracking-[5%]">Use via PC or
                  smartphone.</p>
              </div>

            </div>
            {/* Card2 */}

            {/* Card3 */}
            <div className=" bg-black/25 border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px]  justify-center items-center text-center">
              <img src="./dataclickcard3.svg" alt="card1" className="w-[80%] lg:w-full" />

              <div className="py-[12px] px-[10px] flex flex-col md:gap-[16px] gap-[8px]">
                <h1 className="font-outfit capitalize md:text-[24px]/[30.24px] sm:text-[20px]/[27.24px] text-[18px]/[25.24px] text-center tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">Simple & Cost Effective</h1>
                <p className="text-gray-400 font-outfit font-[300] md:text-[20px]/[25.2px] text-[16px]/[18.2px] text-center tracking-[5%]">Use via PC or
                  smartphone.</p>
              </div>

            </div>
            {/* Card3 */}

            {/* Card4 */}
            <div className=" bg-black/25 border-2 border-white/64 rounded-[20px] backdrop-blur-[100px] p-5 flex flex-col gap-[12px]  justify-center items-center text-center">
              <img src="./dataclickcard4.svg" alt="card1" className="w-[80%] lg:w-full" />

              <div className="py-[12px] px-[10px] flex flex-col md:gap-[16px] gap-[8px]">
                <h1 className="font-outfit capitalize md:text-[24px]/[30.24px] sm:text-[20px]/[27.24px] text-[18px]/[25.24px] text-center tracking-[5%] font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">Secure & Legally Valid</h1>
                <p className="text-gray-400 font-outfit font-[300] md:text-[20px]/[25.2px] text-[16px]/[18.2px] text-center tracking-[5%]">Provides legally recognized proof of authenticity.</p>
              </div>

            </div>
            {/* Card4 */}

          </div>
          {/* ==== Cards ==== */}
        </div>
        {/* ====== Why Choose DataClick ======= */}

        {/* ====== Benefit of usind dataclick ===== */}
        <div className="w-full flex flex-col gap-[64px]">

          <Heading1 headingGray="benefits of" headingWhite="using dataclick" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center p-4">
            {/*  */}
            <div className="lg:block  hidden"></div>

            {/* Card 1 */}
            <div className="w-full max-w-[300px] h-[300px] bg-black/25 border-2 border-white/64 rounded-[30px] backdrop-blur-[12px] p-5 flex flex-col gap-[12px] justify-center items-center text-center">
              <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
                <h1 className="font-outfit capitalize text-[18px] sm:text-[20px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  Infrastructure Monitoring
                </h1>
                <p className="text-gray-400 font-outfit font-[300] text-[16px] md:text-[20px] text-center">
                  Certify structural conditions with timestamped images.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[300px] h-[300px] bg-black/25 border-2 border-white/64 rounded-[30px] backdrop-blur-[12px] p-5 flex flex-col gap-[12px] justify-center items-center text-center">
              <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
                <h1 className="font-outfit capitalize text-[18px] sm:text-[20px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  Legal Disputes & Professional Activities
                </h1>
                <p className="text-gray-400 font-outfit font-[300] text-[16px] md:text-[20px] text-center">
                  Provide court-admissible proof.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-[300px] h-[300px] bg-black/25 border-2 border-white/64 rounded-[30px] backdrop-blur-[12px] p-5 flex flex-col gap-[12px] justify-center items-center text-center">
              <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
                <h1 className="font-outfit capitalize text-[18px] sm:text-[20px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  Consumption Measurement
                </h1>
                <p className="text-gray-400 font-outfit font-[300] text-[16px] md:text-[20px] text-center">
                  Capture utility or resource consumption.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-[300px] h-[300px] bg-black/25 border-2 border-white/64 rounded-[30px] backdrop-blur-[12px] p-5 flex flex-col gap-[12px] justify-center items-center text-center">
              <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
                <h1 className="font-outfit capitalize text-[18px] sm:text-[20px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  Point of Sale Control
                </h1>
                <p className="text-gray-400 font-outfit font-[300] text-[16px] md:text-[20px] text-center">
                  Document store conditions and activities.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full max-w-[300px] h-[300px] bg-black/25 border-2 border-white/64 rounded-[30px] backdrop-blur-[12px] p-5 flex flex-col gap-[12px] justify-center items-center text-center">
              <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
                <h1 className="font-outfit capitalize text-[18px] sm:text-[20px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  Insurance Claims
                </h1>
                <p className="text-gray-400 font-outfit font-[300] text-[16px] md:text-[20px] text-center">
                  Secure photographic evidence for claims.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="w-full max-w-[300px] h-[300px] bg-black/25 border-2 border-white/64 rounded-[30px] backdrop-blur-[12px] p-5 flex flex-col gap-[12px] justify-center items-center text-center">
              <div className="py-[12px] px-[10px] flex flex-col gap-[8px] md:gap-[16px]">
                <h1 className="font-outfit capitalize text-[18px] sm:text-[20px] md:text-[24px] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                  Packaging & Storage Inspection
                </h1>
                <p className="text-gray-400 font-outfit font-[300] text-[16px] md:text-[20px] text-center">
                  Certify conditions before shipment or storage.
                </p>
              </div>
            </div>

          </div>



        </div>
        {/* ====== Benefit of usind dataclick ===== */}

      </div>

      {/* ======= Our Partners ======== */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center md:mt-[100px] mt-[50px] gap-[64px]">
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
