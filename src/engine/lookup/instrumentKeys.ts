/**
 * Canonical engine-side instrument vocabulary.
 *
 * These are deliberately hard-coded semantic keys, not fuzzy text classifiers.
 * Catalog/data may refer to these keys (for example `percussion`, `guitar`,
 * `keys`) while the engine resolves the concrete catalog instrument by ID.
 */
export const ENGINE_INSTRUMENT_KEYS = {
  percussion: 'percussion',
  membrane: 'membrane',
  kit: 'kit',
  bodyPercussion: 'body-percussion',
  drums: 'drums',
  bass: 'bass',
  subBass: 'sub-bass',
  plucked: 'plucked',
  guitar: 'guitar',
  electric: 'electric',
  bowed: 'bowed',
  strings: 'strings',
  winds: 'winds',
  brass: 'brass',
  keys: 'keys',
  bellows: 'bellows',
  voice: 'voice',
  electronic: 'electronic',
  scraper: 'scraper',
  metalShell: 'metal-shell',
  woodBox: 'wood-box',
  horn: 'horn',
  reed: 'reed',
  doubleReed: 'double-reed',
  fipple: 'fipple',
  endBlown: 'end-blown',
  acousticGuitar: 'acoustic-guitar',
  jawari: 'jawari',
  tunedPercussion: 'tuned-percussion',
  freeReed: 'free-reed',
} as const;

export type InstrumentEngineKey = typeof ENGINE_INSTRUMENT_KEYS[keyof typeof ENGINE_INSTRUMENT_KEYS];

