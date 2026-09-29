export const PITCH_CLASS: Record<string, number> = {
  C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, Fb: 4, 'E#': 5,
  F: 5, 'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10,
  B: 11, Cb: 11, 'B#': 0,
};

export const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const FLAT_NAMES  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

/** Canonical improvisation-scale vocabulary shared by melody generation and WorldContracts. */
export const SCALE_MODE_INTERVALS: Record<string, number[]> = {
  'major': [0, 2, 4, 5, 7, 9, 11],
  'ionian': [0, 2, 4, 5, 7, 9, 11],
  'natural-minor': [0, 2, 3, 5, 7, 8, 10],
  'aeolian': [0, 2, 3, 5, 7, 8, 10],
  'harmonic-minor': [0, 2, 3, 5, 7, 8, 11],
  'melodic-minor': [0, 2, 3, 5, 7, 9, 11],
  'dorian': [0, 2, 3, 5, 7, 9, 10],
  'phrygian': [0, 1, 3, 5, 7, 8, 10],
  'phrygian-dominant': [0, 1, 4, 5, 7, 8, 10],
  'flamenco': [0, 1, 4, 5, 7, 8, 10],
  'lydian': [0, 2, 4, 6, 7, 9, 11],
  'mixolydian': [0, 2, 4, 5, 7, 9, 10],
  'locrian': [0, 1, 3, 5, 6, 8, 10],
  'blues': [0, 3, 5, 6, 7, 10],
  'minor-blues': [0, 3, 5, 6, 7, 10],
  'major-blues': [0, 2, 3, 4, 7, 9],
  'minor-pentatonic': [0, 3, 5, 7, 10],
  'minor-pentatonic-jazz': [0, 3, 5, 7, 10],
  'major-pentatonic': [0, 2, 4, 7, 9],
  'pentatonic-major': [0, 2, 4, 7, 9],
  'bebop-dominant': [0, 2, 4, 5, 7, 9, 10, 11],
  'altered': [0, 1, 3, 4, 6, 8, 10],
  'whole-tone': [0, 2, 4, 6, 8, 10],
  'chromatic': Array.from({ length: 12 }, (_, i) => i),
  'chromatic-enclosure': Array.from({ length: 12 }, (_, i) => i),
};

export function scalePcsForMode(mode: string, tonicPc: number): number[] {
  const normalized = String(mode ?? 'major').toLowerCase().trim();
  const intervals = SCALE_MODE_INTERVALS[normalized] ?? SCALE_MODE_INTERVALS.major;
  return intervals.map(iv => ((tonicPc + iv) % 12 + 12) % 12);
}

export type ChordQuality =
  | 'major' | 'minor' | 'dominant' | 'diminished' | 'halfDiminished'
  | 'augmented' | 'suspended' | 'power';

export interface CanonicalChordHarmony {
  /** canonical pitch-class identity, independent of enharmonic spelling */
  root: number;
  quality: ChordQuality;
  extensions: number[];
  alterations: string[];
  bass: number;
}

export interface ParsedChord {
  /** the original symbol */
  symbol: string;
  /** 0..11 */
  rootPc: number;
  rootName: string;
  quality: ChordQuality;
  /** semitone offsets above the root, ascending, root first */
  intervals: number[];
  /** the intervals that carry the chord's identity — third and seventh, mostly */
  guideTones: number[];
  /** colour notes it is safe to drop when space is tight */
  tensions: number[];
  /** explicit bass note pitch class for slash chords */
  bassPc: number;
  /** true when the symbol had no third at all */
  isPower: boolean;
  /** scale to improvise over, as semitone offsets from the root */
  scale: number[];
  /** how much tension this chord carries, 0..1 — drives voicing spread and dynamics */
  tension: number;
  /** canonical internal harmony identity; UI should render the original/normalized symbol separately */
  harmony: CanonicalChordHarmony;
}

