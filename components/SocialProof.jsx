'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const logos = [
  'BuildCo NZ',
  'Pacific Supplies',
  'Titan Building',
  'Southern Frames',
]

export default function SocialProof() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-14 bg-gray-50/60 border-y border-navy/6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-navy/40 uppercase tracking-widest mb-8"
        >
          Trusted by building supply businesses across New Zealand
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
              className="h-12 px-6 bg-white rounded-xl border border-navy/8 flex items-center justify-center shadow-sm"
            >
              <span className="text-navy/25 font-semibold text-sm tracking-wide">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
