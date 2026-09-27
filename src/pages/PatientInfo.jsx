import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  HeartPulse,
  PhoneCall,
  Scan,
  Stethoscope,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'
import { useBooking } from '../components/booking/AppointmentModal'
import { clinic } from '../data/site'
import { faqs, firstVisit, diagnosticChecklist, postOpGuidelines } from '../data/faqs'

export default function PatientInfo() {
  const { openBooking } = useBooking()

  return (
    <>
      <PageHero
        eyebrow="Patient resources"
        title="What to expect, from the first phone call to the last follow-up"
        lead="Most of the fear around neurological problems is the fear of not knowing what happens next. These pages are the honest version of that what-happens-next."
      >
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={openBooking} className="btn-primary">
            <CalendarCheck size={16} /> Book first consultation
          </button>
          <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency">
            <PhoneCall size={16} /> Emergency helpline
          </a>
        </div>
      </PageHero>

      {/* FIRST VISIT */}
      <section className="section-pad relative">
        <div className="container-page">
          <SectionHeading
            eyebrow="Your first visit"
            title="Four things to expect in the consultation room"
            lead="A first consultation here is deliberately different from a rushed clinic visit. It is longer, it is open, and it ends with clarity."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {firstVisit.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="glass card-hover relative h-full rounded-2xl p-6">
                  <span className="font-mono text-xs font-bold text-gold-400/80">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC CHECKLIST */}
      <section className="section-pad relative border-y border-white/5 bg-night-950/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Diagnostic checklist"
            title="The scans used in neurosurgery, and how to prepare"
            lead="No scan is ordered carelessly. Here is what each common test is for, how to prepare, and how long it takes — so the day of your scan is calm."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {diagnosticChecklist.map((d, i) => (
              <Reveal key={d.test} delay={(i % 2) * 0.08}>
                <div className="glass h-full rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="flex min-w-0 items-center gap-2.5 font-display text-base font-semibold text-ink">
                      <Scan size={18} className="shrink-0 text-synapse-400" /> {d.test}
                    </h3>
                    <span className="chip max-w-full text-[11px]">{d.duration}</span>
                  </div>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-medium text-synapse-300">What it shows</dt>
                      <dd className="mt-1 leading-relaxed text-ink-mute">{d.why}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-synapse-300">How to prepare</dt>
                      <dd className="mt-1 leading-relaxed text-ink-mute">{d.prepare}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POST-OP GUIDELINES */}
      <section className="section-pad relative">
        <div className="container-page">
          <SectionHeading
            eyebrow="After surgery"
            title="The recovery rules that matter most"
            align="center"
            lead="A good operation is half the work. The other half happens at home, in the weeks after — and these are the rules that protect it."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="glass h-full rounded-3xl p-7">
                <p className="font-display text-lg font-semibold text-ink">After spine surgery</p>
                <ul className="mt-5 space-y-3.5">
                  {postOpGuidelines.spine.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-mute">
                      <HeartPulse size={15} className="mt-0.5 shrink-0 text-gold-400" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass h-full rounded-3xl p-7">
                <p className="font-display text-lg font-semibold text-ink">After brain surgery</p>
                <ul className="mt-5 space-y-3.5">
                  {postOpGuidelines.brain.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-mute">
                      <HeartPulse size={15} className="mt-0.5 shrink-0 text-gold-400" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold-500/25 bg-gold-500/[0.06] p-5 text-center text-sm leading-relaxed text-gold-200">
              These are general guidelines. Your surgeon will give you a written, personal
              discharge note — where it differs, the personal note wins.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad relative border-y border-white/5 bg-night-950/40">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <SectionHeading
              eyebrow="Common questions"
              title="Asked often, answered honestly"
              lead="These are the questions families ask most. If yours is not here, phone the clinic — a real person answers, not a recording."
            />
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-3">
                {[
                  { icon: Stethoscope, text: 'A question of your own? Call the OPD line and ask directly.' },
                  { icon: ClipboardList, text: 'Procedure-specific queries are best answered in the consultation, scan in hand.' },
                ].map((c) => (
                  <div key={c.text} className="glass flex items-start gap-3 rounded-2xl p-4 text-sm text-ink-mute">
                    <c.icon size={17} className="mt-0.5 shrink-0 text-synapse-400" />
                    {c.text}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Download-ish cta note */}
      <section className="section-pad relative">
        <div className="container-page">
          <Reveal>
            <div className="glass mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-3xl p-7 sm:flex-row sm:items-center sm:p-9">
              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold text-ink">
                  Bring your scans to the first visit
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  CD or pen drive with the actual images — not just the written report — plus
                  a list of everything you take, including home remedies. That is the fastest
                  path to a real answer.
                </p>
              </div>
              <button type="button" onClick={openBooking} className="btn-primary shrink-0">
                Book now <ArrowRight size={15} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}