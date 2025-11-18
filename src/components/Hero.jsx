import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden flex items-center">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(34,211,238,0.15),transparent),radial-gradient(40%_40%_at_80%_10%,rgba(168,85,247,0.18),transparent),radial-gradient(40%_40%_at_20%_80%,rgba(59,130,246,0.12),transparent)]" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Headline + CTAs */}
        <div className="py-24 lg:py-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-cyan-300 text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Live AI design system
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Simplicity, engineered with intelligence
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
            Build modern experiences powered by an AI design engine. Clean, fast, and beautiful by default—optimized for clarity and conversion.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold shadow-[0_10px_30px_-10px_rgba(34,211,238,0.8)] hover:shadow-[0_20px_40px_-12px_rgba(34,211,238,0.9)] transition-all">
              Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-white font-semibold">
              See it in action
            </a>
          </div>
        </div>

        {/* Right: Spline animation */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(30,58,138,0.6)]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* frosted overlay accents */}
          <div className="pointer-events-none absolute -inset-8 bg-gradient-to-b from-transparent via-transparent to-slate-950/40" />
        </div>
      </div>
    </section>
  )
}
