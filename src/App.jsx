import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Boot from './components/Boot.jsx'
import Cursor from './components/Cursor.jsx'
import Scene from './components/Scene.jsx'
import { experience, profile, projects, skillGroups } from './data.js'

const navItems = [
  ['home', '00'],
  ['about', '01'],
  ['projects', '02'],
  ['experience', '03'],
  ['skills', '04'],
  ['contact', '05'],
]

function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <div className="section-label-line" />
      <strong>{children}</strong>
    </div>
  )
}

function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { threshold: [0.25, 0.5, 0.7] },
    )

    navItems.forEach(([id]) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="hud-nav" aria-label="Portfolio navigation">
      <button className="brand" onClick={() => go('home')} aria-label="Back to top">
        <span>MA</span><i>//</i>
      </button>
      <div className="nav-list">
        {navItems.map(([id, number]) => (
          <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>
            <small>{number}</small>
            <span>{id.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <a className="status-pill" href={`mailto:${profile.email}`}>
        <span className="status-dot" /> AVAILABLE
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <span>PLAYER_01</span> / SOFTWARE ENGINEER
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.12, duration: 0.68 }}
        >
          I BUILD<br />
          <span className="glitch" data-text="SYSTEMS">SYSTEMS</span>
          <br />THAT SHIP.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.24, duration: 0.6 }}
        >
          Full-stack developer focused on reliable products, backend systems, APIs, automation, and interfaces that feel fast.
          I like hard problems, real users, and code that survives production.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
        >
          <button className="btn primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            ENTER PROJECTS <span>↘</span>
          </button>
          <a className="btn ghost" href={profile.cv} target="_blank" rel="noreferrer">OPEN CV <span>↗</span></a>
        </motion.div>
      </div>

      <motion.aside
        className="hero-console glass"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <div className="profile-visual">
          <img src="/mahdi-profile.jpg" alt="Mahdi Alkak" />
          <div className="profile-visual-shade" aria-hidden="true" />
          <div className="profile-visual-grid" aria-hidden="true" />
          <div className="profile-visual-tag"><span>PLAYER VISUAL</span><strong>01</strong></div>
          <i className="profile-corner corner-tl" aria-hidden="true" />
          <i className="profile-corner corner-tr" aria-hidden="true" />
          <i className="profile-corner corner-bl" aria-hidden="true" />
          <i className="profile-corner corner-br" aria-hidden="true" />
        </div>
        <div className="console-top"><span>LIVE PROFILE</span><span>v1.0.26</span></div>
        <div className="console-row"><span>NAME</span><strong>MAHDI ALKAK</strong></div>
        <div className="console-row"><span>CLASS</span><strong>FULL-STACK DEV</strong></div>
        <div className="console-row"><span>BASE</span><strong>BEIRUT, LB</strong></div>
        <div className="console-row"><span>FOCUS</span><strong>BACKEND / SYSTEMS</strong></div>
        <div className="console-bars">
          <span style={{ '--w': '92%' }}>PROBLEM SOLVING</span>
          <span style={{ '--w': '88%' }}>ADAPTABILITY</span>
          <span style={{ '--w': '90%' }}>DELIVERY</span>
        </div>
      </motion.aside>

      <div className="scroll-marker">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section content-section">
      <SectionLabel index="01">PLAYER PROFILE</SectionLabel>
      <div className="about-grid">
        <div>
          <h2>Engineer mindset.<br /><span>Gamer instinct.</span></h2>
        </div>
        <div className="glass text-panel">
          <p>
            I’m a Computer Science graduate and full-stack developer who enjoys understanding how the whole system works — from APIs and databases to deployment and user-facing interfaces.
          </p>
          <p>
            I adapt quickly to new environments, learn technologies fast, respect deadlines, and stay focused under pressure. My goal is simple: understand the problem, build the right thing, and deliver it with quality.
          </p>
          <div className="stat-grid">
            <div><strong>FULL</strong><span>STACK RANGE</span></div>
            <div><strong>FAST</strong><span>LEARNING MODE</span></div>
            <div><strong>SHIP</strong><span>OVER THEORY</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section content-section projects-section">
      <SectionLabel index="02">MISSION SELECT</SectionLabel>
      <div className="section-heading">
        <h2>Featured missions</h2>
        <p>Selected builds where product thinking, backend logic, automation, and frontend execution meet.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card glass ${project.accent}`}
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8, rotateX: 1.5, rotateY: index % 2 ? -1.5 : 1.5 }}
          >
            <div className="project-head">
              <span className="project-id">MISSION {project.id}</span>
              <span className="project-status">{project.status}</span>
            </div>
            <div className="project-code">{project.codename}</div>
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div className="project-actions">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">GITHUB ↗</a>}
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section content-section">
      <SectionLabel index="03">MISSION LOG</SectionLabel>
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="timeline-node"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-card glass">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.detail}</p>
              <code>{item.tech}</code>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section content-section">
      <SectionLabel index="04">LOADOUT</SectionLabel>
      <div className="skills-layout">
        <div className="skills-copy">
          <h2>Tools for the<br /><span>next mission.</span></h2>
          <p>Not a logo wall. These are technologies I have used to build, debug, integrate, deploy, or maintain software.</p>
        </div>
        <div className="skills-panel glass">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-label">{group.label}</div>
              <div className="skill-tags">
                {group.items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [overdrive, setOverdrive] = useState(false)
  const toggle = () => {
    const next = !overdrive
    setOverdrive(next)
    document.body.classList.toggle('overdrive', next)
  }

  return (
    <section id="contact" className="section content-section contact-section">
      <SectionLabel index="05">CONTACT TERMINAL</SectionLabel>
      <div className="contact-console glass">
        <div>
          <span className="terminal-kicker">NEW CONNECTION REQUEST</span>
          <h2>Have a difficult build?<br /><span>Send the mission.</span></h2>
          <p>I’m open to software engineering opportunities, challenging products, and teams that care about building things properly.</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><small>EMAIL</small><span>{profile.email}</span><b>↗</b></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><small>GITHUB</small><span>mahdi-alkak-1</span><b>↗</b></a>
          <a href={profile.cv} target="_blank" rel="noreferrer"><small>RESUME</small><span>Mahdi_Alkak_Resume.pdf</span><b>↗</b></a>
        </div>
      </div>
      <footer>
        <span>MAHDI ALKAK // {new Date().getFullYear()}</span>
        <button onClick={toggle}>VISUAL OVERDRIVE: {overdrive ? 'ON' : 'OFF'}</button>
        <span>BUILT WITH REACT + THREE.JS</span>
      </footer>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Boot />
      <Cursor />
      <Scene />
      <div className="scanlines" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
