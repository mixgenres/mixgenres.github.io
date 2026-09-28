import type { GenreWorld, MusicalPattern, Track, Measure, Region, Relationship, AppliedLens, Song, GuestLens, SectionEnergy, FormIntensity, SpotlightMode, Scope, Role, InstrumentKind, PatternCategory, DrumHitType, VariationType, InteractionRelationship, SectionType, DanceTag, TuningSystemTag, GrooveMechanics, DominanceLevel, UserPatternPreference, PatternVariant, GenreStyleDefinition } from '../types';

export interface ExpressiveModulation {
  depth: number;
  rate: number;
  delay?: number;
  slideSpeed?: number;
  wowAndFlutter?: number;
}

export interface AcousticSpace {
  roomSize?: number;
  hfDamping?: number;
  preDelay?: number;
  mixAmount?: number;
  analogWarmth?: number;
  sidechainDucking?: number;
  eqCurve?: {
    low?: number;
    midFreq?: number;
    mid?: number;
    high?: number;
  };
}

export interface ExtendedGenreWorld extends GenreWorld {
  expressiveModulation?: Record<string, ExpressiveModulation>;
  acousticSpace?: AcousticSpace;
  formStructure?: string[];
  energyCurve?: Record<string, number>;
  melodicIdioms?: {
    scaleChoice: string;
    intervalLeaps: string;
    phraseEndings: string;
    syncopationDensity: number;
  };
  foleyAndTextures?: string[];
  idiomaticProgressions?: string[][];
  culturalHarmony?: {
    tensionBoost?: number;
    dynamicSwell?: number;
    voicingRule?: string;
  };
  microTiming?: {
    strumSpeed?: number;
    instrumentRoles?: Record<string, string>;
  };
  rhythmicPatterns?: Record<string, string>;
  timbrePalette?: Record<string, string>;
}

export type {
  GenreWorld,
  MusicalPattern,
  Track,
  Measure,
  Region,
  Relationship,
  AppliedLens,
  Song,
  GuestLens,
  SectionEnergy,
  FormIntensity,
  SpotlightMode,
  Scope,
  Role,
  InstrumentKind,
  PatternCategory,
  DrumHitType,
  VariationType,
  InteractionRelationship,
  SectionType,
  DanceTag,
  TuningSystemTag,
  GrooveMechanics,
  DominanceLevel,
  UserPatternPreference,
  PatternVariant,
  GenreStyleDefinition,
};
