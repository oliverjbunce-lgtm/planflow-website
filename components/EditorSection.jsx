'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const INITIAL_ITEMS = [
  { id: 1, type: 'Hinged Door',    qty: 3, conf: 97, color: '#0A84FF', unitPrice: 285 },
  { id: 2, type: 'Cavity Slider',  qty: 2, conf: 94, color: '#16a34a', unitPrice: 420 },
  { id: 3, type: 'Bifold Door',    qty: 1, conf: 91, color: '#9333ea', unitPrice: 680 },
  { id: 4, type: 'Sliding Window', qty: 3, conf: 96, color: '#06b6d4', unitPrice: 310 },
  { id: 5, type: 'Awning Window',  qty: 3, conf: 93, color: '#f97316', unitPrice: 290 },
  { id: 6, type: 'Fixed Window',   qty: 1, conf: 94, color: '#ec4899', unitPrice: 195 },
]

export default function EditorSection() {
  const [activeTab, setActiveTab] = useState('detections')
  const [items, setItems] = useState(INITIAL_ITEMS)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const updateQty = (id, delta) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    ))
  }

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0)
  const gst = subtotal * 0.15
  const total = subtotal + gst

  const fmt = (n) => `$${n.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

  return (
    <section ref={ref} className="py-32 px-6 bg-[#f8fafc]" id="editor">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Quote Editor
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-4"
          >
            Review, edit, and<br />quote in one place.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="text-gray-400 text-lg max-w-lg mx-auto"
          >
            AI does the counting. You stay in control.
          </motion.p>
        </div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden"
        >
          {/* Browser chrome */}
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-4">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-xs text-gray-400 w-full max-w-xs text-center">
                portal.quoflow.co.nz/quotes/QR-2847
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="border-b border-gray-100 px-8 py-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-bold text-[#0a0a0a]">Quote Request #QR-2847</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">Pending Review</span>
              </div>
              <p className="text-xs text-gray-400">Acme Construction Ltd · Uploaded 4 Apr 2026, 9:14am · 13 components detected</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-green-600 font-semibold bg-green-50 border border-green-200 rounded-xl px-3 py-2">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              AI confidence 95.1%
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-100 px-8">
            <div className="flex gap-0">
              {['detections', 'quote', 'history'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-all capitalize ${
                    activeTab === tab
                      ? 'border-[#0A84FF] text-[#0A84FF]'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 min-h-[420px]">
            {/* Left panel */}
            <div className="lg:col-span-3 p-8 border-r border-gray-100">
              {activeTab === 'detections' && (
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-sm font-bold text-[#0a0a0a]">Detected Components</h3>
                    <span className="text-xs text-gray-400">Edit quantities if needed</span>
                  </div>
                  <div className="space-y-2.5">
                    {items.map(item => (
                      <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                          <div>
                            <div className="text-sm font-semibold text-[#0a0a0a]">{item.type}</div>
                            <div className="text-xs text-gray-400">{item.conf}% confidence · {fmt(item.unitPrice)} ea</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-1 py-1">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-[#0a0a0a] transition-colors text-base leading-none rounded"
                            >−</button>
                            <span className="text-sm font-bold text-[#0a0a0a] tabular-nums w-6 text-center">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-[#0a0a0a] transition-colors text-base leading-none rounded"
                            >+</button>
                          </div>
                          <span className="text-sm font-bold text-[#0a0a0a] tabular-nums w-20 text-right">{fmt(item.qty * item.unitPrice)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-400">{items.reduce((s, i) => s + i.qty, 0)} components · excl. GST</span>
                    <span className="text-lg font-black text-[#0a0a0a]">{fmt(subtotal)}</span>
                  </div>
                </div>
              )}
              {activeTab === 'quote' && (
                <div className="text-center py-12 text-gray-300">
                  <svg className="mx-auto mb-3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <p className="text-sm">Quote preview visible on right</p>
                </div>
              )}
              {activeTab === 'history' && (
                <div className="space-y-3">
                  {[
                    { action: 'Quote request received', time: '9:14am', by: 'Acme Construction Ltd' },
                    { action: 'AI analysis complete', time: '9:14am', by: 'Quoflow AI · 4.8s' },
                    { action: 'Assigned for review', time: '9:15am', by: 'System' },
                  ].map((h, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0A84FF] mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#0a0a0a]">{h.action}</p>
                        <p className="text-xs text-gray-400">{h.time} · {h.by}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right panel — Quote preview */}
            <div className="lg:col-span-2 p-8 bg-gray-50/50">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-[#0a0a0a]">Quote Preview</h3>
                <span className="text-xs text-gray-400">Auto-generated</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                <div className="pb-4 border-b border-gray-100">
                  <div className="text-xs font-bold text-[#0a0a0a] mb-1">QUOTE #Q-2847</div>
                  <div className="text-xs text-gray-400">Independent Doors Ltd</div>
                  <div className="text-xs text-gray-400">4 April 2026</div>
                </div>
                <div className="space-y-2">
                  {items.filter(i => i.qty > 0).map(item => (
                    <div key={item.id} className="flex justify-between text-xs">
                      <span className="text-gray-600">{item.qty}× {item.type}</span>
                      <span className="font-semibold text-[#0a0a0a]">{fmt(item.qty * item.unitPrice)}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-[#0a0a0a]">{fmt(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">GST (15%)</span>
                    <span className="text-[#0a0a0a]">{fmt(gst)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black pt-1 border-t border-gray-100">
                    <span>Total (NZD)</span>
                    <span className="text-[#0A84FF]">{fmt(total)}</span>
                  </div>
                </div>
                <button className="w-full bg-[#0A84FF] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#0066CC] transition-all hover:-translate-y-0.5 mt-2">
                  Approve &amp; Send Quote
                </button>
                <button className="w-full bg-white border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-all">
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
