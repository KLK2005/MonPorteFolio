'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  const whatsappNumber = '237676043968'
  const whatsappMessage = encodeURIComponent(t('hero.whatsapp.message') || 'Bonjour, je souhaite discuter de mon projet web.')

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900"
    >
      {/* Gradient blobs subtils et élégants */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Grille subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Contenu principal - 7 colonnes */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-10">
              
              {/* Badge de statut */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20 px-5 py-2.5 rounded-full"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-emerald-300">
                  {t('hero.greeting')}
                </span>
              </motion.div>

              {/* Titre principal épuré */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                  <span className="block text-white mb-3">
                    {t('hero.title')}
                  </span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {t('hero.subtitle')}
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t('hero.description')}
                </p>
              </motion.div>

              {/* Stats rapides */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-8 justify-center lg:justify-start"
              >
                {[
                  { value: '15+', label: t('hero.stats.projects') || 'Projets réalisés' },
                  { value: '10+', label: t('hero.stats.clients') || 'Clients satisfaits' },
                  { value: '2+', label: t('hero.stats.experience') || 'Ans d\'expérience' }
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Boutons d'action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold text-base overflow-hidden shadow-xl shadow-white/10 hover:shadow-white/20 transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>

                <motion.a
                  href="#projets"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Download className="w-5 h-5" />
                  {t('hero.portfolio')}
                </motion.a>
              </motion.div>
            </div>

            {/* Photo professionnelle - 5 colonnes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Halo lumineux */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-[2.5rem] blur-3xl transform scale-105" />
                
                {/* Conteneur de l'image */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-10"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Junior Koloko - Développeur Web Full Stack"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    
                    {/* Overlay gradient élégant */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge nom */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold text-lg">Junior Koloko</h3>
                          <p className="text-gray-300 text-sm">Full Stack Developer</p>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="text-emerald-300 text-xs font-semibold">Disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badge flottant - Localisation */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-2xl border border-white/20"
                  >
                    📍 Douala, Cameroun
                  </motion.div>

                  {/* Badge flottant - Projets */}
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-2xl border border-white/20"
                  >
                    ✨ 15+ Projets
                  </motion.div>
                </motion.div>

                {/* Cercles décoratifs */}
                <div className="absolute top-1/4 -right-8 w-24 h-24 border-2 border-purple-500/20 rounded-full" />
                <div className="absolute bottom-1/4 -left-8 w-32 h-32 border-2 border-cyan-500/20 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator minimaliste */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-white transition-colors cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <motion.div className="w-1 h-2 bg-current rounded-full" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
