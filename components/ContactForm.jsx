'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ContactForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))
  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const r = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    setStatus(r.ok ? 'done' : 'error')
  }
  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/10 transition-all bg-white"
  return (
    <section ref={ref} className="py-32 px-6 bg-[#f5f5f7]" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h2 className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-4">Ready to see it live?</h2>
          <p className="text-gray-500">Tell us about your business. We’ll get back to you within 24 hours.</p>
        </div>
        {status === 'done' ? (
          <div className="bg-white border border-green-200 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-3xl mb-3">✓</div>
            <div className="font-bold text-[#0a0a0a] text-lg mb-1">Message received</div>
            <div className="text-gray-500 text-sm">We’ll be in touch within 24 hours.</div>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Name *</label>
                <input required value={form.name} onChange={set('name')} placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Company</label>
                <input value={form.company} onChange={set('company')} placeholder="Your business" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Phone</label>
                <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+64 21 000 000" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message</label>
              <textarea value={form.message} onChange={set('message')} placeholder="Tell us about your business..." rows={4} className={inputClass + ' resize-none'} />
            </div>
            <button type="submit" disabled={status === 'loading'} className="w-full bg-[#0A84FF] text-white font-bold py-4 rounded-xl hover:bg-[#0066CC] transition-all disabled:opacity-60 text-sm">
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
            {status === 'error' && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>}
          </form>
        )}
      </motion.div>
    </section>
  )
}
