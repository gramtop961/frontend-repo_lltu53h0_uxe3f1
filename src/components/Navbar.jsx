import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 shadow-lg shadow-blue-900/20' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="Logo" className="w-7 h-7" />
            <span className="text-white font-semibold tracking-tight">Flames Blue</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-slate-300 hover:text-white transition-colors">Showcase</a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            <a href="/test" className="px-4 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors">Run Check</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
            <a href="#showcase" className="block text-slate-300 hover:text-white">Showcase</a>
            <a href="#testimonials" className="block text-slate-300 hover:text-white">Testimonials</a>
            <a href="#contact" className="block text-slate-300 hover:text-white">Contact</a>
            <a href="/test" className="block px-4 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold text-center">Run Check</a>
          </div>
        )}
      </nav>
    </header>
  )
}
