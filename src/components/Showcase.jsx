export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(59,130,246,0.10),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Visual workflow</h2>
          <p className="mt-4 text-slate-300">Clear previews of dashboards and automations using gradient cards and soft shadows.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="relative rounded-3xl p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 ring-1 ring-white/10 shadow-[0_25px_60px_-20px_rgba(2,6,23,0.7)]">
              <div className="aspect-[16/10] rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.15),rgba(168,85,247,0.15))] ring-1 ring-white/10 overflow-hidden">
                <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_20%_60%,rgba(168,85,247,0.2),transparent_40%)]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Automation #{i}</p>
                  <p className="text-slate-400 text-sm">Clean device mockups and flows</p>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 ring-1 ring-white/10 text-slate-300">
                  Preview
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
