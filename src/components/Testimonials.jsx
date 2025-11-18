export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_0%,rgba(34,211,238,0.10),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Loved by teams</h2>
          <p className="mt-4 text-slate-300">Professional yet approachable. Clean, fast, and delightful to use.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Avery', role: 'Product Lead', text: 'It feels like the future — elegant, fast, and purposeful.'
          }, {
            name: 'Jordan', role: 'Engineer', text: 'The details are incredible. Micro-interactions everywhere, none distracting.'
          }, {
            name: 'Quinn', role: 'Designer', text: 'Finally a system that looks premium without heavy-handed effects.'
          }].map((t) => (
            <div key={t.name} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 shadow-[0_20px_60px_-25px_rgba(2,6,23,0.7)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 ring-1 ring-white/10" />
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-300">“{t.text}”</p>
              <div className="mt-4 flex text-yellow-300">{'★★★★★'}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
