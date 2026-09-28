import type { MusicalPattern, Measure } from '../../types';
import type { HitFunction } from '../compiler/wholeSongCompiler';
import type { InstrumentPerformanceProfile, GenrePerformanceProfile } from '../../data/performance/instrumentPerformanceProfiles';
import { parseChord } from '../theory/theory';
import { voiceProfile } from '../theory/instrumentProfile';
import { resolveStyle } from '../../data/styles/resolve';
import { getCanonicalStyle } from '../../data/styles/registry';
import { getPerformanceGrammar, resolveHybridGrammar, type PerformanceGrammar } from './performanceGrammar';

export interface PhraseState {
  previousMidi?: number;
  previousPc?: number;
  previousTime?: number;
  previousAccent?: number;
  lastStrongMidi?: number;
  lastPhraseIndex: number;
  phraseIndex: number;
  contour: number;
}

export interface PhraseContext {
  sheetWorldId: string;
  hostGenre: string;
  sourceGenre: string;
  regionStyleId?: string;
  role: string;
  profile: InstrumentPerformanceProfile;
  hostProfile: GenrePerformanceProfile;
  sourceProfile: GenrePerformanceProfile;
  hostGrammar: PerformanceGrammar;
  sourceGrammar: PerformanceGrammar;
  hybridGrammar: PerformanceGrammar;
  statePreviousMidi?: number;
  pattern: MusicalPattern;
  measureDetails?: Measure['patternDetailsByTrack'][string];
  barIndex: number;
  phraseStart: number;
  phraseEnd: number;
  phrasePosition: number;
  phraseIndex: number;
  onsetIndex: number;
  hit: HitFunction;
  gesture?: string;
  chord: string;
  nextChord?: string;
  energy: number;
  bassStyle?: string;
}

export function createPhraseState(phraseIndex = 0): PhraseState {
  return { lastPhraseIndex: -1, phraseIndex, contour: 0 };
}

function stableHash(text: string): number {
  let h = 2166136261;
  for (const c of text) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return (h >>> 0) / 4294967296;
}

function chordTonePcs(chord: string): number[] {
  const c = parseChord(chord);
  const root = c.rootPc ?? 0;
  const intervals = c.intervals?.length ? c.intervals : [0, 4, 7];
  return Array.from(new Set(intervals.map((n: number) => (root + n + 120) % 12)));
}

function nearestMidi(pc: number, target: number, low: number, high: number): number {
  let best = Math.max(low, Math.min(high, target));
  let bestDist = Infinity;
  for (let oct = -6; oct <= 6; oct++) {
    const m = pc + 12 * oct;
    if (m < low || m > high) continue;
    const d = Math.abs(m - target);
    if (d < bestDist) { best = m; bestDist = d; }
  }
  return best;
}

function rootPc(chord: string): number { return parseChord(chord).rootPc ?? 0; }
function fifthPc(chord: string): number { return (rootPc(chord) + 7) % 12; }
function thirdPc(chord: string): number { return chordTonePcs(chord)[1] ?? ((rootPc(chord) + 4) % 12); }

