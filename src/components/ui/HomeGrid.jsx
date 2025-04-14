import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GridSlider from "../ui/GridSlider";
// import ServiceSlider from './ServiceSlider';

const HomeGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If mobile, render slider
  if (isMobile) {
    return <GridSlider />;
  }

  // Otherwise render grid
  return (
    <div className="w-full mx-auto p-4">
      <div className="grid gap-8 grid-cols-1 xl:grid-cols-4 auto-rows-[minmax(120px,130px)]">
        {/* Territory Monitoring */}
        <div className="col-span-2 xl:col-span-1 row-span-4 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/TeritorryMonitoring.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              Territory Monitoring
            </p>
          </Link>
        </div>

        {/* Logistics */}
        <div className="col-span-2 row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/grid2.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              Logistics
            </p>
          </Link>
        </div>

        {/* Measurements */}
        <div className="col-span-2 xl:col-span-1 row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/grid3.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              Measurements
            </p>
          </Link>
        </div>

        {/* Tailored Services */}
        <div className="col-span-2 row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
          <div
            className="relative flex flex-col justify-center py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              background: "linear-gradient(145deg,#452a1e,#1d1613,#34302f)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[90px]/[100%] md:text-[60px]/[100%] text-[48px]/[100%] font-raleway font-[700] tracking-widest text-white text-center font-outfit uppercase flex flex-col">
              <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                tailored
              </span>
              <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
                Services
              </span>
            </p>
          </div>
        </div>

        {/* WIP Control */}
        <div className="col-span-2 xl:col-span-1 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/wipcontrol.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              WIP control
            </p>
          </Link>
        </div>

        {/* Commercial Contracts */}
        <div className="col-span-2 xl:col-span-1 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/grid5.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              Commercial Contracts
            </p>
          </Link>
        </div>

        {/* Fraud */}
        <div className="col-span-2 xl:col-span-1 row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/fraud.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              Fraud
            </p>
          </Link>
        </div>

        {/* Theft */}
        <div className="col-span-2 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/theft.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              Theft
            </p>
          </Link>
        </div>

        {/* Insurance Fraud */}
        <div className="col-span-2 xl:col-span-1 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/insurancefraud.png')",
            }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/30"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              insurance fraud
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
