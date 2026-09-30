/** Ordered vocabulary classifiers and calibration metadata for derived style targets. */
export const REFERENCE_TONE_RULES = [
  { pattern: /sparse|minimal|space|intimate/, tone: 'sparse / intimate / high separation' },
  { pattern: /lush|wide|warm|romantic/, tone: 'lush / warm / sustained' },
  { pattern: /dry|bright|acoustic/, tone: 'dry / close / transient-forward' },
  { pattern: /live|room|ensemble|organic/, tone: 'live-room / ensemble-forward' },
  { pattern: /sub|low-end|electronic|machine/, tone: 'controlled low-end / precise transients' },
  { pattern: /loud|aggressive|hard|metal/, tone: 'dense / aggressive / controlled sustain' },
] as const;
export const STYLE_DENSITY_PATTERNS = {
  sparse: /sparse|minimal|space|intimate|quiet|ambient/,
  dense: /dense|live-room|layered|big band|festive|wall/,
  lowHeavy: /sub|low-end|bass-forward|deep|tumbao|bass/,
  harmonicDense: /extended|maj7|9|13|chord|voicing|lush|jazz|bossa|neo-soul/,
  extendedForm: /solo|instrumental|break|bridge|mambo|descarga|guitar|requinto|horn/,
} as const;
export const STYLE_CALIBRATION_VALUES = {
  fallbackTone: 'balanced / style-forward / phrase-led',
  phraseBarsExtended: [2, 4, 8],
  phraseBarsStandard: [4, 8],
  lowDensity: { sparse: 0.46, dense: 0.72, balanced: 0.58 },
  leadSpace: { sparse: 0.70, dense: 0.44, balanced: 0.56 },
  harmonicDensity: { dense: 0.72, lowHeavy: 0.48, balanced: 0.58 },
} as const;
