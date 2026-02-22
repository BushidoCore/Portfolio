import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { FiArrowDown, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import MagneticCursor from '../ui/MagneticCursor'

const Hero = () => {
  const heroRef = useRef(null)
  const shapesRef = useRef([])

  useEffect(() => {
    // Animate floating shapes
    shapesRef.current.forEach((shape, index) => {
      if (shape) {
        gsap.to(shape, {
          y: 'random(-30, 30)',
          x: 'random(-20, 20)',
          rotation: 'random(-10, 10)',
          duration: 'random(3, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        })
      }
    })
  }, [])

  const nameLetters = "Adhithya K".split('')
  const role = "Junior Frontend Developer"
  const tagline = "Building responsive UI & creative digital experiences"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            ref={el => shapesRef.current[index] = el}
            className={`absolute rounded-full opacity-20 ${
              index % 2 === 0 ? 'bg-accent-indigo' : 'bg-accent-purple'
            }`}
            style={{
              width: index === 0 ? '300px' : index === 1 ? '200px' : index === 2 ? '150px' : '100px',
              height: index === 0 ? '300px' : index === 1 ? '200px' : index === 2 ? '150px' : '100px',
              left: `${10 + index * 15}%`,
              top: `${20 + index * 10}%`,
              filter: 'blur(40px)'
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Social Links - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex flex-col gap-4 fixed left-8 top-1/2 -translate-y-1/2"
        >
          {[
            { icon: FaGithub, href: 'https://github.com' },
            { icon: FaLinkedin, href: 'https://linkedin.com' },
            { icon: FaInstagram, href: 'https://instagram.com' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent-cyan font-mono text-lg mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name with letter animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-clash mb-4 overflow-hidden">
            <motion.span className="inline-flex">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={letter === ' ' ? 'w-4 md:w-8' : ''}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Role with typewriter effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-satoshi mb-6"
          >
            {role.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.03, delay: 1.5 + index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 font-satoshi"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-accent-indigo to-accent-purple rounded-full text-white font-semibold font-satoshi relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-4 glass rounded-full text-text-primary font-semibold font-satoshi border border-glass-border hover:border-accent-indigo transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-secondary"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <FiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-bg to-transparent" />
    </section>
  )
}

export default Hero
