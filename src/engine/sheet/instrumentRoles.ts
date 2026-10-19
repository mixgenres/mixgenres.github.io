import { InstrumentDef, INSTRUMENTS_BY_ID, genreTechniquesForInstrument } from '../../engine/lookup/instruments';
import type { VoiceProfile } from '../../data/instruments/schema/voice-profile';
import { DEFAULT_VOICE_PROFILE, FAMILY_DEFAULTS } from '../../data/instruments/familyVoiceDefaults';
import { DROP_TUNING_GENRE_PATTERN, GUITAR_INSTRUMENT_PATTERN, DROP_TUNING_LOW_MIDI } from '../../data/instruments/genreRangeRules';

import { LRUMap, registerCache } from '../cache/lru.ts';

const cache = new LRUMap<string, VoiceProfile>(500, 'voiceProfileCache');
registerCache(cache);

export function voiceProfile(instrumentId: string, genreId?: string): VoiceProfile {
  const cacheKey = genreId ? `${instrumentId}-${genreId}` : instrumentId;
  const hit = cache.get(cacheKey);
  if (hit) return hit;

  const def: InstrumentDef | undefined = INSTRUMENTS_BY_ID[instrumentId];
  const fam = def ? FAMILY_DEFAULTS[def.family] ?? {} : {};
  const embedded = def?.acousticProfile ? def.acousticProfile : {};
  const merged: VoiceProfile = { ...DEFAULT_VOICE_PROFILE, ...fam, ...embedded, id: instrumentId };

  if (genreId && DROP_TUNING_GENRE_PATTERN.test(genreId) && GUITAR_INSTRUMENT_PATTERN.test(instrumentId)) {
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

export function resolveTechniqueProfile(
  instrumentId: string, genreId?: string, styleId?: string,
  scope?: 'note'|'motif'|'phrase'|'section'|'song',
) {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def?.techniques) return undefined;
  const methods = def.techniques.techniqueMethods ?? [];
  const styles = def.techniques.playingStyles ?? [];
  const genreTechs = styleId ? genreTechniquesForInstrument(instrumentId, styleId, scope)
    : genreId ? def.techniques.genreTechniques?.[genreId.toLowerCase()] : undefined;
  return {
    methods,
    styles,
    genreTechniques: genreTechs ?? def.techniques.articulations
  };
}

export function noteLengthBeats(authoredBeats: number, articulation?: string): number {
  const art = articulation ?? '';
  let mult = 1;
  // Only articulations that explicitly describe note length may shorten its gate.
  // Attack methods (bachi, alternate picking/plucking) and dynamics (accent,
  // marcato, heavy) do not imply a shorter note; mute often selects a timbre,
  // and the sample's muted envelope already expresses its decay. Those gestures
  // must not silently replace the written duration with a global gate ratio.
  if (/staccato|seco|damp|choke|chapa/i.test(art)) mult = 0.42;
  else if (/legato|ligado|tenuto|sostenuto/i.test(art)) mult = 1.3;

  // Do not infer a note-off from the next onset. That global gap ceiling
  // flattened instrument envelopes and cut off authored phrases differently
  // at different tempos. The SoundFont release describes the patch; only an
  // explicit length articulation changes the written/performed key hold here.
  return authoredBeats * mult;
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
