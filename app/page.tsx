import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
