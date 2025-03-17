import React from "react";
import UseCaseHero from "../components/UseCaseHero";

const SkyItalia = () => {
  return (
    <div>
      <UseCaseHero
        title="CASE STUDY"
        page="SKY ITALIA"
        text="Enhancing"
        gradientText="Compliance & Revenue"
        secondtext="with Tolemaica"
        image="/skyimage.png"
      />
      <div className="relative">
        <video
          src="/ourpartners.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-1 pointer-events-none"
        />
        <div className="container py-[100px] px-[20px] md:px-auto mx-auto">
          <h1 className="text-center font-raleway text-white font-normal text-[40px] mb-[48px]">
            <span className="text-white/[0.64]">THE</span> CHALLENGE
          </h1>
          <div className="flex flex-col gap-[48px] font-outfit font-light text-2xl text-white/[0.64] text-center">
            <p>
              Sky Italia offers TV subscriptions for both private users(Family)
              & businesses (Business). Business plans cost over twice as much as
              Family plans, but some commercial venues misused the cheaper
              Family plan to broadcast sports events.
            </p>
            <p>
              Sky Italia relied on on-site inspections to detect violations, but
              enforcement faced legal challenges:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkyItalia;
