export type InstrumentFamily =
  | 'bellows-and-keys' | 'plucked' | 'bowed' | 'winds' | 'brass' | 'voice'
  | 'hand-drums' | 'metal-and-wood' | 'kit' | 'electronic'
  | 'free-reed' | 'plucked-string' | 'body-percussion';

export interface DrumVoice { low: number; mid: number; high: number; }

import type { LuthierModelCategory } from './luthier';

export interface LuthierPhysicsProfile {
  category: LuthierModelCategory;
  materialDensity: number;
  tension: number;
  bodyResonanceVolume: number;
  decayTimeFactor: number;
  harmonicRichness: number;
  transientSharpness?: number;
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
  damping?: number;
  excitationSaturation?: 'self-owned' | 'generic' | 'none';
}

export interface AcousticProfile {
  sustain: 'decaying' | 'sustained' | 'blown' | 'short' | 'percussive';
  role?: 'bass' | 'harmony' | 'melody' | 'rhythm' | 'pad' | 'percussion' | 'lead' | 'comp' | 'perc' | 'effect';
  centre: number;
  low: number;
  high: number;
  pan: number;
  trim: number;
  space: number;
  ring: number;
  ensembleSmearMs?: number;
  letRingAcrossSections?: boolean;
}

import type { AcousticFormantProfile } from './formant-profile';
import type { BowedResonanceProfile } from './bowed-resonance';
export type { FormantBand, AcousticFormantProfile } from './formant-profile';
export type { BowedResonanceProfile } from './bowed-resonance';

export interface InstrumentKitComponent {
  id: string;
  name: string;
  midi: number;
  physicalType: 'membrane' | 'metal' | 'wood' | 'shell' | 'shaker' | 'effect';
  tuningHz?: number;
  pitchOffsetSemitones?: number;
  decayTimeSec?: number;
  damping?: number;
  shellResonance?: number;
  strikeZones?: ('center' | 'edge' | 'rim' | 'bell' | 'bow' | 'choke' | 'open' | 'closed' | 'slap' | 'tip' | 'bass')[];
  defaultPan?: number;
  gainTrimDb?: number;
  synthesisNotes?: string;
}

export interface PhysicalPerformanceArticulations {
  marcato?: {
    decayTimeSec: number;
    transientSharpness: number;
  };
  arrastre?: {
    preBeatOffsetMs: number;
    pitchDragSemitones: number;
    pressureRamp: boolean;
    velocityGrowth: number;
  };
  rasgueado?: {
    burstNotes: number;
    spreadMs: number;
    directionPattern?: ('down' | 'up')[];
    nailTransientSharpness?: number;
  };
  golpe?: {
    bodyTapPitchHz: number;
    transientDecayMs: number;
    gainDb?: number;
  };
  slap?: {
    transientSharpness: number;
    dampingFactor: number;
    openToneGainDb?: number;
    popOctaveSnap?: boolean;
  };
  mute?: {
    dampingFactor: number;
    cutoffFreqHz: number;
    decayTimeSec: number;
  };
  choke?: {
    dampReleaseMs: number;
  };
  bend?: {
    maxSemitones: number;
    speedMs: number;
    curve: 'exponential' | 'linear' | 's-curve';
  };
  vibrato?: {
    rateHz: number;
    depthCents: number;
    onsetDelayMs: number;
  };
  pizzicato?: {
    damping: number;
    pluckHardness: number;
  };
}

export interface TuningAndMechanics {
  openStrings?: Array<{ name: string; note: string; midi: number; frequencyHz: number }>;
  courses?: number;
  frets?: number;
  tuningName?: string;
  keyRange?: { lowNote: string; highNote: string; lowMidi: number; highMidi: number };
}

/**
 * Finite Exciters & Respiration parameters for continuous physical motion.
 */
export interface FiniteExciters {
  /** Maximum continuous airflow before a breath is required. Unit: Liters (L). */
  lungCapacityLiters?: number;
  /** The physical length of the bow, dictating maximum sustained time before a bow change. Unit: centimeters (cm). */
  bowLengthCm?: number;
  /** Time penalty/audio gap caused by reversing the direction of a bow or bellows. Unit: milliseconds (ms). */
  directionReversalGapMs?: number;
  /** Variance applied to the attack transient depending on whether it is an Up-bow or Down-bow. Unit: Ratio multiplier (0.5..1.5). */
  upBowTransientModifier?: number;
}

