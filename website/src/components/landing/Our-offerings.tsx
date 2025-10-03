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
      className={`w-28 h-39 flex flex-col items-center justify-center py-6
                  rounded-md cursor-pointer transition-all text-center
                  bg-olivebranch hover:bg-limemist 
                  ${className || ""}`}
    >
      <div className="text-xl text-[#3b4908]">{icon}</div>
      <p className="mt-2 font-light text-[13px]">{text}</p>
    </div>
  );
};

export default Ouroffeerning;
