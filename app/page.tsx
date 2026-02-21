import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import ValueProps from '@/components/value-props'
import HowItWorks from '@/components/how-it-works'
import FeaturesGrid from '@/components/features-grid'
import PricingCards from '@/components/pricing-cards'
import ComparisonTable from '@/components/comparison-table'
import FAQ from '@/components/faq'
import CTABanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-base)' }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProps />
      <HowItWorks />
      <FeaturesGrid />
      <PricingCards />
      <ComparisonTable />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
