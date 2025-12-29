/**
 * About Component
 * 
 * Professional introduction section featuring:
 * - Profile image and basic information
 * - Professional background and expertise highlights
 * - Animated card layout with glassmorphism effects
 * - Scroll-triggered animations using Framer Motion
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Sparkles, Target } from 'lucide-react'

const About = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile Image and Quick Info */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass rounded-2xl p-8 text-center bg-gray-900/50 backdrop-blur-lg border border-gray-700">
                {/* Profile Image */}
                <div className="w-48 h-48 mx-auto mb-6">
                  <Image 
                    src="/assets/img/profile.jpg" 
                    alt="Soma Meena Kayathiri M" 
                    width={192}
                    height={192}
                    className="w-full h-full rounded-full object-cover border-4 border-primary-500 shadow-xl"
                  />
                </div>
                
                {/* Name and Title */}
                <h3 className="text-2xl font-bold mb-2 text-white">Soma Meena Kayathiri M</h3>
                <p className="text-primary-400 font-semibold text-lg">Cloud DevOps Engineer</p>
                
                {/* Quick Stats */}
                <div className="mt-4 flex justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary-900/30 text-primary-300 rounded-full text-sm">
                    8.6+ Years
                  </span>
                  <span className="px-3 py-1 bg-primary-900/30 text-primary-300 rounded-full text-sm">
                    Technical Blog Writer
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Professional Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Professional Background Card */}
              <div className="glass rounded-xl p-6 hover:shadow-xl transition-shadow bg-gray-900/60 backdrop-blur-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-900/50 rounded-lg">
                    <Sparkles className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Professional Background</h3>
                    <p className="text-gray-300 leading-relaxed">
                      DevOps and Cloud specialist with 8.6 of experience in Java and distributed systems.
Certified AWS Solutions Architect – Associate (SAA-C03) and Certified Kubernetes
Administrator (CKA).
                    </p>
                  </div>
                </div>
              </div>

              {/* Expertise & Impact Card */}
              <div className="glass rounded-xl p-6 hover:shadow-xl transition-shadow bg-gray-900/60 backdrop-blur-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-900/50 rounded-lg">
                    <Target className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Expertise & Impact</h3>
                    <p className="text-gray-300 leading-relaxed">
                      deep expertise in Kubernetes, Docker, Microservices, Java
Spring Boot, Terraform, CI/CD using GitHub Actions, and cloud monitoring using
Prometheus and Grafana.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
