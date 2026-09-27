import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  PhoneCall,
  Scan,
  ShieldCheck,
} from 'lucide-react'
import NeuralCanvas from '../components/effects/NeuralCanvas'
import ServiceCard from '../components/ui/ServiceCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import PhotoFrame from '../components/ui/PhotoFrame'
import CTASection from '../components/ui/CTASection'
import { useBooking } from '../components/booking/AppointmentModal'
import { clinic } from '../data/site'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'

const heroStats = [
  { icon: Award, label: 'MCh — Gold Medalist' },
  { icon: Scan, label: 'Scans reviewed with you, on-screen' },
  { icon: ShieldCheck, label: 'Surgery only when it truly helps' },
  { icon: MessageCircle, label: 'Explained in plain Hindustani' },
]

const whyUs = [
  {
    icon: MessageCircle,
    title: 'Straight answers, not scare stories',
    text: 'You get an honest reading of your scan and an honest reading of your options. If surgery is not needed, you will be told that with the same clarity as when it is.',
  },
  {
    icon: Scan,
    title: 'Your scan, on the screen, together',
    text: 'The MRI or CT is not filed away after a verdict. It is opened in front of you, and the exact problem is pointed out — where the nerve is pressed, what the lesion looks like, why it matters.',
  },
  {
    icon: PhoneCall,
    title: 'A phone line that works at 2 AM',
    text: 'After an accident, minutes decide the brain. The emergency line is answered by people who triage you immediately and tell you plainly what to do before you even reach the hospital.',
  },
  {
    icon: Clock,
    title: 'Recovery plans that respect real life',
    text: 'A truck driver, a farmer, a student, a shopkeeper — your return to work is planned around how you actually live in Purvanchal, not around a generic schedule.',
  },
]

