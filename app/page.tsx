import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseUsSection } from '@/components/why-choose-us-section'
import { CtaSection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
