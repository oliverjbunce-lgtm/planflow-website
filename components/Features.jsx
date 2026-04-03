'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    title: 'AI Plan Analysis',
    desc: 'Upload any PDF floor plan. Our AI identifies every door type, window, and fitting in seconds.'
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: 'Instant Quote Requests',
    desc: 'Detections convert automatically into structured quote requests with your product catalogue.'
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Builder Portal',
    desc: 'A branded portal for your builders to submit plans and track their quotes from any device.'
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    title: 'Admin Dashboard',
    desc: 'Review, approve, and manage every quote in one place. Full audit trail on every job.'
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: 'System Integrations',
    desc: 'Connects to Xero, MYOB, simPRO, Fergus, and more. Fits into your existing workflow.'
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Multi-Location',
    desc: 'Support multiple branches or locations. Route orders and notifications to the right team.'
  },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section ref={ref} className="py-32 px-6 bg-white" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Features</motion.p>
          <motion.h2 initial={{ opacity:0, filter:'blur(8px)' }} animate={inView?{opacity:1,filter:'blur(0px)'}:{}} transition={{ duration:0.7, delay:0.1 }} className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#0a0a0a]">
            Everything your<br />business needs.
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity:0, x:i%2===0?-30:30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.6, delay:i*0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}