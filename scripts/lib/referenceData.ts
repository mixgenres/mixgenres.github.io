import { readObject, records, stringValue } from './jsonData';

function match(value: Record<string, unknown>) {
  return { genre: stringValue(value.genre), styleId: stringValue(value.styleId), name: stringValue(value.name) };
}
export function readReferenceInventory() {
  const inventory = readObject('audit/all-samples/inventory.json');
  return {
    entries: records(inventory.entries).map(entry => ({ file: stringValue(entry.file), matches: records(entry.matches).map(match) })),
    missing: records(inventory.missing).map(match),
  };
}
export function readDefaultReferences() {
  const nullableString = (value: unknown) => value === null ? null : stringValue(value);
  return records(readObject('audit/default-reference-manifest.json').entries).map(entry => ({
    genre: stringValue(entry.genre), name: stringValue(entry.name), status: stringValue(entry.status),
    output: nullableString(entry.output), sample: nullableString(entry.sample),
  }));
}
export function readReferencePatterns() {
  return records(readObject('audit/all-samples/patterns.json').rows).map(row => ({
    styleId: stringValue(row.styleId), tracks: records(row.tracks).map(track => ({ instrumentId: stringValue(track.instrumentId) })),
  }));
}
