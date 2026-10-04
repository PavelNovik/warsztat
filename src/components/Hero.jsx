import { useEffect, useState } from 'react'
import { brand, img, phoneHref, srcSet } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import Rich from './Rich.jsx'

// Открыт ли сервис сейчас — по времени Познани (часы из brand.hours)
function isOpenNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type) => parts.find((p) => p.type === type).value
  const day = get('weekday')
  const time = `${get('hour')}:${get('minute')}`
  return brand.hours.some((h) => h.days.includes(day) && time >= h.opens && time < h.closes)
}

// Тахометр: шкала 0–8, красная зона 6–8, стрелка «газует» при загрузке
const START = 225 // угол отметки 0 (по часовой от «3 часов», SVG-координаты)
const SWEEP = 270
const angle = (v) => ((START - (v / 8) * SWEEP) * Math.PI) / 180
const point = (v, r) => [100 + r * Math.cos(angle(v)), 100 - r * Math.sin(angle(v))]
const arc = (from, to, r) => {
  const [x1, y1] = point(from, r)
  const [x2, y2] = point(to, r)
  const large = ((to - from) / 8) * SWEEP > 180 ? 1 : 0
  return `M${x1} ${y1}A${r} ${r} 0 ${large} 1 ${x2} ${y2}`
}

function Tacho({ label }) {
  const ticks = []
  for (let v = 0; v <= 8; v += 0.5) {
    const major = Number.isInteger(v)
    const [x1, y1] = point(v, major ? 70 : 74)
    const [x2, y2] = point(v, 80)
    ticks.push(<line key={v} x1={x1} y1={y1} x2={x2} y2={y2} className={`${major ? 'tacho__major' : 'tacho__minor'}${v >= 6 ? ' is-red' : ''}`} />)
    if (major) {
      const [tx, ty] = point(v, 57)
      ticks.push(
        <text key={`t${v}`} x={tx} y={ty + 4} textAnchor="middle" className={`tacho__num${v >= 6 ? ' is-red' : ''}`}>
          {v}
        </text>
      )
    }
  }
  return (
    <svg className="tacho" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="96" className="tacho__face" />
      <path d={arc(0, 6, 86)} className="tacho__track" />
      <path d={arc(6, 8, 86)} className="tacho__red" />
      {ticks}
      <text x="100" y="162" textAnchor="middle" className="tacho__label">{label}</text>
      <g className="tacho__needle">
        <path d="M100 104 L22 100 L100 96 Z" />
      </g>
      <circle cx="100" cy="100" r="9" className="tacho__hub" />
    </svg>
  )
}

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  // null до гидратации — статус зависит от часов посетителя, на сервере его не знаем
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const tick = () => setOpen(isOpenNow())
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__stripes" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__mark mono" data-reveal>
            <span className="led" aria-hidden="true" />
            {h.mark}
          </p>
          <h1 id="hero-title" className="h1" data-reveal>
            <Rich text={h.title} />
          </h1>
          <p className="hero__lead" data-reveal>{h.lead}</p>
          <div className="hero__actions" data-reveal>
            <a href="#contact" className="btn">
              {h.cta} <Icon name="arrow" size={18} />
            </a>
            <a href={phoneHref} className="btn btn--ghost">
              <Icon name="phone" size={18} /> {brand.phone}
            </a>
          </div>
          <ul className="hero__facts mono" data-reveal>
            <li>
              <span className={`status${open === false ? ' is-closed' : ''}`} aria-live="polite">
                <span className="status__dot" aria-hidden="true" />
                {open === null ? h.hours : `${open ? h.open : h.closed} · ${h.hours}`}
              </span>
            </li>
            <li>
              <Icon name="pin" size={16} /> {brand.street}, {brand.city}
            </li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__photo cut">
            <img
              src={img('hero')}
              srcSet={srcSet('hero')}
              sizes="(max-width: 900px) 100vw, 520px"
              width="1400"
              height="2100"
              alt={h.photoAlt}
              fetchPriority="high"
            />
          </div>
          <div className="hero__tacho">
            <Tacho label={h.gauge} />
          </div>
          <p className="hero__badge">
            <strong>
              <Rich text={h.badge} />
            </strong>
            <span>{h.badgeNote}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
