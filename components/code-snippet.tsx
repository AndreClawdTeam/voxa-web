'use client'

import { motion } from 'framer-motion'

export default function CodeSnippet() {
  return (
    <motion.div
      className="glass-accent rounded-xl overflow-hidden text-left max-w-2xl w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      style={{ boxShadow: '0 0 40px rgba(124,58,237,0.15)' }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(124,58,237,0.2)', background: 'rgba(20,23,34,0.8)' }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
        <span
          className="ml-2 text-xs font-code"
          style={{ color: 'var(--text-subtle)' }}
        >
          terminal
        </span>
      </div>

      {/* Code content */}
      <div className="p-5 overflow-x-auto font-code text-sm leading-relaxed">
        <p style={{ color: 'var(--text-subtle)' }}>
          <span style={{ color: '#6b7280' }}># Transcreva qualquer áudio em uma linha</span>
        </p>
        <p className="mt-1">
          <span style={{ color: '#a78bfa' }}>curl</span>
          <span style={{ color: '#f8fafc' }}> -X </span>
          <span style={{ color: '#34d399' }}>POST</span>
          <span style={{ color: '#f8fafc' }}> https://api.voxa.ai/api/v1/transcribe \</span>
        </p>
        <p className="ml-4">
          <span style={{ color: '#f8fafc' }}>-H </span>
          <span style={{ color: '#fbbf24' }}>&quot;Authorization: Bearer vxa_sua_chave_aqui&quot;</span>
          <span style={{ color: '#f8fafc' }}> \</span>
        </p>
        <p className="ml-4">
          <span style={{ color: '#f8fafc' }}>-F </span>
          <span style={{ color: '#fbbf24' }}>&quot;audio=@entrevista.mp3&quot;</span>
        </p>

        <p className="mt-4" style={{ color: '#6b7280' }}># Resposta:</p>
        <p><span style={{ color: '#f8fafc' }}>{'{'}</span></p>
        <p className="ml-4">
          <span style={{ color: '#fbbf24' }}>&quot;data&quot;</span>
          <span style={{ color: '#f8fafc' }}>: {'{'}</span>
        </p>
        <p className="ml-8">
          <span style={{ color: '#fbbf24' }}>&quot;transcribedText&quot;</span>
          <span style={{ color: '#f8fafc' }}>: </span>
          <span style={{ color: '#34d399' }}>&quot;Olá, bem-vindo à reunião de hoje...&quot;</span>
          <span style={{ color: '#f8fafc' }}>,</span>
        </p>
        <p className="ml-8">
          <span style={{ color: '#fbbf24' }}>&quot;detectedLanguage&quot;</span>
          <span style={{ color: '#f8fafc' }}>: </span>
          <span style={{ color: '#34d399' }}>&quot;pt&quot;</span>
          <span style={{ color: '#f8fafc' }}>,</span>
        </p>
        <p className="ml-8">
          <span style={{ color: '#fbbf24' }}>&quot;audioDurationSeconds&quot;</span>
          <span style={{ color: '#f8fafc' }}>: </span>
          <span style={{ color: '#60a5fa' }}>142.3</span>
        </p>
        <p className="ml-4"><span style={{ color: '#f8fafc' }}>{'}'}</span></p>
        <p><span style={{ color: '#f8fafc' }}>{'}'}</span></p>
      </div>
    </motion.div>
  )
}
