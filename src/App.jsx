
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Github, Linkedin, Mail, ArrowUpRight, Play, ChevronDown,
  Menu, X, Code2, Terminal, Cpu, Sparkles
} from 'lucide-react'

import Intro from './components/Intro.jsx'
import ProfileSelect from './components/ProfileSelect.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import { projects, skills } from './data.js'

export default function App() {
  const [stage, setStage] = useState('intro')
  const [activeProject, setActiveProject] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const enterHome = () => {
    setStage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nav = ['Home', 'Projects', 'Skills', 'About', 'Contact']

  const goTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">

      <AnimatePresence mode="wait">
        {stage === 'intro' && (
          <Intro key="intro" onEnter={() => setStage('profiles')} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {stage === 'profiles' && (
          <ProfileSelect key="profiles" onSelect={enterHome} />
        )}
      </AnimatePresence>

      {stage === 'home' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

          <header className="site-header">
            <a className="brand" href="#home" onClick={e => {
              e.preventDefault()
              goTo('home')
            }}>
              SHIHAB<span>.</span>
            </a>

            <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
              {nav.map(item => (
                <button key={item} onClick={() => goTo(item.toLowerCase())}>
                  {item}
                </button>
              ))}
            </nav>

            <a className="header-cta" href="mailto:your.email@example.com">
              Let's talk <ArrowUpRight size={15} />
            </a>

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </header>

          <main>

            {/* HERO SECTION */}
            <section id="home" className="hero-section">

              <div className="hero-glow" />

              <div className="hero-copy">
                <p className="eyebrow">
                  <span className="status-dot" />
                  AVAILABLE FOR LEARNING & COLLABORATION
                </p>

                <h1>
                  Turning curiosity<br />
                  into <span className="gradient-text">creation.</span>
                </h1>

                <p className="hero-description">
                  Hey, I'm <b>Nurul Azim Shihab</b> — a Computer Science
                  & Engineering student who loves exploring code,
                  building things and bringing ideas to life.
                </p>

                <div className="hero-actions">
                  <button
                    className="primary-button"
                    onClick={() => goTo('projects')}
                  >
                    <Play size={15} fill="currentColor" />
                    Explore projects
                  </button>

                  <button
                    className="outline-button"
                    onClick={() => goTo('about')}
                  >
                    More about me <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="hero-meta">
                  <span><Code2 size={15} /> CSE STUDENT</span>
                  <i />
                  <span><Terminal size={15} /> DEVELOPER IN PROGRESS</span>
                </div>
              </div>

              {/* YOUR PERSONAL PHOTO */}
              <div className="hero-art">
                <div className="hero-photo-frame">
                  <img
                    src={`${import.meta.env.BASE_URL}shihab.jpg`}
                    alt="Nurul Azim Shihab"
                    className="hero-photo"
                  />
                </div>

                <span className="photo-caption">
                  NURUL AZIM SHIHAB
                </span>
              </div>

              <button
                className="scroll-cue"
                onClick={() => goTo('projects')}
              >
                SCROLL TO EXPLORE <ChevronDown size={15} />
              </button>

            </section>

            {/* PROJECTS */}
            <section id="projects" className="section projects-section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">SELECTED WORK</p>
                  <h2>
                    Things I've <span className="gradient-text">built.</span>
                  </h2>
                </div>
                <span className="section-count">01 / PROJECTS</span>
              </div>

              <p className="section-intro">
                A collection of experiments, coursework and ideas I'm
                bringing to life. More projects are on the way.
              </p>

              <div className="project-grid">
                {projects.map((project, i) => (
                  <motion.button
                    key={project.title}
                    className="project-card"
                    onClick={() => setActiveProject(project)}
                    whileHover={{ y: -7 }}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .08 }}
                  >
                    <div className="project-image">
                      <img src={project.image} alt="" />
                      <span className="project-number">0{i + 1}</span>
                      <span className="project-open"><ArrowUpRight /></span>
                    </div>

                    <div className="project-info">
                      <p>{project.type}</p>
                      <h3>{project.title}</h3>
                      <div className="project-bottom">
                        <span>{project.year}</span>
                        <span>VIEW PROJECT ↗</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className="section skills-section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">MY TOOLKIT</p>
                  <h2>
                    Learning by <span className="gradient-text">building.</span>
                  </h2>
                </div>
                <span className="section-count">02 / SKILLS</span>
              </div>

              <p className="section-intro">
                The tools and technologies I'm currently exploring.
                I believe strong skills come from consistent practice.
              </p>

              <div className="skills-grid">
                {skills.map((skill, i) => (
                  <motion.div
                    className="skill-card"
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .06 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <div>
                      <h3>{skill.name}</h3>
                      <p>{skill.level}</p>
                    </div>
                    <span className="skill-index">0{i + 1}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="section about-section">
              <div className="about-visual">
                <div className="about-monogram">N<span>A</span>S</div>
                <div className="about-caption">
                  THE PERSON BEHIND THE PROJECTS
                </div>
              </div>

              <div className="about-copy">
                <p className="eyebrow">A LITTLE ABOUT ME</p>
                <h2>
                  Curious mind.<br />
                  <span className="gradient-text">Future engineer.</span>
                </h2>

                <p>
                  I'm Nurul Azim Shihab, currently studying Computer Science
                  and Engineering at International Islamic University
                  Chittagong (IIUC).
                </p>

                <p>
                  I'm learning programming, strengthening my problem-solving
                  skills and exploring software development, embedded systems
                  and robotics. I enjoy turning classroom concepts into
                  practical projects.
                </p>

                <div className="education-card">
                  <span className="education-mark">IIUC</span>
                  <div>
                    <b>International Islamic University Chittagong</b>
                    <small>
                      BSc in Computer Science & Engineering · Currently studying
                    </small>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="contact-section">
              <p className="eyebrow">HAVE AN IDEA?</p>
              <h2>
                Let's make something<br />
                <span className="gradient-text">meaningful.</span>
              </h2>

              <p>
                I'm always interested in learning, sharing ideas and
                collaborating on interesting projects.
              </p>

              <a className="primary-button contact-button"
                href="mailto:your.email@example.com">
                Get in touch <ArrowUpRight size={17} />
              </a>

              <div className="social-links">
                <a href="https://github.com/yourusername"
                  target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>

                <a href="https://linkedin.com/in/yourusername"
                  target="_blank" rel="noreferrer">
                  <Linkedin /> LinkedIn
                </a>

                <a href="mailto:your.email@example.com">
                  <Mail /> Email
                </a>
              </div>
            </section>

          </main>

          <footer>
            <a className="brand" href="#home" onClick={e => {
              e.preventDefault()
              goTo('home')
            }}>
              SHIHAB<span>.</span>
            </a>

            <p>Designed & built with curiosity by Nurul Azim Shihab.</p>
            <span>© 2026 · ALL RIGHTS RESERVED</span>
          </footer>

        </motion.div>
      )}

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

    </div>
  )
}
