import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  X,
} from 'lucide-react'
import { clinic } from '../../data/site'

const BookingContext = createContext(null)

// Global booking modal trigger. Call openBooking() from any CTA on the site.
export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const openBooking = useCallback(() => {
    setSubmitted(false)
    setOpen(true)
  }, [])

  const closeBooking = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ openBooking, closeBooking }), [openBooking, closeBooking])

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const lines = [
      f.get('name') && `Name: ${f.get('name')}`,
      f.get('phone') && `Phone: ${f.get('phone')}`,
      f.get('age') && `Age: ${f.get('age')}`,
      f.get('problem') && `Problem: ${f.get('problem')}`,
      f.get('preferredDate') && `Preferred date: ${f.get('preferredDate')}`,
      f.get('notes') && `Notes: ${f.get('notes')}`,
    ].filter(Boolean)
    const text = `Booking request for ${clinic.name}:\n${lines.join('\n')}`
    window.open(`${clinic.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    formRef.current?.reset()
    setSubmitted(true)
  }

  return (
    <BookingContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close booking form"
              onClick={closeBooking}
              className="absolute inset-0 bg-night-950/80 backdrop-blur-sm"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="glass-strong relative w-full max-w-lg overflow-hidden rounded-3xl border-synapse-500/20 p-6 shadow-panel sm:p-8"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            >
              <button
                type="button"
                onClick={closeBooking}
                className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-ink-mute transition-colors hover:border-white/25 hover:text-ink"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-synapse-400" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    Almost there
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                    WhatsApp is opening with your request pre-filled. Press send and the clinic
                    team will confirm your slot on this number during OPD hours. For urgent
                    conditions, use the emergency line instead — it is answered around the clock.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency">
                      <PhoneCall size={16} /> Emergency Line
                    </a>
                    <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
                      <MessageCircle size={16} /> Open WhatsApp again
                    </a>
                    <button type="button" onClick={closeBooking} className="btn-ghost">
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="chip mb-4">
                    <Clock size={13} /> Bookings by phone or WhatsApp
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                    Book a consultation
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                    Fill this in and WhatsApp opens with your request ready to send — or call the
                    OPD line directly to fix a slot now.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <a href={`tel:${clinic.phone}`} className="btn-ghost !px-3 text-xs">
                      <PhoneCall size={15} /> Call {clinic.phone}
                    </a>
                    <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost !px-3 text-xs">
                      <MessageCircle size={15} /> WhatsApp the clinic
                    </a>
                  </div>

                  <form ref={formRef} onSubmit={onSubmit} className="mt-5 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Full name" required>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Your name"
                          className={inputCls}
                          autoComplete="name"
                        />
                      </Field>
                      <Field label="Mobile number" required>
                        <input
                          required
                          type="tel"
                          name="phone"
                          inputMode="numeric"
                          pattern="\+?[0-9 ]{9,14}"
                          placeholder="10-digit mobile"
                          className={inputCls}
                          autoComplete="tel"
                        />
                      </Field>
                    </div>

                    <Field label="Age">
                      <input type="number" name="age" min="0" max="120" placeholder="Age" className={inputCls} />
                    </Field>

                    <Field label="Nature of problem" required>
                      <select required name="problem" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select the closest match
                        </option>
                        <option>Brain tumour / lesion on scan</option>
                        <option>Slip disc / back pain / sciatica</option>
                        <option>Neck pain / spondylosis</option>
                        <option>Head injury / road accident</option>
                        <option>Stroke / paralysis / weakness</option>
                        <option>Numbness / tingling / nerve pain</option>
                        <option>Migraine / severe headache</option>
                        <option>Child with repeated head injury / hydrocephalus</option>
                        <option>Follow-up of a previous surgery</option>
                        <option>Other</option>
                      </select>
                    </Field>

                    <Field label="Preferred day">
                      <input type="date" name="preferredDate" className={inputCls} />
                    </Field>

                    <Field label="Anything we should know?">
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Duration of the problem, scans already done, current medicines…"
                        className={inputCls}
                      />
                    </Field>

                    <div className="flex items-center gap-2 pt-1 text-xs text-ink-dim">
                      <ShieldCheck size={14} className="shrink-0 text-gold-400" />
                      Your details are used only to coordinate your appointment.
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-[1fr_auto]">
                      <button type="submit" className="btn-primary">
                        <CalendarCheck size={16} /> Send via WhatsApp
                      </button>
                      <a href={`tel:${clinic.emergencyPhone}`} className="btn-ghost">
                        <PhoneCall size={16} /> Emergency?
                      </a>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  )
}

const inputCls =
  'w-full rounded-xl border border-white/10 bg-night-900/70 px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-synapse-500/60 focus:outline-none focus:ring-1 focus:ring-synapse-500/40 transition-colors'

function Field({ label, required = false, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-mute">
        {label}
        {required && <span className="ml-1 text-synapse-400">*</span>}
      </span>
      {children}
    </label>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}