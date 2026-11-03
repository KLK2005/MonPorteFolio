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
    'nav.skills': 'Compétences',
    'nav.experience': 'Expériences',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Disponible pour vos projets',
    'hero.title': 'Junior Koloko',
    'hero.subtitle': 'Développeur Web Full Stack',
    'hero.description': 'Je crée des sites web professionnels pour entrepreneurs et PME au Cameroun. E-commerce, sites vitrines et applications web sur mesure.',
    'hero.cta': 'Démarrer Votre Projet',
    'hero.portfolio': 'Voir Mes Projets',
    'hero.whatsapp.message': 'Bonjour, je souhaite discuter de mon projet web.',
    'hero.stats.projects': 'Projets réalisés',
    'hero.stats.clients': 'Clients satisfaits',
    'hero.stats.experience': 'Ans d\'expérience',
    
    // About
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'Développeur passionné au service de votre réussite digitale',
    'about.heading': 'Junior Koloko',
    'about.role': 'Développeur Web Full Stack basé à Douala, Cameroun 🇨🇲',
    'about.intro1': 'Passionné par la technologie et l\'entrepreneuriat, je me suis spécialisé dans la création de',
    'about.intro1.bold': 'solutions web qui aident les entrepreneurs et PME camerounaises',
    'about.intro1.end': 'à digitaliser leur activité et à se démarquer en ligne.',
    'about.intro2.start': 'Avec plus de',
    'about.intro2.years': '3 ans d\'expérience',
    'about.intro2.and': 'et',
    'about.intro2.projects': '+15 projets réussis',
    'about.intro2.end': ', je comprends les défis spécifiques des entreprises africaines : budgets limités, besoin de résultats rapides, et importance de la simplicité d\'utilisation.',
    'about.intro3.start': 'C\'est pourquoi je propose des',
    'about.intro3.solutions': 'solutions clés en main',
    'about.intro3.prices': 'prix adaptés au marché local',
    'about.intro3.support': 'accompagnement personnalisé',
    'about.intro3.end': 'pour que vous puissiez vous concentrer sur votre cœur de métier.',
    'about.philosophy.title': 'Ma Philosophie de Travail',
    'about.quality.title': 'Qualité avant tout',
    'about.quality.desc': 'Code propre, performant et maintenable pour un site qui dure',
    'about.transparency.title': 'Transparence totale',
    'about.transparency.desc': 'Communication claire, tarifs honnêtes, pas de frais cachés',
    'about.reactivity.title': 'Réactivité garantie',
    'about.reactivity.desc': 'Disponible 7j/7 par WhatsApp, réponse en moins de 2h',
    'about.results.title': 'Résultats concrets',
    'about.results.desc': 'Sites qui génèrent de vrais clients et du chiffre d\'affaires',
    'about.mission.title': 'Ma Mission',
    'about.mission.desc': 'Accompagner chaque entrepreneur dans sa transformation digitale avec des solutions web sur mesure, accessibles et performantes.',
    'about.vision.title': 'Ma Vision',
    'about.vision.desc': 'Rendre le web professionnel accessible à tous les entrepreneurs camerounais, des petits commerces aux grandes entreprises.',
    'about.approach.title': 'Mon Approche',
    'about.approach.desc': 'Écoute active, créativité sans limite et excellence technique pour transformer chaque projet en succès, petit ou grand.',
    
    // Skills
    'skills.title': 'Compétences Techniques',
    'skills.subtitle': 'Technologies et outils que je maîtrise pour créer des solutions web performantes',
    'skills.frontend': 'Front-End',
    'skills.backend': 'Back-End',
    'skills.responsive': 'Responsive',
    'skills.design': 'Design & UI/UX',
    'skills.deployment': 'Déploiement',
    'skills.optimization': 'Optimisation',
    'skills.stats.experience': 'Années d\'expérience',
    'skills.stats.projects': 'Projets réalisés',
    'skills.stats.satisfaction': 'Clients satisfaits',
    'skills.stats.delivery': 'Livraison rapide',
    
    // Experience
    'experience.title': 'Expérience & Parcours',
    'experience.subtitle': 'Mon évolution professionnelle dans le développement web',
    'experience.1.period': '2023 - Présent',
    'experience.1.title': 'Développeur Web Full Stack Freelance',
    'experience.1.company': 'Indépendant',
    'experience.1.location': 'Douala, Cameroun',
    'experience.1.description': 'Création de sites web professionnels pour entrepreneurs et PME camerounaises',
    'experience.1.achievement1': '+15 projets réalisés avec succès',
    'experience.1.achievement2': 'Sites e-commerce, vitrines et applications web',
    'experience.1.achievement3': 'Accompagnement complet de la conception au déploiement',
    'experience.1.achievement4': '100% de satisfaction client',
    'experience.2.period': '2022 - 2023',
    'experience.2.title': 'Développeur Web Junior',
    'experience.2.company': 'Agence Digitale',
    'experience.2.location': 'Douala, Cameroun',
    'experience.2.description': 'Développement et maintenance de sites web pour clients locaux',
    'experience.2.achievement1': 'Participation à 10+ projets clients',
    'experience.2.achievement2': 'Développement front-end avec React',
    'experience.2.achievement3': 'Intégration de maquettes Figma',
    'experience.2.achievement4': 'Optimisation SEO et performance',
    'experience.3.period': '2021 - 2022',
    'experience.3.title': 'Formation Développement Web',
    'experience.3.company': 'Auto-formation intensive',
    'experience.3.location': 'En ligne',
    'experience.3.description': 'Formation intensive en développement web moderne',
    'experience.3.achievement1': 'Maîtrise de React, Next.js, TypeScript',
    'experience.3.achievement2': 'Apprentissage continu via tutoriels et documentation',
    'experience.3.achievement3': 'Projets personnels et portfolio',
    'experience.3.achievement4': 'Veille technologique continue',
    'experience.4.period': '2020 - 2021',
    'experience.4.title': 'Premiers Pas dans le Web',
    'experience.4.company': 'Apprentissage autodidacte',
    'experience.4.location': 'Cameroun',
    'experience.4.description': 'Découverte et passion pour le développement web',
    'experience.4.achievement1': 'HTML, CSS, JavaScript',
    'experience.4.achievement2': 'Premiers sites web personnels',
    'experience.4.achievement3': 'Participation à des communautés tech',
    'experience.4.achievement4': 'Décision de se professionnaliser',
    
    // Services
    'services.title': 'Mes Services',
    'services.subtitle': 'Des solutions web adaptées à vos besoins et votre budget',
    
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
    'pricing.save': 'Vous économisez',
    'pricing.today': 'Prix aujourd\'hui',
    'pricing.instead': 'Au lieu de',
    'pricing.delay': 'Délai indicatif :',
    'pricing.choose': 'Choisir la formule',
    'pricing.custom.title': 'Besoin d\'une solution personnalisée ?',
    'pricing.custom.description': 'Contactez-moi pour discuter de votre projet spécifique. Je peux créer une offre sur mesure adaptée à vos besoins et votre budget.',
    'pricing.custom.cta': 'Demander un devis personnalisé',
    
    // Contact
    'contact.title': 'Contactez-Moi',
    'contact.subtitle': 'Parlons de votre projet et obtenez un devis gratuit',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.email': 'Email',
    'contact.location': 'Douala, Cameroun',
    
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
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Available for projects',
    'hero.title': 'Junior Koloko',
    'hero.subtitle': 'Full Stack Web Developer',
    'hero.description': 'I create professional websites for entrepreneurs and SMEs in Cameroon. E-commerce, showcase sites and custom web applications.',
    'hero.cta': 'Start Your Project',
    'hero.portfolio': 'View My Projects',
    'hero.whatsapp.message': 'Hello, I would like to discuss my web project.',
    'hero.stats.projects': 'Completed projects',
    'hero.stats.clients': 'Satisfied clients',
    'hero.stats.experience': 'Years of experience',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate developer at the service of your digital success',
    'about.heading': 'Junior Koloko',
    'about.role': 'Full Stack Web Developer based in Douala, Cameroon 🇨🇲',
    'about.intro1': 'Passionate about technology and entrepreneurship, I specialize in creating',
    'about.intro1.bold': 'web solutions that help Cameroonian entrepreneurs and SMEs',
    'about.intro1.end': 'to digitize their business and stand out online.',
    'about.intro2.start': 'With over',
    'about.intro2.years': '3 years of experience',
    'about.intro2.and': 'and',
    'about.intro2.projects': '+15 successful projects',
    'about.intro2.end': ', I understand the specific challenges of African businesses: limited budgets, need for quick results, and importance of ease of use.',
    'about.intro3.start': 'That\'s why I offer',
    'about.intro3.solutions': 'turnkey solutions',
    'about.intro3.prices': 'prices adapted to the local market',
    'about.intro3.support': 'personalized support',
    'about.intro3.end': 'so you can focus on your core business.',
    'about.philosophy.title': 'My Work Philosophy',
    'about.quality.title': 'Quality first',
    'about.quality.desc': 'Clean, performant and maintainable code for a lasting website',
    'about.transparency.title': 'Total transparency',
    'about.transparency.desc': 'Clear communication, honest pricing, no hidden fees',
    'about.reactivity.title': 'Guaranteed responsiveness',
    'about.reactivity.desc': 'Available 7/7 on WhatsApp, response in less than 2 hours',
    'about.results.title': 'Concrete results',
    'about.results.desc': 'Websites that generate real customers and revenue',
    'about.mission.title': 'My Mission',
    'about.mission.desc': 'Support every entrepreneur in their digital transformation with custom, accessible and high-performance web solutions.',
    'about.vision.title': 'My Vision',
    'about.vision.desc': 'Make professional web accessible to all Cameroonian entrepreneurs, from small businesses to large companies.',
    'about.approach.title': 'My Approach',
    'about.approach.desc': 'Active listening, unlimited creativity and technical excellence to transform every project into a success, big or small.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I master to create high-performance web solutions',
    'skills.frontend': 'Front-End',
    'skills.backend': 'Back-End',
    'skills.responsive': 'Responsive',
    'skills.design': 'Design & UI/UX',
    'skills.deployment': 'Deployment',
    'skills.optimization': 'Optimization',
    'skills.stats.experience': 'Years of experience',
    'skills.stats.projects': 'Completed projects',
    'skills.stats.satisfaction': 'Satisfied clients',
    'skills.stats.delivery': 'Fast delivery',
    
    // Experience
    'experience.title': 'Experience & Career',
    'experience.subtitle': 'My professional evolution in web development',
    'experience.1.period': '2023 - Present',
    'experience.1.title': 'Freelance Full Stack Web Developer',
    'experience.1.company': 'Self-employed',
    'experience.1.location': 'Douala, Cameroon',
    'experience.1.description': 'Creating professional websites for Cameroonian entrepreneurs and SMEs',
    'experience.1.achievement1': '+15 successful projects completed',
    'experience.1.achievement2': 'E-commerce sites, showcase sites and web applications',
    'experience.1.achievement3': 'Complete support from design to deployment',
    'experience.1.achievement4': '100% client satisfaction',
    'experience.2.period': '2022 - 2023',
    'experience.2.title': 'Junior Web Developer',
    'experience.2.company': 'Digital Agency',
    'experience.2.location': 'Douala, Cameroon',
    'experience.2.description': 'Development and maintenance of websites for local clients',
    'experience.2.achievement1': 'Participation in 10+ client projects',
    'experience.2.achievement2': 'Front-end development with React',
    'experience.2.achievement3': 'Integration of Figma designs',
    'experience.2.achievement4': 'SEO and performance optimization',
    'experience.3.period': '2021 - 2022',
    'experience.3.title': 'Web Development Training',
    'experience.3.company': 'Intensive self-training',
    'experience.3.location': 'Online',
    'experience.3.description': 'Intensive training in modern web development',
    'experience.3.achievement1': 'Mastery of React, Next.js, TypeScript',
    'experience.3.achievement2': 'Continuous learning via tutorials and documentation',
    'experience.3.achievement3': 'Personal projects and portfolio',
    'experience.3.achievement4': 'Continuous tech watch',
    'experience.4.period': '2020 - 2021',
    'experience.4.title': 'First Steps in Web',
    'experience.4.company': 'Self-taught learning',
    'experience.4.location': 'Cameroon',
    'experience.4.description': 'Discovery and passion for web development',
    'experience.4.achievement1': 'HTML, CSS, JavaScript',
    'experience.4.achievement2': 'First personal websites',
    'experience.4.achievement3': 'Participation in tech communities',
    'experience.4.achievement4': 'Decision to professionalize',
    
    // Services
    'services.title': 'My Services',
    'services.subtitle': 'Web solutions tailored to your needs and budget',
    
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
    'pricing.save': 'You save',
    'pricing.today': 'Price today',
    'pricing.instead': 'Instead of',
    'pricing.delay': 'Estimated delivery:',
    'pricing.choose': 'Choose package',
    'pricing.custom.title': 'Need a custom solution?',
    'pricing.custom.description': 'Contact me to discuss your specific project. I can create a tailored offer adapted to your needs and budget.',
    'pricing.custom.cta': 'Request a custom quote',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Let\'s talk about your project and get a free quote',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.email': 'Email',
    'contact.location': 'Douala, Cameroon',
    
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
