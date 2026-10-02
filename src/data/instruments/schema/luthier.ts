export type LuthierModelCategory =
  | 'membrane_tension_2d'
  | 'strum_friction_pluck'
  | 'continuous_bowed_friction'
  | 'bellows_free_reed'
  | 'aerophone_lip_tension'
  | 'aerophone_single_reed'
  | 'aerophone_double_reed'
  | 'aerophone_bagpipe_reed'
  | 'aerophone_flue'
  | 'aerophone_edge_blown'
  | 'aerophone_membrane_flute'
  | 'resonator_struck_metal_wood'
  | 'electro_acoustic_algorithmic'
  | 'breath_free_reed'
  | 'plucked_resonance'
  | 'body_impact'
  | 'scraped_friction';

export interface LuthierPhysicalParameters {
  category: LuthierModelCategory;
  materialDensity: number;
  tension: number;
  bodyResonanceVolume: number;
  decayTimeFactor: number;
  harmonicRichness: number;
  articulationCapabilities?: string[];
  genreAdaptable?: boolean;
  decayTimeSec?: number;
  stringTension?: number;
  soundboardResonanceHz?: number;
  airResonanceHz?: number;
  fretBuzzAmount?: number;
  pickupBlend?: number;
  courses?: number;
  bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric' | 'metal-shell' | 'brass-tube';
  excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow';
  sympatheticStrings?: boolean;
  transientSharpness?: number;
  damping?: number;
}
