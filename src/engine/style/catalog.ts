import { PATTERN_CATEGORY_FALLBACK, PATTERN_CATEGORY_RULES } from '../../data/styles/patternCategories';
import type { SongStyle } from '../../data/styles/schema';
import type { MusicalPattern } from '../../data/schema';
import { GENRE_WORLDS_BY_ID } from '../../data/genres';
import { STALE_PATTERN_STYLE_ALIASES } from '../../data/styles/stalePatternStyleAliases';

function shortText(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function patternCategory(p: MusicalPattern): string {
  const raw = `${p.category} ${p.family} ${p.name} ${p.tags.join(' ')}`.toLowerCase();
  return PATTERN_CATEGORY_RULES.find(rule => rule.categoryIds.includes(p.category) || rule.pattern.test(raw))?.value ?? PATTERN_CATEGORY_FALLBACK;
}

function onsetSimilarity(a: MusicalPattern, b: MusicalPattern): number {
  if (a.meter !== b.meter || a.cycleLength !== b.cycleLength || a.subdivisions !== b.subdivisions) return 0;
  const aa = new Set(a.onsetGrid ?? []); const bb = new Set(b.onsetGrid ?? []);
  const union = new Set([...aa, ...bb]).size;
  return union ? [...aa].filter(x => bb.has(x)).length / union : 1;
}

function nearDuplicate(a: MusicalPattern, b: MusicalPattern): boolean {
  return patternCategory(a) === patternCategory(b) && onsetSimilarity(a, b) >= 0.92 && a.family === b.family;
}

function selectSharedPatterns(style: SongStyle, candidates: MusicalPattern[], target = 6): MusicalPattern[] {
  const terms = `${style.name} ${style.summary} ${style.signatureTraits.join(' ')}`.toLowerCase();
  const ranked = candidates
    .filter(p => p.enabled !== false)
    .map(p => ({ p, score: (p.styleIds?.includes(style.id) ? 1000 : 0) + (p.name + ' ' + p.tags.join(' ') + ' ' + p.description + ' ' + (p.authenticityTags ?? []).join(' ')).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).reduce((n, t) => n + (t.length > 3 && terms.includes(t) ? 2 : 0), 0) + (p.weight ?? 0) }))
    .sort((a,b) => b.score - a.score || a.p.id.localeCompare(b.p.id));
  const selected: MusicalPattern[] = [];
  const categories = new Set<string>();

  // Explicit style ownership outranks semantic matching. Apply duplicate filtering
  // only to patterns selected by semantic fallback.
  for (const { p } of ranked) {
    if (!p.styleIds?.includes(style.id)) continue;
    selected.push(p);
    categories.add(patternCategory(p));
  }

  for (const { p } of ranked) {
    if (selected.includes(p) || selected.some(x => nearDuplicate(x, p))) continue;
    const cat = patternCategory(p);
    if (categories.has(cat) && selected.length >= target) continue;
    selected.push(p); categories.add(cat);
    if (selected.length >= target) return selected;
  }
  for (const { p } of ranked) {
    if (selected.includes(p) || selected.some(x => nearDuplicate(x, p))) continue;
    selected.push(p);
    if (selected.length >= target) break;
  }
  return selected;
}

export function buildCuratedStyles(baseStyles: SongStyle[], _patterns: MusicalPattern[]): SongStyle[] {
  // The authored GenreStyleDefinition is the style source of truth. A previous
  // catalog pass renamed seeds, borrowed profiles from neighboring genres, and
  // selected missing styles by array position. Preserve each authored seed as
  // authored so genre-specific names, personnel, meter, and idiom stay aligned.
  return baseStyles;
}

export function assembleStylePatterns(styles: SongStyle[], patterns: MusicalPattern[]): MusicalPattern[] {
  // Preserve authored style ownership from the source catalog. Older generated
  // revisions erased these IDs and forced every style through semantic guessing,
  // Preserve authored patterns before applying the fallback cap.
  const styleIdBySlug = new Map<string, string>();
  for (const style of styles) {
    const add = (value: string) => styleIdBySlug.set(
      value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, ''),
      style.id
    );
    add(style.id);
  }

  const resolveStaleId = (id: string, genreId: string): string => {
    const cleanId = String(id).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');
    // Exact match first
    if (styleIdBySlug.has(cleanId)) return styleIdBySlug.get(cleanId)!;
    const migrated = STALE_PATTERN_STYLE_ALIASES[genreId]?.[cleanId];
    if (migrated && styleIdBySlug.has(migrated)) return migrated;
    // Substring matching can bind a stale ID to a different genre's style
    // (for example, an Afro-Cuban pattern to a Salsa style with the same suffix).
    return id;
  };

  for (const p of patterns) {
    p.styleIds = Array.from(new Set((p.styleIds ?? [])
      .map(id => resolveStaleId(id, p.worldId))
      .filter(id => styles.some(style => style.id === id))));
  }

  // Styles share authored pattern definitions, but do not share one identical
  // six-pattern shortlist. Selection is semantic: each style gets the patterns
  // whose names/tags/description actually match its musical vocabulary.
  for (const style of styles) {
    const patternIds = new Set((GENRE_WORLDS_BY_ID[style.primaryGenre]?.patterns ?? []).map(pattern => pattern.id));
    const candidates = patterns.filter(pattern => patternIds.has(pattern.id));
    const chosen = selectSharedPatterns(style, candidates, Math.min(8, Math.max(4, candidates.length)));
    const authored = chosen.filter(p => p.styleIds?.includes(style.id));
    const inferred = chosen.filter(p => !p.styleIds?.includes(style.id));
    // Persist genre-scoped semantic ownership for legacy patterns that had no
    // valid owner. This makes their selected style relationship visible to all
    // runtime consumers and prevents it being lost after load-time cleanup.
    for (const pattern of inferred) {
      pattern.styleIds = Array.from(new Set([...(pattern.styleIds ?? []), style.id]));
    }
    style.patterns = {
      require: authored.slice(0, 3).map(p => p.id),
      preferred: [...authored.slice(3), ...inferred].map(p => p.id),
      allowed: chosen.map(p => p.id),
      avoid: [],
      inferred: inferred.map(p => p.id),
    };
  }

  for (const p of patterns) {
    p.description = shortText(p.description);
    p.variants = (p.variants ?? []).map(v => ({ ...v, description: v.description ? shortText(v.description) : v.description }));
  }
  return patterns;
}
