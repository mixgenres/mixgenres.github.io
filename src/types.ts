export type SectionEnergy = 1 | 2 | 3 | 4 | 5;
/** Authoring vocabulary for form templates. Converted to SectionEnergy at the boundary. */
export type FormIntensity = 'low' | 'medium' | 'high' | 'peak';
export type SpotlightMode = 'auto' | 'on' | 'off';

/**
 * A part playing "in the voice of" another world. Set explicitly by the user, or
 * inferred when a part is given a pattern authored by a foreign world.
 */
export interface GuestLens {
  /** Foreign genre supplying the playing style. */
  genreId: string;
  /** Foreign style within that genre; defaults to the genre's canonical style. */
  styleId?: string;
  /** 0..1 — how far the part leans away from the host style. */
  weight: number;
  /** Set when the engine inferred the lens from a cross-world pattern choice. */
  inferred?: boolean;
  /** The pattern that triggered inference, for UI explanation. */
  viaPatternId?: string;
}

export type LensId = string;
export type Scope = 'measure' | 'phrase' | 'repetition' | 'region' | 'track' | 'relationship' | 'song';
export type Role = 
  | 'pulse'
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
  | 'electric-guitar'
  | 'bass'
  | 'keys'
  | 'piano'
  | 'sax'
  | 'trumpet'
  | 'strings'
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
  | string; // Extensible: genre packs may introduce culturally specific instrument IDs.

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
  | 'drone'
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

export type TuningSystemTag =
  | '12-tet'
  | 'maqam'
  | 'gamelan-pelog'
  | 'gamelan-slendro'
  | 'just-intonation'
  | 'raga-shruti'
  | 'xenharmonic'
  | string;

/**
 * Catalog/UI display data for groove mechanics.
 * NOTE: styleDefinitions[].grooveMechanics is catalog display data ONLY.
 * It has no effect on audio runtime. To change how a style actually sounds,
 * edit the style's RhythmGrammar in data/styles (see resolve.ts / schema.ts)
 * or the WorldContract (see contracts.ts).
 */
export interface GrooveMechanics {
  swingPercentage?: number;
  anticipationOffsetSteps?: number;
  microtimingFeel?: 'straight' | 'swung' | 'laid-back' | 'pushed' | 'rubato' | 'atrasado' | 'drunk';
  humanizeJitterMs?: number;
}

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
  /** Optional explicit behavioral vocabulary; tags remain the legacy fallback. */
  approaches?: string[];
  scopes: Scope[];
  
  roles: Role[];
  instruments?: InstrumentKind[];
  compatibleRoles?: Role[];
  compatibleInstruments?: InstrumentKind[];
  sourceLevel?: string;
  canCrossRole?: boolean;

  meter: string; // e.g. '4/4', '3/4', '6/8', '12/8'
  cycleLength: number; // in measures (usually 1 or 2)
  subdivisions: number; // e.g. 16 per measure

  onsetGrid: number[]; // 16th note indices where events hit (0..15 for 1-bar 4/4)
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
  transitionType?: import('./data/styles/contracts').TransitionType;
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
  sectionProgressions?: Partial<Record<SectionType | string, string[]>>;
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

export interface PerformanceRule {
  evaluateNote: (phrase: any, index: number, acousticState?: PhysicalPlayerState, electronicState?: ElectronicSystemState) => any[];
}

export interface DrumRule {
  evaluateStep: (step: any, stickState?: any) => any[];
}

export interface SongStyleDefinition {
  id: string;
  name: string;
  tempoRange?: [number, number];
  rhythmOverride?: RhythmFeel;
  performanceRules?: Record<string, PerformanceRule>;
  drumRules?: DrumRule;
}

export interface GenreWorld {
  id: LensId;
  name: string;
  /** Public catalog kind: a strict musical world, an umbrella family, or a fusion recipe. */
  kind?: 'world' | 'family' | 'fusion';
  promotedFrom?: string;
  strictness?: 'strict' | 'flexible' | 'open';
  homeStyleId?: string;
  family: string;
  color: string;
  description: string;
  parentId?: LensId;
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
  performanceRules?: Record<string, PerformanceRule>;
  drumRules?: DrumRule;
  styles?: Record<string, SongStyleDefinition>;
}

