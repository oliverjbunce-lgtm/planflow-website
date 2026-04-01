import './globals.css'

export const metadata = {
  title: 'Planflo — AI Floor Plan Analysis & Trade Portal',
  description:
    'Planflo uses AI to analyse building plans, detect door types, and streamline order management for NZ building supply businesses.',
  metadataBase: new URL('https://planflo.ai'),
  openGraph: {
    title: 'Planflo — AI Floor Plan Analysis & Trade Portal',
    description:
      'Planflo uses AI to analyse building plans, detect door types, and streamline order management for NZ building supply businesses.',
    url: 'https://planflo.ai',
    siteName: 'Planflo',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planflo — AI Floor Plan Analysis & Trade Portal',
    description:
      'Planflo uses AI to analyse building plans, detect door types, and streamline order management for NZ building supply businesses.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
