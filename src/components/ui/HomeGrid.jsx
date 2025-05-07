import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GridSlider from "../ui/GridSlider";

const HomeGrid = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [HomeServices, setHomeServices] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/homeservice?populate=services.bg_image`)
      .then((response) => response.json())
      .then((data) => {
        setHomeServices(data.data); // Set "What We Do" data into state
      })
      .catch((error) => console.error("Failed to fetch What We Do data:", error));
    
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

  // Check if HomeServices is loaded before rendering
  if (!HomeServices) {
    return <div className="bg-black">Loading...</div>;  // You can customize this to show a loading spinner or message
  }

  return (
    <div className="w-full mx-auto p-4">
      <div className="grid gap-8 grid-cols-1 xl:grid-cols-4 auto-rows-[minmax(120px,130px)]">
        {/* Territory Monitoring */}
        <div className="col-span-2 xl:col-span-1 row-span-4 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HomeServices?.services?.[0]?.bg_image?.url})`, // Safe navigation to prevent error
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              {HomeServices?.services?.[0]?.service}
            </p>
          </Link>
        </div>

        {/* Logistics */}
        <div className="col-span-2 row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HomeServices?.services?.[1]?.bg_image?.url})`, // Safe navigation to prevent error
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              {HomeServices?.services?.[1]?.service}
            </p>
          </Link>
        </div>

        {/* Measurements */}
        <div className="col-span-2 xl:col-span-1 row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HomeServices?.services?.[2]?.bg_image?.url})`, // Safe navigation to prevent error
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              {HomeServices?.services?.[2]?.service}
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
              {HomeServices?.heading.split(' ')[0]}
              </span>
              <span className="bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent">
              {HomeServices?.heading.split(' ')[1]}
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
              backgroundImage: `url(${HomeServices?.services?.[7]?.bg_image?.url})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
            {HomeServices?.services?.[7]?.service}
            </p>
          </Link>
        </div>

        {/* Commercial Contracts */}
        <div className="col-span-2 xl:col-span-1 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HomeServices?.services?.[3]?.bg_image?.url})`, // Safe navigation to prevent error
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              {HomeServices?.services?.[3]?.service}
            </p>
          </Link>
        </div>

        {/* Fraud */}
        <div className="col-span-2 xl:col-span-1 row-span-3 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HomeServices?.services?.[6]?.bg_image?.url})`, // Safe navigation to prevent error
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              {HomeServices?.services?.[6]?.service}
            </p>
          </Link>
        </div>

        {/* Theft */}
        <div className="col-span-2 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HomeServices?.services?.[4]?.bg_image?.url})`, // Safe navigation to prevent error
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              {HomeServices?.services?.[4]?.service}
            </p>
          </Link>
        </div>

        {/* Insurance Fraud */}
        <div className="col-span-2 xl:col-span-1 row-span-2 flex rounded-2xl overflow-hidden border-2 border-white">
          <Link
            to="/"
            className="relative flex flex-col justify-end py-[24px] items-center gap-6 p-5 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HomeServices?.services?.[5]?.bg_image?.url})`, // Safe navigation to prevent error
            }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/30"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <p className="z-10 lg:text-[1.2rem] text-2xl font-bold tracking-wide text-white text-center font-outfit uppercase">
              {HomeServices?.services?.[5]?.service}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
