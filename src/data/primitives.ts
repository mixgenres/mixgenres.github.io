export type SectionEnergy = 1 | 2 | 3 | 4 | 5;

export type LensId = string;

export type Scope = 'measure' | 'phrase' | 'repetition' | 'region' | 'track' | 'relationship' | 'song';

export type Role = 
  | 'pulse'
  | 'rhythm'
  | 'harmony'
  | 'bass'
  | 'melody'
  | 'percussion'
  | 'texture'
  | 'voice'
  | 'lead'
  | 'drum-kit'
  | 'drumKit'
  | 'drums'
  | 'aux-percussion'
  | 'bell'
  | 'shaker'
  | 'hand-percussion'
  | 'guitar'
  | 'rhythm-guitar'
  | 'rhythmGuitar'
  | 'melodic-guitar'
  | 'piano'
  | 'keyboard'
  | 'horn-section'
  | 'counterline'
  | 'fill'
  | 'bandoneon'
  | 'brass'
  | 'violin'
  | string;

export type InstrumentKind = 
  | 'voice'
  | 'guitar'
  | 'guitar'
  | 'bass'
  | 'keys'
  | 'piano'
  | 'sax'
  | 'trumpet'
  | 'string-ensemble'
  | 'violin'
  | 'percussion'
  | 'drums'
  | 'synth'
  | 'bandoneon'
  | 'flute'
  | 'accordion'
  | 'cavaquinho'
  | 'bongos'
  | 'congas'
  | 'timbales'
  | 'guiro'
  | 'maracas'
  | 'cowbell'
  | 'cuica'
  | 'pandeiro'
  | 'surdo'
  | 'tamborim'
  | 'brass'
  | 'hand-percussion'
  | 'other'
  | 'coro'
  | string;

export type SectionType = 
  | 'intro'
  | 'verse'
  | 'pre-chorus'
  | 'chorus'
  | 'bridge'
  | 'breakdown'
  | 'solo'
  | 'interlude'
  | 'coda'
  | 'ending'
  | string;

export type DanceTag =
  | 'social-partner'
  | 'blues-fusion-compatible'
  | 'wcs-compatible'
  | 'solo-listening'
  | 'listening'
  | 'festival-fusion'
  | 'sensual-fusion'
  | 'learning'
  | string;

export interface GrooveMechanics {
  swingPercentage?: number;
  anticipationOffsetSteps?: number;
  microtimingFeel?: 'straight' | 'swung' | 'laid-back' | 'pushed' | 'rubato' | 'atrasado' | 'drunk' | 'quantized';
  humanizeJitterMs?: number;
}
