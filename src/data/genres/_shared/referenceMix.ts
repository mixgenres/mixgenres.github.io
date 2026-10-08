import type { GenrePackInput } from './genrePack';

export interface ReferenceMixEvidence {
  recording: string;
  /** Canonical source recording; mix targets may have been measured from a separated accompaniment. */
  audio: string;
  source: 'separated-accompaniment' | 'original-with-vocals' | 'original-recording';
  windowsSeconds: number[];
  targets: { rmsDbfs: number; crestDb: number; lowEnergyShare: number; highEnergyShare: number; sideMidRmsRatio: number };
}
export type ReferenceMixCatalog = Record<string, ReferenceMixEvidence>;
const clamp = (v: number, low: number, high: number) => Math.min(high, Math.max(low, v));
const blend = (authored: number, measured: number) => Number((authored * .7 + measured * .3).toFixed(4));

/** Bounded production corrections, using only the selected folder's recording.
 * Keep authored instruments, space, transients and dynamics. Spectrum does not
 * establish instrument identity, room depth, or a transcription. Demucs gain
 * changes also prevent treating separated RMS as an album loudness target.
 */
export function applyReferenceMix(pack: GenrePackInput, evidence: ReferenceMixCatalog): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    const reference = evidence[`${pack.id}-${style.id}`];
    if (!reference) return style;
    // Keep every matched source visible for audit and provenance. Only a
    // separated accompaniment may inform bounded instrumental mix corrections.
    if (reference.source !== 'separated-accompaniment') return { ...style, referenceAudio: reference };
    const { targets } = reference;
    const character = style.mix.character;
    const measuredWidth = clamp(targets.sideMidRmsRatio, .08, .9);
    const width = blend(character?.width ?? .5, measuredWidth);
    const bassForward = blend(character?.bassForward ?? .5, clamp(.35 + targets.lowEnergyShare * .65, .35, .8));
    const brightness = blend(character?.brightness ?? .5, clamp(.35 + targets.highEnergyShare, .35, .75));
    // Role-level widths win over stage.roleWidth in DynamicMixPlanner. Scale
    // both representations together, or the measured reference width would
    // update the visible stage profile while leaving every rendered role at
    // its old width. Preserve each role's authored width relationship.
    const authoredStageWidth = clamp(style.mix.stage?.width ?? character?.width ?? .5, .08, .95);
    const widthScale = width / authoredStageWidth;
    const scaleWidths = (values?: Record<string, number | undefined>) => values && Object.fromEntries(
      Object.entries(values).filter((entry): entry is [string, number] => typeof entry[1] === 'number')
        .map(([role, value]) => [role, clamp(value * widthScale, .04, .95)]),
    );
    const roles = style.mix.roles && Object.fromEntries(Object.entries(style.mix.roles).map(([role, policy]) => [role, {
      ...(policy ?? {}),
      ...(policy?.width !== undefined ? { width: clamp(policy.width * widthScale, .04, .95) } : {}),
    }]));
    const sections = style.mix.sections && Object.fromEntries(Object.entries(style.mix.sections).map(([section, policy]) => [section, {
      ...(policy ?? {}),
      ...(policy?.width !== undefined ? { width: clamp(policy.width * widthScale, .04, .95) } : {}),
    }]));
    return { ...style, referenceAudio: reference, mix: { ...style.mix,
      character: { ...character, width, bassForward, brightness },
      stage: { ...style.mix.stage, width, roleWidth: scaleWidths(style.mix.stage?.roleWidth) },
      ...(roles ? { roles } : {}), ...(sections ? { sections } : {}),
    } };
  }) };
}
