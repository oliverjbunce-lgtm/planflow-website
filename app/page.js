import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import PlatformPreview from '@/components/PlatformPreview'
import Features from '@/components/Features'
import Integrations from '@/components/Integrations'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlatformPreview />
        <Features />
        <Integrations />
        <HowItWorks />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
