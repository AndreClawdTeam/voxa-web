'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Crie sua conta',
    description: 'Registre gratuitamente. O trial de 7 dias começa automaticamente — sem cartão de crédito.',
    icon: '👤',
  },
  {
    number: '02',
    title: 'Gere uma API Key',
    description: 'Acesse o dashboard, crie uma chave em segundos. Nome, revogue quando quiser.',
    icon: '🔑',
  },
  {
    number: '03',
    title: 'Comece a transcrever',
    description: 'Um curl para o endpoint, o arquivo de áudio no body — resposta JSON na mão.',
    icon: '🎯',
  },
]

export default function HowItWorks() {
  return (
    <section
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
            Como funciona
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text-muted)' }}>
            Três passos. Menos de 5 minutos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
            style={{ background: 'var(--border-accent)', top: '2.5rem' }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Icon circle */}
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-5 z-10"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '2px solid var(--border-accent)',
                  boxShadow: '0 0 30px rgba(124,58,237,0.2)',
                }}
              >
                {step.icon}
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{
                    background: 'var(--accent-primary)',
                    color: '#fff',
                    fontSize: '10px',
                  }}
                >
                  {i + 1}
                </span>
              </div>

              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
