/** Shared performance vocabulary used to classify authored gesture names. */
export const GESTURE_LEXICON = {
  downbeat: /kick|downbeat|bombo|bass-drum|grave/,
  ghost: /ghost|heel|toe|tap|tip|brush/,
  slap: /slap|quinto|strappata|golpe/,
  muffled: /mute|tapao|dead|chapa/,
  open: /open|tumba|tone|tono|abierto/,
  edge: /rim|edge|cascara|campana|bell/,
  fill: /fill|roll|tremolo/,
  punctuation: /bell|punct|hit|chique|accent/,
  heel: /heel/,
  toe: /toe|finger-tap|tip/,
  thumb: /thumb|tumba-open|conga-open|macho-open|hembra-open|bayan-ghe|iya-enu/,
  rimLike: /rimshot|cascara|side-stick|rim/,
  bellLike: /bell|campana|ride-bell/,
  ghostHit: /ghost|heel|toe|tap|mute|dead/,
  openHit: /open|ring|legato|tone|tumba/,
  muffledHit: /mute|chapa|tapao|stacc|palm/,
  fillHit: /roll|fill|tremolo|ornament|shake|triplet/,
  struckSlap: /slap|quinto-slap|macho-slap|tapao/,
} as const;

export type GestureConcept = keyof typeof GESTURE_LEXICON;

export function matchesGestureConcept(text: string, concept: GestureConcept): boolean {
  return GESTURE_LEXICON[concept].test(String(text ?? '').toLowerCase());
}
