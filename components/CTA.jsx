'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky/8 via-white to-blue-50/50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 bg-sky/10 text-sky text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
            Ready when you are
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
            Ready to transform your order workflow?
          </h2>

          <p className="mt-5 text-lg text-navy/55 leading-relaxed">
            Book a demo and see Quoflow running with your own floor plans.
            No commitment — just a live look at what AI can do for your business.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:demo@quoflow.co.nz"
              className="inline-flex items-center gap-2.5 bg-sky text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-sky-dark transition-all shadow-xl shadow-sky/25 hover:shadow-sky/40 hover:-translate-y-0.5"
            >
              Book a Demo
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <p className="mt-5 text-sm text-navy/35">
            Or email us at{' '}
            <a href="mailto:hello@quoflow.co.nz" className="text-sky hover:underline">
              hello@quoflow.co.nz
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
