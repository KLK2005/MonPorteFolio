'use client'

import { Code2, Mail } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const whatsappNumber = '237676043968'
  const email = 'juniorkoloko4@gmail.com'
  const linkedin = 'https://www.linkedin.com/in/junior-koloko-592841319/'
  const github = 'https://github.com/KLK2005'

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-8 h-8" />
                <span className="text-2xl font-bold">
                  Junior<span className="text-silver-300">Koloko</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Développeur Web Full Stack professionnel à Douala.
              </p>
              <p className="text-gray-500 text-xs">
                📍 Douala, Cameroun
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Accueil', href: '#accueil' },
                  { label: 'À Propos', href: '#apropos' },
                  { label: 'Projets', href: '#projets' },
                  { label: 'Tarifs', href: '#tarifs' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sites E-commerce</li>
                <li>Landing Pages</li>
                <li>Sites Vitrines</li>
                <li>Applications Web</li>
                <li>Refonte de Sites</li>
              </ul>
            </div>

            {/* Contact rapide */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Rapide</h3>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Image 
                    src="/images/icons8_whatsapp_48px_1.png" 
                    alt="WhatsApp" 
                    width={16} 
                    height={16}
                    className="object-contain"
                  />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Image 
                    src="/images/icons8_linkedin_48px.png" 
                    alt="LinkedIn" 
                    width={16} 
                    height={16}
                    className="object-contain"
                  />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors text-sm"
                >
                  <Image 
                    src="/images/icons8_github_30px.png" 
                    alt="GitHub" 
                    width={16} 
                    height={16}
                    className="object-contain"
                  />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} Junior Koloko • Développeur Web Full Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
