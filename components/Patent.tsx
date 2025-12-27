/**
 * Patent Component
 * 
 * US Patent showcase featuring:
 * - Patent title and detailed description
 * - Patent number with external link to official documentation
 * - Publication date
 * - Award icon for visual emphasis
 * - Single prominent card layout
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Calendar } from 'lucide-react'

const Patent = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="patent" className="min-h-screen flex items-center justify-center bg-[#050505] relative z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Patent
          </h2>
        </motion.div>

        {/* Patent Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all bg-gray-900/80 backdrop-blur-lg border border-gray-700">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Intelligent System to Prioritize Servers for Envisaged Requests
                </h3>

                <div className="flex flex-wrap gap-4 mb-4">
                  <a
                    href="https://patents.justia.com/patent/11256553"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/30 text-primary-300 rounded-lg hover:bg-primary-900/50 transition-colors"
                  >
                    <span className="font-semibold">Patent #11256553</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span>Feb 22, 2022</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  A workload manager uses on-band and off-band metrics to select a host server in a cluster to handle a connection request. 
                  The on-band metrics include CPU usage, memory usage, and vulnerability metrics. The off-band metrics include hardware component 
                  error logs. Utilization and vulnerability scores are calculated for each host server from the on-band metrics. A reliability 
                  score is calculated for each host server from the off-band metrics. A health score for each host server is calculated from 
                  the vulnerability and reliability scores. The health score is used to exclude unhealthy host servers from consideration. 
                  A priority score is calculated for each host server from the utilization, vulnerability, and reliability scores. The host 
                  server that has not been excluded and has the greatest priority score is selected to handle the connection request.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Patent

