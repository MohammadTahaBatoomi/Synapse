"use client";
import React from "react";
import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa";
import SharedText from "../shared/Shared-Text";

interface FirstclassProps {
  icon?: IconType;
  text: string;
  className?: string;
}

const Firstclass: React.FC<FirstclassProps> = ({
  icon: Icon = FaStar,
  text,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center gap-3 p-6 ${className}`}
    >
      <div className="text-8xl text-limemist bg-deepforest px-[95px] py-[80px] rounded-xl">
        <Icon />
      </div>

      <SharedText variant="down" size="text-sm" text={text} />
    </div>
  );
};

export default Firstclass;
