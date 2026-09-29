export type { GenreDialectTarget } from '../../data/performance/genreDialectTargets';
export type { InstrumentPerformanceProfile, GenrePerformanceProfile } from '../../data/performance/instrumentPerformanceProfiles';
import { GENRE_DIALECT_TARGETS, COMMON_DIALECT_TARGET } from '../../data/performance/genreDialectTargets';
import type { GenreDialectTarget } from '../../data/performance/genreDialectTargets';

export function genreDialectTarget(genre: string): GenreDialectTarget {
  return GENRE_DIALECT_TARGETS[genre] ?? COMMON_DIALECT_TARGET;
}

import { INSTRUMENT_PERFORMANCE_PROFILES } from '../../data/performance/instrumentPerformanceProfiles';
import type { InstrumentPerformanceProfile, GenrePerformanceProfile } from '../../data/performance/instrumentPerformanceProfiles';

export function getInstrumentPerformanceProfile(id: string): InstrumentPerformanceProfile {
  const p = INSTRUMENT_PERFORMANCE_PROFILES[id];
  if (!p) throw new Error(`No performance profile for instrument "${id}"`);
  return p;
}

export function resolveGenreProfile(id: string, genre: string): GenrePerformanceProfile {
  const p = getInstrumentPerformanceProfile(id);
  return p.genreProfiles[genre] ?? p.genreProfiles[p.primaryGenres[0] ?? 'jazz'];
}
