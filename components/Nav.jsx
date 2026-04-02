'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight text-[#0a0a0a]">Quoflow</span>
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'How It Works', 'Integrations', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors">{link}</a>
          ))}
        </div>
        <a href="#contact" className="bg-[#0A84FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0066CC] transition-all hover:-translate-y-0.5">
          Get Early Access
        </a>
      </div>
    </motion.nav>
  )
}
