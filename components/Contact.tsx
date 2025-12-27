/**
 * Contact Component
 * 
 * Contact information section featuring:
 * - Four contact methods in a horizontal card layout
 * - Email, LinkedIn, GitHub, and Location information
 * - Interactive cards with hover animations
 * - Icon-based visual representation
 * - Responsive grid layout
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MapPin, Phone, Rss } from 'lucide-react'

const Contact = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Get In Touch
          </h2>
        </motion.div>

        {/* Contact Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.a
            href="mailto:gayathirisoma@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
          >
            <div className="p-4 bg-primary-900/50 rounded-lg group-hover:bg-primary-800/60 transition-colors">
              <Mail className="w-8 h-8 text-primary-400" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Email</p>
              <p className="text-sm text-gray-300">gayathirisoma@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+919600503443"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
          >
            <div className="p-4 bg-purple-900/50 rounded-lg group-hover:bg-purple-800/60 transition-colors">
              <Phone className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Mobile</p>
              <p className="text-sm text-gray-300">(+91) 9600503443</p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/somameenakayathiri"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
          >
            <div className="p-4 bg-blue-900/50 rounded-lg group-hover:bg-blue-800/60 transition-colors">
              <Linkedin className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">LinkedIn</p>
              <p className="text-sm text-gray-300">somameenakayathiri</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/somameenakayathirim"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
          >
            <div className="p-4 bg-gray-800/80 rounded-lg group-hover:bg-gray-700/80 transition-colors">
              <Github className="w-8 h-8 text-gray-200" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">GitHub</p>
              <p className="text-sm text-gray-300">somameenakayathirim</p>
            </div>
          </motion.a>

          <motion.a
            href="https://somameenakayathiri.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
          >
            <div className="p-4 bg-yellow-900/50 rounded-lg group-hover:bg-yellow-800/60 transition-colors">
              <Rss className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Blog</p>
              <p className="text-sm text-gray-300">somameenakayathiri.medium.com</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-xl p-6 flex flex-col items-center text-center gap-4 bg-gray-900/70 backdrop-blur-lg border border-gray-700"
          >
            <div className="p-4 bg-green-900/50 rounded-lg">
              <MapPin className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Location</p>
              <p className="text-sm text-gray-300">Chennai, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

