import { brand, img } from './config.js'
import { plain } from './components/Rich.jsx'
import { dictionaries, languages, defaultLang, langPath } from './i18n/index.jsx'

const abs = (path) => brand.siteUrl.replace(/\/$/, '') + path

const allServices = (t) => [...t.services.featured, ...t.services.items]

// Schema.org: автосервис (AutoRepair) с каталогом услуг, FAQ и страница — для поисковиков, карт и ИИ-ассистентов.
export function jsonLd(lang) {
  const t = dictionaries[lang]
  const url = abs(langPath(lang))
  const bizId = abs('/#business')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoRepair',
        '@id': bizId,
        name: brand.fullName,
        alternateName: brand.name,
        url: abs('/'),
        image: [abs(img('workshop')), abs(img('hero'))],
        logo: abs('/favicon.svg'),
        email: brand.email,
        telephone: brand.phone,
        description: t.meta.description,
        foundingDate: String(brand.since),
        priceRange: '$$',
        paymentAccepted: 'Cash, Credit Card, BLIK, Bank transfer',
        currenciesAccepted: 'PLN',
        areaServed: { '@type': 'City', name: 'Poznań' },
        knowsLanguage: ['pl', 'uk'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: brand.street,
          postalCode: brand.postalCode,
          addressLocality: brand.city,
          addressCountry: brand.country,
        },
        geo: { '@type': 'GeoCoordinates', latitude: brand.geo.lat, longitude: brand.geo.lng },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${brand.geo.lat},${brand.geo.lng}`,
        openingHoursSpecification: brand.hours.map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        sameAs: Object.values(brand.social),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.services.eyebrow,
          itemListElement: allServices(t).map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.text },
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: parseInt(s.price, 10),
              priceCurrency: 'PLN',
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': url + '#faq',
        inLanguage: lang,
        mainEntity: t.faq.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        about: { '@id': bizId },
      },
    ],
  }
}

// Описание всех тегов <head> для языка: [тег, атрибуты, текст]
function headTags(lang) {
  const t = dictionaries[lang]
  const url = abs(langPath(lang))
  const image = abs(img('workshop'))
  return [
    ['meta', { name: 'description', content: t.meta.description }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['link', { rel: 'canonical', href: url }],
    ...languages.map((l) => ['link', { rel: 'alternate', hreflang: l, href: abs(langPath(l)) }]),
    ['link', { rel: 'alternate', hreflang: 'x-default', href: abs(langPath(defaultLang)) }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: brand.name }],
    ['meta', { property: 'og:title', content: t.meta.title }],
    ['meta', { property: 'og:description', content: t.meta.description }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:image', content: image }],
    ['meta', { property: 'og:locale', content: t.locale }],
    ...languages
      .filter((l) => l !== lang)
      .map((l) => ['meta', { property: 'og:locale:alternate', content: dictionaries[l].locale }]),
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: t.meta.title }],
    ['meta', { name: 'twitter:description', content: t.meta.description }],
    ['meta', { name: 'twitter:image', content: image }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd(lang)).replace(/</g, '\\u003c')],
  ]
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Для пререндера: строка HTML
export function renderHead(lang) {
  const tags = headTags(lang).map(([tag, attrs, text]) => {
    const a = Object.entries(attrs).map(([k, v]) => ` ${k}="${esc(v)}"`).join('')
    return tag === 'script' ? `<script data-seo${a}>${text}</script>` : `<${tag} data-seo${a}>`
  })
  return [`<title>${esc(dictionaries[lang].meta.title)}</title>`, ...tags].join('\n    ')
}

// Для клиента: обновить <head> при переключении языка
export function applyHead(lang) {
  document.documentElement.lang = lang
  document.title = dictionaries[lang].meta.title
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
  const frag = document.createDocumentFragment()
  headTags(lang).forEach(([tag, attrs, text]) => {
    const el = document.createElement(tag)
    el.setAttribute('data-seo', '')
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    if (text) el.textContent = text
    frag.appendChild(el)
  })
  document.head.appendChild(frag)
}

export function robotsTxt() {
  const aiBots = [
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
    'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot',
    'CCBot', 'meta-externalagent', 'DuckAssistBot',
  ]
  return [
    'User-agent: *',
    'Allow: /',
    '',
    '# AI search & assistants are welcome',
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${abs('/sitemap.xml')}`,
    '',
  ].join('\n')
}

export function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10)
  const alternates = [
    ...languages.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(langPath(l))}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(langPath(defaultLang))}"/>`,
  ].join('\n')
  const urls = languages
    .map(
      (l) => `  <url>
    <loc>${abs(langPath(l))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${l === defaultLang ? '1.0' : '0.8'}</priority>
${alternates}
  </url>`
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

// llms.txt — краткое описание сайта в Markdown для языковых моделей (llmstxt.org)
export function llmsTxt() {
  const t = dictionaries.pl
  return [
    `# ${brand.fullName}`,
    '',
    `> ${t.meta.description}`,
    '',
    plain(t.hero.lead),
    '',
    '## Pages',
    '',
    ...languages.map((l) => `- [${dictionaries[l].name}](${abs(langPath(l))}): ${dictionaries[l].meta.title}`),
    '',
    '## Usługi (robocizna brutto, bez części)',
    '',
    ...allServices(t).map((s) => `- **${s.title}** (od ${s.price}) — ${s.text}`),
    '',
    `## ${plain(t.care.title)}`,
    '',
    ...t.care.items.map((c) => `- **${c.title}** — ${c.text}`),
    '',
    `## ${plain(t.parts.title)}`,
    '',
    t.parts.lead,
    '',
    ...t.parts.options.flatMap((o) => [`### ${o.title}`, '', o.text, '', ...o.points.map((p) => `- ${p}`), '']),
    t.parts.note,
    '',
    '## Jak pracujemy',
    '',
    ...t.process.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.text}`),
    '',
    '## FAQ',
    '',
    ...t.faq.items.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Kontakt',
    '',
    `- Adres: ${brand.street}, ${brand.postalCode} ${brand.city} (${brand.district})`,
    ...t.contact.hours.map((h) => `- ${h}`),
    `- Telefon: ${brand.phone}`,
    `- E-mail: ${brand.email}`,
    `- Języki obsługi: polski, ukraiński`,
    '',
  ].join('\n')
}
