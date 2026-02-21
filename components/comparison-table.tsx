'use client'

import { motion } from 'framer-motion'

const rows = [
  {
    feature: 'Modelo de preço',
    voxa: { icon: '✅', text: 'Fixo mensal' },
    assemblyai: { icon: '❌', text: 'Por hora de áudio' },
    openai: { icon: '❌', text: '$0.006/min' },
  },
  {
    feature: 'Setup mínimo',
    voxa: { icon: '✅', text: '1 endpoint' },
    assemblyai: { icon: '⚠️', text: 'SDK + configuração' },
    openai: { icon: '⚠️', text: 'Integração OpenAI' },
  },
  {
    feature: 'Trial grátis',
    voxa: { icon: '✅', text: '7 dias' },
    assemblyai: { icon: '✅', text: 'Horas grátis' },
    openai: { icon: '❌', text: 'Pago desde o início' },
  },
  {
    feature: 'Dashboard',
    voxa: { icon: '✅', text: 'Incluso' },
    assemblyai: { icon: '✅', text: 'Incluso' },
    openai: { icon: '❌', text: 'Não' },
  },
  {
    feature: 'Previsibilidade de custo',
    voxa: { icon: '✅', text: 'Total' },
    assemblyai: { icon: '❌', text: 'Varia com uso' },
    openai: { icon: '❌', text: 'Varia com uso' },
  },
]

export default function ComparisonTable() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-5xl mx-auto">
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
            Por que Voxa?
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text-muted)' }}>
            Comparação honesta com as principais alternativas do mercado.
          </p>
        </motion.div>

        {/* Table wrapper — scroll horizontal no mobile */}
        <motion.div
          className="overflow-x-auto rounded-2xl"
          style={{ border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)' }}>
                <th
                  className="text-left py-4 px-5 font-semibold"
                  style={{ color: 'var(--text-subtle)', width: '35%' }}
                >
                  Recurso
                </th>
                <th
                  className="py-4 px-5 font-bold text-center"
                  style={{ color: 'var(--accent-glow)' }}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ background: 'var(--accent-primary)' }}
                    />
                    Voxa
                  </div>
                </th>
                <th
                  className="py-4 px-5 font-medium text-center"
                  style={{ color: 'var(--text-muted)' }}
                >
                  AssemblyAI
                </th>
                <th
                  className="py-4 px-5 font-medium text-center"
                  style={{ color: 'var(--text-muted)' }}
                >
                  OpenAI Whisper
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    borderBottom:
                      i < rows.length - 1 ? '1px solid var(--border)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                  }}
                >
                  <td
                    className="py-4 px-5 font-medium"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="py-4 px-5 text-center"
                    style={{
                      background: 'rgba(124,58,237,0.04)',
                      borderLeft: '1px solid rgba(124,58,237,0.12)',
                      borderRight: '1px solid rgba(124,58,237,0.12)',
                    }}
                  >
                    <span className="text-base mr-1">{row.voxa.icon}</span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {row.voxa.text}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="text-base mr-1">{row.assemblyai.icon}</span>
                    <span
                      className="text-xs"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {row.assemblyai.text}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="text-base mr-1">{row.openai.icon}</span>
                    <span
                      className="text-xs"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {row.openai.text}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
