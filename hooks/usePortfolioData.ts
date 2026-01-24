'use client'

import { useEffect, useState } from 'react'

export interface PortfolioData {
  personal: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
    github: string
    bio: string
  }
  hero?: {
    greeting: string
    description: string
    primaryButton: { text: string; link: string }
    secondaryButton: { text: string; link: string }
  }
  about?: {
    description: string[]
    skills: string[]
  }
  experience?: Array<{
    id: number
    company: string
    position: string
    duration: string
    location: string
    description: string
    achievements: string[]
    technologies: string[]
  }>
  projects?: Array<{
    id: number
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
    image: string
    featured: boolean
  }>
  contact?: {
    title: string
    description: string
    socialLinks: Array<{
      platform: string
      url: string
      icon: string
    }>
  }
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio')
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data')
        }
        const portfolioData = await response.json()
        setData(portfolioData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
