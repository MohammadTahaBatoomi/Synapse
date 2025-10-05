import React from "react";
import Sidebar from "@/components/landing/Sidebar";
import CarouselBanner from "@/components/landing/Carousel-Banner";
import SharedText from "@/components/shared/Shared-Text";
import GetMoreWeek from "@/components/landing/Get-More-Week";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import ReliableApp from "@/components/landing/Reliable-App";

function Page() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen">
      <Sidebar />

      <main className="flex-1 xl:ml-[480px]">
        <CarouselBanner />
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
            <GetMoreWeek
              text="Efficiency Increase Per Transfer"
              icon={<IoStatsChartSharp />}
            />
            <GetMoreWeek
              text="Centralize Your Finances"
              icon={<AiFillDatabase />}
            />
            <GetMoreWeek text="More Activity" icon="130%" />
          </div>
        </div>
        <SharedText
          variant="up"
          text="The Most Reliable App"
          className="mt-[100px]"
        />
        <div className="flex justify-between items-center px-8">
          <div> 
            <ReliableApp
              src="/images/3b08d984c887ed2137ecba9e6ce406228ea26ca2.png"
              alt="Reliable banking dashboard"
              width={700}
              maxHeight="150px"
              radius="rounded-2xl"
              className="shadow-lg"
            />
            <div className="flex flex-col justify-center px-6">
              <SharedText
                variant="up"
                text="Scale Your Team, Not Your Card Expenses"
                size="text-sm"
                align="left"
              />
              <SharedText
                variant="down"
                text="Issue virtual and physical cards at no additional cost to support teams of any size."
                align="left"
              />
            </div>
          </div>
          <div>
            <ReliableApp
              src="/images/624ca513adf58ee43a7949875bf7f394594e86b2.png"
              alt="Reliable banking dashboard"
              width={700}
              maxHeight="150px"
              radius="rounded-2xl"
              className="shadow-lg"
            />
            <div className="flex flex-col justify-center px-6">
              <SharedText
                variant="up"
                text="Effortless Paper Tracking, Mobile Convenience"
                size="text-sm"
                align="left"
              />
              <SharedText
                variant="down"
                text="Get precise control—at scale—with the ability to lock any card and restrict any type of spend."
                align="left"
              />
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default Page;
