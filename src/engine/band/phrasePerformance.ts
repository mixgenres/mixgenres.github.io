import { ANTICIPATED_BASS_GENRES, IDIOMATIC_DEGREE_RULES } from '../../data/performance/genreInstrumentBehaviors';
import { GENRE_GESTURE_HINT_RULES } from '../../data/performance/genreGestureRules';
import { GESTURE_HINT_ALIASES } from '../../data/performance/gestureHintAliases';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { techniqueMechanics } from '../../data/performance/techniqueMechanics';
import type { MusicalPattern, Measure } from '../../types';
import type { HitFunction } from '../../data/performance/hitFunctions';
import type { InstrumentPerformanceProfile, GenrePerformanceProfile } from '../../engine/lookup/performance';
import { parseChord, scalePcsForMode } from '../sheet/musicTheory.ts';
import type { ChordQuality } from '../../data/musicTheory/schema/chord-quality';
import { type GenreTheoryProfile } from '../../engine/lookup/theory';
import { voiceProfile } from '../sheet/instrumentRoles.ts';
import { resolveStyle } from '../../engine/style/resolve';
import { getCanonicalStyle } from '../../engine/style/registry';
import { getPerformanceGrammar, resolveHybridGrammar } from './performanceGrammar.ts';
import type { PerformanceGrammar } from '../../data/performance/schema/performance-grammar';
import type { ImprovisationGrammar } from '../../data/styles/schema';

export interface PhraseState {
  previousMidi?: number;
  previousVoicing?: number[];
  previousPc?: number;
  previousTime?: number;
  previousAccent?: number;
  lastStrongMidi?: number;
  lastPhraseIndex: number;
  phraseIndex: number;
  contour: number;
}

