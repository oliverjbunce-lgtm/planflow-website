'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const DETECTIONS = [
  { x: 17, y: 10, w: 6, h: 6, label: 'Hinged Door',    conf: 97, color: '#0A84FF' },
  { x: 41, y: 10, w: 6, h: 6, label: 'Cavity Slider',  conf: 94, color: '#16a34a' },
  { x: 67, y: 10, w: 6, h: 6, label: 'Hinged Door',    conf: 98, color: '#0A84FF' },
  { x: 13, y: 36, w: 6, h: 6, label: 'Bifold',         conf: 91, color: '#9333ea' },
  { x: 51, y: 36, w: 6, h: 6, label: 'Cavity Slider',  conf: 96, color: '#16a34a' },
  { x: 73, y: 36, w: 6, h: 6, label: 'Hinged Door',    conf: 99, color: '#0A84FF' },
  { x: 21, y: 60, w: 6, h: 6, label: 'French Door',    conf: 93, color: '#d97706' },
  { x: 47, y: 60, w: 6, h: 6, label: 'Hinged Door',    conf: 97, color: '#0A84FF' },
  { x: 69, y: 60, w: 6, h: 6, label: 'Cavity Slider',  conf: 95, color: '#16a34a' },
  { x:  9, y: 78, w: 6, h: 6, label: 'Hinged Door',    conf: 98, color: '#0A84FF' },
  { x: 37, y: 78, w: 6, h: 6, label: 'Bifold',         conf: 89, color: '#9333ea' },
  { x: 61, y: 78, w: 6, h: 6, label: 'Exterior Door',  conf: 96, color: '#dc2626' },
]

