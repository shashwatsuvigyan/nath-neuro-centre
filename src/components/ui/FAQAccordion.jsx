import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div
            key={item.q}
            className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${open ? 'border-synapse-500/30' : ''}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={open}
            >
              <HelpCircle
                size={18}
                className={`shrink-0 transition-colors ${open ? 'text-synapse-300' : 'text-ink-dim'}`}
              />
              <span className="flex-1 text-sm font-medium text-ink sm:text-base">{item.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-ink-mute transition-transform duration-300 ${open ? 'rotate-180 text-synapse-300' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="px-5 pb-5 pl-[65px] pr-6 text-sm leading-relaxed text-ink-mute sm:px-6 sm:pl-[65px] sm:text-[15px]">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}