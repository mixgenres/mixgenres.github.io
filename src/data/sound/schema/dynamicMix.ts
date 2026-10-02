import type { MixCharacter } from '../../styles/contracts';
import type { DecisionTrace, ResolvedStyle } from '../../styles/schema';

export type MixFunction = 'foreground' | 'counterline' | 'answer' | 'harmonic-support' | 'rhythmic-support'
  | 'low-anchor' | 'pulse-anchor' | 'texture' | 'impact' | 'transition';
export type MixBusId = 'lowAnchor' | 'rhythm' | 'harmony' | 'melodic' | 'percussion' | 'texture' | 'ensemble';
export type MixOverride<T> = { [K in keyof T]?: NonNullable<T[K]> extends Array<infer U> ? U[] : NonNullable<T[K]> extends object ? MixOverride<NonNullable<T[K]>> : T[K] };
export interface StageMixPolicy {
  width: number; depthRange: number; centerAnchorRoles: string[];
  rolePan: Record<string, number>; roleWidth: Record<string, number>; preserveNaturalStage: boolean;
}
export interface DynamicsMixPolicy {
  foregroundContrastDb: number; maxTrackBoostDb: number; maxTrackCutDb: number;
  ensembleBreathing: number; crescendoExpansion: number; silenceContrast: number;
  peakSectionHeadroomDb: number; busCompressionAmount: number; busCompressionRatio: number; densityCompensation: number;
  sharedForeground: boolean;
}
export interface RoleMixPolicy {
  mixFunctions?: MixFunction[];
  priority?: number; gainDb?: number; foregroundGainDb?: number; supportGainDb?: number;
  presenceDb?: number; bodyDb?: number; depth?: number; width?: number; transientEmphasis?: number;
  protectLowEnd?: boolean; protectRhythmicDefinition?: boolean; mayYieldSpectrally?: boolean;
  mayYieldInGain?: boolean; maskingPriority?: number; ambienceSend?: number;
}
export interface MaskingPolicy {
  enabled: boolean; minOverlap: number; minPriorityDifference: number; maxPresenceCutDb: number;
  maxBodyCutDb: number; maxGainCutDb: number; amount: number; preserveCounterpoint: boolean;
}
export interface AmbiencePolicy {
  roomSize: number; foregroundDepthDifference: number; reverbSend: number; delaySend: number;
  bloom: number; preDelayMs: number;
}
export interface SectionMixPolicy {
  gainDb?: number; width?: number; depth?: number; ambience?: number; foregroundContrast?: number;
}
export interface MixTransitionPolicy {
  attackMs: number; releaseMs: number; sectionTransitionMs: number; foregroundHandoffMs: number;
  spectralRampMs: number; lookaheadMs: number;
}
export interface BusMixPolicy {
  glueAmount: number; lowAnchorCompression: number; rhythmCompression: number; melodicCompression: number;
  ensembleCompression: number; parallelCompression: number; sharedRoom: boolean;
  roleBus: Record<string, MixBusId>;
}
export interface MixContract {
  /** Legacy/un-calibrated worlds resolve a neutral timeline until explicitly enabled. */
  enabled?: boolean;
  character: MixCharacter;
  stage?: StageMixPolicy; dynamics?: DynamicsMixPolicy; masking?: MaskingPolicy; ambience?: AmbiencePolicy;
  roles?: Record<string, RoleMixPolicy>; sections?: Record<string, SectionMixPolicy>;
  transitions?: MixTransitionPolicy; buses?: BusMixPolicy;
}
export interface ResolvedMixContract {
  contract: Required<MixContract>;
  provenance: ResolvedStyle['provenance'];
  trace: DecisionTrace;
}
