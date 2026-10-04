import { brand, credits, navIds } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import { openCookieSettings } from './CookieConsent.jsx'
import Icon from './Icon.jsx'
import { Mark } from './Logo.jsx'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Mark size={48} />
            <p className="footer__tagline">{f.tagline}</p>
          </div>
          <nav aria-label={t.nav.menu}>
            <ul className="footer__nav">
              {navIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`}>{t.nav.items[id]}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#home" className="icon-btn icon-btn--red" aria-label={f.top}>
            <Icon name="arrowUp" />
          </a>
        </div>

        <p className="footer__word" aria-hidden="true">
          AUTO<span>61</span>
        </p>

        <div className="footer__bottom">
          <p>
            © {year} {brand.name}. {f.rights} {f.legal}
          </p>
          <ul className="footer__links">
            <li>
              <a href="#">{f.privacy}</a>
            </li>
            <li>
              <button type="button" className="link-btn" onClick={openCookieSettings}>
                {f.cookies}
              </button>
            </li>
          </ul>
          <p className="footer__credits">
            {f.photos}: Unsplash —{' '}
            {[...new Map(credits.map((c) => [c.author, c])).values()].map((c, i, arr) => (
              <span key={c.author}>
                <a href={c.url} target="_blank" rel="noopener noreferrer">{c.author}</a>
                {i < arr.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
