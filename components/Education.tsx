/**
 * Education Component
 * 
 * Academic background section featuring:
 * - Two educational qualifications (Master's and Bachelor's degrees)
 * - Course highlights and key subjects
 * - WES credential verification link
 * - Institution names and locations
 * - Study duration
 * - Animated card layout
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, ExternalLink } from 'lucide-react'

const Education = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = [
    {
      degree: 'Master of Science in Data Science',
      field: 'Data Science',
      institution: 'Liverpool John Moores University',
      location: 'Liverpool, United Kingdom',
      year: '2020 - 2022',
      highlights: [
        'Data Engineering',
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
      ],
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Engineering in CS',
      field: 'Computer Science',
      institution: 'TCE College, Anna University',
      location: 'Chennai, India',
      year: '2012 - 2016',
      highlights: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'System Design',
        'Computer Networking',
      ],
      icon: GraduationCap,
    },
  ]

  return (
    <section id="education" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
              Education
            </h2>
            <a
              href="https://badges.wes.org/Evidence?i=b7259d04-9b25-4c7a-bfcc-4d197f50b16b&type=ca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="View WES Credential"
            >
              <ExternalLink className="w-6 h-6 text-primary-400" />
            </a>
          </div>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl p-8 hover:shadow-2xl transition-all bg-gray-900/80 backdrop-blur-lg border border-gray-700"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-white whitespace-nowrap">{edu.degree}</h3>
                        <p className="text-gray-200 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {edu.location}
                        </p>
                        <div className="mt-2">
                          <span className="px-4 py-2 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium border border-primary-800">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        >
                          <Award className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education

