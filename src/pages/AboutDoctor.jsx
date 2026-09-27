import {
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  GraduationCap,
  HeartHandshake,
  Scan,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import PhotoFrame from '../components/ui/PhotoFrame'
import CTASection from '../components/ui/CTASection'
import { clinic } from '../data/site'

const qualifications = [
  {
    degree: 'MBBS — Gold Medalist',
    detail: 'King George’s Medical University, Lucknow. The foundation years of clinical medicine, completed with distinction.',
  },
  {
    degree: 'MS (General Surgery)',
    detail: 'S.N. Medical College, Agra. Years of operating discipline across general and trauma surgery before concentrating on the nervous system.',
  },
  {
    degree: 'MCh (Neurosurgery) — Gold Medalist',
    detail: 'S.M.S. Medical College, Jaipur. The super-specialty degree in neurosurgery, earned with the top academic standing of the batch.',
  },
]

const philosophy = [
  {
    icon: Scan,
    title: 'See first, decide second',
    text: 'Every scan is read by the operating surgeon’s own eyes, every time. A written radiology report is a valuable second opinion, never a substitute for walking through the images together.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk is discussed, not buried',
    text: 'Brain and spine surgery carries real risk, and pretending otherwise is disrespectful. Risks are named plainly, weighed against the risk of doing nothing, and the family decides with full information.',
  },
  {
    icon: HeartHandshake,
    title: 'A surgeon who stays part of the follow-up',
    text: 'The relationship does not end at discharge. Recovery from spine and brain work is long, and this clinic stays on the phone with you through it — adjusting the plan when life throws its next surprise.',
  },
  {
    icon: Stethoscope,
    title: 'Conservative care is not surrender',
    text: 'Recommending physiotherapy instead of surgery is a decision made with the same care as recommending surgery. Neither choice is made to please anyone except the patient’s long-term wellbeing.',
  },
]

export default function AboutDoctor() {
  return (
    <>
      <PageHero
        eyebrow="About the surgeon"
        title={
          <>
            Dr. Rahul Nath Tiwari
          </>
        }
        lead="MBBS, MS, MCh — Gold Medalist. A neurosurgeon who chose district India over metro India, and built a practice on reading scans carefully, speaking honestly, and operating with restraint."
      />

      {/* PROFILE */}
      <section className="section-pad relative">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="lg:sticky lg:top-36">
            <PhotoFrame
              src={clinic.photos.portrait}
              alt="Dr. Rahul Nath Tiwari — Consultant Neurosurgeon, Nath Neuro Centre"
              aspect="aspect-[5/4]"
            />
            <div className="glass mt-4 rounded-2xl p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-gold-300">
                <Award size={16} /> MCh — Gold Medalist in Neurosurgery
              </p>
              <p className="mt-1.5 text-xs text-ink-mute">
                Double Gold Medalist academic record; 15+ years in neurosurgery.
              </p>
              <p className="mt-2.5 flex items-center gap-2 text-[11px] text-ink-dim">
                <BadgeCheck size={13} className="text-synapse-400" />
                {clinic.doctor.registration}
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                A career that came home to Purvanchal
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                The route here ran through the places where Indian neurosurgery is actually
                taught at the highest level. After ranking at the top of his MBBS batch at
                King George's Medical University, Lucknow, and completing his general surgery
                training at S.N. Medical College, Agra, Dr. Tiwari earned his MCh in
                Neurosurgery from S.M.S. Medical College, Jaipur — with gold-medal standing —
                followed by a post-MCh senior residency at Lok Nayak Hospital and Maulana Azad
                Medical College, New Delhi.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                As a consultant brain and spine surgeon he then served super-speciality
                hospitals in the NCR — Metro Super Speciality Hospital, Noida, and Columbia
                Asia Hospital, Ghaziabad — where emergency trauma craniotomies at 3 AM and slow
                elective micro-neurosurgery under magnification were both ordinary parts of the
                week. Those fifteen-plus years taught him the full arc of the discipline.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                What they did not teach him was where he would serve. Gorakhpur and the
                districts around it — Kushinagar, Deoria, Maharajganj, Basti, Siddharthnagar,
                Azamgarh — send too many of their people to Lucknow and Delhi with scans in
                hand because they believe serious nervous-system problems can only be treated
                there. Nath Neuro Centre exists to quietly change that assumption. The
                equipment a surgeon truly relies on — meticulous technique, honest judgement,
                and clean, careful surgery — travels well. Dr. Tiwari chose to bring it to
                Betiahata.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {qualifications.map((q) => (
                  <div key={q.degree} className="glass card-hover rounded-2xl p-5">
                    <GraduationCap size={20} className="mb-3 text-synapse-400" />
                    <p className="font-display text-sm font-bold text-ink">{q.degree}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-mute">{q.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr]">
                <PhotoFrame
                  src={clinic.photos.consultation}
                  alt="Dr. Rahul Nath Tiwari during consultation at Nath Neuro Centre"
                  aspect="aspect-[4/3]"
                />
                <div className="glass flex flex-col justify-center rounded-3xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest2 text-synapse-300">
                    Where he has served
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />Consultant Brain & Spine Surgeon, KGMU Lucknow (Double Gold Medalist)</li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />Senior Consultant Neurosurgeon, Metro Super Speciality Hospital, Noida</li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />Senior Consultant Neurosurgeon, Columbia Asia Hospital, Ghaziabad</li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />Post-MCh Senior Resident, Lok Nayak Hospital & MAMC, New Delhi</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-widest2 text-gold-300">
                  Academic & professional focus
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    'Elective micro-neurosurgery (brain tumours & skull base)',
                    'Minimally invasive spine surgery',
                    'Emergency trauma & haemorrhage management',
                    'Peripheral nerve & entrapment surgery',
                    'Stroke stabilisation & rehabilitation coordination',
                    'Paediatric hydrocephalus care',
                    'Short-term advanced training, AIIMS Neurosurgery Education & Training School (2011)',
                    'Member, Neurological Society of India',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-synapse-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-pad relative border-y border-white/5 bg-night-950/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Surgical philosophy"
            title="Four rules that govern every operating day"
            align="center"
            lead="These are not slogans printed for a website. They are the working discipline of the clinic, visible in every consultation and every operation."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {philosophy.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.08}>
                <div className="glass card-hover flex h-full gap-5 rounded-2xl p-6">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-synapse-500/30 bg-synapse-500/10 text-synapse-300">
                    <item.icon size={22} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORD FROM DOCTOR */}
      <section className="section-pad relative">
        <div className="container-page">
          <Reveal>
            <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-synapse-500/10 blur-3xl" aria-hidden="true" />
              <Brain size={34} className="mb-6 text-synapse-400/70" strokeWidth={1.3} />
              <blockquote className="text-lg leading-relaxed text-ink sm:text-xl">
                “A scan is a picture of tissue. The person holding it is a husband, a father, a
                daughter who still has exams to give. I operate on the tissue, but I treat the
                person. That is why every consultation here ends with the family understanding
                the problem as clearly as I do — because the next decision belongs to them.”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-gold-300">
                — Dr. Rahul Nath Tiwari, MCh (Gold Medalist)
              </p>
              <p className="mt-1 text-xs text-ink-dim">
                Director & Consultant Neurosurgeon, Nath Neuro Centre
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {[
              { icon: BookOpen, label: 'Continuing surgical education, year on year' },
              { icon: Brain, label: 'Full-spectrum neurosurgery practice' },
              { icon: ShieldCheck, label: 'Transparent, consent-first decision making' },
            ].map((c) => (
              <span key={c.label} className="chip">
                <c.icon size={14} className="text-gold-400" /> {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring your problem and every scan you have"
        lead="A first consultation is an honest conversation — about your symptoms, your imaging, and what genuinely deserves to happen next."
      />
    </>
  )
}