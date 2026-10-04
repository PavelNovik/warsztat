// Общие настройки, не зависящие от языка. Тексты — в src/i18n/*.js
import photos from '../scripts/images.json'

// Адрес, телефон и реквизиты — демо-заглушки, заменить на данные клиента
export const brand = {
  name: 'AUTO 61',
  fullName: 'AUTO 61 — Warsztat samochodowy, Poznań',
  // Боевой адрес сайта — для canonical, sitemap, hreflang и Schema.org.
  // При сборке на Vercel подставляется домен проекта (см. vite.config.js).
  siteUrl: __SITE_URL__ || 'https://auto61.pl',
  email: 'kontakt@auto61.pl',
  phone: '+48 600 610 061',
  street: 'ul. Głogowska 210',
  postalCode: '60-104',
  district: 'Grunwald',
  city: 'Poznań',
  country: 'PL',
  geo: { lat: 52.3897, lng: 16.8833 },
  since: 2012,
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  social: {
    instagram: 'https://instagram.com/auto61.poznan',
    facebook: 'https://facebook.com/auto61.poznan',
  },
}

export const phoneHref = `tel:${brand.phone.replace(/\s/g, '')}`

const digits = brand.phone.replace(/\D/g, '')
export const messengers = {
  whatsapp: `https://wa.me/${digits}`,
  telegram: 'https://t.me/auto61_poznan',
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${brand.street}, ${brand.postalCode} ${brand.city}`
)}`

export const img = (name) => `/images/${name}.webp`
export const imgSm = (name) => `/images/${name}-sm.webp`
export const srcSet = (name) => `${imgSm(name)} ${Math.round(photos[name].width / 2)}w, ${img(name)} ${photos[name].width}w`

// Автор и ссылка на фото Unsplash — для подписи в футере
export const credits = Object.entries(photos).map(([name, p]) => ({ name, author: p.author, url: `https://unsplash.com/@${p.user}` }))

export const navIds = ['home', 'services', 'care', 'parts', 'process', 'faq', 'contact']
