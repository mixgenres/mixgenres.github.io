import { MASTER_MIX_DEFAULTS } from '../../data/sound/mix/masterProfiles';

/** One fixed program lift and one safety trim for the complete mastered buffer.
 * Source balance stays intact. Raw stems bypass this stage. No phrase-by-phrase
 * levelling or automatic gain riding changes the authored dynamics.
 */
export function reserveOutputHeadroom(left: Float32Array, right: Float32Array): void {
  let peak = 0;
  for (let i = 0; i < left.length; i++) peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  if (peak === 0 || !Number.isFinite(peak)) return;
  const gain = Math.min(10 ** (MASTER_MIX_DEFAULTS.programMakeupDb / 20), .98 / peak);
  for (let i = 0; i < left.length; i++) {
    left[i] *= gain;
    if (right !== left) right[i] *= gain;
  }
}
