import { useEffect, useRef } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Education from '../components/sections/Education'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}

export default Home
