/** Stable seed and small deterministic random helpers shared by sheet, band, and voice rendering. */
export function seedOf(...parts: (string | number)[]): number {
  let h = 2166136261 >>> 0;
  const s = parts.join('|');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/** Uniform 0..1 from a seed. */
export function rand01(seed: number): number {
  let t = (seed + 0x6d2b79f5) >>> 0;
  t = Math.imul(t ^ (t >>> 15), t | 1) >>> 0;
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/** Roughly normal, mean 0, sigma 1. */
export function randNorm(seed: number): number {
  return (rand01(seed) + rand01(seed ^ 0x9e3779b9) - 1) * 1.7;
}
