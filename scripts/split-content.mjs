/**
 * One-time migration script: splits AIHelpCenter.json into per-category files.
 * Run once with: node scripts/split-content.mjs
 * Safe to delete after migration is complete.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const srcFile = join(root, 'src/app/aihelpcenter/AIHelpCenter.json');
const destDir = join(root, 'src/app/aihelpcenter/content');

// Create content directory
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
  console.log('Created content/ directory');
}

const raw = readFileSync(srcFile, 'utf-8');
const allData = JSON.parse(raw);

const categories = allData.categories;
const categoryIds = Object.keys(categories);

console.log(`Found ${categoryIds.length} categories: ${categoryIds.join(', ')}\n`);

for (const [id, catData] of Object.entries(categories)) {
  // Remove hardcoded count fields — they'll be auto-computed by data.ts
  const cleaned = structuredClone(catData);
  delete cleaned.count;

  if (cleaned.subcategories) {
    for (const subcat of Object.values(cleaned.subcategories)) {
      delete subcat.count;
    }
  }

  const outFile = join(destDir, `${id}.json`);
  writeFileSync(outFile, JSON.stringify(cleaned, null, 2), 'utf-8');

  // Count actual topics
  let topicCount = 0;
  if (cleaned.subcategories) {
    for (const subcat of Object.values(cleaned.subcategories)) {
      topicCount += (subcat.topics?.length ?? 0);
    }
  }
  console.log(`✓ content/${id}.json  (${topicCount} articles)`);
}

console.log(`\nDone! ${categoryIds.length} files created in src/app/aihelpcenter/content/`);
console.log('Next: run the dev server and verify pages still work, then delete AIHelpCenter.json');
