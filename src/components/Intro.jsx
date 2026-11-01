import { motion } from 'framer-motion'
export default function Intro({ onEnter }) {
  return <motion.main className="intro-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="intro-noise" />
    <motion.div className="intro-content" initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <p className="eyebrow">A PERSONAL PORTFOLIO EXPERIENCE</p>
      <h1 className="intro-name">NURUL AZIM<br/><span>SHIHAB</span></h1>
      <p className="intro-subtitle">A curious mind. A builder in progress.</p>
      <button className="primary-button" onClick={onEnter}>Explore my world <span>↗</span></button>
    </motion.div>
    <span className="intro-index">01 — THE BEGINNING</span>
  </motion.main>
}
