import { useLang } from '../i18n/index.jsx'
import SectionHead from './SectionHead.jsx'

// Этапы как передачи: 1→5
export default function Process() {
  const { t } = useLang()
  const p = t.process
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead num="04" eyebrow={p.eyebrow} title={p.title} id="process-title" />
        <ol className="process__list">
          {p.steps.map((s, i) => (
            <li key={s.title} className="step" data-reveal style={{ '--i': i }}>
              <span className="step__gear" aria-hidden="true">{i + 1}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
