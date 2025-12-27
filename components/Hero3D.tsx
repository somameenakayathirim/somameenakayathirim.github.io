'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

// Enhanced Data Particle System with color variations
function DataParticles({ isDark }: { isDark: boolean }) {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 800
  
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 25
    positions[i3 + 1] = (Math.random() - 0.5) * 25
    positions[i3 + 2] = (Math.random() - 0.5) * 25
    
    if (isDark) {
      colors[i3] = 0.4 + Math.random() * 0.6
      colors[i3 + 1] = 0.5 + Math.random() * 0.5
      colors[i3 + 2] = 1
    } else {
      colors[i3] = 0.2 + Math.random() * 0.4
      colors[i3 + 1] = 0.3 + Math.random() * 0.4
      colors[i3 + 2] = 0.8 + Math.random() * 0.2
    }
    
    sizes[i] = Math.random() * 2 + 1
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.15
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.getElapsedTime() + i) * 0.002
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        vertexColors 
        transparent 
        opacity={0.8} 
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Enhanced Central AI Brain Sphere with theme support
function AnimatedSphere({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.12
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  const baseColor = isDark ? '#6366f1' : '#4f46e5'
  const emissiveColor = isDark ? '#4f46e5' : '#3730a3'

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere 
        ref={meshRef} 
        args={[1, 100, 100]} 
        scale={hovered ? 3 : 2.7}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={baseColor}
          attach="material"
          distort={0.35}
          speed={1.2}
          roughness={0.05}
          metalness={0.95}
          emissive={emissiveColor}
          emissiveIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  )
}

// Cloud Infrastructure with rotating nodes for DevOps theme
function CloudInfrastructure({ isDark }: { isDark: boolean }) {
  const containerRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.Mesh[]>([])

  // Simulate cloud server nodes positioned in a cube formation
  const nodes = [
    { pos: [-2, 2, -2], label: 'Deploy' },
    { pos: [2, 2, -2], label: 'Monitor' },
    { pos: [-2, -2, -2], label: 'Scale' },
    { pos: [2, -2, -2], label: 'Optimize' },
    { pos: [-2, 2, 2], label: 'Secure' },
    { pos: [2, 2, 2], label: 'CI/CD' },
    { pos: [-2, -2, 2], label: 'Orchestrate' },
    { pos: [2, -2, 2], label: 'Automate' },
  ]

  useFrame((state) => {
    if (containerRef.current) {
      // Slow rotation for the entire cloud infrastructure
      containerRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      containerRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      containerRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.25) * 0.1

      // Animate individual nodes
      nodesRef.current.forEach((mesh, i) => {
        if (mesh) {
          const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2 + i) * 0.2
          mesh.scale.setScalar(scale)
          mesh.position.y += Math.sin(state.clock.getElapsedTime() * 1.5 + i * 0.5) * 0.01
        }
      })
    }
  })

  const nodeColor = isDark ? '#0ea5e9' : '#06b6d4'
  const emissiveColor = isDark ? '#0284c7' : '#0891b2'

  return (
    <group ref={containerRef}>
      {nodes.map((node, i) => (
        <group key={i} position={node.pos}>
          {/* Glow effect */}
          <mesh>
            <boxGeometry args={[0.35, 0.35, 0.35]} />
            <meshBasicMaterial color={emissiveColor} transparent opacity={0.2} />
          </mesh>
          {/* Main node */}
          <mesh ref={(el) => { if (el && nodesRef.current) nodesRef.current[i] = el }}>
            <octahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial 
              color={nodeColor}
              emissive={emissiveColor}
              emissiveIntensity={1.5}
              metalness={0.85}
              roughness={0.15}
              wireframe={false}
            />
          </mesh>
        </group>
      ))}
      
      {/* Connecting lines between nodes - Infrastructure connections */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(4, 4, 4, 1, 1, 1)]} />
        <lineBasicMaterial color={nodeColor} transparent opacity={0.3} linewidth={2} />
      </lineSegments>
      
      {/* Additional cross connections for infrastructure mesh */}
      <lineSegments>
        <buffersGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={8}
            array={new Float32Array([
              -2, 2, -2, 2, -2, 2,
              2, 2, -2, -2, -2, 2,
              -2, 2, 2, 2, -2, -2,
              2, 2, 2, -2, -2, -2,
            ])}
            itemSize={3}
          />
        </buffersGeometry>
        <lineBasicMaterial color={nodeColor} transparent opacity={0.15} />
      </lineSegments>
    </group>
  )
}

