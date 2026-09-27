import { useBooking } from '../booking/AppointmentModal'
import { clinic } from '../../data/site'
import Reveal from './Reveal'

// Reusable closing band used near the bottom of most pages.
export default function CTASection({
  emergency = false,
  title = 'Your first step is one phone call',
  lead = 'Talk to us before you decide anything. We listen first, then guide you — honestly, and in plain language.',
}) {
  const { openBooking } = useBooking()

  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 lg:py-16">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-synapse-500/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
              aria-hidden="true"
            />

            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-mute sm:text-base">
              {lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={openBooking} className="btn-primary">
                Book a consultation
              </button>
              {emergency && (
                <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency">
                  Emergency helpline
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}