function bassMidi(ctx: PhraseContext, index: number, total: number): number {
  const low = ctx.profile.capabilities.lowMidi;
  const high = ctx.profile.capabilities.highMidi;
  const center = ctx.profile.capabilities.comfortableLowMidi + 5;
  const b = ctx.bassStyle ?? 'riff';
  const root = rootPc(ctx.chord);
  const nextRoot = ctx.nextChord ? rootPc(ctx.nextChord) : root;
  const r = nearestMidi(root, center, low, high);
  const f = nearestMidi(fifthPc(ctx.chord), center + 5, low, high);
  const third = nearestMidi(thirdPc(ctx.chord), center + 2, low, high);

  if (b === 'walking') {
    const tones = [r, third, f, nearestMidi((root + 10) % 12, center + 7, low, high)];
    const grid = [0, 1, 2, 1];
    const targetPc = tones[grid[index % grid.length]] % 12;
    const prior = nearestMidi(targetPc, ctx.statePreviousMidi ?? center, low, high);
    if (index === total - 1 && ctx.nextChord) {
      const approachPc = ((nextRoot + (nextRoot - root + 12) % 12 > root + 7) ? 1 : 11);
      const approach = nearestMidi((nextRoot + approachPc) % 12, prior, low, high);
      if (Math.abs(approach - prior) <= 7) return approach;
    }
    const dir = ctx.statePreviousMidi === undefined ? 0 : Math.sign(prior - ctx.statePreviousMidi);
    const stepPc = dir === 0 ? targetPc : ((ctx.statePreviousMidi + (dir * (index % 2 ? 2 : 1))) % 12 + 12) % 12;
    const step = nearestMidi(stepPc, prior, low, high);
    return Math.abs(step - (ctx.statePreviousMidi ?? prior)) <= 5 ? step : prior;
  }
  if (b === 'tumbao' || ctx.hostGenre === 'salsa' || ctx.hostGenre === 'timba') {
    const offbeat = index % 3 !== 0;
    if (offbeat) return f;
    if (ctx.phrasePosition > 0.74 && ctx.nextChord) {
      const approach = nearestMidi((nextRoot + 11) % 12, r, low, high);
      return approach;
    }
    return r;
  }
  if (b === 'rootFifth' || b === 'samba' || b === 'cumbia' || b === 'reggae') {
    return index % 2 === 0 ? r : f;
  }
  if (b === 'octave') return r + (index % 2 === 0 ? 0 : 12 <= high - r ? 12 : 0);
  if (b === 'sub') return r;
  if (b === 'dembow') return index % 2 ? f : r;
  if (b === 'riff') {
    if (ctx.phrasePosition > 0.72 && ctx.nextChord) return nearestMidi((nextRoot + 11) % 12, r, low, high);
    return [r, f, r, third][index % 4];
  }
  // A safe theory-derived fallback that still develops toward the next chord.
  if (total > 1 && index === total - 1 && ctx.nextChord) return nearestMidi((nextRoot + 11) % 12, r, low, high);
  return r;
}

function chordVoicing(ctx: PhraseContext, index: number): number[] {
  const tones = chordTonePcs(ctx.chord);
  const spread = Math.max(0, Math.min(3, tones.length));
  const rotation = (index + ctx.barIndex + ctx.phraseIndex) % Math.max(1, tones.length);
  const pcs = tones.slice(rotation).concat(tones.slice(0, rotation));
  const out: number[] = [];
  const base = Math.max(ctx.profile.capabilities.lowMidi, Math.min(ctx.profile.capabilities.highMidi, ctx.profile.capabilities.comfortableLowMidi + 7));
  for (let i = 0; i < Math.min(ctx.profile.capabilities.polyphony, Math.max(2, spread)); i++) {
    out.push(nearestMidi(pcs[i], base + i * 4, ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi));
  }
  // Keep voicings clustered but voice-led toward the next chord by moving the
  // highest tone toward the next root when a phrase/cadence is approaching.
  if (ctx.nextChord && ctx.phrasePosition > 0.7 && out.length) {
    const target = nearestMidi(rootPc(ctx.nextChord), out[out.length - 1], ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi);
    if (Math.abs(target - out[out.length - 1]) <= 7) out[out.length - 1] = target;
  }
  return Array.from(new Set(out));
}

export function realizeMidi(ctx: PhraseContext, index: number, total: number, state: PhraseState): number[] {
  const d = ctx.profile.instrumentId.toLowerCase();
  if (ctx.profile.family === 'membrane' || ctx.profile.family === 'kit' || ctx.profile.family === 'metal-wood-percussion' || ctx.profile.family === 'body-percussion' || voiceProfile(ctx.profile.instrumentId).role === 'perc') {
    return [60];
  }
  if (voiceProfile(ctx.profile.instrumentId).role === 'bass' || d.includes('bass') || d === 'upright-bass' || d.includes('tuba')) {
    return [bassMidi(ctx, index, total)];
  }
  if (ctx.profile.family === 'keyboard' || ctx.profile.family === 'plucked-string' && ctx.profile.capabilities.polyphony > 1 || ctx.pattern.roles.includes('harmony') || /piano|organ|rhodes|guitar|bandoneon|accordion/.test(d)) {
    return chordVoicing(ctx, index);
  }
  const tones = chordTonePcs(ctx.chord);
  const scale = Array.from(new Set([...tones, (rootPc(ctx.chord)+2)%12, (rootPc(ctx.chord)+5)%12, (rootPc(ctx.chord)+9)%12]));
  const target = state.previousMidi ?? (ctx.profile.capabilities.comfortableLowMidi + ctx.hostProfile.register.highBias * 18);
  const pc = scale[(index + ctx.phraseIndex + Math.round(ctx.phrasePosition * 3)) % scale.length];
  const midi = nearestMidi(pc, target + (ctx.phrasePosition > 0.72 ? 5 : 0), ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi);
  return [midi];
}

