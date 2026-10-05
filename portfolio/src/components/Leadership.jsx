import { leadership as L } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Where I lead" lines={['Leadership,', 'as listening.']} />

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12">
          {/* role card */}
          <Reveal className="md:col-span-5">
            <div className="bg-ink p-9 text-cream md:sticky md:top-28 md:p-11">
              <p className="eyebrow !text-wine-tint">{L.school}</p>
              <h3 className="display mt-6 text-5xl">{L.role}</h3>
              <p className="mt-3 font-display text-xl italic text-cream/80">{L.org}</p>
              {L.period && <p className="mt-6 text-sm text-cream/60">{L.period}</p>}
              <div className="mt-10 border-t border-cream/20 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">Strengthened</p>
                <ul className="flex flex-wrap gap-2">
                  {L.strengthened.map((s) => (
                    <li key={s} className="border border-cream/30 px-3 py-1.5 text-sm transition-colors hover:border-cream hover:bg-cream hover:text-ink">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal as="blockquote" className="border-l-2 border-wine pl-6 font-display text-2xl font-light leading-snug md:text-3xl">
              {L.quote}
            </Reveal>
            <Reveal as="p" className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft" delay={80}>
              {L.story}
            </Reveal>

            <Reveal className="mt-14" delay={120}>
              <p className="eyebrow mb-6">What I do</p>
              <ul className="border-t border-ink/15">
                {L.does.map((d, i) => (
                  <li key={d} className="group flex items-baseline gap-5 border-b border-ink/15 py-4 transition-colors hover:border-wine">
                    <span className="w-6 font-display text-sm italic text-wine">{String(i + 1).padStart(2, '0')}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
