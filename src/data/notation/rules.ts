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
