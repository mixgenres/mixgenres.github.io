import { STYLE_CALIBRATION_VALUES } from '../../data/styles/calibrationRules';
import type { SongStyle } from '../../data/styles/schema';
import { getStyle, getCanonicalStyle } from './registry';
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

/** Performance targets read the resolved style, including user overrides.
 * Numeric post-composition guardrails remain explicit genre metadata. */
export function styleCalibrationTarget(genreId: string, styleId?: string, style?: SongStyle): StyleCalibrationTarget {
  const resolvedStyle = style ?? (styleId ? getStyle(styleId) : getCanonicalStyle(genreId));
  if (!resolvedStyle || resolvedStyle.primaryGenre !== genreId) throw new Error(`Invalid calibration style: ${styleId}`);
  const base = genreDialectTarget(genreId);
  const reference = resolvedStyle.reference;
  const referenceSong = reference ? `${reference.credit}${reference.recording ? ` — ${reference.recording}` : ''}` : base.reference;
  const qualities = resolvedStyle.calibrationQualities ?? [];
  return {
    ...base,
    styleId: resolvedStyle.id, styleName: resolvedStyle.name, genreId,
    referenceSongs: [referenceSong], referenceSong,
    referenceTone: qualities.join('; '),
    instrumentPalette: (resolvedStyle.arrangement?.ensemble ?? []).flatMap(part => part.instrumentIds),
    preferredProgression: [...(resolvedStyle.harmony?.progressionTemplates?.[0]?.value ?? [])],
    signatureCell: resolvedStyle.rhythm?.signatureCell ?? '',
    arrangementCues: [...(resolvedStyle.arrangement?.doublingRules ?? [])],
    contourCues: [...(resolvedStyle.melody?.contourArchetypes ?? [])],
    production: qualities.join('; '),
    phraseBars: [...(resolvedStyle.melody?.phraseLengthsBars ?? [])],
    targetLowDensity: STYLE_CALIBRATION_VALUES.lowDensity.balanced,
    targetLeadSpace: STYLE_CALIBRATION_VALUES.leadSpace.balanced,
    targetHarmonicDensity: STYLE_CALIBRATION_VALUES.harmonicDensity.balanced,
  };
}
