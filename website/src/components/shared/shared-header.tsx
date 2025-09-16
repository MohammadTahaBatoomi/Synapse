"use client";

import React, { useEffect, useState } from "react";
import DarkButton from "../ui/dark-button";
import LightButton from "../ui/light-button";

function SharedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div
        className={`max-w-[1500px] mx-auto flex items-center justify-between py-2 px-8 transition-shadow duration-300 mt-7 bg-bgBlackHigh rounded-xl
        ${
          isScrolled
            ? "shadow-[0_0_5px_0.5px_rgba(255,255,255,0.1)]"
            : "shadow-none"
        }`}
      >
        <h1 className="text-textActive font-bold text-2xl">Synapse</h1>
        <nav className="space-x-6 text-textActive">
          <a
            href="#features"
            className="hover:bg-textNotActive/20 transition p-2 rounded-sm"
          >
            Features
          </a>
          <a
            href="#docs"
            className="hover:bg-textNotActive/20 transition p-2 rounded-sm"
          >
            Docs
          </a>
          <a
            href="#contact"
            className="hover:bg-textNotActive/20 transition p-2 rounded-sm"
          >
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <LightButton padding="px-5 py-2.5">Sign Up</LightButton>
          <DarkButton padding=" px-5 py-2.5">All Downloads</DarkButton>
        </div>
      </div>
    </header>
  );
}

export default SharedHeader;
