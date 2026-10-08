import type { GenrePackInput } from './genrePack';

export interface MixCalibrationTargets {
  lowEnergyShare: number;
  highEnergyShare: number;
  sideMidRmsRatio: number;
}
export type MixCalibrationCatalog = Record<string, MixCalibrationTargets>;

const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));
const blend = (authored: number, measured: number) => Number((authored * 0.7 + measured * 0.3).toFixed(4));

/** Apply small, bounded style-specific balance corrections to authored mixes. */
export function applyMixCalibration(pack: GenrePackInput, calibration: MixCalibrationCatalog): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    const targets = calibration[`${pack.id}-${style.id}`];
    if (!targets) return style;
    const character = style.mix.character;
    const width = blend(character?.width ?? 0.5, clamp(targets.sideMidRmsRatio, 0.08, 0.9));
    const bassForward = blend(character?.bassForward ?? 0.5, clamp(0.35 + targets.lowEnergyShare * 0.65, 0.35, 0.8));
    const brightness = blend(character?.brightness ?? 0.5, clamp(0.35 + targets.highEnergyShare, 0.35, 0.75));
    const authoredWidth = clamp(style.mix.stage?.width ?? character?.width ?? 0.5, 0.08, 0.95);
    const widthScale = width / authoredWidth;
    const scaleWidths = (values?: Record<string, number | undefined>) => values && Object.fromEntries(
      Object.entries(values).filter((entry): entry is [string, number] => typeof entry[1] === 'number')
        .map(([role, value]) => [role, clamp(value * widthScale, 0.04, 0.95)]),
    );
    const roles = style.mix.roles && Object.fromEntries(Object.entries(style.mix.roles).map(([role, policy]) => [role, {
      ...(policy ?? {}), ...(policy?.width !== undefined ? { width: clamp(policy.width * widthScale, 0.04, 0.95) } : {}),
    }]));
    const sections = style.mix.sections && Object.fromEntries(Object.entries(style.mix.sections).map(([section, policy]) => [section, {
      ...(policy ?? {}), ...(policy?.width !== undefined ? { width: clamp(policy.width * widthScale, 0.04, 0.95) } : {}),
    }]));
    return { ...style, mix: { ...style.mix,
      character: { ...character, width, bassForward, brightness },
      stage: { ...style.mix.stage, width, roleWidth: scaleWidths(style.mix.stage?.roleWidth) },
      ...(roles ? { roles } : {}), ...(sections ? { sections } : {}),
    } };
  }) };
}
