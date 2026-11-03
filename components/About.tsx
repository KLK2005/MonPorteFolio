'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Lightbulb, Heart, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="apropos" ref={ref} className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg md:text-xl text-silver-600 dark:text-gray-400 max-w-3xl mx-auto">
            Développeur passionné au service de votre réussite digitale
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-silver-400 to-black dark:to-white mx-auto mt-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Section avec photo et présentation étoffée */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-black to-silver-600 dark:from-gray-800 dark:to-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl mb-12"
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
                    Junior Koloko
                  </h3>
                  <p className="text-lg md:text-xl text-white leading-relaxed font-semibold">
                    Développeur Web Full Stack basé à Douala, Cameroun 🇨🇲
                  </p>
                  <p className="text-base md:text-lg text-silver-200 leading-relaxed">
                    Passionné par la technologie et l'entrepreneuriat, je me suis spécialisé dans la création 
                    de <strong className="text-white">solutions web qui aident les entrepreneurs et PME camerounaises</strong> à 
                    digitaliser leur activité et à se démarquer en ligne.
                  </p>
                  <p className="text-base md:text-lg text-silver-200 leading-relaxed">
                    Avec plus de <strong className="text-white">3 ans d'expérience</strong> et 
                    <strong className="text-white"> +15 projets réussis</strong>, je comprends les défis 
                    spécifiques des entreprises africaines : budgets limités, besoin de résultats rapides, 
                    et importance de la simplicité d'utilisation.
                  </p>
                  <p className="text-base md:text-lg text-silver-200 leading-relaxed">
                    C'est pourquoi je propose des <strong className="text-white">solutions clés en main</strong>, 
                    des <strong className="text-white">prix adaptés au marché local</strong>, et un 
                    <strong className="text-white"> accompagnement personnalisé</strong> pour que vous puissiez 
                    vous concentrer sur votre cœur de métier.
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
            className="mb-12 bg-silver-50 dark:bg-gray-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">Ma Philosophie de Travail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: 'Qualité avant tout', desc: 'Code propre, performant et maintenable pour un site qui dure' },
                { icon: Users, title: 'Transparence totale', desc: 'Communication claire, tarifs honnêtes, pas de frais cachés' },
                { icon: Zap, title: 'Réactivité garantie', desc: 'Disponible 7j/7 par WhatsApp, réponse en moins de 2h' },
                { icon: Target, title: 'Résultats concrets', desc: 'Sites qui génèrent de vrais clients et du chiffre d\'affaires' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-black dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-silver-600 dark:text-gray-300">{item.desc}</p>
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
                title: 'Ma Mission',
                desc: 'Accompagner chaque entrepreneur dans sa transformation digitale avec des solutions web sur mesure, accessibles et performantes.'
              },
              {
                icon: Eye,
                title: 'Ma Vision',
                desc: 'Rendre le web professionnel accessible à tous les entrepreneurs camerounais, des petits commerces aux grandes entreprises.'
              },
              {
                icon: Lightbulb,
                title: 'Mon Approche',
                desc: 'Écoute active, créativité sans limite et excellence technique pour transformer chaque projet en succès, petit ou grand.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-silver-100 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl hover-lift text-center border border-silver-200 dark:border-gray-600 shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-black to-silver-600 dark:from-gray-700 dark:to-gray-600 rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">{item.title}</h3>
                <p className="text-silver-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
