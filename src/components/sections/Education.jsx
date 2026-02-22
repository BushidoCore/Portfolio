import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Education = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const education = [
    {
      id: 1,
      degree: 'BE Computer Science Engineering',
      institution: 'University of Technology',
      year: '2022 - 2026',
      status: 'Present',
      description: 'Focusing on software development, algorithms, and web technologies. Active member of the coding club.',
      achievements: ['Dean\'s List', 'Hackathon Winner', 'Coding Club Lead']
    },
    {
      id: 2,
      degree: 'Higher Secondary Education',
      institution: 'National Higher Secondary School',
      year: '2020 - 2022',
      status: 'Completed',
      description: 'Science stream with Computer Science as major. Graduated with distinction in Mathematics and Physics.',
      achievements: ['Top Performer', 'Science Fair Winner']
    },
    {
      id: 3,
      degree: 'Secondary School Education',
      institution: 'St. Mary\'s Matriculation School',
      year: '2010 - 2020',
      status: 'Completed',
      description: 'Strong academic foundation with emphasis on analytical skills and extracurricular activities.',
      achievements: ['Academic Excellence Award', 'Sports Captain']
    }
  ]

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 bg-primary-dark"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />
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
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-clash mt-3">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-indigo via-accent-purple to-accent-cyan transform md:-translate-x-1/2"
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ item, index, isInView, isLeft }) => {
  return (
    <div className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
        className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-accent-indigo to-accent-purple transform -translate-x-1/2 z-10"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div className="absolute inset-0 rounded-full bg-accent-indigo animate-ping opacity-20" />
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
      >
        <div className="relative p-6 rounded-2xl glass group hover:scale-[1.02] transition-transform duration-300">
          {/* Year badge */}
          <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-accent-indigo to-accent-purple text-white text-xs font-semibold font-satoshi">
            {item.status}
          </div>

          {/* Year (left side for desktop) */}
          <div className="hidden md:block absolute top-6 text-6xl font-bold font-clash text-text-primary/5 -left-2">
            {item.year.split(' - ')[0]}
          </div>

          <h3 className="text-xl font-bold font-clash mt-2">
            {item.degree}
          </h3>
          <p className="text-accent-cyan font-satoshi mt-1">{item.institution}</p>
          <p className="text-text-secondary text-sm font-satoshi mt-1">{item.year}</p>
          
          <p className="text-text-secondary font-satoshi mt-4 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Achievements */}
          <div className="flex flex-wrap gap-2 mt-4">
            {item.achievements.map((achievement, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full glass text-text-secondary"
              >
                {achievement}
              </span>
            ))}
          </div>

          {/* Hover gradient border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>
      </motion.div>

      {/* Empty space for the other side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  )
}

export default Education
