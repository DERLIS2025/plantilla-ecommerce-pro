import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public/images');
const validExtensions = new Set(['.jpg', '.jpeg', '.png']);
const minimumSize = 60 * 1024;

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await walk(root);
let converted = 0;

for (const file of files) {
  const extension = path.extname(file).toLowerCase();

  if (!validExtensions.has(extension)) continue;

  const stats = await fs.stat(file);

  if (stats.size < minimumSize) continue;

  const destination = file.replace(/\.(jpe?g|png)$/i, '.webp');

  await sharp(file)
    .rotate()
    .webp({
      quality: 78,
      effort: 5,
      smartSubsample: true
    })
    .toFile(destination);

  const newStats = await fs.stat(destination);
  const reduction = Math.round((1 - newStats.size / stats.size) * 100);

  console.log(
    `✅ ${path.relative(process.cwd(), file)} → ${path.relative(
      process.cwd(),
      destination
    )} | reducción ${reduction}%`
  );

  converted += 1;
}

console.log(`\n✅ ${converted} imágenes convertidas a WebP`);
