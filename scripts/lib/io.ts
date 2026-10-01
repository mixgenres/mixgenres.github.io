// Tiny shared helpers for every script that writes a report into <repo>/audit/.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

export const AUDIT_DIR = 'audit';

/** Writes pretty JSON to audit/<file> (creating folders) and returns the path. */
export function writeReport(file: string, data: unknown): string {
  const path = `${AUDIT_DIR}/${file}`;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
  return path;
}

export const mean = (xs: number[]): number => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);
export const round = (n: number, digits = 2): number => Number(n.toFixed(digits));

/** `--name=value` / `--name value` / bare `--name` (true) lookup on process.argv. */
export function flag(name: string): string | true | undefined {
  const argv = process.argv.slice(2);
  const i = argv.findIndex(a => a === `--${name}` || a.startsWith(`--${name}=`));
  if (i < 0) return undefined;
  const a = argv[i];
  if (a.includes('=')) return a.slice(a.indexOf('=') + 1);
  const next = argv[i + 1];
  return next && !next.startsWith('--') ? next : true;
}

/** Positional (non `--`) arguments. */
export const positional = (): string[] => process.argv.slice(2).filter(a => !a.startsWith('--'));
