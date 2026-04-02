'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-sky/10 rounded-[2.5rem] blur-2xl" />

      {/* Main glass panel */}
      <div className="relative backdrop-blur-xl bg-white/80 border border-white/60 shadow-2xl rounded-3xl overflow-hidden">
        {/* Titlebar */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-100/80 bg-white/60 backdrop-blur-sm">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex-1 mx-4 bg-zinc-100/80 rounded-lg px-3 py-1.5 text-xs text-zinc-400 font-medium">
            app.quoflow.co.nz/dashboard
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Dashboard content */}
        <div className="p-5 bg-zinc-50/40">
          {/* Stat row */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Plans This Month', value: '24' },
              { label: 'Pending Quotes', value: '6' },
              { label: 'Components Found', value: '342' },
              { label: 'Quotes Approved', value: '18' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="backdrop-blur-sm bg-white/80 border border-white/60 rounded-2xl p-3 shadow-sm"
              >
                <div className="text-xl font-bold text-navy">{stat.value}</div>
                <div className="text-[10px] text-navy/40 mt-0.5 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main area: floor plan + quote */}
          <div className="grid grid-cols-5 gap-3">
            {/* Floor plan panel */}
            <div className="col-span-3 backdrop-blur-sm bg-white/80 border border-white/60 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-navy">floor_plan_v3.pdf</span>
                <span className="text-[10px] bg-sky/10 text-sky px-2 py-0.5 rounded-full font-semibold">AI Analysing</span>
              </div>
              {/* Floor plan SVG */}
              <div className="relative bg-zinc-50 rounded-xl overflow-hidden" style={{ height: '140px' }}>
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs><pattern id="g2" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M 16 0 L 0 0 0 16" fill="none" stroke="#007AFF" strokeWidth="0.4"/></pattern></defs>
                  <rect width="100%" height="100%" fill="url(#g2)" />
                </svg>
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 140">
                  <rect x="20" y="10" width="260" height="120" fill="none" stroke="#0b1f33" strokeWidth="2.5"/>
                  <line x1="150" y1="10" x2="150" y2="80" stroke="#0b1f33" strokeWidth="1.5"/>
                  <line x1="80" y1="80" x2="280" y2="80" stroke="#0b1f33" strokeWidth="1.5"/>
                  <line x1="80" y1="80" x2="80" y2="130" stroke="#0b1f33" strokeWidth="1.5"/>
                  <line x1="210" y1="80" x2="210" y2="130" stroke="#0b1f33" strokeWidth="1.5"/>
                </svg>
                {/* Detection boxes */}
                {[
                  { x: '22%', y: '8%', label: 'Window', color: '#007AFF', delay: 0.6 },
                  { x: '52%', y: '8%', label: 'Sliding Door', color: '#10b981', delay: 0.8 },
                  { x: '12%', y: '62%', label: 'Hinged', color: '#007AFF', delay: 1.0 },
                  { x: '62%', y: '62%', label: 'Cavity', color: '#8b5cf6', delay: 1.2 },
                ].map((box) => (
                  <motion.div
                    key={box.label}
                    className="absolute"
                    style={{ left: box.x, top: box.y, width: '28px', height: '28px' }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: box.delay, duration: 0.3 }}
                  >
                    <div className="w-full h-full rounded-sm relative" style={{ border: `1.5px solid ${box.color}` }}>
                      <div className="absolute -top-4 left-0 text-white text-[8px] px-1 py-0.5 rounded font-bold whitespace-nowrap" style={{ backgroundColor: box.color }}>
                        {box.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-sky/50"
                  animate={{ top: ['8%', '92%', '8%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 1.5 }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] text-navy/40">4 components detected</span>
                <span className="text-[10px] font-semibold text-emerald-600">98% confidence</span>
              </div>
            </div>

            {/* Quote panel */}
            <div className="col-span-2 backdrop-blur-sm bg-white/80 border border-white/60 rounded-2xl p-4 shadow-sm flex flex-col">
              <div className="text-xs font-bold text-navy mb-3">Quote #Q-024</div>
              <div className="space-y-2 flex-1">
                {[
                  { item: 'Cavity Sliders', qty: 3 },
                  { item: 'Hinged Doors', qty: 8 },
                  { item: 'Windows', qty: 4 },
                ].map((line) => (
                  <div key={line.item} className="flex items-center justify-between text-[10px]">
                    <span className="text-navy/70">{line.item}</span>
                    <span className="font-bold text-navy">×{line.qty}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-zinc-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-navy text-white text-[10px] font-bold py-2 rounded-xl"
                >
                  Approve Quote
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification badge */}
      <motion.div
        className="absolute -bottom-5 -left-5 backdrop-blur-xl bg-white/90 border border-white/60 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div>
          <div className="text-[11px] font-bold text-navy">Quote sent to builder</div>
          <div className="text-[10px] text-navy/40">just now</div>
        </div>
      </motion.div>

      {/* Floating AI badge */}
      <motion.div
        className="absolute -top-4 -right-4 backdrop-blur-xl bg-sky text-white shadow-xl shadow-sky/30 rounded-2xl px-3 py-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.5 }}
      >
        <div className="text-[10px] font-bold">✦ AI Active</div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/30 to-white" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-sky/6 blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-100/20 blur-3xl translate-y-1/2 -translate-x-1/4" />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 bg-sky/10 text-sky text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
                AI-powered for NZ & Australian trades
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-navy leading-[1.05] tracking-tight"
            >
              The platform<br />
              <span className="text-sky">built for</span><br />
              building supply
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xl text-navy/55 leading-relaxed max-w-lg"
            >
              AI analyses floor plans, auto-detects building components, and streamlines your entire order-to-quote workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="inline-flex items-center gap-2 bg-sky text-white font-semibold px-7 py-4 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-sky/25 hover:-translate-y-0.5">
                Book a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/80 border border-navy/10 text-navy font-semibold px-7 py-4 rounded-2xl hover:bg-white transition-all shadow-sm">
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 flex items-center gap-6 text-sm text-navy/40"
            >
              {['No credit card required', 'Built for NZ trades', '30-day trial'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l2.5 2.5 6.5-6.5" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
