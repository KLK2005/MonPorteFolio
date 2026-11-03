'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      icon: Code2,
      title: 'Front-End',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Framer Motion']
    },
    {
      icon: Database,
      title: 'Back-End',
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express', 'API REST', 'MongoDB', 'PostgreSQL', 'Firebase', 'Authentication']
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      color: 'from-purple-500 to-pink-500',
      skills: ['Mobile First', 'Progressive Web Apps', 'Cross-Browser', 'Performance', 'Accessibilité']
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      color: 'from-orange-500 to-red-500',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research', 'Prototypage', 'Design Systems']
    },
    {
      icon: Globe,
      title: 'Déploiement',
      color: 'from-indigo-500 to-blue-500',
      skills: ['Vercel', 'Netlify', 'GitHub', 'Git', 'CI/CD', 'Domain Management']
    },
    {
      icon: Zap,
      title: 'Optimisation',
      color: 'from-yellow-500 to-orange-500',
      skills: ['SEO', 'Performance Web', 'Core Web Vitals', 'Analytics', 'Lighthouse', 'GTmetrix']
    }
  ]

  return (
    <section id="competences" ref={ref} className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Compétences Techniques
          </h2>
          <p className="text-lg md:text-xl text-silver-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions web performantes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black dark:to-white mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-silver-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover-lift border border-silver-200 dark:border-gray-700"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl mb-4 shadow-lg`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-gray-700 text-black dark:text-white border border-silver-300 dark:border-gray-600 rounded-full text-xs font-medium hover:border-black dark:hover:border-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '3+', label: 'Années d\'expérience' },
            { number: '15+', label: 'Projets réalisés' },
            { number: '100%', label: 'Clients satisfaits' },
            { number: '7j', label: 'Livraison rapide' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center p-4 bg-gradient-to-br from-black to-silver-600 dark:from-gray-700 dark:to-gray-800 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xs md:text-sm text-silver-200 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
