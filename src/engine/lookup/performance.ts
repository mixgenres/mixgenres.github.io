export type { GenreDialectTarget } from '../../data/performance/genreDialectTargets';
export type { InstrumentPerformanceProfile, GenrePerformanceProfile } from '../../data/performance/instrumentPerformanceProfiles';
import { GENRE_DIALECT_TARGETS } from '../../data/performance/genreDialectTargets';
import type { GenreDialectTarget } from '../../data/performance/genreDialectTargets';

export function genreDialectTarget(genre: string): GenreDialectTarget | undefined {
  return GENRE_DIALECT_TARGETS[genre];
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
  const profile = p.genreProfiles[genre];
  if (!profile) throw new Error(`No ${genre} performance profile for instrument "${id}"`);
  return profile;
}
