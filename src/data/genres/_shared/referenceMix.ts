import type { GenrePackInput } from './genrePack';

export interface ReferenceMixEvidence {
  recording: string;
  audio: string;
  source: 'separated-accompaniment' | 'original-with-vocals';
  audioBytes: number;
  audioModifiedNs: number;
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
    // Original vocal mixes remain visible evidence, but they do not drive an
    // instrumental style mix because the singer could skew these measurements.
    if (!reference || reference.source !== 'separated-accompaniment') return style;
    const { targets } = reference;
    const character = style.mix.character;
    const measuredWidth = clamp(targets.sideMidRmsRatio, .08, .9);
    const width = blend(character?.width ?? .5, measuredWidth);
    const bassForward = blend(character?.bassForward ?? .5, clamp(.35 + targets.lowEnergyShare * .65, .35, .8));
    const brightness = blend(character?.brightness ?? .5, clamp(.35 + targets.highEnergyShare, .35, .75));
    return { ...style, referenceAudio: reference, mix: { ...style.mix,
      character: { ...character, width, bassForward, brightness },
      stage: { ...style.mix.stage, width },
    } };
  }) };
}
