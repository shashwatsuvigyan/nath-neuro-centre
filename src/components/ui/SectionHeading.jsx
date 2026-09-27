import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const leadAlign = align === 'center' ? 'mx-auto' : ''

  return (
    <Reveal
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="chip uppercase tracking-widest2 text-synapse-300">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      )}
      {lead && (
        <p className={`mt-1 max-w-2xl text-base leading-relaxed text-ink-mute sm:text-lg ${leadAlign}`}>
          {lead}
        </p>
      )}
    </Reveal>
  )
}