import { InstrumentDef, INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import type { VoiceProfile } from '../../data/instruments/schema/voice-profile';
import { DEFAULT_VOICE_PROFILE, FAMILY_DEFAULTS } from '../../data/instruments/familyVoiceDefaults';
import { DROP_TUNING_GENRE_PATTERN, DROP_TUNING_LOW_MIDI } from '../../data/instruments/genreRangeRules';
import { ENGINE_INSTRUMENT_KEYS, instrumentHasKey } from '../lookup/instrumentKeys.ts';

/** Per-instrument overrides (now authored directly inside definitions/<instrument>.ts). */
const OVERRIDES: Record<string, Partial<VoiceProfile>> = {};

import { LRUMap, registerCache } from '../cache/lru.ts';

const cache = new LRUMap<string, VoiceProfile>(500, 'voiceProfileCache');
registerCache(cache);

export function voiceProfile(instrumentId: string, genreId?: string): VoiceProfile {
  const cacheKey = genreId ? `${instrumentId}-${genreId}` : instrumentId;
  const hit = cache.get(cacheKey);
  if (hit) return hit;

  const def: InstrumentDef | undefined = INSTRUMENTS_BY_ID[instrumentId];
  const fam = def ? FAMILY_DEFAULTS[def.family] ?? {} : {};
  const over = OVERRIDES[instrumentId] ?? {};
  const embedded = def?.acousticProfile ? def.acousticProfile : {};
  const merged: VoiceProfile = { ...DEFAULT_VOICE_PROFILE, ...fam, ...over, ...embedded, id: instrumentId };

  if (genreId && DROP_TUNING_GENRE_PATTERN.test(genreId) && instrumentHasKey(instrumentId, ENGINE_INSTRUMENT_KEYS.guitar)) {
    // Drop-D tuning: adjust lowest allowable pitch to D2 (MIDI 38)
    merged.low = DROP_TUNING_LOW_MIDI;
  }

  if (def) {
    if (def.voicing === 'bass') merged.role = 'bass';
    else if (def.voicing === 'unpitched') merged.role = merged.role === 'comp' ? 'perc' : merged.role;
    else if (def.voicing === 'single' && merged.role === 'comp') merged.role = 'lead';
  }
  cache.set(cacheKey, merged);
  return merged;
}

export function resolveTechniqueProfile(instrumentId: string, genreId?: string) {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def?.techniques) return undefined;
  const methods = def.techniques.techniqueMethods ?? [];
  const styles = def.techniques.playingStyles ?? [];
  const genreTechs = genreId ? def.techniques.genreTechniques?.[genreId.toLowerCase()] : undefined;
  return {
    methods,
    styles,
    genreTechniques: genreTechs ?? def.techniques.articulations
  };
}

export function noteLengthBeats(
  p: VoiceProfile,
  authoredBeats: number,
  gapBeats: number,
  articulation?: string,
): number {
  const art = articulation ?? '';
  let mult = 1;
  if (/staccato|seco|picado|damp|mute|bachi|alternate-pluck/i.test(art)) mult = 0.42;
  else if (/marcato|accent/i.test(art)) mult = 0.7;
  else if (/legato|ligado|tenuto|sostenuto/i.test(art)) mult = 1.3;
  else if (/pesado|heavy/i.test(art)) mult = 1.15;

  const gap = Math.max(0.05, gapBeats);
  const targetBeats = authoredBeats * mult;

  switch (p.sustain) {
    case 'percussive':
      return Math.min(0.25, Math.min(gap * 0.9, targetBeats));
    case 'short':
      return Math.max(0.05, Math.min(gap * 0.8, targetBeats));
    case 'decaying':
      // Decaying notes (piano, guitar) fade naturally but shouldn't be forced to ring forever if the pattern has short notes
      return Math.min(p.ring, Math.min(gap * 0.95, targetBeats));
    case 'blown':
      // Winds/brass sustain with breath, respect authored length tightly with a tiny release gap
      return Math.max(0.08, Math.min(gap * 0.9, targetBeats));
    case 'sustained':
    default:
      // Sustained instruments (strings, organ) respect the authored note duration tightly
      return Math.max(0.1, Math.min(gap * 0.95, targetBeats));
  }
}

/** Fold a midi note into the instrument's comfortable range. */
export function foldToRange(midi: number, p: VoiceProfile): number {
  let n = midi;
  let guard = 0;
  while (n < p.low && guard++ < 12) n += 12;
  guard = 0;
  while (n > p.high && guard++ < 12) n -= 12;
  return Math.max(0, Math.min(127, n));
}
