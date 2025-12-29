'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BookOpen, Calendar } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  url: string
  views?: number
}

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Event Driven Autoscaling in Kubernetes using KEDA & RabbitMQ',
      description: 'Learn how to implement event-driven autoscaling in Kubernetes clusters using KEDA and RabbitMQ for dynamic workload management.',
      date: '2 days ago',
      readTime: '8 min read',
      tags: ['Kubernetes', 'KEDA', 'RabbitMQ', 'DevOps'],
      url: 'https://somameenakayathiri.medium.com/event-driven-autoscaling-in-kubernetes-using-keda-rabbitmq-f2364f6306ed',
    },
    {
      id: 2,
      title: '🔐 Securing AWS EKS with Kyverno, Calico & GuardDuty',
      description: 'Comprehensive guide to securing AWS EKS clusters using Kyverno policy engine, Calico networking, and GuardDuty threat detection.',
      date: 'Feb 4',
      readTime: '10 min read',
      tags: ['AWS', 'EKS', 'Security', 'Kubernetes'],
      url: 'https://somameenakayathiri.medium.com/securing-aws-eks-with-kyverno-calico-guardduty-ef85e27a0709',
    },
    {
      id: 3,
      title: 'Complete Jenkins CI/CD Pipeline with ArgoCD AWS EKS Deployment',
      description: 'Step-by-step guide to building a complete CI/CD pipeline using Jenkins and ArgoCD for automated deployment to AWS EKS.',
      date: 'Jan 25',
      readTime: '12 min read',
      tags: ['Jenkins', 'ArgoCD', 'CI/CD', 'AWS'],
      url: 'https://somameenakayathiri.medium.com/comprehensive-guide-to-jenkins-ci-cd-pipeline-with-argocd-integration-2be729c41a8b',
    },
    {
      id: 4,
      title: 'Introduction to Docker Multi-Stage Builds',
      description: 'Docker multi-stage builds are a powerful feature that enable you to create optimized and lightweight Docker images for production.',
      date: 'Jan 8',
      readTime: '6 min read',
      tags: ['Docker', 'DevOps', 'Containerization'],
      url: 'https://somameenakayathiri.medium.com/introduction-to-docker-multi-stage-builds-8674e18c261f',
    },
    {
      id: 5,
      title: 'NAT Gateway vs. VPC Endpoint in AWS',
      description: 'Compare NAT Gateway and VPC Endpoint for secure communication within Virtual Private Cloud in modern cloud architectures.',
      date: 'Jan 4',
      readTime: '7 min read',
      tags: ['AWS', 'Networking', 'Cloud'],
      url: 'https://somameenakayathiri.medium.com/nat-gateway-vs-vpc-endpoint-bd598c903594',
    },
    {
      id: 6,
      title: 'Service Type Load Balancer vs Ingress Controller in Kubernetes',
      description: 'Understand the differences and use cases between Service Type Load Balancer and Ingress Controller for exposing applications.',
      date: 'Jan 2',
      readTime: '9 min read',
      tags: ['Kubernetes', 'Networking', 'DevOps'],
      url: 'https://somameenakayathiri.medium.com/service-type-load-balancer-vs-ingress-controller-in-kubernetes-which-is-better-7358c4ca82c5',
    },
  ]

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center bg-[#050505] relative z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
              Blog & Articles
            </h2>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Insights and tutorials on Cloud DevOps, Kubernetes, AWS, and modern infrastructure
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-xl p-6 hover:shadow-2xl transition-all bg-gray-900/80 backdrop-blur-lg border border-gray-700 h-full flex flex-col cursor-pointer"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-primary-900/30 text-primary-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary-300 transition-colors line-clamp-3">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                {post.description}
              </p>

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <span className="text-gray-600">•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Read More Button */}
              <div className="flex items-center gap-2 text-primary-300 group-hover:text-primary-200 transition-colors font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://somameenakayathiri.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span>View All Articles on Medium</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
