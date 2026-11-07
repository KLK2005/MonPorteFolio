'use client'

import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  const whatsappNumber = '237676043968'
  const whatsappMessage = encodeURIComponent(t('hero.whatsapp.message') || 'Bonjour, je souhaite discuter de mon projet web.')

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,163,90,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(27,44,68,0.9),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Texte gauche - fade in depuis la gauche */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-gold/30 px-5 py-2.5 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-gold-light tracking-wide">
                  {t('hero.greeting')}
                </span>
              </div>

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-gold font-semibold">
                  {t('hero.kicker')}
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] text-white">
                  {t('hero.title')}
                </h1>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gold leading-tight">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg sm:text-xl text-stone-soft leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {t('hero.description')}
                </p>
              </div>

              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-2">
                {[
                  { value: '15+', label: t('hero.stats.projects') || 'Projets réalisés' },
                  { value: '10+', label: t('hero.stats.clients') || 'Clients satisfaits' },
                  { value: '2+', label: t('hero.stats.experience') || 'Ans d\'expérience' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-stone-soft font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 rounded-full font-semibold text-base shadow-gold hover:bg-gold-light transition-all"
                >
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#projets"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-gold/60 hover:text-gold-light transition-all"
                >
                  {t('hero.portfolio')}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Photo droite - float doux */}
            <div className="lg:col-span-5 relative animate-float">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-6 bg-gold/20 rounded-[2.5rem] blur-3xl" />
                <div className="relative z-10">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-gold/30 bg-ink-mid shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Junior Koloko - Développeur Web Full Stack"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 bg-ink/70 backdrop-blur-xl border border-gold/25 rounded-2xl p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-left">
                          <h3 className="text-white font-semibold text-lg">Junior Koloko</h3>
                          <p className="text-gold-light text-sm">Full Stack · Douala</p>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-400/15 border border-emerald-400/30 px-3 py-1.5 rounded-full">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          <span className="text-emerald-200 text-xs font-semibold">Disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-2 bg-ink border border-gold/40 text-gold-light px-4 py-2 rounded-full text-sm font-medium shadow-xl">
                    Douala, Cameroun
                  </div>
                  <div className="absolute -bottom-4 -left-2 bg-gold text-ink px-4 py-2 rounded-full text-sm font-semibold shadow-gold">
                    15+ projets livrés
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
