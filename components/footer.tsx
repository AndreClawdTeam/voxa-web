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
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--accent-primary)' }}
          >
            <Waveform size="sm" barColor="#fff" animated={false} />
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
            { label: 'Documentação', href: 'https://api.voxa.ai/api/docs' },
            { label: 'Swagger', href: 'https://api.voxa.ai/api/docs' },
            { label: 'GitHub', href: 'https://github.com/AndreClawdTeam/voxa-web' },
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
