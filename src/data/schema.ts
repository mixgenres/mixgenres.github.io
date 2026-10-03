import type { SectionEnergy, LensId, Scope, Role, InstrumentKind, SectionType, DanceTag, GrooveMechanics } from './primitives';
export type { SectionEnergy, LensId, Scope, Role, InstrumentKind, SectionType, DanceTag, GrooveMechanics } from './primitives';


/** Authoring vocabulary for form templates. Converted to SectionEnergy at the boundary. */
export type FormIntensity = 'low' | 'medium' | 'high' | 'peak';

/** A part playing "in the voice of" another world. The lens is always explicit. */
export interface GuestLens {
  /** Foreign genre supplying the playing style. */
  genreId: string;
  /** Foreign style within that genre; defaults to the genre's canonical style. */
  styleId?: string;
  /** 0..1 — how far the part leans away from the host style. */
  weight: number;
} // Extensible: genre packs may introduce culturally specific instrument IDs.

export type PatternCategory = 
  | 'cell'
  | 'ostinato'
  | 'rolePattern'
  | 'phrasePattern'
  | 'sectionPattern'
  | 'interactionPattern'
  | 'fill'
  | 'break'
  | 'cadence'
  | 'groove'
  | 'ornament'
  | 'bass'
  | 'texture'
  | 'counterline'
  | 'motif'
  | 'pulse'
  | 'comping'
  | 'accompaniment'
  | 'lead'
  | 'synth'
  | 'transition'
  | 'polyrhythm'
  | string;

export type DrumHitType =
  | 'kick'
  | 'snare'
  | 'hat'
  | 'openHat'
  | 'clap'
  | 'rim'
  | 'ride'
  | 'crash'
  | 'tom'
  | 'cowbell'
  | 'shaker'
  | 'ghost'
  | 'heel'
  | 'toe'
  | 'slap-tapao'
  | 'quinto-slap'
  | 'conga-open'
  | 'tumba-open'
  | 'macho-slap'
  | 'macho-tap'
  | 'hembra-open'
  | 'chicharra'
  | 'strappata'
  | 'tambor'
  | 'latigo'
  | 'golpe-caja'
  | 'bellows-slap'
  | 'cluster'
  | 'chapa'
  | 'abanico'
  | 'alzapua'
  | 'rasgueado'
  | 'golpe'
  | 'mambo-bell-mouth'
  | 'cha-cha-bell'
  | string;

export type VariationType = 
  | 'ornamented'
  | 'sparse'
  | 'dense'
  | 'syncopated'
  | 'anticipated'
  | 'accentShift'
  | 'fill'
  | 'cadence'
  | 'phraseStart'
  | 'phraseEnd'
  | 'transition'
  | 'instrumentSpecific'
  | 'development'
  | 'breakdown';

export type InteractionRelationship = 
  | 'reinforce'
  | 'answer'
  | 'avoid'
  | 'anticipate'
  | 'follow'
  | 'mirror'
  | 'complement'
  | 'accentWith'
  | 'leaveSpace';

export type TuningSystemTag =
  | '12-tet'
  | 'maqam'
  | 'gamelan-pelog'
  | 'gamelan-slendro'
  | 'just-intonation'
  | 'raga-shruti'
  | 'xenharmonic'
  | string;

export type DominanceLevel = 'foundational' | 'prominent' | 'occasional' | 'rare' | 'avoid';

export interface UserPatternPreference {
  familyId?: string;
  worldId?: string;
  role?: Role;
  dominance: DominanceLevel;
  weightMultiplier: number;
}

export interface PatternVariant {
  id: string;
  parentPatternId: string;
  name: string;
  shortName?: string;
  variationType: VariationType;
  probability: number;
  description?: string;
  onsetGrid: number[]; // 16th note steps (0..15 or extended)
  /** Optional per-onset drum/perc articulation. Keeps authored rhythm from being remapped to a generic kit groove. */
  hitGrid?: DrumHitType[];
  durationGrid?: number[];
  accentProfile?: number[]; // matching onsetGrid with 0..1 accent multipliers
  velocityProfile?: number[]; // 0..1 base velocity
  microtimingOffset?: number[]; // ms or fraction of tick
  articulation?: string;
  constraints?: string[];
  events?: PatternEvent[];
}

/** A composable rhythmic or phrase event. `position` and `duration` are beats
 * in the pattern's own meter; fractional values support tuplets and pickup
 * gestures without forcing the pattern onto a fixed 16th-note grid. */
