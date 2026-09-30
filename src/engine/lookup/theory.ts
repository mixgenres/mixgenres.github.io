export type { GenreTheoryProfile } from '../../data/musicTheory/genreTheory';
export { GENRE_THEORY } from '../../data/musicTheory/genreTheory';
export { CHORD_PALETTE, CHORD_MOODS, CHORD_MOOD_ORDER, JAZZ_CHORD_LIBRARY } from '../../data/chordPalette';
export type { ChordMood, ChordOption } from '../../data/chordPalette';
import type { GenreTheoryDelta, GenreTheoryProfile } from '../../data/musicTheory/genreTheory';
import { GENRE_THEORY } from '../../data/musicTheory/genreTheory';
import { CHORD_PALETTE, CHORD_MOOD_ORDER_RAW } from '../../data/chordPalette';
import type { ChordMood, ChordOption } from '../../data/chordPalette';

export function getGenreTheory(genreId: string): GenreTheoryProfile {
  return GENRE_THEORY[genreId] ?? GENRE_THEORY.rock;
}

export function blendGenreTheory(host: GenreTheoryProfile, guest: GenreTheoryProfile, weight: number): GenreTheoryProfile {
  const w = Math.max(0, Math.min(1, weight));
  if (w <= 0.001 || host.genreId === guest.genreId) return host;
  const choose = <T>(a:T,b:T) => w > 0.55 ? b : a;
  return {
    ...host,
    progressions: host.progressions,
    cadences: host.cadences,
    defaultScale: choose(host.defaultScale, guest.defaultScale),
    chordScales: {...host.chordScales, ...(w > .65 ? guest.chordScales : {})},
    bass: {
      ...host.bass,
      style: w > .7 ? guest.bass.style : host.bass.style,
      targetDegrees: Array.from(new Set([...host.bass.targetDegrees, ...(w > .45 ? guest.bass.targetDegrees : [])])),
      chromaticApproach: host.bass.chromaticApproach || (w > .55 && guest.bass.chromaticApproach),
      passingProbability: host.bass.passingProbability * (1-w) + guest.bass.passingProbability*w,
      phraseFillProbability: host.bass.phraseFillProbability * (1-w) + guest.bass.phraseFillProbability*w,
      anticipationBeats: Array.from(new Set([...host.bass.anticipationBeats, ...(w > .45 ? guest.bass.anticipationBeats : [])])),
      silenceProbability: host.bass.silenceProbability * (1-w) + guest.bass.silenceProbability*w,
    },
    harmony: host.harmony,
    melody: {
      ...host.melody,
      scale: Array.from(new Set([...host.melody.scale, ...(w > .4 ? guest.melody.scale : [])])),
      targetDegrees: Array.from(new Set([...host.melody.targetDegrees, ...(w > .4 ? guest.melody.targetDegrees : [])])),
      callResponse: host.melody.callResponse || (w > .6 && guest.melody.callResponse),
    },
    rhythm: host.rhythm,
    techniques: {
      bass:Array.from(new Set([...host.techniques.bass,...(w>.35?guest.techniques.bass:[])])),
      harmony:Array.from(new Set([...host.techniques.harmony,...(w>.35?guest.techniques.harmony:[])])),
      melody:Array.from(new Set([...host.techniques.melody,...(w>.35?guest.techniques.melody:[])])),
      percussion:Array.from(new Set([...host.techniques.percussion,...(w>.35?guest.techniques.percussion:[])])),
      bowed:Array.from(new Set([...host.techniques.bowed,...(w>.35?guest.techniques.bowed:[])])),
      winds:Array.from(new Set([...host.techniques.winds,...(w>.35?guest.techniques.winds:[])])),
      bellows:Array.from(new Set([...host.techniques.bellows,...(w>.35?guest.techniques.bellows:[])])),
      voice:Array.from(new Set([...host.techniques.voice,...(w>.35?guest.techniques.voice:[])])),
    },
    mixFocus:Object.fromEntries(Object.keys(host.mixFocus).map(k=>[k,(host.mixFocus[k]??.5)*(1-w)+(guest.mixFocus[k]??host.mixFocus[k]??.5)*w])),
    forbidden: Array.from(new Set([...host.forbidden])),
  };
}

import { STYLE_THEORY_OVERRIDES } from '../../data/musicTheory/styleTheoryOverrides';

function mergeTheory(base: GenreTheoryProfile, delta: GenreTheoryDelta): GenreTheoryProfile {
  return {
    ...base,
    ...delta,
    bass: { ...base.bass, ...delta.bass },
    harmony: { ...base.harmony, ...delta.harmony },
    melody: { ...base.melody, ...delta.melody },
    rhythm: { ...base.rhythm, ...delta.rhythm },
    techniques: { ...base.techniques, ...delta.techniques },
    mixFocus: { ...base.mixFocus, ...Object.fromEntries(Object.entries(delta.mixFocus ?? {}).filter((entry): entry is [string, number] => typeof entry[1] === 'number')) },
  };
}

export function styleTheoryFor(styleId: string | undefined, genreId: string): GenreTheoryProfile {
  const base = getGenreTheory(genreId);
  const delta = styleId ? STYLE_THEORY_OVERRIDES[styleId] : undefined;
  return delta ? mergeTheory(base, delta) : base;
}

export function chordsForMood(mood: ChordMood): ChordOption[] { return CHORD_PALETTE.filter(c => c.mood === mood); }
export function suggestedPaletteForGenre(genreId: string): ChordOption[] {
  const exact = CHORD_PALETTE.filter(c => c.genres.includes(genreId));
  return exact.length ? exact.slice(0, 8) : CHORD_PALETTE.slice(0, 4);
}
export function suggestedPaletteForStyle(styleId?: string, genreId?: string): ChordOption[] {
  const g = genreId ?? 'rock';
  const base = suggestedPaletteForGenre(g);
  if (!styleId) return base;
  const n = styleId.toLowerCase();
  if (/jazz|fusion|bebop|cool|hard-bop|spiritual/.test(n)) {
    return [...CHORD_PALETTE.filter(c => c.tier === 'jazz'), ...base].slice(0, 8);
  }
  return base;
}
export function chordPaletteCategoryCounts(): Record<ChordMood, number> {
  return CHORD_MOOD_ORDER_RAW.reduce((out, mood) => { out[mood] = CHORD_PALETTE.filter(c => c.mood === mood).length; return out; }, {} as Record<ChordMood, number>);
}
