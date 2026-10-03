import type { MusicalPattern } from '../../types';
import type { HitFunction } from '../../data/performance/hitFunctions';
export function notatedHit(pattern: MusicalPattern | undefined, index: number, rawHit?: string): HitFunction {
  const raw = String(rawHit ?? pattern?.hitGrid?.[index] ?? '').toLowerCase();
  if (/kick|downbeat|bombo|bass-drum|grave/.test(raw)) return 'downbeat';
  if (/ghost|heel|toe|tap|tip|brush/.test(raw)) return 'ghost';
  if (/slap|quinto|strappatta|strappata|golpe/.test(raw)) return 'slap';
  if (/mute|tapao|dead|chapa/.test(raw)) return 'muffled';
  if (/open|tumba|tone|tono/.test(raw)) return 'open';
  if (/rim|edge|cascara|campana|bell/.test(raw)) return 'edge';
  if (/fill|roll|tremolo/.test(raw)) return 'fill';
  if (/bell|punct|hit|chique|accent/.test(raw)) return 'punctuation';
  const accent = Number(pattern?.accentProfile?.[index] ?? .7);
  if (accent >= .92) return 'downbeat';
  if (accent <= .42) return 'ghost';
  return Number(pattern?.onsetGrid?.[index] ?? 0) % Math.max(1, Math.round((pattern?.subdivisions ?? 16) / 4)) ? 'offbeat-chop' : 'tone';
}
