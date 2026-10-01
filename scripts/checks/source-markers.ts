// CHECK: no TODO / FIXME / "not implemented" / legacy-fallback markers left in src/.
// (Was the first half of engine-integrity-audit.ts; the per-style half now lives in checks/styles.ts --only=compile.)
// Run: npm run check:markers     Exit 1 if any marker is found.
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');
const forbidden = /(?:TODO|FIXME|not implemented|unimplemented|legacyResolveDialect|legacy fallback)/i;
const findings: string[] = [];
(function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', 'old'].includes(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(ts|tsx|mjs|js)$/.test(entry.name) && forbidden.test(fs.readFileSync(p, 'utf8'))) findings.push(path.relative(process.cwd(), p));
  }
})(root);
console.log(JSON.stringify({ status: findings.length ? 'FAIL' : 'PASS', markers: findings.length, files: findings }, null, 2));
if (findings.length) process.exit(1);
