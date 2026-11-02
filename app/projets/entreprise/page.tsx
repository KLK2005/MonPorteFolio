'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Building2, Users, Target, TrendingUp, MessageCircle, CheckCircle, Award, Globe, Briefcase, BarChart3, Lightbulb, Shield, Zap, Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

const EntreprisePage = () => {
  const whatsappNumber = '237676043968'
  const [activeTab, setActiveTab] = useState('consulting')

  const services = [
    {
      id: 'consulting',
      icon: Briefcase,
      title: 'Conseil Stratégique',
      subtitle: 'Stratégie d\'entreprise & Développement',
      description: 'Accompagnement complet dans la définition et la mise en œuvre de votre stratégie de croissance au Cameroun et en Afrique Centrale',
      features: [
        'Étude de marché approfondie et analyse concurrentielle',
        'Élaboration de plan d\'affaires et business model',
        'Stratégie d\'expansion régionale (CEMAC)',
        'Due diligence et évaluation d\'entreprise',
        'Optimisation des processus opérationnels',
        'Accompagnement fusion-acquisition'
      ],
      price: 'Sur devis',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    {
      id: 'rh',
      icon: Users,
      title: 'Ressources Humaines',
      subtitle: 'Gestion RH & Capital Humain',
      description: 'Solutions complètes pour optimiser la gestion de vos talents et développer le capital humain de votre organisation',
      features: [
        'Recrutement de profils qualifiés (cadres & techniciens)',
        'Formation professionnelle sur mesure',
        'Évaluation de performance et GPEC',
        'Audit social et conformité légale CEMAC',
        'Mise en place de systèmes de rémunération',
        'Coaching et développement leadership'
      ],
      price: 'À partir de 500 000 FCFA',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      title: 'Marketing Digital',
      subtitle: 'Stratégie Digitale & Communication',
      description: 'Stratégies marketing innovantes adaptées au marché camerounais pour booster votre visibilité et vos ventes',
      features: [
        'Stratégie de présence digitale complète',
        'Gestion réseaux sociaux (Facebook, Instagram, LinkedIn)',
        'SEO local et référencement Google Business',
        'Publicité digitale (Facebook Ads, Google Ads)',
        'Content marketing et storytelling de marque',
        'Analyse de performance et reporting'
      ],
      price: 'À partir de 300 000 FCFA/mois',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: 'import',
      icon: Globe,
      title: 'Import-Export',
      subtitle: 'Commerce International & Logistique',
      description: 'Expertise en facilitation des échanges commerciaux internationaux avec focus sur le marché CEMAC',
      features: [
        'Sourcing fournisseurs internationaux',
        'Gestion logistique et transport international',
        'Dédouanement et conformité réglementaire',
        'Négociation commerciale internationale',
        'Gestion des risques import-export',
        'Accompagnement certification qualité'
      ],
      price: 'Commission sur transaction',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop'
    }
  ]

  const stats = [
    { number: '250+', label: 'Clients Accompagnés', icon: Users },
    { number: '12', label: 'Années d\'Expérience', icon: Award },
    { number: '8', label: 'Pays Couverts', icon: Globe },
    { number: '98%', label: 'Clients Satisfaits', icon: Target }
  ]

  const testimonials = [
    {
      name: 'Marcel FOTSO',
      company: 'CEO, Fotso Industries',
      text: 'CamBusiness nous a accompagnés dans notre expansion régionale. Leur expertise du marché CEMAC est exceptionnelle.',
      rating: 5
    },
    {
      name: 'Aïssatou KANE',
      company: 'DRH, Groupe Sahel',
      text: 'Excellent accompagnement RH. Ils ont transformé notre politique de gestion des talents.',
      rating: 5
    },
    {
      name: 'Jean-Pierre NGOM',
      company: 'Fondateur, TechStartup CMR',
      text: 'Grâce à leur stratégie marketing, notre chiffre d\'affaires a triplé en 8 mois.',
      rating: 5
    }
  ]

  const handleContact = (service?: string) => {
    const message = service 
      ? encodeURIComponent(`Bonjour CamBusiness Solutions 👋\n\nJe souhaite obtenir plus d'informations sur :\n📊 ${service}\n\nMerci de me contacter.`)
      : encodeURIComponent('Bonjour, je souhaite discuter de mes besoins en conseil d\'entreprise.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const activeService = services.find(s => s.id === activeTab) || services[0]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-2 text-sm">
        🎯 Première consultation gratuite - Contactez-nous maintenant
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm hidden sm:inline">Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  CamBusiness Solutions
                </h1>
                <p className="text-xs text-gray-600">Excellence & Performance</p>
              </div>
            </div>
            
            <button
              onClick={() => handleContact()}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)' }}
          />
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Leader du Conseil en Entreprise au Cameroun
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Propulsez Votre<br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Entreprise
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expertise stratégique et solutions sur mesure pour entrepreneurs et entreprises ambitieuses en Afrique Centrale
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleContact()}
                  className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 shadow-2xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultation Gratuite
                </button>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Nos Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mb-4">
                  <stat.icon className="w-7 h-7 text-blue-900" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge Demo */}
      <div className="bg-blue-600 text-white text-center py-3 shadow-lg">
        <p className="text-sm font-semibold">
          💼 Projet de démonstration Site Professionnel - Réalisé par Junior Koloko
        </p>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nos Services Premium
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Solutions sur mesure pour chaque étape de votre développement
              </p>
            </motion.div>
          </div>

          {/* Service Tabs */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`p-6 rounded-2xl transition-all ${
                    activeTab === service.id
                      ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <service.icon className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-sm">{service.title}</h4>
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Details */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div 
                  className="h-80 lg:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeService.image})` }}
                >
                  <div className="h-full bg-gradient-to-br from-blue-900/80 to-blue-600/60 flex items-center justify-center p-8">
                    <div className="text-center text-white">
                      <activeService.icon className="w-20 h-20 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold mb-2">{activeService.title}</h3>
                      <p className="text-blue-100">{activeService.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {activeService.description}
                  </p>

                  <h4 className="font-bold text-xl mb-4 text-gray-900">Services inclus :</h4>
                  <ul className="space-y-3 mb-8">
                    {activeService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Tarif</p>
                      <p className="text-2xl font-bold text-blue-900">{activeService.price}</p>
                    </div>
                    <button
                      onClick={() => handleContact(activeService.title)}
                      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Demander un Devis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Ce Que Disent Nos Clients</h3>
            <p className="text-xl text-gray-600">Témoignages authentiques de nos partenaires</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Prêt à Passer à l'Action ?</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Bénéficiez d'une consultation gratuite de 30 minutes avec nos experts. 
            Discutons de vos objectifs et identifions les solutions adaptées à votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContact()}
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              Consultation Gratuite
            </button>
            <a
              href="tel:+237676043968"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">CamBusiness</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Votre partenaire stratégique pour la croissance et le développement de votre entreprise
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Conseil Stratégique</a></li>
                <li><a href="#" className="hover:text-blue-400">Ressources Humaines</a></li>
                <li><a href="#" className="hover:text-blue-400">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-blue-400">Import-Export</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400">À propos</a></li>
                <li><a href="#" className="hover:text-blue-400">Notre équipe</a></li>
                <li><a href="#" className="hover:text-blue-400">Carrières</a></li>
                <li><a href="#" className="hover:text-blue-400">Partenaires</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Bonanjo, Douala<br />Cameroun</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+237 676 04 39 68</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact@cambusiness.cm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              © 2024 CamBusiness Solutions - Tous droits réservés
            </p>
            <p className="text-xs text-gray-600 mb-4">
              Projet de démonstration créé par Junior Koloko
            </p>
            <Link href="/" className="inline-block text-blue-400 hover:text-blue-300 transition-colors">
              ← Retour au portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EntreprisePage
