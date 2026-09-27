import { motion } from 'framer-motion'
import NeuralCanvas from '../effects/NeuralCanvas'

// Hero-style page banner for interior pages: headline + lead + optional children,
// sitting over the same neural canvas as the home hero for visual continuity.
export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 grid-texture opacity-60" aria-hidden="true" />
      <NeuralCanvas className="absolute inset-0 h-full w-full opacity-50" density={60} />

      <div
        className="container-page relative pb-16 pt-32 lg:pb-20 lg:pt-40"
      >
        {eyebrow && (
          <motion.span
            className="chip mb-5 uppercase tracking-widest2 text-synapse-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            {lead}
          </motion.p>
        )}
        {children && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}