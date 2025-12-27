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
  title: 'Soma Meena Kayathiri M | Senior Data Science Engineer',
  
  // Meta description for search engine results
  description: 'Senior Data Science Engineer with 9.5+ years of experience in LLMs, GenAI, MLOps, and cloud platforms. US Patent holder specializing in AI-powered solutions.',
  
  // Keywords for SEO
  keywords: 'Data Science, Machine Learning, LLM, GenAI, MLOps, AWS, Azure, Python, AI Engineer',
  
  // Author information
  authors: [{ name: 'Soma Meena Kayathiri M' }],
  
  // Open Graph tags for social media sharing (LinkedIn, Facebook, Twitter, etc.)
  openGraph: {
    type: 'website',
    title: 'Soma Meena Kayathiri M | Senior Data Science Engineer',
    description: 'Senior Data Science Engineer specializing in LLMs, GenAI, and MLOps',
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
