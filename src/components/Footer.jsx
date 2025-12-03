import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ps5-footer"
    >
      <div className="footer-container">
        <div>
          <div className="footer-title">Connect with me</div>
          <p className="footer-text">
            Let&apos;s collaborate or just say hi. I&apos;m active on GitHub and LinkedIn.
          </p>
        </div>
        <div className="footer-links">
          <motion.a
            href="https://github.com/Tanishk404"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="footer-link-icon" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tanishk-rajput-312540365/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="footer-link-icon" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Tanishk Rajput. All rights reserved.</div>
    </motion.footer>
  )
}

export default Footer

