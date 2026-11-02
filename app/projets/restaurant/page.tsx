'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Clock, MapPin, Phone, MessageCircle, Utensils, ChefHat } from 'lucide-react'

const RestaurantPage = () => {
  const whatsappNumber = '237676043968'

  const plats = [
    {
      name: 'Ndolé au Poisson Fumé',
      description: 'Plat traditionnel camerounais aux feuilles de ndolé, arachides et poisson fumé',
      price: '3 500',
      category: 'Plats Traditionnels',
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop'
    },
    {
      name: 'Poulet DG',
      description: 'Poulet Directeur Général avec plantains et légumes',
      price: '4 000',
      category: 'Spécialités',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop'
    },
    {
      name: 'Eru avec Bâton de Manioc',
      description: 'Eru accompagné de bâton de manioc et viande',
      price: '3 000',
      category: 'Plats Traditionnels',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop'
    },
    {
      name: 'Koki avec Miondo',
      description: 'Gâteau de haricots vapeur avec bâton de manioc',
      price: '2 500',
      category: 'Spécialités',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop'
    },
    {
      name: 'Poisson Braisé',
      description: 'Poisson frais braisé avec attiéké et piment',
      price: '3 500',
      category: 'Grillades',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop'
    },
    {
      name: 'Sanga avec Bobolo',
      description: 'Maïs pilé avec légumes et viande',
      price: '3 200',
      category: 'Plats Traditionnels',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop'
    }
  ]

  const handleReservation = () => {
    const message = encodeURIComponent('Bonjour, je souhaite réserver une table au restaurant Saveurs du Cameroun.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleOrder = (platName: string) => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander : ${platName}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-red-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <ChefHat className="w-8 h-8" />
              Saveurs du Cameroun
            </h1>
            <button
              onClick={handleReservation}
              className="hidden md:flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Réserver
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Authenticité Camerounaise
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Découvrez les saveurs traditionnelles du Cameroun dans une ambiance chaleureuse
            </p>
            <button
              onClick={handleReservation}
              className="bg-gradient-to-r from-green-600 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Réserver une Table
            </button>
          </motion.div>
        </div>
      </section>

      {/* Badge Demo */}
      <div className="bg-blue-600 text-white text-center py-3">
        <p className="text-sm font-semibold">
          🍽️ Projet de démonstration - Site Restaurant
        </p>
      </div>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Horaires</h3>
              <p className="text-gray-600">Lun - Sam: 11h - 22h</p>
              <p className="text-gray-600">Dimanche: 12h - 21h</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Localisation</h3>
              <p className="text-gray-600">Akwa, Douala</p>
              <p className="text-gray-600">Cameroun</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Contact</h3>
              <p className="text-gray-600">+237 676 04 39 68</p>
              <p className="text-gray-600">WhatsApp disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Notre Menu</h3>
              <p className="text-xl text-gray-600">Plats traditionnels préparés avec amour</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plats.map((plat, index) => (
              <motion.div
                key={plat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${plat.image})` }}
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plat.category}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{plat.name}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{plat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{plat.price} FCFA</span>
                    <button
                      onClick={() => handleOrder(plat.name)}
                      className="bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Commander
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Utensils className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">Réservez Votre Table</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Une expérience culinaire authentique vous attend. Contactez-nous sur WhatsApp pour réserver.
          </p>
          <button
            onClick={handleReservation}
            className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            Réserver Maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <ChefHat className="w-6 h-6" />
            Saveurs du Cameroun
          </h3>
          <p className="text-gray-400 mb-4">Restaurant traditionnel camerounais</p>
          <p className="text-sm text-gray-500 mb-4">
            © 2024 Saveurs du Cameroun. Projet de démonstration créé par Junior Koloko
          </p>
          <Link href="/" className="inline-block text-green-400 hover:text-green-300 transition-colors">
            ← Retour au portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default RestaurantPage
