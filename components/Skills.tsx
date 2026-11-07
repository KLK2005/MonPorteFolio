'use client'

import { Code2, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import ScrollReveal from './ScrollReveal'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      icon: Code2,
      title: t('skills.frontend'),
      color: 'from-ink to-ink-mid',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Framer Motion']
    },
    {
      icon: Database,
      title: t('skills.backend'),
      color: 'from-ink-mid to-gold-deep',
      skills: ['Node.js', 'Express', 'Laravel', 'API REST', 'MongoDB', 'PostgreSQL', 'Firebase', 'Authentication']
    },
    {
      icon: Smartphone,
      title: t('skills.responsive'),
      color: 'from-gold-deep to-gold',
      skills: ['Mobile First', 'Progressive Web Apps', 'Cross-Browser', 'Performance', 'Accessibilité']
    },
    {
      icon: Palette,
      title: t('skills.design'),
      color: 'from-ink to-gold-deep',
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototypage', 'Design Systems']
    },
    {
      icon: Globe,
      title: t('skills.deployment'),
      color: 'from-ink-soft to-ink',
      skills: ['Vercel', 'Netlify', 'GitHub', 'Git', 'CI/CD', 'Domain Management']
    },
    {
      icon: Zap,
      title: t('skills.optimization'),
      color: 'from-gold to-gold-deep',
      skills: ['SEO', 'Performance Web', 'Core Web Vitals', 'Analytics', 'Lighthouse', 'GTmetrix']
    }
  ]

  const delays = [0, 100, 200, 300, 400, 500]

  return (
    <section id="competences" className="py-20 md:py-28 bg-cream dark:bg-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
              {t('skills.title')}
            </h2>
            <p className="text-lg md:text-xl text-stone dark:text-stone-soft max-w-3xl mx-auto">
              {t('skills.subtitle')}
            </p>
            <div className="section-rule" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={delays[index]}>
              <div className="bg-white dark:bg-ink-soft p-6 rounded-2xl shadow-sm card-hover border border-cream-dark dark:border-white/10 h-full">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl mb-4 shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-cream dark:bg-ink text-ink dark:text-cream border border-cream-dark dark:border-white/10 rounded-full text-xs font-medium hover:border-gold transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats rapides */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '3+', label: t('skills.stats.experience') },
            { number: '15+', label: t('skills.stats.projects') },
            { number: '100%', label: t('skills.stats.satisfaction') },
            { number: '7j', label: t('skills.stats.delivery') }
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center p-5 bg-ink dark:bg-ink-soft rounded-2xl border border-gold/20 card-hover">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-cream/80">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills