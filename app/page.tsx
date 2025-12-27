/**
 * Home Page Component
 * 
 * Main landing page for the portfolio website.
 * Features:
 * - Dynamic imports to optimize performance and avoid SSR issues with Three.js
 * - Fixed 3D hero section as background
 * - Scrollable content sections stacked vertically
 * - Permanent dark mode enforcement
 */

'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect } from 'react'
import Navbar from '@/components/Navbar'

/**
 * Dynamically import components to avoid SSR (Server-Side Rendering) issues
 * This is crucial for Three.js components which require browser APIs
 * ssr: false ensures components only render on the client side
 */
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false, loading: () => <div className="h-screen bg-black" /> })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Certifications = dynamic(() => import('@/components/Certifications'), { ssr: false })
const Patent = dynamic(() => import('@/components/Patent'), { ssr: false })
const Education = dynamic(() => import('@/components/Education'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

/**
 * Home Component
 * Renders the main portfolio page with all sections
 */
export default function Home() {
  // Force dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      {/* Fixed navigation bar */}
      <Navbar />
      
      {/* Main content container */}
      <main className="relative bg-black">
        {/* Fixed 3D background hero section */}
        <div className="fixed inset-0 z-0">
          <Suspense fallback={<div className="h-screen w-full bg-black" />}>
            <Hero3D />
          </Suspense>
        </div>
        
        {/* Scrollable content sections - positioned below hero */}
        <div className="relative z-10 pt-[100vh]">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Patent />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
