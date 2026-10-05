/** Pill-free, editorial button with an arrow that slides on hover. */
export default function Button({ href, variant = 'solid', children, ...rest }) {
  const base =
    'group inline-flex items-center gap-3 border px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]'
  const styles =
    variant === 'solid'
      ? 'border-wine bg-wine text-cream hover:bg-ink hover:border-ink'
      : 'border-ink/30 text-ink hover:border-wine hover:text-wine'
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </a>
  )
}