/**
 * Percussive Kinematics governing sticking rebound and hand variance.
 */
export interface PercussiveKinematics {
  /** How much the playing surface pushes the stick back. High = Snare, Low = Floor Tom. Unit: Ratio (0..1). */
  reboundCoefficient?: number;
  /** The micro-timing and velocity variance between a player's dominant and non-dominant hand. */
  limbVariance?: {
    /** Micro-timing jitter for non-dominant hand. Unit: milliseconds (ms). */
    timingJitterMs: number;
    /** Velocity drop factor for non-dominant hand. Unit: normalized ratio (0..1). */
    velocityDropFactor: number;
    /** The slight difference in strike zone (pan/timbre) between left and right sticks. Unit: normalized ratio (0..1). */
    timbreVarianceFactor: number;
  };
  /** Support for rudimental sticking logic (e.g., preventing machine-gunning by alternating L/R). */
  rudimentLogic?: 'strict-alternate' | 'rebound-doubles' | 'free-hands';
}

/**
 * Biomechanics and Kinematics Domain Interface.
 * Models physical hand movement, finger allocation ergonomics, muscular velocity fatigue, finite exciters, and percussive sticking.
 */
export interface BiomechanicsAndKinematics {
  /** Average travel time per fret distance across a fretboard (ms/fret). Unit: milliseconds (ms). */
  handTravelTimeMsPerFret?: number;
  /** Physical velocity rate of hand position shifts across fretboard or drumkit targets. Unit: millimeters per millisecond (mm/ms). */
  handTravelRateMmPerMs?: number;
  /** Maximum comfortable reach/jump distance across targets before requiring a full arm position shift. Unit: millimeters (mm). */
  maxJumpDistanceMm?: number;
  /** Base latency penalty incurred when performing a full arm/hand position shift. Unit: milliseconds (ms). */
  positionShiftPenaltyMs?: number;

  /** Total number of performing hands allocated to this instrument (e.g. 1 or 2). */
  handCount?: number;
  /** List of active digits utilized during performance (e.g., thumb, index, middle, ring, pinky). */
  activeFingers?: ('thumb' | 'index' | 'middle' | 'ring' | 'pinky')[];
  /** Maximum comfortable fret span between finger 1 and finger 4 without shifting hand position. Unit: frets. */
  fingerReachFrets?: number;
  /** Maximum pinching/gripping force exertable by thumb against neck or frame. Unit: Newtons (N). */
  thumbPincerForceN?: number;
  /** Time cost or savings when alternating fingers versus repeating strikes with the same digit. Unit: milliseconds (ms). */
  strokeAlternationPenaltyMs?: number;

  /** Maximum biomechanical actuation frequency per digit or limb. Unit: Hertz (Hz). */
  maxActuationHz?: number;
  /** Rate of physical muscle fatigue accumulation during sustained high-speed actuation. Unit: normalized ratio per second (0..1 / s). */
  fatigueAccumulationRate?: number;
  /** Exponential recovery time constant for muscle relaxation and force restoration. Unit: seconds (s). */
  recoveryTimeConstantSec?: number;
  /** Actuation rate threshold above which anaerobic muscular fatigue begins accumulating rapidly. Unit: Hertz (Hz). */
  lacticThresholdHz?: number;

  /** Finite physical limits for continuous physical motion (respiration, bow length). */
  finiteExciters?: FiniteExciters;
  /** Sticking rebound mechanics, hand variance, and rudiment logic for percussion. */
  percussiveKinematics?: PercussiveKinematics;
}

/**
 * Transition Mechanics Domain.
 * Governs the physical reality of moving from one note to another without restriking.
 */
export interface TransitionMechanics {
  /** Supported legato transition modes between consecutive notes. */
  legatoModes: Array<'hammer-on' | 'pull-off' | 'slide' | 'lip-slur' | 'valve-cross' | 'glissando'>;
  /** Friction noise generated when sliding fingers across wound strings. Unit: Gain multiplier ratio (0..1). */
  stringSlideFrictionNoise?: number;
  /** The time it takes for a brass/woodwind valve or key to physically close. Unit: milliseconds (ms). */
  valveActuationTimeMs?: number;
  /** Transient noise generated by the physical closing of a pad or valve. Unit: Gain multiplier ratio (0..1). */
  mechanicalKeyClickLevel?: number;
  /** Pitch behavior during a portamento/slide (e.g., discrete fret-stepping vs. continuous fretless slide). */
  portamentoCurve?: 'stepped-chromatic' | 'continuous-linear' | 'continuous-exponential';
}

