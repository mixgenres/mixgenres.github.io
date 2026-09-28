/**
 * CULTURAL ACOUSTIC EVENT ARCHITECTURE
 * =====================================
 * Replaces Eurocentric linear MIDI ticks and Note-On/Off events with continuous
 * physical excitation events anchored to circular cultural phases.
 */

import type { LuthierPhysicalParameters } from '../audio/LuthierAPI';

export type ExcitationActionType =
  | 'strike'
  | 'strum'
  | 'bellows_pull'
  | 'rasgueado'
  | 'bow_drag'
  | 'breath'
  | 'slap'
  | 'mute'
  | 'pluck'
  | 'tap'
  | 'golpe'
  | 'arrastre'
  | 'bend'
  | 'tremolo'
  | 'abanico';

export interface PhysicalExcitationAction {
  type: ExcitationActionType;
  /** Excitation force normalized or in Newtons (0.0 to 1.0 / N) */
  force: number;
  /** Contact position along instrument body: 0.0 (bridge/rim) to 1.0 (neck/center) */
  contactPoint: number;
  /** Exciter hardness/mass index: 0.0 (flesh/soft pad) to 1.0 (hard plectrum/wood) */
  mass: number;
  /** Phase duration for continuous sustained excitations (0.0 to 1.0 of cycle) */
  durationPhase?: number;
  /** Time/phase-varying pressure curve for bellows, bowing, or breath */
  pressureCurve?: number[];
  /** Mechanical hand/felt damping factor (0.0 free ring to 1.0 full mute) */
  damping?: number;
}

export interface IntonationState {
  /** Pure physical pitch in Hz */
  baseFrequencyHz: number;
  /** Cultural microtonal offset in cents (e.g., maqam quarter-tones, slendro intervals) */
  culturalMicrotoneCents: number;
  /** Dynamic inter-ensemble resonance adjustment in cents (Just Intonation lock) */
  ensembleLockCents?: number;
}

export interface Spatial3DPosition {
  /** Right (+1) / Left (-1) stage coordinate */
  x: number;
  /** Front (+1) / Back (-1) depth coordinate */
  y: number;
  /** Height coordinate above stage */
  z: number;
}

export interface CulturalAcousticEvent {
  id: string;
  /** Normalized phase angle of the cultural cycle (0.0 to 1.0) */
  cyclePhase: number;
  /** ID of the physical instrument object / Luthier model instance */
  luthierObjectId: string;
  /** Track / Voice ID in the arrangement */
  trackId: string;
  /** Physical excitation parameters */
  action: PhysicalExcitationAction;
  /** Frequency and microtonal intonation spec */
  tuning: IntonationState;
  /** 3D Spatial coordinates for Ambisonic spatial ray-tracing */
  spatialPosition: Spatial3DPosition;
  /** Physical model family + material parameters for this instrument, resolved
   *  once on the main thread (via getLuthierModelForInstrument) and shipped
   *  with the event so the worklet never has to know about the instrument
   *  catalog — it just picks a synthesis algorithm by `luthier.category`. */
  luthier?: LuthierPhysicalParameters;
  /** Active genre ID for applying dynamic style distortion and physical shaping */
  worldId?: string;
  /** Optional MIDI pitch */
  midi?: number;
  /** Optional frequency in Hz */
  frequencyHz?: number;
  /** Optional velocity (0-127) */
  velocity?: number;
  /** Optional duration in seconds */
  duration?: number;
  /** Resolved gesture code from the whole-song compiler. */
  gestureCode?: number;
  /** Precompiled bellows direction: 1 opening, 2 closing. */
  bellowsDirectionCode?: 1 | 2;
  /** Envelope overrides for physical modeling */
  attack?: number;
  decay?: number;
  sustain?: number;
  release?: number;
}

export interface SocioAcousticContext {
  /** Energy contagion factor scaling excitation force based on ensemble dynamics */
  velocityContagion: number;
  /** Micro-timing offset in milliseconds relative to leader instrument open slaps/attacks */
  listenerLeadOffsets: Record<string, number>;
}

/**
 * Utility to convert pitch in MIDI semitones + microtonal cents to pure Hz.
 */
export function midiAndCentsToHz(midi: number, microtoneCents: number = 0): number {
  const totalSemitones = (midi - 69) + (microtoneCents / 100);
  return 440 * Math.pow(2, totalSemitones / 12);
}

/**
 * Creates a default CulturalAcousticEvent.
 */
export function createCulturalAcousticEvent(
  trackId: string,
  luthierObjectId: string,
  cyclePhase: number,
  midi: number,
  force: number = 0.8,
  actionType: ExcitationActionType = 'strike',
  centsOffset: number = 0
): CulturalAcousticEvent {
  return {
    id: `${trackId}_${cyclePhase.toFixed(4)}_${midi}_${actionType}_${Math.round(force * 1000)}`,
    cyclePhase: Math.max(0, Math.min(1, cyclePhase)),
    luthierObjectId,
    trackId,
    action: {
      type: actionType,
      force: Math.max(0, Math.min(1, force)),
      contactPoint: 0.5,
      mass: 0.5,
    },
    tuning: {
      baseFrequencyHz: midiAndCentsToHz(midi, 0),
      culturalMicrotoneCents: centsOffset,
      ensembleLockCents: 0,
    },
    spatialPosition: { x: 0, y: 0, z: 0 },
  };
}
