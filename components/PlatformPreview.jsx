'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const callouts = [
  { x: '8%', y: '18%', title: 'AI Plan Analysis', desc: 'Upload any floor plan. AI detects components in seconds.', align: 'right' },
  { x: '72%', y: '15%', title: 'Instant Quoting', desc: 'Detections become quote line items automatically.', align: 'left' },
  { x: '5%', y: '68%', title: 'Client Portal', desc: 'Builders submit orders directly from your website.', align: 'right' },
  { x: '70%', y: '72%', title: 'Full Audit Trail', desc: 'Every order tracked from plan to approved quote.', align: 'left' },
]

export default function PlatformPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky text-sm font-semibold uppercase tracking-widest mb-4">Platform</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            One platform.<br />Every workflow.
          </h2>
          <p className="mt-4 text-lg text-navy/55 max-w-xl mx-auto">
            From floor plan upload to approved quote — Quoflow handles the entire process in a single, beautiful interface.
          </p>
        </motion.div>

        {/* Large platform screenshot mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Outer glow */}
          <div className="absolute -inset-6 bg-sky/8 rounded-[3rem] blur-3xl" />

          {/* Glass container */}
          <div className="relative backdrop-blur-xl bg-white/90 border border-white/60 shadow-2xl rounded-3xl overflow-hidden">
            {/* App chrome */}
            <div className="flex items-center gap-2 px-6 py-4 bg-zinc-50/80 border-b border-zinc-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
              </div>
              <div className="mx-3 flex-1 max-w-xs bg-white rounded-lg px-3 py-1.5 text-xs text-zinc-400 border border-zinc-200/60">
                app.quoflow.co.nz
              </div>
            </div>

            {/* Dashboard layout */}
            <div className="flex min-h-[420px]">
              {/* Sidebar */}
              <div className="w-52 bg-navy/[0.03] border-r border-zinc-100 p-4 flex flex-col gap-1">
                <div className="text-xs font-bold text-navy mb-3 px-3">Quoflow</div>
                {['Dashboard', 'Floor Plans', 'Quotes', 'Customers', 'AI Analysis', 'Settings'].map((item, i) => (
                  <div key={item} className={`text-xs px-3 py-2 rounded-xl font-medium transition-colors ${i === 2 ? 'bg-sky text-white' : 'text-navy/50 hover:text-navy hover:bg-navy/5'}`}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                <div className="text-sm font-bold text-navy mb-4">Quote Requests</div>
                <div className="space-y-2">
                  {[
                    { project: '42 Lambton Quay — New Build', client: 'Acme Construction', items: '13 components', status: 'Pending Review', color: 'amber' },
                    { project: '15 Marine Parade — Reno', client: 'Kapiti Homes', items: '8 components', status: 'Quoted', color: 'blue' },
                    { project: 'Greytown Lot 7', client: 'Wairarapa Builds', items: '16 components', status: 'Approved', color: 'emerald' },
                  ].map((row) => (
                    <div key={row.project} className="flex items-center gap-4 bg-white rounded-xl px-4 py-3 border border-zinc-100 shadow-sm">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-navy truncate">{row.project}</div>
                        <div className="text-[11px] text-navy/40">{row.client} · {row.items}</div>
                      </div>
                      <div className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                        row.color === 'amber' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        row.color === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>{row.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Callout annotations */}
          {callouts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
              className={`absolute hidden lg:flex items-start gap-2 ${c.align === 'right' ? 'flex-row-reverse text-right' : ''}`}
              style={{ left: c.x, top: c.y, maxWidth: '180px' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-navy">{c.title}</div>
                <div className="text-[11px] text-navy/50 mt-0.5">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
