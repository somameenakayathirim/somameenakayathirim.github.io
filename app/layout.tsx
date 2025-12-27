/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire Next.js application.
 * It sets up:
 * - HTML structure and metadata
 * - SEO optimization with Open Graph tags
 * - Font loading from Google Fonts using next/font
 * - Global document structure
 */

import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Load fonts using next/font for optimal performance
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

/**
 * Metadata configuration for SEO and social media sharing
 * Provides comprehensive information for search engines and social platforms
 */
export const metadata: Metadata = {
  // Page title displayed in browser tab
  title: 'Soma Meena Kayathiri M | Cloud DevOps Engineer',
  
  // Meta description for search engine results
  description: 'Cloud DevOps Engineer with expertise in Kubernetes, CI/CD, Infrastructure as Code, and cloud architecture. Specialized in AWS, Azure, and GCP platform automation.',
  
  // Keywords for SEO
  keywords: 'Data Science, Machine Learning, LLM, GenAI, MLOps, AWS, Azure, Python, AI Engineer',
  
  // Author information
  authors: [{ name: 'Soma Meena Kayathiri M' }],
  
  // Open Graph tags for social media sharing (LinkedIn, Facebook, Twitter, etc.)
  openGraph: {
    type: 'website',
    title: 'Soma Meena Kayathiri M | Cloud DevOps Engineer',
    description: 'Cloud DevOps Engineer specializing in Kubernetes, CI/CD pipelines, and infrastructure automation',
    url: 'https://somameenakayathirim.github.io/',
  },
}

/**
 * Root Layout Component
 * @param children - Child components to render within the layout
 * @returns Root HTML structure with global settings
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
