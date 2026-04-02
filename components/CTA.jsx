'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky/8 via-white to-blue-50/50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-sky/10 text-sky text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
            Ready when you are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
            Book a demo
          </h2>
          <p className="mt-4 text-lg text-navy/55 leading-relaxed">
            See Quoflow running with your own floor plans. No commitment — just a live look at what AI can do for your business.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-navy/8 shadow-sm p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-xl border border-navy/12 text-navy placeholder-navy/30 text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="jane@company.co.nz"
                className="w-full px-4 py-3 rounded-xl border border-navy/12 text-navy placeholder-navy/30 text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Building Supplies"
              className="w-full px-4 py-3 rounded-xl border border-navy/12 text-navy placeholder-navy/30 text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your business and what you're looking to solve..."
              className="w-full px-4 py-3 rounded-xl border border-navy/12 text-navy placeholder-navy/30 text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition-all resize-none"
            />
          </div>

          {status === 'success' ? (
            <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium px-5 py-4 rounded-xl">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Thanks! We'll be in touch shortly.
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-sky text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-sky-dark transition-all shadow-lg shadow-sky/25 hover:shadow-sky/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'loading' ? 'Sending…' : 'Book a Demo'}
              {status !== 'loading' && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-500 text-center">Something went wrong. Please email us at hello@quoflow.co.nz</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
