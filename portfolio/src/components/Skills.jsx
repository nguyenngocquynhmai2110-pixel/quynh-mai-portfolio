import { useState } from 'react'
import { skills } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/** Skills as large typography. Hover, focus or tap a skill to read what it means to me. */
export default function Skills() {
  const [active, setActive] = useState(skills[0].items[0])

  return (
    <section id="skills" className="section bg-ink text-cream">
      <div className="container-x">
        <SectionHeading eyebrow="How I work" lines={['Skills,', 'in practice.']} dark />

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12">
          <div className="space-y-12 md:col-span-7">
            {skills.map((g) => (
              <Reveal key={g.group}>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-cream/50">{g.group}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {g.items.map((s) => {
                    const on = active.name === s.name
                    return (
                      <li key={s.name}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onMouseEnter={() => setActive(s)}
                          onFocus={() => setActive(s)}
                          onClick={() => setActive(s)}
                          className={`display text-4xl transition-all duration-300 md:text-5xl ${
                            on ? 'italic text-wine-tint' : 'text-cream/45 hover:text-cream'
                          }`}
                        >
                          {s.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-5">
            <div className="border border-cream/20 p-8 md:sticky md:top-28 md:p-10" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine-tint">In my words</p>
              <h3 key={active.name} className="display mt-5 text-4xl" style={{ animation: 'fadeUp .5s ease both' }}>
                {active.name}
              </h3>
              <p key={active.text} className="mt-5 leading-relaxed text-cream/75" style={{ animation: 'fadeUp .5s .05s ease both' }}>
                {active.text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  )
}
