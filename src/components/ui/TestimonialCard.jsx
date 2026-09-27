import { Quote, Star } from 'lucide-react'

export function StarRow({ rating = 5, className = '' }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  )
}

export default function TestimonialCard({ item, className = '' }) {
  return (
    <figure
      className={`glass card-hover relative flex h-full flex-col rounded-2xl p-6 ${className}`}
    >
      <Quote size={28} className="mb-4 text-synapse-500/60" strokeWidth={1.5} />
      <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-ink">{item.name}</p>
            <p className="text-xs text-ink-mute">{item.area}</p>
          </div>
          <StarRow rating={item.rating} />
        </div>
        <p className="mt-3 text-xs text-ink-dim">{item.condition}</p>
        {item.verified && (
          <p className="mt-1 text-[11px] text-gold-400/90">
            Verified with the clinic{"'"}s consent records
          </p>
        )}
      </figcaption>
    </figure>
  )
}