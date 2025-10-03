import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="flex justify-center items-center p-4 mt-8">
      <Image
        src="/images/4dd369a6b1dd2d9d8c3e5227ef4f51e7f941a6ba.png"
        alt="hero-section img"
        width={1350}    
        height={0}
        className="max-h-[650px] object-cover rounded-t-3xl"
      />
    </div>
  );
}

export default HeroSection;
