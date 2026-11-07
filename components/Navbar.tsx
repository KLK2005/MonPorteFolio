'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeLanguageToggle from './ThemeLanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#accueil', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#projets', label: t('nav.projects') },
    { href: '#tarifs', label: t('nav.pricing') },
    { href: '#apropos', label: t('nav.about') },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#accueil" className="font-display text-xl md:text-2xl font-semibold text-white">
            Junior<span className="text-gold">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 hover:text-gold-light transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <ThemeLanguageToggle />
            <a
              href="#contact"
              className="bg-gold text-ink text-sm font-semibold px-4 py-2 rounded-full hover:bg-gold-light transition-colors"
            >
              {t('nav.contact')}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <ThemeLanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-ink/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-gold-light transition-colors font-medium py-3"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
