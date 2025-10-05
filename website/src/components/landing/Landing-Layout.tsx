"use client";
import React from "react";
import {
  IoStatsChartSharp,
  IoWallet,
  IoFingerPrintOutline,
} from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";

import Sidebar from "@/components/landing/Sidebar";
import CarouselBanner from "@/components/landing/Carousel-Banner";
import SharedText from "@/components/shared/Shared-Text";
import GetMoreWeek from "@/components/landing/Get-More-Week";
import ReliableApp from "@/components/landing/Reliable-App";
import Firstclass from "@/components/landing/First-class";
import Footer from "@/components/landing/Footer";

const getMoreWeekItems = [
  { text: "Double Your Productivity", icon: "2x" },
  { text: "Efficiency Increase Per Transfer", icon: <IoStatsChartSharp /> },
  { text: "Centralize Your Finances", icon: <AiFillDatabase /> },
  { text: "More Activity", icon: "130%" },
];

const reliableApps = [
  {
    src: "/images/3b08d984c887ed2137ecba9e6ce406228ea26ca2.png",
    title: "Scale Your Team, Not Your Card Expenses",
    desc: "Issue virtual and physical cards at no additional cost to support teams of any size.",
  },
  {
    src: "/images/624ca513adf58ee43a7949875bf7f394594e86b2.png",
    title: "Effortless Paper Tracking, Mobile Convenience",
    desc: "Get precise control—at scale—with the ability to lock any card and restrict any type of spend.",
  },
];

const firstClassItems = [
  { text: "Safe Storage", icon: IoWallet },
  { text: "Secure", icon: IoFingerPrintOutline },
  { text: "Earn Interest", icon: IoStatsChartSharp },
  { text: "Family Plans", icon: MdFamilyRestroom },
];

function LandingLayout() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen">
      <Sidebar />

      <main className="flex-1 xl:ml-[480px]">
        <CarouselBanner
          src="/images/4dd369a6b1dd2d9d8c3e5227ef4f51e7f941a6ba.png"
          alt="New Hero Section"
        />
        <SharedText variant="up" text="Get more done in a week" className="mt-10" />
        <SharedText
          variant="down"
          text="Maximize your productivity with smarter tools designed to streamline your workflow to automate tasks, stay organized."
        />

        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {getMoreWeekItems.map((item, index) => (
              <GetMoreWeek key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>

        <SharedText variant="up" text="The Most Reliable App" className="mt-[100px]" />
        <div className="flex flex-col xl:flex-row justify-center items-start gap-8 px-8">
          {reliableApps.map((app, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <ReliableApp
                src={app.src}
                alt={app.title}
                width={700}
                maxHeight="150px"
                radius="rounded-2xl"
                className="shadow-lg"
              />
              <div className="flex flex-col justify-center px-4 mt-3">
                <SharedText variant="up" text={app.title} size="text-sm" align="left" />
                <SharedText variant="down" text={app.desc} align="left" />
              </div>
            </div>
          ))}
        </div>

        <CarouselBanner
          className="mt-[150px] h-[350px] rounded-3xl"
          src="/images/8d837b963fff72eb5b748baf388a129932d42ca7.png"
          alt="Mid Banner"
        />

        <div className="mt-[130px] text-center">
          <SharedText variant="up" text="First class software" />
          <SharedText
            variant="down"
            text="Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly."
          />
        </div>

        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {firstClassItems.map((item, index) => (
              <Firstclass key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>

        <CarouselBanner
          className="mt-[50px] h-[350px] rounded-3xl"
          src="/images/bc72d365e6fb4776f269844a23a18e18145ec664.png"
          alt="Bottom Banner"
        />

        <Footer />
      </main>
    </div>
  );
}

export default LandingLayout;