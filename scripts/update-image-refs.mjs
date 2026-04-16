// Update all image references from .jpg/.jpeg/.png to .webp
// Only rewrites a reference if the corresponding .webp file exists.
// Usage: node scripts/update-image-refs.mjs [--dry-run]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run');
if (DRY_RUN) console.log('--- DRY RUN ---\n');

function findMdxFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findMdxFiles(fullPath));
    else if (/\.(mdx?|tsx?)$/.test(entry.name)) results.push(fullPath);
  }
  return results;
}

const contentDir = path.join(ROOT, 'content');
const extraFiles = [path.join(ROOT, 'src', 'app', 'shop', 'page.tsx')];
const files = [...findMdxFiles(contentDir), ...extraFiles];

let totalUpdated = 0;
let warnings = 0;

for (const filePath of files) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  content = content.replace(
    /\/images\/([^"'\s)>\n]+)\.(jpg|jpeg|png)/gi,
    (match, basename, ext) => {
      // Handle paths with subdirectories like /images/2021/01/file.jpg
      const webpDiskPath = path.join(ROOT, 'public', 'images', `${basename}.webp`);
      if (fs.existsSync(webpDiskPath)) {
        return `/images/${basename}.webp`;
      }
      console.warn(`  WARN: no .webp found for ${match} in ${path.relative(ROOT, filePath)}`);
      warnings++;
      return match;
    }
  );

  if (content !== original) {
    const rel = path.relative(ROOT, filePath);
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated: ${rel}`);
    } else {
      console.log(`DRY-RUN would update: ${rel}`);
    }
    totalUpdated++;
  }
}

console.log(`\nDone. Files updated: ${totalUpdated}, Warnings: ${warnings}`);
if (warnings > 0) process.exit(1);
