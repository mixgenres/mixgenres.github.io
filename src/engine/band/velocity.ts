function clamp(value: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, value));
}

/** Convert normalized energy (0.2..1) and pattern velocity to MIDI velocity. */
export function velocityForEnergy(energy: number, onsetVelocity: number, accentContrast: number): number {
  const written = clamp(onsetVelocity);
  const section = clamp(energy), contrast = Math.max(.1, accentContrast);
  // Retain the nominal velocity response used to balance the recorded banks.
  // Replacing it with a zero-to-one level curve moved quiet bass and guitar
  // into much weaker sample layers while drums kept their stronger attacks.
  const floor = .13 + .55 * section;
  const span = .235 - .075 * section;
  const nominal = floor + span * Math.min(1, written * contrast) + .025 * (written - .72);
  const smooth = (value: number) => { const x = clamp(value); return x * x * (3 - 2 * x); };
  // Extend genuine pianissimo and fortissimo without moving ordinary playing
  // out of its calibrated sample layers or reinstating a global MIDI ceiling.
  const soft = smooth(written / .35);
  const forte = smooth((written - .9) / .1);
  const peak = Math.max(nominal, .325 + .675 * section);
  return Math.max(1, Math.min(127, Math.round((nominal * soft + (peak - nominal) * forte) * 127)));
}
