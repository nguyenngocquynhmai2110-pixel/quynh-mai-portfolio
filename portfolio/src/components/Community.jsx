import { community as C } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Community() {
  return (
    <section id="community" className="section">
      <div className="container-x grid items-center gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <p className="eyebrow mb-6 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-wine" />
            Giving back
          </p>
          <h2 className="display text-5xl md:text-6xl">
            {C.role},<span className="block italic text-wine">{C.org}</span>
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6" delay={120}>
          <p className="text-lg leading-relaxed text-ink-soft">{C.text}</p>
          <p className="mt-5 font-display text-xl italic">{C.closing}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {C.strengthened.map((s) => (
              <li key={s} className="border border-ink/25 px-3 py-1.5 text-sm transition-colors hover:border-wine hover:text-wine">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
