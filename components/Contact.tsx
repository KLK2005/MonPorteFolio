'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { t } = useLanguage()
  
  const whatsappNumber = '237676043968' // Format sans espaces ni +
  const email = 'juniorkoloko4@gmail.com'
  
  // Liens réseaux sociaux
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/junior-koloko-592841319/',
    github: 'https://github.com/KLK2005',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirection vers WhatsApp avec le message pré-rempli
    const message = `Nom: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-ink-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-stone dark:text-stone-soft max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="section-rule" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-ink border border-gold/25 p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-6">{t('contact.title')}</h3>
              <p className="text-stone-soft mb-8 leading-relaxed">
                {t('contact.subtitle')}
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image 
                      src="/images/icons8_whatsapp_48px_1.png" 
                      alt="WhatsApp" 
                      width={28} 
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.whatsapp')}</p>
                    <p className="text-sm text-gold-light">{t('contact.response')}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.email')}</p>
                    <p className="text-sm text-gold-light">{email}</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-stone-soft mb-4">{t('contact.social')}</p>
                <div className="flex gap-4">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-gold/50 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Image 
                      src="/images/icons8_linkedin_48px.png" 
                      alt="LinkedIn" 
                      width={24} 
                      height={24}
                      className="object-contain"
                    />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-gold/50 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Image 
                      src="/images/icons8_github_48px.png" 
                      alt="GitHub" 
                      width={24} 
                      height={24}
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-cream dark:bg-ink p-8 rounded-3xl border border-cream-dark dark:border-white/10">
              <h3 className="text-2xl font-bold text-ink dark:text-white mb-6">{t('contact.form.title')}</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink dark:text-white mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-ink-soft border border-cream-dark dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-ink dark:text-white"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink dark:text-white mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-ink-soft border border-cream-dark dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-ink dark:text-white"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink dark:text-white mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-ink-soft border border-cream-dark dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-ink dark:text-white resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-ink py-4 rounded-full font-semibold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {t('contact.form.submit')}
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-sm text-stone text-center">
                  {t('contact.form.notice')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
