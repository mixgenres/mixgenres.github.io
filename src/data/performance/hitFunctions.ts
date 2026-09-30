export type HitFunction =
  | 'downbeat' | 'tone' | 'open' | 'slap' | 'muffled' | 'ghost'
  | 'bass-tone' | 'edge' | 'offbeat-chop' | 'sustain' | 'fill' | 'punctuation';

export const HIT_FUNCTIONS: HitFunction[] = [
  'downbeat', 'tone', 'open', 'slap', 'muffled', 'ghost', 'bass-tone',
  'edge', 'offbeat-chop', 'sustain', 'fill', 'punctuation'
];
