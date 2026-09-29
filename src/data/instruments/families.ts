import type { InstrumentFamily } from './schema/instrument-def';

export const FAMILY_LABELS: Record<InstrumentFamily, string> = {
  'bellows-and-keys': 'Bellows & keys',
  plucked: 'Plucked & strung',
  bowed: 'Bowed',
  winds: 'Winds',
  brass: 'Brass',
  voice: 'Voices',
  'hand-drums': 'Hand drums',
  'metal-and-wood': 'Metal & wood',
  kit: 'Kit pieces',
  electronic: 'Electronic',
  'free-reed': 'Free reed',
  'plucked-string': 'Plucked strings',
  'body-percussion': 'Body percussion',
};

export const FAMILY_ORDER: InstrumentFamily[] = [
  'bellows-and-keys', 'plucked', 'bowed', 'winds', 'brass',
  'voice', 'hand-drums', 'metal-and-wood', 'kit', 'electronic',
  'free-reed', 'plucked-string', 'body-percussion',
];

export const WORLD_INSTRUMENT_HINTS: Record<string, string[]> = {
  afrobeats: ['sub-bass', 'log-drum', 'electric-guitar', 'shaker', 'tenor-sax'],
  bachata: ['requinto', 'guitar', 'bass', 'bongos', 'guiro'],
  blues: ['electric-guitar', 'bass', 'drums', 'piano', 'harmonica'],
  brazilian: ['acoustic-guitar', 'surdo', 'pandeiro', 'cavaquinho', 'cuica'],
  country: ['steel-guitar', 'upright-bass', 'brush-kit', 'fiddle', 'banjo'],
  cumbia: ['bass', 'accordion', 'guacharaca', 'tambora', 'guitar'],
  disco: ['bass', 'electric-guitar', 'drums', 'piano', 'horn-section'],
  electronic: ['drums', 'bass-lead', 'warm-pad', 'saw-lead', 'polysynth'],
  folk: ['guitar', 'fiddle', 'upright-bass', 'bodhran', 'mandolin'],
  funk: ['slap-bass', 'electric-guitar', 'clavinet', 'drums', 'horn-section'],
  gospel: ['piano', 'organ', 'bass', 'drums', 'electric-guitar'],
  'hip-hop': ['drums', 'sub-bass', 'piano', 'turntable', 'warm-pad'],
  house: ['drums', 'sub-bass', 'rhodes', 'saw-lead', 'synth'],
  jazz: ['upright-bass', 'ride', 'piano', 'trumpet', 'tenor-sax'],
  kizomba: ['sub-bass', 'drums', 'rhodes', 'electric-guitar', 'warm-pad'],
  tango: ['bandoneon', 'piano', 'upright-bass', 'violin', 'cello'],
  flamenco: ['spanish-guitar', 'cajon', 'palmas', 'zapateado', 'flute'],
  metal: ['distortion-guitar', 'overdrive-guitar', 'bass', 'drums', 'guitar-harmonics'],
  'r-and-b': ['bass', 'electric-guitar', 'rhodes', 'drums', 'warm-pad'],
  reggae: ['sub-bass', 'organ', 'electric-guitar', 'drums', 'horn-section'],
  reggaeton: ['sub-bass', 'drums', 'synth', 'electric-guitar', 'maracas'],
  rock: ['overdrive-guitar', 'bass', 'drums', 'electric-guitar', 'organ'],
  salsa: ['piano', 'congas', 'bass', 'timbales', 'trumpet'],
  ska: ['bass', 'drums', 'electric-guitar', 'organ', 'trumpet'],
  soul: ['bass', 'electric-guitar', 'organ', 'drums', 'horn-section'],
  swing: ['upright-bass', 'drums', 'piano', 'tenor-sax', 'jazz-guitar'],
  timba: ['piano', 'bass', 'timbales', 'congas', 'trombone'],
  zouk: ['sub-bass', 'drums', 'rhodes', 'electric-guitar', 'warm-pad'],
  'drum-and-bass': ['drums', 'sub-bass', 'synth', 'warm-pad', 'saw-lead'],
  industrial: ['drums', 'distortion-guitar', 'sub-bass', 'synth', 'acid-303'],
  'punk-hardcore': ['overdrive-guitar', 'distortion-guitar', 'bass', 'drums', 'electric-guitar'],
  'uk-bass': ['sub-bass', 'drums', 'acid-303', 'synth', 'warm-pad'],
};


