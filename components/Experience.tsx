/**
 * Experience Component
 * 
 * Professional work experience timeline featuring:
 * - Three major work positions in reverse chronological order
 * - Company logos and detailed achievement lists
 * - Animated cards with glassmorphism effects
 * - Scroll-triggered staggered animations
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  /**
   * Work experience data
   * Array of professional positions with detailed achievements
   */
  const experiences = [
    {
      company: 'Evertz India Pvt Ltd',
      logo: '/assets/img/evertz_logo.jpg',
      position: 'Intermediate DevOps Engineer',
      duration: 'January 2022 - Present',
      location: 'Bengaluru, India',
      achievements: [
        'Applied DevSecOps practices (SAST, DAST, dependency & container scans) in CI/CD pipelines.',
        'Integrated SonarQube, Trivy, and custom scanners for continuous code quality and security checks.',
        'Delivered enterprise-grade cloud solutions by integrating AWS infrastructure, Kubernetes clusters, and Terraform, ensuring secure, scalable & deployments.',
        'Implemented CI/CD pipelines using GitHub Actions, automating build, test, and deployment workflows to enhance release velocity and reliability.',
        'Built and optimized microservices using Java Spring Boot, API Gateway patterns, and cloud-native design principles.',
        'Automated infrastructure provisioning with IaC (Terraform), ensuring consistent, repeatable, and compliant cloud deployments.',
        'Managed container orchestration workflows using Kubernetes, including deployments, StatefulSets, Helm, Ingress, ConfigMaps, Secrets, RBAC.',
        'Implemented end-to-end cloud environments using AWS, Kubernetes, Docker, and Terraform, enabling fast, reliable CI/CD-driven deployments.'
      ],
      color: 'from-primary-500 to-primary-700',
    },
    {
      company: 'Photon Infotech',
      logo: '/assets/img/profile.png',
      position: 'Senior Software Engineer',
      duration: 'May 2021 - Nov 2021',
      location: 'Bengaluru, India',
      achievements: [
        'Automated Spring Boot microservices to perform compliance checks for Kubernetes workloads using Kyverno rules.',
        'Developed Java Spring Boot APIs to automate backup, recovery, and secrets management using AWS Backup, KMS, and Secrets Manager.',
        'Built Spring Boot–based audit and logging APIs integrating CloudTrail, Security Hub, WAF, and GuardDuty with the ELK stack for real-time monitoring alerts.',
      ],
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      company: 'L&T Technology Services',
      logo: '/assets/img/profile.png',
      position: 'Engineer',
      duration: 'Nov 2020 - May 2021',
      location: 'Bengaluru, India',
      achievements: [
        'Designed and implemented Java microservices and APIs within scalable, cloud-based architectures to handle dynamic client workloads.',
        'Developed and automated infrastructure deployment workflows using Spring Boot, and IaC templates for dev, staging, and prod environments.',
      ],
      color: 'from-teal-500 to-teal-700',
    },
    {
      company: 'Altran Technologies',
      logo: '/assets/img/tata_elxsi.png',
      position: 'Software Engineer',
      duration: 'Apr 2017 - Oct 2020',
      location: 'Chennai, India',
      achievements: [
        'Containerized Java Spring Boot components to monitor network within SRC.',
        'Built and automated CI/CD pipelines for all SRC modules using Azure DevOps.',
        'Implemented a Java API module for the Gx driver based on the Diameter Gx Protocol, enabling seamless policy control integration.',
        'Packaged Groovy-based SAE log-filtering services into Docker containers and orchestrated them via Kubernetes for efficient router log processing.',
      ],
      color: 'from-yellow-500 to-yellow-700',
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            9.5+ years of delivering impactful AI/ML and data science solutions
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all bg-gray-900/70 backdrop-blur-lg border border-gray-700">
                {/* Company Header - Centered Layout */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Company Logo */}
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 object-contain rounded-lg bg-white p-2 mb-4 shadow-md"
                  />
                  
                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-primary-400">
                    {exp.company}
                  </h3>
                  
                  {/* Position Title */}
                  <p className="text-lg font-semibold text-gray-100 mt-1">
                    {exp.position}
                  </p>
                  
                  {/* Duration & Location */}
                  <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Achievements List */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-200 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                    >
                      <span className="text-primary-400 font-bold">• </span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

