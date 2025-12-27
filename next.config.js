/**
 * Next.js Configuration
 * @type {import('next').NextConfig}
 * 
 * This configuration enables static export for GitHub Pages deployment.
 */
const nextConfig = {
  // Enable static HTML export for GitHub Pages
  output: 'export',
  
  // Image optimization settings
  images: {
    // Disable image optimization for static export
    unoptimized: true,
  },
  
  // Base path for the application (empty for root deployment)
  basePath: '',
  
  // Add trailing slashes to all routes for consistency
  trailingSlash: true,
}

module.exports = nextConfig
