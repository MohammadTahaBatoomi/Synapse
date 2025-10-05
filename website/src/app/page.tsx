"use client";

import React from "react";
import Sidebar from "@/components/landing/Sidebar";
import CarouselBanner from "@/components/landing/Carousel-Banner";
import SharedText from "@/components/shared/Shared-Text";
import GetMoreWeek from "@/components/landing/Get-More-Week";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import ReliableApp from "@/components/landing/Reliable-App";
import Firstclass from "@/components/landing/First-class";
import { IoWallet } from "react-icons/io5";
import { IoFingerPrintOutline } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import Footer from "@/components/landing/Footer";

function Page() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen">
      <Sidebar />

      <main className="flex-1 xl:ml-[480px]">
        <CarouselBanner
          src="/images/4dd369a6b1dd2d9d8c3e5227ef4f51e7f941a6ba.png"
          alt="New Hero Section"
        />
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
        <CarouselBanner
          className="mt-[150px] h-[350px] rounded-3xl"
          src="/images/8d837b963fff72eb5b748baf388a129932d42ca7.png"
          alt="New Hero Section"
        />
        <div className="mt-[130px]">
          <SharedText variant="up" text="First class software" />
          <SharedText
            variant="down"
            text="Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly."
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 xl:grid-cols-4">
            <Firstclass text="Safe Storage" icon={IoWallet} />
            <Firstclass text="Secure" icon={IoFingerPrintOutline} />
            <Firstclass text="Earn Interest" icon={IoStatsChartSharp} />
            <Firstclass text="Family Plans" icon={MdFamilyRestroom} />
          </div>
        </div>
        <CarouselBanner
          className="mt-[50px] h-[350px] rounded-3xl"
          src="/images/bc72d365e6fb4776f269844a23a18e18145ec664.png"
          alt="New Hero Section"
        />
        <Footer />
      </main>
    </div>
  );
}

export default Page;
