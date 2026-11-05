'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Lightbulb, Heart, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t } = useLanguage()

  return (
    <section id="apropos" ref={ref} className="py-20 md:py-28 bg-white dark:bg-ink-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-stone dark:text-stone-soft max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
          <div className="section-rule" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Section avec photo et présentation étoffée */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-ink p-8 md:p-12 rounded-3xl shadow-2xl mb-12 border border-gold/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Photo de profil */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <div className="absolute inset-0 bg-gold/40 rounded-full blur-xl" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/70 shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Junior Koloko - Développeur Web"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Texte de présentation ÉTOFFÉ */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t('about.heading')}
                  </h3>
                  <p className="text-lg md:text-xl text-white leading-relaxed font-semibold">
                    {t('about.role')}
                  </p>
                  <p className="text-base md:text-lg text-stone-soft leading-relaxed">
                    {t('about.intro1')} <strong className="text-gold-light">{t('about.intro1.bold')}</strong> {t('about.intro1.end')}
                  </p>
                  <p className="text-base md:text-lg text-stone-soft leading-relaxed">
                    {t('about.intro2.start')} <strong className="text-gold-light">{t('about.intro2.years')}</strong> {t('about.intro2.and')} 
                    <strong className="text-gold-light"> {t('about.intro2.projects')}</strong>{t('about.intro2.end')}
                  </p>
                  <p className="text-base md:text-lg text-stone-soft leading-relaxed">
                    {t('about.intro3.start')} <strong className="text-gold-light">{t('about.intro3.solutions')}</strong>, 
                    des <strong className="text-gold-light">{t('about.intro3.prices')}</strong>, et un 
                    <strong className="text-gold-light"> {t('about.intro3.support')}</strong> {t('about.intro3.end')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ma Philosophie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 bg-cream dark:bg-ink p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-ink dark:text-white mb-6 text-center">{t('about.philosophy.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: t('about.quality.title'), desc: t('about.quality.desc') },
                { icon: Users, title: t('about.transparency.title'), desc: t('about.transparency.desc') },
                { icon: Zap, title: t('about.reactivity.title'), desc: t('about.reactivity.desc') },
                { icon: Target, title: t('about.results.title'), desc: t('about.results.desc') }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white dark:bg-ink-soft p-4 rounded-xl border border-cream-dark dark:border-white/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-ink rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-stone dark:text-stone-soft">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission, Vision, Approche */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: t('about.mission.title'),
                desc: t('about.mission.desc')
              },
              {
                icon: Eye,
                title: t('about.vision.title'),
                desc: t('about.vision.desc')
              },
              {
                icon: Lightbulb,
                title: t('about.approach.title'),
                desc: t('about.approach.desc')
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-cream dark:bg-ink p-8 rounded-2xl hover-lift text-center border border-cream-dark dark:border-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/15 border border-gold/30 rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-gold-deep dark:text-gold" />
                </div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-4">{item.title}</h3>
                <p className="text-stone dark:text-stone-soft leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
