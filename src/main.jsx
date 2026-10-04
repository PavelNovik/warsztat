import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { langFromPath } from './i18n/index.jsx'
// Шрифты с нашего домена (без Google Fonts CDN — RODO);
// latin-ext — польские буквы, cyrillic — украинская версия
import '@fontsource/tektur/latin-600.css'
import '@fontsource/tektur/latin-ext-600.css'
import '@fontsource/tektur/cyrillic-600.css'
import '@fontsource/tektur/latin-800.css'
import '@fontsource/tektur/latin-ext-800.css'
import '@fontsource/tektur/cyrillic-800.css'
import '@fontsource/onest/latin-400.css'
import '@fontsource/onest/latin-ext-400.css'
import '@fontsource/onest/cyrillic-400.css'
import '@fontsource/onest/latin-600.css'
import '@fontsource/onest/latin-ext-600.css'
import '@fontsource/onest/cyrillic-600.css'
import '@fontsource/martian-mono/latin-500.css'
import '@fontsource/martian-mono/latin-ext-500.css'
import '@fontsource/martian-mono/cyrillic-500.css'
import './styles/variables.css'
import './styles/global.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App initialLang={langFromPath(location.pathname)} />
  </StrictMode>
)

// В продакшене HTML уже отрендерен заранее (scripts/prerender.js) — «оживляем» его
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
