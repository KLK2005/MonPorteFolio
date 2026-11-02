'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Info, Github, Globe } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'Afrik Style',
      category: 'E-commerce',
      description: 'Boutique en ligne de mode africaine avec paiement WhatsApp Business',
      tags: ['E-commerce', 'Mode', 'Mobile-First'],
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
      link: '/projets/boutique-mode',
      demoLive: true
    },
    {
      title: 'Digital Academy',
      category: 'Landing Page',
      description: 'Page de conversion optimisée pour école de formation en ligne',
      tags: ['Conversion', 'Formation', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      link: '/projets/landing-page',
      demoLive: true
    },
    {
      title: 'CamBusiness Solutions',
      category: 'Site Corporate',
      description: 'Site professionnel B2B pour cabinet de conseil en entreprise',
      tags: ['Corporate', 'B2B', 'Multi-pages'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      link: '/projets/entreprise',
      demoLive: true
    },
    {
      title: 'Saveurs du Cameroun',
      category: 'Restaurant',
      description: 'Site vitrine pour restaurant avec menu interactif et réservations',
      tags: ['Vitrine', 'Restaurant', 'Cameroun'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      link: '/projets/restaurant',
      demoLive: true
    },
    {
      title: 'Cabinet FOTSO & Associés',
      category: 'Site Juridique',
      description: 'Site professionnel pour cabinet d\'avocats avec prise de rendez-vous',
      tags: ['Juridique', 'Professionnel', 'Services'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
      link: '/projets/cabinet-avocat',
      demoLive: true
    },
    {
      title: 'CAM Construction',
      category: 'Refonte',
      description: 'Refonte complète de site : +320% de trafic en 3 mois',
      tags: ['Refonte', 'Performance', 'SEO'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      link: '/projets/refonte-site',
      demoLive: true
    }
  ]

  return (
    <section id="projets" ref={ref} className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Projets Récents
          </h2>
          <p className="text-lg md:text-xl text-silver-300 max-w-3xl mx-auto mb-4">
            Sites web modernes et performants pour entrepreneurs et entreprises
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-silver-400 bg-silver-600/20 px-4 py-2 rounded-full">
            <Info className="w-4 h-4" />
            Projets de démonstration - Tous testés et fonctionnels
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden hover-lift shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 text-sm font-medium leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors group/link w-full justify-center"
                >
                  <Globe className="w-4 h-4" />
                  Voir le projet
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note finale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-silver-600/20 backdrop-blur-sm p-6 rounded-2xl border border-silver-600/30">
            <p className="text-silver-300 text-sm">
              💼 Disponible pour vos projets • 📱 WhatsApp : +237 676 04 39 68
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
