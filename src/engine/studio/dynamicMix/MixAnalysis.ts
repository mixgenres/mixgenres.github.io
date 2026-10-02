import type { PerfNote } from '../../band/performanceData';
import type { MixFunction, RoleMixPolicy, MixContract } from '../../../data/sound/schema/dynamicMix';
import type { MixAnalysisWindow, ResolvedMixRole, TrackMixIntent, ForegroundState, MaskingRelationship } from './MixScene';
import { GESTURE_NAMES } from '../../band/gestures';

export const mixRecordValue = <T>(record: Record<string, T>, key: string): T | undefined => Object.hasOwn(record, key) ? record[key] : undefined;

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ROLE_FUNCTIONS: Record<string, MixFunction[]> = {
  lead: ['foreground'], melody: ['foreground'], voice: ['foreground'], solo: ['foreground'], hook: ['foreground'],
  counterline: ['counterline'], counterpoint: ['counterline'], answer: ['answer'], response: ['answer'],
  bass: ['low-anchor'], pulse: ['pulse-anchor'], motor: ['pulse-anchor', 'harmonic-support'],
  harmony: ['harmonic-support'], comp: ['harmonic-support'], 'rhythm-guitar': ['rhythmic-support', 'harmonic-support'],
  rhythm: ['rhythmic-support'], drums: ['pulse-anchor'], 'drum-kit': ['pulse-anchor'], percussion: ['rhythmic-support'],
  'hand-percussion': ['rhythmic-support'], 'aux-percussion': ['rhythmic-support'], bell: ['rhythmic-support'], shaker: ['rhythmic-support'],
  drumkit: ['pulse-anchor'], rhythmguitar: ['rhythmic-support', 'harmonic-support'], pad: ['texture'], texture: ['texture'], drone: ['texture'],
  impact: ['impact'], transition: ['transition'],
};
export function resolveMixFunctions(authoredRole: string, mix: Required<MixContract>, soloist = false,
  authoredForeground = false, answering = false, counterline = false): ResolvedMixRole {
  const role = authoredRole.toLowerCase().trim();
  const policy = mixRecordValue(mix.roles, authoredRole) ?? mixRecordValue(mix.roles, role);
  const functions = [...(policy?.mixFunctions ?? mixRecordValue(ROLE_FUNCTIONS, role) ?? ['harmonic-support'])];
  if (soloist || authoredForeground) functions.unshift('foreground');
  if (answering) functions.push('answer');
  if (counterline) functions.push('counterline');
  return { authoredRole, mixFunctions: [...new Set(functions)] };
}
export function roleMixPolicy(intent: ResolvedMixRole, mix: Required<MixContract>): RoleMixPolicy {
  // Anchor protections combine; a foreground phrase can never remove a physical floor's protection.
  let out: RoleMixPolicy = {};
  for (const fn of intent.mixFunctions) {
    const next = mixRecordValue(mix.roles, fn) ?? {};
    out = { ...out, ...next, protectLowEnd: !!out.protectLowEnd || !!next.protectLowEnd,
      protectRhythmicDefinition: !!out.protectRhythmicDefinition || !!next.protectRhythmicDefinition,
      mayYieldInGain: out.mayYieldInGain === false || next.mayYieldInGain === false ? false : next.mayYieldInGain ?? out.mayYieldInGain };
  }
  return { ...out, ...(mixRecordValue(mix.roles, intent.authoredRole) ?? mixRecordValue(mix.roles, intent.authoredRole.toLowerCase()) ?? {}) };
}
export function unionIntervals(intervals: Array<[number, number]>): Array<[number, number]> {
  const out: Array<[number, number]> = [];
  for (const [start, end] of intervals.sort((a, b) => a[0] - b[0])) {
    const last = out.at(-1);
    if (last && start <= last[1]) last[1] = Math.max(last[1], end);
    else if (end > start) out.push([start, end]);
  }
  return out;
}
const length = (intervals: Array<[number, number]>) => intervals.reduce((sum, [a, b]) => sum + b - a, 0);
export interface TrackAnalysisInput {
  trackId: string; role: string; notes: PerfNote[]; soloist?: boolean; authoredForeground?: boolean;
  answering?: boolean; counterline?: boolean; interactionTargetIds?: string[]; callResponseGroup?: string;
}
export function analyzeMixWindow(window: Omit<MixAnalysisWindow, 'tracks'>, inputs: TrackAnalysisInput[], mix: Required<MixContract>): MixAnalysisWindow {
  const seconds = Math.max(.001, window.endTime - window.startTime), beats = Math.max(.001, window.endBeat - window.startBeat);
  const tracks: TrackMixIntent[] = inputs.map(input => {
    const notes = input.notes.filter(n => Number.isFinite(n.midi) && n.dur > 0 && n.vel > 0 && n.time < window.endTime && n.time + n.dur > window.startTime);
    const role = resolveMixFunctions(input.role, mix, input.soloist, input.authoredForeground, input.answering, input.counterline);
    const policy = roleMixPolicy(role, mix);
    const has = (fn: MixFunction) => role.mixFunctions.includes(fn);
    const occupied = unionIntervals(notes.map(n => [Math.max(window.startTime, n.time), Math.min(window.endTime, n.time + n.dur)]));
    const attacksById = new Map<string, number>();
    for (const n of notes) if (n.time >= window.startTime) {
      const key = n.attackId ?? `${n.time}`;
      attacksById.set(key, Math.min(attacksById.get(key) ?? Infinity, n.time));
    }
    const attacks = [...new Set(attacksById.values())].sort((a, b) => a - b);
    const activity = clamp(length(occupied) / seconds);
    const melodic = has('foreground') || has('counterline') || has('answer');
    const structural = has('low-anchor') || has('pulse-anchor') || !!policy.protectRhythmicDefinition;
    return { ...role, trackId: input.trackId, priority: notes.length ? policy.priority ?? (melodic ? .85 : structural ? .8 : .5) : 0,
      foreground: notes.length ? input.soloist ? 1 : has('foreground') ? .9 : has('counterline') ? .75 : has('answer') ? .6 : .1 : 0,
      structuralImportance: notes.length && structural ? .95 : 0,
      melodicImportance: melodic ? .9 : .1, harmonicImportance: has('harmonic-support') ? .8 : .2,
      rhythmicImportance: structural ? .95 : has('rhythmic-support') ? .75 : .2,
      activity, density: clamp(notes.length / (beats * 4)), transientDensity: clamp(attacks.length / (beats * 2)),
      sustainOccupancy: clamp(length(unionIntervals(notes.filter(n => n.dur > seconds / 8).map(n => [Math.max(window.startTime, n.time), Math.min(window.endTime, n.time + n.dur)]))) / seconds),
      registerLow: notes.length ? notes.reduce((low, n) => Math.min(low, n.midi), Infinity) : 60,
      registerHigh: notes.length ? notes.reduce((high, n) => Math.max(high, n.midi), -Infinity) : 60,
      registerCenter: notes.length ? notes.reduce((sum, n) => sum + n.midi, 0) / notes.length : 60,
      phraseEntry: attacks.length > 0 && attacks[0] < window.startTime + Math.min(.3, seconds / 4),
      phraseExit: !!notes.length && notes.every(n => n.time + n.dur < window.endTime - .05),
      articulationTags: [...new Set(notes.map(n => GESTURE_NAMES[n.gestureCode]).filter((v): v is string => !!v))],
      interactionTargetIds: input.interactionTargetIds, callResponseGroup: input.callResponseGroup, occupied, attacks };
  });
  const explicitOwner = inputs.some(input => input.authoredForeground || input.soloist);
  if (explicitOwner) for (const track of tracks) {
    const input = inputs.find(candidate => candidate.trackId === track.trackId)!;
    if (!input.authoredForeground && !input.soloist && !track.mixFunctions.includes('counterline')) track.foreground = Math.min(.6, track.foreground);
  }
  // An authored answer owns attention when its caller rests; no instrument heuristics.
  for (const track of tracks) if (track.activity > 0 && track.mixFunctions.includes('answer') && track.interactionTargetIds?.length
    && !tracks.some(t => track.interactionTargetIds!.includes(t.trackId) && t.activity > 0)) track.foreground = .9;
  return { ...window, tracks };
}
export function resolveForegroundOwnership(window: MixAnalysisWindow, shared = true): ForegroundState {
  const candidates = window.tracks.filter(t => t.activity > 0 && t.foreground >= .55)
    .sort((a, b) => b.foreground - a.foreground || b.priority - a.priority || a.trackId.localeCompare(b.trackId));
  const primary = candidates.filter(t => t.foreground >= .7 && (shared || t === candidates[0]));
  if (!primary.length && candidates.length) primary.push(candidates[0]);
  return { primaryTrackIds: primary.map(t => t.trackId), secondaryTrackIds: candidates.filter(t => !primary.includes(t)).map(t => t.trackId),
    confidence: candidates[0]?.foreground ?? 0, sharedForeground: primary.length > 1 };
}
function temporalOverlap(a: TrackMixIntent, b: TrackMixIntent): number {
  let i = 0, j = 0, overlap = 0;
  while (i < a.occupied.length && j < b.occupied.length) {
    const aa = a.occupied[i], bb = b.occupied[j];
    overlap += Math.max(0, Math.min(aa[1], bb[1]) - Math.max(aa[0], bb[0]));
    if (aa[1] < bb[1]) i++; else j++;
  }
  return overlap / Math.max(.001, Math.min(length(a.occupied), length(b.occupied)));
}
export function analyzeMasking(window: MixAnalysisWindow, foreground: ForegroundState, preserveCounterpoint = true, mix?: Required<MixContract>): MaskingRelationship[] {
  const out: MaskingRelationship[] = [];
  const active = window.tracks.filter(t => t.activity > 0);
  for (let i = 0; i < active.length; i++) for (let j = i + 1; j < active.length; j++) {
    const a = active[i], b = active[j];
    if (preserveCounterpoint && foreground.primaryTrackIds.includes(a.trackId) && foreground.primaryTrackIds.includes(b.trackId)) continue;
    const score = (t: TrackMixIntent) => .6 * t.foreground + .4 * (mix ? roleMixPolicy(t, mix).maskingPriority ?? t.priority : t.priority);
    const target = score(a) >= score(b) ? a : b, source = target === a ? b : a;
    const registerOverlap = clamp((Math.min(a.registerHigh + 4, b.registerHigh + 4) - Math.max(a.registerLow - 4, b.registerLow - 4))
      / Math.max(8, Math.min(a.registerHigh - a.registerLow + 8, b.registerHigh - b.registerLow + 8)));
    const sustainOverlap = temporalOverlap(a, b);
    let ai = 0, bi = 0, coincident = 0;
    while (ai < a.attacks.length && bi < b.attacks.length) {
      const delta = a.attacks[ai] - b.attacks[bi];
      if (Math.abs(delta) <= .05) { coincident++; ai++; bi++; } else if (delta < 0) ai++; else bi++;
    }
    const transientOverlap = coincident / Math.max(1, Math.min(a.attacks.length, b.attacks.length));
    out.push({ sourceTrackId: source.trackId, targetTrackId: target.trackId,
      overlap: registerOverlap * sustainOverlap, priorityDifference: score(target) - score(source), registerOverlap, transientOverlap, sustainOverlap });
  }
  return out;
}
