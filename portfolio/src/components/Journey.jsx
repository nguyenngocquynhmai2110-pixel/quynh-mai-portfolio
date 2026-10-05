import { journey } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/** The story told as four chapters (the CV gives no dated timeline, so none is invented). */
export default function Journey() {
  return (
    <section id="journey" className="section bg-cream-deep">
      <div className="container-x">
        <SectionHeading eyebrow="What I’ve explored" lines={['Four chapters,', 'so far.']} />

        <ol className="relative mt-20 md:mt-28">
          <span aria-hidden="true" className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-ink/20 md:left-1/2" />
          {journey.map((c, i) => (
            <Reveal as="li" key={c.n} className="relative mb-16 last:mb-0 md:mb-24" delay={60}>
              <div className={`grid items-start gap-6 pl-14 md:grid-cols-2 md:gap-24 md:pl-0`}>
                <div className={i % 2 ? 'md:order-2 md:pl-4' : 'md:pr-4 md:text-right'}>
                  <span className="display block text-7xl text-wine/25 md:text-9xl">{c.n}</span>
                </div>
                <div className={i % 2 ? 'md:order-1 md:text-right md:pr-4' : 'md:pl-4'}>
                  <h3 className="display text-3xl md:text-4xl">{c.title}</h3>
                  <p className="mt-4 max-w-md text-ink-soft md:inline-block">{c.text}</p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute left-[0.7rem] top-5 h-3 w-3 rounded-full border-2 border-wine bg-cream md:left-1/2 md:-translate-x-1/2"
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
