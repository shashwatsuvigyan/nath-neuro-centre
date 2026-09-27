import { Link } from 'react-router-dom'
import { Home, PhoneCall } from 'lucide-react'
import NeuralCanvas from '../components/effects/NeuralCanvas'
import { clinic } from '../data/site'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-36">
      <NeuralCanvas className="absolute inset-0 h-full w-full opacity-50" density={50} />
      <div className="relative z-10 text-center">
        <p className="font-mono text-sm uppercase tracking-widest2 text-synapse-300">Error 404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">
          This page lost its way
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-mute sm:text-base">
          Some pages go missing the way patients do — but unlike a scan that needs chasing, this
          one is already found. Head back to the front desk.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Back to homepage
          </Link>
          <a href={`tel:${clinic.emergencyPhone}`} className="btn-ghost">
            <PhoneCall size={16} /> Emergency helpline
          </a>
        </div>
      </div>
    </section>
  )
}