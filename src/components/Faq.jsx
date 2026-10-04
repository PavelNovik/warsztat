import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Аккордеон на <details>: работает без JS и доступен с клавиатуры
export default function Faq() {
  const { t } = useLang()
  const f = t.faq
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <SectionHead num="06" eyebrow={f.eyebrow} title={f.title} id="faq-title" />
        <div className="faq__list" data-reveal>
          {f.items.map((item, i) => (
            <details key={item.q} className="faq__item" name="faq" open={i === 0}>
              <summary>
                <span className="faq__q">{item.q}</span>
                <Icon name="plus" className="faq__icon" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
