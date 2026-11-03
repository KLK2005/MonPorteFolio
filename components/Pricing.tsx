'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, MessageCircle, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()
  
  const whatsappNumber = '237676043968' // Format sans espaces ni +

  const plans = [
    {
      name: 'LANDING PAGE',
      price: '60 000',
      originalPrice: '100 000',
      subtitle: 'Pour formations, événements et services',
      description: 'Page de conversion optimisée',
      features: [
        'Design personnalisé moderne',
        'Page unique ultra-optimisée',
        'Section héro percutante',
        'Présentation de l\'offre',
        'Bénéfices et témoignages',
        'Formulaire de contact',
        'Boutons d\'action WhatsApp',
        'Animations modernes',
        'Responsive parfait',
        'Optimisation conversion',
        'SEO de base',
        'Déploiement rapide'
      ],
      delay: '7 jours',
      popular: false,
      formule: 'Landing Page',
      badge: 'OFFRE LANCEMENT'
    },
    {
      name: 'E-COMMERCE',
      price: '125 000',
      originalPrice: '200 000',
      subtitle: 'Pour boutiques et commerçants',
      description: 'Boutique en ligne complète',
      features: [
        'Boutique en ligne fonctionnelle',
        'Catalogue produits illimité',
        'Gestion des catégories',
        'Fiches produits détaillées',
        'Galerie photos par produit',
        'Barre de recherche',
        'Filtres de recherche avancés',
        'Panier d\'achat intelligent',
        'Commande via WhatsApp',
        'Paiement Mobile Money',
        'Design moderne responsive',
        'Optimisation SEO e-commerce',
        'Formation gestion incluse'
      ],
      delay: '10-14 jours',
      popular: true,
      formule: 'E-commerce',
      badge: 'PLUS POPULAIRE'
    },
    {
      name: 'SITE PRO',
      price: '200 000',
      originalPrice: '380 000',
      subtitle: 'Pour cabinets et entreprises',
      description: 'Site professionnel premium',
      features: [
        'Site multi-pages complet',
        'Design haut de gamme',
        'Page d\'accueil premium',
        'Page services détaillée',
        'Page à propos + équipe',
        'Portfolio/Réalisations',
        'Blog (3 articles)',
        'Page contact + formulaire',
        'Prise de rendez-vous en ligne',
        'Intégrations avancées',
        'SEO professionnel complet',
        'Optimisation performance',
        'Support 1 mois inclus'
      ],
      delay: '14 jours',
      popular: false,
      formule: 'Site Pro',
      badge: 'PRESTIGE'
    }
  ]

  return (
    <section id="tarifs" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-silver-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Bandeau Offre Limitée */}
          <div className="mb-8 inline-block">
            <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
              <p className="text-sm md:text-base font-bold flex items-center gap-2">
                {t('pricing.offer')}
              </p>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg md:text-xl text-silver-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black dark:to-white mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover-lift ${
                plan.popular ? 'ring-4 ring-black dark:ring-white lg:scale-105' : ''
              }`}
            >
              {/* Popular/Launch Badge */}
              {plan.badge && (
                <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-2xl flex items-center gap-1 ${
                  plan.popular ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                }`}>
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold">{plan.badge}</span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-silver-600 dark:text-gray-400 mb-6">{plan.subtitle}</p>
                  
                  {/* PRIX AUJOURD'HUI EN GROS */}
                  <div className="mb-4">
                    <p className="text-sm text-silver-600 dark:text-gray-400 mb-2">{t('pricing.today')}</p>
                    <div className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-2">
                      {plan.price}
                    </div>
                    <p className="text-xl text-silver-600 dark:text-gray-400 font-semibold">FCFA</p>
                  </div>
                  
                  <div className="h-px bg-silver-300 dark:bg-gray-700 my-6 max-w-xs mx-auto" />
                  
                  {/* ÉCONOMIE EN PETIT (badge) */}
                  {plan.originalPrice && (
                    <div className="mb-4">
                      <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full">
                        <span className="text-sm font-bold">
                          {t('pricing.save')} {(parseInt(plan.originalPrice.replace(/\s/g, '')) - parseInt(plan.price.replace(/\s/g, ''))) / 1000}K FCFA
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Prix barré */}
                  {plan.originalPrice && (
                    <div className="mb-4">
                      <span className="text-sm text-silver-400 dark:text-gray-500 line-through">{t('pricing.instead')} {plan.originalPrice} FCFA</span>
                    </div>
                  )}
                  
                  <p className="text-silver-600 dark:text-gray-400 font-medium">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-black dark:bg-white rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white dark:text-black" />
                      </div>
                      <span className="text-sm text-silver-700 dark:text-gray-300 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Delay */}
                <div className="text-center mb-6 py-3 bg-silver-100 dark:bg-gray-700 rounded-xl">
                  <p className="text-sm text-silver-600 dark:text-gray-300">
                    <span className="font-semibold text-black dark:text-white">{t('pricing.delay')}</span> {plan.delay}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé(e) par la formule ${plan.formule}. J'aimerais en savoir plus et obtenir un devis.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-silver-600 dark:hover:bg-gray-200'
                      : 'bg-silver-200 dark:bg-gray-700 text-black dark:text-white hover:bg-silver-300 dark:hover:bg-gray-600'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('pricing.choose')} {plan.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-black to-silver-600 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">{t('pricing.custom.title')}</h3>
            <p className="text-silver-200 dark:text-gray-300 mb-6">
              {t('pricing.custom.description')}
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Bonjour, je souhaite discuter d\'une solution personnalisée pour mon projet web.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-silver-200 dark:hover:bg-gray-300 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              {t('pricing.custom.cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
