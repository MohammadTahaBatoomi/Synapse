import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-[95%] h-[800px] mt-[100px]">
        <Image
          src="/images/gradient-hero-prerender.avif"
          alt="Gradient hero background"
          fill
          priority
          className="rounded-2xl object-cover object-center"
        />
      </div>
    </div>
  );
}

export default HeroSection;
