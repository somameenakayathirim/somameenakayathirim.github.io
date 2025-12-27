/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire Next.js application.
 * It sets up:
 * - HTML structure and metadata
 * - SEO optimization with Open Graph tags
 * - Font loading from Google Fonts
 * - Global document structure
 */

import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load custom fonts: Inter (body), Space Grotesk (display), JetBrains Mono (code) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
