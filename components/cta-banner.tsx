'use client'

import { motion } from 'framer-motion'
import Waveform from './waveform'

export default function CTABanner() {
  return (
    <section
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Decorative waveform bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <Waveform size="hero" barColor="var(--accent-glow)" animated={true} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold leading-tight"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Pronto para transcrever{' '}
          <span className="text-gradient">sem surpresas?</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-base sm:text-lg"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          Trial grátis por 7 dias. Sem cartão de crédito. Cancele quando quiser.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-white text-base"
            style={{
              background: 'var(--accent-primary)',
              boxShadow: '0 0 40px rgba(124,58,237,0.45)',
              minHeight: '56px',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 60px rgba(124,58,237,0.65)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            → Criar conta grátis
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