export default function Home() {
  const { openBooking } = useBooking()

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-36">
        <div className="absolute inset-0 grid-texture opacity-70" aria-hidden="true" />
        <NeuralCanvas className="absolute inset-0 h-full w-full opacity-70" density={110} interactive />

        <div className="pointer-events-none absolute -top-32 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-cobalt-500/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-synapse-500/10 blur-3xl" aria-hidden="true" />

        <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              className="chip mb-6 uppercase tracking-widest2 text-synapse-300"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {clinic.name} · {clinic.area}
            </motion.p>

            <motion.h1
              className="font-display text-[2.6rem] font-semibold leading-[1.08] text-ink sm:text-6xl lg:text-[4.25rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
            >
              Precision care for the{' '}
              <span className="text-shimmer">brain,</span> the spine, and the life in between.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
            >
              You do not need to pack bags for Lucknow or Delhi to get an honest neurological
              answer. Dr. Rahul Nath Tiwari (MBBS, MS, MCh Gold Medalist) offers careful
              diagnosis, modern microsurgery and straight talk about treatment — in Betiahata,
              at the centre of Gorakhpur, close to the people of Purvanchal.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <button type="button" onClick={openBooking} className="btn-primary">
                <CalendarCheck size={17} /> Book a consultation
              </button>
              <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency">
                <PhoneCall size={17} className="blink-dot" /> 24×7 Emergency Helpline
              </a>
            </motion.div>

            <motion.ul
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              {heroStats.map((s) => (
                <li key={s.label} className="flex items-center gap-2.5 text-sm text-ink-mute">
                  <s.icon size={16} className="shrink-0 text-gold-400" />
                  {s.label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Floating OPD card */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 rounded-[2rem] bg-synapse-500/10 blur-2xl" aria-hidden="true" />
              <div className="glass-strong relative animate-float-slow rounded-3xl border-synapse-500/20 p-7 shadow-panel">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-synapse-gradient text-night-900 shadow-glow-sm">
                    <span className="text-2xl font-extrabold">N</span>
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold-400 blink-dot" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-ink">Nath Neuro Centre</p>
                    <p className="text-xs uppercase tracking-widest2 text-synapse-300/90">
                      Brain · Spine · Nerve
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3.5 border-t border-white/10 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="mt-0.5 shrink-0 text-synapse-400" />
                    <div>
                      <p className="font-medium text-ink">OPD Hours</p>
                      <p className="text-xs text-ink-mute">
                        {clinic.opdTimings[0].time} · Monday–Saturday
                      </p>
                      <p className="text-xs text-ink-dim">{clinic.opdTimings[0].note}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-synapse-400" />
                    <div>
                      <p className="font-medium text-ink">Find us</p>
                      <p className="text-xs text-ink-mute">{clinic.area}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneCall size={16} className="mt-0.5 shrink-0 text-synapse-400" />
                    <div>
                      <p className="font-medium text-ink">Emergency (always on)</p>
                      <p className="text-xs text-ink-mute">{clinic.emergencyPhone}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  <button type="button" onClick={openBooking} className="btn-primary !px-3 !py-2.5 text-xs">
                    Book visit
                  </button>
                  <Link to="/contact" className="btn-ghost !px-3 !py-2.5 text-xs">
                    How to reach
                  </Link>
                </div>
              </div>

              <div className="relative mt-5 flex justify-start pl-2">
                <div className="glass animate-float-slower rounded-2xl border-gold-500/30 px-4 py-3">
                  <p className="flex items-center gap-2 text-xs font-semibold text-gold-300">
                    <Award size={15} /> MCh — Gold Medalist
                  </p>
                  <p className="mt-0.5 text-[11px] text-ink-mute">Neurosurgery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night-900 to-transparent" aria-hidden="true" />
      </section>

      {/* ============ DOCTOR SPOTLIGHT ============ */}
      <section className="section-pad relative">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative">
            <PhotoFrame
              src={clinic.photos.portrait}
              alt="Dr. Rahul Nath Tiwari, Consultant Neurosurgeon, Nath Neuro Centre"
              aspect="aspect-[4/3]"
            >
              <span className="glass-strong absolute inset-x-3 bottom-3 rounded-xl px-4 py-2.5">
                <span className="flex items-center gap-2 text-xs font-semibold text-ink">
                  <Award size={14} className="text-gold-400" /> Dr. Rahul Nath Tiwari
                </span>
                <span className="mt-0.5 block text-[11px] text-synapse-300/90">
                  MBBS, MS, MCh — Gold Medalist
                </span>
              </span>
            </PhotoFrame>
          </Reveal>

          <div>
            <Reveal>
              <span className="chip uppercase tracking-widest2 text-gold-300">
                About the surgeon
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Dr. Rahul Nath Tiwari
              </h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-synapse-300">
                MBBS, MS, MCh — Gold Medalist
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                A career spent training in major centres, returned to where it matters most —
                the district grid of Purvanchal. Dr. Tiwari runs a practice built on three
                habits: reading every scan with his own eyes, telling patients the truth even
                when it is uncomfortable, and operating only when an operation is genuinely
                the best of the available options.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-mute">
                His work covers the full width of neurosurgery — brain tumours, complex spine
                problems, trauma, stroke and the smaller peripheral nerve issues that quietly
                ruin people’s daily lives. In the same week he may schedule a skull base
                procedure and talk a farmer out of a surgery he does not need.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <blockquote className="mt-6 rounded-2xl border-l-2 border-gold-400 bg-white/[0.03] p-5 text-sm italic leading-relaxed text-ink-soft">
                “My first duty is to tell you the truth about what surgery can and cannot do.
                The only surgery we do is the surgery that truly helps.”
              </blockquote>
              <Link
                to="/about-doctor"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-synapse-300 transition-colors hover:text-synapse-400"
              >
                Read the full profile <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="section-pad relative border-y border-white/5 bg-night-950/40">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Core specialisations"
              title="Where this clinic concentrates its care"
              lead="Six areas of neurological work, each handled with the same discipline — imaging first, an honest conversation next, treatment only when it earns its place."
            />
            <Reveal delay={0.1}>
              <Link to="/services" className="btn-ghost">
                All services <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section-pad relative">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why families choose us"
            title="Because worry is handled as carefully as the diagnosis"
            lead="Every family that walks in arrives carrying the same two questions: what is wrong, and what comes next. We answer both — in order, and in plain language."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="glass card-hover h-full rounded-2xl p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                    <item.icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY STORIES ============ */}
      <section className="section-pad relative border-y border-white/5 bg-night-950/40">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recovery journeys"
              title="People who walked back into their lives"
              lead="Sample journeys in the clinic's own voice — real occupations, real treatment paths, and the slow return of ordinary life. Verified patient stories will be published as they are consented."
            />
            <Reveal delay={0.1}>
              <Link to="/testimonials" className="btn-ghost">
                All stories & case studies <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <TestimonialCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCATION & HOURS ============ */}
      <section className="section-pad relative">
        <div className="container-page">
          <SectionHeading
            eyebrow="Clinic at a glance"
            title="Easy to find, easy to reach, easy to talk to"
            lead={`Sitting in Betiahata — the medical corridor trusted across Gorakhpur and Purvanchal — ${clinic.name.toLowerCase()} is built for people who cannot afford to travel far for care that should be nearby.`}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="glass h-full overflow-hidden rounded-3xl">
                <div className="relative aspect-video min-h-[260px] w-full">
                  <iframe
                    title="Map — Nath Neuro Centre, Betiahata, Gorakhpur"
                    src={clinic.mapsEmbed}
                    className="absolute inset-0 h-full w-full border-0 grayscale-[0.3] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <span className="glass-strong pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-synapse-300">
                    <a href={clinic.directionsLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 pointer-events-auto">
                      <MapPin size={13} /> Get directions
                    </a>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-2">
              <div className="glass flex h-full flex-col rounded-3xl p-7">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <MapPin size={18} className="text-synapse-400" /> OPD hours & location
                </h3>
                <dl className="mt-5 flex-1 space-y-4 text-sm">
                  {clinic.opdTimings.map((slot) => (
                    <div key={slot.day} className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
                      <div>
                        <dt className="font-medium text-ink">{slot.day}</dt>
                        <dd className="mt-0.5 text-xs text-ink-dim">{slot.note}</dd>
                      </div>
                      <dd className="shrink-0 text-right font-semibold text-synapse-300">{slot.time}</dd>
                    </div>
                  ))}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-ink-dim">
                      Address
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {clinic.addressLine1},<br />
                      {clinic.area}. {clinic.landmark}
                    </p>
                  </div>
                </dl>
                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  <button type="button" onClick={openBooking} className="btn-primary !px-3 text-xs">
                    Book a visit
                  </button>
                  <Link to="/contact" className="btn-ghost !px-3 text-xs">
                    Contact details
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        emergency
        title="A worried family should never feel alone with a scan in hand"
        lead="Call us first. We listen, we triage, we guide — and we tell you honestly what deserves a hospital visit and what does not."
      />
    </>
  )
}