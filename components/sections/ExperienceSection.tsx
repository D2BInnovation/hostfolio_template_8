'use client'

import { motion } from 'framer-motion'
import type { PortfolioData } from '@/hooks/usePortfolioData'
import { containerVariants, itemVariants } from '@/lib/animations'

interface ExperienceSectionProps {
  data: PortfolioData
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  if (!data.experience || data.experience.length === 0) return null

  return (
    <section
      id='experience'
      className='min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-4xl w-full mx-auto'
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className='space-y-8'>
          {data.experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className='relative'
            >
              {/* Timeline Dot */}
              <div className='absolute left-0 w-4 h-4 bg-primary rounded-full mt-2 transform -translate-x-[29px]' />

              {/* Content */}
              <motion.div
                whileHover={{ x: 8 }}
                className='pl-12 p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer'
              >
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3'>
                  <div>
                    <h3 className='text-xl font-bold text-foreground'>
                      {job.position}
                    </h3>
                    <p className='text-primary font-medium'>{job.company}</p>
                  </div>
                  <span className='text-sm text-foreground/60 whitespace-nowrap'>
                    {job.duration}
                  </span>
                </div>

                <p className='text-sm text-foreground/60 mb-3'>{job.location}</p>
                <p className='text-foreground/70 mb-4'>{job.description}</p>

                {/* Achievements */}
                <ul className='space-y-2 mb-4'>
                  {job.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className='text-sm text-foreground/60 flex gap-2'
                    >
                      <span className='text-primary mt-1'>▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {job.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
