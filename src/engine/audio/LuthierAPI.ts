import { INSTRUMENTS_BY_ID } from '../../data/instruments';

/**
 * THE PLUGGABLE LUTHIER API
 * =========================
 * Maps instruments to physical wave, mesh, friction, and waveguide models.
 * Replaces static SoundFont samples with parametric acoustic physical models.
 */

export type LuthierModelCategory =
  | 'membrane_tension_2d'
  | 'strum_friction_pluck'
  | 'continuous_bowed_friction'
  | 'bellows_free_reed'
  | 'aerophone_lip_tension'
  | 'resonator_struck_metal_wood'
  | 'electro_acoustic_algorithmic'
  | 'breath_free_reed'
  | 'plucked_resonance'
  | 'body_impact'
  | 'scraped_friction';

export interface LuthierPhysicalParameters {
  category: LuthierModelCategory;
  /** Primary material density (e.g. skin, steel, wood, nylon, brass) */
  materialDensity: number;
  /** Tension or internal pressure scale */
  tension: number;
  /** Body resonance factor / cavity size in liters */
  bodyResonanceVolume: number;
  /** Damping / decay rate coefficient */
  decayTimeFactor: number;
  /** Nonlinear saturation or harmonic richness */
  harmonicRichness: number;
  /** Dedicated standalone Faust profile ID if available */
  faustProfile?: 'spanish-guitar' | 'electric-bass' | 'double-bass' | 'tres' | 'flamenco-cajon';
  /** Catalog of physically supported articulations */
  articulationCapabilities?: string[];
  /** Whether this physical profile dynamically adapts wood, pickups, and transients by genre/song style */
  genreAdaptable?: boolean;
  /** Optional fine-tuned decay time in seconds */
  decayTimeSec?: number;
  /** Optional string tension ratio */
  stringTension?: number;
  /** Soundboard modal resonance frequency in Hz */
  soundboardResonanceHz?: number;
  /** Internal Helmholtz air cavity resonance frequency in Hz */
  airResonanceHz?: number;
  /** Fret clack or buzz intensity ratio */
  fretBuzzAmount?: number;
  /** Pickup blend ratio (0 = 100% neck, 1 = 100% bridge) */
  pickupBlend?: number;
  /** Number of string courses in unison/octaves (e.g. 2 for 12-string guitar, mandolin, tres, bouzouki) */
  courses?: number;
  /** Physical body construction architecture */
  bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric' | 'metal-shell' | 'brass-tube';
  /** Exciter/plucking physics */
  excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow';
  /** Sympathetic drone / resonant string bank */
  sympatheticStrings?: boolean;
  /** Transient sharpness of the nail or stick attack */
  transientSharpness?: number;
  /** Custom damping coefficient */
  damping?: number;
}


/**
 * Registry mapping every instrument catalog ID to its physical luthier model.
 */
/**
 * Registry mapping every instrument catalog ID to its physical luthier model.
 * Derived directly from individual instrument definition files.
 */
export const LUTHIER_INSTRUMENT_MAP: Record<string, LuthierPhysicalParameters> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.luthierPhysics) {
    LUTHIER_INSTRUMENT_MAP[id] = def.luthierPhysics;
  }
}

/**
 * Resolves physical Luthier model parameters for any given instrument ID.
 */
export function getLuthierModelForInstrument(instrumentId: string): LuthierPhysicalParameters {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (def?.luthierPhysics) {
    return def.luthierPhysics;
  }
  if (LUTHIER_INSTRUMENT_MAP[instrumentId]) {
    return LUTHIER_INSTRUMENT_MAP[instrumentId];
  }
  // Fallback default physical model based on string matching
  if (instrumentId.includes('drum') || instrumentId.includes('perc')) {
    return { category: 'membrane_tension_2d', materialDensity: 0.8, tension: 0.7, bodyResonanceVolume: 15.0, decayTimeFactor: 0.8, harmonicRichness: 0.6 };
  }
  if (instrumentId.includes('guitar') || instrumentId.includes('bass') || instrumentId.includes('string')) {
    return { category: 'strum_friction_pluck', materialDensity: 0.7, tension: 0.7, bodyResonanceVolume: 10.0, decayTimeFactor: 2.5, harmonicRichness: 0.65 };
  }
  return { category: 'electro_acoustic_algorithmic', materialDensity: 0.5, tension: 0.5, bodyResonanceVolume: 10.0, decayTimeFactor: 2.0, harmonicRichness: 0.7 };
}
