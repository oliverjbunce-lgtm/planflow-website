'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const integrations = [
  {
    name: 'Xero',
    category: 'Accounting',
    color: '#13B5EA',
    bg: '#E8F7FC',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#13B5EA"/>
        <path d="M10 20l6.5-6.5 3.2 3.2-3.3 3.3 3.3 3.3-3.2 3.2L10 20zm20 0l-6.5 6.5-3.2-3.2 3.3-3.3-3.3-3.3 3.2-3.2L30 20zm-10-9.5a9.5 9.5 0 010 19 9.5 9.5 0 010-19z" fill="white" fillOpacity="0.2"/>
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">x</text>
      </svg>
    ),
  },
  {
    name: 'MYOB',
    category: 'Accounting',
    color: '#6B3FA0',
    bg: '#F0EBF8',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#6B3FA0"/>
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">MYOB</text>
      </svg>
    ),
  },
  {
    name: 'Infusion',
    category: 'Quoting & ERP',
    color: '#E85D26',
    bg: '#FDF0EB',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#E85D26"/>
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">INF</text>
      </svg>
    ),
  },
  {
    name: 'simPRO',
    category: 'Job Management',
    color: '#0066CC',
    bg: '#E6F0FA',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#0066CC"/>
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PRO</text>
      </svg>
    ),
  },
  {
    name: 'Fergus',
    category: 'Job Management',
    color: '#00A85A',
    bg: '#E6F7EF',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#00A85A"/>
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">FG</text>
      </svg>
    ),
  },
  {
    name: 'Zapier',
    category: 'Automation',
    color: '#FF4A00',
    bg: '#FFF0EB',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#FF4A00"/>
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Z</text>
      </svg>
    ),
  },
]

export default function Integrations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-28 bg-gray-50/60 border-y border-navy/6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky text-sm font-semibold uppercase tracking-widest mb-4">
            Integrations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Connects with your existing software
          </h2>
          <p className="mt-4 text-lg text-navy/55 max-w-xl mx-auto">
            Quoflow plugs into the quoting, accounting, and job management tools your business already runs on.
          </p>
        </motion.div>

        {/* Integration cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-5 border border-navy/8 shadow-sm hover:shadow-md hover:border-sky/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3"
            >
              {/* Logo */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: integration.bg }}>
                {integration.logo}
              </div>
              <div>
                <div className="text-sm font-bold text-navy">{integration.name}</div>
                <div className="text-xs text-navy/40 mt-0.5">{integration.category}</div>
              </div>

              {/* Connected indicator on hover */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* More coming note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-24 bg-navy/10" />
          <p className="text-sm text-navy/40">
            More integrations coming soon · <a href="#contact" className="text-sky hover:underline">Request one</a>
          </p>
          <div className="h-px flex-1 max-w-24 bg-navy/10" />
        </motion.div>
      </div>
    </section>
  )
}
