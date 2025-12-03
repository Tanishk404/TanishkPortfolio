import React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Rocket, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const menuItems = [
    {
      title: 'Web Development',
      icon: Code,
      description: 'Creating modern web applications with cutting-edge technologies',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Performance',
      icon: Zap,
      description: 'Optimized code for lightning-fast user experiences',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Innovation',
      icon: Rocket,
      description: 'Pushing boundaries with creative solutions',
      gradient: 'from-pink-600 to-orange-600'
    },
    {
      title: 'Clean Code',
      icon: Terminal,
      description: 'Maintainable and scalable code architecture',
      gradient: 'from-orange-600 to-yellow-600'
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
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tanishk
          </h1>
          <p className="text-xl text-gray-400 mb-6">I'm a Full Stack Developer specializing in JavaScript and React.js, delivering complete, scalable full-stack web applications.</p>
          <Link to="/projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ps5-button inline-block"
            >
              Explore My Work
            </motion.div>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="ps5-card p-6 cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="ps5-card p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Coding Experience', value: '2 Year' },
            { label: 'Projects', value: '4+' },
            { label: 'Skills', value: '6+' },
            { label: 'Location', value: 'India' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-4 bg-gray-800 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-500 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home

