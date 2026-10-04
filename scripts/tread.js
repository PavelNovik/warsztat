// След протектора для hero: из серого JPEG (тёмный след на белом фоне) делает
// красную плитку с прозрачностью, которая бесшовно повторяется по вертикали.
// Запуск: npm run tread → public/images/tread.webp
import sharp from 'sharp'

const SRC = 'scripts/assets/tread-source.jpg'
const OUT = 'public/images/tread.webp'
const RED = [0xe3, 0x14, 0x1b] // --c-red
const PERIOD = 27.06 // шаг «ёлочки» в исходнике, px (измерен по канавкам)
const TOP = 150 // берём середину следа — края исходника затухают
const REPEATS = 13 // 13 × 27.06 ≈ 352 px — стык попадает в тот же узор
const SCALE = 2 // исходник маленький (179 px) — увеличиваем под Retina
const WHITE = 215 // светлее — полностью прозрачно (фон, канавки)
const BLACK = 70 // темнее — полностью непрозрачно (блоки протектора)

const BLEND = 70 // высота плавного перехода на стыке, px исходника

const height = Math.round(PERIOD * REPEATS)
const src = await sharp(SRC).greyscale().raw().toBuffer({ resolveWithObject: true })
const W = src.info.width

// Плитка = строки TOP..TOP+height. Нижние BLEND строк плавно смешиваем со строками,
// идущими ровно на height выше (тот же узор, сдвинутый на целое число шагов):
// к концу плитки она совпадает со строкой TOP-1 и бесшовно переходит в своё начало.
const tile = Buffer.alloc(W * height)
for (let y = 0; y < height; y++) {
  const t = Math.max(0, (y - (height - BLEND)) / BLEND)
  for (let x = 0; x < W; x++) {
    const a = src.data[(TOP + y) * W + x]
    const b = t > 0 ? src.data[(TOP + y - height) * W + x] : a
    tile[y * W + x] = Math.round(a * (1 - t) + b * t)
  }
}

const { data, info } = await sharp(tile, { raw: { width: W, height, channels: 1 } })
  .resize({ height: height * SCALE, kernel: 'lanczos3' })
  .greyscale() // иначе sharp отдаёт 3 канала
  .raw()
  .toBuffer({ resolveWithObject: true })

const rgba = Buffer.alloc(info.width * info.height * 4)
for (let i = 0; i < info.width * info.height; i++) {
  const a = Math.min(1, Math.max(0, (WHITE - data[i]) / (WHITE - BLACK)))
  rgba.set([...RED, Math.round(a * 255)], i * 4)
}

await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .webp({ quality: 90, alphaQuality: 90 })
  .toFile(OUT)
console.log(`  ${OUT}  ${info.width}×${info.height}`)
