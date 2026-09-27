import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

// Scroll-triggered fade-in wrapper used across every section.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      custom={delay}
    >
      <Tag>{children}</Tag>
    </motion.div>
  )
}