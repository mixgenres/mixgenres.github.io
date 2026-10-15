import type { RhythmicIntent } from './schema/rhythmic-intent';
import type { HitFunction } from './hitFunctions';
export const KIT_HIT_INTENT_RULES: Array<{ pattern: RegExp; intent: RhythmicIntent; hits?: HitFunction[]; dynamicOpen?: boolean }> = [
  { pattern: /kick|bass-drum|bombo|grave/, intent: 'low', hits: ['downbeat', 'bass-tone'] },
  { pattern: /snare|backbeat/, intent: 'backbeat' },
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

const KIT_HIT_FUNCTION_INTENTS: Record<HitFunction, RhythmicIntent> = {
  downbeat: 'low',
  tone: 'backbeat',
  open: 'open',
  slap: 'slap',
  muffled: 'mute',
  ghost: 'ghost',
  'bass-tone': 'low',
  edge: 'rim',
  'offbeat-chop': 'mute',
  sustain: 'sustain',
  fill: 'roll',
  punctuation: 'accent',
};

/** Resolve a kit sound from authored source vocabulary or its explicit hit function. */
export function kitHitIntent(sourceHit: string | undefined, hit: HitFunction): RhythmicIntent {
  const raw = String(sourceHit ?? '').trim().toLowerCase();
  if (!raw) return KIT_HIT_FUNCTION_INTENTS[hit];
  const rule = KIT_HIT_INTENT_RULES.find(candidate => candidate.pattern.test(raw));
  if (!rule) throw new Error(`No authored kit-hit rule for "${sourceHit}" / ${hit}`);
  return rule.dynamicOpen && KIT_HIT_OPEN_PATTERN.test(raw) ? 'open' : rule.intent;
}
