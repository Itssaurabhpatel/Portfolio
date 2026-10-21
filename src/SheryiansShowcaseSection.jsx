import { useEffect, useRef } from 'react'
import { Clock, Award, Sparkles, Layers, ShieldCheck, Zap, Activity, Bot, Smartphone, Lock, CheckCircle2, Layout, Database, Globe, MessageSquareText, Wand2, ImageUp, Users, User, UserCheck, Send, CheckCheck, RotateCcw, Reply, SlidersHorizontal, Megaphone, FileText, Search, MoreVertical, Github } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function WhatsAppIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.182 8.182 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.22-.19-.47-.31z" />
    </svg>
  )
}

function BrainCircuitIcon({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="10" y="10" width="12" height="12" rx="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      <path d="M10 13H6a2.5 2.5 0 0 0-2.5 2.5v1a2.5 2.5 0 0 0 2.5 2.5h4" />
      <circle cx="5" cy="16" r="1" fill="currentColor" />
      <path d="M22 13h4a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-4" />
      <circle cx="27" cy="16" r="1" fill="currentColor" />
      <path d="M13 10V6" />
      <path d="M16 10V4" />
      <path d="M19 10V6" />
      <path d="M13 22v4" />
      <path d="M16 22v6" />
      <path d="M19 22v4" />
      <path d="M7 8l3 2" />
      <path d="M25 8l-3 2" />
      <path d="M7 24l3-2" />
      <path d="M25 24l-3-2" />
    </svg>
  )
}

const showcaseCards = [
  {
    id: '01',
    cardTitle: 'EXCELLENT UI',
    theme: 'card-light',
    tagline: 'FRONTEND CRAFT & INTERACTION',
    title: 'Fluid, high-precision web apps with exceptional UI.',
    description: 'Every interaction crafted for speed and elegance. Intuitive micro-interactions, responsive design systems, 60 FPS animations, and zero visual clutter.',
    stats: [
      { icon: Sparkles, label: 'Design Polish', val: 'Pixel Perfect' },
      { icon: Zap, label: 'Performance', val: '60 FPS Smooth' },
      { icon: Layers, label: 'Architecture', val: 'React / Next.js' }
    ],
    cta: 'Explore UI Craft',
    type: 'ui'
  },
  {
    id: '02',
    cardTitle: 'APP - AI ANYWHERE',
    theme: 'card-accent',
    tagline: 'LIVE ON INDUS APPSTORE · 5.0 ★ RATED',
    title: 'Write Smarter, Type Faster',
    description: 'A native smart Android keyboard with integrated AI writing tools for any app. Instant 1-tap grammar fixes, tone rewriting, live in-line translations (English to Hindi & more), and smart contextual replies without switching apps.',
    cta: 'View on Indus App Store',
    link: 'https://www.indusappstore.com/apps/tools/ai-anywhere/com.aieverywhere.keyboard/?page=details&id=com.aieverywhere.keyboard',
    github: 'https://github.com/Itssaurabhpatel/ai-anywhere',
    type: 'app',
    featureBoxes: [
      {
        icon: MessageSquareText,
        title: 'Ask Ai',
        subtitle: 'To ask anything in anywhere with ai'
      },
      {
        icon: Wand2,
        title: 'Ai features',
        subtitle: 'Tone, Grammar & smart auto-replies'
      },
      {
        icon: ImageUp,
        title: 'Upload',
        subtitle: 'Your own Stickers and GIFs'
      }
    ]
  },
  {
    id: '03',
    cardTitle: 'SAAS PRODUCT',
    theme: 'card-dark',
    tagline: 'SUBSCRIPTION PLATFORM',
    title: 'Scalable SaaS products built for growth and revenue.',
    description: 'Engineered from database schema to modern dashboard. Multi-tenant architecture, payment integrations, team permissions, and frictionless onboarding.',
    stats: [
      { icon: Database, label: 'Architecture', val: 'Multi-Tenant' },
      { icon: ShieldCheck, label: 'Security', val: 'RBAC & Auditing' },
      { icon: Activity, label: 'Scalability', val: 'Cloud Native' }
    ],
    cta: 'Explore SaaS Product',
    type: 'saas'
  },
  {
    id: '04',
    cardTitle: 'SSO SYSTEM',
    theme: 'card-sso',
    tagline: 'SECURITY & AUTHENTICATION',
    title: 'Enterprise Single Sign-On, Keycloak & resilient APIs.',
    description: 'Hardened authentication flows with Keycloak, JWT session management, OAuth2/OIDC protocols, centralized identity, and microservice protection.',
    stats: [
      { icon: Lock, label: 'Protocol', val: 'OAuth2 / OIDC' },
      { icon: ShieldCheck, label: 'Provider', val: 'Keycloak SSO' },
      { icon: Award, label: 'Reliability', val: '99.9% Uptime' }
    ],
    cta: 'Explore SSO System',
    type: 'sso'
  },
  {
    id: '05',
    cardTitle: 'CUSTOM TOOLS',
    theme: 'card-tools',
    tagline: 'WHATSAPP AUTOMATION SUITE',
    title: 'WhatsApp Auto Sender for Personal & Group Chats',
    description: 'Custom automated messaging engine built to broadcast personalized messages, bulk attachments, and dynamic notifications across contacts and groups with smart rate-limiting and anti-ban safeguards.',
    stats: [
      { icon: Users, label: 'Targeting', val: 'Groups & Direct' },
      { icon: Zap, label: 'Execution', val: 'Smart Throttled' },
      { icon: CheckCheck, label: 'Delivery', val: 'Live Status' }
    ],
    cta: 'Explore Automation Tool',
    type: 'tools',
    bgPattern: '/assets/projects/triangle-lattice-pattern.png'
  }
]