export interface PhraseContext {
  authoredPitch?: import('../../data/schema').PatternEvent['pitch'];
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
  const idx = ((Math.round(degree) - 1) % pcs.length + pcs.length) % pcs.length;
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
  for (let oct = Math.ceil((low - pc) / 12); oct <= Math.floor((high - pc) / 12); oct++) {
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
  const high = Math.min(ctx.profile.capabilities.highMidi, /^(bass|low-anchor)$/.test(ctx.role) ? 60 : 127);
  const center = Math.min(ctx.profile.capabilities.comfortableLowMidi + 5, 48);
  const rawMotion = ctx.bassStyle ?? ctx.hybridTheory.bass.style ?? 'riff';
  const b = rawMotion === 'root-fifth' ? 'rootFifth' : rawMotion;
  const root = parseChord(ctx.chord).bassPc;
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

function chordVoicing(ctx: PhraseContext, state: PhraseState): number[] {
  const parsed = parseChord(ctx.chord);
  const tones = chordTonePcsWithQuality(ctx.chord);
  const guide = parsed.guideTones?.map(x => (parsed.rootPc + x) % 12) ?? [];
  const tension = parsed.tensions?.map(x => (parsed.rootPc + x) % 12) ?? [];
  const voicing = ctx.hybridTheory.harmony.voicing;
  const poly = Math.max(1, ctx.profile.capabilities.polyphony);
  const base = Math.max(ctx.profile.capabilities.lowMidi, Math.min(ctx.profile.capabilities.highMidi,
    voiceProfile(ctx.profile.instrumentId).centre + (voicing === 'power' ? -12 : 0)));
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
    const target = (state.previousVoicing?.[i] ?? base + i * spacing + (voicing === 'montuno' || voicing === 'yumba' ? 7 : 0));
    out.push(nearestMidi(pcs[i], target, ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi));
  }
  state.previousVoicing = Array.from(new Set(out)).sort((a, b) => a - b);
  return state.previousVoicing;
}

export function realizeMidi(ctx: PhraseContext, index: number, total: number, state: PhraseState): number[] {
  ctx = { ...ctx, statePreviousMidi: state.previousMidi };
  const d = ctx.profile.instrumentId.toLowerCase();
  if (ctx.authoredPitch?.midi !== undefined) {
    const midis = Array.isArray(ctx.authoredPitch.midi) ? ctx.authoredPitch.midi : [ctx.authoredPitch.midi];
    if (!midis.length || midis.some(midi => !Number.isInteger(midi) || midi < ctx.profile.capabilities.lowMidi || midi > ctx.profile.capabilities.highMidi)) {
      throw new Error(`Invalid absolute score pitch for ${ctx.profile.instrumentId}: ${midis.join(', ')}`);
    }
    if (midis.length > ctx.profile.capabilities.polyphony) throw new Error(`Score voicing exceeds ${ctx.profile.instrumentId} polyphony`);
    state.previousVoicing = midis.slice();
    return midis.slice();
  }
  if (ctx.authoredPitch) {
    const pitch = ctx.authoredPitch;
    if (pitch.voicing === 'chord') return chordVoicing(ctx, state);
    const pc = ((pitch.semitoneOffset !== undefined ? rootPc(ctx.chord) + pitch.semitoneOffset
      : degreePc(ctx.chord, pitch.degree ?? 1, ctx.hybridTheory)) + 120) % 12;
    const root = rootPc(ctx.chord);
    const rootMidi = nearestMidi(root, pitch.register ?? voiceProfile(ctx.profile.instrumentId).centre,
      ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi);
    const scaleLength = chordScalePcs(ctx.chord, ctx.hybridTheory).length;
    const offset = pitch.semitoneOffset ?? (pc - root + 12) % 12 + 12 * Math.floor(((pitch.degree ?? 1) - 1) / scaleLength);
    // Degree contours are relative to one root register. Picking every pitch
    // nearest the same centre makes a descending 5–3–2–1 jump up at its tonic.
    return [nearestMidi(pc, rootMidi + offset,
      ctx.profile.capabilities.lowMidi, ctx.profile.capabilities.highMidi)];
  }
  if (voiceProfile(ctx.profile.instrumentId).role === 'perc') return [60];
  if (!ctx.soloist && (/^(bass|low-anchor)$/.test(ctx.role) || voiceProfile(ctx.profile.instrumentId).role === 'bass')) return [bassMidi(ctx, index, total)];
  const melodicRole = /^(lead|melody|counterline|voice)$/.test(ctx.role);
  if (!ctx.soloist && !melodicRole && (ctx.profile.family === 'keyboard' || ctx.profile.family === 'plucked-string' && ctx.profile.capabilities.polyphony > 1 || ctx.pattern.roles.includes('harmony') || /piano|organ|rhodes|guitar|bandoneon|accordion/.test(d))) return chordVoicing(ctx, state);

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
  // Do not add four semitones to the register on every late-phrase attack:
  // repeated answers otherwise climb to the instrument's ceiling.
  return [nearestMidi(pc, target, ctx.profile.capabilities.comfortableLowMidi, ctx.profile.capabilities.comfortableHighMidi)];
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
  if (desired && allowed(desired)) return desired;
  const hostPreferred = new Set(ctx.hostProfile.preferredGestures);
  const sourcePreferred = new Set(ctx.sourceProfile.preferredGestures);
  const text = `${ctx.pattern?.id ?? ''} ${ctx.pattern?.name ?? ''} ${ctx.regionStyleId ?? ''}`.toLowerCase();
  const sourceHit = String(ctx.measureDetails?.hitTypes?.[ctx.onsetIndex] ?? '').toLowerCase();

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

  for (const instrumentRules of GENRE_GESTURE_HINT_RULES) {
    if (instrumentRules.instrumentId !== ctx.profile.instrumentId || !instrumentRules.genrePattern.test(text)) continue;
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
  ].filter((g): g is string => Boolean(g) && allowed(g)
    && (['slap', 'ghost', 'muffled'].includes(hit) || techniqueMechanics(INSTRUMENTS_BY_ID[ctx.profile.instrumentId], g).pitchIdentity !== 'unpitched'))));
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
