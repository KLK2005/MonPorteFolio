'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MessageCircle, Linkedin, Send } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  
  const whatsappNumber = '237676043968' // Format sans espaces ni +
  const email = 'juniorkoloko4@gmail.com'
  
  // Liens réseaux sociaux
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/junior-koloko-592841319/',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirection vers WhatsApp avec le message pré-rempli
    const message = `Nom: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-silver-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg md:text-xl text-silver-600 max-w-2xl mx-auto">
            Parlons de votre projet et obtenez un devis gratuit
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black mx-auto mt-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-black to-silver-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
              <p className="text-silver-200 mb-8 leading-relaxed">
                Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une solution personnalisée, 
                je suis là pour vous accompagner. Contactez-moi dès maintenant pour un devis gratuit et sans engagement.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-silver-300">Réponse rapide</p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-silver-300">{email}</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-silver-300 mb-4">Suivez-moi sur les réseaux sociaux</p>
                <div className="flex gap-4">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">Envoyez-moi un message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-silver-100 border border-silver-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-silver-100 border border-silver-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-silver-100 border border-silver-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-silver-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Envoyer le message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-sm text-silver-600 text-center">
                  En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour finaliser l'envoi.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
