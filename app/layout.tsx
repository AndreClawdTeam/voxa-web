import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Voxa API — Transcrição de Áudio com Preço Fixo Mensal',
  description: 'A única API de transcrição de áudio com preço fixo mensal. Um endpoint, um token — em produção em 5 minutos. Powered by faster-whisper.',
  keywords: ['transcrição de áudio', 'API', 'Whisper', 'preço fixo', 'speech to text'],
  openGraph: {
    title: 'Voxa API — Transcrição de Áudio sem Surpresas na Fatura',
    description: 'A única API de transcrição com preço fixo mensal. Trial grátis por 7 dias.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
