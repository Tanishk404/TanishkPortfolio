import React from 'react'
import { motion } from 'framer-motion'
import { Github, Play } from 'lucide-react'
import Netflix from '../images/NetFlix.png'
import AirBnbImage from '../images/AirBnb.png'
import SundownImage from '../images/Sundown.png'
import PortfolioImage from '../images/Portfolio.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Airbnb Clone (Full Stack)',
      description: 'Full-stack Airbnb-style platform with listings, auth, and hosting tools.',
      tech: ['EJS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mapbox', 'Cloudinary', 'Passport'],
      image: AirBnbImage,
      github: 'https://github.com/Tanishk405/AirBnb-Clone/tree/main',
      demo: 'https://air-bnb-clone-syac.vercel.app/',
    
    },
    {
      id: 2,
      title: 'Interactive Web Dashboard',
      description: 'A modern web dashboard website with HTML, CSS, and JavaScript animations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: SundownImage,
      github: 'https://github.com/Tanishk405/Sundown',
      demo: 'https://sundown-swart.vercel.app/',
   
    },
    {
      id: 3,
      title: 'Netflix Clone',
      description: 'Netflix clone for watching movies and tv shows trailers',
      tech: ['React Js', 'Vite', 'Bootstrap CSS', 'Axios', 'Firebase'],
      image: Netflix,
      github: '#',
      demo: 'https://gorgeous-salmiakki-ad1dab.netlify.app/',
     
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio with theme toggle, motion, and EmailJS contact.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      image: PortfolioImage,
      github: 'https://github.com/Tanishk405/portfolio-ps5',
      demo: '#',
      featured: false
    }
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
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>
        <p className="text-gray-400 dark:text-gray-400 mb-8" style={{ color: 'var(--ps5-text-secondary)' }}>Some of my recent work</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="ps5-card overflow-hidden group"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold rounded-full">
                    Featured
                  </span>
                </div>
              )}
              
              <div className="ps5-project-image-wrapper relative overflow-hidden flex items-center justify-center bg-black/30">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="ps5-project-image w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--ps5-text)' }}>{project.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--ps5-text-secondary)' }}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-800 dark:bg-gray-800 text-xs rounded"
                      style={{ 
                        backgroundColor: 'var(--ps5-card)',
                        color: 'var(--ps5-text)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                    style={{ 
                      backgroundColor: 'var(--ps5-card)',
                      color: 'var(--ps5-text)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--ps5-card-hover)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--ps5-card)'
                    }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white"
                  >
                    <Play className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

