import { useLang } from '../i18n/index.jsx'

export default function Stats() {
  const { t } = useLang()
  return (
    <div className="stats">
      <div className="container">
        <ul className="stats__list">
          {t.stats.map((s) => (
            <li key={s.label} className="stats__item" data-reveal>
              <p className="stats__value">
                {s.value}
                <span className="stats__unit">{s.unit}</span>
              </p>
              <p className="stats__label">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
