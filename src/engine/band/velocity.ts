function clamp(value: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, value));
}

/** Convert normalized energy (0.2..1) and pattern velocity to MIDI velocity. */
export function velocityForEnergy(energy: number, onsetVelocity: number, accentContrast: number): number {
  const level = clamp(energy) * 5;
  // Keep quiet sections playable, but leave a broad, nonlinear-feeling range
  // for authored accents and SoundFont velocity layers. The previous curve
  // allowed ordinary high-energy notes to reach 120 before activity and
  // brightness were applied, so a large share of a song flattened at MIDI
  // 127. Clamp the accent input before shaping it; don't squash every strong
  // attack against a global full-scale ceiling.
  const floor = 0.24 + (level - 1) * 0.11;
  const ceiling = 0.46 + (level - 1) * 0.095;
  const accent = clamp(onsetVelocity * accentContrast);
  return Math.round(clamp(floor + (ceiling - floor) * accent, 0.18, 0.84) * 127);
}
