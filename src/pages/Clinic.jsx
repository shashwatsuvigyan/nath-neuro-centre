import {
  Ambulance,
  Bed,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  Landmark,
  MapPin,
  Microscope,
  Scan,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Placeholder from '../components/ui/Placeholder'
import CTASection from '../components/ui/CTASection'
import { useBooking } from '../components/booking/AppointmentModal'
import { clinic, hospitalPartner } from '../data/site'

const facilities = [
  {
    icon: Stethoscope,
    title: 'Consultation OPD cabins',
    text: 'Private, unhurried consultation rooms where scans go on the screen and questions go on the table — yours and ours.',
  },
  {
    icon: Microscope,
    title: 'Neurological examination room',
    text: 'A complete nervous-system examination station — power, sensation, reflexes, balance and cranial nerves — done in the room, not farmed out.',
  },
  {
    icon: FileText,
    title: 'Imaging & report desk',
    text: 'Arrangements for MRI, CT and angiography at partnered scan centres, with every image personally reviewed by the operating surgeon.',
  },
  {
    icon: Syringe,
    title: 'Minor procedures & nerve blocks',
    text: 'Selected minor interventions — drainages, nerve blocks, injections and small wound procedures — performed on-site under strict sterile discipline.',
  },
  {
    icon: Bed,
    title: 'Surgical admission coordination',
    text: `Planned admissions and surgery route through ${hospitalPartner}, with the clinic remaining the single point of contact for the family.`,
  },
  {
    icon: Ambulance,
    title: 'Trauma & ambulance coordination',
    text: 'For head injuries and emergencies, the clinic liaises with ambulances and emergency routes so a critical patient never waits on paperwork.',
  },
]

const safety = [
  {
    title: 'Surgical safety checklists',
    text: 'Every planned surgery follows a written pre-operation checklist — identity, side, site, imaging and blood-sugar status confirmed before the first incision.',
  },
  {
    title: 'Sterility without compromise',
    text: 'Instruments are sterilised to the same standard expected in a teaching hospital, and the process is not shortened to save time.',
  },
  {
    title: 'Infection control in the clinic',
    text: 'Hands, surfaces and equipment follow a daily cleaning and disinfection routine. Patients with open wounds are attended with strict precaution.',
  },
  {
    title: 'Medicine reconciliation',
    text: 'Blood thinners, diabetes medicines and herbal remedies all interact with neurosurgery. Every medicine a patient takes is reviewed before any procedure.',
  },
  {
    title: 'Documented consent',
    text: 'Risks, benefits and alternatives are written down and signed in language the patient and family understand — never rushed, never taken for granted.',
  },
  {
    title: 'Follow-up accountability',
    text: 'Discharge is not the end. Each surgery gets a dated follow-up plan, and the clinic keeps a record that shows up for the patient even if the patient forgets.',
  },
]

export default function Clinic() {
  const { openBooking } = useBooking()

  return (
    <>
      <PageHero
        eyebrow="Nath Neuro Centre"
        title="A clinic built around one discipline: the nervous system"
        lead="Not a general hospital with a neurosurgery wing — a dedicated centre where brain, spine and nerve care is the whole focus, and where every desk in the building is working on getting a single thing right for you."
      />

      {/* OVERVIEW + IMAGE */}
      <section className="section-pad relative">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="About the centre"
                title="The whole journey under one roof"
                lead={null}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  From the first suspicious headache to the last follow-up after surgery, the
                  work of Nath Neuro Centre stays in one hand. The scan is arranged, read,
                  explained and acted upon in the same chain — no lost CDs, no contradictory
                  advice from three different counters, no one talking over the family’s head.
                </p>
                <p className="text-ink-mute">
                  Patients often arrive carrying months of confusion: medicines, injections,
                  physiotherapy that never quite worked, reports from three cities. The first
                  job here is uncounting that confusion — checking what has genuinely been
                  tried, re-reading the images independently, and putting a single clear
                  diagnosis back on the table.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { n: 'Dedicated', l: 'to neuroscience alone' },
                  { n: 'Single', l: 'point of surgical contact' },
                  { n: 'On-screen', l: 'scan reviews, every visit' },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-2xl p-4 text-center">
                    <p className="font-display text-lg font-bold text-synapse-300">{s.n}</p>
                    <p className="mt-0.5 text-xs text-ink-mute">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Placeholder label="Photo of the clinic reception / waiting area at Nath Neuro Centre" />
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Placeholder
                label="OPD consultation cabin"
                className="!rounded-2xl"
                ratio="aspect-[4/3]"
              />
              <Placeholder
                label="Neurological examination area"
                className="!rounded-2xl"
                ratio="aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section-pad relative border-y border-white/5 bg-night-950/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Inside the centre"
            title="Facilities that follow the patient, not the other way around"
            align="center"
            lead="Every arrangement here exists to remove one point of friction from a frightening journey — transport, coordination, paperwork, clarity."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="glass card-hover h-full rounded-2xl p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-synapse-500/30 bg-synapse-500/10 text-synapse-300">
                    <f.icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC COORDINATION */}
      <section className="section-pad relative">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                <Scan size={22} strokeWidth={1.7} />
              </div>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Diagnostic coordination, done properly
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                An MRI machine does not live inside this clinic building. What lives here is the
                discipline of making sure the <em>right</em> scan happens at a trusted centre,
                that its images reach the surgeon intact, and that it is never just “a report”.
              </p>
              <p className="text-ink-mute">
                If a patient arrives with eight-month-old images, they are not forced into a
                fresh scan reflexively — often the old film has everything needed to answer the
                real question. When a scan genuinely must be repeated, you will be told why in
                one sentence, and the money is spent with purpose.
              </p>
            </div>
            <div className="mt-7 space-y-3">
              {[
                'Scans arranged at nearby partnered MRI / CT centres with prior guidance on preparation',
                'Digital images reviewed on-screen, not judged from the written report alone',
                'Old scans accepted from other hospitals — often the diagnosis is already there, waiting to be read properly',
                'Angiography and functional imaging coordinated when surgery demands exact detail',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-ink-soft">
                  <ClipboardCheck size={17} className="mt-0.5 shrink-0 text-synapse-400" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Placeholder label="Photo of the diagnostic / report review desk at Nath Neuro Centre" />
          </Reveal>
        </div>
      </section>

      {/* SAFETY */}
      <section className="section-pad relative border-y border-white/5 bg-night-950/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient safety"
            title="The slow, unglamorous work that protects you"
            align="center"
            lead="Safety in surgery is mostly a list of small disciplines done without exceptions. These are the six that matter most here."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {safety.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="glass card-hover h-full rounded-2xl p-6">
                  <ShieldCheck size={20} className="mb-3 text-synapse-400" />
                  <h3 className="font-display text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION ADVANTAGE */}
      <section className="section-pad relative">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                <Landmark size={22} strokeWidth={1.7} />
              </div>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Why Betiahata, and why it matters to you
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Betiahata has long been the medical face of Gorakhpur — the stretch where
                families from the district and beyond already come for serious treatment. For
                the people of Kushinagar, Deoria, Maharajganj, Basti, Sant Kabir Nagar and
                Siddharthnagar, that means neurological care without the two-day trip to
                Lucknow and the guest-house economics that come with it.
              </p>
              <p className="text-ink-mute">
                Equally important for trauma: head injuries happen on Gorakhpur’s roads at all
                hours. A working emergency line and a centre that knows the fastest route from
                the ring road to the operating table is an advantage measured in brain tissue,
                not kilometres.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="chip">
                <MapPin size={13} className="text-synapse-400" /> {clinic.area}
              </span>
              <span className="chip">
                <Building2 size={13} className="text-synapse-400" /> {clinic.landmark}
              </span>
              <span className="chip">
                <Users size={13} className="text-synapse-400" /> Serving 6+ districts of Purvanchal
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass overflow-hidden rounded-3xl">
              <div className="relative aspect-video min-h-[260px] w-full">
                <iframe
                  title="Map — Betiahata, Gorakhpur"
                  src={clinic.mapsEmbed}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="glass-strong pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-synapse-300">
                  Opposite DIG Bungalow, Betiahata
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-ink-dim">Getting here</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {clinic.addressLine1}, {clinic.area}. {clinic.landmark}. Parking is available
                  for two-wheelers and cars; patients using autorickshaws or e-rickshaws from
                  the railway station and bus stand reach comfortably.
                </p>
                <button type="button" onClick={openBooking} className="btn-primary mt-5 w-full">
                  <CalendarCheck size={16} /> Plan your first visit
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="See the clinic once, and you will feel the difference"
        lead="Walk in for a consultation and you will see what sets neurologically-focused care apart — before a single medicine is prescribed."
      />
    </>
  )
}