import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="flex justify-center items-center p-4">
      <Image
        src="/images/4dd369a6b1dd2d9d8c3e5227ef4f51e7f941a6ba.png"
        alt="hero-section img"
        width={1200}    
        height={1000}
        className="rounded-lg object-contain"
      />
    </div>
  );
}

export default HeroSection;
