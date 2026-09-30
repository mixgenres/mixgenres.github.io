import type { RhythmicIntent } from './schema/rhythmic-intent';
import type { HitFunction } from './hitFunctions';
export const KIT_HIT_INTENT_RULES: Array<{ pattern: RegExp; intent: RhythmicIntent; hits?: HitFunction[]; dynamicOpen?: boolean }> = [
  { pattern: /kick|bass-drum|bombo|grave/, intent: 'low', hits: ['downbeat', 'bass-tone'] },
  { pattern: /ride.*bell|bell/, intent: 'bell' },
  { pattern: /crash/, intent: 'accent' },
  { pattern: /ride|hat|hihat|hi-hat|cymbal/, intent: 'offbeat', dynamicOpen: true },
  { pattern: /rim|side-stick|cross-stick|cascara|edge/, intent: 'rim', hits: ['edge'] },
  { pattern: /ghost|heel|toe|tip|brush/, intent: 'ghost', hits: ['ghost'] },
  { pattern: /slap|rimshot|quinto/, intent: 'slap', hits: ['slap'] },
  { pattern: /mute|tapao|dead|chapa|closed|pedal/, intent: 'mute', hits: ['muffled'] },
  { pattern: /open|tone|tumba/, intent: 'open', hits: ['open'] },
  { pattern: /fill|roll/, intent: 'roll', hits: ['fill'] },
];
export const KIT_HIT_OPEN_PATTERN = /open/;
export const KIT_HIT_INTENT_FALLBACK: RhythmicIntent = 'backbeat';
