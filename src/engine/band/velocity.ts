function clamp(value: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, value));
}

/** Convert normalized energy (0.2..1) and pattern velocity to MIDI velocity. */
export function velocityForEnergy(energy: number, onsetVelocity: number, accentContrast: number): number {
  const level = clamp(energy) * 5;
  const floor = 0.28 + (level - 1) * 0.105;
  const ceiling = 0.52 + (level - 1) * 0.115;
  return Math.round(clamp(floor + onsetVelocity * (ceiling - floor) * accentContrast, 0.18, 0.94) * 127);
}
