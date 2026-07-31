import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Workshops from './components/Workshops'
import Skills from './components/Skills'
import Research from './components/Research'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Workshops />
        <Skills />
        <Research />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
