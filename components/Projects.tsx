'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Info, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const projects = [
    {
      title: 'Afrik Style',
      category: 'E-commerce',
      description: t('projects.afrikstyle.desc'),
      tags: ['E-commerce', 'Mode', 'Mobile-First'],
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
      link: '/projets/boutique-mode',
      demoLive: true
    },
    {
      title: 'Digital Academy',
      category: 'Landing Page',
      description: t('projects.digitalacademy.desc'),
      tags: ['Conversion', 'Formation', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      link: '/projets/landing-page',
      demoLive: true
    },
    {
      title: 'GestiPro',
      category: 'Application Web',
      description: t('projects.gestipro.desc'),
      tags: ['Dashboard', 'Gestion', 'B2B'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      link: '/projets/application-web',
      demoLive: true
    },
    {
      title: 'CamBusiness Solutions',
      category: 'Site Corporate',
      description: t('projects.cambusiness.desc'),
      tags: ['Corporate', 'B2B', 'Multi-pages'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      link: '/projets/entreprise',
      demoLive: true
    },
    {
      title: 'Saveurs du Cameroun',
      category: 'Restaurant',
      description: t('projects.saveurs.desc'),
      tags: ['Vitrine', 'Restaurant', 'Cameroun'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      link: '/projets/restaurant',
      demoLive: true
    },
    {
      title: 'Cabinet FOTSO & Associés',
      category: 'Site Juridique',
      description: t('projects.fotso.desc'),
      tags: ['Juridique', 'Professionnel', 'Services'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
      link: '/projets/cabinet-avocat',
      demoLive: true
    },
    {
      title: 'CAM Construction',
      category: 'Refonte',
      description: t('projects.camconstruction.desc'),
      tags: ['Refonte', 'Performance', 'SEO'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      link: '/projets/refonte-site',
      demoLive: true
    }
  ]

  return (
    <section id="projets" ref={ref} className="py-20 md:py-28 bg-ink text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg md:text-xl text-stone-soft max-w-3xl mx-auto mb-4">
            {t('projects.subtitle')}
          </p>
          <div className="section-rule mb-6" />
          <div className="inline-flex items-center gap-2 text-sm text-gold-light bg-gold/10 border border-gold/25 px-4 py-2 rounded-full">
            <Info className="w-4 h-4" />
            {t('projects.demo')}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden hover-lift shadow-2xl border border-transparent hover:border-gold/40"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="bg-gold text-ink px-3 py-1 rounded-full text-xs font-semibold">
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
                  className="inline-flex items-center gap-2 bg-ink text-gold-light px-5 py-3 rounded-full font-semibold hover:bg-gold hover:text-ink transition-colors group/link w-full justify-center"
                >
                  <Globe className="w-4 h-4" />
                  {t('projects.view')}
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
          <div className="bg-white/5 p-6 rounded-2xl border border-gold/25">
            <p className="text-gold-light text-sm">
              {t('projects.available')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
