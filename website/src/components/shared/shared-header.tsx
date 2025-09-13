'use client'

import React, { useEffect, useState } from 'react'

function SharedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div
        className={`max-w-[1500px] mx-auto flex items-center justify-between py-4 px-8 transition-shadow duration-300 mt-7 bg-bgBlackHigh rounded-xl
        ${isScrolled ? 'shadow-[0_0_5px_1.5px_rgba(255,255,255,0.15)]' : 'shadow-none'}`}
      >
        <h1 className="text-textActive font-bold text-lg">Synapse</h1>
        <nav className="space-x-6 text-textNotActive">
          <a href="#features" className="hover:text-textActive transition">Features</a>
          <a href="#docs" className="hover:text-textActive transition">Docs</a>
          <a href="#contact" className="hover:text-textActive transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default SharedHeader
