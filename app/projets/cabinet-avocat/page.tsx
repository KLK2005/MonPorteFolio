'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Scale, Shield, MessageCircle, Phone, Mail, MapPin, Award, Users, Briefcase, CheckCircle, Clock } from 'lucide-react'

const CabinetAvocat = () => {
  const whatsappNumber = '237676043968'

  const domaines = [
    {
      icon: Briefcase,
      title: 'Droit des Affaires',
      description: 'Constitution de sociétés, contrats commerciaux, fusions-acquisitions, droit des sociétés',
      services: ['Création d\'entreprise', 'Contrats commerciaux', 'Contentieux commercial', 'Conseil juridique']
    },
    {
      icon: Users,
      title: 'Droit du Travail',
      description: 'Relations employeur-employé, licenciements, conventions collectives, contentieux prud\'homal',
      services: ['Contrats de travail', 'Licenciements', 'Conflits sociaux', 'Droit syndical']
    },
    {
      icon: Shield,
      title: 'Droit Pénal',
      description: 'Défense pénale, garde à vue, procédures correctionnelles et criminelles',
      services: ['Défense pénale', 'Détention provisoire', 'Victimes', 'Appels']
    },
    {
      icon: Scale,
      title: 'Droit Civil',
      description: 'Successions, divorces, droit immobilier, contentieux civil',
      services: ['Divorce', 'Successions', 'Immobilier', 'Contrats civils']
    }
  ]

  const avocats = [
    {
      name: 'Me Jacques FOTSO',
      titre: 'Avocat Associé',
      specialite: 'Droit des Affaires & Fiscal',
      experience: '25 ans',
      barreau: 'Barreau du Cameroun',
      avatar: '👨🏾‍⚖️'
    },
    {
      name: 'Me Marie NGONO',
      titre: 'Avocate Associée',
      specialite: 'Droit du Travail & Social',
      experience: '18 ans',
      barreau: 'Barreau du Cameroun',
      avatar: '👩🏾‍⚖️'
    },
    {
      name: 'Me Patrick MBIDA',
      titre: 'Avocat Senior',
      specialite: 'Droit Pénal & Procédure',
      experience: '15 ans',
      barreau: 'Barreau du Cameroun',
      avatar: '👨🏿‍⚖️'
    }
  ]

  const handleContact = (domaine?: string) => {
    const message = domaine
      ? encodeURIComponent(`Bonjour Cabinet FOTSO & Associés 👨‍⚖️\n\nJe souhaite une consultation en :\n⚖️ ${domaine}\n\nMerci de me recontacter.`)
      : encodeURIComponent('Bonjour, je souhaite prendre rendez-vous pour une consultation juridique.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:+237676043968" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+237 676 04 39 68</span>
            </a>
            <a href="mailto:contact@fotso-avocats.cm" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">contact@fotso-avocats.cm</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <Clock className="w-4 h-4" />
            <span>Lun-Ven: 8h-18h | Sam: 9h-13h</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-gray-600">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <Scale className="w-10 h-10 text-yellow-600" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  Cabinet FOTSO & Associés
                </h1>
                <p className="text-xs text-gray-600">Avocats au Barreau du Cameroun</p>
              </div>
            </div>
            
            <button
              onClick={() => handleContact()}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop)' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/30 px-5 py-2 rounded-full text-sm font-semibold mb-8">
                <Award className="w-5 h-5 text-yellow-500" />
                Excellence Juridique Depuis 1999
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Votre Partenaire
                <span className="block text-yellow-500">Juridique de Confiance</span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 text-gray-300">
                Cabinet d'avocats d'affaires et de conseil juridique basé à Douala. 
                Expertise reconnue en droit des affaires, droit du travail et droit pénal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleContact()}
                  className="bg-yellow-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-700 transition-colors inline-flex items-center justify-center gap-2 shadow-2xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Prendre Rendez-vous
                </button>
                <a
                  href="tel:+237676043968"
                  className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-6 h-6" />
                  Urgence 24/7
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '25+', label: 'Années d\'Expérience' },
              { number: '2000+', label: 'Dossiers Traités' },
              { number: '95%', label: 'Taux de Réussite' },
              { number: '24/7', label: 'Disponibilité' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge Demo */}
      <div className="bg-blue-600 text-white text-center py-3 shadow-lg">
        <p className="text-sm font-semibold">
          ⚖️ Projet de démonstration Site Professionnel - Réalisé par Junior Koloko
        </p>
      </div>

      {/* Domaines d'Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Domaines d'Expertise
            </h3>
            <p className="text-xl text-gray-600">Conseil et défense juridique dans tous les domaines du droit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {domaines.map((domaine, index) => (
              <motion.div
                key={domaine.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl mb-6">
                  <domaine.icon className="w-8 h-8 text-yellow-700" />
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{domaine.title}</h4>
                <p className="text-gray-600 mb-6">{domaine.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {domaine.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleContact(domaine.title)}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consulter un Avocat
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h3>
            <p className="text-xl text-gray-600">Avocats expérimentés et reconnus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {avocats.map((avocat, index) => (
              <motion.div
                key={avocat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-7xl mb-4">{avocat.avatar}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{avocat.name}</h4>
                <p className="text-yellow-600 font-semibold mb-3">{avocat.titre}</p>
                <p className="text-gray-600 mb-2">{avocat.specialite}</p>
                <p className="text-sm text-gray-500 mb-2">Expérience: {avocat.experience}</p>
                <p className="text-sm text-gray-500">{avocat.barreau}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
          <h3 className="text-4xl font-bold mb-6">
            Besoin d'un Conseil Juridique ?
          </h3>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Notre équipe d'avocats est à votre disposition pour vous conseiller et vous défendre. 
            Première consultation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContact()}
              className="bg-yellow-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-700 transition-colors inline-flex items-center gap-2 shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              Prendre Rendez-vous
            </button>
            <a
              href="tel:+237676043968"
              className="border-2 border-yellow-600 text-yellow-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Appel Urgent
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-yellow-500" />
                <h3 className="text-xl font-bold">Cabinet FOTSO</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Cabinet d'avocats reconnu pour son expertise et son engagement envers ses clients
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span>Bonanjo, Face Tribunal<br />Douala, Cameroun</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span>+237 676 04 39 68</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span>contact@fotso-avocats.cm</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Lundi - Vendredi: 8h - 18h</li>
                <li>Samedi: 9h - 13h</li>
                <li>Urgences: 24h/24, 7j/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              © 2024 Cabinet FOTSO & Associés - Tous droits réservés
            </p>
            <p className="text-xs text-gray-600 mb-4">
              Projet de démonstration créé par Junior Koloko
            </p>
            <Link href="/" className="inline-block text-yellow-500 hover:text-yellow-400 transition-colors">
              ← Retour au portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CabinetAvocat
