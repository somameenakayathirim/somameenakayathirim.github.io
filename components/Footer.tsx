/**
 * Footer Component
 * 
 * Site footer with:
 * - Copyright information with dynamic year
 * - Social media links (GitHub, LinkedIn, Email)
 * - Animated hover effects on social icons
 * - Clean, minimal design
 */

'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  // Get current year dynamically for copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300 font-medium">
              © {currentYear} Soma Meena Kayathiri M. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/somameenakayathirim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border-2 border-gray-600 hover:border-gray-300 hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-200" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sivaram-gs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border-2 border-gray-600 hover:border-gray-300 hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-200" />
            </motion.a>
            <motion.a
              href="mailto:somameenakayathirim@outlook.com"
              className="p-2 rounded-full border-2 border-gray-600 hover:border-gray-300 hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-200" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

