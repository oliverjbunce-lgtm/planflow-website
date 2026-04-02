'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  { icon: '🔍', title: 'AI Plan Analysis',       desc: 'Upload any PDF floor plan. Our AI identifies every door type, window, and fitting in seconds.' },
  { icon: '📋', title: 'Instant Quote Requests', desc: 'Detections convert automatically into structured quote requests with your product catalogue.' },
  { icon: '🏗️', title: 'Builder Portal',   desc: 'A branded portal for your builders to submit plans and track their quotes from any device.' },
  { icon: '⚡',    title: 'Admin Dashboard',         desc: 'Review, approve, and manage every quote in one place. Full audit trail on every job.' },
  { icon: '🔗', title: 'System Integrations',    desc: 'Connects to Xero, MYOB, simPRO, Fergus, and more. Fits into your existing workflow.' },
  { icon: '📍', title: 'Multi-Location',         desc: 'Support multiple branches or locations. Route orders and notifications to the right team.' },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section ref={ref} className="py-32 px-6 bg-white" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Features</motion.p>
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#0a0a0a]"
          >
            Everything your<br />business needs.
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const fromLeft = i % 2 === 0
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
