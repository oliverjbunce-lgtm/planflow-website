import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import AISection from '@/components/AISection'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Integrations from '@/components/Integrations'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <AISection />
        <Features />
        <HowItWorks />
        <Integrations />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
