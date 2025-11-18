export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_30px_80px_-20px_rgba(2,6,23,0.8)]">
          <div className="p-10 sm:p-14 grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to build something brilliant?</h3>
              <p className="mt-4 text-slate-300">Tell us about your idea — we’ll turn it into a working product in minutes.</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder:text-slate-400" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">What do you want to build?</label>
                <textarea rows="3" placeholder="Describe your product or workflow" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder:text-slate-400" />
              </div>
              <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition-colors">Request a demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
