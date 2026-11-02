'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Megaphone, ShoppingCart, Building2, RefreshCw } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Globe,
      title: 'Sites Vitrines',
      description: 'Présentation élégante de votre activité avec un design professionnel et responsive.',
      features: ['Design moderne', 'Optimisation SEO', 'Responsive mobile', 'Formulaire de contact']
    },
    {
      icon: Megaphone,
      title: 'Landing Pages',
      description: 'Pages de conversion optimisées pour transformer vos visiteurs en clients.',
      features: ['Call-to-action efficace', 'Design persuasif', 'Performance optimale', 'Intégration WhatsApp']
    },
    {
      icon: ShoppingCart,
      title: 'Boutiques en Ligne',
      description: 'Solutions e-commerce complètes pour vendre vos produits en ligne.',
      features: ['Catalogue produits', 'Panier d\'achat', 'Commande WhatsApp', 'Gestion simple']
    },
    {
      icon: Building2,
      title: 'Sites Professionnels',
      description: 'Sites multi-pages pour entreprises avec fonctionnalités avancées.',
      features: ['Plusieurs pages', 'Portfolio/Galerie', 'Blog intégré', 'Formulaires avancés']
    },
    {
      icon: RefreshCw,
      title: 'Refonte de Sites',
      description: 'Modernisation de votre site existant avec les dernières technologies.',
      features: ['Analyse complète', 'Nouveau design', 'Optimisation', 'Migration de contenu']
    }
  ]

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-silver-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Mes Services
          </h2>
          <p className="text-lg md:text-xl text-silver-600 max-w-2xl mx-auto">
            Des solutions web adaptées à vos besoins et votre budget
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-silver-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-black to-silver-600 rounded-2xl mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-silver-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-silver-600">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
