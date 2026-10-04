import type { SongStyle } from '../../data/styles/schema';
import type { MusicalPattern } from '../../data/schema';

/** Resolve explicit ownership without rewriting or deduplicating source patterns. */
export function assembleStylePatterns(styles: SongStyle[], patterns: MusicalPattern[]): MusicalPattern[] {
  const byId = new Map(styles.map(style => [style.id, style]));
  for (const pattern of patterns) {
    for (const owner of pattern.styleIds ?? []) {
      const style = byId.get(owner);
      if (!style || style.primaryGenre !== pattern.worldId) {
        throw new Error(`Pattern ${pattern.id} has invalid style owner ${owner}`);
      }
    }
  }
  for (const style of styles) {
    const owned = patterns.filter(pattern => pattern.enabled !== false && pattern.styleIds?.includes(style.id));
    if (!owned.length) throw new Error(`Style ${style.id} has no authored patterns`);
    const ids = owned.map(pattern => pattern.id);
    style.patterns = { require: [], preferred: [...ids], allowed: ids, avoid: [] };
  }
  return patterns;
}
