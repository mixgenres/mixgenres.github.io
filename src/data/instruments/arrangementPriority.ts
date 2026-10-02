export type Priority = 'core' | 'body' | 'colour' | 'sweetener';
export const FAMILY_PRIORITY_DEFAULT: Record<string, Priority> = {
  kit: 'core', 'hand-drums': 'body', 'bellows-and-keys': 'body', plucked: 'body', brass: 'colour', winds: 'colour', bowed: 'colour', voice: 'sweetener', electronic: 'colour', 'metal-and-wood': 'colour',
};
export const INSTRUMENT_PRIORITY_OVERRIDE: Record<string, Priority> = {
  drums: 'core', bass: 'core', 'upright-bass': 'core', synth: 'core',
  shaker: 'colour', maracas: 'colour', cabasa: 'colour', tambourine: 'colour',
  glockenspiel: 'sweetener', celeste: 'sweetener', crystal: 'sweetener', 'music-box': 'sweetener', harp: 'sweetener', choir: 'sweetener',
};
export const DROP_ORDER: Priority[] = ['sweetener', 'colour', 'body', 'core'];
