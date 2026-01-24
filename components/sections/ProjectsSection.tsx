'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PortfolioData } from '@/hooks/usePortfolioData'
import { containerVariants, itemVariants } from '@/lib/animations'

interface ProjectsSectionProps {
  data: PortfolioData
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  if (!data.projects || data.projects.length === 0) return null

  const featured = data.projects.filter(p => p.featured)
  const other = data.projects.filter(p => !p.featured)

  return (
    <section
      id='projects'
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
          Featured Projects
        </motion.h2>

        {/* Featured Projects */}
        <div className='space-y-12 mb-20'>
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className='group'
            >
              <motion.div
                whileHover={{ y: -8 }}
                className='p-8 bg-card border border-border/50 rounded-lg hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all'
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                  {/* Content */}
                  <div>
                    <motion.h3
                      className='text-2xl sm:text-3xl font-bold mb-4'
                      variants={itemVariants}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className='text-foreground/70 mb-6 leading-relaxed'
                      variants={itemVariants}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className='flex flex-wrap gap-2 mb-6'
                      variants={containerVariants}
                    >
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          variants={itemVariants}
                          className='px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Links */}
                    <motion.div
                      className='flex gap-4'
                      variants={itemVariants}
                    >
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow'
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-6 py-2 border border-foreground/30 text-foreground rounded-lg font-medium hover:bg-foreground/5 transition-colors'
                      >
                        GitHub
                      </a>
                    </motion.div>
                  </div>

                  {/* Image Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className='relative h-64 sm:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden group'
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10' />
                    <span className='text-foreground/40 text-center text-lg font-medium relative z-10'>
                      {project.title}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {other.length > 0 && (
          <>
            <motion.h3
              variants={itemVariants}
              className='text-2xl sm:text-3xl font-bold mb-8'
            >
              More Projects
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              {other.map(project => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className='p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all'
                >
                  <h4 className='text-xl font-bold mb-3'>{project.title}</h4>
                  <p className='text-foreground/70 mb-4 text-sm'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='px-2 py-1 bg-foreground/10 text-foreground/70 text-xs rounded-full'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className='flex gap-3 text-sm'>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary hover:underline'
                    >
                      Live
                    </a>
                    <span className='text-foreground/30'>•</span>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary hover:underline'
                    >
                      Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  )
}
