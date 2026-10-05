import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-ink/10 bg-cream/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight" onClick={() => setOpen(false)}>
          {profile.shortName}
          <span className="text-wine">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="relative text-sm font-medium text-ink-soft transition-colors hover:text-wine after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-wine after:transition-all after:duration-300 hover:after:w-full"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="border border-wine px-5 py-2 text-sm font-semibold text-wine transition-colors hover:bg-wine hover:text-cream"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-ink/10 bg-cream md:hidden">
        <ul className="container-x flex flex-col py-4">
          {[...nav, { id: 'contact', label: 'Get in touch' }].map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-4 font-display text-2xl"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
