import type { PerfNote } from '../band/performanceData';
import type { TrackParams, VoiceState } from './elementaryEngine';
import { midiToFreq } from './elementaryEngine';
import { resolveRenderGesture } from './renderGesture';
import { resolveDialect } from '../band/genreDialect';

/** Physical performance controls are resolved on UI compilation, never a tick. */
export function prepareNoteVoice(note: PerfNote, params: TrackParams, worldId: string, styleId: string, role?: string): VoiceState {
  const instrumentId = params.instrumentId!;
  const rendered = resolveRenderGesture(instrumentId, note.gestureCode);
  const midi = Math.max(0, Math.min(127, Math.round(note.midi)));
  const vel = Math.max(1, Math.min(127, Math.round(note.vel)));
  const vel01 = vel / 127;
  const dialect = resolveDialect(instrumentId, worldId, styleId, role);
  // Song-relative time makes expression independent of scheduling latency/loops.
  const jitter = (((note.gestureCode * 1103515245 + midi * 12345 + Math.round(note.time * 1000)) >>> 0) / 0xffffffff) - 0.5;
  return {
    id: 'prepared', gate: 0, note: midi,
    frequencyHz: note.frequencyHz ?? midiToFreq(midi),
    velocity: Math.max(0, Math.min(1, vel01 * rendered.gainMultiplier)),
    action: rendered.action, articulation: rendered.articulationNorm,
    excitationType: rendered.excitationOverride ?? params.excitationType,
    harmonicRichnessDelta: rendered.harmonicRichnessDelta,
    decayTimeFactorScale: rendered.decayTimeFactorScale,
    bellowsDirectionCode: note.bellowsDirectionCode,
    bandoneonButtonId: note.bandoneonButtonId,
    bandoneonButtonIndex: note.bandoneonButtonIndex,
    bandoneonSideCode: note.bandoneonSideCode,
    contactPoint: Math.max(0.05, Math.min(0.95, dialect?.contactPointOverride ?? (rendered.contactPoint - (vel01 - 0.5) * 0.18 + jitter * 0.08))),
    mass: Math.max(0.1, Math.min(0.95, rendered.mass + vel01 * 0.42 + jitter * 0.08)),
  };
}

/** Controller state changes scalar physics, not graph ownership. */
export function applyPhysicalController(params: TrackParams, cc: number, value: number): boolean {
  const norm = Math.max(0, Math.min(1, value / 127));
  switch (cc) {
    case 16: params.articulation = norm; break;
    case 74: params.brightness = norm; break;
    case 17: params.contact = norm; break;
    case 18: params.mute = norm; break;
    case 19: params.bowPressure = norm; break;
    case 20: params.bowVelocity = norm; break;
    case 21: params.bodyTap = norm; break;
    case 22: params.pluckPosition = norm; break;
    case 24: params.pressure = norm; break;
    case 25: params.resonance = norm; break;
    default: return false;
  }
  return true;
}
export function controllerStateKey(params: TrackParams): string {
  return JSON.stringify([params.articulation, params.brightness, params.contact, params.mute,
    params.bowPressure, params.bowVelocity, params.bodyTap, params.pluckPosition, params.pressure, params.resonance]);
}
