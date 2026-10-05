import { profile } from '../data/content.js'

const WORDS = ['Curious by nature', 'Creative by heart', 'Driven by impact']

export default function Footer() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS]
  return (
    <footer className="bg-ink text-cream">
      <div className="overflow-hidden border-b border-cream/15 py-6" aria-hidden="true">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {row.map((w, i) => (
                <span key={`${k}-${i}`} className="display px-6 text-3xl italic text-cream/70 md:text-5xl">
                  {w} <span className="px-6 text-wine-tint">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container-x flex flex-col justify-between gap-3 py-8 text-sm text-cream/60 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="transition-colors hover:text-cream">Back to top ↑</a>
      </div>
    </footer>
  )
}
