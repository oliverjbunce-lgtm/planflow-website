'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="#007AFF" strokeWidth="1.8"/>
        <rect x="7" y="7" width="6" height="6" rx="1" stroke="#007AFF" strokeWidth="1.6"/>
        <rect x="15" y="7" width="6" height="6" rx="1" stroke="#007AFF" strokeWidth="1.6" strokeDasharray="2 1.5"/>
        <rect x="7" y="15" width="6" height="6" rx="1" stroke="#007AFF" strokeWidth="1.6" strokeDasharray="2 1.5"/>
        <path d="M15 18h6M18 15v6" stroke="#007AFF" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="21" cy="21" r="5" fill="#007AFF" fillOpacity="0.12" stroke="#007AFF" strokeWidth="1.5"/>
        <path d="M19 21l1.5 1.5L23 19.5" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI Floor Plan Analysis',
    desc: 'Upload a building plan and AI automatically detects and counts building components. Saves hours of manual take-offs.',
    highlight: 'Saves hours of manual take-offs',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="#007AFF" strokeWidth="1.8"/>
        <path d="M8 10h12M8 14h8M8 18h5" stroke="#007AFF" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="21" cy="21" r="5" fill="#007AFF" fillOpacity="0.12" stroke="#007AFF" strokeWidth="1.5"/>
        <path d="M19 21l1.5 1.5L23 19.5" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Trade Customer Portal',
    desc: 'Merchants and builders submit spec orders digitally. No more phone calls, emails, or lost paperwork.',
    highlight: 'No more lost paperwork',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8h20M4 8v14a2 2 0 002 2h16a2 2 0 002-2V8M4 8V6a2 2 0 012-2h4m8 0h4a2 2 0 012 2v2" stroke="#007AFF" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 4v4M18 4v4" stroke="#007AFF" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 14l2 2 5-5" stroke="#007AFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="21" r="5" fill="#007AFF" fillOpacity="0.12" stroke="#007AFF" strokeWidth="1.5"/>
        <path d="M19.5 21.5l1 1L23 19.5" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Smart Review & Quoting',
    desc: 'Admin reviews orders, approves, and generates quotes. Full audit trail from plan to invoice.',
    highlight: 'Full audit trail',
  },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="features" ref={ref} className="py-24 md:py-32 relative"><div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/20 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky text-sm font-semibold uppercase tracking-widest mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-lg text-navy/55 max-w-xl mx-auto">
            Quoflow is purpose-built for building supply merchants and their trade customers.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative backdrop-blur-sm bg-white/80 border border-white/60 shadow-sm hover:shadow-xl hover:shadow-sky/8 hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-sky/8 flex items-center justify-center mb-6 group-hover:bg-sky/14 transition-colors">
                {f.icon}
              </div>

              <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
              <p className="text-navy/55 leading-relaxed mb-4">{f.desc}</p>

              <div className="flex items-center gap-1.5 text-sky text-sm font-semibold">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3 3 7-7" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {f.highlight}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-sky to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
