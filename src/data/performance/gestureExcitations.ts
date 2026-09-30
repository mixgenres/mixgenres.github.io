export const FINGERPAD_GESTURES = new Set([
  'fingerstyle', 'pizzicato', 'thumb-slap', 'thumb-sweep', 'tirando', 'apoyando',
  'short-decay-pluck', 'tight-env-pluck', 'finger-snap',
]);
export const HARD_PICK_GESTURES = new Set([
  'flatpick', 'pick', 'fast-picking', 'tremolo-picking', 'ricochet', 'heavy-detache',
  'hard-pizzicato', 'bartok-pizzicato', 'fm-bite',
]);
export const NAIL_GESTURES = new Set([
  'rasgueado', 'golpe', 'alzapua', 'picado', 'fast-arpeggiato', 'fast-chord-rake',
  'noise-burst', 'noise-transient', 'cluster-tap',
]);
export const HAMMER_GESTURES = new Set([
  'staccato', 'staccatissimo', 'bass-cluster-staccato', 'accented-staccato-octave',
  'muted-key-thump', 'trill',
]);
export const BOW_GESTURES = new Set(['arco', 'e-bow-sustain', 'tremolo-bow', 'sul-ponticello-heavy', 'glissando-down', 'glissando-up']);
export const AIR_GESTURES = new Set(['flutter-tongue', 'rip', 'tongue-slap', 'stopped', 'double-tongue', 'fp-crescendo']);
export const BOWED_RENDER_INSTRUMENT_PATTERN = /violin|fiddle|cello|viola|erhu|jinghu/i;
