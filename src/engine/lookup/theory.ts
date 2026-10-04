export type { GenreTheoryProfile } from '../../data/musicTheory/genreTheory';
export { GENRE_THEORY } from '../../data/musicTheory/genreTheory';
export { CHORD_PALETTE, CHORD_MOODS, CHORD_MOOD_ORDER, JAZZ_CHORD_LIBRARY } from '../../data/chordPalette';
export type { ChordMood, ChordOption } from '../../data/chordPalette';
import type { GenreTheoryProfile } from '../../data/musicTheory/genreTheory';
import { GENRE_THEORY } from '../../data/musicTheory/genreTheory';
import { CHORD_PALETTE, CHORD_MOOD_ORDER_RAW } from '../../data/chordPalette';
import type { ChordMood, ChordOption } from '../../data/chordPalette';
import { GENRE_WORLDS_BY_ID } from '../../data/genres';

export function getGenreTheory(genreId: string): GenreTheoryProfile {
  const profile = GENRE_THEORY[genreId];
  if (!profile) throw new Error(`No theory profile for ${genreId}; no genre folder exports this world.`);
  return profile;
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

export function styleTheoryFor(styleId: string | undefined, genreId: string): GenreTheoryProfile {
  const base = getGenreTheory(genreId);
  const scaleFromWords = (value: string): GenreTheoryProfile['defaultScale'] => {
    const term = value.toLowerCase();
    if (/phrygian.?dominant|hijaz/.test(term)) return 'phrygian-dominant';
    if (/phrygian/.test(term)) return 'phrygian';
    if (/dorian/.test(term)) return 'dorian';
    if (/lydian/.test(term)) return 'lydian';
    if (/mixolydian/.test(term)) return 'mixolydian';
    if (/harmonic.?minor/.test(term)) return 'harmonic-minor';
    if (/melodic.?minor/.test(term)) return 'melodic-minor';
    if (/minor.?pentatonic/.test(term)) return 'minor-pentatonic';
    if (/pentatonic/.test(term)) return 'major-pentatonic';
    if (/blues/.test(term)) return 'blues';
    if (/whole.?tone/.test(term)) return 'whole-tone';
    if (/chromatic/.test(term)) return 'chromatic';
    if (/aeolian|minor/.test(term)) return 'aeolian';
    if (/locrian/.test(term)) return 'locrian';
    return 'ionian';
  };
  if (!styleId) return base;
  const out: GenreTheoryProfile = structuredClone(base);
  const world = GENRE_WORLDS_BY_ID[genreId];
  const style = world?.styleDefinitions.find(candidate => candidate.id === styleId);
  const calibration = style?.calibration;
  if (style && calibration) {
    const harmony = calibration.harmony;
    out.meter = style.preferredMeters[0] ?? out.meter;
    out.defaultScale = harmony.scales[0] ? scaleFromWords(harmony.scales[0]) : out.defaultScale;
    // A song's pitch language does not turn a major chord into a minor chord.
    // Keep third/seventh quality when deriving chord-relative notes. Modal
    // and non-functional traditions retain their authored pitch collection.
    out.chordScales = harmony.requiresChords === false || /maqam|raga|dastgah|pelog|slendro/i.test(harmony.pitchSystem)
      ? { major: out.defaultScale, minor: out.defaultScale, dominant: out.defaultScale }
      : { ...out.chordScales, major: 'ionian', minor: /harmonic.?minor/.test(out.defaultScale) ? 'harmonic-minor' : /dorian/.test(out.defaultScale) ? 'dorian' : 'aeolian', dominant: 'mixolydian' };
    if (style.bassMotion) out.bass.style = (style.bassMotion === 'root-fifth' ? 'rootFifth' : style.bassMotion) as typeof out.bass.style;
    if (harmony.progressionExamples?.length) out.progressions = harmony.progressionExamples;
    else if (style.sectionProgressions) out.progressions = Object.values(style.sectionProgressions).filter((value): value is string[] => !!value);
    if (harmony.cadences.length) out.cadences = harmony.cadences.map(cadence => [cadence]);
    out.harmonicModel = harmony.requiresChords === false ? 'modal-vamp'
      : /heterophonic|raga|maqam|dastgah/i.test(harmony.pitchSystem) ? 'modal-vamp'
        : /power.?chord|riff/i.test(harmony.chordQualities.join(' ')) ? 'power-riff' : out.harmonicModel;
    out.harmony.voicing = /tango|yumba/i.test(`${genreId} ${style.name}`) ? 'yumba'
      : /power.?chord|power.?riff/i.test(harmony.chordQualities.join(' ')) ? 'power'
        : /jazz|extended|guide.?tone/i.test(`${style.name} ${harmony.chordQualities.join(' ')}`) ? 'guide-tone' : out.harmony.voicing;
    out.harmony.preferredVoicingTones = harmony.preferredVoicingTones ?? out.harmony.preferredVoicingTones;
    out.harmony.voicingTonesByRole = harmony.voicingTonesByRole ?? out.harmony.voicingTonesByRole;
    out.harmony.pitchSystem = harmony.pitchSystem;
    out.harmony.requiresChords = harmony.requiresChords ?? true;
    out.rhythm.signature = [...calibration.patterns.families];
    out.rhythm.subdivision = /32nd|rapid.?roll|micro.?edit/i.test(calibration.patterns.families.join(' ')) ? 32
      : /12\/8|12.?beat|compound/i.test(`${out.meter} ${calibration.patterns.families.join(' ')}`) ? 12 : out.rhythm.subdivision;
    out.melody.scale = harmony.scales.length ? harmony.scales.map(scaleFromWords) : out.melody.scale;
    out.techniques = {
      bass: calibration.techniques.bass ?? [], harmony: calibration.techniques.harmony ?? [],
      melody: calibration.techniques.lead ?? calibration.techniques.voice ?? [],
      percussion: calibration.techniques.percussion ?? [], bowed: calibration.techniques.strings ?? calibration.techniques.bowed ?? [],
      winds: calibration.techniques.winds ?? [], bellows: calibration.techniques.bandoneon ?? [],
      voice: calibration.techniques.voice ?? [],
    };
    out.mixFocus = Object.fromEntries(Object.entries(calibration.mix.roles ?? {})
      .map(([role, policy]) => [role, policy?.priority ?? .5]));
    out.forbidden = [...(calibration.patterns.forbidden ?? [])];
  }
  return out;
}

export function chordsForMood(mood: ChordMood): ChordOption[] { return CHORD_PALETTE.filter(c => c.mood === mood); }
export function suggestedPaletteForGenre(genreId: string): ChordOption[] {
  const exact = CHORD_PALETTE.filter(c => c.genres.includes(genreId));
  return exact.slice(0, 8);
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
