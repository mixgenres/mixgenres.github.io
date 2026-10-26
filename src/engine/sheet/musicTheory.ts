import { PITCH_CLASS, SHARP_NAMES, FLAT_NAMES } from '../../data/musicTheory/pitchClasses';

/** Canonical improvisation-scale vocabulary shared by melody generation and WorldContracts. */
import { SCALE_MODE_INTERVALS, IONIAN, AEOLIAN, MIXOLYDIAN, ALTERED, LOCRIAN, DIMINISHED, MAJOR_KEY_INTERVALS, MINOR_KEY_INTERVALS } from '../../data/musicTheory/scales';
import { MAJ_INTERVALS, MIN_INTERVALS } from '../../data/musicTheory/chordIntervals';
import { QUALITY_TENSION } from '../../data/musicTheory/chordQualityTension';
import type { ChordQuality } from '../../data/musicTheory/schema/chord-quality';

export function scalePcsForMode(mode: string, tonicPc: number): number[] {
  const normalized = String(mode ?? 'major').toLowerCase().trim();
  const intervals = SCALE_MODE_INTERVALS[normalized];
  if (!intervals) throw new Error(`Unsupported scale mode "${mode}"`);
  return intervals.map(iv => ((tonicPc + iv) % 12 + 12) % 12);
}

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
  try {
    doParse(raw);
    return { valid: true };
  } catch (error) {
    return { valid: false, error: error instanceof Error ? error.message : String(error) };
  }
}

export function assertValidChordProgression(chords: string[], context = 'progression'): void {
  if (!Array.isArray(chords) || !chords.length) throw new Error(`${context} must contain at least one authored chord`);
  chords.forEach((chord, index) => assertValidChordSymbol(chord, `${context} chord ${index + 1}`));
}

export function assertValidChordSymbol(symbol: string, context = 'chord'): void {
  const result = validateChordSymbol(symbol);
  if (!result.valid) throw new Error(`Invalid ${context} "${symbol}": ${result.error}`);
}

export function canonicalChordKey(chord: ParsedChord): string {
  const h = chord.harmony;
  return JSON.stringify([h.root, h.quality, h.extensions, h.alterations, h.bass]);
}

