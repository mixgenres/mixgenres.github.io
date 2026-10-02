import type { MixBusId, MixFunction, MixTransitionPolicy, ResolvedMixContract } from '../../../data/sound/schema/dynamicMix';

export interface ResolvedMixRole { authoredRole: string; mixFunctions: MixFunction[] }
export interface TrackMixIntent extends ResolvedMixRole {
  trackId: string; priority: number; foreground: number; structuralImportance: number;
  melodicImportance: number; harmonicImportance: number; rhythmicImportance: number;
  activity: number; density: number; transientDensity: number; sustainOccupancy: number;
  registerLow: number; registerHigh: number; registerCenter: number;
  phraseEntry: boolean; phraseExit: boolean; callResponseGroup?: string; interactionTargetIds?: string[];
  articulationTags: string[];
  /** Union of occupied seconds, clipped to this window. */
  occupied: Array<[number, number]>;
  attacks: number[];
}
export interface MixAnalysisWindow {
  sectionId: string; phraseIndex: number; startBeat: number; endBeat: number; startTime: number; endTime: number;
  energy: number; tracks: TrackMixIntent[];
}
export interface ForegroundState {
  primaryTrackIds: string[]; secondaryTrackIds: string[]; confidence: number; sharedForeground: boolean;
}
export interface MaskingRelationship {
  sourceTrackId: string; targetTrackId: string; overlap: number; priorityDifference: number;
  registerOverlap: number; transientOverlap: number; sustainOverlap: number;
}
export interface TrackMixState {
  gainOffsetDb: number; presenceOffsetDb: number; bodyOffsetDb: number; depth: number; panOffset: number;
  width: number; reverbSendOffsetDb: number; delaySendOffsetDb: number; reverbSend: number; delaySend: number;
  transientAmount: number; compressionAmount: number; bus: MixBusId;
}
export interface BusMixState { gainOffsetDb: number; compressionAmount: number; compressionRatio: number }
export interface MasterMixState { gainOffsetDb: number; width: number }
export interface MixScene extends Omit<MixAnalysisWindow, 'tracks'> {
  styleId: string; enabled: boolean; foregroundTrackIds: string[]; sharedForeground: boolean;
  tracks: Record<string, TrackMixState>; buses: Record<MixBusId, BusMixState>; master: MasterMixState;
  transitions: MixTransitionPolicy; analysis: MixAnalysisWindow; masking: MaskingRelationship[];
  resolvedMix: ResolvedMixContract;
}
export interface MixSceneTimeline {
  version: 1; scenes: MixScene[]; duration: number;
  /** Fixed ensemble staging, independent of user mute/solo/export selections. */
  baselineHeadroom?: number;
  /** Excerpts retain original musical decisions and interpolate their initial state. */
  sourceStartTime?: number;
}
export const MIX_BUSES: MixBusId[] = ['lowAnchor', 'rhythm', 'harmony', 'melodic', 'percussion', 'texture', 'ensemble'];
export const neutralTrackMixState = (): TrackMixState => ({ gainOffsetDb: 0, presenceOffsetDb: 0, bodyOffsetDb: 0,
  depth: 0, panOffset: 0, width: 1, reverbSendOffsetDb: 0, delaySendOffsetDb: 0, reverbSend: 0, delaySend: 0,
  transientAmount: 0, compressionAmount: 0, bus: 'ensemble' });
