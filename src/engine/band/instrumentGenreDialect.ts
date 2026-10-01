import type { GenreDialect } from '../../data/performance/schema/genre-dialect';
import { PROFILES } from '../../data/performance/genreDialectProfiles';
import { GENRE_ALIASES } from '../../data/performance/genreAliases';

export interface GenreDialectContext {
  genreId?: string;
  dialect?: string;
  /** Instrument/style dialect identifier; never used as the genre profile key. */
  instrumentDialectId?: string;
}



function canonical(raw: string): string {
  const s = raw.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[_\s]+/g, '-');
  return GENRE_ALIASES[s] ?? s;
}

export function getGenreDialect(params: GenreDialectContext): GenreDialect {
  // Genre ids and explicit dialect ids are complete identifiers. Substring
  // matching lets "reggaeton" resolve as "reggae" and "neurofunk" as "funk".
  const id = canonical(params.genreId || '');
  const p = PROFILES[id] ?? PROFILES.folk;
  return { id, ...p };
}
