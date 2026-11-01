import { motion } from 'framer-motion'
import { Code2, Cpu, Sparkles } from 'lucide-react'
const profiles = [
  { name: 'Developer', detail: 'Code & creativity', icon: Code2, color: 'pink' },
  { name: 'Engineer', detail: 'Circuits & robotics', icon: Cpu, color: 'violet' },
  { name: 'Explorer', detail: 'Always learning', icon: Sparkles, color: 'blue' },
]
export default function ProfileSelect({ onSelect }) {
  return <motion.section className="profile-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <p className="eyebrow">WELCOME TO MY UNIVERSE</p><h2>Who's exploring?</h2><p className="muted">Choose a side of my journey</p>
    <div className="profile-grid">{profiles.map(({ name, detail, icon: Icon, color }, i) => <motion.button key={name} className="profile-card" onClick={onSelect} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * .13 }} whileHover={{ y: -8, scale: 1.03 }}>
      <span className={`profile-avatar ${color}`}><Icon size={42} strokeWidth={1.5}/></span><strong>{name}</strong><small>{detail}</small>
    </motion.button>)}</div>
    <button className="text-button" onClick={onSelect}>Continue as guest</button>
  </motion.section>
}
