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

if (failures.length) {
  console.error(`FAIL data-boundary: ${failures.length} issues`);
  failures.forEach(failure => console.error(`  ${failure}`));
  process.exitCode = 1;
} else console.log(`PASS data-boundary: ${files.length} data files`);
