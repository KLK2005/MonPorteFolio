'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, MessageCircle, Star } from 'lucide-react'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const whatsappNumber = '237676043968' // Format sans espaces ni +

  const plans = [
    {
      name: 'STARTER',
      price: '25 000',
      subtitle: 'Pour indépendants et petits commerces',
      description: 'Site vitrine d\'une page professionnel',
      features: [
        'Site web d\'une page',
        'Design moderne et professionnel',
        'Présentation de l\'activité',
        'Section services',
        'Galerie photos',
        'Bouton contact WhatsApp',
        'Intégration réseaux sociaux',
        'Responsive (mobile, tablette, PC)',
        'Déploiement sur Vercel',
        'Configuration initiale'
      ],
      delay: '2 à 4 jours',
      popular: false,
      formule: 'Starter'
    },
    {
      name: 'BUSINESS',
      price: '50 000',
      subtitle: 'Pour PME, restaurants et entreprises',
      description: 'Site vitrine complet multi-pages',
      features: [
        'Site vitrine jusqu\'à 5 pages',
        'Design personnalisé',
        'Page d\'accueil',
        'Page À propos',
        'Page Services',
        'Page Galerie/Réalisations',
        'Page Contact avec formulaire',
        'Bouton WhatsApp',
        'Intégration réseaux sociaux',
        'Optimisation SEO de base',
        'Responsive complet',
        'Déploiement sur Vercel'
      ],
      delay: '4 à 7 jours',
      popular: true,
      formule: 'Business'
    },
    {
      name: 'E-COMMERCE',
      price: '85 000',
      subtitle: 'Pour boutiques et commerçants',
      description: 'Boutique en ligne complète',
      features: [
        'Boutique en ligne fonctionnelle',
        'Catalogue de 20 produits max',
        'Présentation détaillée produits',
        'Catégories de produits',
        'Barre de recherche',
        'Filtres de recherche',
        'Panier côté client',
        'Commande via WhatsApp',
        'Galerie de produits',
        'Design personnalisé responsive',
        'Optimisation SEO de base',
        'Déploiement sur Vercel'
      ],
      delay: '7 à 12 jours',
      popular: false,
      formule: 'E-commerce'
    }
  ]

  return (
    <section id="tarifs" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-silver-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Tarifs & Formules
          </h2>
          <p className="text-lg md:text-xl text-silver-600 max-w-2xl mx-auto">
            Des offres transparentes adaptées à chaque type de projet
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden hover-lift ${
                plan.popular ? 'ring-4 ring-black lg:scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="text-sm font-bold">POPULAIRE</span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-sm text-silver-600 mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-black">{plan.price}</span>
                    <span className="text-xl text-silver-600 ml-2">FCFA</span>
                  </div>
                  
                  <p className="text-silver-600 font-medium">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-silver-700 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Delay */}
                <div className="text-center mb-6 py-3 bg-silver-100 rounded-xl">
                  <p className="text-sm text-silver-600">
                    <span className="font-semibold text-black">Délai indicatif :</span> {plan.delay}
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
                      ? 'bg-black text-white hover:bg-silver-600'
                      : 'bg-silver-200 text-black hover:bg-silver-300'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Choisir la formule {plan.name}
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
          <div className="bg-gradient-to-br from-black to-silver-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Besoin d'une solution personnalisée ?</h3>
            <p className="text-silver-200 mb-6">
              Contactez-moi pour discuter de votre projet spécifique. 
              Je peux créer une offre sur mesure adaptée à vos besoins et votre budget.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Bonjour, je souhaite discuter d\'une solution personnalisée pour mon projet web.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-silver-200 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Demander un devis personnalisé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