function doParse(symbolRaw: string): ParsedChord {
  const symbol = (symbolRaw ?? '').trim();
  if (!symbol) throw new Error('Chord symbol is empty');

  // slash bass
  let body = symbol;
  let bassPc = -1;
  const slash = symbol.match(/^(.*?)\/([A-G](?:#|b)?)$/);
  if (slash) {
    body = slash[1];
    bassPc = PITCH_CLASS[slash[2]] ?? -1;
    if (bassPc < 0) throw new Error(`Unsupported slash-bass note in "${symbol}"`);
  }

  const rootMatch = body.match(/^([A-G](?:#|b)?)/);
  if (!rootMatch) throw new Error(`Chord "${symbol}" must start with a note name A–G`);
  const rootName = rootMatch[1];
  const rootPc = PITCH_CLASS[rootName];
  if (rootPc === undefined) throw new Error(`Unsupported root note "${rootName}" in "${symbol}"`);
  const effectiveBass = bassPc >= 0 ? bassPc : rootPc;
  let rest = body.slice(rootMatch[1].length);
  rest = rest.replace(/^-/, 'm').replace(/Δ/g, 'maj').replace(/ø/g, 'm7b5').replace(/°/g, 'dim');
  rest = rest.replace(/M(?=\d)/g, 'maj');
  rest = rest.replace(/^major/i, 'maj').replace(/^(?:minor|min)(?![a-z])/i, 'm')
    .replace(/maj/gi, 'maj').replace(/\s+/g, '').toLowerCase();
  validateChordSuffix(rest, symbol);
    // Added tones and alterations do not imply a complete tertian extension:
    // add13 has no seventh, and 7#11 does not request a natural ninth/eleventh.
    const additions = [...rest.matchAll(/add([b#]?)(2|4|9|11|13)/g)];
    const modifiers = rest.replace(/add[b#]?(?:2|4|9|11|13)/g, '');
    const core = modifiers.replace(/[b#](?:5|9|11|13)/g, '').replace(/[()]/g, '');
    const sixNine = /6\/9/.test(core);
    const base = core.replace(/6\/9/g, '6');
    const has = (re: RegExp) => re.test(base);

    const powerChord = /^5(?![0-9])/.test(base);
    const omitThird = /no3/.test(base);
    const isPower = powerChord || omitThird;
    const sus2 = has(/sus2/);
    const sus4 = has(/sus4?(?!\d)/) && !sus2;
    const dim = has(/^(?:dim|o)(?![a-z])/i);
    const halfDim = /^m7(?:\(?b5\)?)/.test(modifiers);
    const aug = has(/aug|\+/);
    const maj7 = has(/maj7|maj9|maj11|maj13|ma7/);
    const minor = !dim && !halfDim && /^m(?!aj|a7)/.test(rest);

    const six = has(/(^|[^b#0-9])6(?![0-9])/);
    const thirteen = has(/13/);
    const eleven = has(/11/);
    const nine = has(/9/);
    const alt = has(/alt(?:ered)?/i);
    const seven = has(/7/) || thirteen || nine || eleven;

    const b5 = /b5/.test(modifiers) || halfDim || dim || alt;
    const s5 = /#5/.test(modifiers) || aug || alt;
    const b9 = /b9/.test(modifiers) || alt;
    const s9 = /#9/.test(modifiers) || alt;
    const s11 = /#11/.test(modifiers);
    const b13 = /b13/.test(modifiers);

    let quality: ChordQuality;
    if (powerChord || omitThird && !seven && !six) quality = 'power';
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
    if (s5) set.add(8);
    if (!b5 && !s5) set.add(7);

    if (dim && (seven || six)) set.add(9);
    else if (six) set.add(9);
    else if (maj7) set.add(11);
    else if (seven) set.add(10);

    const guideTones: number[] = [];
    const tensions: number[] = [];
    if (!isPower) {
      const third = sus2 ? 2 : sus4 ? 5 : (minor || dim || halfDim) ? 3 : 4;
      guideTones.push(third);
    }
    if (maj7) guideTones.push(11);
    else if (dim && (seven || six)) guideTones.push(9);
    else if (seven) guideTones.push(10);
    else if (six) guideTones.push(9);

    if (b9) { set.add(13); tensions.push(13); }
    else if (s9) { set.add(15); tensions.push(15); }
    else if (nine || thirteen || eleven) { set.add(14); tensions.push(14); }

    if (s11) { set.add(18); tensions.push(18); }
    else if (eleven) { set.add(17); tensions.push(17); }

    if (b13) { set.add(20); tensions.push(20); }
    else if (thirteen) { set.add(21); tensions.push(21); }
    if (alt) { set.add(6); set.add(8); set.add(13); set.add(15); tensions.push(6,8,13,15); }
    if (sixNine) { set.add(14); tensions.push(14); }
    const addedIntervals: Record<string, number> = { '2': 2, '4': 5, '9': 14, '11': 17, '13': 21 };
    for (const [, accidental, degree] of additions) {
      const interval = addedIntervals[degree] + (accidental === 'b' ? -1 : accidental === '#' ? 1 : 0);
      set.add(interval); tensions.push(interval);
    }

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
}

/** Reject unrecognized quality text instead of quietly voicing it as major. */
function validateChordSuffix(suffix: string, symbol: string): void {
  let remaining = suffix;
  const token = /^(?:\s+|minor|major|min|maj|ma(?=7)|m|dim|o|aug|\+|sus2|sus4|sus|no3|alt(?:ered)?|add(?:b|#)?(?:2|4|9|11|13)|6\/9|[b#](?:5|9|11|13)|(?:5|6|7|9|11|13)|[()])/i;
  while (remaining.length) {
    const match = remaining.match(token);
    if (!match) throw new Error(`Unsupported chord quality "${suffix}" in "${symbol}"`);
    remaining = remaining.slice(match[0].length);
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
  if (!Array.isArray(chords) || chords.length === 0) {
    throw new Error('Cannot infer a key without an authored chord progression');
  }
  let best: KeyInfo | null = null;
  let bestScore = -Infinity;

  for (let tonic = 0; tonic < 12; tonic++) {
    for (const minor of [false, true]) {
      const shape = minor ? MINOR_KEY_INTERVALS : MAJOR_KEY_INTERVALS;
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
  if (!best) throw new Error('Key inference produced no candidate for the authored progression');
  return best;
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
