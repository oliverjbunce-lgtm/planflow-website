'use client'

export default function Footer() {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-navy border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-sky flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                  <rect x="10" y="2" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" strokeDasharray="2 1.5"/>
                  <rect x="2" y="10" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" strokeDasharray="2 1.5"/>
                  <path d="M10 13h6M13 10v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Quoflow</span>
            </a>
            <p className="text-white/40 text-sm">AI-powered portals for the trades industry</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/30">
          <span>© 2026 Quoflow. Built in New Zealand.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
