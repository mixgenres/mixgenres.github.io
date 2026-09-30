import type { PerformanceGrammar, PhraseDevelopmentProbabilities } from './schema/performance-grammar';

export const DEFAULT_PHRASE_DEVELOPMENT: PhraseDevelopmentProbabilities = {
  repeatProbability: 0.45,
  variationProbability: 0.28,
  answerProbability: 0.12,
  fillProbability: 0.08,
  restProbability: 0.04,
  cadenceProbability: 0.03,
};

export const DEFAULT_PERFORMANCE_GRAMMAR: PerformanceGrammar = {
  densityByRole: {
    motor: { min: 4, max: 16 },
    bass: { min: 2, max: 8 },
    comp: { min: 2, max: 8 },
    harmony: { min: 2, max: 8 },
    pad: { min: 1, max: 4 },
    texture: { min: 1, max: 6 },
    lead: { min: 2, max: 12 },
    melody: { min: 2, max: 12 },
    drums: { min: 4, max: 16 },
    percussion: { min: 4, max: 16 },
    accent: { min: 1, max: 4 },
  },
  subdivisionVocabulary: {
    motor: [1, 2],
    bass: [1, 2],
    comp: [1, 2],
    lead: [1, 2, 4],
    melody: [1, 2, 4],
    drums: [1, 2],
    percussion: [1, 2],
  },
  variationVocabulary: {
    motor: ['sparse', 'dense'],
    bass: ['sparse', 'syncopated', 'anticipated'],
    comp: ['sparse', 'syncopated'],
    lead: ['ornamented', 'development'],
    melody: ['ornamented', 'development'],
    drums: ['sparse', 'dense', 'fill'],
    percussion: ['sparse', 'dense', 'fill'],
    texture: ['sparse', 'development'],
  },
  phraseDevelopment: DEFAULT_PHRASE_DEVELOPMENT,
  preserveAuthoredRhythm: 0.88,
  allowDerivedAttacks: 0.22,
  allowDerivedPitch: 0.25,
  allowCrossStyleSubdivision: 0.15,
  forbiddenInterpretations: [],
  microtiming: {
    amount: 0.02,
    tendency: 'straight',
  },
};

