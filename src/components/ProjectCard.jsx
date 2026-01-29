// =====================================================
// src/components/ProjectCard.jsx
// =====================================================

import { motion } from 'framer-motion';

export default function ProjectCard({ title, desc, live, repo }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="card p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{desc}</p>
      <div className="flex gap-3 mt-4">
        <a href={live} className="btn">Live</a>
        <a href={repo} className="btn-outline">GitHub</a>
      </div>
    </motion.div>
  );
}