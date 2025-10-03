"use client";

import React from "react";

interface DynamicButtonProps {
  text?: string;
  onClick?: () => void;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ text = "Get started", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 rounded-sm transition-all text-xs
                 bg-limemist hover:bg-olivebranch"
    >
      {text}
    </button>
  );
};

export default DynamicButton;
