import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    // Apply theme to document immediately on mount
    document.documentElement.setAttribute('data-theme', theme)
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', newTheme)
    // Apply theme immediately
    document.documentElement.setAttribute('data-theme', newTheme)
    // Set flag to show loading screen on refresh
    localStorage.setItem('show-loading', 'true')
    // Reload the page to show loading screen with new theme
    window.location.reload()
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

