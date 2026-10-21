import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, MoveUpRight, Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Flourish from './Flourish'
import SheryiansShowcaseSection from './SheryiansShowcaseSection'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    title: 'AI Anywhere – Smart AI Keyboard',
    type: 'AI PRODUCT · ANDROID APP',
    description: 'A native smart Android keyboard with integrated generative AI writing tools for any app. Instant 1-tap grammar fixes, tone rewriting, contextual auto-replies, and live in-line translations.',
    stack: ['Android SDK', 'Kotlin', 'Generative AI', 'LLM', 'Indus AppStore'],
    mark: 'AI',
    style: 'yellow',
    liveUrl: 'https://www.indusappstore.com/apps/tools/ai-anywhere/com.aieverywhere.keyboard/?page=details&id=com.aieverywhere.keyboard',
    liveLabel: 'INDUS APPSTORE',
    githubUrl: 'https://github.com/Itssaurabhpatel/ai-anywhere'
  },
  {
    number: '02',
    title: 'IntelliAI – AI Career Coach',
    type: 'AI SAAS · CAREER PLATFORM',
    description: 'An AI-assisted career advisory platform that simulates technical interviews, analyzes resumes, and provides personalized career roadmaps powered by Gemini AI.',
    stack: ['Next.js', 'React', 'Gemini AI', 'Clerk Auth', 'Prisma', 'Tailwind'],
    mark: 'IA',
    style: 'lime',
    liveUrl: 'https://ai-career-coach-one-roan.vercel.app',
    liveLabel: 'LIVE PLATFORM',
    githubUrl: 'https://github.com/Itssaurabhpatel/Ai-Career-Coach'
  },
  {
    number: '03',
    title: 'Smart Fee Management System',
    type: 'SAAS · INSTITUTIONAL FINTECH',
    description: 'A complete fee management platform for educational institutions with automated billing, payment tracking, RazorPay integration, and financial analytics.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'RazorPay', 'JWT'],
    mark: 'FM',
    style: 'blue',
    videoUrl: 'https://drive.google.com/file/d/1KDRWVngeePfwaCmO1RHVfmH7-Ge5Ao6X/view?usp=sharing',
    githubUrl: 'https://github.com/Itssaurabhpatel'
  },
  {
    number: '04',
    title: 'Restaurant Ordering System',
    type: 'AI · FOODTECH SAAS',
    description: 'An AI-powered restaurant ordering platform featuring conversational chatbot ordering, real-time live order updates via WebSockets, and streamlined checkout.',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'Firebase'],
    mark: 'RO',
    style: 'yellow',
    videoUrl: 'https://drive.google.com/file/d/1vf-G_-XHNSvbZn417hULbeT8gy5yLAoV/view?usp=sharing',
    githubUrl: 'https://github.com/Itssaurabhpatel'
  },
  {
    number: '05',
    title: 'TrackFunds – Personal Finance',
    type: 'FINTECH · WEB & MOBILE',
    description: 'A personal finance application offering real-time expense tracking, automated transaction categorization, visual spending insights, and budget goal monitoring.',
    stack: ['React', 'Node.js', 'Firebase', 'Chart.js', 'REST APIs'],
    mark: 'TF',
    style: 'lime',
    liveUrl: 'https://track-funds.vercel.app',
    videoUrl: 'https://drive.google.com/file/d/1Os7UcQzj7GYYjXGdZiyjD7XVUbqVfkGz/view?usp=sharing',
    githubUrl: 'https://github.com/Itssaurabhpatel/TrackFunds'
  },
  {
    number: '06',
    title: 'Real Estate Platform (UrbanHaven)',
    type: 'PROPTECH · WEB PLATFORM',
    description: 'A modern property portal with rich listings, advanced multi-criteria filtering, Google Maps geolocation search, virtual tours, and direct lead communication.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Google Maps API', 'Firebase'],
    mark: 'RE',
    style: 'blue',
    liveUrl: 'https://real-estate-website-six-sigma.vercel.app',
    videoUrl: 'https://drive.google.com/file/d/1ly_Xh017bnWHDbhC5R8aKiviotKXmmwg/view?usp=sharing',
    githubUrl: 'https://github.com/Itssaurabhpatel/RealEstateWebsite'
  },
  {
    number: '07',
    title: 'Corporate Business Website (Admark)',
    type: 'WEB APPLICATION · BUSINESS',
    description: 'A high-performance corporate business platform with fluid motion, modern branding architecture, SEO optimization, and high-conversion client inquiry workflows.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express', 'GSAP'],
    mark: 'AD',
    style: 'yellow',
    liveUrl: 'https://my-company-eight-henna.vercel.app',
    videoUrl: 'https://drive.google.com/file/d/1Nu--4ncVkeEdTuaRxOX8aGTJjWcsTJPx/view?usp=sharing',
    githubUrl: 'https://github.com/Itssaurabhpatel/my_company'
  },
  {
    number: '08',
    title: 'E-Commerce Landing Experience',
    type: 'E-COMMERCE · WEB APP',
    description: 'A high-conversion e-commerce landing experience featuring interactive product showcases, dynamic micro-interactions, responsive checkout, and smooth GSAP transitions.',
    stack: ['React', 'JavaScript', 'CSS3', 'GSAP', 'Firebase'],
    mark: 'EC',
    style: 'lime',
    videoUrl: 'https://drive.google.com/file/d/175iyJEKj420MMla5jnYXMI_AdHQHbAUN/view?usp=sharing',
    githubUrl: 'https://github.com/Itssaurabhpatel'
  }
]

