import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Download, MessageCircle, Code, Database, Layers, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import img from '../images/Pf.png'
import resumePDF from '../images/Tanishk_Rajput_Resume.pdf'

const About = () => {
  // Skill icon mapping with colorful icons from Skill Icons API
  const getSkillIcon = (name) => {
    // Using Skill Icons API which provides colorful icons
    const iconNameMap = {
      'Python': 'python',
      'JavaScript': 'js',
      'HTML5': 'html',
      'CSS3': 'css',
      'React Js': 'react',
      'Node.js': 'nodejs',
      'Express.js': 'express',
      'MongoDB': 'mongodb',
      'MySQL': 'mysql',
      'Tailwind CSS': 'tailwind',
      'Bootstrap': 'bootstrap',
      'VS Code': 'vscode',
      'Git': 'git',
      'GitHub': 'github',
      'Chrome DevTools': 'chrome',
      'npm': 'npm',
      'Vite': 'vite',
      'Vercel': 'vercel',
      'Netlify': 'netlify'
    }
    
    const iconName = iconNameMap[name] || 'code'
    // Get theme from document
    const theme = document.documentElement.getAttribute('data-theme') || 'dark'
    
    // Use Skill Icons API with colorful icons
    return `https://skillicons.dev/icons?i=${iconName}&theme=${theme === 'light' ? 'light' : 'dark'}`
  }
  
  // Alternative: Use Devicons CDN for colorful icons (fallback)
  const getSkillIconDevicon = (name) => {
    const deviconMap = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'React Js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Chrome DevTools': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
      'npm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg'
    }
    return deviconMap[name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg'
  }
  
  // Check if icon should be white (for Express.js)
  const isWhiteIcon = (name) => {
    return name === 'Express.js'
  }
  
  // Get icon color based on skill name (for hover effects)
  const getIconColor = (name) => {
    const colorMap = {
      'Python': '#3776AB',
      'JavaScript': '#F7DF1E',
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'React Js': '#61DAFB',
      'Node.js': '#339933',
      'Express.js': '#000000',
      'MongoDB': '#47A248',
      'MySQL': '#4479A1',
      'Tailwind CSS': '#06B6D4',
      'Bootstrap': '#7952B3',
      'VS Code': '#007ACC',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Chrome DevTools': '#4285F4',
      'npm': '#CB3837',
      'Vite': '#646CFF',
      'Vercel': '#000000',
      'Netlify': '#00C7B7'
    }
    return colorMap[name] || '#0070f3'
  }

  // Skills organized by category
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: [
        { name: 'React Js', level: 70 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 72 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'MySQL', level: 65 }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'VS Code', level: 85 },
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 80 },
        { name: 'Chrome DevTools', level: 75 },
        { name: 'npm', level: 80 },
        { name: 'Vite', level: 70 },
        { name: 'Vercel', level: 70 },
        { name: 'Netlify', level: 70 }
      ]
    }
  ]

  const details = [
    { icon: Mail, label: 'Email', value: 'dtanish2580@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'India' },
    { icon: Clock, label: 'Coding Experience', value: '2 Year' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="ps5-page"
    >
      <div className="ps5-card p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="profile-image-wrapper"
          >
            <div className="profile-image-container">
              <img 
                src={img} 
                alt="Tanishk"
                className="profile-image"
              />
              <div className="profile-image-glow"></div>
            </div>
          </motion.div>
          
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h1>
            <h2 className="text-2xl font-semibold mb-6 about-subtitle">Full Stack Developer</h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg about-text mb-4">
                I'm a Full Stack Developer specializing in JavaScript and React.js, delivering complete, scalable full-stack web applications.
              </p>
              <p className="text-lg about-text">
                My expertise includes building responsive web applications, desktop GUIs with Bootstrap CSS and JavaScript, and implementing modern front-end designs with interactive elements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {details.map((detail, index) => {
                const Icon = detail.icon
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-gray-800 rounded-lg"
                  >
                    <Icon className="w-5 h-5 text-blue-500 mb-2" />
                    <div className="text-sm text-gray-400">{detail.label}</div>
                    <div className="font-medium">{detail.value}</div>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex gap-4 mt-6">
              <motion.a
                href={resumePDF}
                download="Tanishk_Rajput_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ps5-button"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ps5-button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Me
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="ps5-card p-6"
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--ps5-text)' }}>Technical Skills</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + categoryIndex * 0.15 }}
                className="skill-category"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <CategoryIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--ps5-text)' }}>{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + categoryIndex * 0.15 + skillIndex * 0.08 }}
                      className="skill-item"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div 
                            className="skill-icon-wrapper"
                            style={{ 
                              '--icon-color': getIconColor(skill.name)
                            }}
                          >
                            <img 
                              src={getSkillIconDevicon(skill.name)} 
                              alt={skill.name}
                              className={`skill-icon ${isWhiteIcon(skill.name) ? 'skill-icon-white' : ''}`}
                              loading="lazy"
                              onError={(e) => {
                                // Try Skill Icons API as fallback
                                const skillIconUrl = getSkillIcon(skill.name)
                                if (e.target.src !== skillIconUrl) {
                                  e.target.src = skillIconUrl
                                } else {
                                  e.target.style.display = 'none'
                                  const fallback = e.target.nextElementSibling
                                  if (fallback) fallback.style.display = 'block'
                                }
                              }}
                            />
                            <span className="skill-icon-fallback" style={{ display: 'none' }}>💻</span>
                          </div>
                          <span className="text-sm font-medium" style={{ color: 'var(--ps5-text)' }}>{skill.name}</span>
                        </div>
                        <span className="text-sm" style={{ color: 'var(--ps5-text-secondary)' }}>{skill.level}%</span>
                      </div>
                      <div className="w-full rounded-full h-2.5" style={{ backgroundColor: 'var(--ps5-card)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: 0.8 + categoryIndex * 0.15 + skillIndex * 0.08, 
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full skill-progress"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About