export interface PatternEvent {
  /** Player-facing directions are retained separately from DSP controls. */
  notation?: { string?: number; fret?: number; fingering?: string; stroke?: 'up' | 'down'; bowing?: 'up' | 'down'; grace?: boolean; ornament?: string; tuplet?: { actual: number; normal: number }; tieToNext?: boolean };
  /** Absolute MIDI pitches take precedence. Chord-relative register anchors
   * the root; degree retains octaves. Cents offsets are relative to the tuning. */
  pitch?: { midi?: number | number[]; cents?: number; degree?: number; semitoneOffset?: number; register?: number; voicing?: 'single' | 'chord' };
  position: number;
  duration?: number;
  kind?: 'attack' | 'rest' | 'tie' | 'sustain' | 'ghost' | 'accent' | 'ornament' | 'pickup' | 'fill';
  hitType?: DrumHitType;
  accent?: number;
  velocity?: number;
  articulation?: string;
  microtiming?: number;
  probability?: number;
  condition?: { section?: string[]; phrasePosition?: string[]; energy?: SectionEnergy[]; role?: Role | string };
  tuplet?: { actual: number; normal: number };
  polyrhythm?: { numerator: number; denominator: number; phase?: number };
  tieToNext?: boolean;
}

export interface MusicalPattern {
  id: string;
  worldId: string; // genre/catalog key; musical identity is styleIds
  styleIds?: string[];
  name: string;
  shortName?: string;
  family: string;
  category: PatternCategory;
  description: string;
  tags: string[];
  /** Optional explicit behavioral vocabulary; tags remain the compatibility fallback. */
  approaches?: string[];
  scopes: Scope[];
  
  roles: Role[];
  instruments?: InstrumentKind[];
  compatibleRoles?: Role[];
  compatibleInstruments?: InstrumentKind[];
  sourceLevel?: string;
  canCrossRole?: boolean;
  /** Engine must keep this pattern's part when thinning an arrangement. */
  essential?: boolean;

  meter: string; // e.g. '4/4', '3/4', '6/8', '12/8'
  cycleLength: number; // in measures (usually 1 or 2)
  subdivisions: number; // e.g. 16 per measure

  onsetGrid: number[]; // 16th note indices where events hit (0..15 for 1-bar 4/4)
  /** Rich style grammar; onsetGrid is retained as the legacy renderer projection. */
  events?: PatternEvent[];
  /** Optional per-onset drum/perc articulation. */
  hitGrid?: DrumHitType[];
  durationGrid?: number[]; // duration in steps
  accentProfile?: number[]; // 0..1 for each onset
  velocityProfile?: number[]; // 0..1 for each onset
  
  syncopationRating?: number; // 0..1
  anticipationOffset?: number; // steps
  swingPercentage?: number; // 0..100
  
  articulations?: string[];
  supportedEnergy?: SectionEnergy[];
  transitionType?: import('./styles/contracts').TransitionType;
  seamOnly?: boolean;
  
  phrasePosition?: ('start' | 'middle' | 'end' | 'any')[];
  sectionUsage?: SectionType[];
  
  variants: PatternVariant[];
  
  provenance?: string;
  authenticityTags?: string[];
  danceTags?: DanceTag[];
  tuningSystem?: TuningSystemTag;
  difficulty?: number;
  weight?: number;
  enabled?: boolean;
}

export interface GenreStyleDefinition {
  instrumentDialects?: Record<string, Partial<import('./styles/contracts').InstrumentDialect>>;
  harmonyModel?: string;
  bassMotion?: string;
  /** Authored playable scale identity; distinct from descriptive genre pitch labels. */
  scaleMode?: string;
  id: string;
  worldId: string;
  name: string;
  origin: string;
  era?: string;
  description: string;
  characteristicInstruments: InstrumentKind[];
  preferredMeters: string[];
  tempoRange: [number, number];
  keySubstyles: string[];
  coreConcepts: string[];
  rhythmicGrammar: string[];
  danceTags?: DanceTag[];
  tuningSystem?: TuningSystemTag;
  signatureCell?: string;
  grooveMechanics?: GrooveMechanics;
  prominentChords?: string[];
  /** Independent calibration for instrument roles, performance vocabulary,
   * pattern grammar, harmony/voicing, and the dynamic mix engine. */
  calibration?: StyleCalibration;
  sectionProgressions?: Partial<Record<SectionType | string, string[]>>;
  /** Style-authored form with changing personnel and optional tempo shifts. */
  arrangementSections?: Array<{
    key: string; label: string; kind: string; bars: number;
    intensity: 'low' | 'medium' | 'high' | 'peak';
    instruments: string[]; leadInstrumentId?: string; bpm?: number; tempoFeel?: string;
    soloInstrumentId?: string; soloMode?: import('./styles/schema').SoloMode;
  }>;
}

