export default function PhotoFrame({
  src,
  alt,
  aspect = 'aspect-[5/4]',
  className = '',
  eager = false,
  children,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-night-800 ${aspect} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="h-full w-full object-cover object-top"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}