// Backward compatibility alias
export type LensDef = GenreWorld;
export type PatternDef = MusicalPattern;

export interface Measure {
  id: string;
  index: number;
  label?: string;
  regionId: string;
  chord: string;
  root: string;
  patternByTrack: Record<string, string>;
  patternDetailsByTrack?: Record<string, {
    patternId: string;
    styleId?: string;
    variantId?: string;
    onsetGrid: number[];
    accentProfile?: number[];
    durationGrid?: number[];
    hitTypes?: DrumHitType[];
    articulation?: string;
    variationType?: string;
    transformationApplied?: string;
  }>;
  lensIds?: string[];
  variation?: string;
  selected?: boolean;
}

export interface Track {
  id: string;
  name: string;
  role: Role;
  /** id from INSTRUMENT_CATALOG — the sound, chosen independently of the pattern */
  instrumentId?: string;
  instrument: string;
  kind: InstrumentKind;
  muted: boolean;
  solo?: boolean;
  /** Auto follows the current style's form.defaultSpotlights for this track role. */
  spotlight?: SpotlightMode;
  volume: number;
  pan?: number;
  lensIds: string[];
}

export interface Region {
  id: string;
  name: string;
  start: number;
  end: number;
  /** authored length; start/end are derived from it */
  bars?: number;
  /** section BPM override */
  bpm?: number;
  /** the progression this section cycles through */
  chords?: string[];
  /** Song-form role. Genre-specific form names live in the form registry, not in pattern category. */
  kind: SectionType | string;
  /** Stable form key for genre-aware rendering/selection. */
  formKey?: string;
  /** Short user-facing label, kept concise for touch UI. */
  formLabel?: string;
  /**
   * Derived, cached shape band. Written by `rebuild()` from `energy`; never the
   * source of truth. Retained because form templates are authored in this
   * vocabulary and `SectionShape` reads it.
   */
  intensity?: FormIntensity;
  /**
   * Authoritative section weight, 1..5. This is the single section-level dial.
   * The former `density` concept (section- and part-level) is gone; what a
   * section "weighs" is resolved by the style contract's `energyMappings`.
   */
  energy?: SectionEnergy;
  repetitionGroup?: string;
  tempoShift?: string;
  genre?: string;
  /** Resolved style for this section; when genre differs from the song, this is authoritative. */
  styleId?: string;
  worldId?: string;
}

export interface Relationship {
  id: string;
  from: string;
  to: string;
  kind: InteractionRelationship | string;
  regionId?: string;
  lensIds: string[];
  interactionRuleId?: string;
}

export interface AppliedLens {
  id: string;
  lensIds: string[];
  scope: Scope;
  targetId: string;
  trackId?: string;
  patternId?: string;
  variantId?: string;
  summary: string;
  createdAt: number;
  generatedMeasures?: number;
  selectionScore?: number;
  explanation?: string;
}

export interface Song {
  id: string;
  title: string;
  bpm: number;
  timeSignature: string;
  durationMeasures: number;
  tracks: Track[];
  measures: Measure[];
  regions: Region[];
  relationships: Relationship[];
  activeLensIds: string[];
  applied: AppliedLens[];
  preferences?: UserPatternPreference[];
  generationSeed?: number;
  styleId?: string;
  styleInfluences?: any[];
  styleOverrides?: Record<string, unknown>;
  phrasePatternCache?: Record<string, string>;
  grooveFusion?: GrooveFusionSpec;
}

export interface GrooveFusionSpec {
  /** The two (or more) genres being fused, with a weight each summing to 1. */
  members: { genreId: string; styleId?: string; weight: number }[];
  /** How the two onset grids combine, not just how parameters lerp. */
  cellStrategy: 'interleave' | 'layer' | 'alternate-by-section' | 'call-and-response';
  /** Which genre's meter/cycle wins when they conflict (fusion always needs
   *  one clock — but which parts speak which genre's rhythmic vocabulary is
   *  now negotiable per role). */
  clockGenreId: string;
  /** For call-and-response, how often (in bars) tracks alternate which genre they speak */
  rotatesEveryBars?: number;
}

export * from './types/style';


