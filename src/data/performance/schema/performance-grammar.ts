export type PerformanceAspect =
  | 'timeline'
  | 'cycle'
  | 'subdivision'
  | 'accent'
  | 'density'
  | 'articulation'
  | 'phraseDevelopment'
  | 'interaction'
  | 'microtiming'
  | 'pitchDecoration';

export interface PerformanceInfluence {
  sourceStyleId: string;
  weight: number;
  aspects?: Partial<Record<PerformanceAspect, number>>;
}

export interface PhraseDevelopmentProbabilities {
  repeatProbability: number;
  variationProbability: number;
  answerProbability: number;
  fillProbability: number;
  restProbability: number;
  cadenceProbability: number;
}

export interface MicrotimingPolicy {
  amount: number;
  tendency?: 'straight' | 'laid-back' | 'pushed' | 'swung' | 'rubato' | string;
}

export interface PerformanceGrammar {
  worldId?: string;
  styleId?: string;

  /** Target density bounds (attacks per bar) by role. */
  densityByRole?: Record<string, {
    min: number;
    max: number;
  }>;

  /** Permitted subdivision fractions/steps (e.g. [1, 2, 4] for 16th/8th/quarter subdivisions) by role. */
  subdivisionVocabulary?: Record<string, number[]>;

  /** Permitted variation types (e.g. ['sparse', 'dense', 'syncopated', 'pickup', 'answer']) by role. */
  variationVocabulary?: Record<string, string[]>;

  /** Style-authorized articulations by role. */
  articulationVocabulary?: Record<string, string[]>;

  /** Phrasing transition probabilities. */
  phraseDevelopment?: PhraseDevelopmentProbabilities;

  /** Allowed ensemble interaction behaviors (e.g. ['reinforce', 'answer', 'leaveSpace']). */
  interactionVocabulary?: Record<string, string[]>;

  /** 0..1 scale of how strictly authored rhythm is preserved vs varied (1 = strict). */
  preserveAuthoredRhythm: number;

  /** 0..1 scale of how readily the performer may insert derived attacks (e.g. ghosts, subdivisions). */
  allowDerivedAttacks: number;

  /** 0..1 scale of whether the performer may derive pitch (e.g. fifths, octaves, scalar steps) vs playing authored. */
  allowDerivedPitch: number;

  /** 0..1 scale of allowing guest subdivisions in hybrid contexts without breaking host timeline. */
  allowCrossStyleSubdivision: number;

  /** Cultural/genre negative constraints (e.g. ['walking-bass', 'bass', 'swung-eighths', 'western-backbeat']). */
  forbiddenInterpretations?: string[];

  /** Style-grounded microtiming tendencies. */
  microtiming?: {
    amount: number;
    tendency?: 'straight' | 'laid-back' | 'pushed' | 'swung' | 'rubato' | string;
  };
}

