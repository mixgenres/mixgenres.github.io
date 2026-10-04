/** Explicit shared post-composition targets; these do not infer musical style. */
export const STYLE_CALIBRATION_VALUES = {
  fallbackTone: 'balanced / style-forward / phrase-led',
  phraseBarsExtended: [2, 4, 8],
  phraseBarsStandard: [4, 8],
  lowDensity: { sparse: 0.46, dense: 0.72, balanced: 0.58 },
  leadSpace: { sparse: 0.70, dense: 0.44, balanced: 0.56 },
  harmonicDensity: { dense: 0.72, lowHeavy: 0.48, balanced: 0.58 },
} as const;