/**
 * Environmental Reactivity & Mechanical Chaos.
 * Models how the instrument drifts out of tune and reacts to temperature/humidity room dynamics.
 */
export interface EnvironmentalReactivity {
  /** How much the tuning drifts per degree Celsius change (e.g., Brass goes sharp, strings go flat). Unit: Cents per °C. */
  tuningTemperatureCoefficientCents?: number;
  /** Natural variance in tuning stability over time based on string age or physical settling. Unit: Cents. */
  randomTuningDriftCents?: number;
  /** Likelihood of a "cracked" or "split" note when overblowing brass/winds. Unit: Ratio (0..1). */
  harmonicSplitProbability?: number;
}

/**
 * Spatial Radiation & Microphones.
 * Models how frequencies project from the instrument in 3D space and interact with virtual mics.
 */
export interface SpatialRadiation {
  /** The physical 3D dispersion shape of the radiating acoustic soundfield. */
  radiationPattern: 'omnidirectional' | 'cardioid' | 'figure-8' | 'dipole' | 'complex-frequency-dependent';
  /** Low frequencies project spherically, while highs project directionally above this threshold. Unit: Hertz (Hz). */
  directionalCutoffHz?: number;
  /** Idealized stereo microphone positions for capturing this instrument in virtual space. */
  defaultMicrophoneArray?: {
    /** Stereophonic microphone placement technique. */
    technique: 'XY' | 'AB-Spaced' | 'Mid-Side' | 'Close-Plus-Room';
    /** Distance from the instrument's acoustic center. Unit: meters (m). */
    distanceMeters: number;
    /** Angle offset from the primary radiating axis. Unit: degrees (°). */
    offAxisDegrees: number;
  };
}

/**
 * Acoustic Interactions Domain Interface.
 * Models sympathetic energy transfer across strings/drums and non-linear physical collisions.
 */
export interface AcousticInteractions {
  /** Sympathetic resonance matrix parameters governing cross-talk between open strings, heads, or soundboards. */
  sympatheticResonanceMatrix?: {
    /** Global inter-string / inter-drum energy transfer coupling coefficient. Unit: normalized ratio (0.0 to 1.0). */
    couplingFactor: number;
    /** Sharpness and quality factor (Q) of sympathetic resonance peak. Unit: Q factor ratio (dimensionless, typically 20 - 300). */
    qFactor: number;
    /** Harmonic coupling rules between specific vibrating elements (e.g. unison, octave, fifth ratios). */
    nodeCoupling?: Array<{ sourceIndex: number; targetIndex: number; energyTransferRatio: number; harmonicRatio: number }>;
    /** Inter-shell acoustic coupling factor for multi-drum setups (e.g., rack to floor tom cross-talk). Unit: ratio (0.0 to 1.0). */
    drumheadInteractions?: number;
  };

  /** Non-linear collision dynamics, including string-to-fret buzz and drumhead/body impacts. */
  nonLinearCollisions?: {
    dynamicFretBuzz?: {
      /** Peak-to-peak string excursion amplitude threshold triggering fret collisions. Unit: millimeters (mm). */
      stringExcursionThresholdMm: number;
      /** Resting clearance distance between string and fret crown. Unit: millimeters (mm). */
      clearanceDistanceMm: number;
      /** High-frequency harmonic excitation multiplier during fret impact. Unit: multiplier ratio (1.0 to 5.0). */
      buzzHarmonicRichness: number;
      /** Rate at which fret collisions dampen string kinetic energy. Unit: damping factor ratio per collision (0.0 to 1.0). */
      decayTruncationFactor: number;
    };
    bodyImpactThreshold?: {
      /** Minimum impact force required to trigger slap or wood collision transients. Unit: Newtons (N). */
      slapCollisionForceN: number;
      /** Coefficient of restitution governing string or hand rebound from body/fretboard. Unit: ratio (0.0 to 1.0). */
      bodyReboundCoefficient: number;
    };
  };
}

