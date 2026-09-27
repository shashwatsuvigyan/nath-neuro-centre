import { ImageOff } from 'lucide-react'

// Honest placeholder until real clinic media is provided.
// Renders a clear bracket so nobody mistakes it for a live photo.
export default function Placeholder({ label, className = '', ratio = 'aspect-[4/3]' }) {
  return (
    <div
      className={`flex w-full ${ratio} flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center ${className}`}
    >
      <ImageOff size={28} className="text-ink-dim" strokeWidth={1.5} />
      <p className="font-mono text-xs uppercase tracking-widest text-ink-dim">[Placeholder]</p>
      <p className="max-w-[240px] text-sm text-ink-mute">{label}</p>
    </div>
  )
}