/** Reserve final PCM headroom with one gain for the complete song. This keeps
 * stereo balance, transient shape and phrasing intact instead of clipping or
 * normalizing each section separately. Physical stems remain unmodified. */
export function reserveOutputHeadroom(left: Float32Array, right: Float32Array): void {
  let peak = 0;
  for (let i = 0; i < left.length; i++) peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  if (peak <= .98 || !Number.isFinite(peak)) return;
  const gain = .98 / peak;
  for (let i = 0; i < left.length; i++) {
    left[i] *= gain;
    if (right !== left) right[i] *= gain;
  }
}
