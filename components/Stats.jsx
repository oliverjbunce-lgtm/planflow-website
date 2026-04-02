'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  {
    value: '90%+',
    label: 'Detection accuracy',
    sub: 'Up from 65% baseline',
    icon: '📐',
  },
  {
    value: '10+',
    label: 'Product categories',
    sub: 'Doors, windows, frames & more',
    icon: '📦',
  },
  {
    value: 'Minutes',
    label: 'Not hours for take-offs',
    sub: 'Vs 2–4 hrs manual count',
    icon: '⚡',
  },
  {
    value: 'NZ-built',
    label: 'For NZ trades',
    sub: 'Trained on NZ building plans',
    icon: '🇳🇿',
  },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Built around real results
          </h2>
          <p className="mt-2 text-white/50 text-base">
            Quoflow is engineered for the NZ building supply market.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/8 transition-colors text-center group"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sky font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.sub}</div>

              {/* Accent glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-sky/0 group-hover:ring-sky/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
