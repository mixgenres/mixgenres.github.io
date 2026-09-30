export const PATTERN_GESTURE_HINT_RULES = [
  { pattern: /milonga/, gestures: ['staccato', 'marcato', 'accent', 'pizzicato'] },
  { pattern: /marcato|yumba/, gestures: ['marcato', 'accent', 'staccato', 'chapa', 'cluster'] },
  { pattern: /sincopa|syncop|anticipat/, gestures: ['staccato', 'marcato', 'accent', 'pizzicato', 'fingerstyle'] },
  { pattern: /bordoneo/, gestures: ['pizzicato', 'fingerstyle', 'staccato', 'accent', 'legato'] },
  { pattern: /tumbao/, gestures: ['open', 'heel', 'toe', 'slap', 'pizzicato', 'staccato'] },
  { pattern: /fingerstyle|flatpick|bluegrass/, gestures: ['fingerstyle', 'flatpick', 'accent', 'staccato'] },
] as const;
