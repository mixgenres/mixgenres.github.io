import { ANTICIPATED_BASS_GENRES, IDIOMATIC_DEGREE_RULES } from '../../data/performance/genreInstrumentBehaviors';
import { GENRE_GESTURE_HINT_RULES } from '../../data/performance/genreGestureRules';
import { GESTURE_HINT_ALIASES } from '../../data/performance/gestureHintAliases';
import { matchesGestureConcept } from '../../data/performance/gestureLexicon';
import type { MusicalPattern, Measure } from '../../types';
import type { HitFunction } from '../../data/performance/hitFunctions';
import type { InstrumentPerformanceProfile, GenrePerformanceProfile } from '../../engine/lookup/performance';
import { parseChord, scalePcsForMode } from '../sheet/musicTheory.ts';
import type { ChordQuality } from '../../data/musicTheory/schema/chord-quality';
import { type GenreTheoryProfile } from '../../engine/lookup/theory';
import { voiceProfile } from '../sheet/instrumentRoles.ts';
import { resolveStyle } from '../../engine/style/resolve';
import { getCanonicalStyle } from '../../engine/style/registry';
import { constrainToFretboard } from './fretboard';
import { getPerformanceGrammar, resolveHybridGrammar } from './performanceGrammar.ts';
import type { PerformanceGrammar } from '../../data/performance/schema/performance-grammar';
import type { ImprovisationGrammar } from '../../data/styles/schema';

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
  measureDetails?: NonNullable<Measure['patternDetailsByTrack']>[string];
  barIndex: number;
  phraseStart: number;
  phraseEnd: number;
  phrasePosition: number;
  phraseIndex: number;
  onsetIndex: number;
  onsetPosition: number;
  hit: HitFunction;
  gesture?: string;
  chord: string;
  nextChord?: string;
  energy: number;
  bassStyle?: string;
  hostTheory: GenreTheoryProfile;
  sourceTheory: GenreTheoryProfile;
  hybridTheory: GenreTheoryProfile;
  soloGrammar?: ImprovisationGrammar;
  soloist?: boolean;
}

export function createPhraseState(phraseIndex = 0): PhraseState {
  return { lastPhraseIndex: -1, phraseIndex, contour: 0 };
}

function stableHash(text: string): number {
  let h = 2166136261;
  for (const c of text) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return (h >>> 0) / 4294967296;
}

function rootPc(chord: string): number { return parseChord(chord).rootPc ?? 0; }

function chordScaleKey(quality: ChordQuality): keyof GenreTheoryProfile['chordScales'] | undefined {
  if (quality === 'halfDiminished') return 'half-diminished';
  if (quality === 'suspended') return 'sus';
  if (quality === 'major' || quality === 'minor' || quality === 'dominant') return quality;
  return undefined;
}

function degreePc(chord: string, degree: number, theory: GenreTheoryProfile): number {
  const parsed = parseChord(chord);
  const key = chordScaleKey(parsed.quality as ChordQuality);
  const mode = (key ? theory.chordScales[key] : undefined) ?? theory.defaultScale;
  const pcs = scalePcsForMode(mode, parsed.rootPc);
  const idx = Math.max(0, Math.min(6, Math.round(degree) - 1));
  return pcs[idx] ?? parsed.rootPc;
}

function chordScalePcs(chord: string, theory: GenreTheoryProfile): number[] {
  const parsed = parseChord(chord);
  const quality = parsed.quality as ChordQuality;
  const key = chordScaleKey(quality);
  const mode = (key ? theory.chordScales[key] : undefined) ?? theory.defaultScale;
  return scalePcsForMode(mode, parsed.rootPc);
}

