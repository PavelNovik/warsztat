import Rich from './Rich.jsx'

// Заголовок секции: номер «передачи» + eyebrow + заголовок
export default function SectionHead({ num, eyebrow, title, lead, id, align }) {
  return (
    <header className={`section-head${align === 'center' ? ' section-head--center' : ''}`} data-reveal>
      <p className="eyebrow">
        <span className="eyebrow__num" aria-hidden="true">{num}</span>
        {eyebrow}
      </p>
      <h2 id={id} className="h2">
        <Rich text={title} />
      </h2>
      {lead && <p className="section-head__lead">{lead}</p>}
    </header>
  )
}
