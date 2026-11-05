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
    <section id="tarifs" ref={ref} className="py-20 md:py-28 bg-cream dark:bg-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Bandeau Offre Limitée */}
          <div className="mb-8 inline-block">
            <div className="bg-ink text-gold-light px-6 py-3 rounded-full border border-gold/40">
              <p className="text-sm md:text-base font-medium tracking-wide">
                {t('pricing.offer')}
              </p>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg md:text-xl text-stone dark:text-stone-soft max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          <div className="section-rule" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl shadow-xl overflow-hidden hover-lift border ${
                plan.popular
                  ? 'bg-ink text-white border-gold lg:scale-105 shadow-gold'
                  : 'bg-white dark:bg-ink-soft border-cream-dark dark:border-white/10'
              }`}
            >
              {/* Popular/Launch Badge */}
              {plan.badge && (
                <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-2xl flex items-center gap-1 ${
                  plan.popular ? 'bg-gold text-ink' : 'bg-ink text-gold-light'
                }`}>
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold">{plan.badge}</span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-ink dark:text-white'}`}>{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-gold-light' : 'text-stone dark:text-stone-soft'}`}>{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <p className={`text-sm mb-2 ${plan.popular ? 'text-stone-soft' : 'text-stone dark:text-stone-soft'}`}>{t('pricing.today')}</p>
                    <div className={`text-5xl md:text-6xl font-bold mb-2 ${plan.popular ? 'text-gold' : 'text-ink dark:text-white'}`}>
                      {plan.price}
                    </div>
                    <p className={`text-xl font-semibold ${plan.popular ? 'text-gold-light' : 'text-stone'}`}>FCFA</p>
                  </div>
                  
                  <div className={`h-px my-6 max-w-xs mx-auto ${plan.popular ? 'bg-white/15' : 'bg-cream-dark dark:bg-white/10'}`} />
                  
                  {/* ÉCONOMIE EN PETIT (badge) */}
                  {plan.originalPrice && (
                    <div className="mb-4">
                      <div className={`inline-block px-4 py-2 rounded-full border border-gold/30 ${plan.popular ? 'bg-gold/15 text-gold' : 'bg-gold/10 text-gold-deep'}`}>
                        <span className="text-sm font-bold">
                          {t('pricing.save')} {(parseInt(plan.originalPrice.replace(/\s/g, '')) - parseInt(plan.price.replace(/\s/g, ''))) / 1000}K FCFA
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Prix barré */}
                  {plan.originalPrice && (
                    <div className="mb-4">
                      <span className={`text-sm line-through ${plan.popular ? 'text-white/40' : 'text-stone-soft'}`}>{t('pricing.instead')} {plan.originalPrice} FCFA</span>
                    </div>
                  )}
                  
                  <p className={`font-medium ${plan.popular ? 'text-cream/80' : 'text-stone dark:text-stone-soft'}`}>{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular ? 'bg-gold' : 'bg-ink'}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-ink' : 'text-gold'}`} />
                      </div>
                      <span className={`text-sm leading-tight ${plan.popular ? 'text-cream/85' : 'text-stone dark:text-stone-soft'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Delay */}
                <div className={`text-center mb-6 py-3 rounded-xl ${plan.popular ? 'bg-white/5' : 'bg-cream dark:bg-ink'}`}>
                  <p className={`text-sm ${plan.popular ? 'text-cream/80' : 'text-stone'}`}>
                    <span className={`font-semibold ${plan.popular ? 'text-gold' : 'text-ink dark:text-white'}`}>{t('pricing.delay')}</span> {plan.delay}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé(e) par la formule ${plan.formule}. J'aimerais en savoir plus et obtenir un devis.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gold text-ink hover:bg-gold-light'
                      : 'bg-ink text-gold-light hover:bg-ink-mid'
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
          <div className="bg-ink border border-gold/25 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">{t('pricing.custom.title')}</h3>
            <p className="text-stone-soft mb-6">
              {t('pricing.custom.description')}
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Bonjour, je souhaite discuter d\'une solution personnalisée pour mon projet web.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-3 rounded-full font-semibold hover:bg-gold-light transition-all duration-300"
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