function CardVisualPreview({ card }) {
  if (card.type === 'ui') {
    return (
      <div className="preview-ui">
        <div className="ui-header">
          <Layout size={14} />
          <span>DESIGN SYSTEM PREVIEW</span>
          <span className="live-pill"><i /> 60 FPS</span>
        </div>
        <div className="ui-mockup-card">
          <div className="ui-mockup-top">
            <span className="ui-avatar" />
            <div className="ui-mockup-text">
              <strong className="ui-title-bar" />
              <small className="ui-sub-bar" />
            </div>
            <span className="ui-switch-pill">ACTIVE</span>
          </div>
          <div className="ui-actions-row">
            <span className="ui-badge-token primary">Component: Button</span>
            <span className="ui-badge-token secondary">State: Hover</span>
          </div>
          <div className="ui-palette-row">
            <span className="palette-dot dot-purple" title="Yellow Accent" />
            <span className="palette-dot dot-orange" title="Sheryians Orange" />
            <span className="palette-dot dot-lime" title="Neon Lime" />
            <span className="palette-label">Design Tokens</span>
          </div>
        </div>
        <div className="preview-footer-note">
          <CheckCircle2 size={13} />
          <span>Micro-interactions & responsive layout system</span>
        </div>
      </div>
    )
  }

  if (card.type === 'app') {
    return (
      <div className="preview-app-floating">
        <div className="floating-phone-wrap">
          {/* Left Feature Pills - Meaningful Icons & Text following Phone Tilt */}
          <div className="phone-pills-left">
            <div className="phone-feature-pill pill-pos-fix" data-ai-pill="0">
              <CheckCheck size={13.5} strokeWidth={2.5} className="pill-icon pill-icon-fix" />
              <span className="pill-title">Fix</span>
            </div>

            <div className="phone-feature-pill pill-pos-rewrite" data-ai-pill="1">
              <RotateCcw size={12.5} strokeWidth={2.5} className="pill-icon pill-icon-rewrite" />
              <span className="pill-title">Rewrite</span>
            </div>

            <div className="phone-feature-pill pill-pos-reply" data-ai-pill="2">
              <Reply size={13} strokeWidth={2.4} className="pill-icon pill-icon-reply" />
              <span className="pill-title">Reply</span>
            </div>

            <div className="phone-feature-pill pill-pos-tone" data-ai-pill="3">
              <SlidersHorizontal size={13} strokeWidth={2.4} className="pill-icon pill-icon-tone" />
              <span className="pill-title">Tone</span>
            </div>

            <div className="phone-feature-pill pill-pos-askai" data-ai-pill="4">
              <Sparkles size={13} strokeWidth={2.3} className="pill-icon pill-icon-askai" />
              <span className="pill-title">Ask Ai</span>
            </div>
          </div>

          {/* Central Smartphone Mockup (Tightly cropped with zero ghost margin) */}
          <img
            src="/assets/projects/phone-mockup-clean.png"
            alt="Floating WhatsApp Chat Smartphone Mockup"
            className="floating-phone-img"
          />

          {/* Right Bottom Feature Cards (GIFs & Stickers) */}
          <div className="phone-cards-right">
            <div className="phone-media-card card-pos-gifs" data-ai-pill="5">
              <img src="/assets/projects/card-gifs.png" alt="Add Your Own GIFs" />
            </div>
            <div className="phone-media-card card-pos-stickers" data-ai-pill="6">
              <img src="/assets/projects/card-stickers.png" alt="Add Your Own Stickers" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (card.type === 'saas') {
    return (
      <div className="preview-saas">
        <div className="saas-header">
          <Activity size={14} />
          <span>SAAS METRICS ENGINE</span>
          <span className="live-pill green"><i /> LIVE SYNC</span>
        </div>
        <div className="saas-metrics-grid">
          <div className="saas-stat-card">
            <span className="stat-card-label">RECURRING REVENUE</span>
            <strong className="stat-card-val">$18.4K</strong>
            <small className="stat-card-trend">+28% this month</small>
          </div>
          <div className="saas-stat-card">
            <span className="stat-card-label">ACTIVE TENANTS</span>
            <strong className="stat-card-val">2,450</strong>
            <small className="stat-card-trend">Zero downtime</small>
          </div>
          <div className="saas-stat-card full-row">
            <span className="stat-card-label">MULTI-TENANT PIPELINE</span>
            <div className="saas-progress-track">
              <div className="saas-progress-bar" style={{ width: '88%' }} />
            </div>
            <div className="saas-meta-flex">
              <span>Automated Stripe billing</span>
              <span>Postgres isolated schemas</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (card.type === 'tools') {
    return (
      <div className="preview-delivery-radar">
        {/* Subtle Rotating High-Tech Radar Sweep Beam */}
        <div className="radar-sweep-beam" aria-hidden="true" />

        {/* 1. Concentric Dashed Radar / Orbital Rings with Pulsing Signal Blips */}
        <div className="radar-orbit-rings" aria-hidden="true">
          <div className="orbit-ring orbit-ring-1" />
          <div className="orbit-ring orbit-ring-2">
            <span className="radar-orbit-blip blip-1" />
          </div>
          <div className="orbit-ring orbit-ring-3">
            <span className="radar-orbit-blip blip-2" />
          </div>
          <div className="orbit-ring orbit-ring-4">
            <span className="radar-orbit-blip blip-3" />
          </div>
        </div>

        {/* 2. Center Circular Gauge: 99% Delivery Success */}
        <div className="radar-center-gauge">
          <svg className="gauge-svg" viewBox="0 0 160 160">
            <defs>
              <linearGradient id="gaugeEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
            {/* Background Track Circle */}
            <circle
              cx="80"
              cy="80"
              r="66"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="9"
            />
            {/* Active Gradient Arc */}
            <circle
              cx="80"
              cy="80"
              r="66"
              fill="none"
              stroke="url(#gaugeEmeraldGrad)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 66}
              strokeDashoffset={2 * Math.PI * 66 * (1 - 0.99)}
              transform="rotate(90 80 80)"
              className="gauge-arc-active"
            />
          </svg>
          <div className="gauge-center-content">
            <span className="gauge-percent">99%</span>
            <span className="gauge-label">Delivery Success</span>
          </div>
        </div>

        {/* 3. Orbiting Contact Profile Icon Nodes (Clean Icons) */}
        {/* Node 1: Red border (Top) */}
        <div className="radar-orbit-avatar avatar-red orbit-node-1" title="Direct Contact">
          <User size={22} strokeWidth={2.3} />
        </div>

        {/* Node 2: Orange border (Middle-Right) */}
        <div className="radar-orbit-avatar avatar-orange orbit-node-2" title="Group Broadcast">
          <Users size={20} strokeWidth={2.3} />
        </div>

        {/* Node 3: Purple / Blue border (Southwest) */}
        <div className="radar-orbit-avatar avatar-blue orbit-node-3" title="Verified Customer">
          <UserCheck size={21} strokeWidth={2.3} />
        </div>

        {/* 4. Floating Status Cards */}
        {/* Card A: 5,000 messages delivered (Left) */}
        <div className="radar-float-card card-messages float-anim-1">
          <div className="radar-card-icon icon-green">
            <WhatsAppIcon size={16} />
          </div>
          <div className="radar-card-text">
            <strong className="radar-card-title">5,000 messages<br />delivered.</strong>
            <span className="radar-card-sub">Today</span>
          </div>
        </div>

        {/* Card B: New campaign created (Top-Right) */}
        <div className="radar-float-card card-campaign float-anim-2">
          <div className="radar-card-icon icon-yellow">
            <Megaphone size={15} />
          </div>
          <div className="radar-card-text">
            <strong className="radar-card-title">New campaign<br />created</strong>
          </div>
        </div>

        {/* Card C: Groups & Contacts (Bottom-Right) */}
        <div className="radar-float-card card-customers float-anim-3">
          <div className="customers-avatar-stack">
            <span className="customer-icon-node node-blue" title="Contact">
              <User size={13} strokeWidth={2.4} />
            </span>
            <span className="customer-icon-node node-orange" title="Group">
              <Users size={13} strokeWidth={2.4} />
            </span>
            <span className="customer-icon-node node-emerald" title="Verified">
              <UserCheck size={13} strokeWidth={2.4} />
            </span>
            <span className="customer-badge-pill">130+</span>
          </div>
          <div className="radar-card-text">
            <strong className="radar-card-title">Groups &<br />Contacts</strong>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="preview-sso">
      <div className="sso-header">
        <Lock size={14} />
        <span>ENTERPRISE SSO GATEWAY</span>
        <span className="live-pill cyan"><i /> PROTECTED</span>
      </div>
      <div className="sso-realm-box">
        <div className="sso-row">
          <span className="sso-label">IDENTITY REALM:</span>
          <span className="sso-code">auth.enterprise-prod</span>
        </div>
        <div className="sso-row">
          <span className="sso-label">PROTOCOL:</span>
          <span className="sso-value">OpenID Connect + PKCE</span>
        </div>
        <div className="sso-row">
          <span className="sso-label">TOKEN VERIFICATION:</span>
          <span className="sso-badge-status">JWT RS256 · VALID</span>
        </div>
        <div className="sso-row">
          <span className="sso-label">KEYCLOAK FEDERATION:</span>
          <span className="sso-value">Active Directory / SAML 2.0</span>
        </div>
      </div>
      <div className="sso-footer-row">
        <span>Session timeout: 15m idle</span>
        <span className="sso-safe-tag">Zero-Trust Secured</span>
      </div>
    </div>
  )
}

export default function SheryiansShowcaseSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])
  const visualsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const cardElements = cardsRef.current.filter(Boolean)
    const visualElements = visualsRef.current.filter(Boolean)
    if (!section || cardElements.length < 5) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 901px)', () => {
      // 1. Initial State for 5 cards:
      // Card 0 is active, Cards 1, 2, 3, 4 wait below with opacity: 0
      gsap.set(cardElements[0], { y: 0, scale: 1, opacity: 1, zIndex: 1 })
      gsap.set(cardElements[1], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 2 })
      gsap.set(cardElements[2], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 3 })
      gsap.set(cardElements[3], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 4 })
      gsap.set(cardElements[4], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 5 })

      // Animated Border Beams: only active foreground card illuminates
      const borderBeams = cardElements.map(c => c.querySelector('.card-border-beam'))
      borderBeams.forEach((beam, i) => {
        if (beam) gsap.set(beam, { opacity: i === 0 ? 1 : 0 })
      })

      // 2. Initial State for inner visual parallax elements
      if (visualElements[0]) gsap.set(visualElements[0], { y: 0 })
      if (visualElements[1]) {
        gsap.set(visualElements[1], { y: 20 })
        const aiPills = visualElements[1].querySelectorAll('[data-ai-pill]')
        if (aiPills && aiPills.length > 0) {
          gsap.set(aiPills, { opacity: 0, scale: 0.5, y: 20 })
        }
      }
      if (visualElements[2]) gsap.set(visualElements[2], { y: 20 })
      if (visualElements[3]) gsap.set(visualElements[3], { y: 20 })
      if (visualElements[4]) gsap.set(visualElements[4], { y: 20 })

      // 3. ScrollTrigger timeline with Lenis-synchronized scrub parallax centered in viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: '+=1800',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1
        }
      })

      // Section header subtle scroll parallax drift
      if (headerRef.current) {
        tl.to(headerRef.current, { y: -16, opacity: 0.95, ease: 'none', duration: 0.5 }, 0)
      }

      // ----------------------------------------------------
      // STEP 1 (pos 0 to 0.7): Card 2 (AI Anywhere) rises over Card 1 (UI)
      // ----------------------------------------------------
      tl.to(cardElements[0], { y: -20, scale: 0.96, opacity: 0.75, ease: 'power2.out', duration: 0.7 }, 0)
      tl.to(cardElements[0].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 0)
      if (borderBeams[0]) tl.to(borderBeams[0], { opacity: 0, duration: 0.25 }, 0)
      if (visualElements[0]) {
        tl.to(visualElements[0], { y: -12, ease: 'none', duration: 0.7 }, 0)
      }

      tl.to(cardElements[1], { opacity: 1, duration: 0.12, ease: 'none' }, 0)
      tl.to(cardElements[1], { y: -8, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 0)
      if (borderBeams[1]) tl.to(borderBeams[1], { opacity: 1, duration: 0.25 }, 0.15)
      if (visualElements[1]) {
        tl.to(visualElements[1], { y: 0, ease: 'power2.out', duration: 0.7 }, 0)
        const aiPills = visualElements[1].querySelectorAll('[data-ai-pill]')
        if (aiPills && aiPills.length > 0) {
          tl.to(
            aiPills,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              stagger: 0.08,
              ease: 'back.out(2)',
              duration: 0.35
            },
            0.15
          )
        }
      }

      // ----------------------------------------------------
      // STEP 2 (pos 0.7 to 1.4): Card 3 (SaaS Product) rises fast over Card 2 & 1
      // ----------------------------------------------------
      tl.to(cardElements[0], { y: -38, scale: 0.92, opacity: 0.5, ease: 'power2.out', duration: 0.7 }, 0.7)
      tl.to(cardElements[1], { y: -26, scale: 0.96, opacity: 0.75, ease: 'power2.out', duration: 0.7 }, 0.7)
      tl.to(cardElements[1].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 0.7)
      if (borderBeams[1]) tl.to(borderBeams[1], { opacity: 0, duration: 0.25 }, 0.7)
      if (visualElements[1]) {
        tl.to(visualElements[1], { y: -12, ease: 'none', duration: 0.7 }, 0.7)
        const aiPills = visualElements[1].querySelectorAll('[data-ai-pill]')
        if (aiPills && aiPills.length > 0) {
          tl.to(aiPills, { opacity: 0.3, scale: 0.88, duration: 0.3 }, 0.7)
        }
      }

      tl.to(cardElements[2], { opacity: 1, duration: 0.12, ease: 'none' }, 0.7)
      tl.to(cardElements[2], { y: -16, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 0.7)
      if (borderBeams[2]) tl.to(borderBeams[2], { opacity: 1, duration: 0.25 }, 0.85)
      if (visualElements[2]) {
        tl.to(visualElements[2], { y: 0, ease: 'power2.out', duration: 0.7 }, 0.7)
      }

      // ----------------------------------------------------
      // STEP 3 (pos 1.4 to 2.1): Card 4 (SSO Integration) rises fast over Card 3, 2, 1
      // ----------------------------------------------------
      tl.to(cardElements[0], { y: -54, scale: 0.88, opacity: 0.3, ease: 'power2.out', duration: 0.7 }, 1.4)
      tl.to(cardElements[1], { y: -42, scale: 0.91, opacity: 0.5, ease: 'power2.out', duration: 0.7 }, 1.4)
      tl.to(cardElements[2], { y: -30, scale: 0.95, opacity: 0.75, ease: 'power2.out', duration: 0.7 }, 1.4)
      tl.to(cardElements[2].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 1.4)
      if (borderBeams[2]) tl.to(borderBeams[2], { opacity: 0, duration: 0.25 }, 1.4)
      if (visualElements[2]) {
        tl.to(visualElements[2], { y: -12, ease: 'none', duration: 0.7 }, 1.4)
      }

      tl.to(cardElements[3], { opacity: 1, duration: 0.12, ease: 'none' }, 1.4)
      tl.to(cardElements[3], { y: -24, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 1.4)
      if (borderBeams[3]) tl.to(borderBeams[3], { opacity: 1, duration: 0.25 }, 1.55)
      if (visualElements[3]) {
        tl.to(visualElements[3], { y: 0, ease: 'power2.out', duration: 0.7 }, 1.4)
      }

      // ----------------------------------------------------
      // STEP 4 (pos 2.1 to 2.8): Card 5 (Custom Tools) rises fast over Card 4, 3, 2, 1
      // ----------------------------------------------------
      tl.to(cardElements[0], { y: -70, scale: 0.84, opacity: 0.2, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[1], { y: -58, scale: 0.87, opacity: 0.3, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[2], { y: -46, scale: 0.90, opacity: 0.45, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[3], { y: -34, scale: 0.95, opacity: 0.7, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[3].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 2.1)
      if (borderBeams[3]) tl.to(borderBeams[3], { opacity: 0, duration: 0.25 }, 2.1)
      if (visualElements[3]) {
        tl.to(visualElements[3], { y: -12, ease: 'none', duration: 0.7 }, 2.1)
      }

      tl.to(cardElements[4], { opacity: 1, duration: 0.12, ease: 'none' }, 2.1)
      tl.to(cardElements[4], { y: -32, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 2.1)
      if (borderBeams[4]) tl.to(borderBeams[4], { opacity: 1, duration: 0.25 }, 2.25)
      if (visualElements[4]) {
        tl.to(visualElements[4], { y: 0, ease: 'power2.out', duration: 0.7 }, 2.1)
      }
    })

    // Tablet & Mobile screens (<= 900px): Full GSAP Parallax Scroll Experience
    mm.add('(max-width: 900px)', () => {
      // 1. Initial State for 5 cards:
      gsap.set(cardElements[0], { y: 0, scale: 1, opacity: 1, zIndex: 1 })
      gsap.set(cardElements[1], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 2 })
      gsap.set(cardElements[2], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 3 })
      gsap.set(cardElements[3], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 4 })
      gsap.set(cardElements[4], { yPercent: 110, y: 0, scale: 1, opacity: 0, zIndex: 5 })

      // Animated Border Beams: only active foreground card illuminates
      const borderBeams = cardElements.map(c => c.querySelector('.card-border-beam'))
      borderBeams.forEach((beam, i) => {
        if (beam) gsap.set(beam, { opacity: i === 0 ? 1 : 0 })
      })

      // 2. Initial State for inner visual parallax elements
      if (visualElements[0]) gsap.set(visualElements[0], { y: 0 })
      if (visualElements[1]) {
        gsap.set(visualElements[1], { y: 15 })
        const aiPills = visualElements[1].querySelectorAll('[data-ai-pill]')
        if (aiPills && aiPills.length > 0) {
          gsap.set(aiPills, { opacity: 0, scale: 0.5, y: 15 })
        }
      }
      if (visualElements[2]) gsap.set(visualElements[2], { y: 15 })
      if (visualElements[3]) gsap.set(visualElements[3], { y: 15 })
      if (visualElements[4]) gsap.set(visualElements[4], { y: 15 })

      // 3. Mobile ScrollTrigger timeline with Lenis-synchronized scrub parallax
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: '+=1500',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1
        }
      })

      // Section header subtle scroll parallax drift
      if (headerRef.current) {
        tl.to(headerRef.current, { y: -6, opacity: 0.95, ease: 'none', duration: 0.5 }, 0)
      }

      // STEP 1: Card 2 (AI Anywhere) rises over Card 1 (UI)
      tl.to(cardElements[0], { y: -16, scale: 0.97, opacity: 0.75, ease: 'power2.out', duration: 0.7 }, 0)
      tl.to(cardElements[0].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 0)
      if (borderBeams[0]) tl.to(borderBeams[0], { opacity: 0, duration: 0.25 }, 0)
      if (visualElements[0]) {
        tl.to(visualElements[0], { y: -8, ease: 'none', duration: 0.7 }, 0)
      }
      tl.to(cardElements[1], { opacity: 1, duration: 0.12, ease: 'none' }, 0)
      tl.to(cardElements[1], { y: -6, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 0)
      if (borderBeams[1]) tl.to(borderBeams[1], { opacity: 1, duration: 0.25 }, 0.15)
      if (visualElements[1]) {
        tl.to(visualElements[1], { y: 0, ease: 'power2.out', duration: 0.7 }, 0)
        const aiPills = visualElements[1].querySelectorAll('[data-ai-pill]')
        if (aiPills && aiPills.length > 0) {
          tl.to(
            aiPills,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              stagger: 0.08,
              ease: 'back.out(2)',
              duration: 0.35
            },
            0.15
          )
        }
      }

      // STEP 2: Card 3 (SaaS Product) rises fast over Card 2 & 1
      tl.to(cardElements[0], { y: -28, scale: 0.94, opacity: 0.5, ease: 'power2.out', duration: 0.7 }, 0.7)
      tl.to(cardElements[1], { y: -18, scale: 0.97, opacity: 0.75, ease: 'power2.out', duration: 0.7 }, 0.7)
      tl.to(cardElements[1].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 0.7)
      if (borderBeams[1]) tl.to(borderBeams[1], { opacity: 0, duration: 0.25 }, 0.7)
      if (visualElements[1]) {
        tl.to(visualElements[1], { y: -8, ease: 'none', duration: 0.7 }, 0.7)
        const aiPills = visualElements[1].querySelectorAll('[data-ai-pill]')
        if (aiPills && aiPills.length > 0) {
          tl.to(aiPills, { opacity: 0.3, scale: 0.88, duration: 0.3 }, 0.7)
        }
      }
      tl.to(cardElements[2], { opacity: 1, duration: 0.12, ease: 'none' }, 0.7)
      tl.to(cardElements[2], { y: -12, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 0.7)
      if (borderBeams[2]) tl.to(borderBeams[2], { opacity: 1, duration: 0.25 }, 0.85)
      if (visualElements[2]) {
        tl.to(visualElements[2], { y: 0, ease: 'power2.out', duration: 0.7 }, 0.7)
      }

      // STEP 3: Card 4 (SSO Integration) rises fast over Card 3, 2, 1
      tl.to(cardElements[0], { y: -40, scale: 0.91, opacity: 0.3, ease: 'power2.out', duration: 0.7 }, 1.4)
      tl.to(cardElements[1], { y: -30, scale: 0.94, opacity: 0.5, ease: 'power2.out', duration: 0.7 }, 1.4)
      tl.to(cardElements[2], { y: -22, scale: 0.97, opacity: 0.75, ease: 'power2.out', duration: 0.7 }, 1.4)
      tl.to(cardElements[2].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 1.4)
      if (borderBeams[2]) tl.to(borderBeams[2], { opacity: 0, duration: 0.25 }, 1.4)
      if (visualElements[2]) {
        tl.to(visualElements[2], { y: -8, ease: 'none', duration: 0.7 }, 1.4)
      }
      tl.to(cardElements[3], { opacity: 1, duration: 0.12, ease: 'none' }, 1.4)
      tl.to(cardElements[3], { y: -18, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 1.4)
      if (borderBeams[3]) tl.to(borderBeams[3], { opacity: 1, duration: 0.25 }, 1.55)
      if (visualElements[3]) {
        tl.to(visualElements[3], { y: 0, ease: 'power2.out', duration: 0.7 }, 1.4)
      }

      // STEP 4: Card 5 (Custom Tools) rises fast over Card 4, 3, 2, 1
      tl.to(cardElements[0], { y: -52, scale: 0.88, opacity: 0.2, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[1], { y: -42, scale: 0.91, opacity: 0.3, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[2], { y: -34, scale: 0.94, opacity: 0.5, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[3], { y: -26, scale: 0.97, opacity: 0.75, ease: 'power2.out', duration: 0.7 }, 2.1)
      tl.to(cardElements[3].querySelectorAll('.card-desc, .card-title, .card-stats, .card-feature-boxes, .card-cta-wrap'), { opacity: 0, duration: 0.25 }, 2.1)
      if (borderBeams[3]) tl.to(borderBeams[3], { opacity: 0, duration: 0.25 }, 2.1)
      if (visualElements[3]) {
        tl.to(visualElements[3], { y: -8, ease: 'none', duration: 0.7 }, 2.1)
      }
      tl.to(cardElements[4], { opacity: 1, duration: 0.12, ease: 'none' }, 2.1)
      tl.to(cardElements[4], { y: -24, yPercent: 0, ease: 'power2.out', duration: 0.7 }, 2.1)
      if (borderBeams[4]) tl.to(borderBeams[4], { opacity: 1, duration: 0.25 }, 2.25)
      if (visualElements[4]) {
        tl.to(visualElements[4], { y: 0, ease: 'power2.out', duration: 0.7 }, 2.1)
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <section className="sheryians-section sheryians-pinned-section" ref={sectionRef} id="how-it-works">
      <div className="sheryians-container">
        {/* Parallax Header Block */}
        <div className="sheryians-header-block" ref={headerRef}>
          <div className="sheryians-badge">
            <span className="dot dot-tl" />
            <span className="dot dot-tr" />
            <span className="dot dot-bl" />
            <span className="dot dot-br" />
            CORE MAJOR PROJECTS
          </div>

          <h2 className="sheryians-heading">
            Not sure which path fits you? Don’t worry, we’re here to help.
          </h2>
        </div>

        {/* Scroll-Based Parallax Deck Stage */}
        <div className="sheryians-stage">
          {showcaseCards.map((card, idx) => (
            <div
              key={card.id}
              ref={el => (cardsRef.current[idx] = el)}
              className={`sheryians-card ${card.theme}`}
            >
              {/* Animated Color Border Beam based on Card Theme */}
              <div className="card-border-beam" aria-hidden="true" />

              {/* Corner Watermark Bold Counter (e.g. 01, 02, 03, 04) */}
              <span className="card-corner-watermark" aria-hidden="true">
                {card.id}
              </span>

              {/* Decorative Geometric Background Pattern */}
              <div className="card-bg-pattern-layer" aria-hidden="true">
                <img
                  src={card.bgPattern || '/assets/projects/triangle-lattice-pattern.png'}
                  alt=""
                  className="card-bg-pattern-img"
                />
              </div>

              <div className="card-main">
                <div className="card-content">
                  <div className="card-topline">
                    {card.logo && (
                      <img src={card.logo} alt="Brand Logo" className="card-brand-logo" />
                    )}
                    <span className="card-count-title">{card.cardTitle}</span>
                    <span className="card-tagline-bullet">·</span>
                    <span className="card-tagline">{card.tagline}</span>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.description}</p>

                  {card.featureBoxes ? (
                    <div className="card-feature-boxes">
                      {card.featureBoxes.map((fb, i) => {
                        const Icon = fb.icon
                        return (
                          <div className="feature-card-box" key={i}>
                            <div className="feature-box-icon-wrap">
                              <Icon size={26} />
                            </div>
                            <div className="feature-box-texts">
                              <strong className="feature-box-title">{fb.title}</strong>
                              <span className="feature-box-subtitle">{fb.subtitle}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="card-stats">
                      {card.stats && card.stats.map((st, i) => {
                        const Icon = st.icon
                        return (
                          <div className="stat-pill" key={i}>
                            <div className="stat-icon-wrap">
                              <Icon size={16} />
                            </div>
                            <div>
                              <span className="stat-val">{st.val}</span>
                              <span className="stat-label">{st.label}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  <div className="card-cta-wrap" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href={card.link || '#contact'}
                      target={card.link ? '_blank' : undefined}
                      rel={card.link ? 'noopener noreferrer' : undefined}
                      className="card-btn"
                    >
                      <span className="roll-inner">
                        <span className="roll-text">{card.cta} →</span>
                        <span className="roll-text roll-clone">{card.cta} →</span>
                      </span>
                    </a>
                    {card.github && (
                      <a
                        href={card.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-github-link"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.22)',
                          color: '#ffffff',
                          padding: '13px 22px',
                          borderRadius: '12px',
                          fontSize: '14px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          transition: 'all .2s ease'
                        }}
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Parallax Visual Preview Layer */}
                <div
                  className="card-visual"
                  ref={el => (visualsRef.current[idx] = el)}
                >
                  <CardVisualPreview card={card} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
