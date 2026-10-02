import type { GenreDialect } from '../../data/performance/schema/genre-dialect';
import { PROFILES } from '../../data/performance/genreDialectProfiles';

export interface GenreDialectContext {
  genreId?: string;
  dialect?: string;
}



function canonical(raw: string): string {
  const s = raw.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[_\s]+/g, '-');
  if (s === 'r-and-b' || s === 'rnb') return 'rnb';
  if (s === 'hiphop') return 'hip-hop';
  if (s === 'drum&bass' || s === 'drum-n-bass') return 'drum-and-bass';
  if (s === 'punk') return 'punk-hardcore';
  return s;
}

export function getGenreDialect(params: GenreDialectContext): GenreDialect {
  // Genre ids and explicit dialect ids are complete identifiers. Substring
  // matching lets "reggaeton" resolve as "reggae" and "neurofunk" as "funk".
  const explicit = canonical(params.dialect || '');
  const id = PROFILES[explicit] ? explicit : canonical(params.genreId || explicit);
  const p = PROFILES[id] ?? PROFILES.folk;
  return { id, ...p };
}