function chordTonePcsWithQuality(chord: string): number[] {
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

function approachPc(targetPc: number, currentPc: number, chromatic: boolean): number {
  if (chromatic) {
    const up = (targetPc + 11) % 12;
    const down = (targetPc + 1) % 12;
    const du = Math.min((currentPc - up + 12) % 12, (up - currentPc + 12) % 12);
    const dd = Math.min((currentPc - down + 12) % 12, (down - currentPc + 12) % 12);
    return du <= dd ? up : down;
  }
  return (targetPc + 11) % 12;
}

function bassMidi(ctx: PhraseContext, index: number, total: number): number {
  const low = ctx.profile.capabilities.lowMidi;
  const high = ctx.profile.capabilities.highMidi;
  const center = ctx.profile.capabilities.comfortableLowMidi + 5;
  const b = ctx.bassStyle ?? ctx.hybridTheory.bass.style ?? 'riff';
  const root = rootPc(ctx.chord);
  const nextRoot = ctx.nextChord ? rootPc(ctx.nextChord) : root;
  const nextTarget = ctx.nextChord ? degreePc(ctx.nextChord, index % 2 === 0 ? 3 : 1, ctx.hybridTheory) : nextRoot;
  const r = nearestMidi(root, center, low, high);
  const f = nearestMidi(degreePc(ctx.chord, 5, ctx.hybridTheory), center + 5, low, high);
  const third = nearestMidi(degreePc(ctx.chord, 3, ctx.hybridTheory), center + 2, low, high);
  const seventh = nearestMidi(degreePc(ctx.chord, 7, ctx.hybridTheory), center + 6, low, high);

  if (b === 'walking') {
    const targets = [r, third, f, seventh];
    const target = targets[index % targets.length];
    const prior = stateTarget(ctx, target, center, low, high);
    if (index === total - 1 && ctx.nextChord) {
      const approach = nearestMidi(approachPc(nextTarget, prior % 12, ctx.hybridTheory.bass.chromaticApproach), prior, low, high);
      if (Math.abs(approach - prior) <= 7) return approach;
    }
    const scale = chordScalePcs(ctx.chord, ctx.hybridTheory);
    const direction = ctx.statePreviousMidi === undefined ? Math.sign(target - prior) || 1 : Math.sign(target - ctx.statePreviousMidi) || 1;
    const priorPc = prior % 12;
    const exactIndex = scale.findIndex(pc => pc === priorPc);
    const fallbackIndex = scale.reduce((best, pc, i) => {
      const bestDist = Math.min((scale[best] - priorPc + 12) % 12, (priorPc - scale[best] + 12) % 12);
      const dist = Math.min((pc - priorPc + 12) % 12, (priorPc - pc + 12) % 12);
      return dist < bestDist ? i : best;
    }, 0);
    const baseIndex = exactIndex >= 0 ? exactIndex : fallbackIndex;
    const candidatePc = scale[(baseIndex + direction + scale.length) % scale.length] ?? scale[0];
    const step = nearestMidi(candidatePc, prior + direction * 2, low, high);
    if (ctx.statePreviousMidi !== undefined && Math.abs(step - ctx.statePreviousMidi) <= 5) return step;
    return prior;
  }
  if (b === 'tumbao' || ANTICIPATED_BASS_GENRES.includes(ctx.hostGenre)) {
    const anti = ctx.hybridTheory.bass.anticipationBeats;
    const isAnticipation = anti.some(v => Math.abs(v - ctx.onsetPosition) < 0.35);
    if (isAnticipation && ctx.nextChord) return nearestMidi(nextTarget, f, low, high);
    return index % 3 === 1 ? f : r;
  }
  if (b === 'rootFifth' || b === 'samba' || b === 'cumbia' || b === 'reggae') return index % 2 === 0 ? r : f;
  if (b === 'octave') return r + (index % 2 === 0 ? 0 : (12 <= high - r ? 12 : 0));
  if (b === 'sub') return r;
  if (b === 'dembow') return index % 2 ? f : r;
  if (b === 'house') {
    const target = index % 4 === 3 && ctx.nextChord ? nextTarget : root;
    return nearestMidi(target, center, low, high);
  }
  if (b === 'riff') {
    const scale = chordScalePcs(ctx.chord, ctx.hybridTheory);
    const degree = ctx.hybridTheory.bass.targetDegrees[index % ctx.hybridTheory.bass.targetDegrees.length] ?? 1;
    const pc = scale[Math.max(0, Math.min(scale.length - 1, degree - 1))] ?? root;
    if (ctx.phrasePosition > 0.72 && ctx.nextChord) {
      return nearestMidi(approachPc(nextTarget, r % 12, ctx.hybridTheory.bass.chromaticApproach), r, low, high);
    }
    return nearestMidi(pc, center + (index % 2 ? 4 : 0), low, high);
  }
  return ctx.nextChord && index === total - 1
    ? nearestMidi(approachPc(nextTarget, r % 12, ctx.hybridTheory.bass.chromaticApproach), r, low, high)
    : r;
}

function stateTarget(ctx: PhraseContext, target: number, center: number, low: number, high: number): number {
  return nearestMidi(target % 12, ctx.statePreviousMidi ?? center, low, high);
}

function chordVoicing(ctx: PhraseContext, _index: number): number[] {
  const parsed = parseChord(ctx.chord);
  const tones = chordTonePcsWithQuality(ctx.chord);
  const guide = parsed.guideTones?.map(x => (parsed.rootPc + x) % 12) ?? [];
  const tension = parsed.tensions?.map(x => (parsed.rootPc + x) % 12) ?? [];
  const voicing = ctx.hybridTheory.harmony.voicing;
  const poly = Math.max(1, Math.min(ctx.profile.capabilities.maxSimultaneousPitches, 4));
  const base = Math.max(ctx.profile.capabilities.lowMidi, Math.min(ctx.profile.capabilities.highMidi, ctx.profile.capabilities.comfortableLowMidi + (voicing === 'power' ? 4 : 10)));
  let pcs: number[];
  if (voicing === 'power') pcs = [parsed.rootPc, (parsed.rootPc + 7) % 12, parsed.rootPc];
  else if (voicing === 'guide-tone' || voicing === 'shell') pcs = [...guide, ...tension, ...tones];
  else if (voicing === 'montuno' || voicing === 'yumba') pcs = [...tones.filter(pc => pc !== parsed.rootPc), ...guide, ...tension];
  else if (voicing === 'drop-two') pcs = [...tones, ...guide];
  else pcs = [...tones, ...tension, ...guide];
  pcs = Array.from(new Set(pcs));
  // inversion on every attack, creating rapid register churn and excessive
  // low-note collisions. Voice leading is handled by nearestMidi/nextChord.
  pcs = pcs.slice();
  const out: number[] = [];
  const spacing = voicing === 'open' || voicing === 'drop-two' ? 7 : 4;
  for (let i = 0; i < Math.min(poly, pcs.length); i++) {
    const target = base + i * spacing + (voicing === 'montuno' || voicing === 'yumba' ? 7 : 0);
    out.push(nearestMidi(pcs[i], target, ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi));
  }
  if (ctx.nextChord && ctx.phrasePosition > 0.72 && out.length) {
    const nextParsed = parseChord(ctx.nextChord);
    const targetPc = nextParsed.guideTones?.length ? (nextParsed.rootPc + nextParsed.guideTones[0]) % 12 : nextParsed.rootPc;
    const top = out[out.length - 1];
    const target = nearestMidi(targetPc, top, ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi);
    if (Math.abs(target - top) <= 7) out[out.length - 1] = target;
  }
  const unique = Array.from(new Set(out));
  return constrainToFretboard(unique, ctx.profile.instrumentId, ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi);
}

export function realizeMidi(ctx: PhraseContext, index: number, total: number, state: PhraseState): number[] {
  const d = ctx.profile.instrumentId.toLowerCase();
  if (ctx.profile.family === 'membrane' || ctx.profile.family === 'kit' || ctx.profile.family === 'metal-wood-percussion' || ctx.profile.family === 'body-percussion' || voiceProfile(ctx.profile.instrumentId).role === 'perc') return [60];
  if (voiceProfile(ctx.profile.instrumentId).role === 'bass' || d.includes('bass') || d === 'upright-bass' || d.includes('tuba')) return [bassMidi(ctx, index, total)];
  if (ctx.profile.family === 'keyboard' || ctx.profile.family === 'plucked-string' && ctx.profile.capabilities.maxSimultaneousPitches > 1 || ctx.pattern.roles.includes('harmony') || /piano|organ|rhodes|guitar|bandoneon|accordion/.test(d)) return chordVoicing(ctx, index);

  const scale = ctx.soloist && ctx.soloGrammar?.scaleMode
    ? scalePcsForMode(ctx.soloGrammar.scaleMode, rootPc(ctx.chord))
    : chordScalePcs(ctx.chord, ctx.hybridTheory);
  const chordTones = chordTonePcsWithQuality(ctx.chord);
  const idiomaticDegrees = IDIOMATIC_DEGREE_RULES.find(rule => rule.genrePattern.test(ctx.hostGenre) && rule.instrumentPattern.test(d))?.degrees;
  const stage = ctx.soloist && ctx.soloGrammar?.phraseStages?.length
    ? ctx.soloGrammar.phraseStages[ctx.phraseIndex % ctx.soloGrammar.phraseStages.length]
    : undefined;
  const targetStrategy = ctx.soloGrammar?.targetToneStrategy?.toLowerCase() ?? '';
  const grammarDegree = targetStrategy.includes('root-or-fifth')
    ? ((ctx.barIndex + index) % 2 ? 5 : 1)
    : targetStrategy.includes('root') ? 1 : undefined;
  const targetDegree = grammarDegree ?? (idiomaticDegrees
    ? idiomaticDegrees[(ctx.barIndex * 2 + index) % idiomaticDegrees.length]
    : (ctx.hybridTheory.melody.targetDegrees[index % ctx.hybridTheory.melody.targetDegrees.length] ?? 1));
  const targetPc = ctx.soloist && scale.length
    ? scale[(targetDegree - 1 + scale.length * 2) % scale.length]
    : degreePc(ctx.chord, targetDegree, ctx.hybridTheory);
  const strong = ctx.onsetIndex === 0 || ctx.onsetIndex === total - 1 || ctx.hit === 'downbeat' || ctx.hit === 'punctuation' || ctx.phrasePosition > 0.82;
  let pc = targetPc;
  if (ctx.soloist && stage === 'repeat-transpose' && state.previousMidi !== undefined) {
    const previousPc = state.previousMidi % 12;
    const at = scale.indexOf(previousPc);
    const degreeStep = (ctx.soloGrammar?.transposeDegrees ?? 2) * (ctx.phraseIndex % 2 ? -1 : 1);
    pc = at >= 0 ? scale[(at + degreeStep + scale.length * 2) % scale.length] : targetPc;
  } else if (ctx.soloist && stage === 'rapid-run' && scale.length) {
    const prevPc = state.previousMidi !== undefined ? state.previousMidi % 12 : targetPc;
    const at = Math.max(0, scale.indexOf(prevPc));
    pc = scale[(at + (index % 5 < 3 ? 1 : -1) + scale.length) % scale.length] ?? targetPc;
  } else if (!strong) {
    const prevPc = state.previousMidi !== undefined ? state.previousMidi % 12 : targetPc;
    const idx = scale.indexOf(prevPc);
    const contour = ctx.hybridTheory.melody.contour[(ctx.phraseIndex + ctx.barIndex + index) % Math.max(1, ctx.hybridTheory.melody.contour.length)] ?? 'motif';
    const step = contour.includes('descending') || contour.includes('space') ? -1 : 1;
    pc = scale[(idx >= 0 ? idx + step : index + step + scale.length) % scale.length] ?? scale[index % scale.length];
    if (chordTones.includes(pc) === false && ctx.hybridTheory.melody.approachDegrees.length) {
      const approachDegree = ctx.hybridTheory.melody.approachDegrees[index % ctx.hybridTheory.melody.approachDegrees.length];
      pc = degreePc(ctx.chord, approachDegree, ctx.hybridTheory);
    }
  }
  if (ctx.nextChord && ctx.phrasePosition > 0.8 && ctx.hybridTheory.bass.chromaticApproach) {
    const nextParsed = parseChord(ctx.nextChord);
    pc = nextParsed.rootPc;
  }
  const target = state.previousMidi ?? (ctx.profile.capabilities.comfortableLowMidi + ctx.hostProfile.register.highBias * 18);
  return [nearestMidi(pc, target + (ctx.phrasePosition > 0.72 ? 4 : 0), ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi)];
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
  const sourceHit = String(ctx.measureDetails?.hitTypes?.[ctx.onsetIndex] ?? '').toLowerCase();

  // Instrument-specific gesture candidates are derived only from the authored
  // gesture vocabulary already present in the instrument definition. Rhythm
  // transfers the timing/weight; it never transfers another instrument's name.
  const contextual: string[] = [];
  const add = (...xs: string[]) => contextual.push(...xs.filter(allowed));
  if (matchesGestureConcept(String(desired ?? ''), 'heel')) add('heel','toe','ghost');
  if (matchesGestureConcept(String(desired ?? ''), 'slap')) add('slap','quinto-slap','accent','slap-tapao');
  if (matchesGestureConcept(String(desired ?? ''), 'muffled')) add('slap-tapao','ghost','muffled');
  if (matchesGestureConcept(String(desired ?? ''), 'open')) add('tumba-open','conga-open','open','tone');
  const family = ctx.profile.family;
  if (family === 'membrane' && matchesGestureConcept(sourceHit, 'heel')) add('heel','toe','ghost');
  if (family === 'membrane' && matchesGestureConcept(sourceHit, 'toe')) add('toe','heel','ghost');
  if (family === 'membrane' && matchesGestureConcept(sourceHit, 'slap')) add('slap','quinto-slap','accent');
  if (family === 'membrane' && matchesGestureConcept(sourceHit, 'muffled')) add('slap-tapao','ghost','muffled');
  if (family === 'membrane' && matchesGestureConcept(sourceHit, 'open')) add('tumba-open','conga-open','open','tone');

  if (ctx.profile.instrumentId === 'bandoneon') {
    for (const rule of GENRE_GESTURE_HINT_RULES.bandoneon) if (rule.pattern.test(text)) add(...rule.gestures);
  }
  const instrumentRules = ctx.profile.instrumentId === 'upright-bass' ? GENRE_GESTURE_HINT_RULES.uprightBass
    : ctx.profile.instrumentId === 'violin' ? GENRE_GESTURE_HINT_RULES.violin
    : ctx.profile.instrumentId === 'piano' ? GENRE_GESTURE_HINT_RULES.piano : undefined;
  if (instrumentRules?.genrePattern.test(text)) {
    const rule = instrumentRules.rules.find(candidate => candidate.pattern.test(text));
    if (rule) add(...rule.gestures);
  }

  const roleBucket: keyof PhraseContext['hybridTheory']['techniques'] = /bass/.test(ctx.role) ? 'bass'
    : /perc|drum/.test(ctx.role) ? 'percussion'
    : /bellows|accordion|bandoneon/.test(ctx.profile.family) ? 'bellows'
    : /bowed/.test(ctx.profile.family) ? 'bowed'
    : /wind|brass/.test(ctx.profile.family) ? (ctx.profile.family === 'brass' ? 'winds' : 'winds')
    : /voice|choir/.test(ctx.role) ? 'voice'
    : /harmony|comp|piano|keyboard/.test(ctx.role) ? 'harmony' : 'melody';
  const theoryHints = ctx.hybridTheory.techniques[roleBucket] ?? [];
  const candidates = Array.from(new Set([
    desired ?? '',
    ...contextual,
    ...theoryHints,
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
    if (theoryHints.some(h => GESTURE_HINT_ALIASES[h.toLowerCase().replace(/[^a-z0-9]+/g,'_')]?.test(gl) || gl.includes(h.toLowerCase()))) score += 6;
    if (hostPreferred.has(g)) score += 5;
    if (sourcePreferred.has(g)) score += 4;
    if (hitWord === 'ghost' && matchesGestureConcept(gl, 'ghostHit')) score += 6;
    if (hitWord === 'slap' && (matchesGestureConcept(gl, 'slap') || /marcato|accent/.test(gl))) score += 6;
    if (hitWord === 'open' && matchesGestureConcept(gl, 'openHit')) score += 5;
    if (hitWord === 'muffled' && matchesGestureConcept(gl, 'muffledHit')) score += 6;
    if (hitWord === 'fill' && matchesGestureConcept(gl, 'fillHit')) score += 5;
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

export function buildHybridGrammar(_hostStyleId: string | undefined, sourceGenre: string, hostStyle: import('../../data/styles/schema').ResolvedStyle, lensWeight = 0.5): { host: PerformanceGrammar; source: PerformanceGrammar; hybrid: PerformanceGrammar } {
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
