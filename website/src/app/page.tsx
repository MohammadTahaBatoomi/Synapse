import React from "react";
import Sidebar from "@/components/landing/Sidebar";
import HeroSection from "@/components/landing/Hero-Section";
import SharedText from "@/components/shared/Shared-Text";
import GetMoreWeek from "@/components/landing/Get-More-Week";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
function Page() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen">
      <Sidebar />

      <main className="flex-1 xl:ml-[480px]">
        <HeroSection />
        <SharedText
          variant="up"
          text="Get more done in a week"
          className="mt-10"
        />
        <SharedText
          variant="down"
          text="Maximize your productivity with smarter tools designed to streamline your workflow to automate tasks, stay organized"
        />
        <div className="flex justify-center items-center mt-5 ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <GetMoreWeek text="Double Your Productivity" icon="2x" />
            <GetMoreWeek text="Efficiency Increase Per Transfer" icon={<IoStatsChartSharp />} />
            <GetMoreWeek text="Centralize Your Finances" icon={<AiFillDatabase />} />
            <GetMoreWeek text="More Activity" icon="130%" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
