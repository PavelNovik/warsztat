import { img, srcSet } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Services() {
  const { t } = useLang()
  const s = t.services
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead num="01" eyebrow={s.eyebrow} title={s.title} lead={s.lead} id="services-title" />

        <ul className="services__featured">
          {s.featured.map((item) => (
            <li key={item.title} className="svc cut" data-reveal>
              <img
                src={img(item.img)}
                srcSet={srcSet(item.img)}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 300px"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <div className="svc__body">
                <h3 className="svc__title">{item.title}</h3>
                <p className="svc__text">{item.text}</p>
                <p className="price mono">
                  {s.from} <strong>{item.price}</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="services__list">
          {s.items.map((item) => (
            <li key={item.title} className="svc-row" data-reveal>
              <span className="svc-row__icon">
                <Icon name={item.icon} size={28} />
              </span>
              <div>
                <h3 className="svc-row__title">{item.title}</h3>
                <p className="svc-row__text">{item.text}</p>
              </div>
              <p className="price mono">
                {s.from} <strong>{item.price}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
