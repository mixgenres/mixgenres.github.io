import { readFileSync } from 'node:fs';

import { parseObject, finiteNumber } from './unknownData';
export { isRecord, records, stringValue, finiteNumber } from './unknownData';

export function readObject(path: string): Record<string, unknown> {
  return parseObject(readFileSync(path, 'utf8'));
}
export function readNumbers(path: string): Record<string, number> {
  return Object.fromEntries(Object.entries(readObject(path)).map(([key, value]) => [key, finiteNumber(value)]));
}
