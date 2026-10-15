export interface NotationRules {
  clef: 'treble' | 'bass' | 'percussion';
  staffLines: number;
  views: Array<'staff' | 'drum-lanes' | 'tablature' | 'technique'>;
  vocabulary: string[];
  /** Written string numbers; each instrument pack owns its tuning/order. */
  openStrings?: Array<{ name: string; midi: number }>;
  /** MusicXML percussion clef uses treble-clef display coordinates. */
  percussion?: Record<string, { step: string; octave: number; notehead: 'normal' | 'x' | 'diamond' | 'circle-x' }>;
}
export const DRUM_STAFF: NonNullable<NotationRules['percussion']> = {
  kick: { step: 'F', octave: 4, notehead: 'normal' },
  snare: { step: 'C', octave: 5, notehead: 'normal' },
  hihat: { step: 'G', octave: 5, notehead: 'x' },
  'tom-low': { step: 'A', octave: 4, notehead: 'normal' },
  'tom-mid': { step: 'D', octave: 5, notehead: 'normal' },
  'tom-high': { step: 'E', octave: 5, notehead: 'normal' },
  crash: { step: 'A', octave: 5, notehead: 'x' },
  ride: { step: 'F', octave: 5, notehead: 'x' },
  bell: { step: 'F', octave: 5, notehead: 'diamond' },
  'quinto-slap': { step: 'F', octave: 4, notehead: 'normal' },
  'conga-heel': { step: 'A', octave: 4, notehead: 'normal' },
  'conga-open': { step: 'C', octave: 5, notehead: 'normal' },
  'conga-slap-tapao': { step: 'D', octave: 5, notehead: 'x' },
  'tumba-open': { step: 'E', octave: 4, notehead: 'normal' },
  'conga-toe': { step: 'G', octave: 5, notehead: 'x' },
  'palmas-sordas': { step: 'C', octave: 5, notehead: 'normal' },
  'palmas-claras': { step: 'G', octave: 5, notehead: 'x' },
  'macho-slap': { step: 'D', octave: 5, notehead: 'x' },
  'macho-finger-tap': { step: 'A', octave: 4, notehead: 'normal' },
  'macho-thumb': { step: 'C', octave: 5, notehead: 'normal' },
  'macho-open': { step: 'C', octave: 5, notehead: 'normal' },
  'hembra-open': { step: 'A', octave: 4, notehead: 'normal' },
  'iya-enu': { step: 'A', octave: 4, notehead: 'normal' },
  'iya-chacha': { step: 'D', octave: 5, notehead: 'x' },
  'itotele-enu': { step: 'C', octave: 5, notehead: 'normal' },
  'okonkolo-chacha': { step: 'E', octave: 5, notehead: 'x' },
  'cajon-bass': { step: 'F', octave: 4, notehead: 'normal' },
  'cajon-slap': { step: 'C', octave: 5, notehead: 'x' },
  'cajon-tip': { step: 'A', octave: 4, notehead: 'normal' },
  'cajon-side': { step: 'D', octave: 5, notehead: 'x' },
  cascara: { step: 'G', octave: 5, notehead: 'x' },
  'mambo-bell-mouth': { step: 'F', octave: 5, notehead: 'diamond' },
  'cha-cha-bell': { step: 'A', octave: 5, notehead: 'diamond' },
  'dayan-na': { step: 'D', octave: 5, notehead: 'normal' },
  'dayan-tun': { step: 'F', octave: 4, notehead: 'normal' },
  'dayan-ti-ke': { step: 'E', octave: 5, notehead: 'x' },
  'bayan-ghe': { step: 'A', octave: 4, notehead: 'normal' },
  'bayan-meend': { step: 'C', octave: 4, notehead: 'normal' },
  'zapateado-tacon': { step: 'D', octave: 5, notehead: 'x' },
  'zapateado-planta': { step: 'A', octave: 4, notehead: 'normal' },
  'zapateado-punta': { step: 'F', octave: 5, notehead: 'x' },
  'snare-center': { step: 'C', octave: 5, notehead: 'normal' },
  'snare-rimshot': { step: 'D', octave: 5, notehead: 'x' },
  'snare-cross-stick': { step: 'B', octave: 4, notehead: 'x' },
  'snare-ghost': { step: 'A', octave: 4, notehead: 'normal' },
  'tom-extra-low': { step: 'F', octave: 4, notehead: 'normal' },
  'tom-extra-high': { step: 'G', octave: 5, notehead: 'normal' },
  'crash-1': { step: 'A', octave: 5, notehead: 'x' },
  'crash-2': { step: 'B', octave: 5, notehead: 'x' },
  splash: { step: 'C', octave: 6, notehead: 'x' },
  china: { step: 'D', octave: 6, notehead: 'x' },
  'ride-edge': { step: 'G', octave: 5, notehead: 'x' },
  'ride-bow': { step: 'F', octave: 5, notehead: 'x' },
  'ride-bell': { step: 'F', octave: 5, notehead: 'diamond' },
  'hihat-closed': { step: 'G', octave: 5, notehead: 'x' },
  'hihat-open': { step: 'A', octave: 5, notehead: 'circle-x' },
  'hihat-pedal': { step: 'F', octave: 4, notehead: 'x' },
  tambourine: { step: 'A', octave: 5, notehead: 'x' },
  cowbell: { step: 'F', octave: 5, notehead: 'diamond' },
  cabasa: { step: 'D', octave: 5, notehead: 'x' },
};
export const GENRE_NOTATION_RULES: Record<string, Partial<NotationRules>> = {
  flamenco: { vocabulary: ['compás', 'falseta', 'rasgueado', 'alzapúa', 'picado', 'golpe', 'palmas', 'remate'] },
  tango: { vocabulary: ['marcato', 'arrastre', 'corte', 'yumba', 'bellows direction', 'arco', 'pizzicato'] },
};
export const INSTRUMENT_NOTATION_RULES: Record<string, Partial<NotationRules>> = {
  guitar: { views: ['staff','tablature','technique'], openStrings: [
    { name:'1 E4',midi:64 }, { name:'2 B3',midi:59 }, { name:'3 G3',midi:55 },
    { name:'4 D3',midi:50 }, { name:'5 A2',midi:45 }, { name:'6 E2',midi:40 },
  ] },
};
