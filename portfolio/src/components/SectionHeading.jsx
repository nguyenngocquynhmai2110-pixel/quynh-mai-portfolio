import Reveal from './Reveal.jsx'

/** Eyebrow + large editorial heading. `lines` is an array so breaks are deliberate. */
export default function SectionHeading({ eyebrow, lines, dark = false, className = '' }) {
  const accent = dark ? 'text-wine-tint' : 'text-wine'
  return (
    <Reveal className={className}>
      <p className={`eyebrow mb-6 flex items-center gap-4 ${dark ? '!text-wine-tint' : ''}`}>
        <span aria-hidden="true" className={`h-px w-10 ${dark ? 'bg-wine-tint' : 'bg-wine'}`} />
        {eyebrow}
      </p>
      <h2 className="display text-5xl md:text-7xl">
        {lines.map((l, i) => (
          <span key={l} className={`block ${i === lines.length - 1 ? `italic ${accent}` : ''}`}>
            {l}
          </span>
        ))}
      </h2>
    </Reveal>
  )
}
