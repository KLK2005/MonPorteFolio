'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building, CheckCircle, MessageCircle, Hammer, TrendingUp, Target, Award, Users, Clock } from 'lucide-react'
import { useState } from 'react'

const RefonteSite = () => {
  const whatsappNumber = '237676043968'
  const [showAfter, setShowAfter] = useState(true)

  const improvements = [
    { label: 'Design Moderne', before: '❌', after: '✅' },
    { label: 'Responsive Mobile', before: '❌', after: '✅' },
    { label: 'Vitesse de Chargement', before: '5.2s', after: '1.1s' },
    { label: 'SEO Optimisé', before: '32/100', after: '94/100' },
    { label: 'Formulaire de Contact', before: '❌', after: '✅' },
    { label: 'WhatsApp Business', before: '❌', after: '✅' }
  ]

  const results = [
    { icon: TrendingUp, label: 'Trafic', value: '+320%', color: 'text-green-600' },
    { icon: Target, label: 'Conversions', value: '+250%', color: 'text-blue-600' },
    { icon: Users, label: 'Engagement', value: '+180%', color: 'text-purple-600' },
    { icon: Clock, label: 'Temps de visite', value: '+150%', color: 'text-orange-600' }
  ]

  const handleContact = () => {
    const message = encodeURIComponent('Bonjour, je souhaite une refonte de mon site web. Pouvez-vous m\'aider ?')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Portfolio</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold">Projet de Refonte - CAM Construction</h1>
            <button
              onClick={handleContact}
              className="hidden md:flex items-center gap-2 bg-white text-orange-600 px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Refonte
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 px-5 py-2 rounded-full text-sm font-semibold mb-8">
              <Award className="w-5 h-5" />
              Cas Client: CAM Construction
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Transformation
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Spectaculaire
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Découvrez comment nous avons multiplié par 3 le trafic de CAM Construction 
              grâce à une refonte complète de leur site web
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  !showAfter
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Avant
              </button>
              <ArrowRight className="w-6 h-6" />
              <button
                onClick={() => setShowAfter(true)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  showAfter
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Après
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Badge Demo */}
      <div className="bg-blue-600 text-white text-center py-3 shadow-lg">
        <p className="text-sm font-semibold">
          🔄 Projet de démonstration Refonte de Site - Réalisé par Junior Koloko
        </p>
      </div>

      {/* Before/After Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={showAfter ? 'after' : 'before'}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {!showAfter ? (
                /* AVANT */
                <div className="p-12 bg-gray-100">
                  <div className="mb-8 text-center">
                    <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full font-bold mb-4">
                      ❌ AVANT LA REFONTE
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Site Original (2020)</h3>
                    <p className="text-gray-600">Design daté, non responsive, performances médiocres</p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-red-300">
                    {/* Simulation ancien site */}
                    <div className="space-y-6">
                      <div className="bg-gray-300 h-20 rounded flex items-center justify-center">
                        <p className="text-gray-600 font-bold">Logo CAM Construction (ancien)</p>
                      </div>
                      
                      <div className="grid grid-cols-5 gap-2">
                        {['Accueil', 'Services', 'Projets', 'Contact', 'Blog'].map((item) => (
                          <div key={item} className="bg-gray-400 h-10 rounded flex items-center justify-center text-xs text-gray-700">
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
                        <p className="text-gray-500">Image bannière de mauvaise qualité</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-gray-300 h-32 rounded" />
                        ))}
                      </div>

                      <div className="bg-gray-300 h-40 rounded" />

                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="bg-gray-400 h-24 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { label: 'Design', issue: 'Daté et peu attractif' },
                      { label: 'Mobile', issue: 'Non adapté' },
                      { label: 'Vitesse', issue: 'Très lent (5.2s)' }
                    ].map((item) => (
                      <div key={item.label} className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                        <p className="text-red-600 font-bold mb-2">❌ {item.label}</p>
                        <p className="text-sm text-red-700">{item.issue}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* APRÈS */
                <div className="p-12 bg-gradient-to-br from-green-50 to-blue-50">
                  <div className="mb-8 text-center">
                    <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-bold mb-4">
                      ✅ APRÈS LA REFONTE
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Nouveau Site (2024)</h3>
                    <p className="text-gray-600">Design moderne, responsive, ultra-rapide</p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-green-400">
                    {/* Simulation nouveau site moderne */}
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Hammer className="w-10 h-10" />
                          <div>
                            <h4 className="text-2xl font-bold">CAM Construction</h4>
                            <p className="text-sm opacity-90">Bâtissons Votre Avenir</p>
                          </div>
                        </div>
                        <div className="hidden md:flex gap-6">
                          {['Accueil', 'Services', 'Projets', 'Contact'].map((item) => (
                            <a key={item} className="hover:text-orange-200 transition-colors font-semibold">
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div 
                      className="h-80 bg-cover bg-center relative"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                        <div className="text-white p-12">
                          <h2 className="text-5xl font-bold mb-4">Experts en Construction</h2>
                          <p className="text-xl mb-6">25 ans d'expérience au Cameroun</p>
                          <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors">
                            Demander un Devis
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-12">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                          { icon: Building, title: 'Bâtiments', desc: 'Résidentiels & Commerciaux' },
                          { icon: Hammer, title: 'Rénovation', desc: 'Modernisation complète' },
                          { icon: Award, title: 'Qualité', desc: 'Certifié ISO 9001' }
                        ].map((service) => (
                          <div key={service.title} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                              <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                            <p className="text-gray-600">{service.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div 
                            key={i}
                            className="h-32 bg-gray-200 rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop)' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { label: 'Design', feature: 'Moderne & Élégant' },
                      { label: 'Mobile', feature: '100% Responsive' },
                      { label: 'Vitesse', feature: 'Ultra-rapide (1.1s)' }
                    ].map((item) => (
                      <div key={item.label} className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                        <p className="text-green-600 font-bold mb-2">✅ {item.label}</p>
                        <p className="text-sm text-green-700">{item.feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Improvements Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">Améliorations Apportées</h3>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Critère</th>
                    <th className="px-6 py-4 text-center font-bold text-red-600">Avant</th>
                    <th className="px-6 py-4 text-center font-bold text-green-600">Après</th>
                  </tr>
                </thead>
                <tbody>
                  {improvements.map((item, index) => (
                    <tr key={item.label} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.label}</td>
                      <td className="px-6 py-4 text-center text-2xl">{item.before}</td>
                      <td className="px-6 py-4 text-center text-2xl font-bold text-green-600">{item.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Résultats Mesurables</h3>
            <p className="text-xl text-gray-600">Impact 3 mois après le lancement</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg"
              >
                <result.icon className={`w-12 h-12 ${result.color} mx-auto mb-4`} />
                <div className={`text-5xl font-bold ${result.color} mb-2`}>
                  {result.value}
                </div>
                <div className="text-gray-600 font-medium">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Votre Site a Besoin d'une Refonte ?
          </h3>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Transformez votre site web obsolète en un outil de conversion moderne et performant. 
            Analyse gratuite de votre site actuel.
          </p>
          <button
            onClick={handleContact}
            className="bg-white text-orange-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Analyse Gratuite
            <ArrowRight className="w-7 h-7" />
          </button>
          <p className="mt-6 text-sm opacity-75">
            ✅ Audit complet • ✅ Devis personnalisé • ✅ Réponse en 24h
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Refonte Professionnelle</h3>
          <p className="text-gray-400 mb-4">Modernisez votre présence en ligne</p>
          <p className="text-sm text-gray-500 mb-4">
            © 2024 - Projet de démonstration créé par Junior Koloko
          </p>
          <Link href="/" className="inline-block text-orange-400 hover:text-orange-300 transition-colors">
            ← Retour au portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default RefonteSite
