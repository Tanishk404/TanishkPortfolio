import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [showName, setShowName] = useState(false)
  const [showProgress, setShowProgress] = useState(false)
  const [particles, setParticles] = useState([])

  // Generate golden sprinkles particles with more variety
  useEffect(() => {
    const particleCount = 120
    const newParticles = []
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 1.5,
        duration: Math.random() * 25 + 12,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.2,
        xOffset: (Math.random() - 0.5) * 15,
        yOffset: Math.random() * 30 + 10
      })
    }
    
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    // Show name after a short delay
    setTimeout(() => setShowName(true), 300)
    
    // Show progress bar after name appears
    setTimeout(() => setShowProgress(true), 800)
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 600)
          return 100
        }
        // Slower progression at start, faster in middle, slow at end (like PS5)
        let increment = 1.5
        if (prev < 30) {
          increment = 0.8
        } else if (prev > 70) {
          increment = 0.5
        }
        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="ps5-loading-screen"
    >
      {/* Blue Gaming Particles */}
      <div className="sprinkles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="sprinkle-particle"
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [`${particle.y}vh`, `${particle.y - particle.yOffset}vh`, `${particle.y}vh`],
              x: [`${particle.x}vw`, `${particle.x + particle.xOffset}vw`, `${particle.x}vw`],
              opacity: [0, particle.opacity, 0],
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Gaming Logo/Brand Area */}
      <div className="loading-brand">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="loading-logo"
        >
          <div className="logo-circle"></div>
          <div className="logo-circle-glow"></div>
          <div className="logo-text">TK</div>
          <div className="logo-border"></div>
        </motion.div>
      </div>

      {/* Gaming Scanlines Effect */}
      <div className="scanlines"></div>
      
      {/* Corner Accents */}
      <div className="corner-accent top-left"></div>
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      <div className="corner-accent bottom-right"></div>

      <div className="loading-container">
        <AnimatePresence>
          {showName && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="loading-name"
            >
              <span className="name-text">TANISHK</span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showProgress && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="loading-progress-container"
            >
              <div className="loading-progress-bar">
                <motion.div
                  className="loading-progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                <div className="progress-glow"></div>
              </div>
              <div className="loading-progress-text">
                <span className="progress-label">LOADING</span>
                <span className="progress-percent">{Math.round(progress)}%</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="loading-dots-container">
          <motion.span
            className="loading-dot"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
          />
          <motion.span
            className="loading-dot"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.span
            className="loading-dot"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

