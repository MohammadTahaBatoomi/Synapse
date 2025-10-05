import React from "react";
import Image from "next/image";

interface ReliableAppProps {
  src: string;  
  alt?: string;    
  width?: number;
  height?: number;          
  maxHeight?: string;      
  radius?: string;
  className?: string;      
  containerClassName?: string; 
}

const ReliableApp: React.FC<ReliableAppProps> = ({
  src,
  alt = "App Image",
  width = 1350,
  height = 0,
  maxHeight = "650px",
  radius = "rounded-t-3xl",
  className = "",
  containerClassName = "",
}) => {
  return (
    <div
      className={`flex justify-center items-center p-4 mt-8 ${containerClassName}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${radius} max-h-[${maxHeight}] ${className}`}
      />
    </div>
  );
};

export default ReliableApp;
