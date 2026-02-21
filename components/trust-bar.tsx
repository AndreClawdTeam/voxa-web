'use client'

import { motion } from 'framer-motion'

const techs = [
  { name: 'Node.js', icon: '⬢' },
  { name: 'TypeScript', icon: '𝕋𝕊' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'faster-whisper', icon: '⚡' },
]

export default function TrustBar() {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: 'var(--text-subtle)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tecnologia confiável de ponta a ponta
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2"
              style={{ color: 'var(--text-subtle)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
