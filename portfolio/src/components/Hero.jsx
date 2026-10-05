import { useRef } from 'react'
import { profile } from '../data/content.js'
import Button from './Button.jsx'

const RING = 'CURIOUS BY NATURE · CREATIVE BY HEART · DRIVEN BY IMPACT · '

export default function Hero() {
  const frame = useRef(null)

  // Gentle pointer parallax on the portrait (skipped for reduced motion / touch).
  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = frame.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--px', `${x * 14}px`)
    el.style.setProperty('--py', `${y * 14}px`)
  }
  const onLeave = () => {
    frame.current?.style.setProperty('--px', '0px')
    frame.current?.style.setProperty('--py', '0px')
  }

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="container-x grid items-center gap-14 pb-20 md:grid-cols-12 md:pb-28">
        <div className="md:col-span-7">
          <p className="eyebrow mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span aria-hidden="true" className="h-px w-10 bg-wine" />
            {profile.identity.join('  ·  ')}
          </p>

          <h1 className="display text-[2.9rem] sm:text-6xl lg:text-[5.25rem]">
            {profile.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className={`block ${i === 2 ? 'italic text-wine' : ''}`}
                  style={{
                    animation: `heroLine 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 130 + 150}ms both`,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">{profile.name}.</strong> {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#project">Explore My Work</Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div
            ref={frame}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
            style={{ '--px': '0px', '--py': '0px' }}
          >
            {/* soft accent shape drifting behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -left-8 top-10 h-40 w-40 animate-float rounded-full bg-wine-tint md:-left-12 md:h-56 md:w-56"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-4 h-full w-full rounded-t-[999px] border border-wine/40"
              style={{ transform: 'translate(var(--px), var(--py))', transition: 'transform .4s ease-out' }}
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-cream-deep">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width="2048"
                height="1366"
                fetchPriority="high"
                className="h-full w-full object-cover"
                style={{ objectPosition: '52% 50%' }}
              />
            </div>

            {/* rotating text badge */}
            <div className="absolute -bottom-10 -left-4 h-32 w-32 md:-left-10 md:h-40 md:w-40">
              <svg viewBox="0 0 160 160" className="h-full w-full animate-spin-slow" role="img" aria-label="Curious by nature, creative by heart, driven by impact">
                <defs>
                  <path id="ring" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
                </defs>
                <circle cx="80" cy="80" r="78" fill="#F6F1E7" />
                <text fontSize="11.5" fontWeight="600" letterSpacing="2.4" fill="#6B1E2E" fontFamily="Manrope, sans-serif">
                  <textPath href="#ring">{RING}</textPath>
                </text>
              </svg>
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-display text-3xl italic text-wine">
                QM
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroLine { from { transform: translateY(105%); } to { transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { #top h1 span span { animation: none !important; } }
      `}</style>
    </section>
  )
}
