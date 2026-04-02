'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    n: '01',
    title: 'Upload a floor plan PDF',
    desc: 'Drag and drop any residential or commercial floor plan. PDF, PNG, or DWG formats supported.',
    color: 'from-sky/20 to-blue-100/40',
  },
  {
    n: '02',
    title: 'AI detects all door types instantly',
    desc: 'Our model scans every room and identifies building components — doors, windows, frames, and more.',
    color: 'from-violet-100/40 to-sky/20',
  },
  {
    n: '03',
    title: 'Review and confirm detections',
    desc: 'Step through each detection visually. Correct or confirm with a single click. Full control stays with you.',
    color: 'from-sky/20 to-emerald-100/40',
  },
  {
    n: '04',
    title: 'Order automatically created in your portal',
    desc: 'Confirmed detections become a structured order — quantities, types, and rooms all organised.',
    color: 'from-emerald-100/30 to-sky/20',
  },
  {
    n: '05',
    title: 'Admin reviews, quotes, and approves',
    desc: 'Your team reviews the order, sets pricing, and sends the quote. Every step is tracked and auditable.',
    color: 'from-sky/20 to-blue-100/30',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="how-it-works" ref={ref} className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky text-sm font-semibold uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            From floor plan to approved quote in minutes
          </h2>
          <p className="mt-4 text-lg text-navy/55 max-w-xl mx-auto">
            A streamlined five-step workflow that eliminates manual errors and speeds up every order.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-sky/30 via-sky/20 to-transparent -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: isEven ? -32 : 32 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative lg:flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'} lg:mb-12`}
                >
                  <div className={`lg:w-5/12 bg-white rounded-2xl p-7 border border-navy/8 shadow-sm hover:shadow-md transition-all duration-300 ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="flex items-start gap-5">
                      {/* Step number */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <span className="text-sky font-bold text-lg">{step.n}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                        <p className="text-navy/55 leading-relaxed text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky border-4 border-white shadow-sm" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
