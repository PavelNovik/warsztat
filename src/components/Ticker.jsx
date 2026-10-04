import { useLang } from '../i18n/index.jsx'

// Бегущая лента услуг на красной полосе. Список дублируется для бесшовной прокрутки.
export default function Ticker() {
  const { t } = useLang()
  const row = (hidden) => (
    <ul className="ticker__row" aria-hidden={hidden || undefined}>
      {t.ticker.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
  return (
    <div className="ticker">
      <div className="ticker__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