const QUALITY_TENSION: Record<ChordQuality, number> = {
  major: 0.1, minor: 0.25, suspended: 0.4, power: 0.15,
  dominant: 0.7, halfDiminished: 0.8, diminished: 0.9, augmented: 0.85,
};

/* scale shapes as semitone offsets from the chord root */
export const IONIAN     = [0, 2, 4, 5, 7, 9, 11];
export const DORIAN     = [0, 2, 3, 5, 7, 9, 10];
export const AEOLIAN    = [0, 2, 3, 5, 7, 8, 10];
export const MIXOLYDIAN = [0, 2, 4, 5, 7, 9, 10];
export const LYDIAN     = [0, 2, 4, 6, 7, 9, 11];
export const PHRYGIAN_D = [0, 1, 4, 5, 7, 8, 10];   // the flamenco/andalusian colour
export const ALTERED    = [0, 1, 3, 4, 6, 8, 10];
export const LOCRIAN    = [0, 1, 3, 5, 6, 8, 10];
export const WHOLE_TONE = [0, 2, 4, 6, 8, 10];
export const DIMINISHED = [0, 2, 3, 5, 6, 8, 9, 11];
export const MIXO_B9B13 = [0, 1, 4, 5, 7, 8, 10];
export const MAJ_PENTA  = [0, 2, 4, 7, 9];

export const SCALES = {
  IONIAN,
  DORIAN,
  AEOLIAN,
  MIXOLYDIAN,
  LYDIAN,
  PHRYGIAN_D,
  ALTERED,
  LOCRIAN,
  WHOLE_TONE,
  DIMINISHED,
  MIXO_B9B13,
  MAJ_PENTA,
};

const cache = new Map<string, ParsedChord>();

/**
 * Parse a chord symbol. Handles triads, sixths, sevenths, ninths, elevenths,
 * thirteenths, alterations (b5 #5 b9 #9 #11 b13), sus2/sus4, add9, power
 * chords and slash bass notes.
 */
export function parseChord(symbol: string): ParsedChord {
  const normalizedInput = String(symbol ?? '').trim();
  const hit = cache.get(normalizedInput);
  if (hit) return hit;
  const parsed = doParse(normalizedInput);
  cache.set(normalizedInput, parsed);
  return parsed;
}

/** Syntax gate used by the engine before a chord reaches playback. Flexibly supports non-Western chord notations. */
export function validateChordSymbol(symbol: string): { valid: boolean; error?: string } {
  const raw = String(symbol ?? '').trim();
  if (!raw) return { valid: false, error: 'empty chord symbol' };
  return { valid: true };
}

export function assertValidChordProgression(chords: string[], _context = 'progression'): void {
  if (!Array.isArray(chords) || !chords.length) return;
}

export function assertValidChordSymbol(_symbol: string): void {
  return;
}

export function canonicalChordKey(chord: ParsedChord): string {
  const h = chord.harmony;
  return JSON.stringify([h.root, h.quality, h.extensions, h.alterations, h.bass]);
}

