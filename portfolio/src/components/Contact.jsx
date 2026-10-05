import { closing, contact } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section bg-wine text-cream">
      <div className="container-x">
        <Reveal>
          <p className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine-tint">
            <span aria-hidden="true" className="h-px w-10 bg-wine-tint" />
            Let’s connect
          </p>
          <h2 className="display text-5xl sm:text-6xl md:text-8xl">
            {closing.title[0]}
            <span className="block italic text-wine-tint">{closing.title[1]}</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14 grid gap-12 md:grid-cols-12" delay={120}>
          <p className="max-w-md text-lg text-cream/80 md:col-span-5">{closing.text}</p>
          <dl className="space-y-8 md:col-span-7">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-tint">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${contact.email}`} className="display break-all text-2xl underline decoration-cream/30 underline-offset-8 transition-colors hover:decoration-cream md:text-4xl">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-tint">Phone</dt>
              <dd className="mt-2">
                <a href={`tel:${contact.phone}`} className="display text-2xl underline decoration-cream/30 underline-offset-8 transition-colors hover:decoration-cream md:text-4xl">
                  {contact.phone}
                </a>
              </dd>
            </div>
            {contact.socials.length > 0 && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-tint">Elsewhere</dt>
                <dd className="mt-2 flex flex-wrap gap-6">
                  {contact.socials.map((s) => (
                    <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-wine-tint">
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
