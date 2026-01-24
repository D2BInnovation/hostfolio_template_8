'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PortfolioData } from '@/hooks/usePortfolioData'
import { fadeInUp, fadeInDown, containerVariants, itemVariants } from '@/lib/animations'

interface HeroSectionProps {
  data: PortfolioData
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data.hero) return null

  const words = data.hero.greeting.split(' ')

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='text-center max-w-4xl w-full'
      >
        {/* Greeting */}
        <motion.div className='flex flex-wrap justify-center gap-2 mb-6'>
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className='text-4xl sm:text-5xl lg:text-7xl font-bold'
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={itemVariants}
            className='text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse'
          >
            {data.personal.name}
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className='text-xl sm:text-2xl lg:text-3xl text-foreground/70 mb-8 font-light'
        >
          {data.personal.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className='text-base sm:text-lg lg:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed'
        >
          {data.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <motion.a
            href={data.hero.primaryButton.link}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className='px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-2xl hover:shadow-primary/50 transition-shadow cursor-pointer'
          >
            {data.hero.primaryButton.text}
          </motion.a>

          <motion.a
            href={data.hero.secondaryButton.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className='px-8 py-3 border border-foreground/30 text-foreground rounded-full font-medium hover:bg-foreground/5 transition-colors cursor-pointer'
          >
            {data.hero.secondaryButton.text}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='mt-16'
        >
          <div className='w-6 h-10 border border-foreground/30 rounded-full mx-auto flex items-center justify-center'>
            <div className='w-1 h-2 bg-foreground/50 rounded-full' />
          </div>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl'
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl'
        />
      </div>
    </section>
  )
}
