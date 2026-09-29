import fs from 'node:fs';
import path from 'node:path';

const dataRoot = path.resolve('src/data');
const extensions = ['.ts', '.tsx'];
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (extensions.includes(path.extname(entry.name))) files.push(full);
  }
}
walk(dataRoot);
const failures = [];
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const imports = source.matchAll(/\b(?:from\s*|import\s*\()\s*['"]([^'"]+)['"]/g);
  for (const [, specifier] of imports) {
    if (!specifier.startsWith('.')) {
      failures.push(`${path.relative(process.cwd(), file)} imports external module ${specifier}`);
      continue;
    }
    const resolved = path.resolve(path.dirname(file), specifier);
    if (resolved !== dataRoot && !resolved.startsWith(`${dataRoot}${path.sep}`)) {
      failures.push(`${path.relative(process.cwd(), file)} imports outside src/data: ${specifier}`);
    }
  }
}

const catalogRoot = path.join(dataRoot, 'instruments/catalog');
const dspRoot = path.join(dataRoot, 'sound/dsp');
const catalogIds = new Set();
const dspIds = new Set();
function collectIds(root, ids) {
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) collectIds(full, ids);
    else if (entry.name.endsWith('.ts') && entry.name !== 'index.ts') ids.add(path.basename(entry.name, '.ts'));
  }
}
collectIds(catalogRoot, catalogIds);
collectIds(dspRoot, dspIds);
for (const id of catalogIds) if (!dspIds.has(id)) failures.push(`Missing DSP definition for ${id}`);
for (const id of dspIds) if (!catalogIds.has(id)) failures.push(`DSP has no instrument definition: ${id}`);

if (failures.length) {
  console.error(`Data boundary audit failed (${failures.length} issue(s)):`);
  for (const failure of failures) console.error(` - ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Data boundary PASS: ${files.length} files are leaf-only; ${catalogIds.size} catalog and DSP ids align.`);
}
