import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, Menu, PhoneCall, Siren, X } from 'lucide-react'
import { clinic, navLinks } from '../../data/site'
import { useBooking } from '../booking/AppointmentModal'

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Nath Neuro Centre home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-synapse-gradient text-night-900 shadow-glow-sm">
        <span className="text-lg font-extrabold">N</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold-400 blink-dot" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-bold tracking-tight text-ink">
          Nath Neuro Centre
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-widest2 text-synapse-300/90">
          Brain · Spine · Nerve
        </span>
      </span>
    </Link>
  )
}

function EmergencyTicker() {
  const messages = [
    `24×7 Emergency & Trauma Helpline: ${clinic.emergencyPhone}`,
    'Head injury? Do not move the patient — call first. We guide you.',
    'Sudden weakness or slurred speech? Note the exact time and call.',
    `OPD location: Betiahata, Gorakhpur — Pin ${clinic.pin}`,
  ]
  const marqueeContent = [...messages, ...messages]

  return (
    <div className="relative overflow-hidden border-b border-synapse-500/20 bg-night-950/80">
      <div className="flex items-center">
        <span className="z-10 flex shrink-0 items-center gap-1.5 bg-red-600 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-white">
          <Siren size={12} className="blink-dot" /> Emergency
        </span>
        <div className="relative flex-1 overflow-hidden py-2">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pl-6 text-[12px] font-medium text-ink-soft">
            {marqueeContent.map((msg, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-synapse-500" />
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openBooking } = useBooking()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <EmergencyTicker />

      <div
        className={`transition-all duration-500 ${
          scrolled ? 'bg-night-900/85 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]' : 'bg-transparent'
        }`}
      >
        <div className="container-page flex items-center justify-between gap-4 py-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-synapse-300' : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-synapse-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${clinic.emergencyPhone}`}
              className="hidden items-center gap-1.5 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2.5 text-sm font-semibold text-red-200 transition-colors hover:bg-red-500/20 md:inline-flex"
            >
              <PhoneCall size={15} className="blink-dot" /> 24×7 Helpline
            </a>
            <button type="button" onClick={openBooking} className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              <CalendarCheck size={16} /> Book Consultation
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-ink lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="glass-strong mx-4 mt-2 overflow-hidden rounded-2xl border-t border-white/10 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive ? 'bg-synapse-500/10 text-synapse-300' : 'text-ink-soft hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  openBooking()
                }}
                className="btn-primary mt-2"
              >
                <CalendarCheck size={16} /> Book Consultation
              </button>
              <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency mt-1">
                <PhoneCall size={16} /> 24×7 Emergency Line
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}