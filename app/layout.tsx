import type { Metadata } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/LanguageContext'

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Junior Koloko — Développeur Web à Douala',
  description: 'Sites vitrines, boutiques et applications pour les entrepreneurs et PME du Cameroun. Un design clair, une livraison rapide, un site qui donne envie de vous contacter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${dm.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
