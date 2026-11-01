import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'
export default function ProjectModal({ project, onClose }) {
  return <AnimatePresence>{project && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <motion.article className="project-modal" initial={{ y: 35, scale: .96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 25, opacity: 0 }} onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close"><X/></button><img src={project.image} alt=""/><div className="modal-copy"><p className="eyebrow">{project.type} · {project.year}</p><h2>{project.title}</h2><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><span className="muted modal-note">Project details and live links can be added here.</span></div>
    </motion.article>
  </motion.div>}</AnimatePresence>
}
