import { MASTER_MIX_DEFAULTS } from '../../data/sound/mix/masterProfiles';

/** Sample-peak ceiling shared with live playback. This is a sample-peak guard,
 * not a true-peak meter; 2 dB leaves room for lossy-encoder reconstruction.
 */
export const OUTPUT_SAMPLE_PEAK_CEILING = 10 ** (-2 / 20);

/** Apply the portable renderer's fixed program gain. Browser playback/export
 * put the same total gain around the shared style glue compressor instead.
 */
export function applyProgramMakeup(left: Float32Array, right: Float32Array): void {
  const gain = 10 ** (MASTER_MIX_DEFAULTS.programMakeupDb / 20);
  for (let i = 0; i < left.length; i++) {
    left[i] *= gain;
    if (right !== left) right[i] *= gain;
  }
}

/** Apply only the final linked-stereo safety trim. Raw stems bypass this stage.
 * One scalar preserves the authored song dynamics and stereo balance.
 */
export function reserveOutputHeadroom(left: Float32Array, right: Float32Array): void {
  let peak = 0;
  for (let i = 0; i < left.length; i++) peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  if (peak === 0 || !Number.isFinite(peak)) return;
  const gain = Math.min(1, OUTPUT_SAMPLE_PEAK_CEILING / peak);
  for (let i = 0; i < left.length; i++) {
    left[i] *= gain;
    if (right !== left) right[i] *= gain;
  }
}
