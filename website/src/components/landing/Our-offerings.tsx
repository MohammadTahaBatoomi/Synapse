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
      className={`w-48 h-48 flex flex-col items-center justify-center 
                  rounded-lg cursor-pointer transition-all 
                  bg-olivebranch hover:bg-limemist 
                  ${className || ""}`}
    >
      <div className="text-4xl">{icon}</div>
      <p className="mt-2 font-medium">{text}</p>
    </div>
  );
};

export default Ouroffeerning;
