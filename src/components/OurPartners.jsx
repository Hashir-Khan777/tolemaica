import React, { useState, useEffect } from "react";
import Heading1 from "./ui/Heading1";
import { Text, GradientSpan } from "./ui/Text";
import Video from "./ui/Video"; // Assuming you already have this component
import { Link } from "react-router-dom";
import OurPartnersSlider from "./ui/PartnersSLider";
import OurPatent from "./OurPatent";
import SliderComponent from "./Slider";
import ISOCertified from "./ISOCertified";
import HomeGrid from "./ui/HomeGrid";
import Heading2 from "./ui/Heading2";
import Card from "./ui/Card";
import CustomBtn from "./ui/CustomeBtn";
const cards = [
  {
    icon: "/images/legalClick.png",
    title: "LegalClick",
    buttonText: "know more",
    buttonLink: "/services/legal-click",
    buttonBorder: "#FF9966",
    buttonBg: "black",
    buttonTextColor: "#FF9966",
    playButton: "/images/playBtn.png",
    playButtonLink: "/services/legal-click",
    backgroundImage: "/card1.png",
  },
  {
    icon: "/images/dataClick.png",
    title: "DataClick",
    buttonText: "know more",
    buttonLink: "/services/data-click",
    buttonBorder: "#FF9966",
    buttonBg: "white",
    buttonTextColor: "black",
    playButton: "/images/playBtn.png",
    playButtonLink: "/services/data-click",
    backgroundImage: "/card2.png",
  },
  {
    icon: "/images/legalCheck.png",
    title: "LegalCheck",
    buttonText: "know more",
    backgroundImage: "/card3.png",
    buttonLink: "/services/legal-check",
    buttonBorder: "white",
    buttonBg: "black",
    buttonTextColor: "#FF9966",
    playButton: "/images/playBtn.png",
    playButtonLink: "/services/legal-check",
  },
  {
    icon: "/images/qr-certcode.png",
    title: "QrCertCode",
    buttonText: "know more",
    backgroundImage: "/card4.png",
    buttonLink: "/services/QrCertCode",
    buttonBorder: "white",
    buttonBg: "black",
    buttonTextColor: "#FF9966",
    playButton: "/images/playBtn.png",
    playButtonLink: "/services/QrCertCode",
  },
  {
    icon: "/images/bar-certcode.png",
    title: "BarCertCode",
    buttonText: "know more",
    backgroundImage: "/card5.png",
    buttonLink: "/services/BarCertCode",
    buttonBorder: "#FF9966",
    buttonBg: "white",
    buttonTextColor: "black",
    playButton: "/images/playBtn.png",
    playButtonLink: "/services/BarCertCode",
  },
];

