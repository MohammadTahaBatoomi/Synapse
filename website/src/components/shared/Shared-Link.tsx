"use client";

import React from "react";
import Link from "next/link";

interface DynamicLinkProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const DynamicLink: React.FC<DynamicLinkProps> = ({ text, href, onClick, className }) => {
  const baseStyle =
    "text-[13px] text-limemist";

  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${className || ""}`}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${className || ""}`}>
      {text}
    </button>
  );
};

export default DynamicLink;
