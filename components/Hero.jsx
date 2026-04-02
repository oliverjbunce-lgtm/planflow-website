'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12 bg-white">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#0A84FF]/4 blur-[120px] pointer-events-none" />
      <motion.div style={{ y, opacity }} className="relative text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
          <span className="inline-flex items-center gap-2 border border-black/8 bg-black/3 text-gray-500 text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] animate-pulse" />
            Now in early access
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-[88px] font-black tracking-[-0.04em] leading-[0.95] mb-8 text-[#0a0a0a]"
        >
          The smartest way to<br />
          <span className="text-[#0A84FF]">quote building supplies.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          AI reads your builders' floor plans. Every door, window, and fitting — detected, counted, and turned into a quote request. Automatically.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#0A84FF] text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-[#0066CC] transition-all hover:-translate-y-0.5 shadow-xl shadow-[#0A84FF]/20">
            Get Early Access
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#how-it-works" className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold px-8 py-4 rounded-2xl text-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
            See how it works
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-20 flex flex-col items-center gap-2 text-gray-300">
          <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
