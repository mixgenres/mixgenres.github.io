/** Hann-windowed frequency energy. This distinguishes a strong overtone from
 * an actual tuning error without relying on zero-crossing counts. */
export function frequencyEnergy(pcm: Float32Array, sr: number, hz: number, startSeconds = .08, endSeconds = .3) {
  const start = Math.round(startSeconds * sr), end = Math.min(pcm.length, Math.round(endSeconds * sr));
  let re = 0, im = 0;
  for (let i = start; i < end; i++) {
    const value = pcm[i] * (.5 - .5 * Math.cos(2 * Math.PI * (i - start) / (end - start - 1)));
    const phase = 2 * Math.PI * hz * i / sr;
    re += value * Math.cos(phase); im += value * Math.sin(phase);
  }
  return re * re + im * im;
}
export function spectralPeak(pcm: Float32Array, sr: number, low: number, high: number, start: number, end: number) {
  let frequency = low, energy = 0;
  for (let hz = low; hz <= high; hz += 1) {
    const current = frequencyEnergy(pcm, sr, hz, start, end);
    if (current > energy) { energy = current; frequency = hz; }
  }
  return frequency;
}
export function rms(pcm: Float32Array, sr: number, start: number, end: number) {
  const a = Math.round(start * sr), b = Math.min(pcm.length, Math.round(end * sr));
  let sum = 0;
  for (let i = a; i < b; i++) sum += pcm[i] ** 2;
  return Math.sqrt(sum / Math.max(1, b - a));
}
