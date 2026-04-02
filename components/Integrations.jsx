'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const integrations = [
  { name: 'Xero',     desc: 'Accounting' },
  { name: 'MYOB',     desc: 'Accounting' },
  { name: 'simPRO',   desc: 'Job Management' },
  { name: 'Fergus',   desc: 'Trade Software' },
  { name: 'Zapier',   desc: 'Automation' },
  { name: 'Infusion', desc: 'Business Software' },
]

export default function Integrations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} className="py-32 px-6 bg-white" id="integrations">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Integrations</motion.p>
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a]"
          >
            Fits into your<br />existing workflow.
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-xl font-black text-[#0a0a0a] mb-1">{int.name}</div>
              <div className="text-sm text-gray-400">{int.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
