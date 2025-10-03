"use client";

import React from "react";

interface DynamicBoxProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
}

const Ouroffeerning: React.FC<DynamicBoxProps> = ({ icon, text, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-35 flex flex-col items-center justify-center xl:py-6 py-8 
                  rounded-md cursor-pointer transition-all text-center
                  bg-olivebranch hover:bg-limemist 
                  ${className || ""}`}
    >
      <div className="text-2xl xl:text-xl text-[#3b4908]">{icon}</div>
      <p className="mt-2 font-light text-[13px]">{text}</p>
    </div>
  );
};

export default Ouroffeerning;
