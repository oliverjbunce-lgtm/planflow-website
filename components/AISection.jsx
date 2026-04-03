'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

// Interleaved: doors and windows appear together as scan progresses
// Coordinates are % of the 4:3 container (= % of 100×75 SVG viewBox)
const ELEMENTS = [
  { x: 39, y: 22, w: 6,  h: 8,  label: 'Hinged Door',    conf: 97, color: '#0A84FF' },
  { x: 14, y: 1,  w: 10, h: 5,  label: 'Sliding Window', conf: 93, color: '#06b6d4' },
  { x: 59, y: 22, w: 6,  h: 8,  label: 'Cavity Slider',  conf: 94, color: '#16a34a' },
  { x: 46, y: 1,  w: 10, h: 5,  label: 'Awning Window',  conf: 96, color: '#f97316' },
  { x: 10, y: 33, w: 8,  h: 6,  label: 'Hinged Door',    conf: 98, color: '#0A84FF' },
  { x: 72, y: 1,  w: 10, h: 5,  label: 'Fixed Window',   conf: 94, color: '#ec4899' },
  { x: 32, y: 33, w: 8,  h: 6,  label: 'Cavity Slider',  conf: 95, color: '#16a34a' },
  { x: 94, y: 28, w: 4,  h: 12, label: 'Awning Window',  conf: 95, color: '#f97316' },
  { x: 12, y: 48, w: 8,  h: 6,  label: 'Hinged Door',    conf: 96, color: '#0A84FF' },
  { x: 1,  y: 12, w: 4,  h: 15, label: 'Sliding Window', conf: 97, color: '#06b6d4' },
  { x: 24, y: 42, w: 6,  h: 8,  label: 'Bifold',         conf: 91, color: '#9333ea' },
  { x: 1,  y: 48, w: 4,  h: 12, label: 'Awning Window',  conf: 92, color: '#f97316' },
  { x: 25, y: 93, w: 12, h: 5,  label: 'Sliding Window', conf: 96, color: '#06b6d4' },
]