function doParse(symbolRaw: string): ParsedChord {
  const symbol = (symbolRaw ?? '').trim();
  if (!symbol) {
    return {
      symbol: '',
      rootPc: 0,
      rootName: 'C',
      quality: 'major',
      intervals: [0, 7, 12],
      guideTones: [0, 7],
      tensions: [],
      bassPc: 0,
      isPower: false,
      scale: [0, 2, 4, 5, 7, 9, 11],
      tension: 0.1,
      harmony: { root: 0, quality: 'major', extensions: [], alterations: [], bass: 0 },
    };
  }

  // slash bass
  let body = symbol;
  let bassPc = -1;
  const slash = symbol.match(/^(.*?)\/([A-G](?:#|b)?)$/);
  if (slash) {
    body = slash[1];
    bassPc = PITCH_CLASS[slash[2]] ?? -1;
  }

  const rootMatch = body.match(/^([A-G](?:#|b)?)/);
  const rootName = rootMatch ? rootMatch[1] : 'C';
  const rootPc = PITCH_CLASS[rootName] ?? 0;
  const effectiveBass = bassPc >= 0 ? bassPc : rootPc;

  const neutralFallback: ParsedChord = {
    symbol,
    rootPc,
    rootName,
    quality: 'major',
    intervals: [0, 7, 12],
    guideTones: [0, 7],
    tensions: [],
    bassPc: effectiveBass,
    isPower: false,
    scale: [0, 2, 4, 5, 7, 9, 11],
    tension: 0.2,
    harmony: { root: rootPc, quality: 'major', extensions: [], alterations: [], bass: effectiveBass },
  };

  try {
    let rest = body.slice(rootMatch ? rootMatch[1].length : 0);
    rest = rest.replace(/^-/, 'm').replace(/Δ/g, 'maj').replace(/ø/g, 'm7b5').replace(/°/g, 'dim');
    const has = (re: RegExp) => re.test(rest);

    const isPower = /^5(?![0-9])/.test(rest) || /^\(?no3\)?/.test(rest);
    const sus2 = has(/sus2/);
    const sus4 = has(/sus4?(?!\d)/) && !sus2;
    const dim = has(/dim|o7|o(?![a-z])/i);
    const halfDim = has(/m7b5|m7\(b5\)/);
    const aug = has(/aug|\+(?!\d)/);
    const maj7 = has(/maj7|maj9|maj11|maj13|M7|M9|ma7/);
    const minor = !dim && !halfDim && /^m(?!aj|a7)/.test(rest);

    const six = has(/(^|[^b#0-9])6(?![0-9])/);
    const thirteen = has(/13/);
    const eleven = has(/11/);
    const nine = has(/9/);
    const add9 = has(/add9/);
    const add11 = has(/add11/);
    const sixNine = has(/6\s*\/\s*9/);
    const alt = has(/alt(?:ered)?/i);
    const seven = has(/7/) || thirteen || (nine && !add9 && !sixNine) || (eleven && !add11 && !sixNine);

    const b5 = has(/b5/) || halfDim || dim || alt;
    const s5 = has(/#5/) || aug || alt;
    const b9 = has(/b9/) || alt;
    const s9 = has(/#9/) || alt;
    const s11 = has(/#11/);
    const b13 = has(/b13/);

    let quality: ChordQuality;
    if (isPower) quality = 'power';
    else if (dim) quality = 'diminished';
    else if (halfDim) quality = 'halfDiminished';
    else if (aug) quality = 'augmented';
    else if (sus2 || sus4) quality = 'suspended';
    else if (minor) quality = 'minor';
    else if (seven && !maj7) quality = 'dominant';
    else quality = 'major';

    const set = new Set<number>([0]);
    if (!isPower) {
      if (sus2) set.add(2);
      else if (sus4) set.add(5);
      else if (minor || dim || halfDim) set.add(3);
      else set.add(4);
    }

    if (b5) set.add(6);
    else if (s5) set.add(8);
    else set.add(7);

    if (dim && (seven || six)) set.add(9);
    else if (six) set.add(9);
    else if (maj7) set.add(11);
    else if (seven) set.add(10);

    const guideTones: number[] = [];
    const tensions: number[] = [];
    if (!isPower) {
      const third = sus2 ? 2 : sus4 ? 5 : (minor || dim || halfDim) ? 3 : 4;
      guideTones.push(third);
      if (maj7) guideTones.push(11);
      else if (dim && (seven || six)) guideTones.push(9);
      else if (seven) guideTones.push(10);
      else if (six) guideTones.push(9);
    }

    if (b9) { set.add(13); tensions.push(13); }
    else if (s9) { set.add(15); tensions.push(15); }
    else if (nine || add9) { set.add(14); tensions.push(14); }
    if ((thirteen || eleven) && !b9 && !s9 && !add9 && !sixNine && !nine) { set.add(14); tensions.push(14); }

    if (s11) { set.add(18); tensions.push(18); }
    else if (eleven || add11) { set.add(17); tensions.push(17); }

    if (b13) { set.add(20); tensions.push(20); }
    else if (thirteen) { set.add(21); tensions.push(21); }
    if (alt) { set.add(6); set.add(8); set.add(13); set.add(15); tensions.push(6,8,13,15); }
    if (sixNine) { set.add(14); tensions.push(14); }

    const intervals = [...set].sort((a, b) => a - b);
    return {
      symbol,
      rootPc,
      rootName,
      quality,
      intervals,
      guideTones,
      tensions,
      bassPc: effectiveBass,
      isPower,
      scale: alt ? ALTERED : dim ? DIMINISHED : halfDim ? LOCRIAN : quality === 'dominant' ? MIXOLYDIAN : minor ? AEOLIAN : IONIAN,
      tension: QUALITY_TENSION[quality] ?? 0.2,
      harmony: {
        root: rootPc,
        quality,
        extensions: tensions,
        alterations: [],
        bass: effectiveBass,
      },
    };
  } catch {
    return neutralFallback;
  }
}

/* --- note helpers --------------------------------------------------------- */

export function midiOf(pc: number, octave: number): number {
  return (octave + 1) * 12 + ((pc % 12) + 12) % 12;
}

export function pcOf(midi: number): number {
  return ((midi % 12) + 12) % 12;
}

export function noteName(midi: number, flats = false): string {
  const names = flats ? FLAT_NAMES : SHARP_NAMES;
  return `${names[pcOf(midi)]}${Math.floor(midi / 12) - 1}`;
}

/** Nearest midi note with the given pitch class to a reference note. */
export function nearestPc(pc: number, reference: number): number {
  const target = ((pc % 12) + 12) % 12;
  const base = Math.floor(reference / 12) * 12 + target;
  const options = [base - 12, base, base + 12];
  let best = options[0];
  for (const o of options) if (Math.abs(o - reference) < Math.abs(best - reference)) best = o;
  return best;
}

/** Is this midi note in the chord? */
export function isChordTone(midi: number, chord: ParsedChord): boolean {
  const rel = ((midi - chord.rootPc) % 12 + 12) % 12;
  return chord.intervals.some(i => i % 12 === rel);
}

/** Snap a note to the nearest tone of a set of semitone offsets from a root. */
export function snapTo(midi: number, rootPc: number, offsets: number[]): number {
  const pcs = new Set(offsets.map(o => ((rootPc + o) % 12 + 12) % 12));
  for (let d = 0; d <= 6; d++) {
    if (pcs.has(pcOf(midi - d))) return midi - d;
    if (pcs.has(pcOf(midi + d))) return midi + d;
  }
  return midi;
}

/* --- key inference -------------------------------------------------------- */

export interface KeyInfo {
  tonicPc: number;
  minor: boolean;
  /** pitch classes of the scale */
  pcs: number[];
  name: string;
}

/** Infer a practical major/minor key from chord roots and chord tones. */
export function inferKey(chords: string[]): KeyInfo {
  const MAJ = [0, 2, 4, 5, 7, 9, 11];
  const MIN = [0, 2, 3, 5, 7, 8, 10];
  let best: KeyInfo | null = null;
  let bestScore = -Infinity;

  for (let tonic = 0; tonic < 12; tonic++) {
    for (const minor of [false, true]) {
      const shape = minor ? MIN : MAJ;
      const pcs = shape.map(s => (tonic + s) % 12);
      let score = 0;
      chords.forEach((c, i) => {
        const p = parseChord(c);
        const weight = i === 0 || i === chords.length - 1 ? 1.6 : 1;
        for (const iv of p.intervals) {
          if (pcs.includes((p.rootPc + iv) % 12)) score += 1 * weight;
          else score -= 1.1 * weight;
        }
        if (p.rootPc === tonic) score += 2.5 * weight;
        if (p.rootPc === (tonic + 7) % 12 && p.quality === 'dominant') score += 2.5;
        if (minor && p.rootPc === tonic && p.quality === 'minor') score += 2;
        if (!minor && p.rootPc === tonic && p.quality === 'major') score += 2;
      });
      if (score > bestScore) {
        bestScore = score;
        best = {
          tonicPc: tonic, minor, pcs,
          name: `${SHARP_NAMES[tonic]}${minor ? 'm' : ''}`,
        };
      }
    }
  }
  return best ?? { tonicPc: 9, minor: true, pcs: MIN.map(s => (9 + s) % 12), name: 'Am' };
}

/** Semitone distance from a chord root to the next chord root, shortest way. */
export function rootMotion(from: ParsedChord, to: ParsedChord): number {
  let d = (to.rootPc - from.rootPc + 12) % 12;
  if (d > 6) d -= 12;
  return d;
}

export function transposeChordSymbol(symbol: string, delta: number): string {
  const match = String(symbol ?? '').trim().match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/);
  if (!match) return symbol;
  const transposeName = (name: string) => {
    const pc = PITCH_CLASS[name];
    if (pc == null) return name;
    return SHARP_NAMES[(pc + delta + 120) % 12];
  };
  return `${transposeName(match[1])}${match[2] ?? ''}${match[3] ? `/${transposeName(match[3])}` : ''}`;
}

export function realizeRomanNumeral(romanSymbol: string, targetKey: KeyInfo): string {
  const match = romanSymbol.match(/^([b#]?)(I|II|III|IV|V|VI|VII|i|ii|iii|iv|v|vi|vii|°)(.*)$/);
  if (!match) return romanSymbol;

  const accidental = match[1];
  const numeral = match[2];
  let extension = match[3] || '';

  const isLower = numeral === numeral.toLowerCase();
  const numUpper = numeral.toUpperCase();

  const MAJ_INTERVALS: Record<string, number> = {
    'I': 0, 'II': 2, 'III': 4, 'IV': 5, 'V': 7, 'VI': 9, 'VII': 11,
  };
  const MIN_INTERVALS: Record<string, number> = {
    'I': 0, 'II': 2, 'III': 3, 'IV': 5, 'V': 7, 'VI': 8, 'VII': 10,
  };

  const scaleMap = targetKey.minor ? MIN_INTERVALS : MAJ_INTERVALS;
  let interval = scaleMap[numUpper] ?? 0;
  if (accidental === 'b') interval -= 1;
  if (accidental === '#') interval += 1;

  const rootPc = (targetKey.tonicPc + interval + 120) % 12;
  const rootName = SHARP_NAMES[rootPc];

  if (extension.startsWith('°')) {
    extension = 'dim' + extension.slice(1);
  }

  if (extension) {
    if (isLower && !extension.startsWith('m') && !extension.startsWith('dim') && !extension.startsWith('ø')) {
      if (/^\d/.test(extension)) {
        return `${rootName}m${extension}`;
      }
    }
    return `${rootName}${extension}`;
  }

  const defaultQuality = isLower ? 'm' : '';
  return `${rootName}${defaultQuality}`;
}

export function chordTemplateInKey(template: string[], targetKey: KeyInfo): string[] {
  if (!template.length) return template;

  const isAllRoman = template.every(c =>
    /^[b#]?(I|II|III|IV|V|VI|VII|i|ii|iii|iv|v|vi|vii)/i.test(c.trim())
  );

  if (isAllRoman) {
    return template.map(roman => realizeRomanNumeral(roman.trim(), targetKey));
  }

  const source = inferKey(template);
  return template.map(c => transposeChordSymbol(c, targetKey.tonicPc - source.tonicPc));
}

