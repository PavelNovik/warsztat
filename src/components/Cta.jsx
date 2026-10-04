import { brand, phoneHref } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import Rich from './Rich.jsx'

export default function Cta() {
  const { t } = useLang()
  const c = t.cta
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner" data-reveal>
        <div>
          <h2 id="cta-title" className="cta__title">
            <Rich text={c.title} />
          </h2>
          <p className="cta__text">{c.text}</p>
        </div>
        <a href={phoneHref} className="btn btn--dark cta__btn">
          <Icon name="phone" size={20} /> {brand.phone}
        </a>
      </div>
    </section>
  )
}
