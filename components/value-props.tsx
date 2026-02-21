'use client'

import { motion } from 'framer-motion'

const props = [
  {
    icon: '💰',
    title: 'Preço fixo mensal',
    description:
      'R$49/mês e pronto. Sem cobrar por minuto de áudio, sem surpresa na fatura. Sabe exatamente quanto vai pagar todo mês.',
  },
  {
    icon: '⚡',
    title: 'Zero infraestrutura',
    description:
      'Sem IAM, S3, ou configs de cloud. Um único endpoint REST. Nenhuma dependência externa pra configurar.',
  },
  {
    icon: '🚀',
    title: 'Em produção em 5 minutos',
    description:
      'Trial grátis começa automaticamente. Registre, gere uma API key no dashboard, faça um curl — é isso.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
              style={{ border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ borderColor: 'var(--border-accent)', transition: { duration: 0.2 } }}
            >
              <div
                className="text-3xl w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(124,58,237,0.1)' }}
              >
                {prop.icon}
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