/**
 * Continuous Exciter Domain Interface.
 * Models continuous physical drivers (bowing, bellows, cranking) and MPE expressivity.
 */
export interface ContinuousExciter {
  /** MIDI Polyphonic Expression (MPE) mapping parameters. */
  mpeExpressivity?: {
    /** Pitch bend range limit for continuous glide articulation. Unit: semitones (e.g. ±48 semitones). */
    pitchBendRangeSemitones: number;
    /** Parameter destination for MPE Channel Pressure / Aftertouch. */
    pressureMapping: 'brightness' | 'bow-pressure' | 'bellows-force' | 'filter-cutoff' | 'drive' | 'volume';
    /** Parameter destination for MPE Timbre / Y-Axis expression. */
    timbreParameter: 'pluck-position' | 'overtone-richness' | 'embouchure' | 'wah' | 'resonance';
  };

  /** Continuous physical driver states. */
  continuousState?: {
    /** Continuous bowing force applied to string. Unit: Newtons (N, range 0.1 N to 5.0 N). */
    bowPressureN?: number;
    /** Relative contact position from bridge (0.00 = bridge/sul ponticello, 0.50 = fingerboard/sul tasto). Unit: normalized ratio (0.0 to 1.0). */
    bowPositionRatio?: number;
    /** Mass and pneumatic resistance momentum of bellows. Unit: kilograms (kg). */
    bellowsInertiaKg?: number;
    /** Continuous air volume consumption rate. Unit: Liters per minute (L/min). */
    airflowRateLitersPerMin?: number;
    /** Rotational wheel speed on hurdy-gurdy or cranked instruments. Unit: Revolutions Per Minute (RPM). */
    hurdyGurdyCrankRpm?: number;
    /** Angular acceleration of crank drive wheel. Unit: Radians per second squared (rad/s²). */
    crankAngularAcceleration?: number;
  };

  /** Secondary non-linear excitation thresholds. */
  secondaryThresholds?: {
    /** Crank wheel velocity threshold required to trigger the trompette buzzing bridge (chien/dog). Unit: Revolutions Per Minute (RPM). */
    trompetteBuzzThresholdRpm?: number;
    /** Transient noise and harmonic boost gain of buzzing bridge when engaged. Unit: normalized ratio (0.0 to 1.0). */
    trompetteBuzzIntensity?: number;
    /** Vector of excitation levels required to jump into higher acoustic overtone registers (overblowing). Unit: Array of threshold values in Newtons (N) or L/min. */
    overtoneModeThresholds?: number[];
  };
}

/**
 * Microtonal Tuning Domain Interface.
 * Models non-12-TET tuning systems, Just Intonation ratios, cent offsets, and non-Western scale maps.
 */
export interface MicrotonalTuning {
  /** Name of microtonal tuning or scale system (e.g. 12-TET, Just-Intonation, 24-EDO, Arabic-Maqam, Indian-Raga, Gamelan-Pelog). */
  systemName: string;
  /** Fundamental reference pitch for A4 or tonic pitch center. Unit: Hertz (Hz, default 440.0 Hz). */
  referencePitchHz: number;
  /** MIDI note number designated as scale tonic or pitch center (e.g., 60 = C4). */
  tonicMidi: number;

  /** Fine-grained cent offsets relative to standard 12-TET for MIDI notes 0..127 or scale degrees. Unit: Cents (-100.0 to +100.0 cents). */
  centOffsetsPerMidi?: Record<number, number>;
  /** Direct frequency override mapping from MIDI note numbers (0..127) to absolute Hz frequencies. Unit: Hertz (Hz). */
  frequencyMapHz?: Record<number, number>;
  /** Array of exact integer frequency ratios representing scale degrees in Just Intonation (e.g., ["1/1", "9/8", "5/4", "4/3", "3/2", "5/3", "15/8"]). */
  justRatios?: string[];
  /** Flag or vector defining 50-cent quarter-tone microtonal divisions (e.g. 24-EDO). */
  quartertoneSteps?: boolean;
}

export type ExcitationModel =
  | 'plucked-string' | 'bowed-string' | 'struck-string' | 'blown-reed'
  | 'blown-air' | 'lip-reed' | 'membrane' | 'metal-impact'
  | 'sample-playback' | 'subtractive-synth' | 'fm-synth' | 'wavetable'
  | 'voice-source' | 'noise-source' | 'hybrid';

