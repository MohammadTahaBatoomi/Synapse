import React from "react";
import Image from "next/image";

interface CarouselbannerProps {
  src?: string;  
  alt?: string;      
  className?: string;
}

const Carouselbanner: React.FC<CarouselbannerProps> = ({
  src = "/images/",
  alt = "hero-section img",
  className = "",
}) => {
  return (
    <div className="flex justify-center items-center p-4 mt-8">
      <div className="relative w-[1350px] max-w-full">
        <Image
          src={src}
          alt={alt}
          width={1350}
          height={650}
          className={`object-cover rounded-t-3xl w-full max-h-[650px] ${className || ""}`}
        />
      </div>
    </div>
  );
};

export default Carouselbanner;
