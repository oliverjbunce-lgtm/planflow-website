import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Quoflow — AI Floor Plan Analysis & Trade Portal',
  description:
    'Quoflow uses AI to analyse building plans, detect door types, and streamline order management for NZ building supply businesses.',
  metadataBase: new URL('https://quoflow.co.nz'),
  openGraph: {
    title: 'Quoflow — AI Floor Plan Analysis & Trade Portal',
    description:
      'Quoflow uses AI to analyse building plans, detect door types, and streamline order management for NZ building supply businesses.',
    url: 'https://quoflow.co.nz',
    siteName: 'Quoflow',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quoflow — AI Floor Plan Analysis & Trade Portal',
    description:
      'Quoflow uses AI to analyse building plans, detect door types, and streamline order management for NZ building supply businesses.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  )
}