export interface PhysicalModelProfile {
  model: ExcitationModel;
  /** Physical parameters are normalized 0..1 unless otherwise noted. */
  parameters: {
    stiffness?: number; damping?: number; inharmonicity?: number;
    bodyResonance?: number; airResonance?: number; membraneModes?: number[];
    membraneTension?: number; membraneDamping?: number;
    pickupPosition?: number; pickupDistance?: number; pickupResponse?: 'magnetic' | 'piezo' | 'microphone' | 'none';
    nonlinearDrive?: number; saturation?: number; bowPressure?: number; bowSpeed?: number;
    pluckPosition?: number; pluckHardness?: number; reedStiffness?: number; breathNoise?: number;
    transientSharpness?: number; noiseAmount?: number; stereoWidth?: number;
  };
  signalChain: Array<'preamp' | 'eq' | 'compressor' | 'distortion' | 'filter' | 'chorus' | 'delay' | 'reverb' | 'cabinet' | 'tape' | 'spring' | 'dub-send'>;
  synthesisNotes: string[];
}

export interface ArticulationModel {
  id: string;
  method: string;
  synthesis: 'physical' | 'sample' | 'hybrid' | 'event';
  parameters: Record<string, number | string | boolean>;
  genreUse?: Record<string, string[]>;
}

export interface InstrumentTechniqueProfile {
  /** Canonical articulation ids this instrument can realize meaningfully. */
  articulations: string[];
  /** Human performance methods used to obtain the sound. */
  techniqueMethods: string[];
  /** Playing contexts/styles in which these methods are idiomatic. */
  playingStyles: string[];
  /** Optional genre/style-specific articulation preferences. */
  genreTechniques?: Record<string, string[]>;
  articulationMetadata?: Record<string, { onsetShape?: string; envelope?: string; velocityCurve?: string; pitchBehavior?: string; noiseComponent?: number; }>;
}

export interface InstrumentDef {
  id: string;
  name: string;
  family: InstrumentFamily;
  drum?: DrumVoice;
  kit?: boolean;
  octave?: number;
  voicing: 'single' | 'chord' | 'bass' | 'unpitched';
  note?: string;
  courses?: number;
  bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric' | 'metal-shell' | 'brass-tube';
  excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow';
  sympatheticStrings?: boolean;

  acousticProfile?: AcousticProfile;
  luthierPhysics?: LuthierPhysicsProfile;
  elementaryModel?: number;
  makeupGain?: number;
  polyphony?: number;
  formantProfile?: AcousticFormantProfile;
  bowedResonance?: BowedResonanceProfile;
  tuningAndMechanics?: TuningAndMechanics;
  kitComponents?: InstrumentKitComponent[];
  performanceArticulations?: PhysicalPerformanceArticulations;

  /** Biomechanical & Kinematic performance limits, finite exciters, and percussive sticking rebound. */
  biomechanicsAndKinematics?: BiomechanicsAndKinematics;
  /** Governs the physics of connecting notes (slides, hammer-ons, slurs, valve actuation). */
  transitionMechanics?: TransitionMechanics;
  /** Governs tuning drift, temperature reactivity, and mechanical chaos. */
  environmentalReactivity?: EnvironmentalReactivity;
  /** Governs 3D sound dispersion and virtual microphone techniques. */
  spatialRadiation?: SpatialRadiation;
  /** Acoustic interactions including sympathetic resonance and fret/body collisions. */
  acousticInteractions?: AcousticInteractions;
  /** Continuous exciter state, MPE expressivity, and secondary non-linear thresholds. */
  continuousExciter?: ContinuousExciter;
  /** Microtonal tuning, Just Intonation ratios, and non-Western scale mappings. */
  microtonalTuning?: MicrotonalTuning;

  techniques: InstrumentTechniqueProfile;
  physicalModel?: PhysicalModelProfile;
  /** First-class instrument physics used by the live/offline renderer. */
  dspProfile?: import('../../sound/schema/dsp-profile').InstrumentDSPProfile;
  articulationModels?: ArticulationModel[];
  /** Style-level performance constraints and idiomatic patterns. */
  genrePerformanceProfiles?: Record<string, { role: string; articulations: string[]; patternRules: string[]; forbidden?: string[] }>;
}
