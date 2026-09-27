import { BadgeCheck, BookOpen, HeartPulse, ShieldCheck } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import TestimonialCard from '../components/ui/TestimonialCard'
import CTASection from '../components/ui/CTASection'
import { testimonials, caseStudies } from '../data/testimonials'

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Reviews & case studies"
        title="Recovery journeys, told from the consulting room"
        lead="These are sample journeys that illustrate the normal course of good care through this clinic — the waiting, the worry, the operation, and the slow return of ordinary life. Verified, consented patient stories will replace them as they come in."
      />

      {/* TESTIMONIAL CARDS */}
      <section className="section-pad relative">
        <div className="container-page">
          <SectionHeading
            eyebrow="Sample journeys"
            title="People across the region, and the journeys that stay"
            lead="Families from Gorakhpur, Kushinagar, Deoria, Sant Kabir Nagar, Basti and Azamgarh arrive with the same two questions. These sample journeys reflect the kinds of cases seen and the way they are handled."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <Reveal key={item.id} delay={(i % 2) * 0.08}>
                <TestimonialCard item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-relaxed text-ink-mute">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-synapse-400" />
              <span>
                Names shown here are illustrative. Pending real, consented patient
                stories, these journeys stand in as typical examples — in the clinic’s own
                voice, to be replaced as authored accounts arrive.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-pad relative border-t border-white/5 bg-night-950/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Case studies"
            title="Three journeys, told start to finish"
            align="center"
            lead="Each case is a composite drawn from the typical presentation, decision and recovery that this clinic sees. Medical detail is deliberately kept plain and illustrative."
          />

          <div className="mt-14 space-y-10">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.id} delay={0.05}>
                <article
                  className={`glass grid grid-cols-1 gap-10 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1fr_1.2fr] ${
                    i % 2 === 1 ? '' : ''
                  }`}
                >
                  <div>
                    <span className="chip mb-4 uppercase tracking-widest2 text-gold-300">
                      Case study {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink">{cs.title}</h2>
                    <p className="mt-1.5 text-sm font-medium text-synapse-300">{cs.patient}</p>
                    <p className="mt-5 text-sm leading-relaxed text-ink-soft">{cs.summary}</p>

                    <div className="mt-6 rounded-2xl border border-synapse-500/25 bg-synapse-500/[0.06] p-5">
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-synapse-300">
                        <HeartPulse size={14} /> The outcome
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{cs.outcome}</p>
                    </div>

                    <div className="mt-5 rounded-2xl border border-gold-500/25 bg-gold-500/[0.06] p-5">
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300">
                        <BookOpen size={14} /> What this case teaches
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-mute">{cs.lesson}</p>
                    </div>
                  </div>

                  <div className="lg:pl-2">
                    <ol className="relative space-y-8 border-l border-white/10 pl-8">
                      {cs.journey.map((step, j) => (
                        <li key={step.stage} className="relative">
                          <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-synapse-500/40 bg-night-900 font-mono text-[10px] font-bold text-synapse-300">
                            {j + 1}
                          </span>
                          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-synapse-300">
                            {step.stage}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-ink-mute">{step.detail}</p>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-8 flex items-center gap-2 text-xs text-ink-dim">
                      <BadgeCheck size={15} className="text-gold-400" />
                      Composite case — illustrative until consented stories are published
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your own recovery story starts the same way"
        lead="With a consultation. Bring the scans, bring the questions, and leave with an honest plan."
      />
    </>
  )
}