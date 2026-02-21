'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'O trial é realmente grátis?',
    answer:
      'Sim. Você registra, o trial de 7 dias começa automaticamente. Sem cartão de crédito no início. Cancele antes de expirar e não será cobrado nada.',
  },
  {
    question: 'O que acontece quando o trial expira?',
    answer:
      'Você escolhe um plano para continuar usando. Seus dados (histórico, API keys, configurações) são preservados. Nenhum dado é perdido na transição.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim, a qualquer momento, sem multa ou período de fidelidade. O cancelamento é imediato e você não é cobrado no próximo ciclo.',
  },
  {
    question: 'Qual é o tamanho máximo de arquivo?',
    answer:
      'Até 5 minutos de áudio por request. Se seu caso de uso exige arquivos maiores, considere dividir em segmentos menores antes de enviar.',
  },
  {
    question: 'Quais idiomas são suportados?',
    answer:
      'O motor faster-whisper detecta o idioma automaticamente. Suporte principal para PT, EN, ES, FR, DE, IT. Suporte parcial para dezenas de outros idiomas — o modelo identifica e transcreve sem configuração extra.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="max-w-3xl mx-auto">
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
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                border: open === i ? '1px solid var(--border-accent)' : '1px solid var(--border)',
                background: 'var(--bg-elevated)',
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                style={{ minHeight: '56px' }}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="font-semibold text-sm sm:text-base pr-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0"
                  style={{ color: 'var(--accent-bright)' }}
                >
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
