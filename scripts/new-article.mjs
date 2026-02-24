#!/usr/bin/env node
/**
 * Interactive CLI to add a new article to the AI Help Center.
 *
 * Usage: npm run new-article
 *
 * The script will:
 *  1. Show you the available categories
 *  2. Show you the available subcategories
 *  3. Ask for article metadata (title, description, duration, date, YouTube ID)
 *  4. Auto-generate the URL slug from the title
 *  5. Insert a ready-to-fill template into the correct content/*.json file
 *
 * After running, open the content file and fill in the `sections` array.
 * The site will automatically show the correct article count and latest badge.
 */

import { createInterface } from 'readline';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../src/app/aihelpcenter/content');

// ── helpers ──────────────────────────────────────────────────────────────────

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function todayFormatted() {
  const d = new Date();
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function pickFromList(rl, prompt, items) {
  return new Promise(async (resolve) => {
    console.log('');
    items.forEach((item, i) => console.log(`  ${i + 1}. ${item.label}`));
    console.log('');
    while (true) {
      const answer = await ask(rl, `${prompt} (1-${items.length}): `);
      const idx = parseInt(answer, 10) - 1;
      if (idx >= 0 && idx < items.length) {
        resolve(items[idx]);
        return;
      }
      console.log(`  Please enter a number between 1 and ${items.length}.`);
    }
  });
}

// Common icon names available in the site's lucide-react icon set
const ICON_SUGGESTIONS = [
  'Code', 'Database', 'BookOpen', 'Cpu', 'BarChart3', 'Server',
  'Briefcase', 'ShieldCheck', 'Zap', 'Layout', 'FileText', 'Layers',
  'Terminal', 'GraduationCap', 'Table', 'Search', 'Play', 'Star',
];

// Common tailwind bg colour classes used in the existing categories
const COLOR_SUGGESTIONS = [
  'bg-blue-500', 'bg-blue-400', 'bg-purple-500', 'bg-purple-400',
  'bg-green-500', 'bg-green-400', 'bg-orange-500', 'bg-orange-400',
  'bg-pink-500', 'bg-red-500', 'bg-indigo-500', 'bg-teal-500',
  'bg-yellow-500', 'bg-gray-500',
];

// ── main ─────────────────────────────────────────────────────────────────────

const rl = createInterface({ input: process.stdin, output: process.stdout });

console.log('\n──────────────────────────────────────────');
console.log('  AI Help Center — New Article Wizard');
console.log('──────────────────────────────────────────');

// 1. Pick category
const categoryFiles = readdirSync(contentDir).filter(f => f.endsWith('.json'));
const categoryItems = categoryFiles.map(f => {
  const id = f.replace('.json', '');
  const raw = JSON.parse(readFileSync(join(contentDir, f), 'utf-8'));
  const totalTopics = Object.values(raw.subcategories ?? {})
    .reduce((sum, s) => sum + (s.topics?.length ?? 0), 0);
  return { id, label: `${raw.title}  (${totalTopics} existing articles)`, raw, file: f };
});

console.log('\nStep 1 — Select a category:');
const category = await pickFromList(rl, 'Category number', categoryItems);

// 2. Pick subcategory (or create a new one)
const existingSubcats = Object.entries(category.raw.subcategories ?? {}).map(([id, sc]) => ({
  id,
  label: `${sc.title}  (${sc.topics?.length ?? 0} articles)`,
  data: sc,
  isNew: false,
}));

const CREATE_NEW = { id: '__new__', label: '[ + ] Create a new subcategory', data: null, isNew: true };
const subcatChoices = [...existingSubcats, CREATE_NEW];

console.log('\nStep 2 — Select a subcategory:');
const subcatChoice = await pickFromList(rl, 'Subcategory number', subcatChoices);

let subcat;

if (subcatChoice.isNew) {
  console.log('\n  — New subcategory details —\n');

  const subcatTitle = (await ask(rl, '  Subcategory title: ')).trim();
  if (!subcatTitle) {
    console.error('  Subcategory title is required.');
    rl.close();
    process.exit(1);
  }

  const suggestedSubcatId = toSlug(subcatTitle);
  const subcatIdInput = (await ask(rl, `  ID slug [${suggestedSubcatId}]: `)).trim();
  const subcatId = subcatIdInput || suggestedSubcatId;

  if (category.raw.subcategories?.[subcatId]) {
    console.error(`\n  A subcategory with id "${subcatId}" already exists in this category.`);
    rl.close();
    process.exit(1);
  }

  console.log(`\n  Available icons: ${ICON_SUGGESTIONS.join(', ')}`);
  const subcatIcon = (await ask(rl, '  Icon name [Database]: ')).trim() || 'Database';

  console.log(`\n  Available colours: ${COLOR_SUGGESTIONS.join(', ')}`);
  const subcatColor = (await ask(rl, '  Colour class [bg-blue-400]: ')).trim() || 'bg-blue-400';

  // Register the new subcategory in the in-memory object so the rest of the
  // script can write the article into it as normal.
  if (!category.raw.subcategories) category.raw.subcategories = {};
  category.raw.subcategories[subcatId] = {
    title: subcatTitle,
    icon: subcatIcon,
    color: subcatColor,
    topics: [],
  };

  subcat = {
    id: subcatId,
    data: category.raw.subcategories[subcatId],
    isNew: true,
  };

  console.log(`\n  ✓ Subcategory "${subcatTitle}" will be created.\n`);
} else {
  subcat = subcatChoice;
}

// 3. Article metadata
console.log('\nStep 3 — Article details (press Enter to accept defaults)\n');

const title = (await ask(rl, '  Title: ')).trim();
if (!title) {
  console.error('  Title is required.');
  rl.close();
  process.exit(1);
}

const suggestedSlug = toSlug(title);
const slugInput = (await ask(rl, `  URL slug [${suggestedSlug}]: `)).trim();
const slug = slugInput || suggestedSlug;

// Check for duplicate slugs in this subcategory
const existingSlugs = (subcat.data.topics ?? []).map(t => t.id);
if (existingSlugs.includes(slug)) {
  console.error(`\n  A topic with slug "${slug}" already exists in this subcategory.`);
  rl.close();
  process.exit(1);
}

const description = (await ask(rl, '  Short description: ')).trim() || `Learn about ${title}`;
const duration = (await ask(rl, '  Duration [15 min read]: ')).trim() || '15 min read';
const defaultDate = todayFormatted();
const date = (await ask(rl, `  Date [${defaultDate}]: `)).trim() || defaultDate;
const youtubeId = (await ask(rl, '  YouTube video ID (optional, press Enter to skip): ')).trim();
const author = (await ask(rl, '  Author [Prateek Agarwal]: ')).trim() || 'Prateek Agarwal';

rl.close();

// 4. Build topic template
const newTopic = {
  id: slug,
  title,
  description,
  duration,
  date,
  content: {
    hero: {
      title,
      author,
      date,
      readTime: duration,
    },
    ...(youtubeId ? { video: { youtubeId, title: `${title} — Video Guide` } } : {}),
    sections: [
      {
        id: 'intro',
        title: 'Introduction',
        type: 'intro',
        content: [
          {
            type: 'paragraph',
            text: 'TODO: Write the introduction here.',
          },
        ],
      },
      {
        id: 'section-1',
        title: 'TODO: Section Title',
        type: 'standard',
        content: [
          {
            type: 'paragraph',
            text: 'TODO: Write section content here.',
          },
        ],
      },
    ],
    conclusion: {
      title: 'Conclusion',
      content: 'TODO: Write the conclusion here.',
      checklist: ['TODO: Add checklist item 1', 'TODO: Add checklist item 2'],
      finalNote: 'TODO: Add a final note.',
      finalParagraph: 'TODO: Add a final paragraph.',
    },
  },
};

// 5. Insert into category JSON
// Use category.raw (already updated in-memory if a new subcategory was created)
// rather than re-reading from disk, so new subcategories are preserved.
const catFilePath = join(contentDir, category.file);
const catData = category.raw;

if (!catData.subcategories[subcat.id].topics) {
  catData.subcategories[subcat.id].topics = [];
}
catData.subcategories[subcat.id].topics.push(newTopic);

writeFileSync(catFilePath, JSON.stringify(catData, null, 2), 'utf-8');

// 6. Print result
const articleUrl = `/aihelpcenter/${category.id}/${slug}`;
console.log('\n──────────────────────────────────────────');
console.log('  Article template created successfully!');
console.log('──────────────────────────────────────────');
console.log(`\n  File   : src/app/aihelpcenter/content/${category.file}`);
if (subcat.isNew) {
  console.log(`  New subcategory "${catData.subcategories[subcat.id].title}" (id: ${subcat.id}) was added.`);
}
console.log(`  URL    : ${articleUrl}`);
console.log(`  Topic  : "${title}"`);
console.log('\n  Next steps:');
console.log(`  1. Open content/${category.file}`);
console.log(`  2. Find the topic with id: "${slug}"`);
console.log('  3. Fill in the sections[] array with your content');
console.log('  4. Save — the site will show the article automatically');
console.log('\n  Content types you can use in sections[]:');
console.log('    paragraph | subtitle | code | explanation | quote');
console.log('    table | list | checklist | warning | note | analogy\n');
