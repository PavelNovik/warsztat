// Знак: красная «табличка» со срезанным углом и номером 61 — как стартовый номер на капоте
export function Mark({ size = 40 }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <path d="M0 0h30l10 10v30H0z" fill="var(--c-red)" />
      <path d="M32 0h8v8z" fill="var(--c-amber)" />
      <text x="20" y="28.5" textAnchor="middle" fontFamily="var(--f-display)" fontWeight="700" fontSize="20" fill="#fff">
        61
      </text>
    </svg>
  )
}

export default function Logo({ tag }) {
  return (
    <a href="#home" className="logo" aria-label="AUTO 61 — start">
      <Mark />
      <span className="logo__text">
        <span className="logo__name">
          AUTO<span className="logo__num">61</span>
        </span>
        <span className="logo__tag">{tag}</span>
      </span>
    </a>
  )
}
