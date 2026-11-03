'use client'

import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'
import { Moon, Sun, Languages } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeLanguageToggle = () => {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Éviter l'hydratation mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {/* Toggle Langue */}
      <button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-silver-200 dark:bg-gray-700 hover:bg-silver-300 dark:hover:bg-gray-600 transition-all duration-300"
        aria-label="Toggle language"
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-bold uppercase">{language}</span>
      </button>

      {/* Toggle Thème */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-full bg-silver-200 dark:bg-gray-700 hover:bg-silver-300 dark:hover:bg-gray-600 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>
    </div>
  )
}

export default ThemeLanguageToggle
