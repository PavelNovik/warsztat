import { useState } from 'react'
import { brand, mapsUrl, messengers, phoneHref } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const f = c.form
  const [sent, setSent] = useState(false)

  // Демо без бэкенда: собираем текст заявки и открываем почту или WhatsApp
  const onSubmit = (e) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const text = [
      `${f.name}: ${d.get('name')}`,
      `${f.phone}: ${d.get('phone')}`,
      `${f.car}: ${d.get('car')}`,
      `${f.service}: ${d.get('service')}`,
      `${f.parts}: ${d.get('parts')}`,
      '',
      d.get('message'),
    ].join('\n')
    const via = e.nativeEvent.submitter?.value
    if (via === 'whatsapp') {
      window.open(`${messengers.whatsapp}?text=${encodeURIComponent(`${f.subject}\n\n${text}`)}`, '_blank', 'noopener')
    } else {
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(text)}`
    }
    setSent(true)
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <SectionHead num="07" eyebrow={c.eyebrow} title={c.title} lead={c.lead} id="contact-title" />

          <address className="contact__info" data-reveal>
            <ul>
              <li>
                <span className="mono">{c.phone}</span>
                <a href={phoneHref} className="contact__big">{brand.phone}</a>
              </li>
              <li>
                <span className="mono">{c.address}</span>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {brand.street}, {brand.postalCode} {brand.city} <Icon name="arrowUpRight" size={16} />
                </a>
              </li>
              <li>
                <span className="mono">{c.hoursLabel}</span>
                <span>
                  {c.hours.map((h) => (
                    <span key={h} className="contact__line">{h}</span>
                  ))}
                </span>
              </li>
              <li>
                <span className="mono">{c.email}</span>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
            </ul>
          </address>

          <div className="contact__links" data-reveal>
            <ul className="messengers" aria-label={c.messengers}>
              <li>
                <a href={messengers.whatsapp} target="_blank" rel="noopener noreferrer" className="pill">
                  <Icon name="whatsapp" size={20} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={messengers.telegram} target="_blank" rel="noopener noreferrer" className="pill">
                  <Icon name="telegram" size={20} /> Telegram
                </a>
              </li>
            </ul>
            <ul className="socials" aria-label={c.social}>
              {[
                ['instagram', 'Instagram'],
                ['facebook', 'Facebook'],
              ].map(([key, label]) => (
                <li key={key}>
                  <a href={brand.social[key]} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
                    <Icon name={key} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="form cut" onSubmit={onSubmit} data-reveal>
          <div className="form__row">
            <label className="field">
              <span className="field__label">{f.name} *</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="field">
              <span className="field__label">{f.phone} *</span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
          </div>
          <label className="field">
            <span className="field__label">{f.car}</span>
            <input name="car" type="text" placeholder={f.carPh} />
          </label>
          <fieldset className="field">
            <legend className="field__label">{f.service}</legend>
            <div className="chips">
              {f.services.map((s, i) => (
                <label key={s} className="chip">
                  <input type="radio" name="service" value={s} defaultChecked={i === 0} />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="field">
            <legend className="field__label">{f.parts}</legend>
            <div className="chips">
              {f.partsOptions.map((s, i) => (
                <label key={s} className="chip">
                  <input type="radio" name="parts" value={s} defaultChecked={i === 0} />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            <span className="field__label">{f.message}</span>
            <textarea name="message" rows={4} placeholder={f.messagePh} />
          </label>
          <label className="check">
            <input type="checkbox" required />
            <span>{f.consent}</span>
          </label>
          <div className="form__actions">
            <button type="submit" value="whatsapp" className="btn">
              <Icon name="whatsapp" size={18} /> {f.whatsapp}
            </button>
            <button type="submit" value="mail" className="btn btn--ghost">
              <Icon name="mail" size={18} /> {f.submit}
            </button>
          </div>
          {sent && (
            <p className="form__sent" role="status">
              {f.sent}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
