import React, { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Database, Terminal, Sparkles, CheckCircle2, Cpu, Zap, Layers } from 'lucide-react'

// Official Clean Tech Brand SVGs
function ReactIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function TypeScriptIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect width="32" height="32" rx="6" fill="#3178C6" />
      <path d="M12.5 10.5V23.5H9.5V13.5H5.5V10.5H12.5Z" fill="#FFFFFF" />
      <path d="M25 15.2C25 12.6 22.8 10.5 19.8 10.5C17 10.5 15 12.2 15 14.8C15 20.2 22.5 18 22.5 21C22.5 21.8 21.7 22.4 20.5 22.4C18.6 22.4 16.6 21.3 16 20.2L14 22.5C15.2 24.2 17.8 25.2 20.5 25.2C23.6 25.2 25.5 23.4 25.5 20.6C25.5 15.4 18 17.4 18 14.6C18 13.9 18.7 13.3 19.8 13.3C21.2 13.3 22.8 14.1 23.5 15.2L25 15.2Z" fill="#FFFFFF" />
    </svg>
  )
}

function JavaScriptIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect width="32" height="32" rx="6" fill="#F7DF1E" />
      <path d="M14.2 24C12.8 24 11.8 23.2 11.2 22.1L13.1 20.8C13.5 21.4 14 21.9 14.7 21.9C15.5 21.9 16 21.5 16 20.3V12H18.4V20.4C18.4 22.8 16.9 24 14.2 24ZM22.5 24C20.6 24 19.2 22.9 18.5 21.5L20.5 20.3C21 21.2 21.7 21.8 22.6 21.8C23.5 21.8 24.1 21.3 24.1 20.5C24.1 19.5 23.2 19.2 22 18.7L21.3 18.4C19.7 17.7 18.7 16.8 18.7 14.9C18.7 13.1 20.1 11.8 22.3 11.8C23.8 11.8 25 12.5 25.7 13.8L23.8 14.9C23.4 14.2 22.9 13.9 22.2 13.9C21.5 13.9 21 14.3 21 15C21 15.8 21.7 16.2 22.8 16.6L23.5 16.9C25.4 17.6 26.5 18.6 26.5 20.4C26.5 22.6 24.9 24 22.5 24Z" fill="#000000" />
    </svg>
  )
}

function TailwindIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
    </svg>
  )
}