export default function AISection() {
  const containerRef = useRef(null)
  const [count, setCount] = useState(0)
  const [complete, setComplete] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const scanLineY   = useTransform(scrollYProgress, [0.05, 0.78], ['5%', '95%'])
  const scanOpacity = useTransform(scrollYProgress, [0.03, 0.07, 0.78, 0.85], [0, 1, 1, 0])

  // 12 individual hook calls — no hooks in loops
  const det0  = useTransform(scrollYProgress, [0.080, 0.110], [0, 1])
  const det1  = useTransform(scrollYProgress, [0.138, 0.168], [0, 1])
  const det2  = useTransform(scrollYProgress, [0.196, 0.226], [0, 1])
  const det3  = useTransform(scrollYProgress, [0.254, 0.284], [0, 1])
  const det4  = useTransform(scrollYProgress, [0.312, 0.342], [0, 1])
  const det5  = useTransform(scrollYProgress, [0.370, 0.400], [0, 1])
  const det6  = useTransform(scrollYProgress, [0.428, 0.458], [0, 1])
  const det7  = useTransform(scrollYProgress, [0.486, 0.516], [0, 1])
  const det8  = useTransform(scrollYProgress, [0.544, 0.574], [0, 1])
  const det9  = useTransform(scrollYProgress, [0.602, 0.632], [0, 1])
  const det10 = useTransform(scrollYProgress, [0.660, 0.690], [0, 1])
  const det11 = useTransform(scrollYProgress, [0.718, 0.748], [0, 1])
  const detOpacities = [det0, det1, det2, det3, det4, det5, det6, det7, det8, det9, det10, det11]

  const headingOpacity = useTransform(scrollYProgress, [0, 0.04], [0, 1])
  const headingY       = useTransform(scrollYProgress, [0, 0.04], [20, 0])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const n = Math.floor(Math.max(0, Math.min(12, (v - 0.06) / 0.062)))
    setCount(n)
    setComplete(v > 0.82)
  })

  return (
    <div ref={containerRef} style={{ height: '400vh' }} id="ai-section">
      <div style={{ position: 'sticky', top: '64px', height: 'calc(100vh - 64px)', overflow: 'hidden' }}
           className="bg-white flex flex-col items-center justify-center px-6 pt-4 pb-4">

        {/* Heading */}
        <motion.div style={{ opacity: headingOpacity, y: headingY }} className="text-center mb-10">
          <p className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">AI Floor Plan Analysis</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#0a0a0a]">
            Upload a plan. <span className="text-gray-300">Watch AI do the rest.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="w-full max-w-5xl grid lg:grid-cols-5 gap-8 items-start">

          {/* Floor plan — 3 cols */}
          <div className="lg:col-span-3 relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
               style={{ background: '#f8fafc' }}>
            {/* Grid bg */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />

            {/* SVG floor plan */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <rect x="5" y="5" width="90" height="90" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8"/>
              <line x1="5"  y1="50" x2="60" y2="50" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
              <line x1="40" y1="5"  x2="40" y2="50" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
              <line x1="60" y1="5"  x2="60" y2="75" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
              <line x1="60" y1="75" x2="95" y2="75" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
              <line x1="5"  y1="70" x2="40" y2="70" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
              <line x1="25" y1="50" x2="25" y2="95" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
              {[
                {x:22,y:30,t:'Living'},{x:50,y:28,t:'Dining'},{x:77,y:28,t:'Kitchen'},
                {x:15,y:60,t:'Bath'},{x:43,y:60,t:'Bed 1'},{x:77,y:62,t:'Bed 2'},
                {x:15,y:82,t:'Bed 3'},{x:45,y:82,t:'Garage'}
              ].map(r => (
                <text key={r.t} x={r.x} y={r.y} fill="rgba(0,0,0,0.15)" fontSize="3.5" textAnchor="middle" fontFamily="Inter">{r.t}</text>
              ))}
            </svg>

            {/* Scan line */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none"
              style={{
                top: scanLineY,
                opacity: scanOpacity,
                background: 'linear-gradient(90deg, transparent, #0A84FF, #0A84FF80, transparent)',
                boxShadow: '0 0 12px #0A84FF80'
              }}
            />

            {/* Detection boxes */}
            {DETECTIONS.map((d, i) => (
              <motion.div
                key={d.label + i}
                className="absolute"
                style={{
                  left: `${d.x}%`, top: `${d.y}%`,
                  width: `${d.w}%`, height: `${d.h}%`,
                  opacity: detOpacities[i]
                }}
              >
                <div className="w-full h-full rounded-sm" style={{ border: `1.5px solid ${d.color}`, boxShadow: `0 0 6px ${d.color}40` }}>
                  <div className="absolute -top-[18px] left-0 flex items-center gap-1 whitespace-nowrap">
                    <span className="text-white text-[7px] font-bold px-1.5 py-0.5 rounded-sm" style={{ backgroundColor: d.color }}>{d.label}</span>
                    <span className="text-[7px] font-semibold" style={{ color: d.color }}>{d.conf}%</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Counter badge */}
            <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 text-right">
              <div className="text-2xl font-black text-[#0a0a0a] tabular-nums">{count}</div>
              <div className="text-[9px] text-gray-400 uppercase tracking-wider">detected</div>
            </div>

            {/* Complete banner */}
            {complete && (
              <motion.div
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-3 left-3 right-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3 3 7-7" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-green-700 text-xs font-semibold">Analysis complete</span>
                </div>
                <span className="text-green-600 text-[10px] font-medium">12 components · 4.8s</span>
              </motion.div>
            )}
          </div>

          {/* Breakdown — 2 cols */}
          <div className="lg:col-span-2 space-y-2">
            <div className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase mb-5">Detection breakdown</div>
            {[
              { count: count >= 3  ? 8 : Math.max(0, count),     label: 'Hinged Doors',   color: '#0A84FF' },
              { count: count >= 6  ? 3 : Math.max(0, count - 3), label: 'Cavity Sliders', color: '#16a34a' },
              { count: count >= 9  ? 2 : Math.max(0, count - 6), label: 'Bifold Doors',   color: '#9333ea' },
              { count: count >= 10 ? 1 : 0,                       label: 'French Door',    color: '#d97706' },
              { count: count >= 12 ? 1 : 0,                       label: 'Exterior Door',  color: '#dc2626' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
                <span className="text-lg font-bold text-[#0a0a0a] tabular-nums">×{item.count}</span>
              </div>
            ))}
            <div className="mt-4 bg-white border border-gray-100 rounded-xl px-4 py-4 shadow-sm">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Total</span>
                <span className="text-2xl font-black text-[#0a0a0a] tabular-nums">{count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Analysis time</span>
                <span className="text-sm font-bold text-green-600">{complete ? '4.8s' : '—'}</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mt-3">
              Scroll to watch the AI analyse a real NZ floor plan. Detections convert automatically into a quote request.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
