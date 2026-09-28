/**
 * Calculates equal-power pan gains for a given pan position [0, 1].
 * Returns Left and Right gains.
 */
export function equalPowerPan(pan: number): { left: number; right: number } {
  const p = Math.max(0, Math.min(1, pan));
  return {
    left: Math.cos(p * Math.PI * 0.5),
    right: Math.sin(p * Math.PI * 0.5),
  };
}
