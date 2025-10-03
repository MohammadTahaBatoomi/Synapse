import React from 'react'
import Sidebar from '@/components/landing/Sidebar'
import HeroSection from '@/components/landing/Hero-Section'

function Page() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen">
      <Sidebar />

      <main className="flex-1 xl:ml-[480px]">
        <HeroSection />
      </main>
    </div>
  )
}

export default Page
