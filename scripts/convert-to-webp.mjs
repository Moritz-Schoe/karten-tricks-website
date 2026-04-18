// Convert all JPG/PNG images in public/images/ to WebP
// Usage: node scripts/convert-to-webp.mjs [--dry-run]
// Run from the worktree root.

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DRY_RUN = process.argv.includes('--dry-run');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

function collectImages(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convertImage(srcPath) {
  const ext = path.extname(srcPath).toLowerCase();
  const webpPath = srcPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const rel = path.relative(IMAGES_DIR, srcPath);

  if (fs.existsSync(webpPath)) {
    console.log(`SKIP (webp exists): ${rel}`);
    return 'skipped';
  }

  const quality = ext === '.png' ? 90 : 82;

  if (DRY_RUN) {
    console.log(`DRY-RUN: ${rel} → .webp (quality: ${quality})`);
    return 'converted';
  }

  try {
    await sharp(srcPath).webp({ quality }).toFile(webpPath);

    const stat = fs.statSync(webpPath);
    if (stat.size === 0) throw new Error('Output file is 0 bytes');

    const origSize = fs.statSync(srcPath).size;
    const savings = Math.round((1 - stat.size / origSize) * 100);
    fs.unlinkSync(srcPath);
    console.log(`OK: ${rel} → .webp (${savings}% smaller)`);
    return 'converted';
  } catch (err) {
    console.error(`ERROR: ${rel}: ${err.message}`);
    if (fs.existsSync(webpPath)) fs.unlinkSync(webpPath);
    return 'error';
  }
}

async function main() {
  if (DRY_RUN) console.log('--- DRY RUN ---');
  const images = collectImages(IMAGES_DIR);
  console.log(`Found ${images.length} JPG/PNG files in ${IMAGES_DIR}\n`);

  let converted = 0, skipped = 0, errors = 0;
  for (const img of images) {
    const result = await convertImage(img);
    if (result === 'converted') converted++;
    else if (result === 'skipped') skipped++;
    else errors++;
  }

  console.log(`\nDone. Converted: ${converted}, Skipped: ${skipped}, Errors: ${errors}`);
  if (errors > 0) process.exit(1);
}

main();
