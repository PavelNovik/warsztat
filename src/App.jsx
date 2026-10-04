import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Care from './components/Care.jsx'
import Parts from './components/Parts.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import { useReveal } from './hooks/useReveal.js'
import { LangProvider, langFromPath, langPath, useLang } from './i18n/index.jsx'
import { applyHead } from './seo.js'

export default function App({ initialLang }) {
  const [lang, setLangState] = useState(initialLang)
  useReveal(lang)

  // Смена языка без перезагрузки: меняем URL (/, /uk/) и <head>
  const setLang = useCallback((next) => {
    if (next === lang) return
    history.pushState(null, '', langPath(next) + location.hash)
    setLangState(next)
  }, [lang])

  useEffect(() => {
    applyHead(lang)
  }, [lang])

  useEffect(() => {
    const onPop = () => setLangState(langFromPath(location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <LangProvider lang={lang} setLang={setLang}>
      <SkipLink />
      <CookieConsent />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <Care />
        <Parts />
        <Process />
        <Testimonials />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}

function SkipLink() {
  const { t } = useLang()
  return <a href="#main" className="skip-link">{t.nav.skip}</a>
}
