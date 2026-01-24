'use client'

import { usePortfolioData } from '@/hooks/usePortfolioData'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { motion } from 'framer-motion'

export default function Home() {
  const { data, loading, error } = usePortfolioData()

  if (loading) {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-background'>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className='w-12 h-12 border-2 border-primary border-t-accent rounded-full'
        />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-background'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-center'
        >
          <h1 className='text-2xl font-bold text-foreground mb-2'>
            Oops! Something went wrong
          </h1>
          <p className='text-foreground/70'>
            {error || 'Unable to load portfolio data'}
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='w-full bg-background text-foreground'>
      <Header data={data} />

      <main className='overflow-hidden'>
        <HeroSection data={data} />
        <AboutSection data={data} />
        <ExperienceSection data={data} />
        <ProjectsSection data={data} />
        <ContactSection data={data} />
      </main>

      <Footer data={data} />
    </div>
  )
}
