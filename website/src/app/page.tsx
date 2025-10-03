import React from 'react'
import Sidebar from '@/components/landing/Sidebar'
import HeroSection from '@/components/landing/Hero-Section'
import SharedText from '@/components/shared/Shared-Text'
function Page() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen">
      <Sidebar />

      <main className="flex-1 xl:ml-[480px]">
        <HeroSection />
        <SharedText variant='up' text='Get more done in a week' className='mt-10' />
        <SharedText variant='down' text='Maximize your productivity with smarter tools designed to streamline your workflow to automate tasks, stay organized' />
      </main>
    </div>
  )
}

export default Page
