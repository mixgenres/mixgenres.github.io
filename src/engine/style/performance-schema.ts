import { REFERENCE_TONE_RULES, STYLE_CALIBRATION_VALUES, STYLE_DENSITY_PATTERNS } from '../../data/styles/calibrationRules';
import type { SongStyle } from '../../data/styles/schema';
import { REFERENCE_SETS } from '../../data/styles/referenceSets';
import { getStyle } from './registry';
import { profileForStyle, type StyleSongProfile } from './profiles';
import { genreDialectTarget } from '../lookup/performance';
import type { GenreDialectTarget } from '../../data/performance/genreDialectTargets';

export interface StyleCalibrationTarget extends GenreDialectTarget {
  styleId: string;
  styleName: string;
  genreId: string;
  referenceSongs: string[];
  referenceSong: string;
  referenceTone: string;
  instrumentPalette: string[];
  preferredProgression: string[];
  signatureCell: string;
  arrangementCues: string[];
  contourCues: string[];
  production: string;
  phraseBars: number[];
  targetLowDensity: number;
  targetLeadSpace: number;
  targetHarmonicDensity: number;
}

// Five references per musical world. A style selects one reference deterministically,
// so sibling styles in the same genre do not all inherit the same sonic target.


function hash(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) h = Math.imul(h ^ value.charCodeAt(i), 16777619);
  return h >>> 0;
}

function toneFor(style: StyleSongProfile, styleName: string): string {
  const text = `${styleName} ${style.feel ?? ''} ${style.production}`.toLowerCase();
  return REFERENCE_TONE_RULES.find(rule => rule.pattern.test(text))?.tone ?? STYLE_CALIBRATION_VALUES.fallbackTone;
}

function deriveTarget(style: StyleSongProfile, styleName: string): Omit<StyleCalibrationTarget, keyof GenreDialectTarget | 'styleId' | 'styleName' | 'genreId' | 'referenceSongs' | 'referenceSong'> {
  const text = `${styleName} ${style.feel ?? ''} ${style.production} ${style.signatureCell}`.toLowerCase();
  const sparse = STYLE_DENSITY_PATTERNS.sparse.test(text);
  const dense = STYLE_DENSITY_PATTERNS.dense.test(text);
  const lowHeavy = STYLE_DENSITY_PATTERNS.lowHeavy.test(text);
  const harmonicDense = STYLE_DENSITY_PATTERNS.harmonicDense.test(`${style.progressions.join(' ')} ${text}`.toLowerCase());
  const phraseBars = style.form.some(x => STYLE_DENSITY_PATTERNS.extendedForm.test(x.toLowerCase())) ? [...STYLE_CALIBRATION_VALUES.phraseBarsExtended] : [...STYLE_CALIBRATION_VALUES.phraseBarsStandard];
  return {
    referenceTone: toneFor(style, styleName),
    instrumentPalette: style.instruments,
    preferredProgression: style.progressions[0] ?? [],
    signatureCell: style.signatureCell,
    arrangementCues: style.arrangement,
    contourCues: style.contours,
    production: style.production,
    phraseBars,
    targetLowDensity: sparse ? STYLE_CALIBRATION_VALUES.lowDensity.sparse : dense ? STYLE_CALIBRATION_VALUES.lowDensity.dense : STYLE_CALIBRATION_VALUES.lowDensity.balanced,
    targetLeadSpace: sparse ? STYLE_CALIBRATION_VALUES.leadSpace.sparse : dense ? STYLE_CALIBRATION_VALUES.leadSpace.dense : STYLE_CALIBRATION_VALUES.leadSpace.balanced,
    targetHarmonicDensity: harmonicDense ? STYLE_CALIBRATION_VALUES.harmonicDensity.dense : lowHeavy ? STYLE_CALIBRATION_VALUES.harmonicDensity.lowHeavy : STYLE_CALIBRATION_VALUES.harmonicDensity.balanced,
  };
}

export function styleCalibrationTarget(genreId: string, styleId?: string, style?: SongStyle): StyleCalibrationTarget {
  const resolvedStyle = style ?? (styleId ? getStyle(styleId) : undefined);
  const actualStyleId = resolvedStyle?.id ?? styleId ?? `${genreId}:default`;
  const styleName = resolvedStyle?.name ?? genreId;
  const profile = profileForStyle(genreId, styleName) ?? {
    form: [], progressions: [], signatureCell: '', instruments: [], contours: [], arrangement: [], production: '', feel: '',
  } as StyleSongProfile;
  const base = genreDialectTarget(genreId);
  const references = REFERENCE_SETS[genreId] ?? [base.reference];
  const referenceSong = references[hash(actualStyleId) % references.length] ?? base.reference;
  const derived = deriveTarget(profile, styleName);
  const lowDensityShift = derived.targetLowDensity > 0.68 ? 0.05 : derived.targetLowDensity < 0.5 ? -0.04 : 0;
  return {
    ...base,
    ...derived,
    styleId: actualStyleId,
    styleName,
    genreId,
    referenceSongs: references,
    referenceSong,
    maxBassRootRatio: Math.max(0.40, Math.min(0.82, base.maxBassRootRatio + (lowDensityShift < 0 ? -0.03 : 0))),
    accompanimentNonRootRatio: Math.max(0.12, Math.min(0.52, base.accompanimentNonRootRatio + (derived.targetHarmonicDensity - 0.58) * 0.12)),
    techniqueLandmarkRatio: Math.max(0.08, Math.min(0.34, base.techniqueLandmarkRatio + (derived.targetLeadSpace - 0.56) * 0.10)),
    phraseDynamicRange: Math.max(0.06, Math.min(0.22, base.phraseDynamicRange + (derived.targetLeadSpace - 0.56) * 0.08)),
    bassTrimDb: base.bassTrimDb + (derived.targetLowDensity < 0.5 ? -0.75 : derived.targetLowDensity > 0.70 ? 0.25 : 0),
  };
}
