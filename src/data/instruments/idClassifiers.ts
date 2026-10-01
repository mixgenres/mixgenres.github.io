/**
 * Regexes here are only for authored *kit component* vocabulary. Instrument
 * identity is resolved by explicit engine keys in engine/lookup/instrumentKeys.ts;
 * do not add fuzzy instrument-id classifiers here.
 */
export const DRUM_COMPONENT_PATTERNS = {
  cymbal: /crash|ride|splash|china/,
  rimshot: /rimshot/,
  muted: /ti-ke|mute|slap/,
  smallHead: /chacha/,
  open: /conga-open|tumba-open/,
  slap: /quinto-slap|slap-tapao/,
  mutedTouch: /heel|toe|tapao/,
  bell: /bell/,
} as const;
