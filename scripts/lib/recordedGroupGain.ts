const targetPeak = 10 ** (-10 / 20);
const maximumGain = 10 ** (18 / 20);

/** Bring a recorded take group toward the SF2 mix range with one shared
 * scalar. Applying the same gain to every layer in a take keeps its velocity,
 * pitch and articulation relationships intact; the lift cap avoids raising
 * noise in unusually quiet source recordings without bound.
 */
export function recordedGroupGainLinear(groupPeak: number): number {
  if (!Number.isFinite(groupPeak) || groupPeak <= 0) return 1;
  return Math.min(maximumGain, targetPeak / groupPeak);
}
