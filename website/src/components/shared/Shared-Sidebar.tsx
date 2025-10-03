import React from "react";
import Image from "next/image";
import DynamicButton from "./Shared-Button";
import DynamicLink from "./Shared-Link";

function Sidebar() {
  return (
    <div className="bg-deepforest h-screen w-[25%] p-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src="/images/logo.svg"
            alt="Logo MyWebsite"
            className="rotate-180 h-4 w-4"
            width={0}
            height={0}
          />
          <p className="text-white font-bold">Synapse</p>
        </div>
        <DynamicButton text="Get Started" />
      </div>
      <div className="mt-12">
        <h1 className="text-white text-4xl font-normal max-w-xs">
          Money Transfers Made <span className="text-limemist">Simple</span>
        </h1>
        <p className="text-white/70 mt-3">No personal credit checks or founder guarantee.</p>
      </div>
      <div className="mt-12">
        <DynamicLink text="Our offerings"/>
      </div>
    </div>
  );
}

export default Sidebar;
