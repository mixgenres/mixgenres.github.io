import type { MusicalPattern } from '../types';

const fold = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * The little tags on a rhythm's note card.
 *
 * The raw data repeats the same word across `family`, `authenticityTags` and
 * `tags` (81% of rhythms showed 'tango · tango' or similar) and stores
 * lowercase slugs ('call-response', 'half-time') that read like code, so this
 * de-duplicates, un-slugs, and caps the list.
 */
export function noteTags(
  p: Pick<MusicalPattern, 'family' | 'meter' | 'authenticityTags' | 'tags'>,
  max = 6,
): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of [p.family, p.meter, ...(p.authenticityTags ?? []), ...p.tags]) {
    if (!raw || raw.startsWith('catalog-')) continue;
    // lowercase slugs only: 'half-time' -> 'half time', 'marcato-2' -> 'marcato 2';
    // proper names ('Silk-and-Bamboo', 'J-Pop') and '12-bar', '2-3' are left alone
    const label = raw === raw.toLowerCase() ? raw.replace(/([a-z]{2})-(?=[a-z]{2}|\d)/g, '$1 ') : raw;
    const key = fold(label);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(label);
    if (out.length >= max) break;
  }
  return out;
}
