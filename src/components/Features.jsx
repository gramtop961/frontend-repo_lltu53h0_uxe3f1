import { Cpu, Zap, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'AI-native foundations',
    desc: 'Semantic components and tokens that adapt in real-time to context and data.'
  },
  {
    icon: Zap,
    title: 'Lightning performance',
    desc: 'Optimized for speed with smart loading, image optimization, and minimal JS.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    desc: 'Hardened patterns, sanitized inputs, and privacy-safe telemetry.'
  },
  {
    icon: Sparkles,
    title: 'Beautiful interactions',
    desc: 'Micro-animations and hover states that feel delightful without distraction.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(30%_40%_at_100%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Crafted for clarity</h2>
          <p className="mt-4 text-slate-300">A clean system designed for focus. Fewer distractions, more signal.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all shadow-[0_10px_30px_-12px_rgba(99,102,241,0.25)]">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-white/10 flex items-center justify-center text-cyan-300">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 rounded-2xl pointer-events-none transition-opacity bg-gradient-to-br from-cyan-400/5 to-violet-500/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
