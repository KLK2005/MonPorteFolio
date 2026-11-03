'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traductions
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': '👋 Junior Koloko — Développeur Web Full Stack Freelance',
    'hero.title': 'Développeur Web Full Stack',
    'hero.subtitle': 'Sites Modernes & Performants',
    'hero.description': 'Je crée des sites web professionnels qui transforment votre présence en ligne et génèrent de vrais résultats pour votre business.',
    'hero.cta': 'Démarrer Votre Projet',
    'hero.portfolio': 'Voir Mon Portfolio',
    
    // About
    'about.title': 'À Propos',
    'about.subtitle': 'Développeur web Full Stack basé à Douala, Cameroun',
    'about.description': 'Passionné par la création de sites web qui font la différence. Je transforme vos idées en solutions digitales modernes et performantes.',
    'about.clients': '+15 Clients Satisfaits',
    'about.projects': 'Projets Réalisés',
    'about.experience': 'Ans d\'Expérience',
    'about.availability': 'Disponible',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Solutions web adaptées à vos besoins',
    
    // Projects
    'projects.title': 'Projets Récents',
    'projects.subtitle': 'Sites web modernes et performants pour entrepreneurs et entreprises',
    'projects.demo': 'Projets de démonstration - Tous testés et fonctionnels',
    'projects.view': 'Voir le projet',
    'projects.available': '💼 Disponible pour vos projets • 📱 WhatsApp : +237 676 04 39 68',
    
    // Pricing
    'pricing.title': 'Tarifs & Formules',
    'pricing.subtitle': 'Prix de lancement exceptionnels • Économisez jusqu\'à 180 000 FCFA',
    'pricing.offer': '⚡ OFFRE DE LANCEMENT - 10 Places Restantes • Expire le 30 Nov 2026',
    'pricing.save': 'ÉCONOMISEZ',
    'pricing.delay': 'Délai indicatif :',
    'pricing.choose': 'Choisir la formule',
    'pricing.custom.title': 'Besoin d\'une solution personnalisée ?',
    'pricing.custom.description': 'Contactez-moi pour discuter de votre projet spécifique. Je peux créer une offre sur mesure adaptée à vos besoins et votre budget.',
    'pricing.custom.cta': 'Demander un devis personnalisé',
    
    // Contact
    'contact.title': 'Contactez-Moi',
    'contact.subtitle': 'Transformons ensemble votre vision en réalité digitale',
    'contact.whatsapp': 'Discutons Sur WhatsApp',
    'contact.linkedin': 'Connectons-Nous',
    'contact.email': 'Envoyez Un Email',
    'contact.location': 'Douala, Cameroun',
    'contact.availability': 'Disponible pour projets',
    
    // Footer
    'footer.description': 'Développeur Web Full Stack professionnel à Douala.',
    'footer.location': 'Douala, Cameroun',
    'footer.navigation': 'Navigation',
    'footer.services.title': 'Services',
    'footer.quick.contact': 'Contact Rapide',
    'footer.copyright': 'Développeur Web Full Stack',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': '👋 Junior Koloko — Freelance Full Stack Web Developer',
    'hero.title': 'Full Stack Web Developer',
    'hero.subtitle': 'Modern & High-Performance Websites',
    'hero.description': 'I create professional websites that transform your online presence and generate real results for your business.',
    'hero.cta': 'Start Your Project',
    'hero.portfolio': 'View My Portfolio',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Full Stack web developer based in Douala, Cameroon',
    'about.description': 'Passionate about creating websites that make a difference. I transform your ideas into modern and efficient digital solutions.',
    'about.clients': '+15 Happy Clients',
    'about.projects': 'Projects Completed',
    'about.experience': 'Years of Experience',
    'about.availability': 'Available',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Web solutions tailored to your needs',
    
    // Projects
    'projects.title': 'Recent Projects',
    'projects.subtitle': 'Modern and high-performance websites for entrepreneurs and businesses',
    'projects.demo': 'Demo projects - All tested and functional',
    'projects.view': 'View project',
    'projects.available': '💼 Available for your projects • 📱 WhatsApp: +237 676 04 39 68',
    
    // Pricing
    'pricing.title': 'Pricing & Packages',
    'pricing.subtitle': 'Exceptional launch prices • Save up to 180,000 FCFA',
    'pricing.offer': '⚡ LAUNCH OFFER - 10 Spots Remaining • Expires Nov 30, 2026',
    'pricing.save': 'SAVE',
    'pricing.delay': 'Estimated delivery:',
    'pricing.choose': 'Choose package',
    'pricing.custom.title': 'Need a custom solution?',
    'pricing.custom.description': 'Contact me to discuss your specific project. I can create a tailored offer adapted to your needs and budget.',
    'pricing.custom.cta': 'Request a custom quote',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Let\'s transform your vision into digital reality together',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.linkedin': 'Let\'s Connect',
    'contact.email': 'Send an Email',
    'contact.location': 'Douala, Cameroon',
    'contact.availability': 'Available for projects',
    
    // Footer
    'footer.description': 'Professional Full Stack Web Developer in Douala.',
    'footer.location': 'Douala, Cameroon',
    'footer.navigation': 'Navigation',
    'footer.services.title': 'Services',
    'footer.quick.contact': 'Quick Contact',
    'footer.copyright': 'Full Stack Web Developer',
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr')

  useEffect(() => {
    // Charger la langue sauvegardée
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
