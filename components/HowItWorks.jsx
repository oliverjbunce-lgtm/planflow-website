'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  { n: '01', title: 'Builder submits a plan',       desc: 'Your builder logs into your branded portal and uploads their floor plan PDF from any device.' },
  { n: '02', title: 'AI analyses instantly',        desc: 'Our model detects every door type, window, and fitting in seconds — no manual counting.' },
  { n: '03', title: 'Quote lands in your dashboard', desc: 'A structured quote request appears in your admin dashboard. Review, approve, and respond.' },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} className="py-32 px-6 bg-[#f5f5f7]" id="how-it-works">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Process</motion.p>
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a]"
          >
            Up and running in days.
          </motion.h2>
        </div>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="relative flex gap-8 pb-16 last:pb-0"
            >
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                  className="absolute left-[23px] top-12 w-px bg-gray-200 origin-top"
                  style={{ height: 'calc(100% - 48px)' }}
                />
              )}
              <div className="shrink-0 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                <span className="text-sm font-black text-[#0A84FF]">{step.n}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
