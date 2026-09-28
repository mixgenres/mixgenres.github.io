import { INSTRUMENTS_BY_ID } from '../../data/instruments';

/**
 * THE PLUGGABLE LUTHIER API
 * =========================
 * Maps instruments to physical wave, mesh, friction, and waveguide models.
 * Provides deterministic physical instrument models for the shared renderer.
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
  const profile = def?.luthierPhysics ?? LUTHIER_INSTRUMENT_MAP[instrumentId];
  if (profile) return profile;

  throw new Error(
    `UNRESOLVED_MUSICAL_IDENTITY_ERROR: no physical Luthier profile for instrument "${instrumentId}". ` +
    `Author a catalog definition and physical model before rendering.`
  );
}
