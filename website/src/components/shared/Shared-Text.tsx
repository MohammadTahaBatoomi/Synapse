import React from "react";

interface SharedTextProps {
  text: string;
  variant?: "up" | "down"; 
  size?: string;
  color?: string;
  weight?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

function SharedText({
  text,
  variant = "up",
  size,
  color,
  weight,
  align,
  className = "",
}: SharedTextProps) {
  const variantStyles =
    variant === "up"
      ? {
          size: "text-[42px]",
          color: "text-deepforest",
          weight: "font-normal",
          align: "center",
        }
      : {
          size: "text-[12px]",
          color: "text-stonegray",
          weight: "font-medium",
          align: "center",
        };

  return (
    <p
      className={`${size || variantStyles.size} ${color || variantStyles.color} ${
        weight || variantStyles.weight
      } text-${align || variantStyles.align} ${className}`}
    >
      {text}
    </p>
  );
}

export default SharedText;
