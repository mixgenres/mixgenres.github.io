import type { VoiceState, TrackParams } from './elementaryEngine.ts';
import type { InstrumentDSPProfile } from '../../data/sound/schema/dsp-profile';
import type { GenreDialect } from '../../data/performance/schema/genre-dialect';
import { el } from '@elemaudio/core';

export type AudioSignal = ReturnType<typeof el.const>;

export interface VoiceRenderContext {
  trackId: string;
  voiceIndex: number;
  voice: VoiceState;
  params: TrackParams;
  dspProfile?: InstrumentDSPProfile;
  genreDialect: GenreDialect;
  pk: string;
  freq: number;
  gateSignal: AudioSignal;
  velSignal: AudioSignal;
  freqSignal: AudioSignal;
  safeFreqSignal: AudioSignal;
  velBoost: number;
  b: number;
  decayTime: number;
  model: number;
  action: string;
  articulation: number;
  isMuted: boolean;
  env: AudioSignal;
  isDecayingInstrument: boolean;
  attack: number;
  release: number;
  sustain: number;
  envDecay: number;
  attackSignal: AudioSignal;
  decaySignal: AudioSignal;
  sustainSignal: AudioSignal;
  releaseSignal: AudioSignal;
}

export interface InstrumentModule {
  id: string;
  /** Instrument IDs with bespoke behavior inside a shared module family. */
  specializedInstrumentIds?: string[];
  ownedDspSections?: Array<'coupledResonators' | 'excitationDynamics.kneeDropImpact' | 'articulationPhysics' | 'mechanicalArtifacts' | string>;
  renderVoice(ctx: VoiceRenderContext): AudioSignal;
}