const services = [
  ['01', 'Web applications', 'Fast, responsive products that make complicated workflows feel simple.'],
  ['02', 'App development', 'Cross-platform mobile and web applications built for fluid interaction, speed, and real usability.'],
  ['03', 'Full-stack SaaS', 'Subscription-ready platforms with clean architecture, auth, and scalable workflows.'],
  ['04', 'AI integration', 'Practical LLM and generative AI capabilities that automate tasks and add genuine intelligence.'],
  ['05', 'Backend & APIs', 'Reliable APIs, authentication flows, and dependable integrations built for scale.'],
  ['06', 'Personal & custom tools', 'Purpose-built utilities, scripts, and internal dashboards that eliminate repetitive manual work.'],
  ['07', 'Business websites', 'Distinctive websites that help your business look credible, fast, and memorable.'],
]

function WhatsAppIcon({ size = 15, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

function MagneticLink({ href, children, className = '' }) {
  return <a href={href} className={className}>{children}</a>
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.style}`}>
      <div className="project-topline"><span>SELECTED WORK / {project.number}</span><ArrowUpRight size={19} /></div>
      <div className="project-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="art-glow" />
        <div className="art-window">
          <div className="window-bar"><i /><i /><i /><span>project / preview</span></div>
          <div className="window-content">
            <span className="art-mark">{project.mark}</span>
            <div className="art-lines"><b /><b /><b /></div>
            <div className="art-mini-grid"><i /><i /><i /></div>
          </div>
        </div>
        <span className="art-index">{project.number} — 08</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-actions-row">
          {project.videoUrl && (
            <a className="project-action-btn primary" href={project.videoUrl} target="_blank" rel="noreferrer">
              <Play size={12} fill="currentColor" /> <span>VIDEO DEMO</span>
            </a>
          )}
          {project.liveUrl && (
            <a className={`project-action-btn ${project.videoUrl ? 'secondary' : 'primary'}`} href={project.liveUrl} target="_blank" rel="noreferrer">
              <ArrowUpRight size={14} /> <span>{project.liveLabel || 'LIVE SITE'}</span>
            </a>
          )}
          {project.githubUrl && (
            <a className="project-action-btn secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github size={13} /> <span>CODE</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

const ROTATING_WORDS = ['impact.', 'products.', 'experiences.', 'reality.', 'systems.']

function RotatingWord() {
  const [index, setIndex] = useState(0)
  const [state, setState] = useState('visible')

  useEffect(() => {
    const timer = setInterval(() => {
      setState('exit')
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
        setState('enter')
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setState('visible')
          })
        })
      }, 350)
    }, 2800)

    return () => clearInterval(timer)
  }, [])

  return (
    <em className={`dynamic-rotator rotator-${state}`}>
      {ROTATING_WORDS[index]}
    </em>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const contactSectionRef = useRef(null)
  const contactCircleRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCb = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCb)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title-line, .hero-description, .hero-actions, .hero-aside', {
        y: 34, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.12
      })
      gsap.from('.hero-desk-bg', { scale: 1.04, opacity: 0, duration: 1.4, ease: 'power2.out', delay: 0.15 })
      gsap.from('.project-card', { y: 40, opacity: 0, duration: 0.8, stagger: 0.16, ease: 'power3.out', scrollTrigger: undefined,
        delay: 0.1 })

      const contactSection = contactSectionRef.current
      const contactSweep = contactCircleRef.current
      if (contactSection && contactSweep) {
        const getTravel = () => {
          const secW = contactSection.offsetWidth
          const secH = contactSection.offsetHeight
          return {
            startX: -secW * 0.85,
            startY: -secH * 0.85,
            endX: secW * 0.85,
            endY: secH * 0.85
          }
        }

        gsap.fromTo(
          contactSweep,
          {
            x: () => getTravel().startX,
            y: () => getTravel().startY
          },
          {
            x: () => getTravel().endX,
            y: () => getTravel().endY,
            ease: 'none',
            scrollTrigger: {
              trigger: contactSection,
              start: 'top bottom',
              end: () => ScrollTrigger.maxScroll(window),
              scrub: 1.8,
              invalidateOnRefresh: true
            }
          }
        )
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main ref={heroRef}>
      <div className="grain" aria-hidden="true" />
      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu}><span className="brand-symbol">S<span>.</span></span><span>SAURABH PATEL<small>DEVELOPER / BUILDER</small></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#services" onClick={closeMenu}>What I do <span>02</span></a>
          <a href="#about" onClick={closeMenu}>About <span>03</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <div className="hero-wrap" id="top">
        <div className="hero-desk-bg" aria-hidden="true" />
        <div className="hero-desk-overlay" aria-hidden="true" />
        <section className="hero section-shell">
          <div className="hero-content">
            <p className="hero-kicker">AVAILABLE FOR SELECT PROJECTS <span className="kicker-line" /></p>
            <h1>
              <span className="hero-title-line">Ideas into</span>
              <span className="hero-title-line title-indent">digital <RotatingWord /></span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-description">I’m Saurabh, a software developer building thoughtful web experiences, useful products, and dependable backend systems.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
                <a className="button-quiet" href="#contact">Start a project <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
          <div className="hero-aside"><span>BASED IN INDIA</span><span>JAVA · REACT · AI ENGINEERING</span><span className="vertical-note">BUILD WITH INTENTION ↘</span></div>
          <div className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</div>
        </section>
      </div>

      <section className="ticker" aria-label="Capabilities"><div className="ticker-track">{['BUILD WITH PURPOSE', 'DESIGN WITH CLARITY', 'SHIP WHAT MATTERS', 'BUILD WITH PURPOSE', 'DESIGN WITH CLARITY', 'SHIP WHAT MATTERS'].map((item, i) => <span key={i}>{item}<i>✳</i></span>)}</div></section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading"><div><p className="eyebrow"><span>01</span> / SELECTED WORK</p><h2>Proof in the <em>projects.</em></h2></div><p className="section-intro">A few things I’ve been building, learning from, and making better.</p></div>
        <div className="project-grid">{projects.map(project => <ProjectCard project={project} key={project.number} />)}</div>
        <div className="github-note"><span className="github-icon"><Github size={19} /></span><p>More experiments, source code, and learning in public.</p><a href="https://github.com/Itssaurabhpatel" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell services-inner">
          <div className="section-heading"><div><p className="eyebrow"><span>02</span> / WHAT I DO</p><h2>Good work.<br /><em>No unnecessary noise.</em></h2></div><p className="section-intro">From first sketch to working software, I focus on solving the actual problem.</p></div>
          <div className="service-list">{services.map(([n, title, desc]) => <article className="service-row" key={n}><span className="service-number">{n}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="service-arrow" size={20} /></article>)}</div>
          <div className="stack-block"><span className="eyebrow">MY TOOLKIT</span><div className="stack-cloud">{['Java', 'Spring Boot', 'React', 'JavaScript', 'Node.js', 'Generative AI / LLMs', 'REST APIs', 'Keycloak', 'JWT', 'PostgreSQL', 'MongoDB', 'Docker'].map(x => <span key={x}>{x}</span>)}</div></div>
        </div>
      </section>

      <SheryiansShowcaseSection />

      <section className="about-section-wrap" id="about">
        <div className="about-bg-img" aria-hidden="true" />
        <div className="about-bg-overlay" aria-hidden="true" />
        <div className="about-section section-shell">
          <div className="about-left"><p className="eyebrow"><span>03</span> / A LITTLE ABOUT ME</p></div>
          <div className="about-right"><h2>Code is the tool.<br />The <em>difference</em> is<br />how you think.</h2><p>I enjoy working across the stack: understanding a problem, shaping the experience, and building the systems behind it. I care about clean implementation, clear communication, and software that genuinely helps someone.</p><p>Currently focused on Java backend development, modern web applications, and collaborating with people who want to build something useful.</p><a className="text-link" href="https://www.linkedin.com/in/itssaurabhpatel" target="_blank" rel="noreferrer"><Linkedin size={15} /><span>CONNECT ON LINKEDIN</span><ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="contact-section" id="contact" ref={contactSectionRef}>
        <div className="contact-color-sweep" ref={contactCircleRef} aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="eyebrow"><span>04</span> / HAVE SOMETHING IN MIND?</p>
          <h2>Let’s make<br />something <span className="matter-wrap"><em>matter.</em><Flourish className="matter-flourish" /></span></h2>
          <p className="contact-copy">Have a business challenge, an idea, or a project that needs a developer? Tell me what you’re working on.</p>
          <a className="contact-email" href="mailto:saurabh.devworks@gmail.com">
            <Mail size={20} style={{ flexShrink: 0 }} />
            <span>saurabh.devworks@gmail.com</span>
            <MoveUpRight size={18} style={{ flexShrink: 0 }} />
          </a>
          <div className="contact-actions">
            <a href="https://wa.me/917234835991" target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} />
              <span>CHAT ON WHATSAPP</span>
              <ArrowUpRight size={15} />
            </a>
            <a href="https://www.linkedin.com/in/itssaurabhpatel" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={15} />
            </a>
            <a href="https://github.com/Itssaurabhpatel" target="_blank" rel="noreferrer">
              <Github size={16} />
              <span>GITHUB</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell"><a className="brand footer-brand" href="#top"><span className="brand-symbol">S<span>.</span></span><span>SAURABH PATEL<small>MADE WITH INTENTION</small></span></a><p>© {new Date().getFullYear()} SAURABH PATEL</p><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  )
}