'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: '3.5', unit: 'hrs', label: 'Average time to manually read a floor plan and create a quote' },
  { value: '1', unit: 'in 8', label: 'Jobs contain counting errors that cause expensive re-work' },
  { value: '40', unit: 'hrs', label: 'Lost per month to manual plan analysis across a typical team' },
]

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15 }} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-5xl font-black text-[#0a0a0a] tracking-tight">{stat.value}</span>
        <span className="text-2xl font-bold text-[#0A84FF]">{stat.unit}</span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
    </motion.div>
  )
}

export default function Problem() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} className="py-32 px-6 bg-[#f5f5f7]" id="problem">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">The problem</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1] text-[#0a0a0a]">
            Your team is still<br /><span className="text-gray-300">quoting by hand.</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
