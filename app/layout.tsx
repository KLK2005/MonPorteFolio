import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Développeur Web Full Stack Freelance - Création de Sites Professionnels',
  description: 'Développeur web Full Stack indépendant spécialisé dans la création de sites vitrines, landing pages, et boutiques en ligne. Services professionnels pour entrepreneurs et entreprises.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
