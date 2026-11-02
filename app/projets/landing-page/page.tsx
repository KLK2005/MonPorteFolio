'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Star, Users, TrendingUp, Award, Clock, MessageCircle, Play, BookOpen, GraduationCap } from 'lucide-react'

const LandingPage = () => {
  const whatsappNumber = '237676043968'

  const formations = [
    { icon: '💻', title: 'Développement Web', duration: '3 mois', price: '150 000' },
    { icon: '📱', title: 'Marketing Digital', duration: '2 mois', price: '120 000' },
    { icon: '🎨', title: 'Design Graphique', duration: '2.5 mois', price: '135 000' },
    { icon: '📊', title: 'Data Analysis', duration: '3 mois', price: '165 000' },
  ]

  const stats = [
    { number: '5000+', label: 'Étudiants Formés' },
    { number: '95%', label: 'Taux de Réussite' },
    { number: '200+', label: 'Entreprises Partenaires' },
    { number: '4.9/5', label: 'Satisfaction Client' }
  ]

  const testimonials = [
    {
      name: 'Stéphanie MBARGA',
      role: 'Développeuse Web',
      text: 'Formation excellente ! J\'ai trouvé un emploi 2 semaines après ma certification.',
      rating: 5,
      avatar: '👩🏾‍💼'
    },
    {
      name: 'Eric NJOYA',
      role: 'Marketing Manager',
      text: 'Les formateurs sont top ! Contenu pratique et applicable immédiatement.',
      rating: 5,
      avatar: '👨🏿‍💼'
    },
    {
      name: 'Laure KEMAYOU',
      role: 'Designer',
      text: 'Meilleur investissement de ma carrière. Je recommande à 100%.',
      rating: 5,
      avatar: '👩🏾'
    }
  ]

  const handleInscription = (formation?: string) => {
    const message = formation
      ? encodeURIComponent(`Bonjour Digital Academy 👋\n\nJe souhaite m'inscrire à la formation :\n📚 ${formation}\n\nMerci de me contacter.`)
      : encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations sur vos formations.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 text-sm font-semibold">
        🎓 OFFRE SPÉCIALE : -30% sur toutes les formations jusqu'au 15 Décembre !
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-gray-600">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Academy
              </h1>
            </div>
            
            <button
              onClick={() => handleInscription()}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-8">
                <Award className="w-4 h-4" />
                Formation Certifiée - 100% En Ligne
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Lancez Votre Carrière
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  dans le Digital
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 text-purple-100">
                Formations professionnelles en développement web, marketing digital et design. 
                Devenez expert en 3 mois !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => handleInscription()}
                  className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 shadow-2xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Inscription Gratuite
                </button>
                <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors inline-flex items-center justify-center gap-2">
                  <Play className="w-6 h-6" />
                  Voir la Vidéo
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Certification reconnue</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Support 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Garantie emploi</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
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
          🚀 Projet de démonstration Landing Page - Réalisé par Junior Koloko
        </p>
      </div>

      {/* Formations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Formations
            </h3>
            <p className="text-xl text-gray-600">Choisissez la formation qui correspond à vos ambitions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {formations.map((formation, index) => (
              <motion.div
                key={formation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-purple-200 group"
              >
                <div className="text-6xl mb-4">{formation.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{formation.title}</h4>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-5 h-5" />
                  <span>{formation.duration}</span>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-6">
                  {formation.price} <span className="text-lg text-gray-600">FCFA</span>
                </div>
                <button
                  onClick={() => handleInscription(formation.title)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Je m'inscris
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Nous Choisir ?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: 'Formation Pratique',
                desc: 'Projets réels et cas pratiques pour une expérience concrète'
              },
              {
                icon: Users,
                title: 'Formateurs Experts',
                desc: 'Professionnels actifs dans leur domaine avec 10+ ans d\'expérience'
              },
              {
                icon: TrendingUp,
                title: 'Accompagnement Carrière',
                desc: 'Aide à la recherche d\'emploi et mise en relation avec nos partenaires'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Témoignages</h3>
            <p className="text-xl text-gray-600">Ce que disent nos anciens étudiants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Commencer ?
          </h3>
          <p className="text-xl mb-10 text-purple-100 max-w-2xl mx-auto">
            Rejoignez plus de 5000 étudiants qui ont transformé leur carrière avec Digital Academy
          </p>
          <button
            onClick={() => handleInscription()}
            className="bg-white text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Inscription Gratuite
            <ArrowRight className="w-7 h-7" />
          </button>
          <p className="mt-6 text-sm text-purple-200">
            ✅ Sans engagement • ✅ Réponse en 24h • ✅ Premier cours gratuit
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold">Digital Academy</h3>
          </div>
          <p className="text-gray-400 mb-4">Formation professionnelle en ligne</p>
          <p className="text-sm text-gray-500 mb-4">
            © 2024 Digital Academy - Projet de démonstration créé par Junior Koloko
          </p>
          <Link href="/" className="inline-block text-purple-400 hover:text-purple-300 transition-colors">
            ← Retour au portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
