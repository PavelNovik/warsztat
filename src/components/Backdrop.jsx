import { srcSet } from '../config.js'

// Фиксированный полупрозрачный фон с Audi: остаётся на месте при прокрутке.
// Свой кадр для телефона (узкий вертикальный), планшета (вертикальный) и десктопа.
// position: fixed у <img>, а не background-attachment: fixed — последний не работает в iOS Safari.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <picture>
        <source media="(max-width: 640px)" srcSet={srcSet('bg-mobile')} sizes="100vw" />
        <source media="(max-width: 1180px) and (orientation: portrait)" srcSet={srcSet('bg-tablet')} sizes="100vw" />
        <img src="/images/bg-desktop.webp" srcSet={srcSet('bg-desktop')} sizes="100vw" alt="" decoding="async" />
      </picture>
    </div>
  )
}
