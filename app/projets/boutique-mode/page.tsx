'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Search, Heart, Star, MessageCircle, Truck, Shield, Award, TrendingUp, User } from 'lucide-react'
import { useState } from 'react'

const BoutiqueMode = () => {
  const whatsappNumber = '237676043968'
  const [activeCategory, setActiveCategory] = useState('Tous')

  const categories = ['Tous', 'Femme', 'Homme', 'Enfants', 'Accessoires', 'Nouveautés']

  const products = [
    {
      id: 1,
      name: 'Robe Ankara Premium',
      price: '45 000',
      oldPrice: '55 000',
      category: 'Femme',
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop',
      rating: 5,
      badge: 'Bestseller',
      stock: 'En stock'
    },
    {
      id: 2,
      name: 'Costume Traditionnel Prestige',
      price: '65 000',
      oldPrice: '80 000',
      category: 'Homme',
      image: 'https://images.unsplash.com/photo-1622519407650-3df9883f76a6?w=600&h=800&fit=crop',
      rating: 5,
      badge: 'Premium',
      stock: 'En stock'
    },
    {
      id: 3,
      name: 'Ensemble Enfant Wax',
      price: '25 000',
      category: 'Enfants',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=800&fit=crop',
      rating: 5,
      badge: 'Nouveau',
      stock: 'En stock'
    },
    {
      id: 4,
      name: 'Sac à Main Artisanal',
      price: '18 000',
      oldPrice: '22 000',
      category: 'Accessoires',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop',
      rating: 5,
      stock: 'En stock'
    },
    {
      id: 5,
      name: 'Chemise Wax Deluxe',
      price: '32 000',
      category: 'Homme',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop',
      rating: 4,
      badge: 'Tendance',
      stock: 'En stock'
    },
    {
      id: 6,
      name: 'Jupe Ankara Moderne',
      price: '28 000',
      category: 'Femme',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop',
      rating: 5,
      stock: 'En stock'
    },
    {
      id: 7,
      name: 'Bijoux Ethniques Premium',
      price: '15 000',
      category: 'Accessoires',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      rating: 5,
      badge: 'Artisanal',
      stock: 'Limité'
    },
    {
      id: 8,
      name: 'Robe de Soirée Élégante',
      price: '75 000',
      oldPrice: '95 000',
      category: 'Femme',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop',
      rating: 5,
      badge: 'Exclusif',
      stock: 'En stock'
    }
  ]

  const filteredProducts = activeCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const handleOrder = (productName: string, price: string) => {
    const message = encodeURIComponent(
      `Bonjour AFRIK STYLE 👋\n\nJe souhaite commander :\n📦 ${productName}\n💰 Prix : ${price} FCFA\n\nMerci de me contacter.`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center py-2 text-sm">
        🎉 PROMO : -20% sur toute la collection avec le code AFRIK20
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm hidden sm:inline">Portfolio</span>
            </Link>
            
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                AFRIK STYLE
              </h1>
              <p className="text-xs text-gray-600">Mode Africaine Premium</p>
            </div>
            
            <div className="flex gap-3">
              <button className="hover:scale-110 transition-transform">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="hover:scale-110 transition-transform relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ Collection Automne 2024
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                L'Élégance<br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Africaine
                </span>
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Découvrez notre collection exclusive de vêtements wax et ankara, alliant tradition et modernité
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#produits"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 shadow-2xl"
                >
                  Découvrir la Collection
                </a>
                <button
                  onClick={() => handleOrder('Catalogue complet', 'Variable')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Commander sur WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Livraison Rapide', desc: 'Douala & Yaoundé' },
              { icon: Shield, title: 'Paiement Sécurisé', desc: 'Mobile Money' },
              { icon: Award, title: 'Qualité Premium', desc: 'Tissus authentiques' },
              { icon: MessageCircle, title: 'Service Client', desc: '7j/7 sur WhatsApp' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-3">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge Demo */}
      <div className="bg-blue-600 text-white text-center py-3 shadow-lg">
        <p className="text-sm font-semibold">
          🎨 Projet de démonstration E-commerce - Réalisé par Junior Koloko
        </p>
      </div>

      {/* Categories */}
      <section id="produits" className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Notre Collection</h3>
            <p className="text-xl text-gray-600">{filteredProducts.length} produits disponibles</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-96 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.badge}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-50 transition-all shadow-lg">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-600" />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.stock}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.rating}.0)</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h4>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <span className="text-sm text-gray-900">FCFA</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleOrder(product.name, product.price)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Commander
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">Rejoignez Notre Communauté</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Recevez en avant-première nos nouvelles collections et offres exclusives
          </p>
          <button
            onClick={() => handleOrder('Inscription newsletter', '0')}
            className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-2xl"
          >
            <MessageCircle className="w-6 h-6" />
            S'inscrire via WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                AFRIK STYLE
              </h3>
              <p className="text-gray-400 text-sm">
                Votre boutique de référence pour la mode africaine authentique au Cameroun
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-400">Accueil</a></li>
                <li><a href="#produits" className="hover:text-orange-400">Produits</a></li>
                <li><a href="#" className="hover:text-orange-400">Collections</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Service Client</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-400">Livraison</a></li>
                <li><a href="#" className="hover:text-orange-400">Retours</a></li>
                <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-gray-400 mb-2">Douala & Yaoundé, Cameroun</p>
              <p className="text-sm text-gray-400">WhatsApp: +237 676 04 39 68</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 AFRIK STYLE - Projet de démonstration créé par Junior Koloko
            </p>
            <Link href="/" className="inline-block mt-4 text-orange-400 hover:text-orange-300 transition-colors">
              ← Retour au portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BoutiqueMode
