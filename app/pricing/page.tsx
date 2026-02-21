import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import PricingCards from '@/components/pricing-cards'
import ComparisonTable from '@/components/comparison-table'
import FAQ from '@/components/faq'
import CTABanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Preços — Voxa API',
  description: 'Planos simples e transparentes para a Voxa API. Trial grátis de 7 dias. Basic R$49/mês. Pro R$149/mês.',
}

export default function PricingPage() {
  return (
    <main style={{ background: 'var(--bg-base)' }}>
      <Navbar />
      {/* Page header */}
      <section
        className="pt-32 pb-8 px-4 text-center"
        style={{ background: 'var(--bg-base)' }}
      >
        <h1
          className="text-4xl sm:text-5xl font-extrabold"
          style={{ color: 'var(--text-primary)' }}
        >
          Preços{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            simples e transparentes
          </span>
        </h1>
        <p
          className="mt-4 text-base sm:text-lg max-w-xl mx-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          Sem cobrança por minuto. Sem surpresas. Escolha o plano e sabe exatamente o que vai pagar.
        </p>
      </section>
      <PricingCards />
      <ComparisonTable />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
