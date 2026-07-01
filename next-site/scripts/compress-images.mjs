import sharp from 'sharp'
import { readFileSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, '../public')

const images = [
  'IAA_PortV2.png',
  'StLuke_PortV2.png',
  'CC_Port.png',
  'Starlit_Port.png',
  'Rest_Port.png',
  'ParkSmart_Port.png',
]

for (const filename of images) {
  const inputPath = resolve(publicDir, filename)
  const outputFilename = filename.replace(/\.png$/i, '.webp')
  const outputPath = resolve(publicDir, outputFilename)

  const beforeBytes = statSync(inputPath).size

  await sharp(inputPath)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath)

  const afterBytes = statSync(outputPath).size
  const reduction = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1)

  console.log(
    `${filename} → ${outputFilename}  |  ${(beforeBytes / 1024).toFixed(1)} KB → ${(afterBytes / 1024).toFixed(1)} KB  (${reduction}% smaller)`
  )
}

console.log('\nDone.')
