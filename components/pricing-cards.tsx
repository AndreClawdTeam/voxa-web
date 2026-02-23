'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Trial',
    price: 'Grátis',
    period: '7 dias',
    highlight: false,
    badge: null,
    features: [
      '20 req/min',
      'Todos os formatos (MP3, WAV, OGG...)',
      'Dashboard incluído',
      'Até 10 API keys',
      'Otimizado para Português',
    ],
    cta: 'Começar grátis →',
    ctaHref: 'https://voxa-dashboard.vercel.app/login',
  },
  {
    name: 'Basic',
    price: 'R$49',
    period: '/mês',
    highlight: true,
    badge: 'Mais popular',
    features: [
      '60 req/min',
      'Todos os formatos (MP3, WAV, OGG...)',
      'Dashboard incluído',
      'Até 10 API keys',
      'Otimizado para Português',
      'Histórico completo',
    ],
    cta: 'Assinar Basic →',
    ctaHref: 'https://voxa-dashboard.vercel.app/login',
  },
  {
    name: 'Pro',
    price: 'R$149',
    period: '/mês',
    highlight: false,
    badge: null,
    features: [
      '300 req/min',
      'Todos os formatos (MP3, WAV, OGG...)',
      'Dashboard incluído',
      'Até 10 API keys',
      'Otimizado para Português',
      'Histórico completo',
      'Suporte prioritário',
    ],
    cta: 'Assinar Pro →',
    ctaHref: 'https://voxa-dashboard.vercel.app/login',
  },
]

export default function PricingCards() {
  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Preço simples.{' '}
            <span className="text-gradient">Sem surpresas.</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text-muted)' }}>
            Escolha seu plano. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: tier.highlight ? 'rgba(14,16,24,0.95)' : 'var(--bg-elevated)',
                border: tier.highlight
                  ? '2px solid var(--accent-primary)'
                  : '1px solid var(--border)',
                boxShadow: tier.highlight
                  ? '0 0 40px rgba(124,58,237,0.25)'
                  : 'none',
                position: 'relative',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: 'var(--accent-primary)',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ⭐ {tier.badge}
                </div>
              )}

              {/* Name + Price */}
              <div className="mb-6">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: tier.highlight ? 'var(--accent-glow)' : 'var(--text-subtle)' }}
                >
                  {tier.name}
                </span>
                <div className="flex items-end gap-1 mt-2">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-sm pb-1"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {tier.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--accent-bright)' }}
                    />
                    <span style={{ color: 'var(--text-muted)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href={tier.ctaHref}
                className="block w-full py-3 rounded-xl text-sm font-semibold text-center"
                style={{
                  background: tier.highlight ? 'var(--accent-primary)' : 'transparent',
                  color: tier.highlight ? '#fff' : 'var(--accent-glow)',
                  border: tier.highlight ? 'none' : '1px solid var(--border-accent)',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: tier.highlight ? '0 0 25px rgba(124,58,237,0.5)' : undefined,
                }}
                whileTap={{ scale: 0.97 }}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="prose-note mt-8">
          * Preço fixo mensal. Sem cobrança por minuto. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  )
}
