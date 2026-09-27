import { useState } from 'react'
import {
  Bus,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Siren,
  Train,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { clinic } from '../data/site'

const inputCls =
  'w-full rounded-xl border border-white/10 bg-night-900/70 px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-synapse-500/60 focus:outline-none focus:ring-1 focus:ring-synapse-500/40 transition-colors'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const lines = [
      f.get('name') && `Name: ${f.get('name')}`,
      f.get('phone') && `Phone: ${f.get('phone')}`,
      f.get('category') && `Problem: ${f.get('category')}`,
      f.get('date') && `Preferred date: ${f.get('date')}`,
      f.get('notes') && `Notes: ${f.get('notes')}`,
    ].filter(Boolean)
    const text = `Booking request for ${clinic.name}:\n${lines.join('\n')}`
    window.open(`${clinic.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-synapse-500/25 bg-synapse-500/[0.06] p-10 text-center">
        <CheckCircle2 size={44} className="text-synapse-400" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Almost there</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-mute">
          WhatsApp is opening with your request pre-filled. Press send and the clinic team will
          confirm your slot on this number during OPD hours. For urgent problems, call the
          emergency line now.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency">
            <PhoneCall size={16} /> Emergency line instead
          </a>
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <MessageCircle size={16} /> Open WhatsApp again
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-ink">
        Book your consultation here
      </h3>
      <p className="mt-2 text-sm text-ink-mute">
        Filled in 60 seconds. Submission opens WhatsApp with your details pre-filled, ready to
        send to the clinic — or call the numbers below directly.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-mute">
            Full name <span className="text-synapse-400">*</span>
          </span>
          <input required type="text" name="name" placeholder="Your name" className={inputCls} autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-mute">
            Mobile number <span className="text-synapse-400">*</span>
          </span>
          <input required type="tel" name="phone" inputMode="numeric" pattern="\+?[0-9 ]{9,14}" placeholder="10-digit mobile" className={inputCls} autoComplete="tel" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-mute">
            Problem category <span className="text-synapse-400">*</span>
          </span>
          <select required name="category" className={inputCls} defaultValue="">
            <option value="" disabled>Select the closest match</option>
            <option>Brain / head</option>
            <option>Spine / back / neck</option>
            <option>Stroke / paralysis</option>
            <option>Nerve / numbness / pain</option>
            <option>Child (hydrocephalus / head injury)</option>
            <option>Follow-up / second opinion</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-mute">
            Preferred date
          </span>
          <input type="date" name="date" className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-mute">
            Anything we should know?
          </span>
          <textarea name="notes" rows={4} placeholder="Duration of the problem, scans already done, current medicines…" className={inputCls} />
        </label>
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-ink-dim">
        <ShieldCheck size={14} className="shrink-0 text-gold-400" />
        Your details stay with the clinic and are used only to arrange your appointment.
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        <CalendarCheck size={16} /> Send via WhatsApp
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & emergency booking"
        title="Reach us in the way that suits the moment"
        lead="For planning and questions, the form or OPD line. For the urgent hour, the emergency helpline — it does not follow clinic timings, and neither do accidents."
      >
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency">
            <Siren size={16} className="blink-dot" /> {clinic.emergencyPhone}
          </a>
        </div>
      </PageHero>

      {/* CONTACT GRID */}
      <section className="section-pad relative">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="glass rounded-3xl p-6">
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                  <Clock size={17} className="text-synapse-400" /> OPD timings
                </h3>
                <dl className="mt-4 space-y-3">
                  {clinic.opdTimings.map((slot) => (
                    <div key={slot.day} className="flex items-start justify-between gap-3 border-b border-white/5 pb-3 text-sm last:border-0 last:pb-0">
                      <div>
                        <dt className="font-medium text-ink-soft">{slot.day}</dt>
                        <dd className="mt-0.5 text-xs text-ink-dim">{slot.note}</dd>
                      </div>
                      <dd className="shrink-0 font-semibold text-synapse-300">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs text-ink-mute">
                  <p className="font-medium text-ink-soft">Consultation fee</p>
                  <p className="mt-1">{clinic.consultationFee}</p>
                </div>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-base font-semibold text-ink">Direct lines</h3>
                <ul className="mt-4 space-y-3.5 text-sm">
                  <li>
                    <a href={`tel:${clinic.emergencyPhone}`} className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 font-semibold text-red-200 transition-colors hover:bg-red-500/20">
                      <PhoneCall size={17} className="blink-dot" />
                      Emergency — {clinic.emergencyPhone}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${clinic.phone}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-ink-soft transition-colors hover:border-synapse-500/40">
                      <PhoneCall size={17} className="text-synapse-400" />
                      OPD — {clinic.phone}
                    </a>
                  </li>
                  <li>
                    <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-ink-soft transition-colors hover:border-green-500/40">
                      <MessageCircle size={17} className="text-green-400" />
                      WhatsApp the clinic
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-ink-soft transition-colors hover:border-synapse-500/40">
                      <Mail size={17} className="text-synapse-400" />
                      {clinic.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                  <MapPin size={17} className="text-synapse-400" /> Address
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {clinic.addressLine1},
                  <br />
                  {clinic.area}. {clinic.pin}
                  <br />
                  <span className="text-ink-mute">{clinic.landmark}</span>
                </p>

                <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest2 text-ink-dim">
                  How to reach
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm text-ink-mute">
                  <li className="flex items-start gap-2.5">
                    <Train size={15} className="mt-0.5 shrink-0 text-synapse-400" />
                    From Gorakhpur Junction railway station: 10–15 minutes by auto/e-rickshaw.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Bus size={15} className="mt-0.5 shrink-0 text-synapse-400" />
                    From the main bus stand: short ride towards Betiahata Chauraha.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Landmark size={15} className="mt-0.5 shrink-0 text-synapse-400" />
                    Buses from Kushinagar, Deoria, Maharajganj & Basti stop within walking
                    reach.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="container-page">
        <SectionHeading
          eyebrow="Find us"
          title="On the map of Gorakhpur"
          lead="We are in Betiahata — the corridor where Gorakhpur already does its serious medical business."
        />
        <Reveal delay={0.1}>
          <div className="glass mt-8 overflow-hidden rounded-3xl">
            <div className="relative aspect-[16/9] min-h-[340px] w-full">
              <iframe
                title="Map — Nath Neuro Centre, Betiahata, Gorakhpur"
                src={clinic.mapsEmbed}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="glass-strong pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-synapse-300">
                  Opposite DIG Bungalow, Betiahata
                </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Emergency band */}
      <section className="section-pad relative">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-950/50 via-night-900 to-night-900 p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
                  <Siren size={26} strokeWidth={1.6} className="blink-dot" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    Emergency hour? Do not fill a form.
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-mute">
                    Head injury, sudden weakness, severe headache with vomiting, a seizure — the
                    helpline is answered around the clock, in Hindi and English, and gives you
                    step-by-step instructions before you travel.
                  </p>
                </div>
                <a href={`tel:${clinic.emergencyPhone}`} className="btn-emergency shrink-0">
                  <PhoneCall size={16} /> {clinic.emergencyPhone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}