import { InstrumentDef, INSTRUMENTS_BY_ID } from '../../data/instruments';
import type { GrooveRole } from '../generators/groove';

export type SustainClass =
  /** struck and left to ring: piano, mallets, plucked strings */
  | 'decaying'
  /** held as long as the player holds it: strings, pads, organ, voice */
  | 'sustained'
  /** held, but needs breath: winds and brass */
  | 'blown'
  /** short by nature: staccato plucks, muted guitar, clav */
  | 'short'
  /** unpitched */
  | 'percussive';

export interface VoiceProfile {
  id?: string;
  sustain: SustainClass;
  role: GrooveRole;
  /** the midi note this instrument likes to centre its part around */
  centre: number;
  /** playable range, used to fold parts into a sensible octave */
  low: number;
  high: number;
  /** default stereo position, -1..1 */
  pan: number;
  /** trim in dB relative to nominal, to get gain staging roughly right */
  trim: number;
  /** how wet this instrument wants to be, 0..1 */
  space: number;
  /** maximum ring-out in beats for decaying instruments */
  ring: number;
  /** optional micro-voice timing smear in ms for ensemble instruments */
  ensembleSmearMs?: number;
  /** allows note decay & reverberation tails to cross section boundaries naturally */
  letRingAcrossSections?: boolean;
}

const FAMILY_DEFAULTS: Record<string, Partial<VoiceProfile>> = {
  'bellows-and-keys': { sustain: 'sustained', centre: 60, low: 41, high: 84, pan: -0.12, trim: -1, space: 0.28, ring: 2, letRingAcrossSections: true },
  plucked:            { sustain: 'decaying',  centre: 57, low: 40, high: 84, pan: 0.18,  trim: 0,  space: 0.24, ring: 2.5 },
  bowed:              { sustain: 'sustained', centre: 64, low: 48, high: 88, pan: -0.24, trim: -2, space: 0.42, ring: 4, letRingAcrossSections: true },
  winds:              { sustain: 'blown',     centre: 69, low: 55, high: 92, pan: 0.26,  trim: -2, space: 0.34, ring: 3 },
  brass:              { sustain: 'blown',     centre: 67, low: 52, high: 88, pan: 0.3,   trim: -1, space: 0.3,  ring: 2.5 },
  voice:              { sustain: 'sustained', centre: 64, low: 50, high: 81, pan: 0,     trim: -3, space: 0.4,  ring: 4, letRingAcrossSections: true },
  'hand-drums':       { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: 0.3,  trim: -1, space: 0.18, ring: 0.5 },
  'metal-and-wood':   { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: -0.34, trim: -3, space: 0.22, ring: 0.5 },
  kit:                { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: 0,    trim: 0,  space: 0.14, ring: 0.5 },
  electronic:         { sustain: 'sustained', centre: 60, low: 36, high: 90, pan: 0,     trim: -2, space: 0.3,  ring: 4 },
};

/** Per-instrument overrides (now authored directly inside definitions/<instrument>.ts). */
const OVERRIDES: Record<string, Partial<VoiceProfile>> = {};

import { LRUMap, registerCache } from '../util/lru';

const BASE: VoiceProfile = {
  sustain: 'decaying', role: 'comp', centre: 60, low: 36, high: 88,
  pan: 0, trim: -2, space: 0.28, ring: 2,
};

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
  const merged: VoiceProfile = { ...BASE, ...fam, ...over, ...embedded, id: instrumentId };

  if (genreId && /metal|grunge/i.test(genreId) && /guitar/i.test(instrumentId)) {
    // Drop-D tuning: adjust lowest allowable pitch to D2 (MIDI 38)
    merged.low = 38;
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
