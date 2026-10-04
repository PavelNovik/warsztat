import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Testimonials() {
  const { t } = useLang()
  const r = t.testimonials
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHead num="05" eyebrow={r.eyebrow} title={r.title} id="reviews-title" />
        <ul className="reviews__list">
          {r.items.map((item) => (
            <li key={item.name} className="review cut" data-reveal>
              <p className="review__stars" role="img" aria-label="5/5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </p>
              <blockquote className="review__text">{item.text}</blockquote>
              <p className="review__who">
                <strong>{item.name}</strong>
                <span className="mono">{item.car}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
