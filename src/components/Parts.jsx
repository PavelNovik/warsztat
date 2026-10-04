import { img, srcSet } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Два варианта: запчасти клиента или заказ через сервис
export default function Parts() {
  const { t } = useLang()
  const p = t.parts
  return (
    <section id="parts" className="section parts" aria-labelledby="parts-title">
      <div className="parts__bg" aria-hidden="true">
        <img src={img('parts')} srcSet={srcSet('parts')} sizes="100vw" alt="" loading="lazy" decoding="async" />
      </div>
      <div className="container">
        <SectionHead num="03" eyebrow={p.eyebrow} title={p.title} lead={p.lead} id="parts-title" />
        <div className="parts__grid">
          {p.options.map((o, i) => (
            <article key={o.tag} className={`option cut${i === 1 ? ' option--red' : ''}`} data-reveal>
              <p className="option__tag mono">{o.tag}</p>
              <h3 className="option__title">{o.title}</h3>
              <p className="option__text">{o.text}</p>
              <ul className="option__points">
                {o.points.map((pt) => (
                  <li key={pt}>
                    <Icon name="check" size={20} />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="parts__note" data-reveal>
          <span className="parts__warn" aria-hidden="true">!</span>
          {p.note}
        </p>
      </div>
    </section>
  )
}
