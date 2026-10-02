/** Ordered instrument-specific gesture candidates keyed by instrument and genre vocabulary. */
export const GENRE_GESTURE_HINT_RULES = [
  { instrumentId: 'bandoneon', genrePattern: /.*/, rules: [
    { pattern: /marcato|yumba/, gestures: ['marcato','staccato','accent','bellows-slap'] },
    { pattern: /sincopa|syncop|anticip/, gestures: ['staccato','accent','portato','arrastre'] },
    { pattern: /bordoneo/, gestures: ['staccato','accent','tenuto','chapa'] },
    { pattern: /milonga/, gestures: ['staccato','accent','marcato'] },
  ] },
  { instrumentId: 'upright-bass', genrePattern: /tango/, rules: [
      { pattern: /marcato/, gestures: ['arrastre','strappata','pizzicato','staccato','accent'] },
      { pattern: /sincopa|syncop/, gestures: ['arrastre','pizzicato','staccato','accent'] },
      { pattern: /bordoneo/, gestures: ['pizzicato','staccato','accent','chicharra'] },
      { pattern: /milonga/, gestures: ['pizzicato','staccato','accent'] },
  ] },
  { instrumentId: 'violin', genrePattern: /tango|milonga/, rules: [
      { pattern: /marcato/, gestures: ['staccato','accent','detache','pizzicato'] },
      { pattern: /sincopa|syncop/, gestures: ['staccato','pizzicato','chicharra','accent'] },
      { pattern: /bordoneo/, gestures: ['pizzicato','staccato','accent'] },
      { pattern: /milonga/, gestures: ['staccato','pizzicato','accent'] },
  ] },
  { instrumentId: 'piano', genrePattern: /tango|milonga/, rules: [
      { pattern: /marcato/, gestures: ['marcato','yumba','chapa','accent'] },
      { pattern: /sincopa|syncop/, gestures: ['staccato','arrastre','accent'] },
      { pattern: /bordoneo/, gestures: ['staccato','pesada','accent','arrastre'] },
      { pattern: /milonga/, gestures: ['staccato','campana','accent'] },
  ] },
] as const;
