'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface HeaderProps {
  data: PortfolioData
}

export function Header({ data }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { name: 'Hero', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ].filter(section => {
    if (section.id === 'hero') return !!data.hero
    if (section.id === 'about') return !!data.about
    if (section.id === 'experience') return !!data.experience
    if (section.id === 'projects') return !!data.projects
    if (section.id === 'contact') return !!data.contact
    return false
  })

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className='text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
        >
          {data.personal.name}
        </motion.div>

        {/* Navigation Links */}
        <div className='hidden md:flex gap-8'>
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              onClick={() => handleNavClick(section.id)}
              className={`text-sm font-medium transition-colors relative group ${
                activeSection === section.id
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {section.name}
              <motion.div
                className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent'
                initial={{ width: 0 }}
                animate={{ width: activeSection === section.id ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          href={`mailto:${data.personal.email}`}
          className='hidden sm:block px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow'
        >
          Contact
        </motion.a>
      </nav>
    </motion.header>
  )
}
