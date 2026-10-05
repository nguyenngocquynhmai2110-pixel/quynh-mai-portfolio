import { bring, next } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Next() {
  return (
    <section id="next" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Where I’m heading" lines={['What I', 'bring.']} />
        <ul className="mt-16 border-t border-ink/15">
          {bring.map((b, i) => (
            <Reveal as="li" key={b.verb} delay={i * 60} className="group grid items-baseline gap-2 border-b border-ink/15 py-6 transition-colors hover:border-wine md:grid-cols-12 md:gap-8">
              <span className="display text-4xl transition-all duration-300 group-hover:translate-x-3 group-hover:italic group-hover:text-wine md:col-span-5 md:text-6xl">
                {b.verb}
              </span>
              <span className="text-ink-soft md:col-span-7 md:text-lg">{b.text}</span>
            </Reveal>
          ))}
        </ul>

        <div className="mt-28 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="display text-5xl md:text-6xl">
              {next.title[0]}
              <span className="block italic text-wine">{next.title[1]}</span>
            </h2>
          </Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-6">
            {next.text.map((t, i) => (
              <Reveal as="p" key={t} delay={i * 100}>{t}</Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
