"use client";

import React from "react";

interface DynamicBoxProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
}

const GetMoreWeek: React.FC<DynamicBoxProps> = ({ icon, text, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`w-auto h-[200px] flex flex-col items-center justify-center xl:py-6 py-8 px-[100px] 
                  rounded-2xl cursor-pointer transition-all text-center
                  bg-limemist 
                  ${className || ""}`}
    >
      <div className="text-7xl text-deepforest font-medium mb-4">{icon}</div>
      <p className="mt-2 text-deepfores text-lg">{text}</p>
    </div>
  );
};

export default GetMoreWeek;

  