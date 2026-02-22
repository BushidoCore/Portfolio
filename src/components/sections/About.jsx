import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

// Correct import path based on your folder structure (src/accets/Me.jpg)
import meImg from '../../accets/Me(pr).webp';

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const stats = [
    { label: 'Years Experience', value: '1+', suffix: '' },
    { label: 'Projects Completed', value: '10+', suffix: '' },
    { label: 'Happy Clients', value: '5+', suffix: '' },
  ]

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
    { name: 'CSS', icon: FaCss3, color: '#1572b6' },
    { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
    { name: 'React', icon: FaReact, color: '#61dafb' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'Figma', icon: FaFigma, color: '#f24e1e' },
  ]

  const languages = ['English', 'Tamil',]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-primary-bg"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent-cyan font-mono text-sm uppercase tracking-widest">
          About Me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-clash mt-3">
          Know Me <span className="gradient-text">Better</span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              
              {/* REMOVED THE GRADIENT BORDER DIV THAT WAS HERE */}
              
              {/* Image Container - Updated to fill full space (inset-0) */}
              <div className="absolute inset-0 rounded-3xl bg-primary-bg overflow-hidden border border-white/10 shadow-2xl">
                <img 
                    src={meImg} 
                    alt="My Profile" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                />
              </div>
              
              {/* Floating React Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass flex items-center justify-center border border-white/10 shadow-lg z-10"
              >
                <FaReact className="text-3xl text-accent-cyan" />
              </motion.div>

              {/* Floating Tailwind Icon */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/10 shadow-lg z-10"
              >
                <SiTailwindcss className="text-2xl text-accent-indigo" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Summary */}
            <div>
              <h3 className="text-2xl font-bold font-clash mb-4">
                Passionate Frontend Developer
              </h3>
              <p className="text-text-secondary font-satoshi leading-relaxed">
                I'm a motivated junior frontend developer with a strong foundation in building 
                responsive, user-friendly web applications. I love creating intuitive digital 
                experiences and am constantly learning new technologies to stay up-to-date with 
                modern web development trends. My goal is to craft beautiful, functional websites 
                that leave a lasting impression.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold font-satoshi mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0 + index * 0.1 }}
                    className="px-4 py-2 rounded-full glass flex items-center gap-2 border border-white/5"
                    whileHover={{ scale: 1.05, borderColor: skill.color }}
                  >
                    <skill.icon style={{ color: skill.color }} />
                    <span className="text-sm font-satoshi">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-lg font-semibold font-satoshi mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 rounded-full glass text-text-secondary text-sm font-satoshi border border-white/5"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl glass border border-white/5"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1, type: 'spring' }}
                    className="text-3xl font-bold gradient-text font-clash"
                  >
                    {stat.value}
                  </motion.span>
                  <p className="text-text-secondary text-xs mt-1 font-satoshi">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About