function OurPartners() {
  const [facts, setFacts] = useState([]); // State to store facts data
  const [whatWeDo, setWhatWeDo] = useState(null); // State to store "What We Do" data
  const [AboutIac, setAboutIac] = useState(null);
  const [SoftwareSolution, setSoftwareSolution] = useState(null);
  

  useEffect(() => {
    // Fetch facts data from the API
   
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/homefact?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.data.facts); // Set the facts data into state
      })
      .catch((error) => console.error("Failed to fetch facts data:", error));

      fetch(`${apiUrl}/aboutiac?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setAboutIac(data.data); // Set the facts data into state
      })
      .catch((error) => console.error("Failed to fetch facts data:", error));

    // Fetch "What We Do" data from the API 
    fetch(`${apiUrl}/whatwedo?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setWhatWeDo(data.data); // Set "What We Do" data into state
      })
      .catch((error) => console.error("Failed to fetch What We Do data:", error));

      fetch(`${apiUrl}/softwaresolution?populate=solutions.image&populate=solutions.bg_image&populate=heading&&populate=paragraph`)
      .then((response) => response.json())
      .then((data) => {
        setSoftwareSolution(data.data); // Set "What We Do" data into state
      })
      .catch((error) => console.error("Failed to fetch What We Do data:", error));

      
  }, []);

  

  return (
    <section className="relative overflow-hidden w-full bg-black py-[100px] flex flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      <div className="mx-auto w-full max-w-[1280px]">
        {/* ==== Partners ==== */}
        <div className="shrink-0 relative z-20 md:mb-[100px] mb-[40px] flex flex-col justify-center items-center gap-[64px] text-center px-[20px]">
          <OurPartnersSlider />
        </div>

        {/* ==== Content wrapper ===== */}
        <div className="relative mt-10 z-10 flex flex-col justify-center items-center gap-[100px] text-center lg:px-[100px] md:px-[30px] px-[20px]">
          {/* Statistics section */}
          <div className="w-full shrink-0 flex flex-col justify-center items-center gap-[50px]">
            <div className="w-full flex justify-center md:justify-between gap-10 md:gap-[50px]">
              {/* Dynamically render facts from API */}
              {facts.length > 0 ? (
                facts.map((item, index) => (
                  <p key={index} className="flex flex-col justify-center items-center gap-[10px] p-[10px] font-outfit text-center">
                    <p className="shrink-0 font-outfit text-[40px]/[50px] xl:text-[128px]/[100%] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent tracking-[5%] flex flex-row">
                      <span className="font-[400]">{item.ColoredHeading}</span>{" "}
                      
                    </p>
                    <span className="font-outfit text-white font-[300] text-[14px]/[17px] md:text-[24px]/[28px] text-center tracking-[5%] capitalize">
                      {item.FactDetail}
                    </span>
                  </p>
                ))
              ) : (
                <p>Loading...</p> // In case the data is still loading
              )}
            </div>

            <div className="w-full flex justify-center">
              <img src="/oval.svg" alt="" className="w-[80%] max-w-[800px]" />
            </div>
          </div>

          {/* ==== What we do ====== */}
          <div className="w-full flex flex-col justify-center items-center md:gap-[64px] gap-[40px]">
            <Heading1 headingGray={whatWeDo?.heading.light_heading} headingWhite={whatWeDo?.heading.dark_heading} />
            <Text>
              {whatWeDo ? (
                <>
                  {whatWeDo.paragraph.text}{" "}
                  <GradientSpan>{whatWeDo.paragraph.colored_text}</GradientSpan> 
                  {whatWeDo.paragraph.second_text}
                </>
              ) : (
                "Loading..." // Show loading text if the data is not yet fetched
              )}
            </Text>

            {whatWeDo?.video?.url && (
              <Video link={whatWeDo.video.url} />
            )}
          </div>
          {/* ==== What we do ====== */}

          {/* ===== ABout IAC Technology ======= */}
          <div className="w-full flex flex-col justify-center items-center md:gap-[64px] gap-[40px]">
            <Heading1 headingGray={AboutIac?.heading.light_heading} headingWhite={AboutIac?.heading.dark_heading} />

            <Text>
            {AboutIac ? (
                <>
                  {AboutIac.paragraph.text}{" "}
                  <GradientSpan>{AboutIac.paragraph.colored_text}</GradientSpan> 
                  {AboutIac.paragraph.second_text}
                </>
              ) : (
                "Loading..." // Show loading text if the data is not yet fetched
              )}
              {/* IAC (Instant Automatic Certification) is a patented technology
              that provides{" "}
              <span className="text-white font-[500]">instant,</span>{" "}
              <GradientSpan>
                automated certification of the date, time, and location of data
                captured by
              </GradientSpan>{" "}
              <span className="text-[#FF9966] font-[500]">
                smartphones or other devices.
              </span>{" "}
              The certified data is securely stored on a Notified Body's server,
              which promptly issues a verification report to the user. */}
            </Text>
            
            <Link
              to="/iac-tech"
              className="uppercase text-white w-[200px] md:w-[330px] md:px-[100px] px-[48px] md:py-[20px] py-[14px] rounded-full border-[2px] border-white font-raleway font-[700] text-[16px]/[100%]  md:text-[20px]/[100%] tracking-[5%]"
            >
              {AboutIac?.btn_text}
            </Link>
          </div>
          {/* ===== ABout IAC Technology ======= */}

          {/* ====== Our Software solutions start ======= */}
          <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
            <Heading1 headingGray={SoftwareSolution?.heading.light_heading} headingWhite={SoftwareSolution?.heading.dark_heading} />

            <Text>
            {SoftwareSolution?.paragraph.text} {" "}
              <GradientSpan>
              {SoftwareSolution?.paragraph.colored_text} 
              </GradientSpan>{" "}
              {SoftwareSolution?.paragraph.second_text} 
            </Text>

            <div className="w-full hidden lg:grid md:grid-cols-2 grid-cols-1 gap-[24px]">
              <Card
                icon= {SoftwareSolution?.solutions[1].image.url} 
                title={SoftwareSolution?.solutions[1].text} 
                buttonText={SoftwareSolution?.solutions[1].btn_text} 
                buttonLink="/services/legal-click"
                buttonBorder="white"
                buttonBg="black"
                buttonTextColor="#FF9966"
                playButton="/images/playBtn.png"
                playButtonLink="https://example.com/play"
                backgroundImage={SoftwareSolution?.solutions[1].bg_image.url} 
              />

              <Card
                 icon= {SoftwareSolution?.solutions[0].image.url} 
                 title={SoftwareSolution?.solutions[0].text} 
                 buttonText={SoftwareSolution?.solutions[0].btn_text} 
                buttonLink="/services/data-click"
                buttonBorder="#FF9966"
                buttonBg="white"
                buttonTextColor="black"
                playButton="/images/playBtn.png"
                playButtonLink="https://example.com/play"
                backgroundImage={SoftwareSolution?.solutions[0].bg_image.url} 
              />

              <div className="w-full flex flex-col justify-center">
                <CustomBtn
                  text={SoftwareSolution?.heading_one} 
                  borderColor="white"
                  bgColor="black"
                  textColor="#FF9966"
                  fontSize="22px"
                  lgFontSize="48px"
                />
                <CustomBtn
                  text={SoftwareSolution?.heading_two}
                  borderColor="white"
                  bgColor="#641A15"
                  textColor="white"
                  fontSize="22px"
                  lgFontSize="48px"
                />
                <CustomBtn
                  text={SoftwareSolution?.heading_three}
                  borderColor="white"
                  bgColor="black"
                  textColor="#FF9966"
                  fontSize="22px"
                  lgFontSize="48px"
                />
              </div>
              <Card
                  icon= {SoftwareSolution?.solutions[2].image.url} 
                  title={SoftwareSolution?.solutions[2].text} 
                  buttonText={SoftwareSolution?.solutions[2].btn_text} 
                buttonLink="/services/legal-check"
                buttonBorder="white"
                buttonBg="black"
                buttonTextColor="#FF9966"
                playButton="/images/playBtn.png"
                playButtonLink="https://example.com/play"
                backgroundImage={SoftwareSolution?.solutions[2].bg_image.url} 
              />

              <Card
                  icon= {SoftwareSolution?.solutions[4].image.url} 
                  title={SoftwareSolution?.solutions[4].text} 
                  buttonText={SoftwareSolution?.solutions[4].btn_text} 
                buttonLink="/services/QrCertCode"
                buttonBorder="white"
                buttonBg="black"
                buttonTextColor="#FF9966"
                playButton="/images/playBtn.png"
                playButtonLink="https://example.com/play"
                backgroundImage={SoftwareSolution?.solutions[4].bg_image.url} 
              />

              <Card
                 icon= {SoftwareSolution?.solutions[3].image.url} 
                 title={SoftwareSolution?.solutions[3].text} 
                 buttonText={SoftwareSolution?.solutions[3].btn_text} 
                buttonLink="/services/BarCertCode"
                buttonBorder="#FF9966"
                buttonBg="white"
                buttonTextColor="black"
                playButton="/images/playBtn.png"
                playButtonLink="https://example.com/play"
                backgroundImage={SoftwareSolution?.solutions[3].bg_image.url} 
              />
            </div>

            <div className="w-full block md:hidden">
              <SliderComponent cards={cards} />
            </div>
          </div>

          {/* ====== Our Software solutions End ======= */}

          {/* Our Patent */}
          <OurPatent />

          {/* ======= Industry Service ======== */}
          <div className="w-full flex flex-col md:gap-[64px] gap-[40px]">
            <Heading2
              headingWhite1="Best"
              headingGray="in industry"
              headingWhite2="service"
            />
            <Text>
              The legal certification of an{" "}
              <GradientSpan>image, video, or document</GradientSpan> can
              sometimes be an added value and, in other cases, an essential
              requirement.
            </Text>

            <HomeGrid />
          </div>
          {/* ======= Industry Service end ======== */}

          {/* ISO Certified */}
          <ISOCertified />
        </div>
        {/* container ends */}
      </div>
    </section>
  );
}

export default OurPartners;
