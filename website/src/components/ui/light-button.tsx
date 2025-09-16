import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  children: ReactNode;
}

function LightButtonNotEfect({ padding = "px-6 py-3", children, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-textActive hover:bg-textActive/90 text-bgBlackHigh font-semibold rounded-md transition-colors ${padding}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default LightButtonNotEfect;