export function shouldDevelopPhrase(ctx: PhraseContext): 'repeat' | 'variation' | 'answer' | 'fill' | 'rest' | 'cadence' {
  const p = ctx.hybridGrammar.phraseDevelopment;
  const x = stableHash(`${ctx.sheetWorldId}:${ctx.profile.instrumentId}:${ctx.barIndex}:${ctx.onsetIndex}:${ctx.phraseIndex}`);
  if (ctx.phrasePosition > 0.86 && x < (p?.cadenceProbability ?? 0.1)) return 'cadence';
  if (x < (p?.restProbability ?? 0.03)) return 'rest';
  if (x < (p?.restProbability ?? 0.03) + (p?.fillProbability ?? 0.08)) return 'fill';
  if (x < (p?.restProbability ?? 0.03) + (p?.fillProbability ?? 0.08) + (p?.answerProbability ?? 0.12)) return 'answer';
  if (x < 0.7) return 'variation';
  return 'repeat';
}

export function preferredGesture(ctx: PhraseContext, hit: HitFunction, authored?: string): string {
  const desired = authored?.trim();
  const allowed = (g: string) => Boolean(g && ctx.profile.gestures[g]);
  const hostPreferred = new Set(ctx.hostProfile.preferredGestures);
  const sourcePreferred = new Set(ctx.sourceProfile.preferredGestures);
  const text = `${ctx.pattern?.id ?? ''} ${ctx.pattern?.name ?? ''} ${ctx.regionStyleId ?? ''}`.toLowerCase();
  const sourceHit = String((ctx.measureDetails as any)?.hitTypes?.[ctx.onsetIndex] ?? '').toLowerCase();

  // Instrument-specific gesture candidates are derived only from the authored
  // gesture vocabulary already present in the instrument definition. Rhythm
  // transfers the timing/weight; it never transfers another instrument's name.
  const contextual: string[] = [];
  const add = (...xs: string[]) => contextual.push(...xs.filter(allowed));
  if (/heel/.test(String(desired ?? ''))) add('heel','toe','ghost');
  if (/slap|quinto/.test(String(desired ?? ''))) add('slap','quinto-slap','accent','slap-tapao');
  if (/tapao|mute|closed/.test(String(desired ?? ''))) add('slap-tapao','ghost','muffled');
  if (/open|abierto|tone|tumba/.test(String(desired ?? ''))) add('tumba-open','conga-open','open','tone');
  const family = ctx.profile.family;
  if (family === 'membrane' && /heel/.test(sourceHit)) add('heel','toe','ghost');
  if (family === 'membrane' && /toe|tip/.test(sourceHit)) add('toe','heel','ghost');
  if (family === 'membrane' && /slap|quinto/.test(sourceHit)) add('slap','quinto-slap','accent');
  if (family === 'membrane' && /tapao|mute|closed/.test(sourceHit)) add('slap-tapao','ghost','muffled');
  if (family === 'membrane' && /open|tone|tumba/.test(sourceHit)) add('tumba-open','conga-open','open','tone');

  if (ctx.profile.instrumentId === 'bandoneon' && /marcato|yumba/.test(text)) add('marcato','staccato','accent','bellows-slap');
  if (ctx.profile.instrumentId === 'bandoneon' && /sincopa|syncop|anticip/.test(text)) add('staccato','accent','portato','arrastre');
  if (ctx.profile.instrumentId === 'bandoneon' && /bordoneo/.test(text)) add('staccato','accent','tenuto','chapa');
  if (ctx.profile.instrumentId === 'bandoneon' && /milonga/.test(text)) add('staccato','accent','marcato');

  if (ctx.profile.instrumentId === 'upright-bass' && /tango/.test(text)) {
    if (/marcato/.test(text)) add('arrastre','strappata','pizzicato','staccato','accent');
    else if (/sincopa|syncop/.test(text)) add('arrastre','pizzicato','staccato','accent');
    else if (/bordoneo/.test(text)) add('pizzicato','staccato','accent','chicharra');
    else if (/milonga/.test(text)) add('pizzicato','staccato','accent');
  }

  if (ctx.profile.instrumentId === 'violin' && /tango|milonga/.test(text)) {
    if (/marcato/.test(text)) add('staccato','accent','detache','pizzicato');
    else if (/sincopa|syncop/.test(text)) add('staccato','pizzicato','chicharra','accent');
    else if (/bordoneo/.test(text)) add('pizzicato','staccato','accent');
    else if (/milonga/.test(text)) add('staccato','pizzicato','accent');
  }

  if (ctx.profile.instrumentId === 'piano' && /tango|milonga/.test(text)) {
    if (/marcato/.test(text)) add('marcato','yumba','chapa','accent');
    else if (/sincopa|syncop/.test(text)) add('staccato','arrastre','accent');
    else if (/bordoneo/.test(text)) add('staccato','pesada','accent','arrastre');
    else if (/milonga/.test(text)) add('staccato','campana','accent');
  }

  const candidates = Array.from(new Set([
    desired ?? '',
    ...contextual,
    ...ctx.hostProfile.preferredGestures,
    ...ctx.sourceProfile.preferredGestures,
    ...ctx.hostProfile.gestureIds,
    ...ctx.sourceProfile.gestureIds,
    ...ctx.profile.adaptationOrder.flatMap(g => ctx.profile.genreProfiles[g]?.preferredGestures ?? []),
  ].filter((g): g is string => Boolean(g) && allowed(g))));
  const hitWord = hit.toLowerCase();
  const contextualSet = new Set(contextual);
  const scored = candidates.map(g => {
    const gl = g.toLowerCase();
    let score = 0;
    if (desired && gl === desired.toLowerCase()) score += 20;
    if (contextualSet.has(g)) score += 7;
    if (hostPreferred.has(g)) score += 5;
    if (sourcePreferred.has(g)) score += 4;
    if (hitWord === 'ghost' && /ghost|heel|toe|tap|mute|dead/.test(gl)) score += 6;
    if (hitWord === 'slap' && /slap|strappata|golpe|marcato|accent/.test(gl)) score += 6;
    if (hitWord === 'open' && /open|ring|legato|tone|tumba/.test(gl)) score += 5;
    if (hitWord === 'muffled' && /mute|chapa|tapao|stacc|palm/.test(gl)) score += 6;
    if (hitWord === 'fill' && /roll|fill|tremolo|ornament|shake|triplet/.test(gl)) score += 5;
    if (ctx.phrasePosition > 0.75 && /arrastre|fall|doit|turn|cadence|accent|marcato|staccato/.test(gl)) score += 2;
    if (ctx.phrasePosition < 0.2 && /accent|marcato|staccato/.test(gl)) score += 1;
    // Keep the vocabulary varied inside a phrase, but deterministically.
    const selector = Array.from(g).reduce((h,c)=>Math.imul(h ^ c.charCodeAt(0),16777619)>>>0,2166136261);
    score += ((selector + ctx.onsetIndex * 13 + ctx.barIndex * 7) % 11) / 100;
    return { g, score };
  }).sort((a,b)=>b.score-a.score || a.g.localeCompare(b.g));
  const fallback = Object.keys(ctx.profile.gestures)[0] ?? 'accent';
  return scored[0]?.g ?? fallback;
}

export function buildHybridGrammar(_hostStyleId: string | undefined, sourceGenre: string, hostStyle: any, lensWeight = 0.5): { host: PerformanceGrammar; source: PerformanceGrammar; hybrid: PerformanceGrammar } {
  const host = getPerformanceGrammar(hostStyle ?? {});
  let source = host;
  try {
    const resolvedSource = resolveStyle({ genreId: sourceGenre, styleId: getCanonicalStyle(sourceGenre).id });
    source = getPerformanceGrammar(resolvedSource);
  } catch {
    source = host;
  }
  const weight = sourceGenre === hostStyle?.primaryGenre ? 0 : Math.max(0, Math.min(1, lensWeight));
  const hybrid = resolveHybridGrammar(host, source, { sourceStyleId: source.styleId ?? sourceGenre, weight }, hostStyle?.contract?.forbidden ?? []);
  return { host, source, hybrid };
}
