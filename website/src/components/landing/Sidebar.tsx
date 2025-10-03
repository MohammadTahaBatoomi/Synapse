import React from "react";
import Image from "next/image";
import DynamicButton from "../shared/Shared-Button";
import DynamicLink from "../shared/Shared-Link";
import Ouroffeerning from "./Our-offerings";
import { BsLightning } from "react-icons/bs";
import { TbShieldBolt } from "react-icons/tb";
import { LuDatabaseZap } from "react-icons/lu";

function Sidebar() {
  return (
    <div className="bg-deepforest h-[50%] w-full xl:h-screen xl:w-[480px] xl:fixed md:px-8 px-4 py-4">
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
        <p className="text-white/70 mt-3">
          No personal credit checks or founder guarantee.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        <DynamicLink text="Our offerings" />
        <div className="flex gap-2">
          <Ouroffeerning text="Instant Productivity" icon={<BsLightning />} />
          <Ouroffeerning text="Instant Productivity" icon={<TbShieldBolt />} />
          <Ouroffeerning text="Instant Productivity" icon={<LuDatabaseZap />} />
        </div>
        <div className="space-x-3">
          <DynamicLink text="Content" />
          <DynamicLink text="Social" />
          <DynamicLink text="Address" />
          <DynamicLink text="Legal Terms" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
