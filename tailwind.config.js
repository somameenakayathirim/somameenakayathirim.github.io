/**
 * Tailwind CSS Configuration
 * @type {import('tailwindcss').Config}
 * 
 * Customizes Tailwind CSS with project-specific theme extensions:
 * - Custom color palette for brand consistency
 * - Custom fonts for typography
 * - Animation utilities for smooth transitions
 */
module.exports = {
  // Specify files to scan for Tailwind classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // Enable class-based dark mode
  darkMode: 'class',
  
  theme: {
    extend: {
      // Custom color palette - Blue theme for tech/AI aesthetic
      colors: {
        primary: {
          50: '#eff6ff',   // Lightest blue
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',  // Used for accents and highlights
          500: '#3b82f6',  // Primary brand color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',  // Darkest blue
        },
      },
      
      // Custom font families
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],      // Body text
        display: ['Outfit', 'sans-serif'],               // Headings and titles
      },
      
      // Custom animations for smooth UI transitions
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      
      // Keyframe definitions for animations
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  
  // No additional plugins required
  plugins: [],
}
