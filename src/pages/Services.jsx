import {
  AlertTriangle,
  ArrowRight,
  Brain,
  Activity,
  Siren,
  HeartPulse,
  ShieldCheck,
  Baby,
  Check,
  PhoneCall,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTASection from '../components/ui/CTASection'
import { useBooking } from '../components/booking/AppointmentModal'
import { services } from '../data/services'
import { clinic } from '../data/site'

const icons = {
  Brain,
  Activity,
  Siren,
  HeartPulse,
  ShieldCheck,
  Baby,
}

export default function Services() {
  const { openBooking } = useBooking()

  return (
    <>
      <PageHero
        eyebrow="Services & surgeries"
        title="Neurological care, explained one condition at a time"
        lead="Each of these problems behaves differently, and each deserves its own honest explanation. Choose the one closest to what you are experiencing."
      />

      {/* Anchor nav */}
      <div className="sticky top-[104px] z-30 border-b border-white/5 bg-night-900/90 backdrop-blur-xl">
        <div className="container-page flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]" style={{ scrollbarWidth: 'none' }}>
          {services.map((s) => {
            const Icon = icons[s.icon] || Brain
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="chip shrink-0 whitespace-nowrap hover:border-synapse-500/50 hover:text-synapse-300"
              >
                <Icon size={13} /> {s.title.split(' & ')[0]}
              </a>
            )
          })}
        </div>
      </div>

      {/* Service details */}
      <section className="relative">
        <div className="container-page space-y-20 py-20 lg:space-y-24 lg:py-24">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || Brain
            const flip = i % 2 === 1
            return (
              <article key={service.id} id={service.id} className="scroll-mt-44">
                <Reveal>
                  <div
                    className={`glass grid grid-cols-1 gap-10 rounded-3xl p-7 sm:p-10 lg:grid-cols-2 lg:gap-14`}
                  >
                    <div className={flip ? 'lg:order-2' : ''}>
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-synapse-500/30 bg-synapse-500/10 text-synapse-300 shadow-glow-sm">
                        <Icon size={26} strokeWidth={1.6} />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-gold-400">
                        Service {String(i + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-ink-soft">{service.short}</p>

                      <div className="mt-6 rounded-2xl border border-gold-500/25 bg-gold-500/[0.07] p-5">
                        <p className="flex items-start gap-2 text-sm text-gold-200">
                          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-gold-400" />
                          <span>
                            <span className="font-semibold">Don’t wait on this:</span>{' '}
                            {service.urgentSigns}
                          </span>
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2.5">
                        <button type="button" onClick={openBooking} className="btn-primary !px-5 !py-3 text-xs">
                          Book consultation
                        </button>
                        <a href={`tel:${clinic.emergencyPhone}`} className="btn-ghost !px-5 !py-3 text-xs">
                          <PhoneCall size={15} /> Emergency line
                        </a>
                      </div>
                    </div>

                    <div className={flip ? 'lg:order-1' : ''}>
                      <div className="h-full space-y-6">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-synapse-300">
                            Conditions we treat
                          </h3>
                          <ul className="mt-4 grid gap-2.5 sm:grid-cols-1">
                            {service.conditions.map((c) => (
                              <li key={c} className="flex items-start gap-2.5 text-sm text-ink-soft">
                                <Check size={15} className="mt-0.5 shrink-0 text-synapse-400" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t border-white/10 pt-6">
                          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-synapse-300">
                            How we approach it
                          </h3>
                          <ul className="mt-4 space-y-3">
                            {service.approach.map((a) => (
                              <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-mute">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </article>
            )
          })}
        </div>
      </section>

      {/* Emergency strip */}
      <section className="section-pad relative border-t border-white/5 bg-night-950/40">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-950/40 to-night-900 p-8 sm:flex-row sm:items-center sm:p-10">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
                <Siren size={26} strokeWidth={1.6} className="blink-dot" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  If it is an emergency, skip the form
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  Head injury after a fall or accident, sudden weakness, severe headache with
                  vomiting, or a seizure — call the around-the-clock line. You will be told
                  clearly what to do before you travel, and where to come.
                </p>
              </div>
              <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency shrink-0">
                <PhoneCall size={16} /> {clinic.emergencyPhone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-page -mt-6">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-sm text-ink-dim">
            Not sure which of these matches your problem?
            <Link to="/patient-info" className="inline-flex items-center gap-1 font-semibold text-synapse-300 hover:text-synapse-400">
              Start at patient info <ArrowRight size={14} />
            </Link>
          </p>
        </Reveal>
      </div>

      <CTASection
        title="Bring your scan along — we read it together"
        lead="A consultation here is where an answer begins: what the scan shows, whether treatment is needed, and exactly what it would involve."
      />
    </>
  )
}