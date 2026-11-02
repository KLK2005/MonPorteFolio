'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Lightbulb } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="apropos" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Section avec photo et présentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-black to-silver-600 p-8 md:p-12 rounded-3xl shadow-2xl mb-12"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-silver-300 to-white rounded-full blur-xl opacity-50" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Photo de profil"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Texte de présentation */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-white leading-relaxed font-semibold">
                    Développeur web Full Stack basé à Douala, Cameroun
                  </p>
                  <p className="text-base md:text-lg text-silver-200 leading-relaxed">
                    Je construis des sites web et applications pour entrepreneurs et PME. 
                    Spécialisé dans les projets e-commerce et les sites vitrines professionnels.
                  </p>
                  <p className="text-base md:text-lg text-silver-200 leading-relaxed">
                    Chaque projet est pensé pour être rapide, moderne et facile à utiliser, 
                    avec un design adapté aux besoins du marché camerounais.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Ma Mission',
                desc: 'Accompagner chaque client dans sa transformation digitale avec des solutions web sur mesure et accessibles.'
              },
              {
                icon: Eye,
                title: 'Ma Vision',
                desc: 'Rendre le web professionnel accessible à tous, des petits commerces aux entreprises établies.'
              },
              {
                icon: Lightbulb,
                title: 'Mon Approche',
                desc: 'Écoute, créativité et excellence technique pour chaque projet, petit ou grand.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-silver-100 p-8 rounded-2xl hover-lift text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-silver-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
