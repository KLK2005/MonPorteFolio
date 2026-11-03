'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Megaphone, ShoppingCart, Building2, RefreshCw, Layout } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const services = [
    {
      icon: Globe,
      title: t('services.showcase.title'),
      description: t('services.showcase.desc'),
      features: [
        t('services.showcase.feat1'),
        t('services.showcase.feat2'),
        t('services.showcase.feat3'),
        t('services.showcase.feat4')
      ]
    },
    {
      icon: Megaphone,
      title: t('services.landing.title'),
      description: t('services.landing.desc'),
      features: [
        t('services.landing.feat1'),
        t('services.landing.feat2'),
        t('services.landing.feat3'),
        t('services.landing.feat4')
      ]
    },
    {
      icon: ShoppingCart,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.desc'),
      features: [
        t('services.ecommerce.feat1'),
        t('services.ecommerce.feat2'),
        t('services.ecommerce.feat3'),
        t('services.ecommerce.feat4')
      ]
    },
    {
      icon: Layout,
      title: t('services.webapp.title'),
      description: t('services.webapp.desc'),
      features: [
        t('services.webapp.feat1'),
        t('services.webapp.feat2'),
        t('services.webapp.feat3'),
        t('services.webapp.feat4')
      ]
    },
    {
      icon: Building2,
      title: t('services.corporate.title'),
      description: t('services.corporate.desc'),
      features: [
        t('services.corporate.feat1'),
        t('services.corporate.feat2'),
        t('services.corporate.feat3'),
        t('services.corporate.feat4')
      ]
    },
    {
      icon: RefreshCw,
      title: t('services.redesign.title'),
      description: t('services.redesign.desc'),
      features: [
        t('services.redesign.feat1'),
        t('services.redesign.feat2'),
        t('services.redesign.feat3'),
        t('services.redesign.feat4')
      ]
    }
  ]

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-silver-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-silver-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black dark:to-white mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift border border-silver-200 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-black to-silver-600 dark:from-gray-700 dark:to-gray-600 rounded-2xl mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{service.title}</h3>
              <p className="text-silver-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-silver-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mr-3" />
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
