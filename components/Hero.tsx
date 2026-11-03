'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Palette, Zap } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const whatsappNumber = '237676043968' // Format sans espaces ni +
  const whatsappMessage = encodeURIComponent('Bonjour, je souhaite discuter de mon projet web.')

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-silver-600 to-black overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver-300/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                👋 Junior Koloko — Développeur Web Full Stack Freelance
              </motion.div>

              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Développeur Web Full Stack
                <span className="block bg-gradient-to-r from-silver-200 via-white to-silver-200 bg-clip-text text-transparent">
                  Sites Modernes & Performants
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-silver-200 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Je crée des sites web professionnels pour entrepreneurs et PME au Cameroun. 
                E-commerce, sites vitrines et applications web sur mesure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-silver-200 transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  Discutons de votre projet
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-4 mt-12"
              >
                {[
                  { icon: Code2, title: 'Code de qualité' },
                  { icon: Palette, title: 'Design moderne' },
                  { icon: Zap, title: 'Livraison rapide' },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="glass-effect p-4 rounded-xl hover-lift text-center"
                  >
                    <feature.icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-xs font-semibold">{feature.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo à droite */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-silver-300/30 rounded-full blur-3xl"></div>
                
                {/* Photo */}
                <div className="relative z-10">
                  <Image
                    src="/images/profile.jpg"
                    alt="Junior Koloko - Développeur Web Full Stack"
                    width={500}
                    height={500}
                    className="rounded-full shadow-2xl border-4 border-white/20"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 border-4 border-white/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-white/10 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
