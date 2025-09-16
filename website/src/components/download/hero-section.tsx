import React from "react";
import Image from "next/image";
import Button from "../ui/dark-button-not-effect";

function HeroSection() {
  return (
    <section className="flex justify-center items-center mt-24">
      <div className="relative w-[95%] h-[835px]">
        <Image
          src="/images/gradient-hero-prerender.avif"
          alt="Gradient hero background"
          fill
          priority
          className="rounded-xl object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col justify-start items-center mt-20 z-10 text-center">
          <h1 className="text-textActive text-[120px] font-bold">
            The AI Music Player
          </h1>
          <p className="text-textActive text-xl font-semibold">
            Synapse makes listening immersive with AI — first made for Mark Zuckerberg.
          </p>
        <Button padding="px-8 py-4">All Downloads</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
