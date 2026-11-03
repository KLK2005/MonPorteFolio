'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, BarChart3, Users, Calendar, FileText, TrendingUp, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ApplicationWebPage() {
  const whatsappNumber = '237676043968'
  const projectMessage = encodeURIComponent('Bonjour, je suis intéressé(e) par une application web similaire à GestiPro. J\'aimerais discuter de mon projet.')

  const features = [
    {
      icon: BarChart3,
      title: 'Tableau de Bord Interactif',
      description: 'Visualisation en temps réel des indicateurs clés de performance (KPI) avec graphiques dynamiques'
    },
    {
      icon: Users,
      title: 'Gestion Clients',
      description: 'Base de données clients complète avec historique des transactions et suivi personnalisé'
    },
    {
      icon: FileText,
      title: 'Facturation Automatisée',
      description: 'Génération automatique de devis, factures et reçus au format PDF avec numérotation'
    },
    {
      icon: Calendar,
      title: 'Gestion de Stock',
      description: 'Suivi en temps réel des stocks, alertes de rupture et gestion des approvisionnements'
    },
    {
      icon: TrendingUp,
      title: 'Rapports & Statistiques',
      description: 'Analyses détaillées des ventes, marges bénéficiaires et performances par période'
    },
    {
      icon: Clock,
      title: 'Multi-utilisateurs',
      description: 'Gestion des rôles et permissions pour votre équipe avec traçabilité des actions'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#projets" className="inline-flex items-center gap-2 text-silver-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Retour aux projets
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Application Web • Gestion Commerciale
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              GestiPro
            </h1>
            <p className="text-xl text-silver-300 mb-8">
              Application de gestion commerciale complète pour PME camerounaises
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${projectMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              Demander une démo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-silver-300 text-lg">Interface de tableau de bord moderne</p>
                  <p className="text-silver-500 text-sm mt-2">Graphiques interactifs • Données en temps réel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fonctionnalités Principales</h2>
              <p className="text-xl text-silver-400">
                Tout ce dont vous avez besoin pour gérer efficacement votre entreprise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Technologie & Performance</h2>
            <p className="text-silver-400 mb-12">
              Application moderne construite avec les dernières technologies pour une performance optimale
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <div
                  key={tech}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                >
                  <p className="font-semibold">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à digitaliser votre entreprise ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discutons de vos besoins et créons ensemble l'application parfaite pour votre business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${projectMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Demander un devis
              </a>
              <Link
                href="/#projets"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Voir d'autres projets
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
