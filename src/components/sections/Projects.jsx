import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase } from 'react-icons/si'

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Chatly',
      subtitle: 'Chat App UI Prototype',
      description: 'A modern chat application UI prototype featuring real-time messaging interface, responsive design, and smooth animations. Built with React and TailwindCSS.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop',
      tags: ['React', 'TailwindCSS', 'Framer Motion'],
      category: 'web',
      liveLink: '#',
      githubLink: '#',
      features: ['Real-time UI', 'Responsive Design', 'Smooth Animations', 'Modern UI/UX']
    },
    {
      id: 2,
      title: 'Portfolio',
      subtitle: 'Personal Portfolio Website',
      description: 'A premium, animation-heavy portfolio website showcasing projects and skills with glassmorphism, smooth transitions, and parallax effects.',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop',
      tags: ['React', 'TailwindCSS', 'GSAP', 'Framer Motion'],
      category: 'web',
      liveLink: '#',
      githubLink: '#',
      features: ['Dark Premium Design', 'Scroll Animations', 'Glassmorphism', 'Responsive']
    },
    {
      id: 3,
      title: 'Interactive Cards',
      subtitle: 'Animated Card Components',
      description: 'A collection of interactive and animated card components with 3D tilt effects, hover animations, and modern design patterns.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'ui',
      liveLink: '#',
      githubLink: '#',
      features: ['3D Tilt Effect', 'Hover Animations', 'Micro-interactions', 'Accessible']
    },
    {
      id: 4,
      title: 'E-Commerce UI',
      subtitle: 'Modern Shop Interface',
      description: 'A modern e-commerce user interface with product listings, shopping cart functionality, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'TailwindCSS'],
      category: 'web',
      liveLink: '#',
      githubLink: '#',
      features: ['Product Catalog', 'Cart System', 'Modern UI', 'API Integration']
    },
    {
      id: 5,
      title: 'Dashboard',
      subtitle: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with data visualization, charts, and real-time data updates for business insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'Chart.js', 'TailwindCSS'],
      category: 'web',
      liveLink: '#',
      githubLink: '#',
      features: ['Data Visualization', 'Real-time Updates', 'Responsive Layout', 'Dark Mode']
    },
    {
      id: 6,
      title: 'Weather App',
      subtitle: 'Weather Forecast UI',
      description: 'A beautiful weather application with location-based forecasts, animated weather icons, and detailed meteorological data.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      tags: ['JavaScript', 'Weather API', 'CSS'],
      category: 'ui',
      liveLink: '#',
      githubLink: '#',
      features: ['Live Weather Data', 'Location Services', 'Animated Icons', '5-Day Forecast']
    },
  ]

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web Apps', value: 'web' },
    { name: 'UI Design', value: 'ui' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 bg-primary-bg"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan font-mono text-sm uppercase tracking-widest">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-clash mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-satoshi transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-accent-indigo to-accent-purple text-white'
                  : 'glass text-text-secondary hover:text-text-primary'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

const ProjectCard = ({ project, index, isInView, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Card */}
      <div className="relative rounded-2xl overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent"
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-accent-cyan text-sm font-mono">{project.subtitle}</span>
            <h3 className="text-xl font-bold font-clash mt-1">{project.title}</h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md glass text-text-secondary">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
              >
                <FiExternalLink />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
              >
                <FiGithub />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Gradient border on hover */}
        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary-bg/90 backdrop-blur-lg" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-strong p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent-indigo/20 transition-colors"
        >
          <FiX size={20} />
        </button>

        {/* Image */}
        <div className="aspect-video rounded-xl overflow-hidden mb-6">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <span className="text-accent-cyan text-sm font-mono">{project.subtitle}</span>
        <h3 className="text-2xl font-bold font-clash mt-1 mb-4">{project.title}</h3>
        <p className="text-text-secondary font-satoshi mb-6">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-text-secondary text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full glass text-text-secondary">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-gradient-to-r from-accent-indigo to-accent-purple rounded-xl text-center font-satoshi font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Live
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 glass rounded-xl text-center font-satoshi font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub className="inline mr-2" />
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
