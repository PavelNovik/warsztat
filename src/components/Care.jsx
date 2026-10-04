import { img, srcSet } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Светлая секция: как мы обращаемся с машиной клиента
export default function Care() {
  const { t } = useLang()
  const c = t.care
  return (
    <section id="care" className="section care" aria-labelledby="care-title">
      <div className="container">
        <SectionHead num="02" eyebrow={c.eyebrow} title={c.title} lead={c.lead} id="care-title" />
        <div className="care__grid">
          <figure className="care__figure" data-reveal>
            <div className="care__photo cut">
              <img
                src={img('interior')}
                srcSet={srcSet('interior')}
                sizes="(max-width: 900px) 100vw, 440px"
                width="1200"
                height="1500"
                alt={c.photoAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="care__quote">
              <p>{c.quote}</p>
              <span className="mono">{c.quoteAuthor}</span>
            </figcaption>
          </figure>
          <ol className="care__list">
            {c.items.map((item, i) => (
              <li key={item.title} className="care__item" data-reveal>
                <span className="care__icon">
                  <Icon name={item.icon} size={26} />
                </span>
                <span className="care__num mono" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="care__title">{item.title}</h3>
                <p className="care__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
