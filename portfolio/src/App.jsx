import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Journey from './components/Journey.jsx'
import Leadership from './components/Leadership.jsx'
import Project from './components/Project.jsx'
import Community from './components/Community.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Beyond from './components/Beyond.jsx'
import Next from './components/Next.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-wine focus:px-4 focus:py-2 focus:text-cream">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Leadership />
        <Project />
        <Community />
        <Skills />
        <Education />
        <Beyond />
        <Next />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
