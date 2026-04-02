import './globals.css'
export const metadata = {
  title: 'Quoflow — AI-Powered Quoting for Building Supply',
  description: 'AI reads your builders floor plans and creates quote requests automatically. Built for building supply businesses across NZ and AU.'
}
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
