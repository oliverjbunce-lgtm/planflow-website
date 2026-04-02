'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function FloatingShape({ className, delay = 0, duration = 8 }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-40 blur-3xl ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

function FloorPlanMockup() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Device frame */}
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-navy/15 border border-navy/10 overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">
            app.quoflow.co.nz/analysis
          </div>
        </div>

        {/* Floor plan canvas */}
        <div className="relative bg-gray-50 p-4" style={{ height: '280px' }}>
          {/* Grid overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#007AFF" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Floor plan walls */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">
            {/* Outer walls */}
            <rect x="40" y="30" width="320" height="220" fill="none" stroke="#0b1f33" strokeWidth="3"/>
            {/* Interior walls */}
            <line x1="200" y1="30" x2="200" y2="140" stroke="#0b1f33" strokeWidth="2"/>
            <line x1="120" y1="140" x2="360" y2="140" stroke="#0b1f33" strokeWidth="2"/>
            <line x1="120" y1="140" x2="120" y2="250" stroke="#0b1f33" strokeWidth="2"/>
            <line x1="280" y1="140" x2="280" y2="250" stroke="#0b1f33" strokeWidth="2"/>

            {/* Room labels */}
            <text x="100" y="90" fill="#0b1f33" fontSize="10" opacity="0.5" textAnchor="middle">Living</text>
            <text x="290" y="90" fill="#0b1f33" fontSize="10" opacity="0.5" textAnchor="middle">Bedroom 1</text>
            <text x="78" y="200" fill="#0b1f33" fontSize="9" opacity="0.5" textAnchor="middle">Bath</text>
            <text x="200" y="200" fill="#0b1f33" fontSize="10" opacity="0.5" textAnchor="middle">Kitchen</text>
            <text x="320" y="200" fill="#0b1f33" fontSize="10" opacity="0.5" textAnchor="middle">Bedroom 2</text>
          </svg>

          {/* AI Detection bounding boxes */}
          <motion.div
            className="absolute"
            style={{ left: '26%', top: '8%', width: '36px', height: '36px' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="w-full h-full border-2 border-sky rounded-sm relative">
              <div className="absolute -top-5 left-0 bg-sky text-white text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">
                Window • 95%
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ left: '55%', top: '8%', width: '36px', height: '36px' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <div className="w-full h-full border-2 border-emerald-500 rounded-sm relative">
              <div className="absolute -top-5 left-0 bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">
                Sliding Door • 92%
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ left: '15%', top: '52%', width: '32px', height: '32px' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            <div className="w-full h-full border-2 border-sky rounded-sm relative">
              <div className="absolute -top-5 left-0 bg-sky text-white text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">
                Cavity Slider • 97%
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{ left: '65%', top: '52%', width: '32px', height: '32px' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            <div className="w-full h-full border-2 border-violet-500 rounded-sm relative">
              <div className="absolute -top-5 left-0 bg-violet-500 text-white text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">
                Frame • 89%
              </div>
            </div>
          </motion.div>

          {/* Scan line animation */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-sky/40"
            style={{ top: 0 }}
            animate={{ top: ['8%', '92%', '8%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1.8 }}
          />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-500 font-medium">AI analysing floor_plan_v2.pdf</span>
          </div>
          <span className="text-xs font-semibold text-sky">4 detections</span>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg shadow-navy/10 border border-navy/8 px-4 py-3 flex items-center gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <div className="w-9 h-9 rounded-full bg-sky/10 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9l4 4 8-8" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold text-navy">Order created</div>
          <div className="text-xs text-navy/50">8 items detected</div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background shapes */}
      <FloatingShape className="w-96 h-96 bg-sky/20 -top-20 -right-20" delay={0} duration={10} />
      <FloatingShape className="w-64 h-64 bg-blue-200/30 top-1/3 -left-10" delay={2} duration={8} />
      <FloatingShape className="w-80 h-80 bg-sky/10 bottom-10 right-1/4" delay={4} duration={12} />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-sky/10 text-sky text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
                AI-powered for NZ & Australian trades
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.1] tracking-tight text-balance"
            >
              The intelligent portal for building supply businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-lg text-navy/60 leading-relaxed max-w-xl"
            >
              AI analyses floor plans, identifies building components, and streamlines your entire order-to-quote workflow.
              Built for NZ and Australian building supply businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sky text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-sky-dark transition-all shadow-lg shadow-sky/25 hover:shadow-sky/40 hover:-translate-y-0.5"
              >
                Book a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-navy/5 text-navy font-semibold px-6 py-3.5 rounded-xl hover:bg-navy/10 transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-sm text-navy/40"
            >
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Built for NZ trades
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                30-day trial
              </span>
            </motion.div>
          </div>

          {/* Right: mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <FloorPlanMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
