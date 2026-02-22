import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const technicalSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'GSAP', level: 80 },
    { name: 'Framer Motion', level: 85 },
  ]

  const designSkills = [
    { name: 'UI/UX Design', level: 88 },
    { name: 'Figma', level: 82 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Wireframing', level: 78 },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 bg-primary-dark"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent-indigo/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
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
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-clash mt-3">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-clash mb-6 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-gradient-to-b from-accent-indigo to-accent-purple" />
              Technical Skills
            </h3>
            
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>

          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-clash mb-6 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-gradient-to-b from-accent-purple to-accent-cyan" />
              Design Skills
            </h3>
            
            {designSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
                isInView={isInView}
                isDesign
              />
            ))}
          </motion.div>
        </div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Frontend', value: '90%', color: 'from-accent-indigo to-accent-purple' },
              { label: 'Backend', value: '40%', color: 'from-accent-purple to-accent-cyan' },
              { label: 'Design', value: '85%', color: 'from-accent-cyan to-accent-indigo' },
              { label: 'Tools', value: '75%', color: 'from-accent-indigo to-accent-cyan' },
            ].map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="relative p-6 rounded-2xl glass text-center group hover:scale-105 transition-transform"
              >
                <div className={`text-4xl font-bold font-clash bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.value}
                </div>
                <div className="text-text-secondary mt-2 font-satoshi">{category.label}</div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SkillBar = ({ name, level, index, isInView, isDesign = false }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-satoshi text-text-primary">{name}</span>
        <span className="text-text-secondary font-mono text-sm">{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-glass-bg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full ${
            isDesign
              ? 'bg-gradient-to-r from-accent-purple to-accent-cyan'
              : 'bg-gradient-to-r from-accent-indigo to-accent-purple'
          }`}
        />
      </div>
    </div>
  )
}

export default Skills
