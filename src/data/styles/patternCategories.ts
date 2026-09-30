/** Ordered semantic categories for style pattern matching. */
export const PATTERN_CATEGORY_RULES: Array<{ categoryIds: string[]; pattern: RegExp; value: string }> = [
  { categoryIds: ['bass'], pattern: /bass|tumbao|walking/, value: 'bass' },
  { categoryIds: ['fill'], pattern: /fill|turnaround|pickup|answer|reply/, value: 'fill' },
  { categoryIds: ['break'], pattern: /break|drop|stop|gear/, value: 'break' },
  { categoryIds: ['lead', 'motif'], pattern: /lead|melod|riff|hook|solo/, value: 'lead' },
  { categoryIds: ['comping', 'accompaniment'], pattern: /comp|chord|skank|strum|stab/, value: 'comping' },
  { categoryIds: ['texture', 'drone'], pattern: /pad|texture|drone|wash/, value: 'texture' },
] as const;
export const PATTERN_CATEGORY_FALLBACK = 'groove';
