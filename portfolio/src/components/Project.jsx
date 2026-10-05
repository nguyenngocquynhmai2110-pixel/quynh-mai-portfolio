import { useState } from 'react'
import { project as P } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/** INKAT case-study card. The visual is a marked placeholder; drop a real image into `public/` and set `image`. */
export default function Project() {
  const [open, setOpen] = useState(false)
  const image = null // e.g. '/inkat.jpg' once you have a project photo

  return (
    <section id="project" className="section bg-cream-deep">
      <div className="container-x">
        <SectionHeading eyebrow="What I’ve created" lines={['Selected', 'project.']} />

        <Reveal className="mt-16 grid overflow-hidden border border-ink/20 bg-cream md:mt-24 md:grid-cols-12">
          {/* visual */}
          <div className="relative min-h-[22rem] overflow-hidden bg-wine md:col-span-5">
            {image ? (
              <img src={image} alt="INKAT project" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <>
                <svg aria-hidden="true" viewBox="0 0 400 480" className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="xMidYMid slice">
                  {[...Array(9)].map((_, i) => (
                    <circle key={i} cx="200" cy="240" r={30 + i * 26} fill="none" stroke="#F6F1E7" strokeWidth="0.8" strokeDasharray={i % 2 ? '2 7' : '0'} />
                  ))}
                </svg>
                <div className="relative flex h-full min-h-[22rem] flex-col justify-between p-8 text-cream">
                  <span className="eyebrow !text-wine-tint">Case study</span>
                  <span className="display text-7xl md:text-8xl">{P.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/60">[ Project image placeholder ]</span>
                </div>
              </>
            )}
          </div>

          {/* story */}
          <div className="p-8 md:col-span-7 md:p-14">
            <ul className="flex flex-wrap gap-2">
              {P.tags.map((t) => (
                <li key={t} className="border border-wine/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-wine">
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg leading-relaxed text-ink-soft">{P.summary}</p>
            <p className="display mt-8 text-3xl italic text-wine md:text-4xl">“{P.question}”</p>

            <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-3">My role</p>
                <p className="text-sm leading-relaxed text-ink-soft">{P.role}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">Social impact</p>
                <p className="text-sm leading-relaxed text-ink-soft">{P.impact}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="inkat-more"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-wine"
            >
              <span className="border-b border-wine/40 pb-0.5 transition-colors group-hover:border-wine">
                {open ? 'Hide the thinking' : 'Read the thinking behind it'}
              </span>
              <span aria-hidden="true" className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>→</span>
            </button>

            <div
              id="inkat-more"
              className={`grid transition-all duration-500 ${open ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="text-ink-soft">{P.why}</p>
                <p className="eyebrow mb-4 mt-8">What I learned</p>
                <ul className="flex flex-wrap gap-2">
                  {P.skills.map((s) => (
                    <li key={s} className="bg-cream-deep px-3 py-1.5 text-sm">{s}</li>
                  ))}
                </ul>
                <p className="mt-8 border-l-2 border-wine pl-5 font-display text-lg italic">{P.lesson}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