export interface StyleCalibration {
  instrumentTechniques?: Record<string, string[]>;
  roles: Record<string, { preferredInstruments: string[]; required?: boolean; register?: [number, number]; mixFunction?: string }>;
  techniques: Record<string, string[]>;
  /** Flat rows: one technique mapping with its valid performance context. */
  techniqueMappings?: Array<{
    technique: string; instruments: string[]; roles: string[]; registers?: Array<[number, number]>;
    minDurationBeats: number; maxDensityPerBar: number;
    phrasePositions: string[]; transitionUse: boolean; intensity: [number, number];
  }>;
  techniqueScopes?: Partial<Record<string, Array<'note' | 'motif' | 'phrase' | 'section' | 'song'>>>;
  patterns: { families: string[]; interaction?: string[]; phraseBehaviors?: string[]; forbidden?: string[];
    mappedFamilies?: Array<{ name: string; category: PatternCategory; roles: string[]; instruments: string[]; context: 'note' | 'phrase' | 'section' }> };
  harmony: {
    pitchSystem: string;
    scales: string[];
    chordQualities: string[];
    progressionExamples?: string[][];
    harmonicRhythm: string;
    cadences: string[];
    bassChordInteraction: string;
    requiresChords?: boolean;
    preferredVoicingTones?: [number, number];
    voicingTonesByRole?: Record<string, [number, number]>;
    /** Preferred simultaneous pitch count. This is a style/instrument target, not a chord-size cap. */
    voicingDensity?: { min: number; max: number };
    voicingDensityByInstrument?: Record<string, { min: number; max: number }>;
    chordFamilyWeights?: Record<string, number>;
    borrowedHarmony?: string[];
    substitutions?: string[];
    voiceLeading?: string[];
    pedalDroneBehavior?: string;
  };
  mix: import('./sound/schema/dynamicMix').MixOverride<import('./sound/schema/dynamicMix').MixContract>;
}

export interface PhysicalPlayerState {
  // Breath / Wind
  lungCapacity: number; // 1.0 (full) to 0.0 (empty)
  timeSinceLastBreath: number;
  
  // Fatigue / Mechanics
  stamina: number; // 1.0 to 0.0 (drops during high-speed/high-velocity passages)
  
  // Biomechanics & Hand Travel
  lastHandPositionPitch: number; // Pitch of the last played note
  actuationSyncErrorMs: number; // Disconnect between Left Hand and Right Hand
  
  // Phrasing
  phraseArcPosition: number; // 0.0 (start of phrase) to 1.0 (end of phrase)
}

export interface ElectronicSystemState {
  // DAW / Hardware Physics Tracker
  lastVoltagePitch: number; // For calculating precise Portamento/Glide times
  thermalAnalogDrift: number; // Free-running LFO for analog pitch instability
  globalSidechainDuckAmount: number; // Currently active gain reduction from the Kick Drum
}

export interface RhythmFeel {
  syncopation: number;
  swing: number;
  pocket?: 'ahead' | 'center' | 'behind' | 'drunk' | 'strict_grid'; // Electronic uses strict_grid
  pocketDepth?: number; // How many milliseconds off the grid (e.g., 10ms to 40ms)
  intonationSystem?: 'equal' | 'just_intonation' | 'expressive_melodic';
  quantizeJitterMs?: number; // MPC/MIDI clock jitter
}

export interface DrumRuleStep {
  kick?: boolean;
  snare?: boolean;
  hihat?: boolean;
  isOpen?: boolean;
  isPedal?: boolean;
  ghosts?: Array<{ velocity: number; time: number }>;
  velocity: number;
  time: number;
}

export interface DrumRuleStickState {
  lastSnareHitTime?: number;
}

export interface DrumRuleEvent {
  type: string;
  velocity: number;
  time: number;
  timbreControl?: unknown;
}

export interface DrumRule {
  evaluateStep?: (step: DrumRuleStep, stickState?: DrumRuleStickState) => DrumRuleEvent[];
}

export interface SongStyleDefinition {
  id: string;
  name: string;
  tempoRange?: [number, number];
  rhythmOverride?: RhythmFeel;
  drumRules?: DrumRule;
}

export interface GenreWorld {
  id: LensId;
  name: string;
  /** Public catalog kind: a strict musical world, an umbrella family, or a fusion recipe. */
  kind?: 'world' | 'family' | 'fusion';
  strictness?: 'strict' | 'flexible' | 'open';
  homeStyleId?: string;
  /** Only folder-local, authored catalog generations are public runtime worlds. */
  catalogGeneration?: 'genre-style-map-v1';
  family: string;
  color: string;
  description: string;
  level: 'world' | 'family' | 'substyle' | 'artist' | 'cross-world';
  styleDefinitions: GenreStyleDefinition[]; // catalog-only style definition; never consulted by musical runtime
  substyles: string[];
  artists: string[];
  concepts: string[];
  roles: Partial<Record<Role, string[]>>;
  patterns: MusicalPattern[];
  tuningSystem?: TuningSystemTag;
  signatureCell?: string;
  grooveMechanics?: GrooveMechanics;
  prominentChords?: string[];
  crossLinks?: string[];
  rhythm?: RhythmFeel;
  drumRules?: DrumRule;
  styles?: Record<string, SongStyleDefinition>;
}

// Backward compatibility alias
export type LensDef = GenreWorld;
export type PatternDef = MusicalPattern;

export interface PatternPerformanceDetails {
  notations?: Array<PatternEvent['notation']>;
  pitches?: Array<PatternEvent['pitch']>;
  stepsPerBar: number;
  onsets: number[];
  accents: number[];
  velocities: number[];
  durations: number[];
  hitTypes: string[];
  articulations?: string[];
  microtiming: number[];
  fractionalPositions: number[];
  durationsAuthored: boolean;
}

export type SamplerTimbreControl = Record<string, unknown>;
