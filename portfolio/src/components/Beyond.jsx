import { beyond as B } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Beyond() {
  return (
    <section id="beyond" className="section bg-cream-deep">
      <div className="container-x">
        <SectionHeading eyebrow="Beyond the classroom" lines={['The rest', 'of me.']} />
        <Reveal as="p" className="mt-8 max-w-md text-lg text-ink-soft">
          {B.intro}
        </Reveal>

        <ul className="mt-16 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-5">
          {B.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 70} className="group bg-cream-deep p-7 transition-colors duration-500 hover:bg-cream">
              <span className="font-display text-sm italic text-wine">0{i + 1}</span>
              <h3 className="display mt-6 text-2xl transition-transform duration-300 group-hover:translate-x-1">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{it.text}</p>
            </Reveal>
          ))}
        </ul>

        {/* Tarot: the unexpected one */}
        <Reveal className="relative mt-24 grid items-center gap-12 overflow-hidden bg-wine p-8 text-cream md:grid-cols-12 md:p-16">
          <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 animate-spin-slow opacity-20">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#F6F1E7" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#F6F1E7" strokeWidth="0.6" strokeDasharray="2 5" />
            {[...Array(12)].map((_, i) => (
              <line key={i} x1="100" y1="10" x2="100" y2="24" stroke="#F6F1E7" strokeWidth="0.8" transform={`rotate(${i * 30} 100 100)`} />
            ))}
          </svg>
          <div className="relative md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine-tint">{B.tarot.kicker}</p>
            <h3 className="display mt-5 text-5xl md:text-6xl">{B.tarot.title}</h3>
            <p className="mt-6 font-display text-xl italic text-wine-tint">{B.tarot.line}</p>
          </div>
          <div className="relative space-y-5 text-cream/85 md:col-span-7">
            {B.tarot.text.map((t) => (
              <p key={t} className="leading-relaxed">{t}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
