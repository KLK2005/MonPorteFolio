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
      color: 'from-blue-500 to-cyan-500'
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
      color: 'from-purple-500 to-pink-500'
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
      color: 'from-green-500 to-emerald-500'
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
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="experiences" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-silver-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg md:text-xl text-silver-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black dark:to-white mx-auto mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

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
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-silver-200 dark:border-gray-700 hover-lift">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl mb-4 shadow-lg`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>

                  <span className="inline-block bg-black dark:bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-silver-600 dark:text-gray-400 font-semibold mb-1">{exp.company}</p>
                  <p className="text-silver-500 dark:text-gray-500 text-sm mb-4">📍 {exp.location}</p>
                  <p className="text-silver-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-silver-600 dark:text-gray-400">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-700 border-4 border-black dark:border-white rounded-full shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
