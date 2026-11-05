'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const experiences = [
    {
      icon: Briefcase,
      period: t('experience.1.period'),
      title: t('experience.1.title'),
      company: t('experience.1.company'),
      location: t('experience.1.location'),
      description: t('experience.1.description'),
      achievements: [
        t('experience.1.achievement1'),
        t('experience.1.achievement2'),
        t('experience.1.achievement3'),
        t('experience.1.achievement4')
      ],
      color: 'from-ink to-ink-mid'
    },
    {
      icon: TrendingUp,
      period: t('experience.2.period'),
      title: t('experience.2.title'),
      company: t('experience.2.company'),
      location: t('experience.2.location'),
      description: t('experience.2.description'),
      achievements: [
        t('experience.2.achievement1'),
        t('experience.2.achievement2'),
        t('experience.2.achievement3'),
        t('experience.2.achievement4')
      ],
      color: 'from-gold-deep to-gold'
    },
    {
      icon: GraduationCap,
      period: t('experience.3.period'),
      title: t('experience.3.title'),
      company: t('experience.3.company'),
      location: t('experience.3.location'),
      description: t('experience.3.description'),
      achievements: [
        t('experience.3.achievement1'),
        t('experience.3.achievement2'),
        t('experience.3.achievement3'),
        t('experience.3.achievement4')
      ],
      color: 'from-ink-mid to-gold-deep'
    },
    {
      icon: Award,
      period: t('experience.4.period'),
      title: t('experience.4.title'),
      company: t('experience.4.company'),
      location: t('experience.4.location'),
      description: t('experience.4.description'),
      achievements: [
        t('experience.4.achievement1'),
        t('experience.4.achievement2'),
        t('experience.4.achievement3'),
        t('experience.4.achievement4')
      ],
      color: 'from-ink to-gold-deep'
    }
  ]

  return (
    <section id="experiences" ref={ref} className="py-20 md:py-28 bg-white dark:bg-ink-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg md:text-xl text-stone dark:text-stone-soft max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
          <div className="section-rule" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div className="bg-cream dark:bg-ink p-6 rounded-2xl shadow-sm border border-cream-dark dark:border-white/10 hover-lift">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl mb-4 shadow-lg`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>

                  <span className="inline-block bg-ink text-gold-light text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-bold text-ink dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-gold-deep dark:text-gold font-semibold mb-1">{exp.company}</p>
                  <p className="text-stone-soft text-sm mb-4">{exp.location}</p>
                  <p className="text-stone dark:text-stone-soft mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-stone dark:text-stone-soft">
                        <span className="text-gold mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 bg-gold border-4 border-white dark:border-ink rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
