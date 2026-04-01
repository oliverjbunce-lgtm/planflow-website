'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/mo',
    desc: 'Perfect for single-branch merchants getting started with AI-powered workflows.',
    features: [
      '1 branch',
      'Up to 50 orders/month',
      'AI floor plan analysis',
      'Trade customer portal',
      'Email support',
      'Standard reporting',
    ],
    cta: 'Book a Demo',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$999',
    period: '/mo',
    desc: 'For growing businesses with multiple branches and higher order volumes.',
    features: [
      '3 branches',
      'Unlimited orders',
      'AI floor plan analysis',
      'Trade customer portal',
      'Quoting workflow',
      'Priority support',
      'Advanced analytics',
    ],
    cta: 'Book a Demo',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large operations needing multi-site control, deep integrations, and white-labelling.',
    features: [
      'Multiple locations',
      'Unlimited everything',
      'API access',
      'Xero & Infusion integration',
      'White-label portal',
      'Custom onboarding',
      'Dedicated account manager',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
]

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M3 8l3 3 7-7" stroke="#007AFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-navy/55 max-w-xl mx-auto">
            No hidden fees. No setup costs. Just a plan that works for your operation.
          </p>
        </motion.div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-sky border-sky shadow-xl shadow-sky/20 text-white scale-105'
                  : 'bg-white border-navy/10 shadow-sm hover:shadow-md hover:border-sky/25'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-4xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-base mb-1.5 ${plan.highlight ? 'text-white/70' : 'text-navy/40'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-navy/55'}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-white/90' : 'text-navy/70'}`}>
                    {plan.highlight ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                        <path d="M3 8l3 3 7-7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all ${
                  plan.highlight
                    ? 'bg-white text-sky hover:bg-gray-50'
                    : 'bg-sky text-white hover:bg-sky-dark shadow-sm'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-navy/35 mt-8"
        >
          All prices in NZD. Annual plans available at 20% discount. Cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
