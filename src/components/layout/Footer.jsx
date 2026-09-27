import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'
import { clinic, navLinks } from '../../data/site'
import { useBooking } from '../booking/AppointmentModal'

const serviceFooterLinks = [
  'Brain Tumor & Micro-Neurosurgery',
  'Minimally Invasive Spine Surgery',
  'Head Injury & Hemorrhage Care',
  'Stroke & Nerve Compression',
  'Spondylosis & Back Pain',
  'Hydrocephalus & Pediatric Care',
]

export default function Footer() {
  const { openBooking } = useBooking()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-night-950/80">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-synapse-500/50 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-synapse-gradient text-night-900 shadow-glow-sm">
              <span className="text-lg font-extrabold">N</span>
            </span>
            <div>
              <p className="font-display text-base font-bold text-ink">Nath Neuro Centre</p>
              <p className="text-[11px] uppercase tracking-widest2 text-synapse-300/90">
                Brain · Spine · Nerve
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-mute">
            Consultations, emergency triage and surgical care for the brain, spine and nerves —
            led by Dr. Rahul Nath Tiwari (MBBS, MS, MCh Gold Medalist) from the heart of
            Betiahata, serving all of Gorakhpur and Purvanchal.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip text-[11px]">MCh — Gold Medalist</span>
            <span className="chip text-[11px]">24×7 Trauma line</span>
            <span className="chip text-[11px]">Betiahata, Gorakhpur</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest2 text-ink">
            Quick links
          </h3>
          <ul className="mt-5 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ink-mute transition-colors hover:text-synapse-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest2 text-ink">
            We care for
          </h3>
          <ul className="mt-5 space-y-2.5">
            {serviceFooterLinks.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-ink-mute transition-colors hover:text-synapse-300">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest2 text-ink">
            Reach the clinic
          </h3>
          <ul className="mt-5 space-y-3.5 text-sm text-ink-mute">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-synapse-400" />
              <span>
                {clinic.addressLine1}, {clinic.area}. {clinic.landmark}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-synapse-400" />
              <span>{clinic.opdTimings[0].time} (Monday–Saturday)</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneCall size={16} className="shrink-0 text-synapse-400" />
              <a href={`tel:${clinic.phone}`} className="hover:text-synapse-300">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-synapse-400" />
              <a href={`mailto:${clinic.email}`} className="hover:text-synapse-300">
                {clinic.email}
              </a>
            </li>
          </ul>
          <button type="button" onClick={openBooking} className="btn-ghost mt-6 !py-2.5">
            Book a consultation
          </button>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-dim">
            © {year} {clinic.name}, Gorakhpur. All rights reserved.
          </p>
          <p className="text-xs text-ink-dim">
            {clinic.doctor.registration}
          </p>
          <p className="text-xs text-ink-dim">
            Surgical outcomes vary by patient. This site shares information, not individual
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}