export default function Hero3D() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const [textIndex, setTextIndex] = useState(0)
  
  const aiTexts = [
    'Cloud Architecture • Infrastructure as Code',
    'CI/CD • Container Orchestration • Kubernetes',
    'DevOps Automation • Cloud Security',
    'AWS • Azure • GCP • Infrastructure Excellence'
  ]

  useEffect(() => {
    const tl = gsap.timeline()
    
    if (titleRef.current) {
      tl.from(titleRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.2,
        ease: 'power4.out',
      })
    }
    
    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7')
    }

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % aiTexts.length)
    }, 3500)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-black"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e530_1px,transparent_1px),linear-gradient(to_bottom,#4f46e530_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 9], fov: 55 }} 
          gl={{ 
            alpha: true, 
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2
          }}
          shadows
        >
          <color attach="background" args={['#0a0a0a']} />
          <fog attach="fog" args={['#0a0a0a', 10, 25]} />
          
          <ambientLight intensity={0.25} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#818cf8" />
          <spotLight position={[0, 15, 0]} intensity={0.8} angle={0.4} penumbra={1} color="#a5b4fc" castShadow />
          <pointLight position={[5, -5, 5]} intensity={0.6} color="#c084fc" />
          
          {/* Main AI Brain */}
          <AnimatedSphere isDark={true} />
          
          {/* Cloud Infrastructure - DevOps Theme */}
          <CloudInfrastructure isDark={true} />
          
          {/* Data Particles */}
          <DataParticles isDark={true} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </div>

      {/* Floating AI Keywords */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float text-sm font-mono font-semibold text-blue-400/40">
          &lt;AI/&gt;
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed text-sm font-mono font-semibold text-purple-400/40">
          {'{ML}'}
        </div>
        <div className="absolute bottom-40 left-20 animate-float text-sm font-mono font-semibold text-indigo-400/40">
          Neural::Net
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed text-sm font-mono font-semibold text-cyan-400/40">
          model.train()
        </div>
      </div>

      {/* Content Overlay with Glass Effect */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-5xl">
          <h1
            ref={titleRef}
            className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl font-['Space_Grotesk'] tracking-tight text-white drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
            style={{
              textShadow: '0 0 80px rgba(99, 102, 241, 0.4), 0 0 40px rgba(129, 140, 248, 0.3)'
            }}
          >
            Soma Meena Kayathiri M
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl mb-6 font-['Inter'] font-medium text-gray-100"
          >
            Cloud DevOps Engineer
          </p>
          <div className="h-10 mb-10">
            <p 
              className="text-lg md:text-xl lg:text-2xl font-semibold font-['Space_Grotesk'] transition-all duration-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
              style={{
                animation: 'fadeSlideIn 0.7s ease-out'
              }}
              key={textIndex}
            >
              {aiTexts[textIndex]}
            </p>
          </div>
          
          {/* Tech Stack Pills with Glass Morphism */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'GitLab CI', 'Cloud Architecture'].map((tech, idx) => (
              <span 
                key={tech}
                className="px-5 py-2.5 rounded-full text-sm font-medium font-['Inter'] backdrop-blur-md border transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer bg-white/10 border-white/20 text-gray-100 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animation: 'fadeIn 0.5s ease-out backwards'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
