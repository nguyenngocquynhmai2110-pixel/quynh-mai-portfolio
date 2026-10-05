import { education as E } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-6 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-wine" />
            The foundation
          </p>
          <h2 className="display text-5xl md:text-6xl">{E.school}</h2>
          <p className="mt-6 font-display text-2xl italic text-wine">{E.program}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">{E.track}</p>
        </Reveal>
        <Reveal className="md:col-span-7" delay={120}>
          <p className="eyebrow mb-5">A foundation in</p>
          <ul className="grid grid-cols-2 border-l border-t border-ink/15 sm:grid-cols-3">
            {E.foundation.map((f) => (
              <li key={f} className="border-b border-r border-ink/15 p-5 font-display text-lg transition-colors hover:bg-wine-tint">
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-ink-soft">{E.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
