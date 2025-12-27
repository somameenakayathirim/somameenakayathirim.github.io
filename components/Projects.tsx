/**
 * Projects Component
 * 
 * Perso      title: '2048 Game Deployment in AWS EKS Using ALB Ingress Controller',
      description: 'Deployed the 2048 game on AWS EKS with Helm charts, configured IAM OIDC provider, and set up AWS ALB Ingress Controller for traffic routing.',l projects showcase featuring:
 * - Seven featured AI/ML and data engineering projects
 * - Detailed project descriptions and tech stacks
 * - Gradient-colored project headers with emojis
 * - GitHub repository links
 * - Responsive 3-column grid layout
 * - Animated cards with hover effects
 * - Call-to-action link to GitHub profile
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  /**
   * Featured projects data
   * Each project includes:
   * - title: Project name
   * - description: Detailed project overview
   * - tech: Array of technologies used
   * - gradient: Tailwind gradient classes for visual distinction
   * - icon: Emoji representing project theme
   * - github: Link to GitHub repository
   */
  const projects = [
    {
      title: '2048 Game Deployment in AWS EKS Using ALB Ingress Controller',
      description: 'Deployed the 2048 game to AWS EKS using Helm charts, configured IAM OIDC provider, and used AWS ALB Ingress Controller for traffic routing.',
      tech: ['Docker', 'AWS EKS', 'Helm chart', 'IAM OIDC provider', 'Ingress Controller', 'AWS ALB Controller'],
      gradient: 'from-indigo-500 to-indigo-700',
      icon: '🎮',
      github: null,
    },
    {
      title: "Stan’s Robot Shop Deployment in AWS EKS",
      description: 'Deployed Stan\'s Robot Shop application on AWS EKS using Docker images, Helm, and AWS Application Load Balancer Controller for routing.',
      tech: ['Docker', 'AWS EKS', 'Helm', 'AWS Application Load Balancer Controller'],
      gradient: 'from-sky-500 to-blue-600',
      icon: '🤖',
      github: null,
    },
    {
      title: 'EKS Secure using Calico Kyverno GuardDuty',
      description: 'Implemented security controls for EKS using Calico network policies, Kyverno policies for admission controls, and integrated AWS GuardDuty and KMS for threat detection and key management.',
      tech: ['AWS EKS', 'GuardDuty', 'Calico', 'Kyverno', 'AWS KMS'],
      gradient: 'from-red-600 to-rose-600',
      icon: '�',
      github: null,
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-[#050505] relative z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Personal AI/ML and Data Engineering projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all group bg-gray-900/80 backdrop-blur-lg border border-gray-700"
            >
              {/* Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden shadow-lg`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl drop-shadow-lg">{project.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-900/40 text-primary-300 rounded text-xs font-medium border border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Icons */}
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/somameenakayathirim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

