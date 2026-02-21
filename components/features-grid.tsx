'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🎯',
    title: 'Alta precisão',
    description: 'Motor faster-whisper — a versão otimizada do Whisper da OpenAI. Qualidade de transcrição de nível enterprise.',
    size: 'large',
  },
  {
    icon: '📁',
    title: '6 formatos suportados',
    description: 'MP3, WAV, OGG, MP4/M4A, FLAC, WEBM. Até 25MB por arquivo por request.',
    size: 'normal',
  },
  {
    icon: '🌍',
    title: 'Multilíngue',
    description: 'Detecção automática de idioma. PT, EN, ES, FR, DE, IT e muito mais.',
    size: 'normal',
  },
  {
    icon: '📊',
    title: 'Dashboard incluso',
    description: 'Histórico de transcrições, monitoramento de uso mensal e gerenciamento de perfil em um só lugar.',
    size: 'large',
  },
  {
    icon: '🔑',
    title: 'Múltiplas API Keys',
    description: 'Crie, nomeie e revogue chaves individualmente. Perfeito para múltiplos projetos ou ambientes.',
    size: 'normal',
  },
  {
    icon: '🛡️',
    title: 'Seguro por padrão',
    description: 'JWT + HTTPS + rate limiting por tier. Sua infraestrutura protegida sem config extra.',
    size: 'normal',
  },
  {
    icon: '📖',
    title: 'Swagger interativo',
    description: 'Documentação interativa inclusa. Teste a API direto no browser, sem sair da doc.',
    size: 'normal',
  },
  {
    icon: '⚡',
    title: 'Rate limits transparentes',
    description: 'Trial: 20 req/min. Basic: 60 req/min. Pro: 300 req/min. Sem surpresas.',
    size: 'normal',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-base)' }}>
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
            Tudo que você precisa,{' '}
            <span className="text-gradient">nada que você não precisa</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text-muted)' }}>
            Um conjunto focado de features para developers que querem ir rápido.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`glass rounded-2xl p-6 flex flex-col gap-3 ${
                feature.size === 'large' ? 'lg:col-span-2' : ''
              }`}
              style={{ border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{
                borderColor: 'rgba(124,58,237,0.3)',
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="text-2xl w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(124,58,237,0.1)' }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-base font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