const EXACT_KEY_IDS: Record<InstrumentEngineKey, readonly string[]> = {
  [ENGINE_INSTRUMENT_KEYS.percussion]: [
    'hand-percussion', 'steel-drums', 'congas', 'bongos', 'cajon', 'timbales', 'surdo',
    'pandeiro', 'bodhran', 'log-drum', 'cumbia-drum', 'maracas', 'shaker', 'guiro', 'cabasa',
    'taiko', 'paigu', 'tabla', 'drums', 'kick', 'snare', 'hats', 'ride', 'brush-kit', 'tamborim',
    'tantan', 'repinique', 'cuica', 'zabumba', 'bata', 'darbuka', 'bombo', 'bombo-leguero',
    'bombo-andino', 'tambora', 'tambor-alegre', 'washboard', 'castanets', 'palmas', 'zapateado',
    'cowbell', 'agogo', 'claves', 'woodblock', 'triangle', 'tambourine', 'kane', 'gongs',
    'bones', 'foot-stomp', 'dikanza', 'guacharaca',
  ],
  [ENGINE_INSTRUMENT_KEYS.drums]: ['drums', 'kick', 'snare', 'hats', 'ride', 'brush-kit'],
  [ENGINE_INSTRUMENT_KEYS.membrane]: [
    'congas', 'bongos', 'timbales', 'cajon', 'surdo', 'pandeiro', 'tamborim', 'tantan',
    'repinique', 'cuica', 'zabumba', 'bata', 'darbuka', 'bodhran', 'taiko', 'paigu', 'tabla',
    'bombo', 'bombo-leguero', 'bombo-andino', 'tambora', 'tambor-alegre', 'cumbia-drum', 'log-drum', 'hand-percussion',
  ],
  [ENGINE_INSTRUMENT_KEYS.kit]: ['drums', 'brush-kit'],
  [ENGINE_INSTRUMENT_KEYS.bodyPercussion]: ['palmas', 'zapateado', 'foot-stomp', 'bones'],
  [ENGINE_INSTRUMENT_KEYS.bass]: [
    'bass', 'upright-bass', 'slap-bass', 'acoustic-bass', 'pick-bass', 'fretless-bass',
    'sub-bass', 'bass-lead', 'guitarron', 'bassoon', 'tuba',
  ],
  [ENGINE_INSTRUMENT_KEYS.subBass]: ['sub-bass', 'log-drum'],
  [ENGINE_INSTRUMENT_KEYS.plucked]: [
    'guitar', 'spanish-guitar', 'acoustic-guitar', 'steel-guitar', '12-string-guitar', 'sitar',
    'koto', 'tres', 'cuatro', 'cavaquinho', 'charango', 'oud', 'bouzouki', 'harp', 'celtic-harp',
    'orchestral-harp', 'banjo', 'mandolin', 'shamisen', 'kora', 'berimbau', 'guqin', 'pipa',
    'guzheng', 'jarana', 'requinto', 'dulcimer', 'slide-guitar', 'vihuela', 'electric-guitar',
    'jazz-guitar', 'distortion-guitar', 'muted-guitar', 'guitar-harmonics', 'overdrive-guitar',
    'guitarron',
  ],
  [ENGINE_INSTRUMENT_KEYS.guitar]: [
    'guitar', 'spanish-guitar', 'acoustic-guitar', 'steel-guitar', '12-string-guitar',
    'electric-guitar', 'jazz-guitar', 'distortion-guitar', 'muted-guitar', 'guitar-harmonics',
    'overdrive-guitar', 'guitarron', 'slide-guitar',
  ],
  [ENGINE_INSTRUMENT_KEYS.electric]: [
    'fm-ep', 'rhodes', 'clavinet', 'electric-guitar', 'distortion-guitar', 'sub-bass', 'synth',
    'synth-brass', 'acid-303', 'synth-strings', 'polysynth',
  ],
  [ENGINE_INSTRUMENT_KEYS.bowed]: ['violin', 'fiddle', 'cello', 'viola', 'erhu', 'jinghu', 'strings', 'slow-strings', 'tremolo-strings', 'pizz-strings'],
  [ENGINE_INSTRUMENT_KEYS.strings]: ['violin', 'fiddle', 'cello', 'viola', 'erhu', 'jinghu', 'strings', 'slow-strings', 'tremolo-strings', 'pizz-strings'],
  [ENGINE_INSTRUMENT_KEYS.winds]: [
    'soprano-sax', 'alto-sax', 'tenor-sax', 'bari-sax', 'oboe', 'english-horn', 'clarinet', 'bassoon',
    'flute', 'piccolo', 'tin-whistle', 'low-whistle', 'quena', 'pan-flute', 'shakuhachi', 'xiao',
    'dizi', 'ryuteki', 'hichiriki', 'recorder', 'ocarina', 'bagpipes', 'uilleann-pipes',
  ],
  [ENGINE_INSTRUMENT_KEYS.brass]: ['trumpet', 'muted-trumpet', 'trombone', 'horn-section', 'brass', 'french-horn', 'tuba'],
  [ENGINE_INSTRUMENT_KEYS.keys]: ['piano', 'rhodes', 'fm-ep', 'organ', 'rock-organ', 'clavinet', 'harpsichord', 'accordion', 'bandoneon', 'concertina', 'harmonium'],
  [ENGINE_INSTRUMENT_KEYS.bellows]: ['accordion', 'bandoneon', 'concertina', 'harmonium'],
  [ENGINE_INSTRUMENT_KEYS.voice]: ['voice', 'choir', 'backing-vocals'],
  [ENGINE_INSTRUMENT_KEYS.electronic]: [
    'synth', 'synth-brass', 'synth-strings', 'saw-lead', 'square-lead', 'polysynth', 'acid-303',
    'warm-pad', 'halo-pad', 'sweep-pad', 'drone', 'noise-sweep', 'dub-echo', 'tape-echo',
    'spring-reverb', 'sampler', 'turntable', 'sub-bass',
  ],
  [ENGINE_INSTRUMENT_KEYS.scraper]: ['guiro', 'guacharaca', 'dikanza', 'cabasa'],
  [ENGINE_INSTRUMENT_KEYS.metalShell]: ['timbales', 'steel-drums', 'tubular-bells', 'steel-guitar', 'cowbell', 'agogo'],
  [ENGINE_INSTRUMENT_KEYS.woodBox]: ['cajon', 'music-box'],
  [ENGINE_INSTRUMENT_KEYS.horn]: ['english-horn', 'horn-section', 'french-horn'],
  [ENGINE_INSTRUMENT_KEYS.reed]: ['clarinet', 'soprano-sax', 'alto-sax', 'tenor-sax', 'bari-sax', 'oboe', 'bassoon', 'hichiriki', 'english-horn'],
  [ENGINE_INSTRUMENT_KEYS.doubleReed]: ['oboe', 'bassoon', 'hichiriki', 'english-horn'],
  [ENGINE_INSTRUMENT_KEYS.fipple]: ['tin-whistle', 'low-whistle', 'recorder'],
  [ENGINE_INSTRUMENT_KEYS.endBlown]: ['quena', 'pan-flute', 'shakuhachi', 'xiao', 'dizi', 'ryuteki', 'ocarina'],
  [ENGINE_INSTRUMENT_KEYS.acousticGuitar]: ['guitar', 'spanish-guitar', 'acoustic-guitar', 'steel-guitar', '12-string-guitar', 'slide-guitar', 'guitarron'],
  [ENGINE_INSTRUMENT_KEYS.jawari]: ['sitar', 'shamisen'],
  [ENGINE_INSTRUMENT_KEYS.tunedPercussion]: ['marimba', 'vibraphone', 'celeste', 'glockenspiel', 'crystal', 'music-box', 'xylophone', 'tubular-bells', 'kalimba', 'steel-drums'],
  [ENGINE_INSTRUMENT_KEYS.freeReed]: ['harmonica', 'melodica', 'sho'],
};

const KEY_BY_ID = new Map<string, Set<InstrumentEngineKey>>();
for (const [key, ids] of Object.entries(EXACT_KEY_IDS) as [InstrumentEngineKey, readonly string[]][]) {
  for (const id of ids) {
    const set = KEY_BY_ID.get(id) ?? new Set<InstrumentEngineKey>();
    set.add(key);
    KEY_BY_ID.set(id, set);
  }
}


export function instrumentEngineKeys(instrumentId: string): readonly InstrumentEngineKey[] {
  return [...(KEY_BY_ID.get(instrumentId) ?? [])];
}

export function instrumentHasKey(instrumentId: string, key: InstrumentEngineKey): boolean {
  return KEY_BY_ID.get(instrumentId)?.has(key) ?? false;
}

export function requireInstrumentKey(instrumentId: string, key: InstrumentEngineKey): void {
  if (!instrumentHasKey(instrumentId, key)) {
    throw new Error(`INSTRUMENT_ENGINE_KEY_MISMATCH: ${instrumentId} does not declare engine key ${key}`);
  }
}