export default function AISection() {
  const containerRef = useRef(null)
  const [count, setCount] = useState(0)
  const [complete, setComplete] = useState(false)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  const scanLineY = useTransform(scrollYProgress, [0.05, 0.78], ['1%', '96%'])
  const scanOpacity = useTransform(scrollYProgress, [0.03, 0.07, 0.78, 0.85], [0, 1, 1, 0])

  const det0  = useTransform(scrollYProgress, [0.08, 0.11], [0, 1])
  const det1  = useTransform(scrollYProgress, [0.14, 0.17], [0, 1])
  const det2  = useTransform(scrollYProgress, [0.20, 0.23], [0, 1])
  const det3  = useTransform(scrollYProgress, [0.26, 0.29], [0, 1])
  const det4  = useTransform(scrollYProgress, [0.32, 0.35], [0, 1])
  const det5  = useTransform(scrollYProgress, [0.38, 0.41], [0, 1])
  const det6  = useTransform(scrollYProgress, [0.44, 0.47], [0, 1])
  const det7  = useTransform(scrollYProgress, [0.50, 0.53], [0, 1])
  const det8  = useTransform(scrollYProgress, [0.56, 0.59], [0, 1])
  const det9  = useTransform(scrollYProgress, [0.62, 0.65], [0, 1])
  const det10 = useTransform(scrollYProgress, [0.68, 0.71], [0, 1])
  const det11 = useTransform(scrollYProgress, [0.74, 0.77], [0, 1])
  const det12 = useTransform(scrollYProgress, [0.78, 0.81], [0, 1])
  const detOpacities = [det0,det1,det2,det3,det4,det5,det6,det7,det8,det9,det10,det11,det12]

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setCount(Math.floor(Math.max(0, Math.min(13, (v - 0.06) / 0.056))))
    setComplete(v > 0.84)
  })

  const headingOpacity = useTransform(scrollYProgress, [0, 0.04], [0, 1])
  const headingY       = useTransform(scrollYProgress, [0, 0.04], [20, 0])

  // Breakdown counts (by interleaved position)
  const hinged  = [1, 5, 9].filter(n => count >= n).length
  const sliders = [3, 7].filter(n => count >= n).length
  const bifold  = [11].filter(n => count >= n).length
  const slidingW = [2, 10, 13].filter(n => count >= n).length
  const awningW  = [4, 8, 12].filter(n => count >= n).length
  const fixedW   = [6].filter(n => count >= n).length

  return (
    <div ref={containerRef} style={{ height: '400vh' }} id="how-it-works">
      <div
        style={{ position: 'sticky', top: '64px', height: 'calc(100vh - 64px)', overflow: 'hidden' }}
        className="bg-white flex flex-col items-center justify-center px-6 pt-4 pb-4"
      >
        <motion.div style={{ opacity: headingOpacity, y: headingY }} className="text-center mb-8">
          <p className="text-[#0A84FF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">AI Floor Plan Analysis</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#0a0a0a]">
            Upload a plan. <span className="text-gray-300">Watch AI do the rest.</span>
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl grid lg:grid-cols-5 gap-8 items-start">
          {/* Floor plan */}
          <div
            className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-[#f8fafc]"
            style={{ aspectRatio: '4/3' }}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />

            {/* Floor plan SVG — viewBox matches 4:3 container exactly */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 75"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Outer walls */}
              <rect x="3" y="3" width="94" height="69" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1"/>
              {/* Horizontal mid divider */}
              <line x1="3"  y1="36" x2="62" y2="36" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7"/>
              {/* Vertical Living/Dining */}
              <line x1="42" y1="3"  x2="42" y2="36" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7"/>
              {/* Vertical right column */}
              <line x1="62" y1="3"  x2="62" y2="54" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7"/>
              {/* Horizontal lower-right */}
              <line x1="62" y1="54" x2="97" y2="54" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7"/>
              {/* Horizontal lower-left */}
              <line x1="3"  y1="51" x2="42" y2="51" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7"/>
              {/* Vertical inner lower */}
              <line x1="27" y1="36" x2="27" y2="72" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7"/>

              {/* Room labels */}
              {[
                { x: 22, y: 21, t: 'Living'  },
                { x: 51, y: 21, t: 'Dining'  },
                { x: 77, y: 21, t: 'Kitchen' },
                { x: 14, y: 44, t: 'Bath'    },
                { x: 34, y: 44, t: 'Study'   },
                { x: 78, y: 45, t: 'Bed 1'   },
                { x: 14, y: 62, t: 'Bed 2'   },
                { x: 34, y: 62, t: 'Bed 3'   },
                { x: 78, y: 62, t: 'Garage'  },
              ].map(r => (
                <text key={r.t} x={r.x} y={r.y} fill="rgba(0,0,0,0.12)" fontSize="3.2" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500">{r.t}</text>
              ))}
            </svg>

            {/* Scan line */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none"
              style={{
                top: scanLineY,
                opacity: scanOpacity,
                background: 'linear-gradient(90deg, transparent, #0A84FF, #0A84FF60, transparent)',
                boxShadow: '0 0 16px #0A84FF60',
              }}
            />

            {/* Detection boxes */}
            {ELEMENTS.map((el, i) => (
              <motion.div
                key={el.label + i}
                className="absolute"
                style={{
                  left: `${el.x}%`,
                  top: `${el.y}%`,
                  width: `${el.w}%`,
                  height: `${el.h}%`,
                  opacity: detOpacities[i],
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    border: `1.5px solid ${el.color}`,
                    boxShadow: `0 0 8px ${el.color}30`,
                    borderRadius: '2px',
                  }}
                >
                  <div className="absolute whitespace-nowrap" style={{ top: '-17px', left: 0 }}>
                    <span className="text-white text-[7px] font-bold px-1.5 py-0.5 rounded-sm" style={{ backgroundColor: el.color }}>
                      {el.label}
                    </span>
                    <span className="text-[7px] font-semibold ml-0.5" style={{ color: el.color }}>{el.conf}%</span>
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
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-3 left-3 right-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3 3 7-7" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-green-700 text-xs font-semibold">Analysis complete</span>
                </div>
                <span className="text-green-600 text-[10px] font-medium">13 components · 4.8s</span>
              </motion.div>
            )}
          </div>

          {/* Breakdown panel */}
          <div className="lg:col-span-2 space-y-2">
            <div className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Detection breakdown</div>
            {[
              { label: 'Hinged Doors',    color: '#0A84FF', counted: hinged   },
              { label: 'Cavity Sliders',  color: '#16a34a', counted: sliders  },
              { label: 'Bifold Door',     color: '#9333ea', counted: bifold   },
              { label: 'Sliding Windows', color: '#06b6d4', counted: slidingW },
              { label: 'Awning Windows',  color: '#f97316', counted: awningW  },
              { label: 'Fixed Window',    color: '#ec4899', counted: fixedW   },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
                <span className="text-lg font-bold text-[#0a0a0a] tabular-nums">×{item.counted}</span>
              </div>
            ))}
            <div className="bg-white border border-gray-100 rounded-xl px-4 py-4 shadow-sm mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Total components</span>
                <span className="text-2xl font-black text-[#0a0a0a] tabular-nums">{count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Analysis time</span>
                <span className="text-sm font-bold text-green-600">{complete ? '4.8s' : '—'}</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mt-2">Scroll to watch AI analyse a NZ floor plan in real time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
