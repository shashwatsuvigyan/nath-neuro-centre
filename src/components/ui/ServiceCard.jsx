import { ArrowRight, Brain, Activity, Siren, HeartPulse, ShieldCheck, Baby } from 'lucide-react'
import { Link } from 'react-router-dom'

const icons = {
  Brain,
  Activity,
  Siren,
  HeartPulse,
  ShieldCheck,
  Baby,
}

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Brain

  return (
    <Link
      to="/services"
      className="glass card-hover group relative flex flex-col overflow-hidden rounded-2xl p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_right,rgba(0,242,254,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-synapse-500/30 bg-synapse-500/10 text-synapse-300 transition-all duration-300 group-hover:shadow-glow-sm">
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-synapse-300 transition-transform duration-300 group-hover:translate-x-1">
        Read more <ArrowRight size={15} />
      </span>
    </Link>
  )
}