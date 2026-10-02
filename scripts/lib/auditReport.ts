import { createHash } from 'node:crypto';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

export interface Finding { severity: 'error' | 'warning' | 'info'; code: string; scope: string; message: string; }
export function sourceFingerprint(): string {
  const hash = createHash('sha256');
  const visit = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (/\.(ts|mjs|json|html)$/.test(path)) { hash.update(path); hash.update(readFileSync(path)); }
    }
  };
  visit('src'); visit('scripts'); hash.update(readFileSync('package.json'));
  return hash.digest('hex');
}
export function reportMetadata() { return { schemaVersion: 3, generatedAt: new Date().toISOString(), sourceFingerprint: sourceFingerprint() }; }
export function writeReport(name: string, payload: unknown) {
  mkdirSync('audit', { recursive: true });
  const path = resolve('audit', `${name}.json`);
  writeFileSync(path, JSON.stringify(payload, null, 2) + '\n');
  return path;
}
export function summarizeFindings(findings: Finding[]) {
  return { errors: findings.filter(f => f.severity === 'error').length, warnings: findings.filter(f => f.severity === 'warning').length, info: findings.filter(f => f.severity === 'info').length };
}
