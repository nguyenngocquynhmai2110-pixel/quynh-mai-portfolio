import { about } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section rule">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading eyebrow="Who I am" lines={about.title} />
          <div className="mt-12 max-w-xl space-y-6 text-lg leading-relaxed text-ink-soft">
            {about.story.map((p, i) => (
              <Reveal as="p" key={p} delay={i * 100}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="md:col-span-5 md:pt-24" delay={150}>
          <dl className="divide-y divide-ink/15 border-y border-ink/15">
            {about.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-3 gap-4 py-5">
                <dt className="eyebrow col-span-1 pt-1">{f.label}</dt>
                <dd className="col-span-2 font-display text-xl leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="container-x mt-24">
        <Reveal as="p" className="eyebrow mb-8">
          What I care about
        </Reveal>
        <ul className="grid border-l border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 90} className="group border-b border-r border-t border-ink/15 p-7 transition-colors duration-500 hover:bg-wine hover:text-cream sm:border-t-0 lg:border-t">
              <span className="font-display text-sm italic text-wine transition-colors group-hover:text-wine-tint">
                0{i + 1}
              </span>
              <h3 className="display mt-4 text-3xl">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-cream/85">
                {v.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
