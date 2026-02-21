'use client'

import { motion } from 'framer-motion'
import Waveform from './waveform'
import CodeSnippet from './code-snippet'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center hero-grid overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Radial glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Waveform hero — bg decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <Waveform size="hero" barColor="var(--accent-bright)" animated={true} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8 max-w-full text-center"
          style={{
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.3)',
            color: 'var(--accent-glow)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span>✨</span>
          <span>Powered by faster-whisper — Trial grátis por 7 dias</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight"
          style={{ color: 'var(--text-primary)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transcrição de áudio.
          <br />
          <span className="text-gradient">Sem surpresas na fatura.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          A única API de transcrição com preço fixo mensal.
          Um endpoint, um token — em produção em 5 minutos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white text-base"
            style={{
              background: 'var(--accent-primary)',
              boxShadow: '0 0 30px rgba(124,58,237,0.4)',
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 50px rgba(124,58,237,0.6)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            → Começar trial grátis
          </motion.a>

          <motion.a
            href="https://api.voxa.ai/api/docs"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm"
            style={{
              border: '1px solid var(--border-accent)',
              color: 'var(--accent-glow)',
              background: 'rgba(124,58,237,0.06)',
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            whileHover={{
              scale: 1.04,
              background: 'rgba(124,58,237,0.12)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Ver documentação
          </motion.a>
        </motion.div>

        {/* Code snippet */}
        <div className="mt-14 w-full">
          <CodeSnippet />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--bg-base))',
        }}
      />
    </section>
  )
}
