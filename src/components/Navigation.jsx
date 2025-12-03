import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, User, FolderOpen, Mail, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navigation = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="ps5-nav"
    >
      <div className="nav-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="nav-brand-wrapper"
        >
          <Link to="/" className="nav-brand">
            <span className="nav-brand-badge">TK</span>
            <div className="nav-brand-text">
              <span className="nav-brand-name">Tanishk</span>
              <span className="nav-brand-tagline">Full Stack Dev</span>
            </div>
          </Link>
        </motion.div>

        <div className="nav-menu">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link key={item.path} to={item.path} className="nav-link-wrapper">
                <motion.div
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="nav-active-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                  <div className="nav-icon-wrapper">
                    <Icon className="nav-icon" />
                  </div>
                  <span className="nav-label">{item.label}</span>
                  {isActive && <div className="nav-glow" />}
                </motion.div>
              </Link>
            )
          })}
          
          {/* Theme Toggle Button */}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="theme-icon" />
            ) : (
              <Moon className="theme-icon" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

