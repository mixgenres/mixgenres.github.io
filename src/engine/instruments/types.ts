import type { VoiceState, TrackParams } from '../elementary/elementaryEngine';
import type { InstrumentDSPProfile } from '../../data/instruments/physicalDspProfile';
import type { GenreDialect } from './genreDialect';

export interface VoiceRenderContext {
  trackId: string;
  voiceIndex: number;
  voice: VoiceState;
  params: TrackParams;
  dspProfile?: InstrumentDSPProfile;
  genreDialect: GenreDialect;
  pk: string;
  freq: number;
  gateSignal: any;
  velSignal: any;
  freqSignal: any;
  safeFreqSignal: any;
  velBoost: number;
  b: number;
  decayTime: number;
  model: number;
  action: string;
  articulation: number;
  isMuted: boolean;
  env: any;
  isDecayingInstrument: boolean;
  attack: number;
  release: number;
  sustain: number;
  envDecay: number;
  attackSignal: any;
  decaySignal: any;
  sustainSignal: any;
  releaseSignal: any;
}

export interface InstrumentModule {
  id: string;
  ownedDspSections?: Array<'coupledResonators' | 'excitationDynamics.kneeDropImpact' | 'articulationPhysics' | 'mechanicalArtifacts' | string>;
  renderVoice(ctx: VoiceRenderContext): any;
}
