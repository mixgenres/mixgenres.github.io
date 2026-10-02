import type { DrumHitType, GuestLens, SectionEnergy, Role, InstrumentKind, SectionType, FormIntensity, InteractionRelationship, Scope, UserPatternPreference, PatternPerformanceDetails } from '../data/schema';



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
    articulations?: string[];
    variationType?: string;
    transformationApplied?: string;
    lens?: GuestLens;
    partEnergy?: SectionEnergy;
    perf?: PatternPerformanceDetails;
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
  /** Optional physical setup and synth timbre selections within that instrument. */
  variantId?: string;
  patchId?: string;
  /** Drum-kit component addressed by the part's pattern, e.g. kick or ride. */
  kitVoice?: string;
  instrument: string;
  kind: InstrumentKind;
  muted: boolean;
  solo?: boolean;
  /** Manual foreground hint. Automatic presence and dynamics come from Section Energy. */
  volume: number;
  pan?: number;
  lensIds: string[];
}

export interface Region {
  /** Explicit musical solo; independent of this part’s display name and form label. */
  solo?: import('../data/styles/schema').SoloAssignment;
  id: string;
  name: string;
  start: number;
  end: number;
  /** authored length; start/end are derived from it */
  bars?: number;
  /** section BPM override */
  bpm?: number;
  /** Arrangement entrance schedule authored by the selected style. */
  activeInstrumentIds?: string[];
  leadInstrumentId?: string;
  tempoFeel?: string;
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
   * vocabulary and the section compiler reads it.
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
  styleInfluences?: unknown[];
  styleOverrides?: Record<string, unknown>;
  phrasePatternCache?: Record<string, string>;
}


