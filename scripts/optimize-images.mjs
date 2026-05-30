import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const SRC = '/Users/Jon/Downloads/clubleaderboard-images';
const DEST = '/Users/Jon/Downloads/clubleaderboard/public/images';
const MAX_WIDTH = 1200;
const QUALITY = 80;
const CATEGORIES = ['drivers', 'irons', 'wedges', 'putters', 'hybrids', 'fairway-woods'];

mkdirSync(DEST, { recursive: true });

const summary = { ok: 0, skip: 0, err: 0, srcBytes: 0, dstBytes: 0, perCat: {} };

for (const cat of CATEGORIES) {
  const srcDir = join(SRC, cat);
  const dstDir = join(DEST, cat);
  mkdirSync(dstDir, { recursive: true });
  summary.perCat[cat] = { count: 0, srcBytes: 0, dstBytes: 0 };

  const files = readdirSync(srcDir).filter(f => !f.startsWith('_') && !f.startsWith('.'));
  for (const f of files) {
    const id = basename(f, extname(f));
    const srcPath = join(srcDir, f);
    const dstPath = join(dstDir, `${id}.webp`);
    const srcStat = statSync(srcPath);

    if (existsSync(dstPath) && statSync(dstPath).mtimeMs >= srcStat.mtimeMs) {
      summary.skip++;
      continue;
    }

    try {
      const img = sharp(srcPath, { animated: false });
      const meta = await img.metadata();
      const targetWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;
      await img
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(dstPath);
      const dstStat = statSync(dstPath);
      summary.ok++;
      summary.srcBytes += srcStat.size;
      summary.dstBytes += dstStat.size;
      summary.perCat[cat].count++;
      summary.perCat[cat].srcBytes += srcStat.size;
      summary.perCat[cat].dstBytes += dstStat.size;
      const pct = ((1 - dstStat.size / srcStat.size) * 100).toFixed(0);
      process.stdout.write(`  ${cat}/${id}.webp  ${(srcStat.size/1024).toFixed(0)}KB → ${(dstStat.size/1024).toFixed(0)}KB  (-${pct}%)\n`);
    } catch (e) {
      summary.err++;
      console.error(`  ERR ${cat}/${f}  ${e.message}`);
    }
  }
}

console.log('\n=== SUMMARY ===');
console.log(`OK:      ${summary.ok}`);
console.log(`Skipped: ${summary.skip}`);
console.log(`Errors:  ${summary.err}`);
console.log(`Source:  ${(summary.srcBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(`Output:  ${(summary.dstBytes / 1024 / 1024).toFixed(1)} MB`);
if (summary.srcBytes > 0) {
  console.log(`Saved:   ${((1 - summary.dstBytes / summary.srcBytes) * 100).toFixed(0)}%`);
}
console.log('\nPer category (src → out):');
for (const [k, v] of Object.entries(summary.perCat)) {
  console.log(`  ${k.padEnd(15)} ${v.count} files  ${(v.srcBytes/1024/1024).toFixed(1)} MB → ${(v.dstBytes/1024/1024).toFixed(1)} MB`);
}
