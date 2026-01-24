'use client'

import { motion } from 'framer-motion'
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface FooterProps {
  data: PortfolioData
}

export function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='border-t border-border/50 bg-card/50 backdrop-blur-sm'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <p className='text-foreground/70 mb-2'>
          © {currentYear} {data.personal.name}. All rights reserved.
        </p>
        <p className='text-foreground/50 text-sm'>
          Crafted with care using Next.js & Framer Motion
        </p>
      </div>
    </motion.footer>
  )
}
