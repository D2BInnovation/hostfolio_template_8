'use client'

import { motion } from 'framer-motion'
import type { PortfolioData } from '@/hooks/usePortfolioData'
import { containerVariants, itemVariants } from '@/lib/animations'

interface AboutSectionProps {
  data: PortfolioData
}

export function AboutSection({ data }: AboutSectionProps) {
  if (!data.about) return null

  return (
    <section
      id='about'
      className='min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-6xl w-full mx-auto'
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'
        >
          About Me
        </motion.h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Description */}
          <motion.div className='space-y-6'>
            {data.about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className='text-base sm:text-lg text-foreground/70 leading-relaxed'
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div>
            <motion.h3
              variants={itemVariants}
              className='text-2xl font-bold mb-8'
            >
              Skills & Technologies
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className='grid grid-cols-2 gap-3'
            >
              {data.about.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className='px-4 py-3 bg-card border border-border/50 rounded-lg text-center font-medium text-foreground/90 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default'
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
