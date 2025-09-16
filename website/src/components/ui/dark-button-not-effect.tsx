import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  children: ReactNode;
}

function Button({ padding = "px-6 py-3", children, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-bgBlackHigh text-white font-semibold rounded-md border border-textNotActive hover:border-textActive transition-colors ${padding}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
