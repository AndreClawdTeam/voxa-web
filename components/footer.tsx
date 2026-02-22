'use client'

import Waveform from './waveform'

export default function Footer() {
  return (
    <footer
      className="py-10 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="relative w-7 h-7 rounded-lg"
            style={{ background: 'var(--accent-primary)' }}
          >
            <div className="absolute inset-1.5">
              <Waveform size="logo" barColor="#fff" animated={false} />
            </div>
          </div>
          <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
            Voxa API
          </span>
          <span className="text-sm ml-2" style={{ color: 'var(--text-subtle)' }}>
            © 2026
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {[
            { label: 'Documentação', href: 'http://138.197.19.184:3000/api/docs/' },
            { label: 'Swagger', href: 'http://138.197.19.184:3000/api/docs/' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--text-subtle)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--text-muted)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-subtle)')
              }
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
