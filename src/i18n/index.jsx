import { createContext, useContext } from 'react'
import pl from './pl.js'
import uk from './uk.js'

export const dictionaries = { pl, uk }
export const languages = ['pl', 'uk']
export const defaultLang = 'pl'

// Польский — на корне сайта, украинский — /uk/
export const langPath = (lang) => (lang === defaultLang ? '/' : `/${lang}/`)

export function langFromPath(pathname) {
  const seg = pathname.split('/')[1]
  return languages.includes(seg) ? seg : defaultLang
}

const LangContext = createContext(null)

export function LangProvider({ lang, setLang, children }) {
  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
