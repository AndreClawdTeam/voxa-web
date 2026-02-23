'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Waveform from './waveform'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: 'http://138.197.19.184:3000/api/docs/' },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8, 10, 18, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="relative w-8 h-8 rounded-lg"
                style={{ background: 'var(--accent-primary)' }}
              >
                <div className="absolute inset-1.5">
                  <Waveform size="logo" barColor="#fff" animated={true} />
                </div>
              </div>
              <span
                className="font-bold text-lg tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Voxa
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--text-primary)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--text-muted)')
                  }
                >
                  {link.label}
                </a>
              ))}

              <motion.a
                href="https://voxa-dashboard.vercel.app/login"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style={{
                  background: 'var(--accent-primary)',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 20px rgba(124,58,237,0.5)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                Começar grátis →
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: 'var(--text-muted)', minHeight: '44px', minWidth: '44px' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(8,10,18,0.6)' }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 h-full w-72 flex flex-col"
              style={{
                background: 'var(--bg-surface)',
                borderLeft: '1px solid var(--border)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div
                className="flex items-center justify-between p-5"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span className="font-bold text-lg">Voxa</span>
                <button
                  className="p-2"
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-muted)' }}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-2 p-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-3 px-4 rounded-lg font-medium text-sm"
                    style={{ color: 'var(--text-muted)' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://voxa-dashboard.vercel.app/login"
                  className="mt-4 py-3 px-4 rounded-lg font-semibold text-sm text-white text-center"
                  style={{ background: 'var(--accent-primary)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Começar grátis →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
