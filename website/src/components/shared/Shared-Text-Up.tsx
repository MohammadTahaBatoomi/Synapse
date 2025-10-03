import React from "react";

interface SharedTextProps {
  text: string;
  size?: string; 
  color?: string;
  weight?: string;
  align?: "left" | "center" | "right";
  className?: string; 
}

function SharedText({
  text,
  size = "text-base",
  color = "text-gray-800",
  weight = "font-normal",
  align = "left",
  className = "",
}: SharedTextProps) {
  return (
    <p className={`${size} ${color} ${weight} text-${align} ${className}`}>
      {text}
    </p>
  );
}

export default SharedText;
