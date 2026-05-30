import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const REPO = '/Users/Jon/Downloads/clubleaderboard';
const PUBLIC_IMAGES = join(REPO, 'public/images');

const CATEGORIES = [
  { name: 'drivers', file: 'src/data/drivers/drivers.ts' },
  { name: 'irons', file: 'src/data/irons/irons.ts' },
  { name: 'wedges', file: 'src/data/wedges/wedges.ts' },
  { name: 'putters', file: 'src/data/putters/putters.ts' },
  { name: 'hybrids', file: 'src/data/hybrids/hybrids.ts' },
  { name: 'fairway-woods', file: 'src/data/fairway-woods/fairway-woods.ts' },
];

function extractPairs(content) {
  const pairs = [];
  const chunks = content.split(/^\s*\{/m);
  for (const chunk of chunks) {
    const idMatch = chunk.match(/^\s+id:\s*'([^']+)'/m);
    const imgMatch = chunk.match(/^\s+imageUrl:\s*'([^']+)'/m);
    if (idMatch && imgMatch) pairs.push({ id: idMatch[1], url: imgMatch[1] });
  }
  return pairs;
}

let totalChanged = 0;
let totalMissing = 0;
const missingFiles = [];

for (const cat of CATEGORIES) {
  const path = join(REPO, cat.file);
  let content = readFileSync(path, 'utf8');
  const pairs = extractPairs(content);

  let changed = 0;
  for (const { id, url } of pairs) {
    const newPath = `/images/${cat.name}/${id}.webp`;
    const localFile = join(PUBLIC_IMAGES, cat.name, `${id}.webp`);
    if (!existsSync(localFile)) {
      missingFiles.push(`${cat.name}/${id}.webp`);
      totalMissing++;
      continue;
    }
    const oldLine = `imageUrl: '${url}'`;
    const newLine = `imageUrl: '${newPath}'`;
    if (content.includes(oldLine)) {
      content = content.replace(oldLine, newLine);
      changed++;
    } else {
      console.warn(`  WARN ${cat.name}/${id}: source line not found verbatim`);
    }
  }
  writeFileSync(path, content);
  totalChanged += changed;
  console.log(`${cat.name.padEnd(15)} ${changed}/${pairs.length} imageUrls rewritten`);
}

console.log(`\nTotal rewritten: ${totalChanged}`);
console.log(`Missing local files: ${totalMissing}`);
if (missingFiles.length) {
  console.log('Missing:');
  for (const m of missingFiles) console.log(`  ${m}`);
}