export default function HeroWorkspace() {
  const containerRef = useRef(null)

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22 })

  // Transform layers with varied depths
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14])
  const laptopX = useTransform(springX, [-0.5, 0.5], [-16, 16])
  const laptopY = useTransform(springY, [-0.5, 0.5], [-12, 12])
  
  const layerNearX = useTransform(springX, [-0.5, 0.5], [-32, 32])
  const layerNearY = useTransform(springY, [-0.5, 0.5], [-24, 24])

  const layerFarX = useTransform(springX, [-0.5, 0.5], [-10, 10])
  const layerFarY = useTransform(springY, [-0.5, 0.5], [-8, 8])

  // Scroll depth tracking
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // Normalized coordinates (-0.5 to 0.5) centered on hero visual area
      const x = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth
      const y = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight
      mouseX.set(Math.max(-0.6, Math.min(0.6, x)))
      mouseY.set(Math.max(-0.6, Math.min(0.6, y)))
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mouseX, mouseY])

  // Parallax scroll factor (clamped)
  const scrollOffset = Math.min(scrollY * 0.28, 140)
  const scrollOpacity = Math.max(0.35, 1 - scrollY * 0.0016)

  return (
    <div 
      className="hero-workspace-viewport" 
      ref={containerRef}
      style={{
        transform: `translate3d(0, -${scrollOffset}px, 0)`,
        opacity: scrollOpacity
      }}
      aria-hidden="true"
    >
      {/* 1. Deep Ambient Lighting & Volumetric Glow Orbs */}
      <div className="workspace-ambient-backdrop">
        <div className="workspace-light-beam light-beam-purple" />
        <div className="workspace-light-beam light-beam-blue" />
        <div className="workspace-core-radial" />
      </div>

      {/* 2. Thin Neon Orbital Paths with Moving Photons */}
      <svg className="workspace-orbital-canvas" viewBox="0 0 680 680">
        <defs>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a58aff" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#a58aff" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Path */}
        <ellipse 
          cx="340" 
          cy="340" 
          rx="275" 
          ry="115" 
          transform="rotate(-24 340 340)" 
          className="orbital-ring orbit-outer"
          stroke="url(#orbitGrad1)"
        />
        {/* Inner Orbit Path */}
        <ellipse 
          cx="340" 
          cy="340" 
          rx="215" 
          ry="80" 
          transform="rotate(32 340 340)" 
          className="orbital-ring orbit-inner"
          stroke="url(#orbitGrad2)"
        />
      </svg>

      {/* 3. The Interactive 3D Perspective Stage */}
      <motion.div 
        className="workspace-3d-stage"
        style={{
          rotateX,
          rotateY
        }}
      >
        {/* Layer Far: Glowing 3D Glass Sphere */}
        <motion.div 
          className="workspace-sphere-cluster"
          style={{ x: layerFarX, y: layerFarY }}
        >
          <div className="glowing-3d-sphere">
            <div className="sphere-specular" />
            <div className="sphere-inner-rings" />
            <div className="sphere-corona" />
          </div>
        </motion.div>

        {/* Layer Central: 3D Developer Laptop */}
        <motion.div 
          className="workspace-laptop-rig"
          style={{ x: laptopX, y: laptopY }}
        >
          {/* Laptop Screen Display Chassis */}
          <div className="laptop-screen-unit">
            <div className="laptop-bezel">
              <div className="laptop-camera-bar">
                <span className="camera-lens" />
                <span className="camera-led" />
              </div>

              {/* IDE Code Window */}
              <div className="laptop-display-glass">
                <div className="ide-titlebar">
                  <div className="traffic-lights">
                    <span className="tl-dot tl-red" />
                    <span className="tl-dot tl-yellow" />
                    <span className="tl-dot tl-green" />
                  </div>
                  <div className="ide-tab">
                    <span className="tab-icon">⚡</span>
                    <span className="tab-filename">experience.tsx</span>
                    <span className="tab-status-dot" />
                  </div>
                  <div className="ide-meta">TypeScript 5.4</div>
                </div>

                <div className="ide-editor-body">
                  <div className="code-line line-1">
                    <span className="c-kw">import</span> <span className="c-mod">&#123; createVision &#125;</span> <span className="c-kw">from</span> <span className="c-str">'@future/core'</span>
                  </div>
                  <div className="code-line line-2">
                    <span className="c-kw">interface</span> <span className="c-type">AppArchitecture</span> <span className="c-mod">&#123;</span>
                  </div>
                  <div className="code-line line-3">
                    &nbsp;&nbsp;performance: <span className="c-str">'ultra'</span>;
                  </div>
                  <div className="code-line line-4">
                    &nbsp;&nbsp;aesthetic: <span className="c-num">100</span>;
                  </div>
                  <div className="code-line line-5">
                    <span className="c-mod">&#125;</span>
                  </div>
                  <div className="code-line line-6">
                    <span className="c-kw">export default function</span> <span className="c-fn">Engine</span>() &#123;
                  </div>
                  <div className="code-line line-7 line-highlight">
                    &nbsp;&nbsp;<span className="c-kw">const</span> [<span className="c-var">stack</span>] = <span className="c-fn">useVision</span>()
                  </div>
                  <div className="code-line line-8">
                    &nbsp;&nbsp;<span className="c-kw">return</span> &lt;<span className="c-tag">Experience</span> <span className="c-prop">status</span>=<span className="c-str">"live"</span> /&gt;
                  </div>
                  <div className="code-line line-9">
                    &#125; <span className="code-cursor" />
                  </div>
                </div>

                {/* IDE Bottom Status Strip */}
                <div className="ide-statusbar">
                  <div className="status-item"><Cpu size={10} /> <span>main*</span></div>
                  <div className="status-item"><CheckCircle2 size={10} className="status-ok" /> <span>0 errors</span></div>
                  <div className="status-item status-right"><span>UTF-8 · React 18</span></div>
                </div>
              </div>
            </div>

            {/* Laptop Display Hinge & Reflection */}
            <div className="laptop-hinge" />
          </div>

          {/* Laptop Keyboard Base & Trackpad */}
          <div className="laptop-base-unit">
            <div className="laptop-keyboard-chassis">
              <div className="keyboard-grid">
                <div className="kb-row kb-row-f" />
                <div className="kb-row kb-row-1" />
                <div className="kb-row kb-row-2" />
                <div className="kb-row kb-row-3" />
                <div className="kb-row kb-row-space">
                  <span className="spacebar" />
                </div>
              </div>
              <div className="laptop-trackpad" />
              <div className="base-front-lip" />
            </div>
            {/* Glowing Desk Surface Reflection */}
            <div className="laptop-ground-reflection" />
          </div>
        </motion.div>

        {/* 4. Floating Tech Stack Glass Cards */}
        {/* Card 1: React (Top-Left) */}
        <motion.div 
          className="float-card tech-card-react"
          style={{ x: layerNearX, y: layerNearY }}
          animate={{
            y: [-6, 6, -6],
            rotateZ: [-2, 2, -2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="tech-badge-glow glow-cyan" />
          <div className="tech-icon-wrap icon-cyan">
            <ReactIcon size={22} />
          </div>
          <div className="tech-meta">
            <strong>React 18</strong>
            <small>Virtual DOM / Hooks</small>
          </div>
        </motion.div>

        {/* Card 2: TypeScript (Top-Right) */}
        <motion.div 
          className="float-card tech-card-ts"
          style={{ x: layerNearX, y: layerNearY }}
          animate={{
            y: [8, -8, 8],
            rotateZ: [3, -3, 3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="tech-badge-glow glow-blue" />
          <div className="tech-icon-wrap icon-blue">
            <TypeScriptIcon size={22} />
          </div>
          <div className="tech-meta">
            <strong>TypeScript</strong>
            <small>Strict Typing</small>
          </div>
        </motion.div>

        {/* Card 3: JavaScript (Bottom-Left) */}
        <motion.div 
          className="float-card tech-card-js"
          style={{ x: layerFarX, y: layerFarY }}
          animate={{
            y: [-7, 7, -7],
            rotateZ: [2, -2, 2]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        >
          <div className="tech-badge-glow glow-yellow" />
          <div className="tech-icon-wrap icon-yellow">
            <JavaScriptIcon size={20} />
          </div>
          <div className="tech-meta">
            <strong>JavaScript</strong>
            <small>ESNext / Async</small>
          </div>
        </motion.div>

        {/* Card 4: Tailwind CSS (Bottom-Right) */}
        <motion.div 
          className="float-card tech-card-tailwind"
          style={{ x: layerNearX, y: layerNearY }}
          animate={{
            y: [6, -6, 6],
            rotateZ: [-2, 2, -2]
          }}
          transition={{
            duration: 7.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8
          }}
        >
          <div className="tech-badge-glow glow-sky" />
          <div className="tech-icon-wrap icon-sky">
            <TailwindIcon size={20} />
          </div>
          <div className="tech-meta">
            <strong>Tailwind</strong>
            <small>Modern Styling</small>
          </div>
        </motion.div>

        {/* 5. Floating Code Editor Snippet Panel */}
        <motion.div 
          className="float-snippet-panel"
          style={{ x: layerNearX, y: layerNearY }}
          animate={{
            y: [-5, 7, -5],
            rotateX: [2, -2, 2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        >
          <div className="snippet-header">
            <Terminal size={12} className="snippet-icon" />
            <span>deploy.config.ts</span>
            <span className="snippet-live-pill">LIVE ⚡</span>
          </div>
          <div className="snippet-code">
            <div><span className="c-kw">const</span> build = &#123;</div>
            <div className="indent"><span className="c-var">mode</span>: <span className="c-str">'speed'</span>,</div>
            <div className="indent"><span className="c-var">uptime</span>: <span className="c-num">99.9%</span></div>
            <div>&#125;</div>
          </div>
        </motion.div>

        {/* 6. Floating Minimal Database Cluster Stack */}
        <motion.div 
          className="float-db-stack"
          style={{ x: layerFarX, y: layerFarY }}
          animate={{
            y: [5, -5, 5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="db-cylinder-stack">
            <div className="db-disc db-disc-3"><span className="db-led" /></div>
            <div className="db-disc db-disc-2"><span className="db-led" /></div>
            <div className="db-disc db-disc-1"><span className="db-led" /></div>
          </div>
          <div className="db-info">
            <Database size={12} className="db-icon" />
            <span>PostgreSQL · Fast I/O</span>
          </div>
        </motion.div>

        {/* 7. Floating UI Performance Metric Widget */}
        <motion.div 
          className="float-metric-widget"
          style={{ x: layerNearX, y: layerNearY }}
          animate={{
            y: [-4, 6, -4]
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          <div className="metric-topline">
            <Zap size={12} className="metric-lightning" />
            <span>FPS &amp; LATENCY</span>
            <span className="metric-badge">60 FPS</span>
          </div>
          <div className="metric-sparkline">
            <div className="spark-bar h-1" />
            <div className="spark-bar h-2" />
            <div className="spark-bar h-3" />
            <div className="spark-bar h-4" />
            <div className="spark-bar h-5 active" />
          </div>
        </motion.div>

        {/* 8. Subtle Floating Ambient Stardust Particles */}
        <div className="workspace-particles">
          <span className="dust-particle p1" />
          <span className="dust-particle p2" />
          <span className="dust-particle p3" />
          <span className="dust-particle p4" />
          <span className="dust-particle p5" />
          <span className="dust-particle p6" />
        </div>
      </motion.div>
    </div>
  )
}
