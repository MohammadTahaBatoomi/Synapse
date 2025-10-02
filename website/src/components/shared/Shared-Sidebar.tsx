import React from "react";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="bg-deepforest h-screen w-[25%] p-8">
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
    </div>
  );
}

export default Sidebar;
