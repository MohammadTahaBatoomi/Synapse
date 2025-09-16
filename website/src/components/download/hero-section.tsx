import React from "react";
import Image from "next/image";
import DarkButton from "../ui/dark-button"
import LightButton from "../ui/light-button";

function HeroSection() {
  return (
    <section className="flex justify-center items-center mt-[120px]">
      <div className="relative w-[95%] h-[835px]">
        <Image
          src="/images/gradient-hero-prerender.avif"
          alt="Gradient hero background"
          fill
          priority
          className="rounded-xl object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center mb-20 z-10 text-center">
          <h1 className="text-textActive text-[120px] font-bold">
            The AI Music Player
          </h1>
          <p className="text-textActive text-xl font-semibold">
            Synapse makes listening immersive with AI — first made for Mark Zuckerberg.
          </p>
          <div className="mt-4 flex gap-4">
             <LightButton padding="px-8 py-4">Download for linux</LightButton>
             <DarkButton padding="px-8 py-4">All Downloads</DarkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
