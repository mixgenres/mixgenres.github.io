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
  // Instrument-scoped identifiers such as "flute:tango" resolve through
  // their explicit genre segment. The prefix is metadata, not a new dialect.
  const explicitId = canonical(params.dialect || '');
  const explicit = explicitId.includes(':') ? canonical(explicitId.split(':').at(-1)!) : explicitId;
  const id = explicit || canonical(params.genreId || '');
  // Afrobeat is the genre identity used by the catalog; the authored dialect
  // profile is shared with its modern afrobeats family entry.
  const profileId = id === 'afrobeat' ? 'afrobeats' : id;
  if (params.dialect && !PROFILES[profileId]) throw new Error(`No authored instrument dialect profile for ${id}`);
  const p = PROFILES[profileId];
  if (!p) throw new Error(`No authored instrument dialect profile for ${id || '(empty genre)'}`);
  return { id, ...p };
}
